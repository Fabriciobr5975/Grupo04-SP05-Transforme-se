"use strict";

export function useFavorites() {
  const favorites = JSON.parse(sessionStorage.getItem("productsFavorites")) ?? [];
  let quantityOfProducts = favorites.length;

  const removeProduct = (id) => {
    const productsList = document.querySelector(".favorite-page__items");
    const infoQuantity = document.querySelector(".favorite-page__summary--info");

    if (!productsList || !infoQuantity) return;

    const productId = Number(id);
    if (!Number.isInteger(productId)) return;

    const favoriteProducts = [...favorites];
    const favoriteIndex = favoriteProducts.findIndex(
      (favoriteProduct) => favoriteProduct.productId === productId
    );

    if (favoriteIndex >= 0) {
      favoriteProducts.splice(favoriteIndex, 1);
      favorites.splice(0, favorites.length, ...favoriteProducts);
      sessionStorage.setItem("productsFavorites", JSON.stringify(favoriteProducts));
      productsList.innerHTML = updateFavoriteDisplay(favoriteProducts);
      infoQuantity.innerHTML = updateListQuantityInfo(favoriteProducts.length);
    }
  };

  const clearListFavorites = () => {
    if (favorites.length === 0) return;
    sessionStorage.removeItem("productsFavorites");

    const productsList = document.querySelector(".favorite-page__items");
    const infoQuantity = document.querySelector(".favorite-page__summary--info");

    if (productsList) productsList.innerHTML = updateFavoriteDisplay();
    if (infoQuantity) infoQuantity.innerHTML = updateListQuantityInfo();
  }

  function handleProduct(id) {
    const productId = Number(id);
    if (!Number.isInteger(productId)) return;

    const product = favorites.find((product) => product.productId === productId);

    sessionStorage.setItem("productSelected", JSON.stringify(product));
    window.navigateTo("/product");
  }

  document.addEventListener("click", () => {
    const clearCartButton = document.querySelector("#clear-favorites");
    const removeProductButton = document.querySelectorAll(".remove-favorite");
    const showProductButton = document.querySelectorAll(".favorite-page__button--product");

    clearCartButton.addEventListener("click", clearListFavorites)
    removeProductButton.forEach((button) => button.addEventListener("click", () => removeProduct(button.dataset.productId)));
    showProductButton.forEach((button) => button.addEventListener("click", () => handleProduct(button.dataset.productId)))
  });

  window.addEventListener("click", handleProduct);

  return { productsFavorites: favorites, quantityOfProducts, buildFavoritedDate };
}

function buildFavoritedDate(dateString) {
  const date = new Date(dateString).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });

  return date;
}

function updateFavoriteDisplay(productsFavorites = []) {
  return (`
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
    `).join("") : ""}
  `);
}

function updateListQuantityInfo(quantity = 0) {
  return (`<span>Sua lista conta com</span> • ${quantity} item salvo no total`)
}
