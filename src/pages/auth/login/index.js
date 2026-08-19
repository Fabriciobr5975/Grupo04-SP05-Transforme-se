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

        <form class="auth-main__form" method="post" autocomplete="off">
          <div class="auth-main__form-content">
            ${Input("login-email", "E-mail", { type: "email", name: "email", placeholder: "Digite seu email", required: true })}
            ${Input("login-password", "Senha", { type: "password", name: "password", placeholder: "Digite sua senha", autocomplete: "senha atual", required: true })}
          </div>

          <div>
            ${Button({ type: "submit", innerText: "Entrar", id: "form-submit-login" })}
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
  styles: "/src/pages/auth/style.css",
  scripts: "/src/pages/auth/login/LoginService.js"
}

export default LoginPage;
