// Initial data: Array to store grocery items
let groceryList = [
	{ name: "Bread", price: 2.5 },
	{ name: "Eggs", price: 4.99 },
	{ name: "Coffee", price: 8.75 },
];

// DOM Elements - UPDATED
const listContainer = document.getElementById("grocery-list");
const itemNameInput = document.getElementById("item-name-input"); // Renamed/New
const itemPriceInput = document.getElementById("item-price-input"); // New
const addButton = document.getElementById("add-btn");
const totalButton = document.getElementById("calculate-total-btn");
const totalDisplay = document.getElementById("total-display");

/**
 * Renders the grocery list array to the HTML list container. (No change)
 */
function renderList() {
	listContainer.innerHTML = "";

	groceryList.forEach((item, index) => {
		const listItem = document.createElement("li");

		// Ensure price is displayed with two decimal places
		listItem.innerHTML = `
            <span>${item.name} ($${item.price.toFixed(2)})</span>
            <button class="delete-btn" data-index="${index}">&#10005;</button>
        `;

		listContainer.appendChild(listItem);
	});

	// Reset total display every time the list is rendered/changed
	totalDisplay.textContent = "Total: $0.00";

	// Re-attach listeners to the new delete buttons
	attachDeleteListeners();
}

/**
 * Handles adding a new item from the input fields. (UPDATED)
 */
function addItem() {
	const nameValue = itemNameInput.value.trim();
	// Use parseFloat to convert the price string to a number
	const priceValue = parseFloat(itemPriceInput.value);

	// Conditional statement: Check if the name is not empty AND price is a valid number
	if (nameValue !== "" && !isNaN(priceValue) && priceValue >= 0) {
		// Use push() to add the new item object to the array
		groceryList.push({ name: nameValue, price: priceValue });

		// Update the displayed list
		renderList();

		// Clear both input fields
		itemNameInput.value = "";
		itemPriceInput.value = "";
	} else {
		alert("Please enter a valid item name AND a non-negative price.");
	}
}

/**
 * Calculates and displays the total price of all items. (No change)
 */
function calculateTotal() {
	// Use reduce() to sum up all the prices in the array
	const total = groceryList.reduce((sum, item) => sum + item.price, 0);

	// Display the result with two decimal places
	totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
}

/**
 * Attaches click event listeners to all 'delete' buttons. (No change)
 */
function attachDeleteListeners() {
	document.querySelectorAll(".delete-btn").forEach((button) => {
		button.addEventListener("click", (event) => {
			const indexToRemove = parseInt(
				event.currentTarget.getAttribute("data-index")
			);

			// Use splice() to remove the item at the specified index
			groceryList.splice(indexToRemove, 1);

			renderList();
		});
	});
}

// ------------------------------------------------------------------
// Event Listeners (Main Execution)
// ------------------------------------------------------------------

// 1. Initial Render: Call the function once when the page loads
document.addEventListener("DOMContentLoaded", renderList);

// 2. Add Item Listener: Attach to the "Add Item" button
addButton.addEventListener("click", addItem);

// Optional: Allow adding item by pressing 'Enter' in the price field
itemPriceInput.addEventListener("keypress", (event) => {
	if (event.key === "Enter") {
		addItem();
	}
});

// 3. Calculate Total Listener
totalButton.addEventListener("click", calculateTotal);
