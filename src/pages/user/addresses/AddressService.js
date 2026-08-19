"use strict";

export function useAddressService() {
    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));
    const userAddresses = user.addresses || [];

    const handleAddressInsertion = (address) => {
        const existAdress = userAddresses.some(a => a.cep === address.cep);

        if (existAdress) {
            alert("Esse endereço Já foi inserido!");
            return;
        }

        const nextAddressId = getNextAddressId(userAddresses);

        userAddresses.push({
            addressId: nextAddressId,
            userId: user.userId,
            ...address
        });

        user.addresses = userAddresses;
        sessionStorage.setItem("loggedInUser", JSON.stringify(user));
        renderNewAddresses(userAddresses);
    }

    const removeAddress = (addressId) => {
        const numericId = Number(addressId);
        if (!Number.isInteger(numericId)) return;
        const updatedAddresses = [...userAddresses].filter(address => address.addressId !== numericId);
        user.addresses = updatedAddresses;
        sessionStorage.setItem("loggedInUser", JSON.stringify(user));

        renderNewAddresses(updatedAddresses);
    }

    return { userAddresses, handleAddressInsertion, removeAddress }
}

function getNextAddressId(addresses) {
    if (!Array.isArray(addresses) || addresses.length === 0) return 1;

    const lastAddressId = addresses.reduce((highestId, address) => {
        const addressId = Number(address.addressId) || 0;
        return Math.max(highestId, addressId);
    }, 0);

    return lastAddressId + 1;
}

function renderNewAddresses(addresses) {
    const addressHTML = document.querySelector(".addresses-area");
    if (!addressHTML) return;

    addressHTML.innerHTML = `
    ${Array.isArray(addresses) && addresses.length > 0 && addresses.length <= 3 ? addresses.map((address) => `
    <article class="address__content__item">
        <div class="address__content__main">
            <h2>${address.address}, ${address.number}, ${address.cep}</h2>
            <p>${address.neighborhood}, ${address.city}, ${address.state}</p>
            <p><span>Complemento:</span> ${address.complement}</p>
        </div>
        <div class="address__manipulation">
            <button
                title="Editar endereço"
                type="button"
                class="address__manipulation--edit"
            >
                <i class="fa-regular fa-pen-to-square"></i>
            </button>
            <button
                id="address-remove-${address.addressId}"
                title="Remover endereço"
                type="button"
                class="address__manipulation--remove"
            >
                <i class="fa-regular fa-trash-can"></i>
            </button>
        </div>
    </article>`).join("") : ""}`;
}
