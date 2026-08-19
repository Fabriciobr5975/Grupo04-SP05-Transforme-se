"use strict";
import { orders } from "../../../../seeds/orders.js";

export function useOrders() {
    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));
    const userOrders = orders.filter(order => order.user.userId === user.userId) ?? [];

    if (userOrders.length === 0) {
        return { userOrders: [] };
    }

    const formattedOrders = userOrders.map(order => ({
        ...order,
        orderData: buildOrderDate(order.orderData),
        deliveryTime: buildOrderDate(order.deliveryTime),
    }));


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