const time1 = new Date();
console.log(time1);
console.log( typeof time1);

console.log(new Date("2024-01-01 00:00:00"));
console.log(Date.now());

/**
 * 1.Tính số ngày bạn đã sống
 * 2.Tính số phút tính từ 00:00:00 ngày thứ 2 của tuần đến thời điểm hiện tại
 * 3. Tính số giờ từ thời điểm này đến tết dương lịch 2026 
 */

const myTime = new Date("2004-08-05");
const currentDate = new Date();
const milSecond = 24 * 60 * 60 * 1000; 
const daysLived = Math.floor((currentDate - myTime) / milSecond);
console.log(`Bạn đã sống được ${daysLived} ngày.`);
console.log(myTime);

//
const now = new Date();
const dayOfWeek = now.getDay();
const monday = new Date(now);

monday.setDate(now.getDate() - (dayOfWeek -1));
monday.setHours(0,0,0,0);

const startMonday = now - monday;
const minutesMonday = Math.floor(startMonday / (1000 * 60))
console.log(`Số phút từ thứ 2 đến thời điểm hiện tại là ${minutesMonday} phút `);


// 
const newYear2026 =  new Date("2026-01-01 00:00:00");
const hoursFrom2026 = Math.ceil( (Math.floor(newYear2026 - now) / (1000 * 60 *60)));
console.log(`Số giờ từ hiện tại đên tết dương lịch 2026 ${hoursFrom2026} giờ`);

/**
 * Xây dựng đồng hồ countdown đếm ngược đến Tết Dương lịch 2026
 */
setInterval(function () {
    const now = new Date();
    const targetDate = new Date('2026-01-01T00:00:00');
    const timeDiff = targetDate - now;

    if (timeDiff <= 0) {
        console.log("Happy New Year 2026!");
        clearInterval(this); 
        return;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    console.log(`Còn ${days} ngày, ${hours} giờ, ${minutes} phút, ${seconds} giây đến Tết Dương lịch 2026.`);
}, 1000);
