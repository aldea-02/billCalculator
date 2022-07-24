addButton.addEventListener("click", (e) => {
	e.preventDefault();

	if (validateForm(newItem.value, newItemPrice.value) == 0) {
		const itemWrapper = document.createElement("li");
		itemWrapper.classList.add("wrapper");
		itemList.appendChild(itemWrapper);

		const item = document.createElement("div");
		item.innerHTML = newItem.value;
		itemWrapper.appendChild(item);
		newItem.value = "";

		const insideWrapper = document.createElement("div");
		insideWrapper.classList.add("wrapper");
		itemWrapper.appendChild(insideWrapper);

		const dollar = document.createElement("span");
		dollar.innerHTML = "$";
		insideWrapper.appendChild(dollar);

		const itemPrice = document.createElement("div");
		itemPrice.innerHTML = newItemPrice.value;
		itemPrice.classList.add("itemPrice");
		sumArr += Number(newItemPrice.value);
		totalAmount.innerHTML = getTotalAmount(sumArr, Number(tipPercentage.value));
		tipAmount.innerHTML = getTipAmount(sumArr, Number(tipPercentage.value));
		insideWrapper.appendChild(itemPrice);
		newItemPrice.value = "";

		const itemDelete = document.createElement("div");
		itemDelete.classList.add("itemDelete");
		itemDelete.addEventListener("click", deleteItem);

		function deleteItem() {
			itemDelete.closest("#itemList > .wrapper").remove();
			sumArr -= Number(itemPrice.closest(".itemPrice").innerHTML);
			totalAmount.innerHTML = getTotalAmount(sumArr, Number(tipPercentage.value));
			tipAmount.innerHTML = getTipAmount(sumArr, Number(tipPercentage.value));
		}

		const trashIcon = document.createElement("img");
		trashIcon.setAttribute("class", "img-js");
		if (changeThemeImg.alt == "white") {
			trashIcon.setAttribute("src", "photos/trash-black.png");
		} else if (changeThemeImg.alt == "black") {
			trashIcon.setAttribute("src", "photos/trash-white.png");
		}
		trashIcon.setAttribute("width", "10");
		itemDelete.appendChild(trashIcon);
		insideWrapper.appendChild(itemDelete);
	} else {
		return 0;
	}
});

deleteAllItems.addEventListener("click", () => {
	child = itemList.lastElementChild;
	while (child) {
		itemList.removeChild(child);
		child = itemList.lastElementChild;
	}
	sumArr = 0;
	tipAmount.innerHTML = "0";
	totalAmount.innerHTML = "0";
});
