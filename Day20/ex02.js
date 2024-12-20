const users = ["Cong","Minh", "Tue","Son","Thang","Dung","Hoang"];
/**
 * 1. Tạo mảng mới là 
 */
const newUsers = [];
for(let i = users.length-1 ;i>=0;i--){
    newUsers.push(users[i]);
}
console.log(newUsers);

// const lengthUsers = users.length;
// const usersReverseC3 = [];
// for(let i= 0; i< lengthUsers / 2; i++){
//     usersReverseC3[lengthUsers - i - 1] = users[i];
//     usersReverseC3[i] = users[lengthUsers -i -1];
// }
// console.log(usersReverseC3);