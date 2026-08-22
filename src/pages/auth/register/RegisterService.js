"use strict";

import { users } from "../../../../seeds/users.js";

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

    if (passwordInput.value.trim() !== confirmPasswordInput.value.trim()) {
        alert("As senhas precisam ser iguais para confirmar");
        return;
    }

    const user = {
        userId: getNextUserId(),
        firstName: userNameInput.value.trim(),
        lastName: userlastNameInput.value.trim(),
        email: userNameInput.value.trim(),
        password: emailInput.value.trim(),
        phoneNumber: telephoneInput.value.trim(),
        cpf: "",
        accountCreateAt: new Date().toString(),
        addresses: [],
        reviews: []
    };

    sessionStorage.setItem("loggedInUser", JSON.stringify(user));

    alert("Cadastro realizado com sucesso!");
    window.navigateTo("/auth/confirm");
}

function getNextUserId() {
    if (!Array.isArray(users) || users.length === 0) return 1;

    const lastUserId = users.reduce((highestId, user) => {
        const userId = Number(user.userId) || 0;
        return Math.max(highestId, userId);
    }, 0);

    return lastUserId + 1;
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
