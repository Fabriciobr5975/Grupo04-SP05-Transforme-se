import { setStyle } from "../../utils/PageUtil.js";
import Button from "../button/index.js";

export default function ProductCard() {
  setStyle("/src/components/product-card/style.css");

  return `
    <article class="product-card">
      <div class="product-card__media">
        <a
          class="product-card__media-link"
          href="#"
          aria-label="Adicionar produto"
          data-route
        >
          <img
            src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=700&q=80}"
            alt="Produto"
            class="product-card__image"
          />
        </a>
      </div>

      <div class="product-card__content">
        <div class="product-card__header">
          <h3 class="product-card__name">CupCake</h3>
        </div>

        <strong class="product-card__price">
          R$ 59,00
          <span class="product-card__unit">/qtd</span>
        </strong>
      </div>

      ${`
        <div class="product-card__actions">
          ${Button({
            type: "button",
            class: "product-card__button product-card__button--primary",
            innerText: `
                Ver detalhes
            `,
            })}

          <a class="product-card__details-link" href="#" data-route>
            <i class="fa-solid fa-cart-plus product-card__icon"></i>
            Comprar    
          </a>
        </div>
      `}
    </article>
  `;
}


/**
 * 
 * ${`
            <div class="product-card__overlay">
              <div class="product-card__controls">
                ${Button({
                type: "button",
                ariaLabel: "Diminuir quantidade",
                class: "product-card__button product-card__button--circle",
                innerText: "-",
                })}

                ${Button({
                type: "button",
                ariaLabel: "Aumentar quantidade",
                class: "product-card__button product-card__button--circle",
                innerText: "+",
                })}
              </div>

              <span class="product-card__quantity">${1}</span>

              ${Button({
                type: "button",
                class: "product-card__button product-card__button--buy",
                innerText: "Comprar",
              })}
            </div>`}
 * 
 */