import { PaymentStatus } from './enums';

export class Payment {
  public status: PaymentStatus;

  constructor(
    public id: number,
    public amount: number,
    public method: string
  ) {
    this.status = PaymentStatus.PENDING;
  }

  processPayment(): boolean {
    console.log(`Processing payment of $${this.amount.toFixed(2)} via ${this.method}`);
    this.status = PaymentStatus.COMPLETED;
    console.log(`Payment ${this.id} completed successfully`);
    return true;
  }

  refund(): boolean {
    if (this.status !== PaymentStatus.COMPLETED) {
      console.log(`Cannot refund payment ${this.id} - not completed`);
      return false;
    }
    console.log(`Refunding payment ${this.id} - $${this.amount.toFixed(2)}`);
    this.status = PaymentStatus.REFUNDED;
    return true;
  }


  toString(): string {
    return `Payment ${this.id}: $${this.amount.toFixed(2)} via ${this.method} (${this.status})`;
  }
}