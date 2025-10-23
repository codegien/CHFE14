//The array for all the availaible fruit or flavour

const fruitsLibrary = [
	"apple",
	"banana",
	"orange",
	"grape",
	"pineapple",
	"mango",
	"plum",
	"straw berry",
	"water melon",
	"blue berry",
	"peach",
	"pear",
];

let selected = []; // to collect all the fruit selected

const searchInput = document.getElementById("searchInput");
const resultList = document.getElementById("resultList");
const selectedFruitDiv = document.getElementById("selectedFruits");

//function that handles the displaying of fruit
function displayMatchingFruit(matches) {
	resultList.innerHTML = "";
	matches.forEach((fruit) => {
		const li = document.createElement("li"); // <li></li>
		li.textContent = fruit; //<li>mango</li>
		li.addEventListener("click", () => {
			// console.log(fruit);
			selectedFruit(fruit);
			searchInput.value = fruit;
		});
		resultList.appendChild(li);
	});
}

function displaySelectedFruits() {
	selectedFruitDiv.innerHTML = "";
	selected.forEach((fruit) => {
		const span = document.createElement("span"); //<span></span>
		span.className = "selected-fruit";
		span.textContent = fruit; //<span>mango</span>
		selectedFruitDiv.appendChild(span);
	});
}

function selectedFruit(fruit) {
	if (!selected.includes(fruit)) {
		selected.push(fruit);
		displaySelectedFruits();
	}
}
displayMatchingFruit(fruitsLibrary);

searchInput.addEventListener("input", function () {
	const searchTerm = this.value.toLowerCase();
	const filteredFruit = fruitsLibrary.filter((fruit) =>
		fruit.toLowerCase().charAt(0).includes(searchTerm)
	);
	displayMatchingFruit(filteredFruit);
});
