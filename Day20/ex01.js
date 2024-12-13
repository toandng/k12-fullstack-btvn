const students = ["Minh", "Tue","Son","Thang"];

// let content = "";
// for(value of students) {
//     console.log(value);
//     content = content  +value + " ,"; 
// }
// console.log(content)


let result = students.unshift("Vinh", "Công");
console.log(students);
console.log(result);
/**
 * unshift()
 * -Thêm phần tử ở đầu mảng
 * -Thay đổi mảng gốc
 * -Trả về độ dài mới của mảng
 * 
 * 
 * shift()
 * -xóa 1 phần tử
 * -Thay đổi mảng gốc
 * -Trả về phần tử bị xóa
 * 
 * push()
 * -Thêm 1 phần tử ở cuối mảng
 * -Thay đổi mảng gốc
 * -Trả về độ dài mới của mảng
 * 
 * pop()
 * -Xóa 1 phần tử ở cuối mảng
 * -Thay đổi mảng gốc
 * -Trả về phần tử bị xóa
 * 
 */

students.shift();
console.log(students);

students.push("Dung")
console.log(students);

students.pop();
console.log(students);



users.forEach(user => {
    const { address } = user;
    if (!usersGroupByAddress[address]) {
        usersGroupByAddress[address] = []; 
    }
    usersGroupByAddress[address].push(user);
});

console.log(usersGroupByAddress);
const groupedUsersArray = Object.entries(usersGroupByAddress).map(([address, users]) => ({
    address,
    users
}));

console.log(groupedUsersArray);