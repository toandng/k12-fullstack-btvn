
function createUser(name, password, email) {
    if (!name || !password || !email) {
        throw new Error("Vui lòng nhập đầy đủ thông tin name, password, email");
    }
    return {
        name,
        password,
        email,
        role: "user",
    };
}

const data = []; 


function register(...users) {
    for (const user of users) {
        const { name, password, email } = user;

        try {
            const newUser = createUser(name, password, email);
            data.push(newUser);
        } catch (error) {
            alert(error.message);
            return;
        }
    }
    alert("Đăng ký thành công!");
    console.log("Danh sách người dùng đã đăng ký:", data);
}


function login(email, password) {
    const user = data.find((u) => u.email === email && u.password === password);

    if (user) {
        alert(`Đăng nhập thành công! Xin chào ${user.name}`);
        console.log("Đăng nhập thành công:", user);
        return user;
    } else {
        alert("Thông tin đăng nhập không hợp lệ");
        console.log("Thông tin đăng nhập không hợp lệ");
        return null;
    }
}

document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.querySelector("input.name").value.trim();
    const password = document.querySelector("input.password").value.trim();
    const email = document.querySelector("input.email").value.trim();

    register({ name, password, email });


    document.querySelector("input.name").value = "";
    document.querySelector("input.password").value = "";
    document.querySelector("input.email").value = "";
});


document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Ngăn tải lại trang

    const email = document.querySelector("input.login-email").value.trim();
    const password = document.querySelector("input.login-password").value.trim();

    login(email, password);


    document.querySelector("input.login-email").value = "";
    document.querySelector("input.login-password").value = "";
});
