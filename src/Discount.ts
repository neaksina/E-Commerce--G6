export enum DiscountType {
    PERCENTAGE = 'percentage',
    FIXED = 'fixed'
}

export class Discount {
    private id: number;
    private type: DiscountType;
    private value: number;
    private validFrom: Date;
    private validTo: Date;
    private isValid: boolean;

    constructor(id: number, type: DiscountType, value: number, validFrom: Date, validTo: Date, isValid: boolean) {
        this.id = id;
        this.type = type;
        this.value = value;
        this.validFrom = validFrom;
        this.validTo = validTo;
        this.isValid = isValid;
    }

    public calculateDiscount(): number {
        return this.isValid ? this.value : 0;
    }
}