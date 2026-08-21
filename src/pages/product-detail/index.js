import BaseLayout from "../../layouts/index.js";
import Input from "../../components/input/index.js";
import { useProductDetail } from "./ProductDetailService.js";

export default function ProductDetailPage() {
  const { product, reviewsByUser, productQuantity, cleanup } = useProductDetail();

  const template = `
  <section class="product-detail-page">
    <div class="product-detail-page__topbar">
      <button type="button" class="product-detail-page__back-button" onclick="window.history.back()">
        <i class="fa-solid fa-arrow-left product-detail-page__back-icon"></i>
        Voltar
      </button>
    </div>

    ${product ? ` 
      <div>
        <div class="product-detail-page__main">
          <div class="product-detail-page__gallery">
            <button type="button" class="product-detail-page__gallery-button">
              <img
                src="${product?.images[0] || 'src/assets/images/default-product.png'}"
                alt="${product.name}"
                class="product-detail-page__image"
              />
            </button>

            <div class="product-detail-page__gallery-thumbnails">
              ${product?.images.map((image, index) => `
                <button 
                  type="button" 
                  class="product-detail-page__gallery-thumbnail ${index === 0 ? 'selected' : ''}" 
                  title="Imagem ${index + 1} de ${product.images.length}" 
                  id="thumbnail-${index + 1}">
                    <img
                      src="${image}"
                      alt="${product.name} - Imagem ${index + 1}"
                      class="product-detail-page__thumbnail-image"
                    />
                </button>
              `).join("")}
            </div>
          </div>

          <div class="product-detail-page__details">
            <div class="product-detail-page__header">
              <h1 class="product-detail-page__title">${product.name}</h1>
              <span class="product-detail-page__category">${product.category}</span>
              <div class="product-detail-page__review-rating-title">
                <span class="product-detail-page__review-stars">★★★★★</span>
                <strong>(${product.reviewRating})</strong>
              </div>
            </div>

            <div class="product-detail-page__freight">
              <div class="product-detail-page__freight-header">
                <div class="product-detail-page__freight-title">
                  <i class="fa-solid fa-truck-fast product-detail-page__freight-icon"></i>
                  Consultar Frete
                </div>
                <a
                  href="https://buscacepinter.correios.com.br/app/endereco/index.php?t"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="product-detail-page__freight-link"
                >
                  Encontrar meu CEP
                </a>
              </div>
              ${Input("input-freight", null, { type: "search", placeholder: "Calcular frete" })}
              <p class="product-detail-page__freight-value">Valor do frete: R$ 50,00</p>
            </div>

            <div class="product-detail-page__purchase">
              <div class="product-detail-page__quantity-input">
                <button type="button" id="decrease-quantity" class="product-detail-page__quantity-button">-</button>
                <span class="product-detail-page__quantity-value">${productQuantity}</span>
                <button type="button" id="increase-quantity" class="product-detail-page__quantity-button">+</button>
              </div>
              
              <p class="product-detail-page__price">
                R$ ${Number(product.price).toFixed(2).replace(".", ",")}
                <span class="product-detail-page__price-unit">${product.saleByWeight ? '/kg' : '/qtd'}</span>
              </p>
              <div class="product-detail-page__buttons">
                <a href="/checkout" class="product-detail-page__button" data-route>
                  <i class="fa-solid fa-cart-plus"></i>
                  Comprar
                </a>
                <a href="/cart" id="product-detail--add-cart" class="product-detail-page__button" data-route>
                  <i class="fa-solid fa-basket-shopping"></i>
                  Adicionar ao carrinho
                </a>
              </div>
            </div>
          </div>
        </div>

        <section class="product-detail-page__section">
          <h2 class="product-detail-page__section-title">Descrição:</h2>
          <p class="product-detail-page__section-text">
            Um bolo clássico de chocolate com massa macia e cobertura cremosa. Perfeito para celebrar ocasiões especiais com sabor e beleza.
          </p>
        </section>

        <section class="product-detail-page__section">
          <h2 class="product-detail-page__section-title">Ingredientes:</h2>
          <p class="product-detail-page__section-text product-detail-page__section-text--center">
            ${product.ingredients.length > 0 ? product.ingredients.map((ingredient) => `${ingredient.name}`).join(" • ") : "Ingredientes não informados."}
          </p>
        </section>

        <section class="product-detail-page__section product-detail-page__section-reviews">
          <h2 class="product-detail-page__section-title">Comentários:</h2>
          <div class="product-detail-page__reviews">
            ${!reviewsByUser ? Array.from(reviewsByUser.values())[0].map((values) => `
                <article class="product-detail-page__review-card">
                  <div class="product-detail-page__review-header">
                    <div class="product-detail-page__review-author">
                      <span class="product-detail-page__review-avatar">${values.reviewUser.firstName.charAt(0)}</span>
                      <div>
                    <h3 class="product-detail-page__review-name">${values.reviewUser.firstName} - "${values.review.title}"</h3>
                    <span class="product-detail-page__review-meta">Avaliação do cliente</span>
                  </div>
                </div>
                <div class="product-detail-page__review-rating">
                  <span class="product-detail-page__review-stars">★★★★★</span>
                  <strong>${values.review.rating}/5</strong>
                </div>
              </div>
              <p class="product-detail-page__review-comment">
              ${values.review.description} 
              </p>
            </article>
            `).join("") : "<p class='review-notfound'>Esse produto ainda não tem comentários</p>"}
          </div>
        </section>
      </div>`
    : `<p class="product-detail-page__not-found">
            Produto não encontrado. Esse produto pode ter sido removido ou
            alterado. Para dúvidas entre em contato!
         </p>`
  }
  </section>
`;

  return {
    template: BaseLayout(template),
    styles: "/src/pages/product-detail/style.css",
    cleanup,
  };
}
