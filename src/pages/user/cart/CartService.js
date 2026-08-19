"use strict";
import { carts } from "../../../../seeds/carts.js";
import { calculateTotalProductPrice, calculateTotalFreightPrice, calculeQuantityOfProducts } from "../../../services/CartService.js";

export function useCart() {
    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));
    const userCart = carts.filter(cart => cart.user.userId === user.userId)[0] ?? {};
    const productsCart = userCart.products;

    let totalPriceCart = calculateTotalProductPrice(productsCart);
    let totalFreightPriceCart = calculateTotalFreightPrice(productsCart);
    let quantityOfProducts = calculeQuantityOfProducts(productsCart);

    const removeProductFromCart = (productId) => {
        const numericId = Number(productId);
        if (!Number.isInteger(numericId)) return;

        const newProducts = productsCart.filter((product) => product.productId !== numericId);

        productsCart.splice(0, productsCart.length, ...newProducts);

        totalPriceCart = calculateTotalProductPrice(productsCart);
        totalFreightPriceCart = calculateTotalFreightPrice(productsCart);

        const itemsContainer = document.querySelector(".cart-page__items");
        if (!itemsContainer) return;

        itemsContainer.innerHTML = newProducts.length > 0
            ? newProducts.map(renderCartItem).join("")
            : cartEmptyHTML();

        handleProductQuantity(newProducts); 
    };

    const clearCart = () => {
        const itemsContainer = document.querySelector(".cart-page__items");
        if (!itemsContainer) return;
        productsCart.slice(0, productsCart.length);
        itemsContainer.innerHTML = cartEmptyHTML();
        renderNewPrices(0, 0, 0);
    }

    const handleProductQuantity = (products) => {
        renderNewPrices(calculeQuantityOfProducts(products), calculateTotalProductPrice(products), totalFreightPriceCart);
    }

    return { userCart, productsCart, totalPriceCart, totalFreightPriceCart, quantityOfProducts, removeProductFromCart, clearCart, handleProductQuantity };
}

function renderCartItem(product) {
    return `
          <article class="cart-page__item">
            <div class="cart-page__item-image">
              <img 
                src="${product.image}" 
                alt="Imagem do produto ${product.name}" />
            </div>

            <div class="cart-page__item-body">
              <div class="cart-page__item-heading">
                <h2>${product.name}</h2>
                <span>R$ ${product.unitPrice.toFixed(2).replace(".", ",")}</span>
              </div>

              <p class="cart-page__item-meta">${product.category}</p>

              <div class="cart-page__item-actions">
                <div class="cart-page__quantity">
                  <span>Quantidade:</span>
                  <div class="cart-page__quantity-control">
                    <button
                      class="decrease-quantity"
                      id="decrease-quantity-${product.productId}"
                      data-product-id="${product.productId}"
                      type="button"
                      aria-label="Diminuir quantidade"
                    >
                      -
                    </button>
                    <span id="product-card__quantity-${product.productId}">${product.quantity}</span>
                    <button
                      class="increase-quantity"
                      id="increase-quantity-${product.productId}"
                      data-product-id="${product.productId}"
                      type="button"
                      aria-label="Aumentar quantidade"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button  
                  id="remove-product-${product.productId}"
                  type="button" 
                  class="cart-page__button cart-page__button--link remove-product"
                  data-product-id="${product.productId}"
                >
                  <i class="fa-regular fa-trash-can"></i>
                  Remover
                </button>
              </div>

              <p class="cart-page__item-freight">
                <span>Frete:</span>
                <strong 
                  class="${product.freight === 0 ? "cart-page__item-freight--free" : "cart-page__item-freight--paid"}"
                >
                  ${product.freight === 0 ? product.freight : `R$ ${product.freight.toFixed(2).replace(".", ",")}`}
                </strong>
              </p>
            </div>
          </article>
          `
}

function renderNewPrices(productsQuantity, totalPrice, totalFreightPrice) {
    const cartQuantityItems = document.querySelector("#quantity-of-items");
    const checkoutCartItems = document.querySelector(".cart-page__summary");

    if (!cartQuantityItems || !checkoutCartItems) return;

    cartQuantityItems.textContent = String(productsQuantity).concat(" ", productsQuantity > 1 ? "item" : "itens");

    checkoutCartItems.innerHTML = `
        <h3>Resumo da compra</h3>

          <div class="cart-page__summary-row">
            <span>Produtos (${productsQuantity})</span>
            <strong>R$ ${totalPrice.toFixed(2).replace(".", ",")}</strong>
          </div>

          <div class="cart-page__summary-row">
            <span>Valor do frete</span>
            <strong>R$ ${totalFreightPrice.toFixed(2).replace(".", ",")}</strong>
          </div>

          <div class="cart-page__summary-total">
            <span>Total</span>
            <strong>R$ ${(totalPrice + totalFreightPrice).toFixed(2).replace(".", ",")}</strong>
          </div>

          <a href="/checkout" class="cart-page__button cart-page__button--primary" data-route>
            Finalizar a compra
          </a>
    `
}

export function cartEmptyHTML() {
    return (`
      <section class="cart cart__section">
        <i class="fa-solid fa-box-open cart__icon"></i>
        <div class="cart__content">
          <span class="cart__message">
            Seu carrinho está vazio. Descubra a variedade de sabores únicos
            que preparamos especialmente para ti, desde clássicos
            reconfortantes até criações exclusivas da nossa confeitaria.
          </span>
          <a href="/catalog" aria-label="Ver Produtos" class="cart__link" data-route>
            Ver Produtos
          </a>
        </div>
      </section>
    `);
}