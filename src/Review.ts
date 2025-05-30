export class Review {
    private rating: number;
    private comment: string;

    constructor(rating: number, comment: string) {
        this.rating = rating;
        this.comment = comment;
    }
}