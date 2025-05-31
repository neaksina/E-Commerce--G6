import { OrderItem } from './order-item';
import { Shipment } from './shipment';
import { Payment } from './payment';
import { Delivery, OrderStatus } from './enums';

export class Order {
  public orderItems: OrderItem[] = [];
  public shipments: Shipment[] = [];
  public payment?: Payment;
  public status: OrderStatus;
  constructor(
    public id: number,
    public customerId: number,
    public deliveryMethod: Delivery,
    public invoice: string
  ) {
    this.status = OrderStatus.PENDING;
  }

  addItem(item: OrderItem): void {
    item.orderId = this.id;
    this.orderItems.push(item);
    console.log(`Added ${item.quantity} of ${item.product.name} to order ${this.id}`);
  }

  removeItem(productName: string): boolean {
    const index = this.orderItems.findIndex(item => item.product.name === productName);
    if (index > -1) {
      this.orderItems.splice(index, 1);
      console.log(`Removed ${productName} from order ${this.id}`);
      return true;
    }
    console.log(`Product ${productName} not found in order ${this.id}`);
    return false;
  }

  calculateTotal(): number {
    return this.orderItems.reduce((total, item) => {
      return total + item.getSubTotal();
    }, 0);
  }

  confirmOrder(): void {
    this.status = OrderStatus.CONFIRMED;
    console.log(`Order ${this.id} confirmed with total: $${this.calculateTotal().toFixed(2)}`);
  }

  cancelOrder(): void {
    this.status = OrderStatus.CANCELLED;
    console.log(`Order ${this.id} cancelled`);
  }

  
  toString(): string {
    return `Order ${this.id}: ${this.orderItems.length} items, Total: $${this.calculateTotal().toFixed(2)} (${this.status})`;
  }
}