
// Enums
enum AddressType{
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

// Address class
class Address {
  id: number;
  street: string;
  city: string;
  phoneNumber: string;
  type: AddressType;

  constructor(id: number, street: string, city: string, phoneNumber: string, type: AddressType) {
    this.id = id;
    this.street = street;
    this.city = city;
    this.phoneNumber = phoneNumber;
    this.type = type;
  }

  getFullAddress(): string {
    return this.street + ", " + this.city + " (" + this.type + ") - Phone: " + this.phoneNumber;
  }
}

// User base class
class User {
  username: string;
  email: string;
  password: string;

  constructor(username: string, email: string, password: string) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
}

// Admin class
class Admin extends User {
  viewStock(): void {
    console.log("Viewing stock...");
  }

  addProduct(): void {
    console.log("Adding product...");
  }

  deleteProduct(): void {
    console.log("Deleting product...");
  }

  cancelProduct(): void {
    console.log("Cancelling product...");
  }
}

// Customer class
class Customer extends User {
  shippingAddress: string = "";

  login(): void {
    console.log("Customer logged in.");
  }

  logout(): void {
    console.log("Customer logged out.");
  }
}

// Seller class
class Seller extends User {
  products: Product[] = [];

  getOrders(): void {
    console.log("Fetching seller orders...");
  }

  getStock(): void {
    console.log("Checking seller stock...");
  }
}

// Review class
class Review {
  rate: number;
  comment: string;

  constructor(rate: number, comment: string) {
    this.rate = rate;
    this.comment = comment;
  }
}
// Category class
class ProductCategory {
  id: number;
  name: string;
  description: string;

  constructor(id: number, name: string, description: string) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}
// Product class
class Product {
  name: string;
  price: number;
  stock: number;

  constructor(name: string, price: number, stock: number) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}

// Discount class
class Discount {
  type: DiscountType;
  value: number;

  constructor(type: DiscountType, value: number) {
    this.type = type;
    this.value = value;
  }

  applyDiscount(price: number): number {
    if (this.type === "PERCENTAGE") {
      return price - (price * this.value) / 100;
    } else {
      return price - this.value;
    }
  }
}

// OrderItem class
class OrderItem {
  productName: string;
  quantity: number;

  constructor(productName: string, quantity: number) {
    this.productName = productName;
    this.quantity = quantity;
  }
}

// Order class
class Order {
  items: OrderItem[];
  deliveryMethod: Delivery;
  totalPrice: number;

  constructor(items: OrderItem[], deliveryMethod: Delivery, totalPrice: number) {
    this.items = items;
    this.deliveryMethod = deliveryMethod;
    this.totalPrice = totalPrice;
  }

  getOrderSummary(): void {
    console.log("Order contains " + this.items.length + " items. Total: $" + this.totalPrice);
  }
}

// Payment class
class Payment {
  amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  process(): void {
    console.log("Payment of $" + this.amount + " processed.");
  }
}
// Shipment class
class Shipment {
  orderId: number;
  deliveryFee: number;

  constructor(orderId: number, deliveryFee: number) {
    this.orderId = orderId;
    this.deliveryFee = deliveryFee;
  }

  track(): void {
    console.log("Tracking shipment for order #" + this.orderId);
  }
}

// Main function to run the system
function main(): void {
  const admin = new Admin("adminUser", "admin@email.com", "123456");
  const customer = new Customer("johnDoe", "john@email.com", "password");
  const seller = new Seller("sellerName", "seller@email.com", "pass123");

  console.log("--- Admin Actions ---");
  admin.viewStock();
  admin.addProduct();

  console.log("--- Customer Actions ---");
  customer.login();

  console.log("--- Seller Actions ---");
  seller.getStock();

  console.log("--- Create Order ---");
  const item1 = new OrderItem("USB Drive", 2);
  const order = new Order([item1], Delivery.STANDARD, 100);
  order.getOrderSummary();
}

main();