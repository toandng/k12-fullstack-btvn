document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    document.addEventListener("submit", function(e) {
        e.preventDefault();
        const email = form.querySelector("input[type ='text']").value.trim();
        const password = form.querySelector("input[type='password']").value.trim();

        const userData = {
            email: email,
            password: password
        }
        if(!userData.email || !userData.password) {
            alert("Vui lòng không để trống thông tin");
            return;
        }
        if(userData.password < 8) {
            alert("Mật khẩu quá ngắn! Vui lòng nhập lại mật khẩu");
            return;
        }
        fetch(`http://localhost:3003/register?email=${email}}`)
        .then(response => response.json())
        .then(users => {
            if(users.length > 0){
                alert("Tài khoản đã tồn tại, vui lòng nhập tài khoản khác");
                window.location.href = "login.html";
                return;
            }
            registerUser(email, password);
        })
        .catch(error => {
            console.error("Lỗi kiểm tra email", error);
            alert("Có lỗi kiểm tra lại email!");
        });
    });
    function registerUser(email, password) {
        const userData = { email, password};
        fetch("http://localhost:3003/register", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data => {
            if(data.accessToken) {
                if(confirm("Đăng kí thành công bạn có muốn chuyển sang trang đăng nhập"));
                location.href = "login.html"
            }
        })
        .catch(error => {
            console.error("Lỗi dữ liệu",error)
            alert("Có lỗi xảy ra vui lòng kiểm tra lại")
        })
    }
})