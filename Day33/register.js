document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = form.querySelector("input[type='text']").value.trim();
        const password = form.querySelector("input[type='password']").value.trim();
        if (!email || !password) {
            alert("Không được bỏ trống! Vui lòng nhập thông tin đầy đủ");
            return;
        }
        if (password.length < 8) {
            alert("Mật khẩu quá ngắn! Vui lòng nhập ít nhất 8 ký tự.");
            return;
        }

        fetch(`http://localhost:3003/users?email=${email}`)
            .then(response => response.json())
            .then(users => {
                if (users.length > 0) { 
                    alert("Tài khoản đã tồn tại, vui lòng nhập tài khoản khác!");
                    location.href = "register.html";
                    return;
                }

                registerUser(email, password);
            })
            .catch(error => {
                console.error("Lỗi kiểm tra email:", error);
                alert("Có lỗi xảy ra khi kiểm tra email!");
            });
    });

    function registerUser(email, password) {
        const userData = { email, password };

        fetch("http://localhost:3003/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data => { 
            
           if(data.accessToken) {
                if(confirm("Đăng kí thành công bạn có muốn chuyển sang đăng nhập")){
                    location.href = "login.html";
                }
           }
           
        })
        .catch(error => {
            console.error("Lỗi khi gửi dữ liệu:", error);
            alert("Có lỗi xảy ra, vui lòng thử lại!");
        });
    }
});
