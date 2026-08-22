"use strict";

import { users } from "../../../../seeds/users.js";

function verifyUser(event) {
    event.preventDefault();

    const emailInput = document.getElementById("login-email");
    const passwordInput = document.getElementById("login-password");
    let validatedUser = false;

    if (!emailInput.value.trim() || !passwordInput.value.trim()) {
        alert("Os campos de E-mail e Senha são obrigatórios");
        return;
    }

    if (Array.isArray(users))
        users.find((user) => {
            if (user.email === emailInput.value.trim() && user.password === passwordInput.value.trim()) {
                validatedUser = true;
                sessionStorage.setItem("loggedInUser", JSON.stringify(user));
                alert("Login realizado com sucesso!");
                window.navigateTo("/");
                return;
            }
        });

    if (!validatedUser) alert("E-mail ou senha incorretos. Tente novamente.");
}

function initLoginForm() {
    const form = document.querySelector(".auth-main__form");

    if (!form) return;

    form.removeEventListener("submit", verifyUser);
    form.addEventListener("submit", verifyUser);
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLoginForm);
} else {
    initLoginForm();
}
