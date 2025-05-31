import { Category } from './category.js';

export class Product {
  constructor(
    public name: string,
    public price: number,
    public stockQuantity: number,
    public category?: Category
  ) {}

  updateStock(quantity: number): boolean {
    if (this.stockQuantity + quantity < 0) {
      console.log(`Insufficient stock for ${this.name}`);
      return false;
    }
    this.stockQuantity += quantity;
    console.log(`Stock updated for ${this.name}: ${this.stockQuantity} units`);
    return true;
  }

  isInStock(): boolean {
    return this.stockQuantity > 0;
  }

  getInfo(): string {
    return `${this.name} - $${this.price} (Stock: ${this.stockQuantity})`;
  }

  toString(): string {
    return this.getInfo();
  }
}