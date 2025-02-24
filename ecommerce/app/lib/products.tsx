import getCategories from "./categories"

export default function getProducts(categoryName?: string | null | undefined) {
    const categories = getCategories();
    const products: Product[] = [
        {
            id: "1",
            name: "Product 1",
            price: 100,
            description: "This is a description for product 1",
            category: categories[0],
            image: "/images/product1.png"
        },
        {
            id: "2",
            name: "Product 2",
            price: 200,
            description: "This is a description for product 2",
            category: categories[1],
            image: "/images/product2.png"
        },
        {
            id: "3",
            name: "Product 3",
            price: 300,
            description: "This is a description for product 3",
            category: categories[0],
            image: "/images/product3.png"
        },
        {
            id: "4",
            name: "Product 4",
            price: 400,
            description: "This is a description for product 4",
            category: categories[2],
            image: "/images/product4.png"

        },
    ]
    const result = categoryName ? filterProductsByCategory(products, categoryName) : products;
    return result;
}
export function getProductById(productId: string) {
    const products = getProducts();
    return products.find(product => product.id === productId);
}
function filterProductsByCategory(products: Product[], categoryName: string) {
    return products.filter(product => product.category.name === categoryName);
}