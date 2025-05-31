import { Product } from './product';

export class OrderItem {
  constructor(
    public quantity: number,
    public product: Product,
    public orderId?: number
  ) {}

  getSubTotal(): number {
    return this.quantity * this.product.price;
  }

  toString(): string {
    return `${this.quantity}x ${this.product.name} = $${this.getSubTotal().toFixed(2)}`;
  }
}