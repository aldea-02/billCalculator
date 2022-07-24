function openModal(modal) {
	modal.classList.add("active");
	overlay.classList.add("active");
}

function closeModal(modal) {
	modal.classList.remove("active");
	overlay.classList.remove("active");
	newItemPrice.value = "";
	newItem.value = "";
}

openButton.addEventListener("click", () => {
	openModal(modal);
});

closeButton.addEventListener("click", () => {
	closeModal(modal);
});

overlay.addEventListener("click", () => {
	closeModal(modal);
});
