// All enums used in the system
export enum AddressType {
  HOME = "HOME",
  WORK = "WORK",
  BILLING = "BILLING",
  SHIPPING = "SHIPPING"
}

export enum DiscountType {
  PERCENTAGE = "PERCENTAGE",
  FIXED_AMOUNT = "FIXED_AMOUNT"
}
export enum Delivery {
  STANDARD = "STANDARD",
  EXPRESS = "EXPRESS",
  SAMEDAY = "SAMEDAY"
}

export enum CategoryType {
  ELECTRONICS = "ELECTRONICS",
  USB = "USB",
  T_SHIRT = "T-SHIRT",
  CLOTHING = "CLOTHING"
}

export enum OrderStatus {
  PENDING = "PENDING",
  CONFIRMED = "CONFIRMED",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED"
}

export enum PaymentStatus {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  REFUNDED = "REFUNDED"
}
