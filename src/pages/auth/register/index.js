import { Input } from "../../../components/input/index.js";
import { Button } from "../../../components/button/index.js";
import HeadingSection from "../common/HeadingSection.js";

const template = `
  <div class="container">
    <aside class="container__logo">
      <img src="/src/assets/images/logo.svg" alt="Logo da Nossa Doceria" />
    </aside>

    <main class="main">
      <section class="main__section">
        ${HeadingSection("Cadastro", "Insira suas informações")}

        <form class="register-form">
          <div class="register-form__content">
            ${Input("Nome Completo", "text", "register-name", "Digite seu nome completo")}
            ${Input("E-mail", "email", "register-email", "Digite seu e-mail")}
            ${Input("Telefone", "tel", "register-phone", "Digite seu telefone")}
            ${Input("Senha", "password", "register-password", "Digite sua senha")} 
            ${Input("Confirmar Senha", "password", "register-confirm-password", "Digite sua senha novamente")} 
          </div>

          <div class="register-form__button">
          ${Button("submit", "Cadastrar-se")}  
          </div>
        </form>

        <div class="main__section__login">
          <p>Já possui uma conta?</p>
          <a href="/auth/login" data-route>Faça login aqui</a>
        </div>
      </section>
    </main>
  </div>
`;

const ensureStyle = () => {
    const existingStyle = document.querySelector("link[data-page-style]");
    if (existingStyle) return;

    const style = document.createElement("link");
    style.rel = "stylesheet";
    style.href = "/src/pages/auth/register/style.css";
    document.head.appendChild(style);
};

export function renderRegisterPage(root) {
    ensureStyle();
    document.title = "Nossa Doceria | Cadastro";
    root.innerHTML = template;
}

export default renderRegisterPage;
