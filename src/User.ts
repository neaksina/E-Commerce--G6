export abstract class AbstractUser {
    protected username: string;
    protected email: string;
    protected password: string;

    constructor(username: string, email: string, password: string) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    abstract login(): string;
    abstract logout(): string;
}