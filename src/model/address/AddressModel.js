export default class AddressModel {
    constructor(cep, apiAddress = null) {
        this.cep = cep;

        if (apiAddress) {
            this.address = apiAddress.address || "";
            this.neighborhood = apiAddress.neighborhood || "";
            this.addressLocation = apiAddress.addressLocation || "";
            this.uf = apiAddress.uf || "";
            this.state = apiAddress.state || "";
        }
    }

    // Getters e Setters
    setCep(cep) { this.cep = cep; }
    getCep() { return this.cep; }

    setAddress(address) { this.address = address; }
    getAddress() { return this.address; }

    setNeighborhood(neighborhood) { this.neighborhood = neighborhood; }
    getNeighborhood() { return this.neighborhood; }

    setAddressLocation(addressLocation) { this.addressLocation = addressLocation; }
    getAddressLocation() { return this.addressLocation; }

    setUf(uf) { this.uf = uf; }
    getUf() { return this.uf; }

    setState(state) { this.state = state; }
    getState() { return this.state; }
} 