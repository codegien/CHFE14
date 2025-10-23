function calculateCost() {
	const packageWeight = parseFloat(document.getElementById("weight").value);
	const destinationZone = document.getElementById("destination").value;
	const isExpressDelivery = document.getElementById("express").checked;

	let baseCost = 2000;
	const OVERWEIGHT_LIMIT = 5; //5kg
	const OVERWEIGHT_FEE = 1500; //N1500

	let totalCost = baseCost;

	if (destinationZone === "Ibadan") {
		totalCost += 5000; // add N5000 for Ibadan
	}
	if (destinationZone === "Lagos") {
		totalCost += 1000; // add N1000 for Lagos
	}

	if (packageWeight > OVERWEIGHT_LIMIT) {
		//totalCost= totalCost + OVERWEIGHT_FEE
		totalCost += OVERWEIGHT_FEE;
	}

	if (isExpressDelivery) {
		//expressExtraCost = totalCost * (50/100)
		const expressExtraCost = totalCost * 0.5;
		totalCost = totalCost + expressExtraCost;
		//totalCost = totalCost* 1.5
	}

	const resultElement = document.getElementById("result");
	const message = `The total const for your ${packageWeight}kg package to ${destinationZone} is ${totalCost}`;
	resultElement.innerHTML = message;
}

window.onload = calculateCost;
