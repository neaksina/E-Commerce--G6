export class Shipment {
    private id: number;
    private orderNumber: string;
    private sellerNumber: string;
    private shippedAt: Date;
    private deliveredAt: Date;
    public price: number;

    constructor(id: number, orderNumber: string, sellerNumber: string, shippedAt: Date, deliveredAt: Date, price: number) {
        this.id = id;
        this.orderNumber = orderNumber;
        this.sellerNumber = sellerNumber;
        this.shippedAt = shippedAt;
        this.deliveredAt = deliveredAt;
        this.price = price;
    }

    public calculateDeliveryFee(): number {
        return this.price;
    }

    public getItems(): Shipment[] {
        return [this];
    }

    public updateStatus(status: boolean): boolean {
        return status;
    }
}