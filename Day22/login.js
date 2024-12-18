function login(email, password){
    const user = data.find((u) => u.email === email && u.password === password) 
        if(user){
            console.log(`Đăng nhập thành công ${user}`);
            
        }else{
            console.log("Thông tin không chính xác");
            return null;
        }
}
document.querySelector('form').addEventListener('submit', function(e) {
    e.defaultPrevented();
    const email = document.querySelector('input.email').value.trim();
    const password = document.querySelector('input.password').value.trim();

    login({email,password});

    document.querySelector('input.email').value ="";
    document.querySelector(' input.password').value ="";

})