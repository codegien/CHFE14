function submitForm(){
    let packageWeight = Number(document.getElementById("mass").value);
    let destinationZone = document.getElementById("zone").value;
    let expressDelivery = document.getElementById("express").checked;
    let baseCost = 2000;

    if (packageWeight < 1){
        document.getElementById("total").innerText = "packageWeight must be more than 1kg";
        return;
    };
    if (destinationZone === "lagos"){
        baseCost += 3000;
    };
    if (destinationZone === "anambra"){
        baseCost += 2000;
    };
    if (destinationZone === "enugu"){
        baseCost += 1000;
    };
    if (packageWeight > 5){
        baseCost += 1500;
    };
   if (expressDelivery){
    baseCost = baseCost * 1.5;
   };
   const sum = "The total shipping cost for your " + packageWeight + "kg package to "  + destinationZone
    + "is N" + baseCost;
    console.log(sum);
    document.getElementById("total").innerText = sum;
    
}


