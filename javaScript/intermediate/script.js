//FOR LOOOP

//for(initialization Expression; test condition; update expression ){
//body of the loop
//}

const desiredRound = 20;

for (let i = 0; i < desiredRound; i++) {
	console.log(i, "round(s) covered");
	if (i >= desiredRound - 3) {
		console.log("Beep beep beep");
	}
}

//WHILE LOOP
let i = 0;

while (i < 5) {
	console.log(i, "from the while block");
	i += 1;
}

//Use while loop to write a simple raffle Draw algorithm

let currentNo = 0;
let roundTracker = 0;
while (currentNo < 19) {
	//console.log(currentNo);
	let prevCandidateNo = Math.floor(Math.random() * 20);
	console.log(prevCandidateNo);
	currentNo = currentNo + prevCandidateNo;
}

console.log("single winner", Math.floor(Math.random() * 20));

// // 345, 675,627, 172900

// let number = 675;

// if (number < 0) {
// 	number = Math.abs(number);
// }
// let largetDigit = 0;
// while (number > 0) {
// 	let digit = number % 10;
// 	if (digit > largetDigit) {
// 		largetDigit = digit;
// 	}
// 	number = Math.floor(number / 10);
// }

// console.log(largetDigit);

// /// DO ... WHILE
// let a = 3;
// do {
// 	console.log("from do while: ", a);
// 	a += 1;
// } while (a < 8);

// let noOfValidity = 3;
// let pin = "18304-28840-948";

// do {
// 	if (pin !== "18304-28840-948") {
// 		console.log("Invalid pin");
// 		break;
// 	}
// 	console.log("Result for the candidate");
// 	noOfValidity--;
// 	console.log(`no of usage left: ${noOfValidity}`);
// } while (noOfValidity > 0);

console.log("from line after while loop");
