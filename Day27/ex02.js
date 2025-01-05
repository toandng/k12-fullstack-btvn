console.log(Number.isNaN("123"));
console.log(Number.isNaN("abc"));

/**
 * Number.isNaN(number) kiểm tra xem giá trị truyền vào có phải lầ NaN hay k?
 * isNaN() thực hiện ép kiểu ngầm định sang number nếu cần thiết trước khi kiểm tra
 */
let num1 = 123;
 console.log(num1.toExponential());
 
console.log(num1.toFixed(3)); // trả về dạng chuỗi, làm tròn đến giá trị


console.log(num1.toString());

console.log((10).toString(2));
let num2 = new Number(123);
console.log((123).valueOf());
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 -1);
console.log(9007199254740991n +100n);
console.log(typeof (9007199254740991n + 100n));
let a = 123;
console.log(Number.isFinite(123.45));
console.log(Number.isFinite(Math.PI));
console.log(Number.isInteger(a));



