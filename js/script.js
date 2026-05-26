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

const clearBtn = document.createElement("button");
clearBtn.classList.add("clear-btn");
clearBtn.textContent = "Clear-All";
largeBox.appendChild(clearBtn);

const filterBox = document.createElement("div");
filterBox.classList.add("filter-box");
largeBox.appendChild(filterBox);

const allBtn = document.createElement("button");
allBtn.classList.add("filter-btn");
allBtn.textContent = "All";
filterBox.appendChild(allBtn);

const completedBtn = document.createElement("button");
completedBtn.classList.add("filter-btn");
completedBtn.textContent = "Completed";
filterBox.appendChild(completedBtn);

const pendingBtn = document.createElement("button");
pendingBtn.classList.add("filter-btn");
pendingBtn.textContent = "Pending";
filterBox.appendChild(pendingBtn);

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
    span.classList.add("task-text");
    span.textContent = taskText;
    li.appendChild(span);

    const btnBox = document.createElement("div");
    btnBox.classList.add("btn-box");
    li.appendChild(btnBox);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit";
    btnBox.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "delete";
    btnBox.appendChild(deleteBtn);

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

taskList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
        const li = event.target.closest(".task-item");
        li.remove();
        updateCounter();
        saveTasks();
    }

    if (event.target.classList.contains("task-text")) {
        event.target.classList.toggle("completed");

        saveTasks();
    }

    if (event.target.classList.contains("edit-btn")) {
        const li = event.target.closest(".task-item");
        const taskText = li.querySelector(".task-text").textContent;
        input.value = taskText;
        li.remove();
        updateCounter();
        saveTasks();
    }
});

clearBtn.addEventListener("click", () => {
    taskList.innerHTML = "";

    updateCounter();
    saveTasks();
});

allBtn.addEventListener("click", () => {
    const tasks = document.querySelectorAll(".task-item");

    tasks.forEach((task) => {
        task.style.display = "flex";
    });
});

completedBtn.addEventListener("click", () => {
    const tasks = document.querySelectorAll(".task-item");

    tasks.forEach((task) => {
        const text = task.querySelector(".task-text");

        if (text.classList.contains("completed")) {
            task.style.display = "flex";
        } else {
            task.style.display = "none";
        }
    });
});

pendingBtn.addEventListener("click", () => {
    const tasks = document.querySelectorAll(".task-item");

    tasks.forEach((task) => {
        const text = task.querySelector(".task-text");

        if (!text.classList.contains("completed")) {
            task.style.display = "flex";
        } else {
            task.style.display = "none";
        }
    });
});




