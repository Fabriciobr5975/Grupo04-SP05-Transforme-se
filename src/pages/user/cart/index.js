import BaseLayout from "../../../layouts/index.js";
import { cartEmptyHTML, useCart } from "./CartService.js";

const {
  userCart,
  productsCart,
  totalPriceCart,
  totalFreightPriceCart,
  quantityOfProducts,
  removeProductFromCart,
  clearCart,
  handleProductQuantity
} = useCart();

const template = `
  <div class="layout-user-page">
    <div class="layout-user-page__content">
      <header class="cart-page__header">
        <div class="cart-page__header-text">
          <h1>Meu Carrinho</h1>
          <p>Reveja seus itens, ajuste a quantidade e finalize sua compra.</p>
        </div>

        <div class="cart-page__header-actions">
          <span id="quantity-of-items">${quantityOfProducts} itens</span>
          <button 
            id="clear-cart"
            type="button" 
            class="cart-page__button cart-page__button--ghost"
          >
            Limpar carrinho
          </button>
        </div>
      </header>

      <section class="cart-page__content">
        <div class="cart-page__items">
          ${Array.isArray(productsCart) && productsCart.length > 0 ? productsCart.map(product => `
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
          `).join("") : cartEmptyHTML()}
        </div>

        <aside class="cart-page__summary">
          <h3>Resumo da compra</h3>

          <div class="cart-page__summary-row">
            <span>Produtos (${quantityOfProducts})</span>
            <strong>R$ ${totalPriceCart.toFixed(2).replace(".", ",")}</strong>
          </div>

          <div class="cart-page__summary-row">
            <span>Valor do frete</span>
            <strong>R$ ${totalFreightPriceCart.toFixed(2).replace(".", ",")}</strong>
          </div>

          <div class="cart-page__summary-total">
            <span>Total</span>
            <strong>R$ ${(totalPriceCart + totalFreightPriceCart).toFixed(2).replace(".", ",")}</strong>
          </div>

          <a href="/checkout" class="cart-page__button cart-page__button--primary" data-route>
            Finalizar a compra
          </a>
        </aside>
      </section>
    </div>
  </div >
`;

const UserCartPage = {
  template: BaseLayout(template),
  styles: "/src/pages/user/cart/style.css",
  scripts: "/src/pages/user/cart/CartService.js"
};

function updateQuantityDisplay(productId, newValue) {
  const quantity = document.querySelector(`#product-card__quantity-${productId}`);
  if (!quantity) return;
  quantity.textContent = newValue;
}

function updateProductQuantity(productId, change) {
  if (!Array.isArray(productsCart)) return;

  const productIndex = productsCart.findIndex((product) => product.productId === Number(productId));
  if (productIndex === -1) return;

  const product = productsCart[productIndex];
  const nextQuantity = Math.min(99, Math.max(1, product.quantity + change));

  product.quantity = nextQuantity;
  updateQuantityDisplay(product.productId, nextQuantity);
  handleProductQuantity(productsCart);
}

function handleCartClear(event) {
  clearCart();
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
  const clearCartButton = document.querySelector("#clear-cart");
  const increaseButtons = document.querySelectorAll(".increase-quantity");
  const decreaseButtons = document.querySelectorAll(".decrease-quantity");
  const removeProductButton = document.querySelectorAll(".remove-product");

  clearCartButton.addEventListener("click", handleCartClear)
  increaseButtons.forEach((button) => button.addEventListener("click", handleProductQuantityIncrease));
  decreaseButtons.forEach((button) => button.addEventListener("click", handleProductQuantityDecrease));
  removeProductButton.forEach((button) => button.addEventListener("click", handleProductRemove));
});

export default UserCartPage;