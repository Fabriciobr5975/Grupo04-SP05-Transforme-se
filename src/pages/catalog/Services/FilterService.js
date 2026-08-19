
function initCatalogFilters() {
    const filterDropdown = document.querySelector(".filter-dropdown");
    const filterTrigger = document.querySelector(".filter-manipulation");
    const filterPanel = document.querySelector(".dropbox-filter");

    const mediaQuery = window.matchMedia("(max-width: 1060px)");

    const syncFilterState = () => {
        const isOpen = filterDropdown.classList.contains("is-open");

        if (!mediaQuery.matches) {
            filterDropdown.classList.remove("is-open");
            filterPanel.classList.remove("is-open");
            filterTrigger.setAttribute("aria-expanded", "false");
            filterPanel.hidden = false;
            return;
        }

        filterTrigger.setAttribute("aria-expanded", String(isOpen));
        filterPanel.hidden = !isOpen;
    };

    filterTrigger.addEventListener("click", (event) => {
        if (!mediaQuery.matches) {
            return;
        }

        event.stopPropagation();
        filterDropdown.classList.toggle("is-open");
        filterPanel.classList.toggle("is-open");
        syncFilterState();
    });

    document.addEventListener("click", (event) => {
        if (!mediaQuery.matches) {
            return;
        }

        const clickedInside = filterDropdown.contains(event.target);

        if (!clickedInside && filterDropdown.classList.contains("is-open")) {
            filterDropdown.classList.remove("is-open");
            filterPanel.classList.remove("is-open");
            syncFilterState();
        }
    });

    if (typeof mediaQuery.addEventListener === "function") {
        mediaQuery.addEventListener("change", syncFilterState);
    } else {
        window.addEventListener("resize", syncFilterState);
    }

    syncFilterState();
};

function handleFilters() {
    let result = [...products];
    let activeCategory = "Todos";
    let activeOrdering = "Relevância";

    const categoryFilter = document.querySelectorAll(".catalog-page__filter-option-input");

    categoryFilter.forEach((e) => console.log(e.value));

    if (activeCategory !== "Todos") {
        result = result.filter((p) => p.productCategory === activeCategory);
    }

    return [...result].sort((a, b) => {
        switch (activeOrdering) {
            case "Mais Recentes":
                return new Date(b.productInsertionDate).getTime() - new Date(a.productInsertionDate).getTime();
            case "Produtos Mais Baratos":
                return a.productPrice - b.productPrice;
            case "Produtos Mais Caros":
                return b.productPrice - a.productPrice;
            case "Ordem Crescente (A - Z)":
                return a.product.trim().localeCompare(b.product.trim());
            case "Ordem Decrescente (Z - A)":
                return b.product.trim().localeCompare(a.product.trim());
            default:
                return 0;
        }
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCatalogFilters);
} else {
    initCatalogFilters();
}
