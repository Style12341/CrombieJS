import prisma from "./prisma";

export default async function getCategories() {
    const categories = await prisma.category.findMany();
    return categories;
}
export async function getCategoryById(categoryId: string) {
    const category = await prisma.category.findUnique({
        where: { id: categoryId },
    });
    return category;
}
export async function createCategory(categoryName: string) {
    return prisma.category.create({
        data: {
            name: categoryName,
        },
    });
}
export async function deleteCategory(categoryId: string) {
    return prisma.category.delete({
        where: { id: categoryId },
    });
}
export async function updateCategory(categoryId: string, categoryName: string) {
    return prisma.category.update({
        where: { id: categoryId },
        data: {
            name: categoryName,
        },
    });
}