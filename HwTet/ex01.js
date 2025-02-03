let toDoList = JSON.parse(localStorage.getItem('toDoList')) || [];

function addTodoList() {
    let toDo = document.getElementById("toDo").value;
    if (toDo) {
        toDoList.unshift({
            name: toDo,
            status: false,
        });
        document.getElementById("toDo").value = "";
        saveToLocalStorage();
        renderList();
    }
}

function saveToLocalStorage() {
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
}

function renderList(filter = false, searchTerm = "") {
    let toDo = `<tr>
        <th>Name</th>
        <th>Status</th>
        <th>Actions</th>
    </tr>`;
    toDoList
        .filter(task => !filter || task.status)
        .filter(task => task.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .map((value, index) => {
            toDo += `<tr>
                <td class="${value.status ? 'completed' : ''}" onclick="toggleStatus(${index})">${value.name}</td>
                <td>${value.status ? 'Completed' : 'Pending'}</td>
                <td>
                    <button onclick="deleteTask(${index})">Delete</button>
                    <button onclick="editTask(${index})">Edit</button>
                </td>
            </tr>`;
        });
    document.getElementById("table").innerHTML = toDo;
}

function toggleStatus(index) {
    toDoList[index].status = !toDoList[index].status;
    saveToLocalStorage();
    renderList();
}

function deleteTask(index) {
    toDoList.splice(index, 1);
    saveToLocalStorage();
    renderList();
}

function editTask(index) {
    const newName = prompt("Edit task name:", toDoList[index].name);
    if (newName !== null && newName.trim() !== "") {
        toDoList[index].name = newName;
        saveToLocalStorage();
        renderList();
    }
}

function filterTasks() {
    renderList(true);
}

function searchTasks() {
    const searchTerm = document.getElementById("search").value;
    renderList(false, searchTerm);
}

renderList();
