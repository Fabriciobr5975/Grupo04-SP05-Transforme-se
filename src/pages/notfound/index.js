import BaseLayout from "../../layouts/index.js";

const template = `
  <div class="notfound-page">
    <section class="notfound-page__content">
      <span class="notfound-page__badge">
        Erro 404
      </span>
      <h1 class="notfound-page__title">
        Página não Encontrada
      </h1>
      <p class="notfound-page__description">
        Desculpe, mas não conseguimos encontrar a página que você está
        procurando.
      </p>
      <aside class="notfound-page__action">
        <i class="fa-solid fa-arrow-left notfound-page__icon"></i>
        <a
          href="/"
          class="notfound-page__link"
          data-route
        >
          Voltar para a página principal
        </a>
      </aside>
    </section>
  </div>
`;

const NotFoundPage = {
  template: BaseLayout(template),
  styles: "/src/pages/notfound/style.css"
}

export default NotFoundPage;
