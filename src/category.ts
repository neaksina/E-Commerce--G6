import { Product } from './product';

export class Category {
  private products: Product[] = [];

  constructor(
    public id: number,
    public name: string,
    public description: string
  ) {}

  addProduct(product: Product): void {
    this.products.push(product);
    console.log(`Product ${product.name} added to category ${this.name}`);
  }

  getProducts(): Product[] {
    return [...this.products]; // Return copy to prevent external modification
  }

  getProductCount(): number {
    return this.products.length;
  }

  toString(): string {
    return `Category: ${this.name} - ${this.description} (${this.products.length} products)`;
  }
}