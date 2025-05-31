// E-commerce System - Final TypeScript OOP Implementation

// Enums
enum AddressType {
  HOME = "HOME",
  WORK = "WORK",
  BILLING = "BILLING",
  SHIPPING = "SHIPPING"
}

enum DiscountType {
  PERCENTAGE = "PERCENTAGE",
  FIXED_AMOUNT = "FIXED_AMOUNT"
}

enum Delivery {
  STANDARD = "STANDARD",
  EXPRESS = "EXPRESS",
  SAMEDAY = "SAMEDAY"
}

enum CategoryEnum {
  ELECTRONICS = "ELECTRONICS",
  USB = "USB",
  T_SHIRT = "T-SHIRT",
  CLOTHING = "CLOTHING"
}

// Address Class
class Address {
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
}

// Abstract User Class
abstract class AbstractUser {
  constructor(
    public username: string,
    public email: string,
    public password: string
  ) {}
}

// Admin Class
class Admin extends AbstractUser {
  constructor(username: string, email: string, password: string) {
    super(username, email, password);
  }

  viewStock(): string {
    console.log(`Admin ${this.username} viewing stock...`);
    return "Stock report";
  }

  addProduct(): string {
    console.log(`Admin ${this.username} adding product...`);
    return "Product added";
  }

  deleteProduct(): string {
    console.log(`Admin ${this.username} deleting product...`);
    return "Product deleted";
  }

  cancelProduct(): string {
    console.log(`Admin ${this.username} cancelling product...`);
    return "Product cancelled";
  }
}

// Customer Class
class Customer extends AbstractUser {
  public shippingAddress: string;
  
  constructor(username: string, email: string, password: string) {
    super(username, email, password);
    this.shippingAddress = "";
  }

  login(): string {
    console.log(`Customer ${this.username} logging in...`);
    return "Login successful";
  }

  logout(): string {
    console.log(`Customer ${this.username} logging out...`);
    return "Logout successful";
  }
}

// Seller Class
class Seller extends AbstractUser {
  public products: Product[] = [];
  
  constructor(username: string, email: string, password: string) {
    super(username, email, password);
  }

  getOrders(): string {
    console.log(`Seller ${this.username} getting orders...`);
    return "Orders retrieved";
  }

  getStock(): string {
    console.log(`Seller ${this.username} checking stock...`);
    return "Stock checked";
  }
}

// Review Class
class Review {
  constructor(
    public rate: number,
    public comment: string
  ) {}
}

// Category Class
class Category {
  constructor(
    public id: number,
    public name: string,
    public description: string
  ) {}

  getProducts(): Product[] {
    return [];
  }
}

// Product Class
class Product {
  constructor(
    public name: string,
    public price: number,
    public stockQuantity: number,
    public category?: Category
  ) {}
}

// Discount Class
class Discount {
  constructor(
    public id: number,
    public type: DiscountType,
    public validFrom: Date,
    public validTo: Date,
    public value: number
  ) {}

  calculateDiscount(): number {
    return 0;
  }

  isValid(): boolean {
    return true;
  }
}

// OrderItem Class
class OrderItem {
  constructor(
    public quantity: string,
    public orderId: number
  ) {}
}

// Order Class
class Order {
  constructor(
    public createOrder: Order,
    public cancelItem: Order,
    public reviewProduct: Order,
    public viewTotalPrice: Order,
    public deliveryMethod: Delivery,
    public status: string,
    public invoice: string,
    public totalPrice: number
  ) {}
}

// Payment Class
class Payment {
  constructor(
    public id: number,
    public amount: string,
    public method: string,
    public status: string
  ) {}

  processPayment(): boolean {
    return true;
  }

  refund(): boolean {
    return true;
  }
}

// Shipment Class
class Shipment {
  constructor(
    public id: number,
    public orderId: number,
    public sellerId: number,
    public shippedAt: Date,
    public deliveredAt: Date,
    public estimatedDelivery: Date,
    public price: number
  ) {}

  calculateDeliveryFee(): number {
    return this.price;
  }

  getItems(): any[] {
    return [];
  }

  updateStatus(status: string): boolean {
    return true;
  }
}

// Main function to demonstrate the system
function main(): void {
  console.log("E-commerce System Demonstration");
  
  // Create instances of each class to demonstrate the system
  const admin = new Admin("admin", "admin@example.com", "password");
  const customer = new Customer("customer", "customer@example.com", "password");
  const seller = new Seller("seller", "seller@example.com", "password");
  
  console.log(`Admin created: ${admin.username}`);
  console.log(`Customer created: ${customer.username}`);
  console.log(`Seller created: ${seller.username}`);
  
  // Demonstrate admin operations
  admin.viewStock();
  admin.addProduct();
  admin.deleteProduct();
  admin.cancelProduct();
  
  // Demonstrate customer operations
  customer.login();
  customer.logout();
  
  // Demonstrate seller operations
  seller.getOrders();
  seller.getStock();
}

// Run the demonstration
main();