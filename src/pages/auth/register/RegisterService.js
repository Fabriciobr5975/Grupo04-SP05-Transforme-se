"use strict";

function registerUser(event) {
    event.preventDefault();

    const userNameInput = document.getElementById("register-name");
    const userlastNameInput = document.getElementById("register-lastName");
    const emailInput = document.getElementById("register-email");
    const telephoneInput = document.getElementById("register-telephone");
    const passwordInput = document.getElementById("register-password");
    const confirmPasswordInput = document.getElementById("register-confirm-password");

    if (!userNameInput || !userNameInput.value.trim()) {
        alert("O seu primeiro nome é obrigatório");
        return;
    }

    if (!userlastNameInput || !userlastNameInput.value.trim()) {
        alert("O seu último nome é obrigatório");
        return;
    }

    if (!emailInput || !emailInput.value.trim()) {
        alert("O seu E-mail é obrigatório");
        return;
    }

    if (!telephoneInput || !telephoneInput.value.trim()) {
        alert("O seu telefone é obrigatório");
        return;
    }

    if (!passwordInput || !passwordInput.value.trim()) {
        alert("Você precisa passar um senha válida");
        return;
    }

    if (!confirmPasswordInput || !confirmPasswordInput.value.trim()) {
        alert("Você precisa confirmar sua senha");
        return;
    }

    if (passwordInput !== confirmPasswordInput) {
        alert("As senhas precisam ser iguais para confirmar");
        return;
    }

    alert("Cadastro realizado com sucesso!");
    window.navigateTo("/auth/opcional/address");
}

function initUserAddressForm() {
    const form = document.querySelector(".auth-main__form");

    if (!form) return;

    form.removeEventListener("submit", registerUser);
    form.addEventListener("submit", registerUser);
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initUserAddressForm);
} else {
    initUserAddressForm();
}
