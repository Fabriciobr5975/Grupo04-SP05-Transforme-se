
function initCatalogFilters() {
    const mediaQuery = window.matchMedia("(max-width: 1060px)");

    const syncFilterState = () => {
        const filterDropdown = document.querySelector(".filter-dropdown");
        const filterTrigger = document.querySelector(".filter-manipulation");
        const filterPanel = document.querySelector(".dropbox-filter");

        if (!filterDropdown || !filterTrigger || !filterPanel) {
            return;
        }

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

    document.addEventListener("click", (event) => {
        const filterTrigger = event.target.closest(".filter-manipulation");
        const filterDropdown = document.querySelector(".filter-dropdown");
        const filterPanel = document.querySelector(".dropbox-filter");

        if (!filterDropdown || !filterPanel || !mediaQuery.matches) {
            return;
        }

        if (filterTrigger) {
            event.stopPropagation();
            filterDropdown.classList.toggle("is-open");
            filterPanel.classList.toggle("is-open");
            syncFilterState();
            return;
        }

        if (!filterDropdown.contains(event.target) && filterDropdown.classList.contains("is-open")) {
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

if (!window.catalogFiltersInitialized) {
    window.catalogFiltersInitialized = true;

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initCatalogFilters);
    } else {
        initCatalogFilters();
    }
}
