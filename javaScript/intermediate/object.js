//Object litereal
const item = {
	name: "Banatone Fan",
	price: 49720,
	color: "Black",
	available: true,
	sellerAddress: "Sangotedo",
	timer: function () {
		console.log("would stop in 15Min time");
	},
};
console.log(item.name);
item.timer();

//Object Constructor
let item1 = new Object();

item1.name = "Glamster AC";
item1.price = 300000;
console.log(item1);

//Class constructor
class BottledWater {
	constructor(brand, volume, price) {
		(this.brand = brand), (this.volume = volume), (this.price = price);
	}

	open() {
		console.log(this.brand, "turn the lead anti-clockwise to open");
		return this;
	}
}

const nirvana = new BottledWater("Nirvana", "75cl", 200);
console.log(nirvana);
nirvana.open();

class Rectangle {
	constructor(width, height) {
		(this.width = width), (this.height = height);
	}

	calcArea() {
		let area = this.width * this.height;
		console.log(`${area}m2`);
		this.area = `${area}m2`;
		return this;
	}
	calcPerimeter() {
		let perimeter = 2 * this.width + 2 * this.height;
		console.log(`${perimeter}`);
		this.perimeter = perimeter;
		return this;
	}
}

const room = new Rectangle(30, 50);
room.calcArea().calcPerimeter();
console.log(room);

// let perimeter = 2 * width + 2 * height; 2(width + height)
