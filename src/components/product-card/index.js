import { setStyle } from "../../utils/PageUtil.js";
import Button from "../button/index.js";

export default function ProductCard(product) {
  setStyle("/src/components/product-card/style.css");

  function handleProduct(event) {
    const button = event.target.closest(`#product-${product.productId}`);
    if (!button) return;
    sessionStorage.setItem("productSelected", JSON.stringify(product));
    window.navigateTo("/product");
  }

  let productQuantity = 1;

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
        <a
          class="product-card__media-link"
          href="/product"
          aria-label="Adicionar produto"
          data-route
        >
          <img
            src="${product.images[0] || 'src/assets/images/default-product.png'}"
            alt="${product.name}"
            class="product-card__image"
          />
        </a>
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