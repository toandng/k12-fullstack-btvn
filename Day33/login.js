document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = form.querySelector("input[type='text']").value.trim();
        const password = form.querySelector("input[type='password']").value.trim();

        if (!email || !password) {
            alert("Không được bỏ trống");
            return;
        }

        if (password.length < 6) {
            alert("Mật khẩu phải có ít nhất 6 ký tự");
            return;
        }

        const userData = { email, password };

        fetch("http://localhost:3003/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.accessToken) {
                localStorage.setItem("token", data.accessToken);
                localStorage.setItem("userId", data.user.id); 
                localStorage.setItem("user", JSON.stringify(data.user));

                alert("Đăng nhập thành công!");
                location.href = "index.html";
            } else {
                alert("Đăng nhập thất bại! Kiểm tra lại email và mật khẩu.");
            }
        })
        .catch(error => {
            console.error("Lỗi khi gửi dữ liệu:", error);
            alert("Lỗi kết nối, vui lòng thử lại!");
        });
    });
});
