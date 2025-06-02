import { AbstractUser } from './abstract-user' ;
import { Product } from './product' ;

export class Admin extends AbstractUser{
  constructor(username: string, email: string, password: string){
    super(username, email, password);
  }
  getUserType(): string {
    return "Admin";
  }

  viewStock(): string {
    console.log(`Admin ${this.username} viewing stock levels....`);
    return "Stock report generated"; 
  }

  addProduct(product: Product): string{
    console.log(`Admin ${this.username} added product: ${product.name}`);
    return `Product ${product.name} added successfully`;
  }

  deleteProduct(productName: string): string{
    console.log(`Admin ${this.username} deleted product: ${productName}`);
    return `Product ${productName} deleted successfully`;
  }

  cancelProduct(productName: string): string{
     console.log(`Admin ${this.username} cancelled product: ${productName}`);
     return `Product ${productName} cancelled successfully`;
  }
}