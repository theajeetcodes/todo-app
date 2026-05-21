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

const counter = document.createElement("p");
counter.classList.add("counter");
counter.textContent = "Total Tasks: 0";
largeBox.appendChild(counter);

const taskList = document.createElement("ul");
taskList.classList.add("task-list");
largeBox.appendChild(taskList);

function updateCounter() {
    const totalTasks = document.querySelectorAll(".task-item").length;
    counter.textContent = `Total Task: ${totalTasks}`;
}

function saveTasks() {
    localStorage.setItem("tasks",taskList.innerHTML);
}

function addTask() {
    const taskText = input.value.trim();

    if (taskText === "") {
        return;
    }

    const li = document.createElement("li");
    li.classList.add("task-item");

    const span = document.createElement("span");
    span.textContent = taskText;
    span.addEventListener("click", () => {
        span.classList.toggle("completed");
        saveTasks();
    });
    li.appendChild(span);

    const btnBox = document.createElement("div");
    btnBox.classList.add("btn-box");
    li.appendChild(btnBox);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit";
    btnBox.appendChild(editBtn);

    editBtn.addEventListener("click", () => {
        input.value = span.textContent;
        li.remove();

        updateCounter();
        saveTasks();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "delete";
    btnBox.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", () => {
    li.remove();

    updateCounter();
    saveTasks();
    });

    taskList.appendChild(li);
    input.value = "";
    updateCounter();
    saveTasks();
}

button.addEventListener("click", addTask);
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});

window.addEventListener("DOMContentLoaded", () => {
    taskList.innerHTML = localStorage.getItem("tasks") || "";

    updateCounter();
});




