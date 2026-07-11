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
        ${HeadingSection("Login", "Insira suas informações")}

        <form class="login-form">
          <div class="login-form__content">
            ${Input("E-mail", "email", "login-email", "Digite seu e-mail")}
            ${Input("Senha", "password", "login-password", "Digite sua senha")} 
          </div>

          <div class="login-form__button">
          ${Button("submit", "Entrar")}  
            <button type="button" class="login-form__forgot-password">
              Esqueci minha senha
            </button>
          </div>
        </form>

        <div class="main__section__registration">
          <p>Não possui uma conta?</p>
          <a href="/auth/register" data-route>Cadastre-se aqui</a>
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
  style.href = "/src/pages/auth/login/style.css";
  document.head.appendChild(style);
};

export function renderLoginPage(root) {
  ensureStyle();
  document.title = "Nossa Doceria | Login";
  root.innerHTML = template;
}

export default renderLoginPage;
