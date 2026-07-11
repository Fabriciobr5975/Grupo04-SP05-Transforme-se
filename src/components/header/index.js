
export default function Header() {
    ensureStyle();

    return (`
   
    <header class="header">
      <section class="header__content">
        <a
          href="/"
          aria-label="Voltar para a página principal"
          class="header__content_img"
        >
          <img
            src="../../assets/images/logo.svg"
            alt="Logo Nossa confeitaria"
          />
        </a>
        <nav class="navbar">
          <ul class="navbar__list">
            <li class="navbar__list__item">
              <a href="#">
                Início
                <hr class="navbar__list__item--active" />
              </a>
            </li>
            <li class="navbar__list__item">
              <a href="#">
                Nosso Cardápio
                <hr class="navbar__list__item--no-active" />
              </a>
            </li>
            <li class="navbar__list__item">
              <a href="#">
                Sobre Nós
                <hr class="navbar__list__item--no-active" />
              </a>
            </li>
            <li class="navbar__list__item">
              <a href="#">
                Contato
                <hr class="navbar__list__item--no-active" />
              </a>
            </li>
          </ul>
        </nav>
        <div class="icon-section">
          <button
            aria-label="Buscar produtos"
            title="Buscar produtos"
            class="icon-section__btn"
          >
            <i class="fa-solid fa-magnifying-glass header__icon"></i>
          </button>
          <a class="icon-section__btn" href="#">
            <i class="fa-solid fa-bag-shopping header__icon"></i>
            <span class="icon_section__btn--qtd">5</span>
          </a>
          <a class="icon-section__btn" href="#">
            <i class="fa-regular fa-user header__icon"></i>
          </a>
        </div>
      </section>
    </header>
    `);
}

const ensureStyle = () => {
    const existingStyle = document.querySelector("link[data-page-style]");
    if (existingStyle) return;

    const style = document.createElement("link");
    style.rel = "stylesheet";
    style.href = "/src/components/header/style.css";
    document.head.appendChild(style);
};
