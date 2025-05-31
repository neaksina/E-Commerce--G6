// Abstract User Class - Base class for all user types
export abstract class AbstractUser {
  constructor(
    public username: string,
    public email: string,
    public password: string
  ) {}
  // Abstract method that must be implemented by subclasses
  abstract getUserType(): string;

  // Common method for all users
  getBasicInfo(): string {
    return `${this.getUserType()}: ${this.username} (${this.email})`;
  }
}