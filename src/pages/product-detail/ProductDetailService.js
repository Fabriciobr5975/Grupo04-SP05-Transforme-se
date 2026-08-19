import { reviews } from "../../../seeds/reviews.js";
import { users } from "../../../seeds/users.js";

export function useProductDetail() {
    const product = JSON.parse(sessionStorage.getItem("productSelected")) || null;

    const reviewsByUser = product
        ? reviews.reduce((map, review) => {
            if (!map.has(product.productId)) {
                map.set(product.productId, []);
            }

            if (product.productId === review.productId) {
                const user = users.find(u => u.userId === review.userId) || {};
                const { firstName = "", lastName = "", email = "" } = user;

                map.get(product.productId).push({
                    reviewUser: { firstName, lastName, email },
                    review
                });
            }

            return map;
        }, new Map())
        : null;

    function updateMainImage(index) {
        const mainImage = document.querySelector(".product-detail-page__image");
        const buttons = document.querySelectorAll(".product-detail-page__gallery-thumbnail");

        if (!mainImage || !product?.images || !buttons.length) return;

        mainImage.src = product.images[index];
        buttons.forEach((button, buttonIndex) => {
            button.classList.toggle("selected", buttonIndex === index);
        });
    }

    function handleImageThumbnailClick(event) {
        const button = event.target.closest(".product-detail-page__gallery-thumbnail");
        if (!button || !product?.images) return;

        const buttons = [...document.querySelectorAll(".product-detail-page__gallery-thumbnail")];
        const index = buttons.indexOf(button);

        if (index >= 0) {
            updateMainImage(index);
        }
    }

    document.addEventListener("click", handleImageThumbnailClick);

    let productQuantity = 1;

    function updateQuantityDisplay() {
        const quantity = document.querySelector(".product-detail-page__quantity-value");
        if (!quantity) return;
        quantity.textContent = productQuantity;
    }

    function handleProductQuantityIncrease(event) {
        const button = event.target.closest("#increase-quantity");
        if (!button) return;
        productQuantity++;
        updateQuantityDisplay();
    }

    function handleProductQuantityDecrease(event) {
        const button = event.target.closest("#decrease-quantity");
        if (!button) return;
        if (productQuantity > 1) productQuantity--;
        updateQuantityDisplay();
    }

    document.addEventListener("click", handleProductQuantityIncrease);
    document.addEventListener("click", handleProductQuantityDecrease);

    return { product, reviewsByUser, productQuantity };
}
