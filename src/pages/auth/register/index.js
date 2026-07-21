import Button  from "../../../components/button/index.js";
import HeadingSection from "../common/HeadingSection.js";
import Input from "../../../components/input/index.js";

const RegisterPage = {
  template: `
  <div class="auth-container">
    <aside class="auth-container__logo">
      <img src="/src/assets/images/logo.svg" alt="Logo da Nossa Doceria" />
    </aside>

    <main class="auth-container__main">
      <section class="auth-main__section">
        ${HeadingSection("Cadastro", "Insira suas informações")}
        
        <form class="auth-main__form">
          <div class="auth-main__form-content">
            ${Input("register-name", "Nome Completo", { type: "text", name: "username", placeholder: "Digite seu nome completo", required: true })}
            ${Input("register-email", "E-mail", { type: "email", name: "email", placeholder: "Digite seu e-mail", required: true })}
            ${Input("register-password", "Senha", { type: "password", name: "password", placeholder: "Digite sua senha",required: true })}
            ${Input("register-confirm-password", "Senha", { type: "password", name: "password", placeholder: "Confirme sua senha", required: true })}
          </div>
        
          <div>
            ${Button({ type: "submit", innerText: "Cadastrar-se" })}        
          </div>
        </form>

        <div class="auth-main__info">
          <p>Já possui uma conta?</p>
          <a href="/auth/login" data-route>Faça login aqui</a>
        </div>
      </section>
    </main>
  </div>
  `,
  styles: "/src/pages/auth/style.css"
}

export default RegisterPage;