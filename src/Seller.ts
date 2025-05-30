import { Product } from './Product';

export class Seller {
    private products: Product[] = [];

    // Method to add a product
    public addProduct(product: Product): void {
        this.products.push(product);
    }

    public getOrders(): string {
        return "Fetching orders...";
    }

    public getStock(): string {
        return "Checking stock...";
    }

    // Method to get the products array
    public getProducts(): Product[] {
        return this.products;
    }
}