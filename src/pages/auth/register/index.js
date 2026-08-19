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
        
        <form class="auth-main__form" method="post" autocomplete="off">
          <div class="auth-main__form-content">
            ${Input("register-name", "Nome Completo", { type: "text", name: "username", placeholder: "Digite seu primeiro nome", required: true })}
            ${Input("register-lastName", "Sobrenome", { type: "text", name: "lastname", placeholder: "Digite seu sobrenome completo", required: true })}
            ${Input("register-email", "E-mail", { type: "email", name: "email", placeholder: "Digite seu e-mail", required: true })}
            ${Input("register-telephone", "Telefone", { type: "tel", name: "telephone", placeholder: "Digite seu e-mail", required: true })}
            ${Input("register-password", "Senha", { type: "password", name: "password", placeholder: "Digite sua senha", required: true, autocomplete: "" })}
            ${Input("register-confirm-password", "Senha", { type: "password", name: "password", placeholder: "Confirme sua senha", required: true, autocomplete: "" })}
          </div>
        
          <div>
            ${Button({ type: "submit", innerText: "Cadastrar-se", id: "form-submit-register" })}        
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
  styles: "/src/pages/auth/style.css",
  scripts: "/src/pages/auth/register/RegisterService.js"
}

export default RegisterPage;