const users = [   
    {id:1, name:"Hoang"},
    {id:2 , name:"Thang"},
    {id:3 , name:"Dung"},
    {id:5 , name: "Son"},
    {id:4 , name: "Vinh"},
    {id:6 , name: "Minh"},
    // {id:8 , name: "Cong"},
    {id:9 , name: "Toan"},
    {id:7 , name: "Vinh"},
]
/**
 * Hiển thị danh sách người dùng sử dụng ol li theo đúng thứ tự (thứ tự phụ thuộc vào id)
 */
// users.sort((a,b) => a.id - b.id)
const ol = document.createElement("ol");
for (let i = 0; i < users.length; i++) {
   const li = document.createElement("li");
   li.textContent = users[i].name
    ol.appendChild(li)
}
document.body.appendChild(ol);


