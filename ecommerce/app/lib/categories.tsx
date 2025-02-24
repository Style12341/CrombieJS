export default function getCategories() {
    const categories: Category[] = [
        {
            id: "1",
            name: "Category1",
        },
        {
            id: "2",
            name: "Category2",
        },
        {
            id: "3",
            name: "Category3",
        }];
    return categories;
}
export function getCategoryById(categoryId: string) {
    const categories = getCategories();
    return categories.find(category => category.id === categoryId);
}