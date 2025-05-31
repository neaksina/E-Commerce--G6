
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

// 🖥️ === SYSTEM HEADER ===
console.log("=".repeat(60));
console.log("         E-COMMERCE SYSTEM DEMONSTRATION");
console.log("=".repeat(60));
console.log();

// 🗂️ === 1. CREATING CATEGORIES ===
console.log("1. 📁 CREATING CATEGORIES:");
console.log("-".repeat(30));
const electronicsCategory = new Category(1, "Electronics", "Electronic devices and gadgets");
const clothingCategory = new Category(2, "Clothing", "Apparel and fashion items");
console.log(electronicsCategory.toString());
console.log(clothingCategory.toString());
console.log();

// 🛒 === 2. ADDING PRODUCTS TO CATEGORIES ===
console.log("2. 🧩 ADDING PRODUCTS TO CATEGORIES:");
console.log("-".repeat(30));
const laptop = new Product("Laptop", 1500, 10, electronicsCategory);
const smartphone = new Product("Smartphone", 800, 15, electronicsCategory);
const tshirt = new Product("T-Shirt", 20, 50, clothingCategory);
const jeans = new Product("Jeans", 40, 30, clothingCategory);

electronicsCategory.addProduct(laptop);
electronicsCategory.addProduct(smartphone);
clothingCategory.addProduct(tshirt);
clothingCategory.addProduct(jeans);
console.log();

// 📃 === 3. LISTING PRODUCTS IN EACH CATEGORY ===
console.log("3. 📦 LISTING PRODUCTS IN EACH CATEGORY:");
console.log("-".repeat(30));
console.log(`Products in ${electronicsCategory.name}:`);
electronicsCategory.getProducts().forEach(product =>
    console.log(`- ${product.name} ($${product.price}, Stock: ${product.stockQuantity})`)
);
console.log();
console.log(`Products in ${clothingCategory.name}:`);
clothingCategory.getProducts().forEach(product =>
    console.log(`- ${product.name} ($${product.price}, Stock: ${product.stockQuantity})`)
);
console.log();

// 🎁 === 4. CREATING DISCOUNT ===
console.log("4. 💸 CREATING DISCOUNT:");
console.log("-".repeat(30));
const validFrom = new Date();
const validTo = new Date();
validTo.setDate(validTo.getDate() + 7);
const discount = new Discount(1, DiscountType.PERCENTAGE, validFrom, validTo, 10);
console.log(discount.toString());

// 🧮 === 5. APPLYING DISCOUNT TO PRODUCT PRICE ===
console.log();
console.log("5. ➗ APPLYING DISCOUNT TO PRODUCT PRICE:");
console.log("-".repeat(30));
const originalPrice = laptop.price;
const discountAmount = discount.calculateDiscount(originalPrice);
const finalPrice = originalPrice - discountAmount;
console.log(`Original price: $${originalPrice}`);
console.log(`Discounted price: $${finalPrice.toFixed(2)}`);
console.log();

// 🛠️ === 6. ADMIN ACTIONS ===
console.log("6. 👨‍💼 ADMIN ACTIONS:");
console.log("-".repeat(30));
const admin = new Admin("adminUser", "admin@gmail.com", "admin123");

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

// 🧾 === 7. CUSTOMER INVOICE ===
console.log("7. 🧾 CUSTOMER INVOICE:");
console.log("-".repeat(30));

// 👤 Step 1: Create and login customer
const customer = new Customer("sina", "sina@example.com", "mypassword");
customer.login();

// 🏠 Step 2: Set address
const address = new Address(1, "371 str", "Phnom Penh", "0969780938", AddressType.HOME);
customer.setShippingAddress(address);

// 📦 Step 3: Create order
const order = new Order(1, 12, Delivery.EXPRESS, "ABA");

// 🥣 Step 4: Create products
const rice = new Product("Rice", 2.5, 50);
const fish = new Product("Fish", 4, 20);

// 🛍️ Step 5: Add items to order
const item1 = new OrderItem(3, rice); // 3 x 2.5 = 7.5
const item2 = new OrderItem(2, fish); // 2 x 4 = 8

// 📉 Step 6: Update stock and add items
if (rice.updateStock(-3) && fish.updateStock(-2)) {
  order.addItem(item1);
  order.addItem(item2);

  // 💳 Step 7: Process payment
  const totalAmount = order.calculateTotal();
  const payment = new Payment(1, totalAmount, "ABA");
  payment.processPayment();

  // 🔗 Step 8: Assign payment
  order.payment = payment;

  // ✅ Step 9: Confirm order
  customer.placeOrder(order);
}

// 🌟 Step 10: Add review
const review = new Review(5, "Great service!");
customer.addReview(review);

// 📜 Step 11: View order history
customer.getOrderHistory();

// 🔓 Step 12: Logout
customer.logout();

// 🧾 Step 13: Print invoice
console.log("\n🧾 Invoice Summary:");
order.orderItems.forEach(item => console.log(item.toString()));
console.log(order.payment?.toString());

// 🧑‍💼 === 8. SELLER FUNCTIONALITY ===
console.log("\n8. 🧑‍💼 SELLER FUNCTIONALITY:");
console.log("-".repeat(30));

// 👨‍🌾 Step 1: Create seller
const seller = new Seller("ratana", "ratana@example.com", "sellerpass");

// 🍌 Step 2: Add products
const usb = new Product("USB", 1.5, 100);
const computer = new Product("Computer", 0.8, 120);
seller.addProduct(usb);
seller.addProduct(computer);

// 📦 Step 3: View stock
seller.getStock();

// ❌ Step 4: Remove product
seller.removeProduct("USB");

// 📦 Step 5: View stock again
seller.getStock();
// 🚚 === 9. SHIPMENT PROCESS ===
console.log("\n9. 🚚 SHIPMENT PROCESS:");
console.log("-".repeat(30));

// 👤 Step 1: Create shipment seller
const shipmentSeller = new Seller("sochea", "sochea@example.com", "shipperpass");

// 🍊 Step 2: Add a product
const shirt = new Product("T-shirt", 1.2, 80);
shipmentSeller.addProduct(shirt);

// 🧾 Step 3: Create an order and add product
const shipmentOrder = new Order(2, 15, Delivery.STANDARD, "Wing");
const shipmentItem = new OrderItem(5,shirt); // 5 x 1.2 = 6
shipmentOrder.addItem(shipmentItem);

// ✅ Step 4: Confirm the order
shipmentOrder.confirmOrder();

// 📦 Step 5: Create a shipment
const shipment = new Shipment(
  1,                        // Shipment ID
  shipmentOrder.id,         // Order ID
  101,                      // Seller ID
  new Date(),               // Shipped At
  null,                     // Delivered At
  new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // Estimated delivery (3 days from now)
  2.5                       // Delivery fee
);

// 🔗 Step 6: Attach shipment to order
shipmentOrder.shipments.push(shipment);

// 📤 Step 7: Display shipment info
console.log(shipment.toString());

// 📬 Step 8: Update status to delivered
shipment.updateStatus("DELIVERED");

// 📋 Step 9: Display updated shipment info

console.log(shipment.toString());