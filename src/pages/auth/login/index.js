import Input from "../../../components/input/index.js";
import Button from "../../../components/button/index.js";
import HeadingSection from "../common/HeadingSection.js";

const LoginPage = {
  template: `
  <div class="auth-container">
    <aside class="auth-container__logo">
      <img src="/src/assets/images/logo.svg" alt="Logo da Nossa Doceria" />
    </aside>

    <main class="auth-container__main">
      <section class="auth-main__section">
        ${HeadingSection("Login", "Insira suas informações")}

        <form class="auth-main__form">
          <div class="auth-main__form-content">
            ${Input("login-email", "E-mail", { type: "email", name: "email", placeholder: "Digite seu email" })}
            ${Input("login-password", "Senha", { type: "password", name: "password", placeholder: "Digite sua senha", autocomplete: "senha atual" })}
          </div>

          <div>
            ${Button({ type: "button", innerText: "Entrar", route: "/auth/opcional/address" })}
            <button type="button" class="auth-form__btn-forgot-password">
              Esqueci minha senha
            </button>
          </div>
        </form>

        <div class="auth-main__info">
          <p>Não possui uma conta?</p>
          <a href="/auth/register" data-route>Cadastre-se aqui</a>
        </div>
      </section>
    </main>
  </div>
  `,
  styles: "/src/pages/auth/style.css"
}

export default LoginPage;
