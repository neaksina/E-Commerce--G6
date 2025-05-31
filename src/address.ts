import { AddressType } from './enums';

export class Address {
  constructor(
    public id: number,
    public street: string,
    public city: string,
    public phoneNumber: string,
    public type: AddressType
  ) {}

  getFullAddress(): string {
    return `${this.street}, ${this.city} (${this.type}) - Phone: ${this.phoneNumber}`;
  }

  toString(): string {
    return this.getFullAddress();
  }
}