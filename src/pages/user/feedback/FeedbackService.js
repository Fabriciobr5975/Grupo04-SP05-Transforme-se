import { reviews as initialReviews } from "../../../../seeds/reviews.js";

const MAX_DESCRIPTION_LENGTH = 500;
const reviewsKey = "reviews";

const user = JSON.parse(sessionStorage.getItem("loggedInUser")) || {};
const product = JSON.parse(sessionStorage.getItem("feedbackProduct")) || {};
const stars = document.querySelectorAll(".feedback-page__star-button");
const descriptionField = document.querySelector(".feedback-page__text-area-field");
const descriptionLength = document.querySelector(".feedback-page__text-area-length");
const insertButton = document.querySelector("#feedback-page__insert-button");
const removeButton = document.querySelector("#feedback-page__remove-button");

let selectedRating = 0;
let hasEvaluation = false;

function getReviews() {
	const storedReviews = sessionStorage.getItem(reviewsKey);

	if (storedReviews) {
		return JSON.parse(storedReviews);
	}

	sessionStorage.setItem(reviewsKey, JSON.stringify(initialReviews));
	return [...initialReviews];
}

function saveReviews(reviews) {
	sessionStorage.setItem(reviewsKey, JSON.stringify(reviews));
}

function getCurrentReview() {
	return getReviews().find((review) =>
		Number(review.userId) === Number(user.userId) &&
		Number(review.productId) === Number(product.productId)
	);
}

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
	if (!selectedRating || !Number.isInteger(Number(user.userId)) || !Number.isInteger(Number(product.productId))) {
		alert("Selecione uma nota para inserir a avaliação.");
		return;
	}

	const reviews = getReviews();
	const reviewIndex = reviews.findIndex((review) =>
		Number(review.userId) === Number(user.userId) &&
		Number(review.productId) === Number(product.productId)
	);
	const currentDate = new Date().toISOString();
	const reviewData = {
		reviewId: reviewIndex >= 0 ? reviews[reviewIndex].reviewId : Date.now(),
		userId: Number(user.userId),
		productId: Number(product.productId),
		rating: selectedRating,
		description: descriptionField.value.trim(),
		createdAt: reviewIndex >= 0 ? reviews[reviewIndex].createdAt : currentDate,
		updatedAt: currentDate
	};

	if (reviewIndex >= 0) reviews[reviewIndex] = reviewData;
	else reviews.push(reviewData);

	saveReviews(reviews);
	hasEvaluation = true;
	updateButtons();
}

function handleRemoveClick() {
	const reviews = getReviews().filter((review) =>
		!(Number(review.userId) === Number(user.userId) &&
		  Number(review.productId) === Number(product.productId))
	);

	saveReviews(reviews);
	hasEvaluation = false;
	selectedRating = 0;
	descriptionField.value = "";
	paintStars(selectedRating);
	updateDescriptionLength();
	updateButtons();
}

function loadCurrentReview() {
	const review = getCurrentReview();
	if (!review) return;

	selectedRating = Number(review.rating) || 0;
	hasEvaluation = true;
	descriptionField.value = review.description || "";
	paintStars(selectedRating);
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

loadCurrentReview();
updateDescriptionLength();
updateButtons();
