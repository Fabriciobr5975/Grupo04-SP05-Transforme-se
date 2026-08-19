export default class IngredientModel {
    constructor(ingredientId, ingredient, description, insertIn = new Date(), updateOn = new Date()) {
        this.ingredientId = ingredientId;
        this.ingredient = ingredient;
        this.description = description;
        this.insertIn = insertIn;
        this.updateOn = updateOn;
    }

    // Getters e Setters
    setIngredientId(ingredientId) { this.ingredientId = ingredientId; }
    getIngredientId() { return this.ingredientId; }

    setIngredient(ingredient) { this.ingredient = ingredient; }
    getIngredient() { return this.ingredient; }

    setDescription(description) { this.description = description; }
    getDescription() { return this.description; }

    setInsertIn(insertIn) { this.insertIn = insertIn; }
    getInsertIn() { return this.insertIn; }

    setUpdateOn(updateOn) { this.updateOn = updateOn; }
    getUpdateOn() { return this.updateOn; }
}