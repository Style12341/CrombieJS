import getCategories from "./categories"

export default function getProducts(categoryId: string | null | undefined) {
    const categories = getCategories();
    const products: Product[] = [
        {
            id: "1",
            name: "Product 1",
            price: 100,
            description: "This is a description for product 1",
            category: categories[0]
        },
        {
            id: "2",
            name: "Product 2",
            price: 200,
            description: "This is a description for product 2",
            category: categories[1]

        },
        {
            id: "3",
            name: "Product 3",
            price: 300,
            description: "This is a description for product 3",
            category: categories[0]

        },
        {
            id: "4",
            name: "Product 4",
            price: 400,
            description: "This is a description for product 4",
            category: categories[2]

        },
    ]
    const result = categoryId ? filterProductsByCategory(products, categoryId) : products;
    return result;
}
function filterProductsByCategory(products: Product[], categoryId: string) {
    return products.filter(product => product.category.id === categoryId);
}