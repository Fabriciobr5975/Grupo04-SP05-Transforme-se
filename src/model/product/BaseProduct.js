export default class BaseProduct {
    constructor(productId, product, category, price, weight, productQuantity, description) {
        this.productId = productId;
        this.product = product;
        this.category = category;
        this.price = price;
        this.weight = weight;
        this.productQuantity = productQuantity;
        this.description = description;
    }

    // Getters e Setters
    setProductId(productId) { this.productId = productId; }
    getProductId() { return this.productId; }

    setProduct(product) { this.product = product; }
    getProduct() { return this.product; }

    setCategory(category) { this.category = category; }
    getCategory() { return this.category; }

    setPrice(price) { this.price = price; }
    getPrice() { return this.price; }

    setWeight(weight) { this.weight = weight; }
    getWeight() { return this.weight; }

    setProductQuantity(productQuantity) { this.productQuantity = productQuantity; }
    getProductQuantity() { return this.productQuantity; }

    setDescription(description) { this.description = description; }
    getDescription() { return this.description; }
}