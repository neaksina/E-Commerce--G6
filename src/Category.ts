import { Product } from './Product';
import { CategoryEnum } from './Enum';

export class Category {
    private id: number;
    private name: string;
    private description: string;

    public products: Product[] = [];

    constructor(id: number, name: string, description: string) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    public getProducts(): Product[] {
        return this.products;
    }
}