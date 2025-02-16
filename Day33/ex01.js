// document.addEventListener("DOMContentLoaded", function() {
//     const form = document.querySelector("form");
//     form.addEventListener("submit", function(event) {
//         event.preventDefault();
//         const email = form.querySelector("input[type='text']").value;
//         const password = form.querySelector("input[type='password']").value;
//         const userData = {
//             email: email,
//             password: password
//         }
//         if (!userData.email || !userData.password) {
//             alert("Khong dk bo trong");
//             return;
//         }
//         if (userData.password.length < 8) {
//             alert("Mat khau qua ngan");
//             return;
//         }
//          fetch("http://localhost:3000/register", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(userData)
//         })
//         .then(response => response.json())
//         .then(data => {
//             location.href = "login.html"
//             if(data.accsessToken) {
//                 if(confirm("Đăng kí thành công")){
//                 }
//             }
//             console.log("User saved:", data);
//         })
//         .catch(error => {
//             console.error("Lỗi khi gửi dữ liệu:", error);
           
//         });
//     });  
// })

document.addEventListener("DOMContentLoaded", function () {
    const taskForm = document.getElementById("addTaskForm");
    const taskList = document.getElementById("task-list");
    const filterButtons = document.querySelectorAll(".filter-btn");

    let tasks = [];

    // Xử lý khi thêm task
    taskForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const title = document.getElementById("title").value;
        const status = document.getElementById("status").value;
        const priority = document.getElementById("priority").value;

        const newTask = {
            id: tasks.length + 1,
            title,
            status,
            priority,
        };

        tasks.push(newTask);
        addTaskToTable(newTask); // Chỉ thêm task mới
        taskForm.reset();
    });

    // Hàm thêm task vào bảng
    function addTaskToTable(task) {
        const row = document.createElement("tr");
        row.setAttribute("data-id", task.id);
        row.innerHTML = `
            <td>${task.id}</td>
            <td>${task.title}</td>
            <td>${task.status}</td>
            <td>${task.priority}</td>
            <td>
                <button class="btn btn-danger" onclick="deleteTask(${task.id})">Xóa</button>
            </td>
        `;
        taskList.appendChild(row);
    }

    // Hàm xóa task
    window.deleteTask = function (id) {
        tasks = tasks.filter(task => task.id !== id);
        const row = document.querySelector(`tr[data-id='${id}']`);
        if (row) row.remove();
    };

    // Hàm lọc task theo priority
    function filterTasks(priorityFilter) {
        document.querySelectorAll("#task-list tr").forEach(row => {
            const priorityCell = row.querySelector("td:nth-child(4)"); // Cột Priority
            if (!priorityCell) return;

            const taskPriority = priorityCell.textContent.trim();

            if (priorityFilter === "all" || taskPriority === priorityFilter) {
                row.style.display = ""; // Hiện task
            } else {
                row.style.display = "none"; // Ẩn task
            }
        });
    }

    // Thêm sự kiện click cho filter buttons
    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            let priority = this.getAttribute("data-priority");
            filterTasks(priority);
        });
    });
});