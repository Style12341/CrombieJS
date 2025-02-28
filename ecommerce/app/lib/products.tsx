import { Category, Product } from "@prisma/client";
import prisma from "./prisma";

export default async function getProducts(categoryName?: string | null | undefined) {
    if (!categoryName) {
        const products = await prisma.product.findMany({
            include: { category: true },
        });
        const productsDTO: ProductDTO[] = products.map(product => createProductDTO(product));
        return productsDTO;
    }
    const productsWithCategories = await prisma.product.findMany({
        include: { category: true },
        where: {
            category: {
                name: categoryName,
            },
        },
    });
    const productsDTO: ProductDTO[] = productsWithCategories.map(p => createProductDTO(p));
    return productsDTO;
}
export async function getProductsPaginated(page: number, limit: number): Promise<{ pages: number, products: ProductDTO[] }> {
    const productCount = await prisma.product.count();
    limit = limit ?? 4;
    page = page ?? 1;
    limit = Math.max(1, limit);
    const pages = Math.ceil(productCount / limit);
    page = Math.max(1, page);
    page = Math.min(page, pages);
    const products = (await prisma.product.findMany({
        include: { category: true },
        skip: (page - 1) * limit,
        take: limit,
    })).map(p => createProductDTO(p));
    return { pages, products };
}
export async function getProductById(productId: string) {
    const p = await prisma.product.findUnique({
        include: { category: true },
        where: { id: productId },
    });
    if (!p) {
        return null;
    }
    return createProductDTO(p);
}
export async function createProduct(product: ProductDTO) {
    return await prisma.product.create({
        data: {
            name: product.name,
            description: product.description,
            price: product.price,
            categoryId: product.category.id,
        },
    });
}
export async function updateProduct(productId: string, product: ProductDTO) {
    return await prisma.product.update({
        where: { id: productId },
        data: {
            name: product.name,
            description: product.description,
            price: product.price,
            categoryId: product.category.id,
        },
    });
}
export async function deleteProduct(productId: string) {
    return await prisma.product.delete({
        where: { id: productId },
    });
}
type ProductWithCategories = Product & { category: Category | null };

function createProductDTO(product: ProductWithCategories): ProductDTO {
    return {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        image: `/images/product${Math.floor(Math.random() * 4 + 1)}.png`,
        category: { id: product.categoryId ?? "", name: product.category?.name ?? "" },
    };
}