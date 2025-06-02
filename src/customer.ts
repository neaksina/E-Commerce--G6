import { AbstractUser } from "./abstract-user";
import { Address } from "./address";
import { Order } from "./order";
import { Review } from "./review";


export class Customer extends AbstractUser {
  public shippingAddress?: Address;
  public orders: Order[]= [];
  public reviews: Review[]= [];

  constructor(
    username: string,
    email: string,
    password: string,
  ) {
    super(username, email, password);
  }
  getUserType(): string 
  {
    return "Customer";
  }

  login(): string 
  {
    console.log(`Customer ${this.username} logged in Successfully`);
    return "Login Successful";
  }

  logout(): string
  {
    console.log(`Customer ${this.username} logged out Successfully`);
    return "Logout Successful";
  }

  setShippingAddress(address: Address): void{
    this.shippingAddress= address;
    console.log(`Shipping address set for ${this.username}: ${address.getFullAddress()}`);
  }

  placeOrder(order: Order): void{
    this.orders.push(order);
    order.confirmOrder();
    console.log(`Customer ${this.username} placed order${order.id}`);
  }

  addReview(review: Review): void{
    this.reviews.push(review);
    console.log(`Customer ${this.username} added review: ${review.toString()}`);
  }

  getOrderHistory(): string{
    console.log(`Customer ${this.username} has ${this.orders.length} orders`);
    return `Order history: ${this.orders.length} orders`;
  }

}
