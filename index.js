var todoList = [];
var comdoList = [];
var remList = [];
var addButton = document.getElementById("add-button");
var todoInput = document.getElementById("todo-input");
var deleteAllButton = document.getElementById("delete-all");
var allTodos = document.getElementById("all-todos");
var deleteSButton = document.getElementById("delete-selected");

// Event listeners for add and delete actions
addButton.addEventListener("click", add);
deleteAllButton.addEventListener("click", deleteAll);
deleteSButton.addEventListener("click", deleteS);

// Event listeners for filters and task actions
document.addEventListener('click', (e) => {
    if (e.target.className.split(' ')[0] == 'complete' || e.target.className.split(' ')[0] == 'ci') {
        completeTodo(e);
    }
    if (e.target.className.split(' ')[0] == 'delete' || e.target.className.split(' ')[0] == 'di') {
        deleteTodo(e);
    }
    if (e.target.id == "all") {
        viewAll();
    }
    if (e.target.id == "rem") {
        viewRemaining();
    }
    if (e.target.id == "com") {
        viewCompleted();
    }
});

// Event listener for 'Enter' key to add a task
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        add();
    }
});

// Updates the counts of tasks and filters them by status (completed, remaining)
function update() {
    comdoList = todoList.filter((ele) => ele.complete);
    remList = todoList.filter((ele) => !ele.complete);
    document.getElementById("r-count").innerText = remList.length.toString();
    document.getElementById("c-count").innerText = comdoList.length.toString();
}

// Adds a new task to the todoList
function add() {
    var value = todoInput.value;
    if (value === '') {
        alert("😮 Task cannot be empty");
        return;
    }
    todoList.push({
        task: value,
        id: Date.now().toString(),
        complete: false,
    });

    todoInput.value = "";
    update();
    addinmain(todoList);
}

// Renders the tasks in the main list view
function addinmain(todoList) {
    allTodos.innerHTML = "";
    todoList.forEach(element => {
        var x = `
            <li id="${element.id}" class="todo-item">
                <p id="task"> ${element.complete ? `<strike>${element.task}</strike>` : element.task} </p>
                <div class="todo-actions">
                    <button class="complete btn btn-success">
                        <i class="ci bx bx-check bx-sm"></i>
                    </button>
                    <button class="delete btn btn-error">
                        <i class="di bx bx-trash bx-sm"></i>
                    </button>
                </div>
            </li>`;
        allTodos.innerHTML += x;
    });
}

// Deletes an individual task
function deleteTodo(e) {
    var deleted = e.target.closest('.todo-item').getAttribute('id');
    todoList = todoList.filter((ele) => ele.id != deleted);

    update();
    addinmain(todoList);
}

// Completes or un-completes an individual task
function completeTodo(e) {
    var completed = e.target.closest('.todo-item').getAttribute('id');
    todoList.forEach((obj) => {
        if (obj.id == completed) {
            obj.complete = !obj.complete; // Toggle completion status
            var taskElement = e.target.closest('.todo-item').querySelector("#task");
            taskElement.classList.toggle("line", obj.complete); // Apply/remove strike-through
        }
    });

    update();
    addinmain(todoList);
}

// Deletes all tasks
function deleteAll() {
    todoList = [];
    update();
    addinmain(todoList);
}

// Deletes only completed tasks
function deleteS() {
    todoList = todoList.filter((ele) => !ele.complete);
    update();
    addinmain(todoList);
}

// Filters to view only completed tasks
function viewCompleted() {
    addinmain(comdoList);
}

// Filters to view only remaining tasks
function viewRemaining() {
    addinmain(remList);
}

// Views all tasks (default)
function viewAll() {
    addinmain(todoList);
}