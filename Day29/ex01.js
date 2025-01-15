/**
 * DOM tree có 3 module chính:
 * 1. Element node
 * 2. Attribute node
 * 3. Text node
 */
// CRUD = create read update delete
/** Phương thức truy xuất phần tử của DOM
 * 
 * 
 */
// const h2Element = document.getElementById("title-1");
// console.log(h2Element);

const example = document.getElementById("example");
const example1 = document.querySelector('#example');
const example2 = document.querySelector(".example-class");
example2.style.color = "red";

console.log(example2);

console.log(example);
console.log(example1);

const olElement = document.getElementsByTagName("ol")[0];
console.log(olElement);

/**
 * createElement
 * appenChild
 * removeChild
 * replaceChild
 */
const liElemt5 = document.createElement("li");
liElemt5.innerText = "item 5"
olElement.appendChild(liElemt5);
olElement.removeChild(olElement.children[1]);
olElement.replaceChild(liElemt5, olElement.children[0])

const users = [
    {id: 3, name: "John Doe"},
    {id: 1, name: "Alice Johnson"},
    {id: 2, name: "Bob Smith"}
];

users.sort((a, b) => a.id - b.id);

const ol = document.createElement("ol");

for (let i = 0; i < users.length; i++) {
    const li = document.createElement("li");
    li.textContent = users[i].name;
    ol.appendChild(li);
}

document.body.appendChild(ol);



const products = [
    { id: 1, title: "Samsung Galaxy 19", price: 2000, quantity: 2 },
    { id: 2, title: "Oppo corolla X", price: 1200, quantity: 1 },
    { id: 3, title: "Iphone 16 pro max", price: 2100, quantity: 3 },
];

const table = document.createElement("table");

const headers = ["ID", "Title", "Price", "Quantity", "Total Value"];
const headerRow = document.createElement("tr");
headers.forEach(header => {
    const th = document.createElement("th");
    th.textContent = header;
    headerRow.appendChild(th);
});
table.appendChild(headerRow);


let totalValueAllProducts = 0;
products.forEach(product => {
    const row = document.createElement("tr");

    const idCell = document.createElement("td");
    idCell.textContent = product.id;
    row.appendChild(idCell);

    const titleCell = document.createElement("td");
    titleCell.textContent = product.title;
    row.appendChild(titleCell);

    const priceCell = document.createElement("td");
    priceCell.textContent = product.price;
    row.appendChild(priceCell);

    const quantityCell = document.createElement("td");
    quantityCell.textContent = product.quantity;
    row.appendChild(quantityCell);

    const totalValueCell = document.createElement("td");
    const totalValue = product.price * product.quantity;
    totalValueCell.textContent = totalValue;
    row.appendChild(totalValueCell);

    totalValueAllProducts += totalValue;

    table.appendChild(row);
});


const totalRow = document.createElement("tr");

const totalLabelCell = document.createElement("td");
totalLabelCell.setAttribute("colspan", "4");
totalLabelCell.textContent = "Total Value of All Products";
totalRow.appendChild(totalLabelCell);

const totalValueAllProductsCell = document.createElement("td");
totalValueAllProductsCell.textContent = totalValueAllProducts;
totalRow.appendChild(totalValueAllProductsCell);

table.appendChild(totalRow);

document.body.appendChild(table);
