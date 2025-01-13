const info = {
    email: "hoang@gmail.com",
}
let str = JSON.stringify(info);
console.log(str);
console.log(typeof str);    
console.log(JSON.parse(str));


console.log(JSON.stringify(NaN));
console.log(JSON.stringify(null));
console.log(JSON.stringify(undefined));
console.log(JSON.stringify(true));
console.log(JSON.stringify(""));
console.log(JSON.stringify([]));
console.log(JSON.stringify(true));
console.log(JSON.stringify(0));
console.log(JSON.stringify(Infinity));

// console.log(JSON.parse(NaN)); error
console.log(JSON.parse(null));
// console.log(JSON.parse(undefined)); error
console.log(JSON.parse(true));
// console.log(JSON.parse("")); error
// console.log(JSON.parse([])); error
// console.log(JSON.parse([])); error
console.log(JSON.parse(0));
// console.log(JSON.parse(Infinity)); error


/**
 * Có thể sử dụng JSON để tạo sao chép sâu
 * (không có tính toàn vẹn dữ liệu với method và giá trị undefined).
 * Có thể dùng để khử phương thức, hoặc thuộc tính undefined
 */
console.log([1,2,3,,,,9]);
console.log(JSON.stringify([1,2,3,,,,9]));
console.log(JSON.parse(JSON.stringify(([1,2,3,,,,9]))));
// 
const now = new Date();
const dayOfWeek = now.getDay(); 
const monday = new Date(now); 

monday.setDate(now.getDate() - (dayOfWeek - 1));
monday.setHours(0, 0, 0, 0); 


const msSinceMonday = now - monday;
const minutesSinceMonday = Math.floor(msSinceMonday / (1000 * 60));
console.log(`Số phút từ 00:00:00 thứ 2 đến thời điểm hiện tại là ${minutesSinceMonday} phút.`);
