const container = document.querySelector(".container");
const largeBox = document.createElement("div");
largeBox.classList.add("large-box");
container.appendChild(largeBox);

const heading = document.createElement("h1");
heading.classList.add("text");
heading.textContent = "Todo App";
largeBox.appendChild(heading);

const input = document.createElement("input");
input.classList.add("task-input");
input.placeholder = "Enter your task";
largeBox.appendChild(input);

const button = document.createElement("button");
button.classList.add("add-btn");
button.textContent = "Add";
largeBox.appendChild(button);

const taskList = document.createElement("ul");
taskList.classList.add("task-list");
largeBox.appendChild(taskList);

