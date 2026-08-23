"use strict";
import {
    cartUpdate,
    cartDelete,
    calculateTotalProductPrice,
    calculateTotalFreightPrice,
} from "../../../services/CartService.js";
import OrderStatusEnum from "../../../model/orders/OrderStatusEnum.js";

export function useCheckout() {
    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));
    const userCart = JSON.parse(sessionStorage.getItem("userCart")) ?? [];
    let totalPriceCart = calculateTotalProductPrice(userCart);
    let totalFreightPriceCart = calculateTotalFreightPrice(userCart);
    let selectedAddressId = null;

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
        cartDelete(productRemoved);
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

        totalPriceCart = calculateTotalProductPrice(userCart);
        totalFreightPriceCart = calculateTotalFreightPrice(userCart);

        updateQuantityDisplay(product.productId, nextQuantity);
        renderNewPrices(totalPriceCart, totalFreightPriceCart);
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

    const handleAddressInsertion = (address) => {
        const existAdress = user.addresses.some(a => a.cep === address.cep);

        if (existAdress) {
            alert("Esse endereço Já foi inserido!");
            return;
        }

        const nextAddressId = getNextAddressId(user.addresses);

        user.addresses.push({
            addressId: nextAddressId,
            userId: user.userId,
            ...address
        });
        
        sessionStorage.setItem("loggedInUser", JSON.stringify(user));
        renderNewAddresses(user.addresses);
    }

    const selectAddress = (addressId) => {
        const numericId = Number(addressId);
        if (!Number.isInteger(numericId)) return;

      const selectedAddress = user.addresses.find(address => address.addressId === numericId);
      if (!selectedAddress) return;

      selectedAddressId = numericId;
      document.querySelectorAll(".checkout-page__address-card").forEach((card) => {
        card.classList.toggle(
          "checkout-page__address-card--selected",
          card.dataset.addressId === String(selectedAddressId)
        );
      });

        return selectedAddress;
      }

      const createOrder = () => {
        if (!user || !Array.isArray(userCart) || userCart.length === 0) {
          alert("Adicione pelo menos um produto ao carrinho para finalizar o pedido.");
          return false;
        }

        const selectedAddress = user.addresses.find(
          (address) => address.addressId === selectedAddressId
        );

        if (!selectedAddress) {
          alert("Selecione um endereço de entrega para continuar.");
          return false;
        }

        const previousOrder = JSON.parse(sessionStorage.getItem("currentOrder"));
        const orderId = Number(previousOrder?.orderId || 0) + 1;
        const order = {
          orderId,
          orderData: new Date().toISOString(),
          deliveryTime: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
          orderStatus: OrderStatusEnum.PENDING,
          totalOrderValue: Number((totalPriceCart + totalFreightPriceCart).toFixed(2)),
          user,
          deliveryAddress: `${selectedAddress.address}, ${selectedAddress.number} - ${selectedAddress.city}`,
          addressNumber: selectedAddress.number,
          addressComplement: selectedAddress.complement,
          products: userCart.map((product) => ({ ...product })),
          freight: totalFreightPriceCart,
          status: OrderStatusEnum.PENDING,
        };

        const orders = JSON.parse(sessionStorage.getItem("orders")) ?? [];

        if(orders.length === 0) sessionStorage.setItem("orders", JSON.stringify([order]));
        else sessionStorage.setItem("orders", JSON.stringify([order, ...orders]));

        sessionStorage.removeItem("userCart");
        userCart.splice(0, userCart.length);

        return true;
    }

      return { user, userCart, totalPriceCart, totalFreightPriceCart, handleAddressInsertion, selectAddress, createOrder };
}

function getNextAddressId(addresses) {
    if (!Array.isArray(addresses) || addresses.length === 0) return 1;

    const lastAddressId = addresses.reduce((highestId, address) => {
        const addressId = Number(address.addressId) || 0;
        return Math.max(highestId, addressId);
    }, 0);

    return lastAddressId + 1;
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

function renderNewAddresses(addresses) {
    const addressHTML = document.querySelector(".checkout-page__section--address");
    if (!addressHTML) return;

    addressHTML.innerHTML = `
      <h2 class="checkout-page__section-title">2. Endereço de Entrega</h2>
      ${Array.isArray(addresses) && addresses.length > 0 ? addresses.map((address) => `
      <div class="checkout-page__address-card" data-address-id="${address.addressId}">
        <p class="checkout-page__address-title">${address.address}, ${address.number}</p>
        <p class="checkout-page__address-text">${address.city} · ${address.state}</p>
        <p class="checkout-page__address-text">CEP ${address.cep}</p>
        <p class="checkout-page__address-text">Complemento: ${address.complement}</p>
        <div class="checkout-page__buttons">
          <button
            id="checkout-page__button--select-address-${address.addressId}"
            data-address-id="${address.addressId}"
            class="checkout-page__button select-button--address"
            type="button"
          >Selecionar Endereço</button>
          <button class="checkout-page__button" type="button">Alterar Endereço</button>
        </div>
      </div>
      `).join("") : ""}
      <button id="add-address-btn" class="checkout-page__button" type="button">Inserir Novo Endereço</button>
    `
}
