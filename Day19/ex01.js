// function calcBMI() {
//     let weight = parseFloat(prompt('Nhập cân nặng'));
//     let height = parseFloat(prompt('Nhập chiều cao'));
//     console.log(weight,height);

//     if(weight != weight || weight <0) {
//         console.log('Cân nặng không hợp lệ');
//         return
//     }
//     if(height != height || height <0) {
//         console.log('Chiều cao k không hợp lệ');
//         return
//     }
//     const BMI = weight / height**2;
//     let content = '';
    
//     switch(true) {
//         case BMI <18.5:
//             content= "Hoi gay";
//             break;
//         case BMI >=18.5 && BMI <23:
//             content = "hoi gay"
//             break;
//         case BMI >=23 && BMI <25:
//             content= 'Binh thuong';
//             break;
//         default:
//             content = 'Béo phì';
//     }
//     console.log(`Chi so BMI  cua ban la ${BMI}, ban ${content}`);
// }
// calcBMI(); 

function printDay() {
    month = parseFloat(prompt("Nhập tháng tùy chọn"));

if(month != month || month <0){
    console.log("Tháng không hợp lệ")
    return
}
let content = '';
switch(month){
    case 0:
        content = "Tháng 1";
        break;
    case 1:
        content = "Tháng 2";
        break;
    case 2:
        content =  "Tháng 3";
        break;
    case 3:
        content = "Tháng 4";
        break;
    case 4:
        content = "Tháng 5";
        break;
    case 5:
        content= "Tháng 6";
        break;
    case 6:
        content= "Tháng 7";
        break;
    case 7:
        content= "Tháng 8";
        break;
     case 8:
        content= "Tháng 9";
        break;
     case 9:
        content= "Tháng 10";
        break;
     case 10:
        content= "Tháng 11";
        break;
    default:
        content= "Tháng 12";
}
}
printDay();

// const now = new Date();
// console.log(now.getMonth());
// console.log(now.getDay());



