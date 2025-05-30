import { Product } from './Product';

export class OrderItem {
    public quantity: number;
    private product: Product;
    private stockQuantity: number;

    constructor(quantity: number, product: Product, stockQuantity: number) {
        this.quantity = quantity;
        this.product = product;
        this.stockQuantity = stockQuantity;
    }
}