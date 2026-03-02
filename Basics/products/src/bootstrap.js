import faker from "faker";

let products = "";

for (let i = 0; i < 5; i++) {
  let name = faker.commerce.productName();
  products += `<div>${name}</div>`;
}

// console.log(products);
document.querySelector("#dev-products").innerHTML = products;
