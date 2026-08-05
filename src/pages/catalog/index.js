import BaseLayout from "../../layouts/index.js";
import ProductCard from "../../components/product-card/index.js"

const template = `
  <div class="catalog-page">
    <section class="catalog-page__main">
      <div role="image" class="catalog-page__image"></div>
        <section class="catalog-page__header">
          <h1 class="catalog-page__title">Nossos Produtos</h1>
          <hr />
          <p class="catalog-page__search-result">
            6 resultados
          </p>
      </section>
      
      <section class="catalog-page__content">
        <section class="catalog-page__filters">
          <div class="catalog-page__filter-options">
            <h2 class="catalog-page__filter-title">Categorias</h2>
            <label class="catalog-page__filter-option catalog-page__filter-option--active">
                <input
                  class="catalog-page__filter-option-input"
                  type="radio"
                  name="product-category"
                  checked
                  readonly
                />
              <span class="catalog-page__filter-option-text">Todos</span>
            </label>

            <label class="catalog-page__filter-option catalog-page__filter-option--active">
                <input
                  class="catalog-page__filter-option-input"
                  type="radio"
                  name="product-category"
                  readonly
                />
              <span class="catalog-page__filter-option-text">Bolos e Tortas Doces</span>
            </label>

            <label class="catalog-page__filter-option catalog-page__filter-option--active">
                <input
                  class="catalog-page__filter-option-input"
                  type="radio"
                  name="product-category"
                  readonly
                />
              <span class="catalog-page__filter-option-text">Doces</span>
            </label>

            <label class="catalog-page__filter-option catalog-page__filter-option--active">
                <input
                  class="catalog-page__filter-option-input"
                  type="radio"
                  name="product-category"
                  readonly
                />
              <span class="catalog-page__filter-option-text">Coockies</span>
            </label>

            <label class="catalog-page__filter-option catalog-page__filter-option--active">
                <input
                  class="catalog-page__filter-option-input"
                  type="radio"
                  name="product-category"
                  readonly
                />
              <span class="catalog-page__filter-option-text">Especiais</span>
            </label>
            </div> 

            <div class="catalog-page__filter-options">
            <h2 class="catalog-page__filter-title">Filtros</h2>
            <label class="catalog-page__filter-option catalog-page__filter-option--active">
                <input
                  class="catalog-page__filter-option-input"
                  type="radio"
                  name="product-filter"
                  checked
                  readonly
                />
              <span class="catalog-page__filter-option-text">Relevância</span>
            </label>

            <label class="catalog-page__filter-option catalog-page__filter-option--active">
              <input
                  class="catalog-page__filter-option-input"
                  type="radio"
                  name="product-filter"
                  checked
                  readonly
                />
              <span class="catalog-page__filter-option-text">Mais Vendidos</span>
            </label>

            <label class="catalog-page__filter-option catalog-page__filter-option--active">
              <input
                  class="catalog-page__filter-option-input"
                  type="radio"
                  name="product-filter"
                  checked
                  readonly
                />
              <span class="catalog-page__filter-option-text">Mais Baratos</span>
            </label>

            <label class="catalog-page__filter-option catalog-page__filter-option--active">
              <input
                  class="catalog-page__filter-option-input"
                  type="radio"
                  name="product-filter"
                  checked
                  readonly
                />
              <span class="catalog-page__filter-option-text">Lançamentos / Recentes</span>
            </label>

            <label class="catalog-page__filter-option catalog-page__filter-option--active">
              <input
                  class="catalog-page__filter-option-input"
                  type="radio"
                  name="product-filter"
                  checked
                  readonly
                />
              <span class="catalog-page__filter-option-text">Ordem Crescente (A - Z)</span>
            </label>

            <label class="catalog-page__filter-option catalog-page__filter-option--active">
              <input
                  class="catalog-page__filter-option-input"
                  type="radio"
                  name="product-filter"
                  checked
                  readonly
                />
              <span class="catalog-page__filter-option-text">Ordem Decrescente (Z - A)</span>
            </label>

            </div> 
        </section>
        <section class="catalog-page__products">
            <ul class="catalog-page__products-list">
              ${Array.from({ length: 6 }, () => `
                  <li class="catalog-page__products__item">
                  ${ProductCard()}
                  </li>
              `).join("")}
            </ul>
            <nav class="catalog-page__products-pagination">
              <div class="catalog-page__products-pagination__info">
                Mostrando 
                <span class="catalog-page__products-pagination__info--strong">1</span> 
                a 
                <span class="catalog-page__products-pagination__info--strong">6</span> 
                de 
                <span class="catalog-page__products-pagination__info--strong">6</span> resultados
              </div>

              <div class="catalog-page__products-pagination__controls">
                <button class="catalog-page__products-pagination__button catalog-page__products-pagination__button--prev" disabled>
                  Anterior
                </button>

                <div class="catalog-page__products-pagination__page">
                  Página <span class="catalog-page__products-pagination__page-current">1</span> de <span class="catalog-page__products-pagination__page-count">1</span>
                </div>

                <button class="catalog-page__products-pagination__button catalog-page__products-pagination__button--next" disabled>
                  Próxima
                </button>
              </div>
            </nav>
        </section>
      </section>
      <aside class="catalog-page__disclaimer-delivery">
        <img src="/src/assets/icons/delivery.svg" alt="Imagem decorativa" />
        <div class="catalog-page__disclaimer-delivery__info">
          <p class="catalog-page__disclaimer-delivery--title">
            Entrega Rápida, Direto na Sua Porta
          </p>
          <p class="catalog-page__disclaimer-delivery--text">
            Receba seus produtos favoritos no conforto de casa, com todo o cuidado que eles e você merecem.
          </p>
        </div>
      </aside>
    </section>
  </div>
`;

const ProductPage = {
    template: BaseLayout(template),
    styles: "/src/pages/catalog/style.css"
};

export default ProductPage;
