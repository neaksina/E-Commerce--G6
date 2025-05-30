import { OrderItem } from './OrderItem';
import { Shipment } from './Shipment';
import { Payment } from './Payment';

export class Order {
    public orderNumber: string;
    private customerOrderDate: string;
    public status: string;
    private invoice: string;
    private totalPrice: number;

    public orderItems: OrderItem[] = [];
    public shipment?: Shipment;
    public payment?: Payment;

    constructor(orderNumber: string, customerOrderDate: string, status: string, invoice: string, totalPrice: number) {
        this.orderNumber = orderNumber;
        this.customerOrderDate = customerOrderDate;
        this.status = status;
        this.invoice = invoice;
        this.totalPrice = totalPrice;
    }

    public cancelOrder(): void {
        this.status = "Cancelled";
    }

    public reviewProduct(): void {
        // Logic to review product
    }

    public viewTotalPrice(): number {
        return this.totalPrice;
    }
    
}