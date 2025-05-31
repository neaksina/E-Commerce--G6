export class Review {
  constructor(
    public rate: number,
    public comment: string,
    public customerId?: number,
    public productId?: number
  ) {
    // Validate rating
    if (rate < 1 || rate > 5) {
      throw new Error("Rating must be between 1 and 5");
    }
  }
  

  toString(): string {
    return `Review: ${this.rate}/5 stars - "${this.comment}"`;
  }
}