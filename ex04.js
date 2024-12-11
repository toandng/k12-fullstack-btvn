let i = 0;
for(; ;) {
    if(i>=10){
        break;
    }
    console.log(i)
    i++
}

/**
 * For loop:
 * Bước 1: Khai báo giá trị khởi tạo của biến đếm (i)
 * Bước 2: Kiểm tra điều kiện thoát khỏi vòng lặp
 * Bước 3: Thực hiện khối lệnh
 * Bước 4: Cập nhật biến đếm(i)
 * 
 */
// let j =0;
//  while(j<=5) {
//     console.log(`Gia tri cua j: ${j}`)
//     j++
//  }

// Viết lại hàm in ra số nguyên tố bắt buộc dùng while
// let j = 2;
// function checkPrime(n){
//     while(j<n) {
//         if(n % j ===0){
//             console.log(`gia trị n: ${n}, gia tri i: ${i}`);
//             return false;
//         }
//         j++
//     }
//     return true
// }

// function printPrime(n) { 
//     for(let j =2;j<=n;j++){
//         checkPrime(i) && console.log(i)
//     }
// }
// printPrime(10)
/**
 * while loop:
 * - Thường được dùng khi chưa biết rõ số lần lặp.
 * -biến đếm được viết trước vòng lặp.
 * -Kiểm tra điều kiện -> Thực hiện code nếu điều kiện đúng
 * (Lưu ý: trong khối code thì phải thay đổi giá trị biến đếm tránh rơi vào vòng lặp vô tận)
 * 
 * 
 * 
 */

let index = 10;
do {
    // thực hiện 1 lần trước, kể cả khi điều kiện sai
    console.log(index)
    index++
}while(index <=5);