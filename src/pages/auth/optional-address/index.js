import Button from "../../../components/button/index.js";
import HeadingSection from "../common/HeadingSection.js";
import Input from "../../../components/input/index.js";

const OpcionalRegisterUserAddressPage = {
  template: `
  <div class="auth-address-container">
    <main class="auth-address-container__main">
      <section class="auth-address-main__section">
        ${HeadingSection("Endereço (opcional)", "Insira um endereço inicial para sua conta")}
        
        <form class="auth-address-main__form" method="post" autocomplete="off">
          <div class="auth-address-main__form-content">
            <div class="auth-address-form__row">
               ${Input("register-cep", "CEP", { type: "text", name: "cep", placeholder: "Digite o seu CEP", required: true })}
               ${Input("register-number-address", "Número", { type: "number", name: "number-address", placeholder: "Digite o número do seu endereço", required: true })}
            </div>
            ${Input("register-complement", "Complemento", { type: "text", name: "complement", placeholder: "Digite um complemento para seu endereço" })}
            ${Input("register-address", "Logradouro", { type: "text", name: "address", placeholder: "Logradouro", readonly: "true" })}
            ${Input("register-neighborhood", "Bairro/Cidade", { type: "text", name: "neighborhood", placeholder: "Bairro/Cidade", readonly: "true" })}
            ${Input("register-state", "Estado/UF", { type: "text", name: "state", placeholder: "Estado/UF", readonly: "true" })}
          </div>
        
          <div class="auth-address-main__form__button">
            ${Button({ type: "submit", innerText: "Confirmar Endereço" })}
            ${Button({ type: "button", innerText: "Pular Etapa" })}        
          </div>
        </form>
    </main>
  </div>
  `,
  styles: "/src/pages/auth/optional-address/style.css"
}

export default OpcionalRegisterUserAddressPage;
