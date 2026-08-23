import { setStyle } from "../../utils/PageUtil.js";

export default function Header() {
  setStyle("/src/components/header/style.css");
  const currentPath = window.location.pathname || "/";

  const userIsLogged = () => 
    sessionStorage.getItem("loggedInUser") ? true : false;

  const getActiveClass = (path) =>
    currentPath === path
      ? "navbar__list__item--active"
      : "navbar__list__item--no-active";

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
                <hr class="${getActiveClass("/")}" />
              </a>
            </li>
            <li class="navbar__list__item">
              <a href="/catalog" data-route>
                Produtos
                <hr class="${getActiveClass("/catalog")}" />
              </a>
            </li>
            <li class="navbar__list__item">
              <a href="/about-us" data-route>
                Sobre Nós
                <hr class="${getActiveClass("/about-us")}" />
              </a>
            </li>
            <li class="navbar__list__item">
              <a href="/help-center" data-route>
                Suporte
                <hr class="${getActiveClass("/help-center")}" />
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

          <a class="icon-section__btn" href=${userIsLogged() ? "/profile" : "/auth/login"} data-route>
            <i class="fa-regular fa-user header__icon"></i>
          </a>
        </div>
      </section>
    </header>
  `);
}
