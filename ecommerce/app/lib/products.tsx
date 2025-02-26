import prisma from "./prisma";

export default async function getProducts(categoryName?: string | null | undefined) {
    if (!categoryName) {
        const products = await prisma.product.findMany({
            include: { category: true },
        });
        const productsDTO: Product[] = products.map(product => ({
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            image: `/images/product${Math.floor(Math.random() * 4 + 1)}.png`,
            category: { id: product.categoryId ?? "", name: product.category?.name ?? "" },
        }));
        console.log(productsDTO);
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
    const productsDTO: Product[] = productsWithCategories.map(product => ({
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        image: `/images/product${Math.floor(Math.random() * 4 + 1)}.png`,
        category: { id: product.categoryId ?? "", name: product.category?.name ?? "" },
    }));
    return productsDTO;
}
export async function getProductById(productId: string) {
    const p = await prisma.product.findUnique({
        include: { category: true },
        where: { id: productId },
    });
    if (!p) {
        return null;
    }
    const pDTO: Product = {
        id: p.id,
        name: p.name,
        description: p.description,
        price: p.price,
        image: `/images/product${Math.floor(Math.random() * 4 + 1)}.png`,
        category: { id: p.categoryId ?? "", name: p.category?.name ?? "" },
    }
    return pDTO;
}
export async function createProduct(product: Product) {
    return await prisma.product.create({
        data: {
            name: product.name,
            description: product.description,
            price: product.price,
            categoryId: product.category.id,
        },
    });
}
export async function updateProduct(productId: string, product: Product) {
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