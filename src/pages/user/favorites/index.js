import BaseLayout from "../../../layouts/index.js";
import { useFavorites } from "./FavoritesService.js";

const { productsFavorites, quantityOfProducts, buildFavoritedDate} = useFavorites();

const template = `
  <div class="layout-user-page">
    <div class="user-page__topbar">
      <button type="button" class="user-page__back-button" onclick="window.history.back()">
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
        <p class="favorite-page__summary--info"><span>Sua lista conta com</span> • ${quantityOfProducts} item salvo no total</p>
        <button 
          id="clear-favorites"
          type="button" 
          class="favorite-page__button 
          favorite-page__button--primary favorite-page__button--reset"
        >
          Resetar Lista
        </button>
      </aside>

      <section class="favorite-page__content" aria-label="Produtos favoritos">
        <div class="favorite-page__items">
          ${Array.isArray(productsFavorites) && productsFavorites.length > 0 ? productsFavorites.map(product => 
          `
          <article class="favorite-page__item">
            <div class="favorite-page__item-image">
              <img src="${product?.images[0] || 'src/assets/images/default-product.png'}" alt="${product.name}" />
            </div>

            <div class="favorite-page__item-body">
              <div class="favorite-page__item-heading">
                <h2>${product.name}</h2>
                <button 
                  id="favorite-product__button-remove-${product.productId}" 
                  data-product-id="${product.productId}"
                  type="button" 
                  class="favorite-page__button favorite-page__button--link remove-favorite" 
                  aria-label="Remover item dos favoritos"
                >
                  <i class="fa-regular fa-trash-can"></i>
                </button>
              </div>

              <p class="favorite-page__item-meta">Favoritou: ${buildFavoritedDate(product.dateFavorited)}</p>

              <button
                id="product-${product.productId}"
                data-product-id="${product.productId}"
                type="button" 
                class="favorite-page__button favorite-page__button--primary favorite-page__button--product"
              >
                Ver detalhes do produto
              </button>
            </div>
          </article>
          `
          ).join("") : ""}
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