import { setStyle } from "../../utils/PageUtil.js";
import Button from "../button/index.js";

const productRegistry = new Map();

function getFavoriteProducts() {
  return JSON.parse(sessionStorage.getItem("productsFavorites")) || [];
}

function updateFavoriteDisplay(productId, isFavorite) {
  const button = document.querySelector(`#favorite-product__button-product-${productId}`);
  if (!button) return;

  button.innerHTML = `
    ${isFavorite
      ? `<i class="fa-solid fa-heart favorite-product__icon"></i>`
      : `<i class="fa-regular fa-heart favorite-product__icon"></i>`}
  `;
}

function initFavoriteHandler() {
  if (window.productFavoriteHandlerInitialized) return;
  window.productFavoriteHandlerInitialized = true;

  document.addEventListener("click", (event) => {
    const button = event.target.closest(".product-card--favorite-product");
    if (!button) return;

    const productId = Number(button.dataset.productId);
    if (!Number.isInteger(productId)) return;

    const favoriteProducts = getFavoriteProducts();
    const favoriteIndex = favoriteProducts.findIndex(
      (favoriteProduct) => favoriteProduct.productId === productId
    );

    if (favoriteIndex >= 0) {
      favoriteProducts.splice(favoriteIndex, 1);
      sessionStorage.setItem("productsFavorites", JSON.stringify(favoriteProducts));
      updateFavoriteDisplay(productId, false);
      return;
    }

    if (favoriteProducts.length >= 10) {
      alert("Você já atingiu o limite de produtos favoritados (10 produtos)");
      return;
    }

    const product = productRegistry.get(productId);
    if (!product) return;

    favoriteProducts.push({...product, dateFavorited: new Date().toString()});
    sessionStorage.setItem("productsFavorites", JSON.stringify(favoriteProducts));
    updateFavoriteDisplay(productId, true);
  });
}

export default function ProductCard(product) {
  setStyle("/src/components/product-card/style.css");
  const productsFavorites = getFavoriteProducts();
  const isProductFavorite = productsFavorites.some((p) => p.productId === product.productId);

  productRegistry.set(product.productId, product);
  initFavoriteHandler();

  let productQuantity = 1;

  function handleProduct(event) {
    const button = event.target.closest(`#product-${product.productId}`);
    const imageButton = event.target.closest(`#image-product-${product.productId}`);
    if (!button && !imageButton) return;
    sessionStorage.setItem("productSelected", JSON.stringify(product));
    window.navigateTo("/product");
  }

  function updateQuantityDisplay() {
    const quantity = document.querySelector(`#product-card__quantity-${product.productId}`);
    if (!quantity) return;
    quantity.textContent = productQuantity;
  }

  function handleProductQuantityIncrease(event) {
    const button = event.target.closest(`#increase-quantity-${product.productId}`);
    if (!button) return;
    productQuantity++;
    updateQuantityDisplay();
  }

  function handleProductQuantityDecrease(event) {
    const button = event.target.closest(`#decrease-quantity-${product.productId}`);
    if (!button) return;
    if (productQuantity > 1) productQuantity--;
    updateQuantityDisplay();
  }

  window.addEventListener("click", handleProduct);
  window.addEventListener("click", handleProductQuantityIncrease);
  window.addEventListener("click", handleProductQuantityDecrease);

  return `
    <article class="product-card">
      <div class="product-card__media">
        <button
          id="favorite-product__button-product-${product.productId}"
          class="product-card--favorite-product"
          data-product-id="${product.productId}"
          type="button"
        >
          ${isProductFavorite ?
      `<i class="fa-solid fa-heart favorite-product__icon"></i>`
      : `<i class="fa-regular fa-heart favorite-product__icon"></i>`}
        </button>
        <button
          id="image-product-${product.productId}",
          class="product-card__media-link"
          aria-label="Adicionar produto"
        >
          <img
            src="${product.images[0] || 'src/assets/images/default-product.png'}"
            alt="${product.name}"
            loading="lazy"
            class="product-card__image"
          />
        </button>
        ${`
          <div class="product-card__overlay">
            <div class="product-card__controls">
              <button 
                id="decrease-quantity-${product.productId}"
                type="button" 
                ariaLabel="Diminuir quantidade" 
                class="product-card__button product-card__button--circle">
                -
              </button>
            
              <button 
                id="increase-quantity-${product.productId}"
                type="button" 
                ariaLabel="Aumentar quantidade" 
                class="product-card__button product-card__button--circle">
                +
              </button>
            </div>

            <span class="product-card__quantity" id="product-card__quantity-${product.productId}">${productQuantity}</span>

            <button type="button" class="product-card__button product-card__button--buy">
              Comprar
            </button>
          </div>`
    }
      </div>

      <div class="product-card__content">
        <div class="product-card__header">
          <h3 class="product-card__name">${product.name}</h3>
        </div>

        <strong class="product-card__price">
          R$ ${Number(product.price).toFixed(2).replace(".", ",")}
          <span class="product-card__unit">${product.saleByWeight ? '/kg' : '/qtd'}</span>
        </strong>
      </div>

      ${`
        <div class="product-card__actions">
          ${Button({
            id: `product-${product.productId}`,
            type: "button",
            class: "product-card__button product-card__button--primary",
            innerText: `Ver detalhes`,
          })}
          <a class="product-card__details-link" href="/checkout" data-route>
            <i class="fa-solid fa-cart-plus product-card__icon"></i>
            Comprar    
          </a>
        </div>
      `}
    </article>
  `;
}