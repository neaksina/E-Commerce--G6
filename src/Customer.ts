import { AbstractUser } from './User';

export class Customer extends AbstractUser {
    private shippingAddress: string;

    constructor(username: string, email: string, password: string, shippingAddress: string) {
        super(username, email, password);
        this.shippingAddress = shippingAddress;
    }
    getShippingAddress():string{
        return this.shippingAddress;
    }
    public login(): string {
        return `${this.username} logged in.`;
    }

    public logout(): string {
        return `${this.username} logged out.`;
    }
}