"use strict";
import {
    cartUpdate,
    cartDelete,
    calculateTotalProductPrice,
    calculateTotalFreightPrice,
} from "../../../services/CartService.js";

export function useCheckout() {
    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));
    const userCart = JSON.parse(sessionStorage.getItem("userCart")) ?? [];
    let totalPriceCart = calculateTotalProductPrice(userCart);
    let totalFreightPriceCart = calculateTotalFreightPrice(userCart);

    const removeProductFromCart = (productId) => {
        const numericId = Number(productId);
        if (!Number.isInteger(numericId)) return;

        const productRemoved = userCart.find((p) => p.productId === numericId);
        const newProducts = userCart.filter((product) => product !== productRemoved);

        userCart.splice(0, userCart.length, ...newProducts);

        totalPriceCart = calculateTotalProductPrice(userCart);
        totalFreightPriceCart = calculateTotalFreightPrice(userCart);

        const itemsContainer = document.querySelector(".checkout-page__review-list");
        if (!itemsContainer) return;

        itemsContainer.innerHTML = newProducts.length > 0
            ? newProducts.map(renderCartItem).join("")
            : cartCheckoutProductHTML();

        handleProductPrices(newProducts);
        // cartDelete(productRemoved);
    };

    const handleProductPrices = (products) => {
        renderNewPrices(calculateTotalProductPrice(products), totalFreightPriceCart);
    }

    function updateQuantityDisplay(productId, newValue) {
        const quantity = document.querySelector(`#checkout-product__quantity-${productId}`);
        if (!quantity) return;
        quantity.textContent = newValue;
    }

    function updateProductQuantity(productId, change) {
        if (!Array.isArray(userCart)) return;

        const productIndex = userCart.findIndex((product) => product.productId === Number(productId));
        if (productIndex === -1) return;

        const product = userCart[productIndex];
        const nextQuantity = Math.min(99, Math.max(1, product.quantity + change));

        product.quantity = nextQuantity;
        updateQuantityDisplay(product.productId, nextQuantity);
        handleProductQuantity(userCart);
        cartUpdate(product);
    }

    function handleProductQuantityIncrease(event) {
        const button = event.currentTarget;
        const productId = button.dataset.productId;
        updateProductQuantity(productId, 1);
    }

    function handleProductQuantityDecrease(event) {
        const button = event.currentTarget;
        const productId = button.dataset.productId;
        updateProductQuantity(productId, -1);
    }

    function handleProductRemove(event) {
        const button = event.currentTarget;
        const productId = button.dataset.productId;
        removeProductFromCart(productId);
    }

    document.addEventListener("click", () => {
        const increaseButtons = document.querySelectorAll(".increase-quantity");
        const decreaseButtons = document.querySelectorAll(".decrease-quantity");
        const removeProductButton = document.querySelectorAll(".checkout-page__button--remove");

        increaseButtons.forEach((button) => button.addEventListener("click", handleProductQuantityIncrease));
        decreaseButtons.forEach((button) => button.addEventListener("click", handleProductQuantityDecrease));
        removeProductButton.forEach((button) => button.addEventListener("click", handleProductRemove));
    });

    return { user, userCart, totalPriceCart, totalFreightPriceCart };
}

function renderCartItem(product) {
    return `
      <article class="checkout-page__review-item">
        <img 
          class="checkout-page__review-image" 
          src="${product.image}" 
          alt="Imagem do produto ${product.name}"
        />

        <div class="checkout-page__review-info">
          <p class="checkout-page__review-name">${product.name}</p>

          <div class="checkout-page__quantity-input">
            <button 
              type="button" 
              id="decrease-quantity-${product.productId}"
              data-product-id="${product.productId}" 
              class="checkout-page__quantity-button decrease-quantity"
            >
              -
            </button>
            <span 
              id="checkout-product__quantity-${product.productId}" 
              class="checkout-page__quantity-value"
            >
              ${product.quantity}
            </span>
            <button 
              type="button" 
              id="increase-quantity-${product.productId}"
              data-product-id="${product.productId}"
              class="checkout-page__quantity-button increase-quantity"
            >
              +
            </button>
          </div>
          <div class="checkout-page__summary-row">
            <span>Frete:</span>
            <strong class=${product.freight === 0 ? "checkout__item-freight--free" : "checkout__item-freight--paid"}> ${product.freight === 0 ? "Grátis" : `R$ ${product.freight.toFixed(2).replace(".", ",")}`}</strong>
          </div>
        </div>

        <div class="checkout-page__review-extra-info">
          <button  
            id="remove-product-${product.productId}" 
            data-product-id="${product.productId}"
            type="button" 
            class="checkout-page__button--remove"
          >
            <i class="fa-regular fa-trash-can"></i>
          </button>

          <div class="checkout-page__review-price">
            <strong>R$ ${product.unitPrice.toFixed(2).replace(".", ",")}</strong>
          </div>
        </div>
      </article>
    `
}

function renderNewPrices(totalPrice, totalFreightPrice) {
    const checkoutCartItems = document.querySelector(".checkout-page__summary-row--total");
    
    if (!checkoutCartItems) return;

    checkoutCartItems.innerHTML = `
      <span>Subtotal:</span>
        <strong>R$ ${(totalPrice + totalFreightPrice).toFixed(2).replace(".", ",")}</strong>
        <p class="checkout-page__prices-info">Produtos: ${totalPrice.toFixed(2).replace(".", ",")}</p>
        <p class="checkout-page__prices-info">Frete: ${totalFreightPrice.toFixed(2).replace(".", ",")}</p>
      </div>
    `
}

export function cartCheckoutProductHTML() {
    return (`
      <p class="checkout-page__info-cart--empty">Você não tem produtos para finalizar a compra</p>
    `);
}