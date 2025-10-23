// calc.js
function caculateDelivery() {
    // Get values from the form
    let weight = parseFloat(document.getElementById("weight").value);
    let destination = document.getElementById("Destinationprovince").value;
    let isExpressDelivery = document.getElementById("express").checked;

    // Base cost
    let baseCost = 2000; // default base cost

    // Destination fee
    let destinationFee = 0;
      // Validation for weight
    if (weight < 1) {
        document.getElementById("result").textContent = "❌ Please enter a valid weight (1kg or more).";
        return; // stop calculation
    }

    if (destination === "Manitoba") {
        destinationFee = 3000;
    }
    if (destination === "Ontario") {
        destinationFee = 4000;
    }
    if (destination === "Quebec") {
        destinationFee = 5000;
    }
    if (destination === "Albera") {
        destinationFee = 2500;
    }
    if (destination === "NewBrunswick") {
        destinationFee = 3500;
    }
    if (destination === "Columba") {
        destinationFee = 2800;
    }
    if (destination === "Labrador") {
        destinationFee = 3200;
    }
    if (destination === "NovaScotia") {
        destinationFee = 3000;
    }


   let overweightFee = 0;
    if (weight > 5) {
    overweightFee = (weight - 5) * 1500;
    }


    // Total cost
    let totalCost = baseCost + destinationFee + overweightFee;

    // Express delivery surcharge (50%)
    if (isExpressDelivery === true) {
        totalCost = totalCost * 1.5;
    }

    // Show result
    let resultMessage = "The total shipping cost for your " 
        + weight + "kg package to " + destination + " is N" + totalCost;
    document.getElementById("result").textContent = resultMessage;

    // Log to console
    console.log(resultMessage);
}
