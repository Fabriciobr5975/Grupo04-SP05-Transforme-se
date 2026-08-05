import BaseLayout from "../../../layouts/index.js";

const template = `
  <div class="layout-user-page">
    <div class="user-page__topbar">
      <button type="button" class="user-page__back-button">
        <i class="fa-solid fa-arrow-left user-page-icon"></i>
        Voltar
      </button>
    </div>

    <div class="layout-user-page__content">
      <header class="favorite-page__header">
        <div class="favorite-page__header-text">
          <h1>Favoritos</h1>
          <p>Reveja ou edite os produtos que favoritou. Você pode salvar até 10 produtos!</p>
        </div>
      </header>

      <aside class="favorite-page__summary" aria-label="Resumo da lista de favoritos">
        <p><span>Sua lista conta com</span> • 1 item salvo no total</p>
        <button type="button" class="favorite-page__button favorite-page__button--primary favorite-page__button--reset">
          Resetar Lista
        </button>
      </aside>

      <section class="favorite-page__content" aria-label="Produtos favoritos">
        <div class="favorite-page__items">
          <article class="favorite-page__item">
            <div class="favorite-page__item-image">
              <img src="https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=700&q=80" alt="Imagem do produto" />
            </div>

            <div class="favorite-page__item-body">
              <div class="favorite-page__item-heading">
                <h2>Box de Trufas Premium</h2>
                <button type="button" class="favorite-page__button favorite-page__button--link" aria-label="Remover item dos favoritos">
                  <i class="fa-regular fa-trash-can"></i>
                </button>
              </div>

              <p class="favorite-page__item-meta">Favoritou: 19/07/2026</p>

              <button type="button" class="favorite-page__button favorite-page__button--primary favorite-page__button--product">
                Ver detalhes do produto
              </button>
            </div>
          </article>
        </div>
      </section>
    </div>
  </div>
`;

const UserAddressesPage = {
  template: BaseLayout(template),
  styles: "/src/pages/user/favorites/style.css"
};

export default UserAddressesPage;