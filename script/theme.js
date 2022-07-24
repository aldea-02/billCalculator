if (localStorage.getItem("theme") == "black") {
	Black();
} else if (localStorage.getItem("theme") == "white") {
	White();
}

changeThemeButton.addEventListener("click", () => {
	let theme = changeThemeImg.alt;
	theme == "white" ? Black() : White();

	for (let i of document.querySelectorAll(".img-js")) {
		i.src = `photos/trash-${theme}.png`;
	}
});

function Black() {
	changeThemeImg.src = "photos/theme-white.svg";
	changeColors(document.body, "#fff", null);
	changeColors(container, null, "#1d1d1f");
	changeColors(modal, null, "#1d1d1f");
	changeColors(tipPercentage, "#fff", "#111");
	changeColors(newItem, "#fff", "#111");
	changeColors(newItemPrice, "#fff", "#111");
	changeColors(addButton, "#fff", "#1d1d1f");
	addButton.addEventListener("mouseover", () => {
		changeColors(addButton, "#1d1d1f", "#fff");
	});
	addButton.addEventListener("mouseout", () => {
		changeColors(addButton, "#fff", "#1d1d1f");
	});
	openButton.addEventListener("mouseover", () => {
		changeColors(openButton, "#1d1d1f", "#fff");
	});
	openButton.addEventListener("mouseout", () => {
		changeColors(openButton, "#fff", "#1d1d1f");
	});
	changeThemeImg.alt = "black";
	localStorage.setItem("theme", "black");
}

function White() {
	changeThemeImg.src = "photos/theme-black.svg";
	resetToDefaultValues(
		document.body,
		container,
		modal,
		tipPercentage,
		newItem,
		newItemPrice,
		addButton,
		openButton
	);
	addButton.addEventListener("mouseover", () => {
		resetToDefaultValues(addButton);
	});
	addButton.addEventListener("mouseout", () => {
		resetToDefaultValues(addButton);
	});
	openButton.addEventListener("mouseover", () => {
		resetToDefaultValues(openButton);
	});
	openButton.addEventListener("mouseout", () => {
		resetToDefaultValues(openButton);
	});
	changeThemeImg.alt = "white";
	localStorage.setItem("theme", "white");
}

function changeColors(e, clr, bgclr) {
	e.style.color = clr;
	e.style.backgroundColor = bgclr;
}

function resetToDefaultValues(...elements) {
	for (let i of elements) {
		changeColors(i, null, null);
	}
}
