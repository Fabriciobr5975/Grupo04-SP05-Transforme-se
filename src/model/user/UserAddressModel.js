export default class UserAddressModel {
    constructor(address, addressNumber, addressComplement) {
        this.address = address;
        this.addressNumber = addressNumber;
        this.addressComplement = addressComplement;
    }

    // Getters e Setters
    setAddress(address) { this.address = address; }
    getAddress() { return this.address; }

    setAddressNumber(addressNumber) { this.addressNumber = addressNumber; }
    getAddressNumber() { return this.addressNumber; }

    setAddressComplement(addressComplement) { this.addressComplement = addressComplement; }
    getAddressComplement() { return this.addressComplement; }
}