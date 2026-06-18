
// ======================================
// TODO LIST
// ======================================
const todoInput = document.querySelector(".todo-input");
const todoAddButton = document.querySelector(".todo-add-btn");
const todoList = document.querySelector(".todo-list");

todoAddButton.onclick = function () {

    const taskText = todoInput.value;

    if (taskText === "") {
        return;
    }

    const task = document.createElement("div");
    task.classList.add("todo-task");

    task.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="delete-task">x</button>
    `;

    todoList.appendChild(task);

    todoInput.value = "";

    const deleteButton = task.querySelector(".delete-task");

    deleteButton.onclick = function () {
        task.remove();
    };
};
