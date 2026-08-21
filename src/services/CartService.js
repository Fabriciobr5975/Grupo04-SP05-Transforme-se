export async function cartUpdate(product) {
    try {
        const saveProducts = sessionStorage.getItem("userCart");
        const current = saveProducts ? JSON.parse(saveProducts) : [];

        let found = false;
        const updated = current.map((p) => {
            if (p.productId === product.productId) {
                found = true;
                return { ...p, quantity: product.quantity };
            }
            return p;
        });

        if (!found) {
            alert("Produto não encontrado no carrinho local.");
        }

        if (updated.length === 0) {
            sessionStorage.removeItem("userCart");
        } else {
            sessionStorage.setItem("userCart", JSON.stringify(updated));
        }

    } catch (err) {
        const errorMessage = err || "Erro ao modificar o produto no seu carrinho.";
        alert(errorMessage);
    }
}

export async function cartDelete(product) {
    try {
        const saveProducts = sessionStorage.getItem("userCart");
        const current = saveProducts ? JSON.parse(saveProducts) : [];

        const newResult = current.filter((p) => p.productId !== product.productId);

        if (newResult.length === current.length) {
            alert("Produto não encontrado no carrinho local.");
            return;
        }

        if (newResult.length === 0) {
            sessionStorage.removeItem("userCart");
        } else {
            sessionStorage.setItem("userCart", JSON.stringify(newResult));
        }
    } catch {
        alert("Não foi possível remover o produto do carrinho local. Tente novamente.");
    }
}

export function calculateTotalProductPrice(products) {
    return Array.isArray(products) ?
        products.reduce((value, product) => {
            return value + Number(product.unitPrice) * product.quantity;
        }, 0.0) : 0;
}

export function calculateTotalFreightPrice(products) {
    return Array.isArray(products) ?
        products.reduce((value, product) => {
            return value + product.freight;
        }, 0.0) : 0;
}

export function calculeQuantityOfProducts(products) {
    return Array.isArray(products) ?
        products.reduce((value, product) => {
            return value + product.quantity;
        }, 0) : 0;
}