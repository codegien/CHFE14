console.log("Hello from Tajudeen Ahmad Olanrewaju")


function capable () {
let baseCost = 1000;


destination = document.getElementById("option"). value;

if (destination === "abeokuta") {
    baseCost += 2000
} 
if (destination === "lagos") {
    baseCost += 1500
} 
if (destination === "ibadan") {
    baseCost += 600
} 
if (destination === "kogi") {
    baseCost += 400
} 
if (destination === "kwara") {
    baseCost += 200
} 

weight = document.getElementById("weight"). value;
if (weight > 5) {
    baseCost += 22;
}

express = document.getElementById("express"). checked;
if (express === true) {
    baseCost *= 1.5;
    console.log(baseCost)
}


document.getElementById("display"). innerHTML = `The total cost of the load is ${baseCost}`;
}
