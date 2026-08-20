const MAX_DESCRIPTION_LENGTH = 500;

const stars = document.querySelectorAll(".feedback-page__star-button");
const descriptionField = document.querySelector(".feedback-page__text-area-field");
const descriptionLength = document.querySelector(".feedback-page__text-area-length");
const insertButton = document.querySelector("#feedback-page__insert-button");
const removeButton = document.querySelector("#feedback-page__remove-button");

let selectedRating = 0;
let hasEvaluation = false;

function paintStars(rating) {
	stars.forEach((star, index) => {
		const icon = star.querySelector(".feedback-page__star-icon");
		const isSelected = index < rating;

		icon.classList.toggle("fa-solid", isSelected);
		icon.classList.toggle("fa-regular", !isSelected);
	});
}

function updateDescriptionLength() {
	descriptionLength.textContent = `${descriptionField.value.length}/${MAX_DESCRIPTION_LENGTH}`;
}

function updateButtons() {
	insertButton.disabled = hasEvaluation;
	removeButton.disabled = !hasEvaluation;
}

function handleStarClick(event) {
    const button = event.currentTarget;
    const ratingValue = button.dataset.rating;
	selectedRating = Number(ratingValue);
	paintStars(selectedRating);
}

function handleDescriptionChange() {
	descriptionField.value = descriptionField.value.slice(0, MAX_DESCRIPTION_LENGTH);
	updateDescriptionLength();
}

function handleInsertClick() {
	hasEvaluation = true;
	updateButtons();
}

function handleRemoveClick() {
	hasEvaluation = false;
	selectedRating = 0;
	descriptionField.value = "";
	paintStars(selectedRating);
	updateDescriptionLength();
	updateButtons();
}

stars.forEach((star, index) => {
	star.dataset.rating = index + 1;
	star.addEventListener("click", handleStarClick);
});

descriptionField.maxLength = MAX_DESCRIPTION_LENGTH;
descriptionField.addEventListener("input", handleDescriptionChange);
descriptionField.addEventListener("change", handleDescriptionChange);
insertButton.addEventListener("click", handleInsertClick);
removeButton.addEventListener("click", handleRemoveClick);

updateDescriptionLength();
updateButtons();
