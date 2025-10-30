function greet(person= "john", greeting = ""){
    const text = greeting + " " + person; 
    return text;
}

// greet();
console.log(greet());
// const p = document.createElement("p");
// p.textContent = `${greet()}`

console.log((()=>{return "Hello"})());

const banks = ["Opay", "Union Bank", "First Bank", "Eco Bank", "GTBank", "..."]
const banksList = [
    {
        bank: "Opay",
        costumers: [
            {name: "Ahmad", acctNo: "8149682515", bal: 30333},
            {name: "Patrick", acctNo: "9048591105", bal: 7725},
            {name: "Ojay", acctNo: "706687244", bal: 7725},
            {name: "Tope", acctNo: "8045839003", bal: 342}
        ]
    },
    {
        bank: "Union Bank",
        costumers: [
            {name: "John", acctNo: "0178778280", bal: 2378483},
            {name: "Kayode", acctNo: "0178778281", bal: 77009564},
        ]
    },
]

function findBank(userAcctNo){
    const found = banksList.find((bank) => bank.costumers.find((costumer)=> costumer.acctNo ===userAcctNo))
    const acctName = found.costumers.find((custumer)=> custumer.acctNo === userAcctNo)
    // return {name: acctName.name, acctNo: acctName.acctNo, banks: found.bank};
    return {...acctName, bal: '' , banks: found.bank};
}

console.log(findBank("9048591105"))