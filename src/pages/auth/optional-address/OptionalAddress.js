"use strict";

function registerUserAddress(event) {
    event.preventDefault();

    const cepInput = document.getElementById("register-cep");
    const numberAddressInput = document.getElementById("register-number-address");
    const registerComplementInput = document.getElementById("register-complement");

    if (!cepInput || !cepInput.value.trim()) {
        alert("O CEP é obrigatório");
        return;
    }

    if (!numberAddressInput || (Number.isNaN(numberAddressInput) || !numberAddressInput.value)) {
        alert("Digite o número do seu endereço");
        return;
    }

    if (!registerComplementInput || !registerComplementInput.value.trim()) {
        alert("Digite um complemento para seu endereço");
        return;
    }

    alert("Endereço realizado com sucesso!");
    window.navigateTo("/auth/opcional/address");
}

function initUserAddressForm() {
    const form = document.querySelector(".auth-main__form");

    if (!form) return;

    form.removeEventListener("submit", registerUserAddress);
    form.addEventListener("submit", registerUserAddress);
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initUserAddressForm);
} else {
    initUserAddressForm();
}
