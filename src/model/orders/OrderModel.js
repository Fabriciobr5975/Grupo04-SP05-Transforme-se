
export default class OrderModel {
    constructor(orderId = null, orderData = new Date(), deliveryTime = null, orderStatus = OrderStatus.PENDING, totalOrderValue = 0, user, deliveryAddress, addressNumber = "", addressComplement = "", products = []) {
        this.orderId = orderId;
        this.orderData = orderData;
        this.user = user;
        this.deliveryTime = deliveryTime;
        this.orderStatus = orderStatus;
        this.totalOrderValue = totalOrderValue;
        this.deliveryAddress = deliveryAddress;
        this.addressNumber = addressNumber;
        this.addressComplement = addressComplement;
        this.products = products;
    }

    setOrderId(orderId) { this.orderId = orderId; }
    getOrderId() { return this.orderId; }

    setOrderData(orderData) { this.orderData = orderData; }
    getOrderData() { return this.orderData; }

    setDeliveryTime(deliveryTime) { this.deliveryTime = deliveryTime; }
    getDeliveryTime() { return this.deliveryTime; }

    setOrderStatus(orderStatus) { this.orderStatus = orderStatus; }
    getOrderStatus() { return this.orderStatus; }

    setUser(user) { this.user = user; }
    getUser() { return this.user; }

    setTotalOrderValue(totalOrderValue) { this.totalOrderValue = totalOrderValue; }
    getTotalOrderValue() { return this.totalOrderValue; }

    setDeliveryAddress(deliveryAddress) { this.deliveryAddress = deliveryAddress; }
    getDeliveryAddress() { return this.deliveryAddress; }

    setProducts(products) { this.products = products; }
    getProducts() { return [...this.products]; }
}