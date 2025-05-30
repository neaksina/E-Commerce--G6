import { Customer } from './Customer';
import { Admin } from './Admin';
import { Product } from './Product';
import { Category } from './Category';
import { CategoryEnum, AddressType, DiscountType } from './Enum';
import { Order } from './Order';
import { OrderItem } from './OrderItem';
import { Shipment } from './Shipment';
import { Payment } from './Payment';
import { Address } from './Address';
import { Discount } from './Discount';
import { Review } from './Review';
import { Seller } from './Seller';

// Create an Address
const address = new Address(1, "123 Main St", "Hanoi", "123-456-7890", AddressType.HOME);
console.log("Customer Address:", address.getFullAddress());

// Create a Customer
const customer = new Customer("john_doe", "john@example.com", "password123", address.getFullAddress());
console.log("Customer Login:", customer.login());

// Create an Admin
const admin = new Admin("admin_user", "admin@example.com", "adminpass");
console.log("Admin Login:", admin.login());
console.log("Admin View Stock:", admin.viewStock());
console.log("Admin Add Product:", admin.addProduct());
console.log("Admin Logout:", admin.logout());

// Create a Category
const electronics = new Category(1, CategoryEnum.ELECTRONICS, "Electronic items");
console.log("Category Created:", electronics);
console.log("Number of Products in Category:", electronics.getProducts().length);

// Create a Product
const laptop = new Product("Laptop", 1000, 10, electronics);
console.log("Product Created:", laptop);
console.log("Product Category:", laptop.category); // Log category directly as an object
console.log("Initial Number of Discounts on Product:", laptop.discounts.length);
console.log("Initial Number of Reviews on Product:", laptop.reviews.length);

// Add a Discount to the Product
const discount = new Discount(1, DiscountType.PERCENTAGE, 10, new Date("2025-05-01"), new Date("2025-12-31"), true);
laptop.discounts = [discount]; // Ensure array is not nested
console.log("Discount Applied to Product:", discount);
console.log("Number of Discounts on Product:", laptop.discounts.length);

// Add a Review to the Product
const review = new Review(4, "Great product!");
laptop.reviews = [review]; // Ensure array is not nested
console.log("Review Added to Product:", review);
console.log("Reviews Array Content:", laptop.reviews);
console.log("Number of Reviews on Product:", laptop.reviews.length);

// Create an Order
const order = new Order("ORD001", "2025-05-30", "Pending", "INV001", 1000);
console.log("Order Created:", order.orderNumber);
console.log("Number of OrderItems in Order (before adding):", order.orderItems.length);

// Add OrderItem to the Order
const orderItem = new OrderItem(2, laptop, laptop.stockQuantity);
order.orderItems.push(orderItem);
console.log("OrderItem Added - Quantity:", orderItem.quantity);
console.log("Number of OrderItems in Order (after adding):", order.orderItems.length);

// Create a Shipment
const shipment = new Shipment(1, "ORD001", "SELLER001", new Date("2025-05-31"), new Date("2025-06-02"), 50);
order.shipment = shipment;
console.log("Shipment Created for order:", shipment.price);
console.log("Delivery Fee:", shipment.calculateDeliveryFee());
console.log("Shipment Items:", shipment.getItems().length);
console.log("Shipment Status Updated:", shipment.updateStatus(true));

// Create a Payment
const payment = new Payment(1, "1000", "Credit Card", "Pending");
order.payment = payment;
console.log("Payment Created - Amount:", payment.amount);
console.log("Payment Status:", payment.status);
console.log("Payment Processed:", payment.processPayment());
console.log("Payment Status After Processing:", payment.status);
console.log("Payment Refunded:", payment.refund());
console.log("Payment Status After Refund:", payment.status);

// Create a Seller and add the product
const seller = new Seller();
console.log("Number of Products in Seller (before adding):", seller.getProducts().length);
seller.addProduct(laptop); // Add the laptop to the seller
console.log("Seller Created:", seller);

// Log Seller's products with counts for discounts and reviews
seller.getProducts().forEach((product, index) => {
    console.log(`Seller Product ${index + 1}:`, product);
    console.log(`Number of Discounts on Seller Product ${index + 1}:`, product.discounts.length);
    console.log(`Number of Reviews on Seller Product ${index + 1}:`, product.reviews.length);
});
console.log("Number of Products in Seller (after adding):", seller.getProducts().length);
console.log("Seller Orders:", seller.getOrders());
console.log("Seller Stock:", seller.getStock());

console.log("=== E-commerce System Test Completed ===");