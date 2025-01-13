// // bài 1
// const arr = [1, 2, 3, 4, 5, 6];   
// const result = [];
//     for(let i = 0 ; i <arr.length; i++) {
//         if(arr[i] % 2===0) {
//             result.push(arr[i])
//         }
//     }
// console.log(result);

// // bài 2
// const arr2 = [5, 10, 15, 20, 25];
// const x = 15;
// const result2 = [];
// for(let i = 0 ; i< arr2.length; i++) {
//     if(arr2[i] > x) {
//         result2.push(arr2[i])
//     }
// }
// console.log(result2);

// // bài3
// const arr3 = ["apple", "cat", "banana", "dog", "elephant"];
// const n = 3;
// const result4 = [];
// for(let i = 0; i < arr3.length;i++) {
//     if(arr3[i].length > n) {
//         result4.push(arr3[i])
//     }
// }
// console.log(result4);

// // bài 4
// const arr4 = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newArr = [];
// function isNum(sum) {
//     if(sum < 2) return false;
//     for(let i = 2; i<= Math.sqrt(sum); i++) {
//         if(sum % i ===0) return false
//     }
//     return true;
// }
// for(let i = 0;i < arr4.length ;i++) {
//     if(isNum(arr4[i])){
//         newArr.push(arr4[i])
//     }
// }
// console.log(newArr);

// // bài 5
// const arr5 = [1, "hello", 3, null, 5, "world", undefined];
// const filterNumber = arr5.filter((item) => typeof item === "number")
// console.log(filterNumber);

// bài 6
// const arr = [1, 3, 5, 10, 12, 15, 20];


// const result = arr.filter(num => num % 3 === 0 || num % 5 === 0);

// console.log(result); 

// bài 
const fruits = ["apple", "banana","kiwi","kiwi","banana","orange","apple","kiwi"];
const result = [];
const count = [];
for(let i = 0 ; i <fruits.length; i++) {
    if(count[fruits[i]] === undefined) {
        count[fruits[i]] = 1;
    }else{
        count[fruits[i]]++;
    }
}
for(let i = 0 ; i < fruits.length ;i++) {
    if(count[fruits[i]] ===1) {
        result.push(fruits[i])
    }
}
console.log(count);

console.log(result);
