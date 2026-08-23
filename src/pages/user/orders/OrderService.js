"use strict";

export function useOrders() {
    const userOrders = JSON.parse(sessionStorage.getItem("orders")) ?? [];

    const formattedOrders = userOrders.map(order => ({
        ...order,
        orderData: buildOrderDate(order.orderData),
        deliveryTime: buildOrderDate(order.deliveryTime),
    }));

    document.addEventListener("click", (event) => {
        const button = event.target.closest(".orders-page__button--ghost");
        if (!button) return;

        const productId = Number(button.dataset.productId);
        const orderId = Number(button.dataset.orderId);

        if (!Number.isInteger(productId) || !Number.isInteger(orderId)) return;

        const order = userOrders.find((currentOrder) => currentOrder.orderId === orderId);
        const product = order?.products.find((currentProduct) => currentProduct.productId === productId);
        if (!product) return;

        sessionStorage.setItem("feedbackProduct", JSON.stringify(product));
        window.navigateTo("/profile/feedback");
    });

    return {
        userOrders: formattedOrders,
        productsCount: formattedOrders.reduce((acc, order) => acc + order.products.length, 0) ?? 0,
        orderCount: formattedOrders.length ?? 0,
    };
}

function buildOrderDate(dateString) {
    const date = new Date(dateString).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });

    return date;
}