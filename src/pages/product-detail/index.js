import BaseLayout from "../../layouts/index.js";
import Input from "../../components/input/index.js";

const template = `
  <section class="product-detail-page">
    <div class="product-detail-page__topbar">
      <button type="button" class="product-detail-page__back-button">
        <i class="fa-solid fa-arrow-left product-detail-page__back-icon"></i>
        Voltar
      </button>
    </div>

    <div class="product-detail-page__main">
      <div class="product-detail-page__gallery">
        <button type="button" class="product-detail-page__gallery-button">
          <img
            src="src/assets/images/bolo-homepage.png"
            alt="Imagem do produto"
            class="product-detail-page__image"
          />
        </button>
      </div>

      <div class="product-detail-page__details">
        <div class="product-detail-page__header">
          <h1 class="product-detail-page__title">Bolo de Chocolate</h1>
          <span class="product-detail-page__category">Bolo</span>
          <div class="product-detail-page__review-rating-title">
            <span class="product-detail-page__review-stars">★★★★★</span>
            <strong>(5)</strong>
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
            <button type="button" class="product-detail-page__quantity-button">-</button>
            <span class="product-detail-page__quantity-value">1</span>
            <button type="button" class="product-detail-page__quantity-button">+</button>
          </div>
          
          <p class="product-detail-page__price">
            R$ 85,00
            <span class="product-detail-page__price-unit">/kg</span>
          </p>
          <div class="product-detail-page__buttons">
            <button type="button" class="product-detail-page__button">
              <i class="fa-solid fa-cart-plus"></i>
              Comprar
            </button>
            <button type="button" class="product-detail-page__button">
              <i class="fa-solid fa-basket-shopping"></i>
              Adicionar ao carrinho
            </button>
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
        Farinha de trigo • Açúcar • Ovos • Chocolate • Manteiga • Leite • Fermento
      </p>
    </section>

    <section class="product-detail-page__section product-detail-page__section-reviews">
      <h2 class="product-detail-page__section-title">Comentários:</h2>
      <div class="product-detail-page__reviews">
        <article class="product-detail-page__review-card">
          <div class="product-detail-page__review-header">
            <div class="product-detail-page__review-author">
              <span class="product-detail-page__review-avatar">A</span>
              <div>
                <h3 class="product-detail-page__review-name">Ana</h3>
                <span class="product-detail-page__review-meta">Avaliação do cliente</span>
              </div>
            </div>
            <div class="product-detail-page__review-rating">
              <span class="product-detail-page__review-stars">★★★★★</span>
              <strong>5/5</strong>
            </div>
          </div>
          <p class="product-detail-page__review-comment">
            Excelente bolo! Sabor equilibrado e textura macia. Recomendo para festas e comemorações.
          </p>
        </article>

        <article class="product-detail-page__review-card">
          <div class="product-detail-page__review-header">
            <div class="product-detail-page__review-author">
              <span class="product-detail-page__review-avatar">M</span>
              <div>
                <h3 class="product-detail-page__review-name">Marcos</h3>
                <span class="product-detail-page__review-meta">Avaliação do cliente</span>
              </div>
            </div>
            <div class="product-detail-page__review-rating">
              <span class="product-detail-page__review-stars">★★★★★</span>
              <strong>4.8/5</strong>
            </div>
          </div>
          <p class="product-detail-page__review-comment">
            Entrega rápida e produto embalado com cuidado. O sabor do chocolate é intenso e delicioso.
          </p>
        </article>
      </div>
    </section>
  </section>
`;

const ProductDetailPage = {
  template: BaseLayout(template),
  styles: "/src/pages/product-detail/style.css"
};

export default ProductDetailPage;
