import ProductCard from "../../../components/product-card/index.js";

export function productPagedService() {
    const itemsPerPage = 12;
    let currentPage = 1;
    let currentItems = [];
    let hasBoundListeners = false;

    const renderPagination = (productFilter = currentItems) => {
        const pagesCount = Math.ceil(productFilter.length / itemsPerPage) || 1;
        const safeCurrentPage = Math.min(currentPage, pagesCount);
        currentPage = safeCurrentPage;

        const lastPageIndex = safeCurrentPage * itemsPerPage;
        const firstPageIndex = lastPageIndex - itemsPerPage;
        const pagedItems = productFilter.slice(firstPageIndex, lastPageIndex);

        const productsList = document.querySelector(".catalog-page__products-list");
        const prevButton = document.querySelector(".catalog-page__products-pagination__button--prev");
        const nextButton = document.querySelector(".catalog-page__products-pagination__button--next");
        const resultsInfo = document.querySelector(".catalog-page__products-pagination__info");
        const pageCurrent = document.querySelector(".catalog-page__products-pagination__page-current");
        const productsResultInfo = document.querySelector(".catalog-page__search-result");
        const pageCount = document.querySelector(".catalog-page__products-pagination__page-count");

        if (productsResultInfo) productsResultInfo.innerHTML = `${productFilter.length} produto(s)`;

        if (productsList)
            productsList.innerHTML = Array.isArray(pagedItems) && pagedItems.length > 0 ? pagedItems.map((product) => `
                <li class="catalog-page__products__item">
                  ${ProductCard(product)}
                </li>`).join("") : `<p class="catalog-page__products--notfound">Nenhum produto foi encontrado!</p>`;

        if (resultsInfo) resultsInfo.innerHTML = `
                Mostrando
                <span class="catalog-page__products-pagination__info--strong">${Math.min(firstPageIndex + 1, productFilter.length)}</span>
                a
                <span class="catalog-page__products-pagination__info--strong">${Math.min(lastPageIndex, productFilter.length)}</span>
                de
                <span class="catalog-page__products-pagination__info--strong">${productFilter.length}</span> resultados
            `;

        window.scrollTo({
            top: 300,
            behavior: "smooth",
        });

        if (pageCurrent) pageCurrent.textContent = String(safeCurrentPage);
        if (pageCount) pageCount.textContent = String(pagesCount);
        if (prevButton) prevButton.disabled = safeCurrentPage === 1;
        if (nextButton) nextButton.disabled = safeCurrentPage >= pagesCount;
    };

    const handleFilters = () => {
        const selectedCategoryValue = document.querySelector('input[name="product-category"]:checked').value;
        const selectedOrderValue = document.querySelector('input[name="product-filter"]:checked').value;
        let result = [...currentItems];

        if (selectedCategoryValue !== "Todos")
            result = result.filter((p) => p.category === selectedCategoryValue);

        return result.toSorted((a, b) => {
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

    const getProductFilters = () => handleFilters();

    const bindPaginationListeners = () => {
        if (hasBoundListeners) return;

        document.addEventListener("click", (event) => {
            const prevButton = event.target.closest(".catalog-page__products-pagination__button--prev");
            const nextButton = event.target.closest(".catalog-page__products-pagination__button--next");
            const filterRadios = document.querySelectorAll(".catalog-page__filter-option-input");

            if (filterRadios) {
                filterRadios.forEach(radio => radio.addEventListener("change", () => {
                    renderPagination(getProductFilters());
                }));
            }

            if (prevButton) {
                currentPage = Math.max(currentPage - 1, 1);
                renderPagination(getProductFilters());
                return;
            }

            if (nextButton) {
                const pagesCount = Math.ceil(currentItems.length / itemsPerPage) || 1;
                currentPage = Math.min(currentPage + 1, pagesCount);
                renderPagination(getProductFilters());
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
