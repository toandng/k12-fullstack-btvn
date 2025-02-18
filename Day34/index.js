document.addEventListener("DOMContentLoaded", function() {
    fecchTasks();
    document.getElementById("addTaskForm").addEventListener("submit", function(e){
        e.preventDefault(e);
        addTask();
    });
});
async function fecchTasks() {
    const userId = localStorage.getItem("userId");
    if(!userId) {
        alert("Bạn chưa đăng nhập");
        location.href = "login.html";
        return;
    }
    const response = await fetch(`http://localhost:3003/tasks?userId=${userId}`);
    const tasks = await response.json();
    const tbody = document.getElementById("task-list");
    tbody.innerHTML = tasks.map(task => `
        <tr>
            <td>${task.id}</td>
            <td>${task.title}</td>
            <td>${task.status}</td>
            <td>${task.priority}</td>
            <td>
                <button onclick="editTask(${task.id})" class ="btn btn-primary">Edit</button>
                <button onclick="deleteTask(${task.id})" class ="btn btn-danger">Delete</button>
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
    const filterTask = document.getElementById("filterPriority");
    const filterStatus = document.getElementById("statusFilter"); 

    addTaskForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const title = document.getElementById("title").value.trim();
        const status = document.getElementById("status").value.trim();
        const priority = document.getElementById("priority").value.trim();

        let newTask = {
            id: tasks.length + 1,
            title,
            status,
            priority,
        };

        tasks.push(newTask);
        renderTask();
        addTaskForm.reset();
    });

    function renderTask() {
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
                <td>
                    <select class="task-priority">
                        <option value="low" ${task.priority === "low" ? "selected" : ""}>Low</option>
                        <option value="medium" ${task.priority === "medium" ? "selected" : ""}>Medium</option>
                        <option value="high" ${task.priority === "high" ? "selected" : ""}>High</option>
                    </select>
                </td>
                <td>
                    <button class="btn btn-danger btn-sm delete-btn">Xóa</button>
                </td>
            `;

            row.querySelector(".task-status").addEventListener("change", function () {
                task.status = this.value;
                applyFilter(); 
            });
            row.querySelector(".task-priority").addEventListener("change", function() {
                task.priority = this.value;
                applyFilter()
            })

            row.querySelector(".delete-btn").addEventListener("click", function () {
                tasks = tasks.filter((t) => t.id !== task.id);
                renderTask();
            });

            taskList.appendChild(row);
        });
        applyFilter();
    }

    function applyFilter() {
        let priorityFilter = filterTask.value;
        let statusFilter = filterStatus.value;
        let rows = document.querySelectorAll("#task-list tr");

        rows.forEach(row => {
            let priority = row.querySelector("td:nth-child(4)").textContent;
            let status = row.querySelector("td:nth-child(3)").textContent;

            let priorityMatch = (priorityFilter === "all" || priority === priorityFilter);
            let statusMatch = (statusFilter === "all" || status === statusFilter);

            row.style.display = (priorityMatch && statusMatch) ? "" : "none";
        });
    }

    filterTask.addEventListener("change", applyFilter);
    filterStatus.addEventListener("change", applyFilter);
});
