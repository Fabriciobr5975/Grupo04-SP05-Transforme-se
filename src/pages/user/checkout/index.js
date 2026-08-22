import BaseLayout from "../../../layouts/index.js";
import { AddressInsertionModal } from "../addresses/modals/AddressInsertionModal.js";
import { useCheckout } from "./CheckoutService.js";
import { getAddressFromViaCep } from "../../../services/AddressService.js";

const {
  user,
  userCart,
  totalPriceCart,
  totalFreightPriceCart,
  handleAddressInsertion,
  selectAddress,
  createOrder
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
          <div class="checkout-page__address-card" data-address-id="${address.addressId}">
            <p class="checkout-page__address-title">${address.address}, ${address.number}</p>
            <p class="checkout-page__address-text">${address.city} · ${address.state}</p>
            <p class="checkout-page__address-text">CEP ${address.cep}</p>
            <p class="checkout-page__address-text">Complemento: ${address.complement}</p>
            <div class="checkout-page__buttons">
              <button 
                type="button"
                id="checkout-page__button--select-address-${address.addressId}" 
                data-address-id="${address.addressId}"
                class="checkout-page__button select-button--address" 
              >
                Selecionar Endereço
              </button>
              <button class="checkout-page__button" type="button">Alterar Endereço</button>
            </div>
          </div>
          `).join("") : ""}
           <button id="add-address-btn" class="checkout-page__button" type="button">Inserir Novo Endereço</button>
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
            <button id="finish-order-button" class="checkout-page__button" type="button">Finalizar Pedido</button>
          </div>
        </section>
      </div>
    </section>
  </div>

  ${AddressInsertionModal()}
`;

const CheckoutPage = {
  template: BaseLayout(template),
  styles: "/src/pages/user/checkout/style.css",
  scripts: "src/pages/user/checkout/CheckoutService.js"
};

function handleModalOpen() {
  const modal = document.querySelector("#addressModal");
  if (!modal) return;
  modal.classList.add("modal--open");
}

function handleModalClose() {
  const modal = document.querySelector("#addressModal");
  if (!modal) return;
  modal.classList.remove("modal--open");
  document.querySelector(".modal__form").reset();
}

async function handleCepChange(event) {
  const cepInput = event.target;
  const cepValue = cepInput.value.replace(/\D/g, "");
  const addressSummary = document.querySelector("#addressSummary");
  const addressSummaryText = document.querySelector("#addressSummaryText");

  if (cepValue.length < 8) return;

  try {
    const address = await getAddressFromViaCep(cepValue);

    if (address.erro) {
      alert("CEP não encontrado");
      return;
    }

    const addressText = `${address.logradouro}, ${address.bairro}, ${address.localidade} - ${address.uf}`;
    addressSummaryText.textContent = addressText;
    addressSummary.hidden = false;
  } catch (error) {
    console.error("Erro ao buscar CEP:", error);
    alert("Erro ao buscar o CEP");
  }
}

async function registerUserAddress(event) {
  event.preventDefault();

  if (user.addresses.length === 3) {
    alert("Você só pode adicionar 3 endereços!")
    return;
  }

  const cepInput = document.getElementById("cep");
  const numberAddressInput = document.getElementById("addressNumber");
  const registerComplementInput = document.getElementById("addressComplement");

  if (!cepInput || !cepInput.value.trim()) {
    alert("O CEP é obrigatório");
    return;
  }

  if (!numberAddressInput || !numberAddressInput.value) {
    alert("Digite o número do seu endereço");
    return;
  }

  if (!registerComplementInput || !registerComplementInput.value.trim()) {
    alert("Digite um complemento para seu endereço");
    return;
  }

  try {
    const cepValue = cepInput.value.replace(/\D/g, "");
    const address = await getAddressFromViaCep(cepValue);

    if (address.erro) {
      alert("CEP inválido");
      return;
    }

    const newAddress = {
      cep: address.cep,
      address: address.logradouro,
      number: numberAddressInput.value,
      complement: registerComplementInput.value,
      neighborhood: address.bairro,
      city: address.localidade,
      state: address.uf
    };

    handleAddressInsertion(newAddress);

    handleModalClose();
  } catch (error) {
    console.error("Erro ao registrar endereço:", error);
    alert("Erro ao registrar o endereço");
  }
}

function handleSelectedAddress(event) {
  const button = event.currentTarget;
  const addressId = button.dataset.addressId;
  selectAddress(addressId);
}

function handleFinishOrder() {
  if (createOrder()) window.navigateTo("/checkout/confirm");
}

function handleCheckoutClick(event) {
  if (event.target.closest("#finish-order-button")) {
    handleFinishOrder();
  }
}

function initUserAddressForm() {
  const addButton = document.querySelector("#add-address-btn");
  const form = document.querySelector(".modal__form");
  const closeButton = document.querySelector("#closeAddressModal");
  const backdrop = document.querySelector(".modal__backdrop");
  const cepInput = document.querySelector("#cep");
  const selectButtonAddress = document.querySelectorAll(".select-button--address");

  if (!form) return;

  // Abrir modal
  if (addButton) {
    addButton.removeEventListener("click", handleModalOpen);
    addButton.addEventListener("click", handleModalOpen);
  }

  // Fechar modal
  if (closeButton) {
    closeButton.removeEventListener("click", handleModalClose);
    closeButton.addEventListener("click", handleModalClose);
  }

  // Fechar ao clicar no backdrop
  if (backdrop) {
    backdrop.removeEventListener("click", handleModalClose);
    backdrop.addEventListener("click", handleModalClose);
  }

  // Buscar CEP quando mudar
  if (cepInput) {
    cepInput.removeEventListener("change", handleCepChange);
    cepInput.addEventListener("change", handleCepChange);
  }

  if (selectButtonAddress) {
    selectButtonAddress.forEach((button) => {
      button.removeEventListener("click", handleSelectedAddress);
      button.addEventListener("click", handleSelectedAddress);
    });
  }

  // Submit do formulário
  form.removeEventListener("submit", registerUserAddress);
  form.addEventListener("submit", registerUserAddress);
}

document.addEventListener("click", initUserAddressForm);
document.addEventListener("click", handleCheckoutClick);

export default CheckoutPage;