
 import { AbstractUser } from "./abstract-user";
import { Address } from "./address";
import { Admin } from "./admin";
import { Category } from "./category";
import { Customer } from "./customer";
import { Discount } from "./discount";
import { DiscountType, OrderStatus, PaymentStatus, AddressType, Delivery } from "./enums";
import { Product } from "./product";
import { Order } from "./order";
import { OrderItem } from "./order-item";
import { Payment } from "./payment";
import { Review } from "./review";
import { Seller } from "./seller";
import { Shipment } from "./shipment";

// === SYSTEM HEADER ===
console.log("=".repeat(60)); 
console.log("         E-COMMERCE SYSTEM DEMONSTRATION"); 
console.log("=".repeat(60)); 
console.log(); 

// === 1. CREATING CATEGORIES === 
console.log("1. CREATING CATEGORIES:");
console.log("-".repeat(30)); 
const electronicsCategory = new Category(1, "Electronics", "Electronic devices and gadgets"); 
const clothingCategory = new Category(2, "Clothing", "Apparel and fashion items"); 
console.log(electronicsCategory.toString());  
console.log(clothingCategory.toString()); 
console.log(); 

// === 2. ADDING PRODUCTS TO CATEGORIES ===
console.log("2. ADDING PRODUCTS TO CATEGORIES:"); 
console.log("-".repeat(30)); 
const laptop = new Product("Laptop", 1500, 10, electronicsCategory); 
const smartphone = new Product("Smartphone", 800, 15, electronicsCategory); 
const tshirt = new Product("t-shirt", 20, 50, clothingCategory); 
const USB = new Product("USB", 40, 30, clothingCategory); 

electronicsCategory.addProduct(laptop); 
electronicsCategory.addProduct(smartphone); 
clothingCategory.addProduct(tshirt); 
clothingCategory.addProduct(USB); 
console.log();

// === 3. LISTING PRODUCTS IN EACH CATEGORY === 
console.log("3. LISTING PRODUCTS IN EACH CATEGORY:");
console.log("-".repeat(30));
console.log("Products in " + electronicsCategory.name + ":");
electronicsCategory.getProducts().forEach(product =>
    console.log("- " + product.name + " (" + product.price + ", Stock: " + product.stockQuantity + ")")
);
console.log();
console.log("Products in " + clothingCategory.name + ":");
clothingCategory.getProducts().forEach(product =>
    console.log("- " + product.name + " (" + product.price + ", Stock: " + product.stockQuantity + ")")
);
console.log();

// === 4. CREATING DISCOUNT ===
console.log("4. CREATING DISCOUNT:");
console.log("-".repeat(30));
const validFrom = new Date();
const validTo = new Date();
validTo.setDate(validTo.getDate() + 7);
const discount = new Discount(1, DiscountType.PERCENTAGE, validFrom, validTo, 10);
console.log(discount.toString());

// === 5. APPLYING DISCOUNT TO PRODUCT PRICE ===
console.log();
console.log("5. APPLYING DISCOUNT TO PRODUCT PRICE:");
console.log("-".repeat(30));
const originalPrice = laptop.price;
const discountAmount = discount.calculateDiscount(originalPrice);
const finalPrice = originalPrice - discountAmount;
console.log("Original price: " + originalPrice);
console.log("Discounted price: " + finalPrice.toFixed(2));
console.log();

// === 6. ADMIN ACTIONS ===
console.log("6. ADMIN ACTIONS:");
console.log("-".repeat(30));
const admin = new Admin("adminUser", "admin@email.com", "admin123");

const tablet = new Product("Tablet", 600, 25, electronicsCategory);
const addMessage = admin.addProduct(tablet);
electronicsCategory.addProduct(tablet);
console.log(addMessage);

const stockReport = admin.viewStock();
console.log(stockReport);

const deleteMessage = admin.deleteProduct("Tablet");
console.log(deleteMessage);

const cancelMessage = admin.cancelProduct("Smartphone");
console.log(cancelMessage);
console.log();

// === 7. CUSTOMER INVOICE ===
console.log("7. CUSTOMER INVOICE:");
console.log("-".repeat(30));

const customer = new Customer("sina", "sina@email.com", "mypassword"); 
customer.login();

const address = new Address(1, "371 str", "Phnom Penh", "0969780980", AddressType.HOME);
customer.setShippingAddress(address);

const order = new Order(1, 12, Delivery.EXPRESS, "ABA");

// Step 4: Create products
let usbs = new Product("Mouse", 2.5, 50);
const computers = new Product("computers", 4, 20);

const item1 = new OrderItem(3, usbs);
const item2 = new OrderItem(2, computers);

if (usbs.updateStock(-3) && computers.updateStock(-2)) {
  order.addItem(item1);
  order.addItem(item2);

  const totalAmount = order.calculateTotal();
  const payment = new Payment(1, totalAmount, "ABA");
  payment.processPayment();

  order.payment = payment;

  customer.placeOrder(order);
}

const review = new Review(5, "Great service!");
customer.addReview(review);

customer.getOrderHistory();

customer.logout();

console.log("\nInvoice Summary:");
order.orderItems.forEach(item => console.log(item.toString()));
console.log(order.payment?.toString());

// === 8. SELLER FUNCTIONALITY ===
console.log("\n8. SELLER FUNCTIONALITY:");
console.log("-".repeat(30));

const seller = new Seller("ratana", "ratana@email.com", "sellerpass");

const usb = new Product("USB", 1.5, 100);
const computer = new Product("Computer", 0.8, 120);
seller.addProduct(usb);
seller.addProduct(computer);

seller.getStock();

seller.removeProduct("USB");

seller.getStock();

// === 9. SHIPMENT PROCESS ===
console.log("\n9.  SHIPMENT PROCESS:");
console.log("-".repeat(30));

const shipmentSeller = new Seller("Thavry", "thavry@email.com", "shipperpass");

const shirt = new Product("T-shirt", 1.2, 80);
shipmentSeller.addProduct(shirt);

const shipmentOrder = new Order(2, 15, Delivery.STANDARD, "Wing");
const shipmentItem = new OrderItem(5, shirt);
shipmentOrder.addItem(shipmentItem);

shipmentOrder.confirmOrder();

const shipment = new Shipment(
  1,
  shipmentOrder.id,
  101,
  new Date(),
  null,
  new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
  2.5
);

shipmentOrder.shipments.push(shipment);

console.log(shipment.toString());

shipment.updateStatus("DELIVERED");

console.log(shipment.toString());
