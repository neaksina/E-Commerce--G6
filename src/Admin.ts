import { AbstractUser } from './User';

export class Admin extends AbstractUser {
    constructor(username: string, email: string, password: string) {
        super(username, email, password);
    }

    public login(): string {
        return `${this.username} admin logged in.`;
    }

    public logout(): string {
        return `${this.username} admin logged out.`;
    }

    public viewStock(): string {
        return "Viewing stock...";
    }

    public addProduct(): string {
        return "Product added.";
    }

    public deleteProduct(): string {
        return "Product deleted.";
    }

    public cancelProduct(): string {
        return "Product cancellation requested.";
    }
}