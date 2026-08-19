import ProductCard from "../../../components/product-card/index.js";

const CATEGORIES = ["Todos", "Bolo", "Doce", "Cookie", "Torta", "Especiais"];

// Enum
const ORDERING_OPTIONS = [
    "Relevância",
    "Mais Vendidos",
    "Mais Recentes",
    "Produtos Mais Baratos",
    "Produtos Mais Caros",
    "Ordem Crescente (A - Z)",
    "Ordem Decrescente (Z - A)",
];

export function productPagedService() {
    const itemsPerPage = 12;
    let currentPage = 1;
    let currentItems = [];
    let hasBoundListeners = false;

    const renderPagination = (products = currentItems) => {
        const pagesCount = Math.ceil(products.length / itemsPerPage) || 1;
        const safeCurrentPage = Math.min(currentPage, pagesCount);
        currentPage = safeCurrentPage;

        const lastPageIndex = safeCurrentPage * itemsPerPage;
        const firstPageIndex = lastPageIndex - itemsPerPage;
        const pagedItems = products.slice(firstPageIndex, lastPageIndex);

        const productsList = document.querySelector(".catalog-page__products-list");
        const prevButton = document.querySelector(".catalog-page__products-pagination__button--prev");
        const nextButton = document.querySelector(".catalog-page__products-pagination__button--next");
        const resultsInfo = document.querySelector(".catalog-page__products-pagination__info");
        const pageCurrent = document.querySelector(".catalog-page__products-pagination__page-current");
        const pageCount = document.querySelector(".catalog-page__products-pagination__page-count");

        if (productsList) {
            productsList.innerHTML = pagedItems
                .map((product) => `<li class="catalog-page__products__item">${ProductCard(product)}</li>`).join("");
        }

        if (resultsInfo) resultsInfo.innerHTML = `
                Mostrando
                <span class="catalog-page__products-pagination__info--strong">${Math.min(firstPageIndex + 1, products.length)}</span>
                a
                <span class="catalog-page__products-pagination__info--strong">${Math.min(lastPageIndex, products.length)}</span>
                de
                <span class="catalog-page__products-pagination__info--strong">${products.length}</span> resultados
            `;

        if (pageCurrent) pageCurrent.textContent = String(safeCurrentPage);
        if (pageCount) pageCount.textContent = String(pagesCount);
        if (prevButton) prevButton.disabled = safeCurrentPage === 1;
        if (nextButton) nextButton.disabled = safeCurrentPage >= pagesCount;
    };

    const handleFilters = () => {
        const selectedCategoryValue = document.querySelector('input[name="product-category"]:checked').value;
        const selectedOrderValue = document.querySelector('input[name="product-filter"]:checked').value;
        let result = [...currentItems];

        if (selectedCategoryValue !== "Todos") {
            result = result.filter((p) => p.category === selectedCategoryValue);
        }

        return [...result].sort((a, b) => {
            switch (selectedOrderValue) {
                case "Mais Recentes":
                    return new Date(b.insertAt).getTime() - new Date(a.insertAt).getTime();
                case "Produtos Mais Baratos":
                    return a.price - b.price;
                case "Produtos Mais Caros":
                    return b.price - a.price;
                case "Ordem Crescente (A - Z)":
                    return a.name.trim().localeCompare(b.name.trim());
                case "Ordem Decrescente (Z - A)":
                    return b.name.trim().localeCompare(a.name.trim());
                default:
                    return 0;
            }
        });
    }

    const bindPaginationListeners = () => {
        if (hasBoundListeners) return;

        document.addEventListener("click", (event) => {
            const prevButton = event.target.closest(".catalog-page__products-pagination__button--prev");
            const nextButton = event.target.closest(".catalog-page__products-pagination__button--next");

            const filterRadios = document.querySelectorAll(".catalog-page__filter-option-input");
            if (filterRadios) {
                filterRadios.forEach(radio =>
                    radio.addEventListener("change", () => {
                        const newPagedItems = handleFilters();
                        renderPagination(newPagedItems);
                        return;
                    }));
            }

            if (prevButton) {
                currentPage = Math.max(currentPage - 1, 1);
                renderPagination();
                return;
            }

            if (nextButton) {
                const pagesCount = Math.ceil(currentItems.length / itemsPerPage) || 1;
                currentPage = Math.min(currentPage + 1, pagesCount);
                renderPagination();
            }
        });

        hasBoundListeners = true;
    };

    const getPagedData = (items) => {
        currentItems = items;
        currentPage = Math.min(currentPage, Math.ceil(items.length / itemsPerPage) || 1);
        bindPaginationListeners();
        renderPagination();

        const pagesCount = Math.ceil(items.length / itemsPerPage) || 1;
        const lastPageIndex = currentPage * itemsPerPage;
        const firstPageIndex = lastPageIndex - itemsPerPage;
        const pagedItems = items.slice(firstPageIndex, lastPageIndex);

        return {
            pagedItems,
            pagesCount,
            firstPageIndex,
            lastPageIndex,
            currentPage,
        };
    };

    return { currentPage, getPagedData, renderPagination };
}

