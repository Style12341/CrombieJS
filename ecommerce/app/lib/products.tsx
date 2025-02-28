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
export async function getProductsPaginated(page: number, limit: number, searchParams: { name: string, categoryId: string } = { name: "", categoryId: "" }): Promise<{ pages: number, products: ProductDTO[] }> {
    const { name, categoryId } = searchParams;

    // Build where clause dynamically based on provided search parameters
    const whereClause: { name?: { contains: string }, categoryId?: string } = {};

    if (name) {
        whereClause.name = { contains: name };
    }

    if (categoryId) {
        whereClause.categoryId = categoryId;
    }

    // Count products with the same filters
    const productCount = await prisma.product.count({ where: whereClause });

    // Normalize pagination parameters
    limit = Math.max(1, limit ?? 4);
    const pages = Math.ceil(productCount / limit);
    page = Math.min(Math.max(1, page ?? 1), pages || 1);

    // Single query with dynamic where clause
    const products = await prisma.product.findMany({
        include: { category: true },
        where: whereClause,
        skip: (page - 1) * limit,
        take: limit,
    });

    return {
        pages,
        products: products.map(p => createProductDTO(p))
    };
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