"use strict";

const CONFIRMATION_CODE = "12345";

function validateCode(inputs) {
    const code = inputs.map((input) => input.value).join("");

    if (inputs.some((input) => !input.value)) {
        alert("Preencha todos os dígitos do código.");
        return;
    }

    if (code !== CONFIRMATION_CODE) {
        alert("Código inválido. Confira os números e tente novamente.");
        inputs[0].focus();
        return;
    }

    alert("Conta confirmada com sucesso!");
    window.navigateTo("/");
}

function initConfirmationForm() {
    const form = document.querySelector(".auth-confirm-main__form");
    const inputs = [...document.querySelectorAll(".confirm-input")];

    if (!form || inputs.length !== CONFIRMATION_CODE.length) return;

    inputs.forEach((input, index) => {
        input.addEventListener("input", () => {
            input.value = input.value.replace(/\D/g, "").slice(0, 1);

            if (input.value && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }

            if (index === inputs.length - 1 && input.value) {
                validateCode(inputs);
            }
        });

        input.addEventListener("keydown", (event) => {
            if (event.key === "Backspace" && !input.value && index > 0) {
                inputs[index - 1].focus();
            }
        });

        input.addEventListener("paste", (event) => {
            event.preventDefault();
            const pastedCode = event.clipboardData.getData("text").replace(/\D/g, "");

            pastedCode.split("").forEach((digit, offset) => {
                if (inputs[index + offset]) inputs[index + offset].value = digit;
            });

            const nextInput = inputs[Math.min(index + pastedCode.length, inputs.length - 1)];
            nextInput.focus();

            if (inputs.every((field) => field.value)) validateCode(inputs);
        });
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        validateCode(inputs);
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initConfirmationForm);
} else {
    initConfirmationForm();
}
