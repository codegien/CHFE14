//ARRAY
//[]
//ITEMS OR ELEMENTS
//ELEMENTS SEPARATED BY COMMA
// ELEMENTS HAVE INDEXES AND POSITIONS
//NUMBER OF ELEMENT IN THE ARRAY DETERMINES THE LENGTH
//ARRAY ACCEPT SOME JS INBUILT METHOD
//Index         0           1       2           3       4
let myitems = ["bread", "butter", "cheese", "juice", "water"]; ///array literal
//position      1           2       3           4       5
let agerange = [16, 19, 20, 21, 22, 23, 24]; ///array literal
let myitems2 = new Array(100); ///array constructor

//ARRAY Method
//1-  length ✅
//2- indexOf ✅
//3- push ✅
//4- pop ✅
//5- unshift //shift  ✅
//6- sclice ✅
//7- splice ✅
//8- includes ✅
//9- find / filter
//10- sort ✅
//11- join ✅
//12- key
//13- map. ✅
//14- flat / flatMap /forEach ✅
//15- reduce ✅
//16- from
//17- concat ✅
//18- toString ✅
//19- reverse ✅

console.log(myitems.length);
console.log("butter index is: ", myitems.indexOf("butter"));

//PUSH
const toolsbox = [];
toolsbox.push({ name: "Screw Driver", qty: 8, price: 16000 });
toolsbox.push("Plier");
toolsbox.push("Spanner");
console.log(toolsbox);
toolsbox.pop();
console.log(toolsbox);
toolsbox.pop();
console.log(toolsbox);

toolsbox.unshift("hammer");
console.log(toolsbox);
// toolsbox.shift();
// console.log(toolsbox);
toolsbox.sort();
console.log(toolsbox);

const studentNames = [
	"Malik",
	"Ahmad",
	"Patrick",
	"Brian",
	"Temi",
	"Ojay",
	"Victor",
	"Melvin",
	"Golden",
	"michael",
	"Femi",
	"Sultan",
	"Oree",
	"stephen",
	"femi",
];

const bm = [
	"January",
	"October",
	"November",
	"June",
	"May",
	"December",
	"September",
	"July",
	"March",
	"April",
];

studentNames.sort((a, b) =>
	a.localeCompare(b, undefined, { sensitivity: "base" })
);
console.log(studentNames);

console.log(studentNames);
const monthOrder = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
console.log(bm.sort((a, b) => monthOrder.indexOf(a) - monthOrder.indexOf(b)));

// console.log(monthOrder.slice(indextostarton, indextostopbefore));
console.log(monthOrder.slice(4, 6));
console.log(monthOrder.slice(-2));
const groceryList = ["Burger", "Peanut", "Biscuit", "Chocolate"];
groceryList.splice(2, 0, "Coffee");
console.log(groceryList);

///CONCAT
const setA = ["B", "o", "y"];
const setB = ["H", "o", "s", "t", "e", "l"];
const setAB = setA.concat("s", setB);
console.log(setAB);
console.log(setA);

//JOIN
const mnemonicPhrase = [
	"Astra",
	"rogger",
	"banana",
	"symphon",
	"libera",
	"oscar",
];
const arrofarr = [
	[1, 2, 3],
	[5, 6, 4],
	[9, 6, 8],
];
console.log(setA.join("_"));
console.log(mnemonicPhrase.join(" "));
// console.log(arrofarr.flat().sort().join(""));
console.log(arrofarr.flat());

//FLATMAP
const arrNumber = [1, 2, 3];
console.log(arrNumber.map((ele) => [ele * 2, ele * 3]));
console.log(arrNumber.flatMap((num) => [num * 2]));
arrNumber.forEach((num) => console.log([num * 2]));

//FIND

const result = mnemonicPhrase.find(
	(item) => item.toLowerCase() === "AsTra".toLowerCase()
);
console.log(result);
// console.log(mnemonicPhrase.filter((item) => item.includes("A",)));

// REDUCE
const students = [
	{ name: "John", age: 20, grade: 85 },
	{ name: "Alice", age: 22, grade: 90 },
	{ name: "Bob", age: 19, grade: 78 },
	{ name: "Charlie", age: 21, grade: 92 },
];

const ageSum = 0;
const studentsAgeSum = students.reduce(
	(accumulator, currentValue) => accumulator + currentValue.grade,
	ageSum
);
console.log("student age sum is: ", studentsAgeSum);

const lettersFromWord = Array.from("SUBSCRIBER");
console.log(lettersFromWord);

const cartItem = [
	{ name: "Watch", price: 10000 },
	{ name: "Shirt", price: 2200 },
	{ name: "Shoe", price: 3600 },
	{ name: "Jeans", price: 5400 },
];
function calculateTotalAmount() {
	const cart = 0;
	const sumTotal = cartItem.reduce(
		(accumulator, currentValue) => accumulator + currentValue.price,
		cart
	);

	console.log(sumTotal);
	return sumTotal;
}
