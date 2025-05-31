import { AbstractUser } from './abstract-user';
import { Product } from './product';

export class Seller extends AbstractUser {
  public products: Product[] = [];

  constructor(username: string, email: string, password: string) {
    super(username, email, password);
  }

  getUserType(): string {
    return "Seller";
  }

  getOrders(): string {
    console.log(`Seller ${this.username} retrieving orders...`);
    return "Orders retrieved successfully";
  }

  getStock(): string {
    console.log(`Seller ${this.username} checking stock...`);
    const totalStock = this.products.reduce((sum, product) => sum + product.stockQuantity, 0);
    console.log(`Total stock: ${totalStock} units across ${this.products.length} products`);
    return `Stock levels: ${this.products.length} products, ${totalStock} total units`;
  }

  addProduct(product: Product): void {
    this.products.push(product);
    console.log(`Seller ${this.username} added product: ${product.getInfo()}`);
  }

  removeProduct(productName: string): boolean {
    const index = this.products.findIndex(p => p.name === productName);
    if (index > -1) {
      this.products.splice(index, 1);
      console.log(`Seller ${this.username} removed product: ${productName}`);
      return true;
    }
    console.log(`Product ${productName} not found in seller's inventory`);
    return false;
  }
}