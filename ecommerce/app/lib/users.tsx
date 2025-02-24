import getProducts from "./products";

export default function getUser(): User {
    const names = ["John Doe", "Jane Doe", "Alice", "Bob"];
    const emails = ["test@gmail.com", "test1@gmail.com", "test2@gmail.com", "test3@gmail.com"];
    const pictureUrl = `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 30 + 1)}.jpg`
    const products = getProducts();
    const randomIndex = Math.floor(Math.random() * names.length);

    return ({
        name: names[randomIndex],
        email: emails[randomIndex],
        favorites: products.slice(0, 2),
        image: pictureUrl
    })

}