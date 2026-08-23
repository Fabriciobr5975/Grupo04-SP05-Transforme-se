import { reviews } from "../../../seeds/reviews.js";
import { users } from "../../../seeds/users.js";

export function useProductDetail() {
    const user = sessionStorage.getItem("loggedInUser");
    const product = JSON.parse(sessionStorage.getItem("productSelected")) || null;
    const newReviews = JSON.parse(sessionStorage.getItem("reviews")) || [];

    const reviewsByUser = product
        ? newReviews.reduce((map, review) => {
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

    function handleInsertionProductCart(event, product, quantity, selected = false) {
        event.preventDefault();

        if (!user) {
            alert("Para ter acesso ao carrinho, você precisa estar logado!");
            window.navigateTo("/auth/login");
            return;
        }

        try {
            const savedProducts = sessionStorage.getItem("userCart");
            const current = savedProducts ? JSON.parse(savedProducts) : [];

            const already = current.some((p) => p.productId === product.productId);

            if (already) {
                window.navigateTo("/cart");
                return;
            }

            const productBody = {
                productId: product.productId,
                name: product.name,
                category: product.category,
                selected,
                productQuantity: product.productQuantity,
                unitPrice: product.price,
                freight: Math.floor(Math.random() * (40 - 10) + 10),
                image: product.images[0]
            }

            // Normaliza o item adicionado incluindo quantidade
            const toAdd = { ...productBody, quantity: quantity };
            current.push(toAdd);
            sessionStorage.setItem("userCart", JSON.stringify(current));
            alert("Produto adicionado ao carrinho");
            window.navigateTo("/cart");
        } catch {
            alert("Não foi possível adicionar o produto ao carrinho. Tente novamente.");
        }
    }

    document.addEventListener("click", handleProductQuantityIncrease);
    document.addEventListener("click", handleProductQuantityDecrease);

    function handleInsertCartClick(event) {
        const buttonAddCheckout = event.target.closest("#product-detail--add-checkout");
        const buttonAddCart = event.target.closest("#product-detail--add-cart");
        
        if(product) {
            if(buttonAddCheckout) handleInsertionProductCart(event, product, productQuantity, true);
            else if(buttonAddCart) handleInsertionProductCart(event, product, productQuantity);
        }        
    };

    document.addEventListener("click", handleInsertCartClick);

    function cleanup() {
        document.removeEventListener("click", handleImageThumbnailClick);
        document.removeEventListener("click", handleProductQuantityIncrease);
        document.removeEventListener("click", handleProductQuantityDecrease);
        document.removeEventListener("click", handleInsertCartClick);
    }

    return { product, reviewsByUser, productQuantity, cleanup };
}
