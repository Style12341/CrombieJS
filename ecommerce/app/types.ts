type Product = {
    id: string;
    name: string;
    price: number;
    image?: string;
    description: string;
    category: Category;
}
type Category = {
    id: string;
    name: string;
}
type User = {
    name: string;
    email: string;
    image?: string;
    favorites: Product[];
}