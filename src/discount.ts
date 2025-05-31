import { DiscountType } from './enums';

export class Discount {
  constructor(
    public id: number,
    public type: DiscountType,
    public validFrom: Date,
    public validTo: Date,
    public value: number
  ) {}
  calculateDiscount(amount: number): number {
    if (!this.isValid()) {
      console.log(`Discount ${this.id} is not valid`);
      return 0;
    }
    
    if (this.type === DiscountType.PERCENTAGE) {
      const discountAmount = amount * (this.value / 100);
      console.log(`Percentage discount applied: ${this.value}% = $${discountAmount.toFixed(2)}`);
      return discountAmount;
    } else {
      const discountAmount = Math.min(this.value, amount);
      console.log(`Fixed discount applied: $${discountAmount.toFixed(2)}`);
      return discountAmount;
    }
  }

  isValid(): boolean {
    const now = new Date();
    return now >= this.validFrom && now <= this.validTo;
  }

  toString(): string {
    const typeStr = this.type === DiscountType.PERCENTAGE ? `${this.value}%` : `$${this.value}`;
    return `Discount ${this.id}: ${typeStr} (Valid: ${this.isValid()})`;
  }
}