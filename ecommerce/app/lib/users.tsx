import getProducts from "./products";

export default async function getUser() {
    const names = ["John Doe", "Jane Doe", "Alice", "Bob"];
    const emails = ["test@gmail.com", "test1@gmail.com", "test2@gmail.com", "test3@gmail.com"];
    const pictureUrl = `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 30 + 1)}.jpg`
    const products = await getProducts();
    const randomIndex = Math.floor(Math.random() * names.length);
    const productsDTO: ProductDTO[] = products.map((product) => {
        const p: ProductDTO = {
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            category: product.category,
        }
        return p;
    })
    const user: User = {
        name: names[randomIndex],
        email: emails[randomIndex],
        favorites: productsDTO.slice(0, 2),
        image: pictureUrl
    }
    return user;

}