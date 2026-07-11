
export default function Footer(children) {
  ensureStyle();

  return (`
    <footer class="footer">
      <section class="footer__content">
        <div class="footer__content-img">
          <img
            src="../../assets/images/logo.svg"
            alt="Logo Nossa confeitaria"
          />
          <span>Cada receita, uma história, cada doce, uma lembrança</span>
        </div>

        <nav class="footer__nav" aria-label="Navegação do rodapé">
          <div class="footer__nav-group">
            <h2>Institucional</h2>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Sobre Nós</a></li>
              <li><a href="#">Login</a></li>
            </ul>
          </div>

          <div class="footer__nav-group">
            <h2>Produtos</h2>
            <ul>
              <li><a href="#">Produtos</a></li>
              <li><a href="#">Bolos</a></li>
              <li><a href="#">Tortas</a></li>
              <li><a href="#">Especiais</a></li>
              <li><a href="#">Novidades</a></li>
            </ul>
          </div>

          <div class="footer__nav-group">
            <h2>Ajuda</h2>
            <ul>
              <li><a href="#">Central de Ajuda</a></li>
              <li><a href="#">Perguntas Frequentes</a></li>
              <li><a href="#">Acessibilidade</a></li>
            </ul>
          </div>

          <div class="footer__nav-group">
            <h2>Legal</h2>
            <ul>
              <li><a href="#">Termos</a></li>
              <li><a href="#">Privacidade</a></li>
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

const ensureStyle = () => {
  const existingStyle = document.querySelector("link[data-page-style]");
  if (existingStyle) return;

  const style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = "/src/components/footer/style.css";
  document.head.appendChild(style);
};
