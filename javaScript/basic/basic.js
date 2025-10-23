console.log("Helloooo from then other sideeeeeeeee");
let age;
const baseAge = 18;
function ability() {
	age = document.getElementById("age").value;
	console.log(age);
	console.log(baseAge <= age);
	// if (baseAge <= age) console.log("You are eligible Drive");
	// if (baseAge > age) console.log("You are not eligible Drive");

	///Logical Operator
	const hasVotersCard = document.getElementById("hasVotersCard").checked;
	const isIssuanceLga = document.getElementById("isIssuanceLga").checked;
	//going by AND Logic Gate
	//				false			false
	if (age >= 18 && hasVotersCard && isIssuanceLga)
		console.log("You are eligible to vote");
}

//CONDITIONAL OPERATOR
if (isRainy) {
	console.log("Deploy umbrella");
} else {
	console.log("Hide umbrella");
}

isRainy ? console.log("Deploy umbrella") : console.log("Hide umbrella");
isRainy
	? console.log("Deploy umbrella")
	: isSunny
	? console.log("Deploy sun glass")
	: console.log("what works");

//menu ("pop corn", "ice cream", "cake", "barbequeen", "pie", "bread", "chapman", "soda", "juice")

//old adult 45 & above -- "barbequeen" & "Juice";
//mid age 35 - 44 -- "bread" & "soda"
//yound adult 19 - 34 -- "pie" & "chapman"
//teenager 13 - 18 -- "cake" & "chapman"
//children 1 - 12 -- "pop", "juice" & "ice-cream"

//if(condition){instruction}else if(yet another condition){ yet another instruction}else{instruction regardless}

if (age >= 45) {
	if (isVegitarian) {
		console.log("juice");
	} else {
		console.log("barbiqueen & juice");
	}
} else if (age >= 35 && age <= 44) {
	console.log("Bread & Soda");
} else if (age >= 19 && age <= 34) {
	console.log("Pie & Chapman");
} else if (age >= 13 && age <= 18) {
	console.log("Cake and chapman");
} else {
	console.log("Popcorn, Juice & Ice Cream");
}
