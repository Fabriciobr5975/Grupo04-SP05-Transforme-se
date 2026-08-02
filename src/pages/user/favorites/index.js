import BaseLayout from "../../../layouts/index.js";

const template = `
  <div class="layout-user-page">
    <div class="layout-user-page__content">
      <header class="favorite-page__header">
        <div class="favorite-page__header-text">
          <h1>Meu Carrinho</h1>
          <p>Reveja seus itens, ajuste a quantidade e finalize sua compra.</p>
        </div>
      </header>

      <aside class="favorite-page__info-favorites">
        <p><span>Sua Lista conta com </span> • 1 item salvo no total</p>
        <button class="favorite-page__button favorite-page__button--primary favorite-page__button--reset">
          Resetar Lista
        </button>
      </aside>

      <section class="favorite-page__content">
        <div class="favorite-page__items">
          <article class="favorite-page__item">
            <div class="favorite-page__item-image">
              <img src="https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=700&q=80" alt="Imagem do produto" />
            </div>

            <div class="favorite-page__item-body">
              <div class="favorite-page__item-heading">
                <h2>Box de Trufas Premium</h2>
                <button type="button" class="favorite-page__button favorite-page__button--link">
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
  </div >  
`;

const UserAddressesPage = {
  template: BaseLayout(template),
  styles: "/src/pages/user/favorites/style.css"
};

export default UserAddressesPage;