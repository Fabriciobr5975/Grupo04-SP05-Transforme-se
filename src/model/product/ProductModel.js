import BaseProduct from "./BaseProduct";

export default class ProductModel extends BaseProduct {
    constructor(productId, product, category, price, weight, productQuantity, description, insertAt = new Date(), updateOn = new Date(), productSalesQuantity = 0) {
        super(productId, product, category, price, weight, productQuantity, description);
        this.insertAt = insertAt;
        this.updateOn = updateOn;
        this.productSalesQuantity = productSalesQuantity;
        this.images = [];
        this.ingredients = [];
    }

    // Getters e Setters
    setInsertAt(insertAt) { this.insertAt = insertAt; }
    getInsertAt() { return this.insertAt; }

    setUpdateOn(updateOn) { this.updateOn = updateOn; }
    getUpdateOn() { return this.updateOn; }

    setProductSalesQuantity(productSalesQuantity) { this.productSalesQuantity = productSalesQuantity; }
    getProductSalesQuantity() { return this.productSalesQuantity; }

    setImages(images) { this.images = images; }
    getImages() { return [...this.images]; }

    setIngredients(ingredients) { this.ingredients = ingredients; }
    getIngredients() { return [...this.ingredients]; }
}