import { Category } from './Category';
import { Discount } from './Discount';
import { Review } from './Review';

export class Product {
    private name: string;
    private price: number;
    public stockQuantity: number;

    public category: Category;
    public discounts: Discount[] = [];
    public reviews: Review[] = []; // Ensure this is public and initialized

    constructor(name: string, price: number, stockQuantity: number, category: Category) {
        this.name = name;
        this.price = price;
        this.stockQuantity = stockQuantity;
        this.category = category;
    }
}