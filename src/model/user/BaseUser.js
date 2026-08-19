
export default class BaseUser {
    constructor(userId, firstName, lastName, email, phoneNumber, cpf) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.cpf = cpf;
    }

    // Getters e Setters
    getUserId(userId) { return this.userId };

    setFirtsName(firstName) { this.firstName = firstName; }
    getFirtsName() { return this.firstName; }

    setLastName(lastName) { this.lastName = lastName; }
    getLastName() { return this.lastName; }

    setEmail(email) { this.email = email; }
    getEmail() { return this.email; }

    setPhoneNumber(phoneNumber) { this.phoneNumber = phoneNumber; }
    getPhoneNumber() { return this.phoneNumber; }

    setCpf(cpf) { this.cpf = cpf; }
    getCpf() { return this.cpf; }
}