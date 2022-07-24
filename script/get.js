let sumArr = 0;

tipPercentage.addEventListener("input", function () {
	totalAmount.innerHTML = getTotalAmount(sumArr, Number(tipPercentage.value));
	tipAmount.innerHTML = getTipAmount(sumArr, Number(tipPercentage.value));
});

function getTotalAmount(sum, tip) {
	return sum + (sum * tip) / 100;
}

function getTipAmount(sum, tip) {
	if (tip != 0) {
		return (sum * tip) / 100;
	} else return 0;
}
