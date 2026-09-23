const title = document.querySelector("#title");
const button = document.querySelector("#button");

title.textContent = "Hello everyone!"

const list = document.querySelector("#list");

const fruits = ["Banana", "Apple", "Kiwi"];

fruits.forEach((fruit) => {
    const li = document.createElement("li");
    li.textContent = fruit;
    list.append(li);
})