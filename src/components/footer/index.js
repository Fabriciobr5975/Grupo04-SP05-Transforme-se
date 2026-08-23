import { setStyle } from "../../utils/PageUtil.js";

export default function Footer() {
  setStyle("/src/components/footer/style.css");

  const userIsLogged = () =>
    sessionStorage.getItem("loggedInUser") ? true : false;

  return (`
    <footer class="footer">
      <section class="footer__content">
        <div class="footer__content-img">
          <img
            src="/src/assets/images/header-logo.svg"
            alt="Logo Nossa confeitaria"
          />
          <span>Cada receita, uma história, cada doce, uma lembrança</span>
        </div>

        <nav class="footer__nav" aria-label="Navegação do rodapé">
          <div class="footer__nav-group">
            <h2>Nossa Doceria</h2>
            <ul>
              <li><a href="/" data-route>Home</a></li>
              <li><a href="/about-us" data-route>Sobre Nós</a></li>
              ${userIsLogged() ? 
                `<li><a href="/profile" data-route>Minha Conta</a></li>` : `<li><a href="/auth/login" data-route>Login</a></li>`}
            </ul>
          </div>

          <div class="footer__nav-group">
            <h2>Produtos</h2>
            <ul>
              <li><a href="/catalog" data-route>Produtos</a></li>
              <li><a href="/catalog" data-route>Bolos</a></li>
              <li><a href="/catalog" data-route>Tortas</a></li>
              <li><a href="/catalog" data-route>Especiais</a></li>
              <li><a href="/catalog" data-route>Novidades</a></li>
            </ul>
          </div>

          <div class="footer__nav-group">
            <h2>Ajuda</h2>
            <ul>
              <li><a href="/help-center" data-route>Central de Ajuda</a></li>
            </ul>
          </div>

          <div class="footer__nav-group">
            <h2>Legal</h2>
            <ul>
              <li><a href="/terms-of-use" data-route>Termos</a></li>
              <li><a href="/privacy-policies" data-route>Privacidade</a></li>
            </ul>
          </div>
        </nav>
      </section>

      <section class="footer__bottom">
        <p>© 2026 Nossa Confeitaria Artesanal. Todos os direitos reservados.</p>
        <div class="footer__socials" aria-label="Redes sociais">
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i class="fa-brands fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i class="fa-brands fa-facebook-f" aria-hidden="true"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
          </a>
        </div>
      </section>
    </footer>
  `);
}
