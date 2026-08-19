import { products } from "../../../seeds/products.js";
import ProductCard from "../../components/product-card/index.js";
import BaseLayout from "../../layouts/index.js";
import { productPagedService } from "./Services/CatalogService.js";

const { currentPage, getPagedData } = productPagedService();
const { pagedItems, pagesCount, firstPageIndex, lastPageIndex } = getPagedData(products);

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
        
        <!---- Seção de Filtros ---->
        <section class="catalog-page__filters">
          <div class="filter-dropdown">
            <button
              id="filter-manipulation-category"
              type="button"
              class="filter-manipulation"
              aria-expanded="false"
              aria-controls="catalog-filter-menu"
            >
              <span class="filter-manipulation__label">
                <i class="fa-solid fa-filter"></i>
                Filtros
              </span>
              <i class="fa-solid fa-angle-down filter-manipulation__arrow"></i>
            </button>

            <!---- Filtros ---->
            <div id="catalog-filter-menu" class="dropbox-filter">
              
              <!---- Categorias ---->
              <div class="catalog-page__filter-options">
                <h2 class="catalog-page__filter-title">Categorias</h2>
                <label class="catalog-page__filter-option">
                  <input
                    class="catalog-page__filter-option-input"
                    type="radio"
                    name="product-category"
                    value="Todos"
                    checked
                  />
                  <span class="catalog-page__filter-option-indicator" aria-hidden="true">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <span class="catalog-page__filter-option-text">Todos</span>
                </label>

                <label class="catalog-page__filter-option">
                  <input
                    class="catalog-page__filter-option-input"
                    type="radio"
                    name="product-category"
                    value="Bolo"
                  />
                  <span class="catalog-page__filter-option-indicator" aria-hidden="true">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <span class="catalog-page__filter-option-text">Bolos e Tortas Doces</span>
                </label>

                <label class="catalog-page__filter-option">
                  <input
                    class="catalog-page__filter-option-input"
                    type="radio"
                    name="product-category"
                    value="Doce"
                  />
                  <span class="catalog-page__filter-option-indicator" aria-hidden="true">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <span class="catalog-page__filter-option-text">Doces</span>
                </label>

                <label class="catalog-page__filter-option">
                  <input
                    class="catalog-page__filter-option-input"
                    type="radio"
                    name="product-category"
                    value="Cookie"
                  />
                  <span class="catalog-page__filter-option-indicator" aria-hidden="true">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <span class="catalog-page__filter-option-text">Coockies</span>
                </label>

                <label class="catalog-page__filter-option">
                  <input
                    class="catalog-page__filter-option-input"
                    type="radio"
                    name="product-category"
                    value="Especiais"
                  />
                  <span class="catalog-page__filter-option-indicator" aria-hidden="true">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <span class="catalog-page__filter-option-text">Especiais</span>
                </label>
              </div>

              <!---- Filtros ---->
              <div class="catalog-page__filter-options">
                <h2 class="catalog-page__filter-title">Filtros</h2>
                <label class="catalog-page__filter-option">
                  <input
                    class="catalog-page__filter-option-input"
                    type="radio"
                    name="product-filter"
                    value="Relevância"
                    checked
                  />
                  <span class="catalog-page__filter-option-indicator" aria-hidden="true">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <span class="catalog-page__filter-option-text">Relevância</span>
                </label>

                <label class="catalog-page__filter-option">
                  <input
                    class="catalog-page__filter-option-input"
                    type="radio"
                    name="product-filter"
                    value="Mais Vendidos"
                  />
                  <span class="catalog-page__filter-option-indicator" aria-hidden="true">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <span class="catalog-page__filter-option-text">Mais Vendidos</span>
                </label>

                <label class="catalog-page__filter-option">
                  <input
                    class="catalog-page__filter-option-input"
                    type="radio"
                    name="product-filter"
                    value="Mais Recentes"
                  />
                  <span class="catalog-page__filter-option-indicator" aria-hidden="true">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <span class="catalog-page__filter-option-text">Mais Recentes</span>
                </label>

                <label class="catalog-page__filter-option">
                  <input
                    class="catalog-page__filter-option-input"
                    type="radio"
                    name="product-filter"
                    value="Produtos Mais Baratos"
                  />
                  <span class="catalog-page__filter-option-indicator" aria-hidden="true">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <span class="catalog-page__filter-option-text">Produtos Mais Baratos</span>
                </label>

                <label class="catalog-page__filter-option">
                  <input
                    class="catalog-page__filter-option-input"
                    type="radio"
                    name="product-filter"
                    value="Produtos Mais Caros"
                  />
                  <span class="catalog-page__filter-option-indicator" aria-hidden="true">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <span class="catalog-page__filter-option-text">Produtos Mais Caros</span>
                </label>

                <label class="catalog-page__filter-option">
                  <input
                    class="catalog-page__filter-option-input"
                    type="radio"
                    name="product-filter"
                    value="Ordem Crescente (A - Z)"
                  />
                  <span class="catalog-page__filter-option-indicator" aria-hidden="true">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <span class="catalog-page__filter-option-text">Ordem Crescente (A - Z)</span>
                </label>
                 <label class="catalog-page__filter-option">
                  <input
                    class="catalog-page__filter-option-input"
                    type="radio"
                    name="product-filter"
                    value="Ordem Decrescente (Z - A)"
                  />
                  <span class="catalog-page__filter-option-indicator" aria-hidden="true">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <span class="catalog-page__filter-option-text">Ordem Decrescente (Z - A)</span>
                </label>
              </div>
            </div>

          </div>
        </section>
        <section class="catalog-page__products">
            <ul class="catalog-page__products-list">
              ${pagedItems.map((product) => `
                  <li class="catalog-page__products__item">
                  ${ProductCard(product)}
                  </li>
              `).join("")}
            </ul>
            <nav class="catalog-page__products-pagination">
              <div class="catalog-page__products-pagination__info">
                Mostrando 
                <span class="catalog-page__products-pagination__info--strong">${firstPageIndex + 1}</span> 
                a 
                <span class="catalog-page__products-pagination__info--strong">${lastPageIndex}</span> 
                de 
                <span class="catalog-page__products-pagination__info--strong">${products.length}</span> resultados
              </div>

              <div class="catalog-page__products-pagination__controls">
                <button class="catalog-page__products-pagination__button catalog-page__products-pagination__button--prev" disabled="false">
                  Anterior
                </button>

                <div class="catalog-page__products-pagination__page">
                  Página <span class="catalog-page__products-pagination__page-current">${currentPage}</span> de <span class="catalog-page__products-pagination__page-count">${pagesCount}</span>
                </div>

                <button class="catalog-page__products-pagination__button catalog-page__products-pagination__button--next">
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
  styles: "/src/pages/catalog/style.css",
  scripts: "/src/pages/catalog/services/FilterService.js"
};

export default ProductPage;

