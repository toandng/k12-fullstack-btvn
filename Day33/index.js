document.addEventListener("DOMContentLoaded", function(){
    fetchTasks();
    document.getElementById("addTaskForm").addEventListener("submit", function(e) {
        e.preventDefault();  
        addTask();
    });
});

async function fetchTasks() {
    const userId = localStorage.getItem("userId");
    if(!userId) {
        alert("Bạn chưa đăng nhập");
        location.href = "login.html";
        return;
    }
    const response = await fetch(`http://localhost:3003/tasks?userId=${userId}`);
    const tasks = await response.json();
    const tbody = document.getElementById('task-list');
    tbody.innerHTML = tasks.map(task =>`
        <tr>
            <td>${task.id}</td>
            <td>${task.title}</td>
            <td>${task.status}</td>
            <td>${task.priority}</td>
            <td>
                <button onclick = "editTask(${task.id})" class="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgb(21, 29, 135);transform: ;msFilter:;"><path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z"></path></svg></button>
                <button onclick = "deleteTask(${task.id})" class = "btn btn-danger"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgb(41, 12, 12);transform: ;msFilter:;"><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z"></path></svg></button>

            </td>
        </tr>    
    `).join('')
}
async function addTask() {
    const title = document.getElementById("title").value;
    const status = document.getElementById("status").value;
    const priority = document.getElementById("priority").value;
    const userId = localStorage.getItem("userId");

    if (!userId) {
        alert("Bạn chưa đăng nhập!");
        return;
    }

    const form = document.getElementById("addTaskForm");
    const taskId = form.dataset.editingId;

    let method = "POST";
    let url = "http://localhost:3003/tasks";
    let body = { title, status, priority, userId };

    if (taskId) {
        method = "PATCH";
        url = `http://localhost:3003/tasks/${taskId}`;
    }

    const response = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    });

    if (response.ok) {
        fetchTasks();
        form.reset();
        delete form.dataset.editingId;
        document.getElementById("submitBtn").textContent = "Add Task";
    }
}

async function deleteTask (taksId) {
    await fetch(`http://localhost:3003/tasks/${taksId}`, {method: "DELETE"});
    fetchTasks();
}

async function editTask(taksId) {
    const response = await fetch(`http://localhost:3003/tasks/${taksId}`);
    const task = await response.json();

    document.getElementById("title").value = task.title;
    document.getElementById("status").value = task.status;

    document.getElementById("priority").value = task.priority;

    document.getElementById("addTaskForm").dataset.editingId = taksId;
    document.getElementById("submitBtn").textContent = " Update Task";
}

// filter
document.addEventListener("DOMContentLoaded", function () {
    let tasks = [];

    const taskList = document.getElementById("task-list");
    const addTaskForm = document.getElementById("addTaskForm");
    const filterPriority = document.getElementById("filterPriority");


    addTaskForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let title = document.getElementById("title").value.trim();
        let status = document.getElementById("status").value;
        let priority = document.getElementById("priority").value;

        let newTask = {
            id: tasks.length + 1,
            title,
            status,
            priority,
        };

        tasks.push(newTask);
        renderTasks();
        addTaskForm.reset();
    });

 
    function renderTasks() {
        taskList.innerHTML = "";
        tasks.forEach((task) => {
            let row = document.createElement("tr");

            row.innerHTML = `
                <td>${task.id}</td>
                <td>${task.title}</td>
                <td>
                    <select class="task-status">
                        <option value="todo" ${task.status === "todo" ? "selected" : ""}>Todo</option>
                        <option value="doing" ${task.status === "doing" ? "selected" : ""}>Doing</option>
                        <option value="done" ${task.status === "done" ? "selected" : ""}>Done</option>
                    </select>
                </td>
                <td>${task.priority}</td>
                <td>
                    <button class="btn btn-danger btn-sm delete-btn">Xóa</button>
                </td>
            `;

         
            row.querySelector(".task-status").addEventListener("change", function () {
                task.status = this.value;
            });

       
            row.querySelector(".delete-btn").addEventListener("click", function () {
                tasks = tasks.filter((t) => t.id !== task.id);
                renderTasks();
            });

            taskList.appendChild(row);
        });

        applyFilter();
    }


    filterPriority.addEventListener("change", applyFilter);

    function applyFilter() {
        let priorityFilter = filterPriority.value;
        let rows = document.querySelectorAll("#task-list tr");

        rows.forEach(row => {
            let priority = row.querySelector("td:nth-child(4)").textContent;
            if (priorityFilter === "all" || priority === priorityFilter) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    }
});

// search

