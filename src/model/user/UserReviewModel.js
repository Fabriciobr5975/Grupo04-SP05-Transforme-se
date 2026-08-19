export default class UserReviewModel {
    constructor(reviewId, product, review, commentary, insertAt = new Date(), updateOn = new Date()) {
        this.reviewId = reviewId;
        this.product = product;
        this.review = review;
        this.commentary = commentary ?? "";
        this.insertAt = insertAt;
        this.updateOn = updateOn;
    }

    // Getters e Setters
    getReviewId(reviewId) { return this.reviewId };

    setProduct(product) { this.product = product; }
    getProduct() { return this.product; }

    setReview(review) { this.review = review; }
    getReview() { return this.review; }

    setCommentary(commentary) { this.commentary = commentary; }
    getCommentary() { return this.commentary; }

    setInsertAt(insertAt) { this.insertAt = insertAt; }
    getInsertAt() { return this.insertAt; }

    setUpdateOn(updateOn) { this.updateOn = updateOn; }
    getUpdateOn() { return this.updateOn; }
}