// function monthRandom(month) {
//    return Math.ceil(Math.random() * month);
// }
// console.log(monthRandom(12));

function randomForQuizz() {
    const arrTemplate = ["A", "B", "C", "D"];
    return arrTemplate[Math.floor(Math.random() * 4)];

}
console.log(randomForQuizz());

// viết hàm tạo id ngẫu nhiên có n ký tự ngẫu nhiên trong khoảng [0-9], [A-Z], [a,z], 
// n là tùy chọn nhập vào hàm, prefix là tùy chọn tiền tố người dùng
const string = "ASDFGHJKLQWERTYUIOPZXCVBNMasdfghjklqwertyuiopzxcvbnm1234567890";
function generatorId(n, prefix = '') {
    let myPrefix = prefix;
    const myArr = string.split('')
    for(let i = 0 ; i < n ; i++){
        const randomIndex = Math.round(Math.random() * myArr.length);
        myPrefix += myArr[randomIndex];
    }
    return myPrefix;
}
console.log(generatorId(10, 'prefix-'));
