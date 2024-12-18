const obj = {
    username: 'toandg',
};
// Object literal
/**
 * Key: value
 * Key: Là string hoặc symbol
 * Value: có thể nhận mọi loại dữ liệu: number, string, array, object, function, null,... 
 * Value là function thig gọi là phương thức
 */

const userInfor = {
    fullname: "Nguyen Duc Toan",
    address: "Ha Nam",
    leanr: function(lesson, time) {
        console.log(`Toi hoc ${lesson} vao luc ${time}`);
    },
};
console.log(userInfor.fullname);
userInfor.leanr("Js", "12h trua nay");

const obj2 = new Object();
const obj3 = new Object({title: "F8"});
console.log(obj2);
console.log(obj3);


const newkey = "email";

userInfor[newkey] = "toan@gmail.com";
console.log(userInfor);

userInfor["Sở thích"] = ["coding", "reading book"];

console.log(userInfor);

let title = "Tivi Samsung 64inch";
let price = 3000;
let year = 2021;

const product = {title, price, year};
// shorthand property

console.log(product)
