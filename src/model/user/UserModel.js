import BaseUser from "./BaseUser";

/**
 * Classe modelo para os objetos de usuários
 */
export default class UserModel extends BaseUser {
    constructor(userId, firstName, lastName, email, phoneNumber, cpf = null) {
        super(userId, firstName, lastName, email, phoneNumber, cpf);
        this.addresses = [];
        this.reviews = [];
    }

    setAddresses(addresses) { this.addresses = addresses; }
    getAddresses() { return [...this.addresses]; }

    setReviews(reviews) { this.reviews = reviews; }
    getReviews() { return [...this.reviews]; }
}