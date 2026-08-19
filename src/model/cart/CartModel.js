export default class CartModel {
    constructor(user, quantity, products = []) {
        this.user = user;
        this.quantity = quantity;  
        this.products = products;
    }

    // Getters e Setters
    getUser() { return user; }
    
    setQuantity(quantity) { this.quantity = quantity; }
    getQuantity() { return this.quantity; }

    setProduct(products) { this.products = products; }
    getProduct() { return [...this.products]; }
}