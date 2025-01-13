let fruits = ["Appple", "Banana","Orange"];
let shoppingCart = fruits;
shoppingCart.push("Banana");
console.log(fruits.length);

//Bài 2
const styles = ["Jazz","Blues"];

styles.push("Rock-n-roll");
styles[Math.floor((styles.length -1)/2)] = "Classic";
styles.shift();
styles.unshift("Rap","Regger");
console.log(styles);

//Bài 3
let arr = ["a", "b"];
arr.push(function() {
    console.log((this));
    
})
arr[2]();

// Bài 4
// function sumInput() {

//     let numbers = [];
  
//     while (true) {
  
//       let value = prompt("A number please?", 0);
  
//       if (value === "" || value === null || !isFinite(value)) break;
  
//       numbers.push(+value);
//     }
  
//     let sum = 0;
//     for (let number of numbers) {
//       sum += number;
//     }
//     return sum;
//   }
  
//   alert( sumInput() );

// Bài 5
const newArr = [1,-2,3,4,-9,6];
function getMaxSubSum(arr) {
    let sum = 0;
    let partialSum = 0
    for(let item of arr) {
        partialSum += item;
        sum = Math.max(sum, partialSum);
        if(partialSum < 0) 
            partialSum = 0
    }
    return sum;
}

console.log(getMaxSubSum(newArr));

// Bài 6
const strs = ["my-short", "background-color"];
function camelize(str) {
    return str
        .split('-') 
        .join("")
}

strs.forEach(str => {
    console.log(camelize(str)); // In kết quả cho từng chuỗi trong mảng
});

// Bài 7
const myValue = [2,5,6,7];
const newValue = myValue.map((item) => {
    return item * 2;
})
console.log(newValue);


