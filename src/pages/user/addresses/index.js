import BaseLayout from "../../../layouts/index.js";
import Button from "../../../components/button/index.js";
import { useAddressService } from "./AddressService.js";
import { AddressInsertionModal } from "./modals/AddressInsertionModal.js";
import { getAddressFromViaCep } from "../../../services/AddressService.js";

const { userAddresses, handleAddressInsertion, removeAddress } = useAddressService();

const template = `
  <div class="layout-user-page">
    <div class="user-page__topbar">
      <button type="button" class="user-page__back-button" onclick="window.history.back()">
        <i class="fa-solid fa-arrow-left user-page-icon"></i>
        Voltar
      </button>
    </div>
    
    <div class="layout-user-page__content">
      <header class="user-address__header">
        <h1>Meus Endereços</h1>
        <p>Você pode ter até cadastrar até 3 endereços!</p>
      </header>

      <section class="address__content">
        <div class="addresses-area">
        ${Array.isArray(userAddresses) && userAddresses.length > 0 ? userAddresses.map((address) => `
          <article class="address__content__item">
            <div class="address__content__main">
              <h2>${address.address}, ${address.number}, ${address.cep}</h2>
              <p>${address.neighborhood}, ${address.city}, ${address.state}</p>
              <p><span>Complemento:</span> ${address.complement}</p>
            </div>
            <div class="address__manipulation">
              <button 
                title="Editar endereço" 
                type="button" 
                class="address__manipulation--edit"
              >
                <i class="fa-regular fa-pen-to-square"></i>
              </button>
              <button 
                id="address-remove-${address.addressId}"
                data-address-id="${address.addressId}"
                title="Remover endereço" 
                type="button" 
                class="address__manipulation--remove"
              >
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </div>
          </article>
        `).join("") : ""}
        </div>
        ${Button({ id: "add-address-btn", type: "button", innerText: `<i class="fa-solid fa-plus icon-plus__address"></i>Adicionar novo endereço` })}
      </section>
    </div>
  </div>  

  ${AddressInsertionModal()}
`;

const UserAddressesPage = {
  template: BaseLayout(template),
  styles: "/src/pages/user/addresses/style.css"
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

  if (userAddresses.length === 3) {
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

function handleProductRemove(event) {
  const button = event.currentTarget;
  const productId = button.dataset.addressId;
  removeAddress(productId);
}

function initUserAddressForm() {
  const addButton = document.querySelector("#add-address-btn");
  const form = document.querySelector(".modal__form");
  const closeButton = document.querySelector("#closeAddressModal");
  const backdrop = document.querySelector(".modal__backdrop");
  const cepInput = document.querySelector("#cep");
  const removeAddressButton = document.querySelectorAll(".address__manipulation--remove");

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

  if (removeAddressButton) {
    removeAddressButton.forEach((button) => button.addEventListener("click", handleProductRemove));
  }

  // Submit do formulário
  form.removeEventListener("submit", registerUserAddress);
  form.addEventListener("submit", registerUserAddress);
}

document.addEventListener("click", initUserAddressForm);

export default UserAddressesPage;