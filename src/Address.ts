export type AddressType = 'home' | 'work' | 'other';

export class Address {
    private id: number;
    private street: string;
    private city: string;
    private phoneNumber: string;
    private type: AddressType;

    constructor(id: number, street: string, city: string, phoneNumber: string, type: AddressType) {
        this.id = id;
        this.street = street;
        this.city = city;
        this.phoneNumber = phoneNumber;
        this.type = type;
    }

    public getFullAddress(): string {
        return `${this.street}, ${this.city}, Phone: ${this.phoneNumber} (Type: ${this.type})`;
    }
}