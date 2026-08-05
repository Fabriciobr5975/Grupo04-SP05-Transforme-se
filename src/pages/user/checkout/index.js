import BaseLayout from "../../../layouts/index.js";

const template = `
  <div class="checkout-page">
    <div class="user-page__topbar">
      <button type="button" class="user-page__back-button">
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
            <article class="checkout-page__review-item">
              <img 
                class="checkout-page__review-image" 
                src="src/assets/images/bolo-homepage.png" 
                alt="Imagem do Produto" 
              />

              <div class="checkout-page__review-info">
                <p class="checkout-page__review-name">Petit Gateu</p>

                <div class="checkout-page__quantity-input">
                  <button type="button" class="checkout-page__quantity-button">-</button>
                  <span class="checkout-page__quantity-value">1</span>
                  <button type="button" class="checkout-page__quantity-button">+</button>
                </div>

                <div class="checkout-page__summary-row">
                  <span>Frete:</span>
                  <strong>Grátis</strong>
                </div>
              </div>

              <div class="checkout-page__review-extra-info">
                <button type="button" class="checkout-page__button--remove">
                  <i class="fa-regular fa-trash-can"></i>
                </button>

                <div class="checkout-page__review-price">
                  <strong>R$ 59,90</strong>
                </div>
              </div>
            </article>
          </div>

          <div class="checkout-page__summary-row--total">
            <span>Subtotal:</span>
            <strong>R$ 59,90</strong>
          </div>
        </section>

        <section class="checkout-page__section checkout-page__section--address">
          <h2 class="checkout-page__section-title">2. Endereço de Entrega</h2>

          <div class="checkout-page__address-card">
            <p class="checkout-page__address-title">Rua das Flores, 123</p>
            <p class="checkout-page__address-text">São Paulo · SP</p>
            <p class="checkout-page__address-text">CEP 01000-000</p>
            <p class="checkout-page__address-text">Complemento: Portaria 2</p>
            <button class="checkout-page__button" type="button">Alterar Endereço</button>
          </div>
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
  styles: "/src/pages/user/checkout/style.css"
};

export default CheckoutPage;