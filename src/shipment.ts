export class Shipment {
  constructor(
    public id: number,
    public orderId: number,
    public sellerId: number,
    public shippedAt: Date,
    public deliveredAt: Date | null,
    public estimatedDelivery: Date,
    public price: number
  ) {}

  calculateDeliveryFee(): number {
    return this.price;
  }

  
  updateStatus(status: string): boolean {
    console.log(`Shipment ${this.id} status updated to: ${status}`);
    if (status === "DELIVERED") {
      this.deliveredAt = new Date();
    }
    return true;
  }

  isDelivered(): boolean {
    return this.deliveredAt !== null;
  }

  toString(): string {
    const deliveryStatus = this.isDelivered() ? "Delivered" : "In Transit";
    return `Shipment ${this.id}: Order ${this.orderId} - ${deliveryStatus} ($${this.price})`;
  }
}