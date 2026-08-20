import { setStyle } from "../../utils/PageUtil.js";

export default function Header() {
  setStyle("/src/components/header/style.css");
  const userLoggedIn = sessionStorage.getItem("loggedInUser") ? true : false;

  return (`
    <header class="header">
      <section class="header__content">
        <a
          href="/"
          aria-label="Voltar para a página principal"
          class="header__content_img"
          data-route
        >
          <img
            src="/src/assets/images/header-logo.svg"
            alt="Logo Nossa confeitaria"
          />
        </a>
        <nav class="navbar">
          <ul class="navbar__list">
            <li class="navbar__list__item" data-route>
              <a href="/" data-route>
                Início
                <hr class="navbar__list__item--active" />
              </a>
            </li>
            <li class="navbar__list__item">
              <a href="/catalog" data-route>
                Nosso Cardápio
                <hr class="navbar__list__item--no-active" />
              </a>
            </li>
            <li class="navbar__list__item">
              <a href="/about-us" data-route>
                Sobre Nós
                <hr class="navbar__list__item--no-active" />
              </a>
            </li>
            <li class="navbar__list__item">
              <a href="/help-center" data-route>
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
          
          <a class="icon-section__btn" href="/cart" data-route>
            <i class="fa-solid fa-bag-shopping header__icon"></i>
            <!-- <span class="icon_section__btn--quantity">0</span> -->
          </a>

          <a class="icon-section__btn" href=${userLoggedIn ? "/profile" : "/auth/login"} data-route>
            <i class="fa-regular fa-user header__icon"></i>
          </a>
        </div>
      </section>
    </header>
  `);
}
