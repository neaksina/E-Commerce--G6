export class Payment {
    private id: number;
    public amount: string;
    private method: string;
    public status: string;

    constructor(id: number, amount: string, method: string, status: string) {
        this.id = id;
        this.amount = amount;
        this.method = method;
        this.status = status;
    }

    public processPayment(): boolean {
        this.status = "Processed";
        return true;
    }

    public refund(): boolean {
        this.status = "Refunded";
        return true;
    }
}