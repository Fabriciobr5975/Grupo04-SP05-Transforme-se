
const template = `
  <div class="auth-confirm-container">
    <main class="auth-confirm-container__main">
      <aside class="auth-confirm-container__logo">
        <img src="/src/assets/images/logo.svg" alt="Logo da Nossa Doceria" />
      </aside>
      <section class="auth-confirm-main__section">
        <div class="auth-confirm__content">
          <h1 class="auth-confirm__content-title">Verificação da Conta</h1>
          <p>Enviamos um código de confirmação para o seu e-mail.</p>
          <p>O código expira em 5 minutos. Copie e cole o código abaixo para confirmar sua conta e concluir o cadastro.</p>
        </div> 
        
        <form class="auth-confirm-main__form">
          <div class="auth-confirm-main__form-content">
            <input type="number" id="confirm-p01" name="confirm-01" required="true" class="confirm-input">
            <input type="number" id="confirm-p02" name="confirm-02" required="true" class="confirm-input">
            <input type="number" id="confirm-p03" name="confirm-03" required="true" class="confirm-input">
            <input type="number" id="confirm-p04" name="confirm-04" required="true" class="confirm-input">
            <input type="number" id="confirm-p05" name="confirm-05" required="true" class="confirm-input">
          </div>
        </form>
    </main>
  </div>
`;

const ConfirmUserDataPage = {
  template: template,
  styles: "/src/pages/auth/confirm/style.css"
}

export default ConfirmUserDataPage;


/**
 *   function limitarDigitos(input, max) {
    input.addEventListener("input", () => {
      if (input.value.length > max) {
        input.value = input.value.slice(0, max);
      }
    });
  }

  const campoCodigo = document.getElementById("codigo");
  limitarDigitos(campoCodigo, 6); 
 */

