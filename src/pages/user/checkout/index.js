import BaseLayout from "../../../layouts/index.js";
import { useCheckout } from "./CheckoutService.js";

const {
  user,
  userCart,
  totalPriceCart,
  totalFreightPriceCart,
} = useCheckout();

const template = `
  <div class="checkout-page">
    <div class="user-page__topbar">
      <button type="button" class="user-page__back-button" onclick="window.history.back()">
        <i class="fa-solid fa-arrow-left user-page-icon"></i>
        Voltar
      </button>
    </div>

    <section class="checkout-page__main">
      <h1 class="checkout-page__title">Checkout</h1>
      <p class="checkout-page__title-complement">
        Confira os itens, escolha o endereço de entrega e finalize seu pedido.
      </p>

      <div class="checkout-page__content">
        <section class="checkout-page__section checkout-page__section--review">
          <h2 class="checkout-page__section-title">1. Revisão dos Itens</h2>

          <div class="checkout-page__review-list">
            ${Array.isArray(userCart) && userCart.length > 0 ? userCart.map(product => `
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
            `).join("") : '<p class="checkout-page__info-cart--empty">Você não tem produtos para finalizar a compra</p>'}
          </div>

          <div class="checkout-page__summary-row--total">
            <span>Subtotal:</span>
            <strong>R$ ${(totalPriceCart + totalFreightPriceCart).toFixed(2).replace(".", ",")}</strong>
            <p class="checkout-page__prices-info">Produtos: ${totalPriceCart.toFixed(2).replace(".", ",")}</p>
            <p class="checkout-page__prices-info">Frete: ${totalFreightPriceCart.toFixed(2).replace(".", ",")}</p>
          </div>
        </section>

        <section class="checkout-page__section checkout-page__section--address">
          <h2 class="checkout-page__section-title">2. Endereço de Entrega</h2>

          ${Array.isArray(user.addresses) && user.addresses.length > 0 ? user.addresses.map((address) => `
          <div class="checkout-page__address-card">
            <p class="checkout-page__address-title">${address.address}, ${address.number}</p>
            <p class="checkout-page__address-text">${address.city} · ${address.state}</p>
            <p class="checkout-page__address-text">CEP ${address.cep}</p>
            <p class="checkout-page__address-text">Complemento: ${address.complement}</p>
            <div class="checkout-page__buttons">
              <button class="checkout-page__button" type="button">Selecionar Endereço</button>
              <button class="checkout-page__button" type="button">Alterar Endereço</button>
            </div>
          </div>
          `).join("") : ""}
           <button class="checkout-page__button" type="button">Inserir Novo Endereço</button>
        </section>

        <section class="checkout-page__section checkout-page__section--payment">
          <h2 class="checkout-page__section-title">3. Selecione o Método de Pagamento</h2>

          <div class="checkout-page__payment-card">
            <p class="checkout-page__payment-label">Método escolhido</p>
            <div class="checkout-page__payment-options">
              <label class="checkout-page__payment-option checkout-page__payment-option--active">
                <input
                  class="checkout-page__payment-option-input"
                  type="radio"
                  name="payment"
                  value="PIX"
                  checked
                  readonly
                />
                <span class="checkout-page__payment-option-text">PIX</span>
              </label>

              <label class="checkout-page__payment-option checkout-page__payment-option--disabled">
                <input
                  class="checkout-page__payment-option-input"
                  type="radio"
                  name="payment"
                  value="CARTAO"
                  disabled
                />
                <span class="checkout-page__payment-option-text">Cartão (em breve)</span>
              </label>
            </div>
            <p class="checkout-page__payment-text">Pagamento aprovado em até 10 minutos.</p>
            <button class="checkout-page__button" type="button">Finalizar Pedido</button>
          </div>
        </section>
      </div>
    </section>
  </div>
`;

const CheckoutPage = {
  template: BaseLayout(template),
  styles: "/src/pages/user/checkout/style.css",
  scripts: "src/pages/user/checkout/CheckoutService.js"
};

export default CheckoutPage;