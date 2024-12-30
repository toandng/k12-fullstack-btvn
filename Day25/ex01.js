const arr1 = [1,2,3,4,5];

const total = arr1.reduce( (acc,cur) => {
    acc += cur;
    return acc;
    
    
},0);
console.log(total);

const arr2 = [2, 3, 4, 5, 6, 7, 8, 9, 11];
function int(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const total2 = arr2.reduce((acc, cur) => {
    return int(cur) ? acc * cur : acc;
}, 1);

console.log(total2); 



const fruits = ["apple","banana","orange","kiwi","orange","apple","kiwi","apple"];
// function removeFruits(fruits) {
//     let newFruits = fruits.reduce(function(acc, cur) {
//         if(acc.indexOf(cur) === -1){
//             acc.push(cur);
//         }
//         return acc;
//     },[]);
//     return newFruits;
// }
// console.log(removeFruits(fruits));


// const fruitsCount = fruits.reduce((acc,cur)=> {
//     if(!acc[cur]){
//         acc[cur] =0;
//     }
//     acc[cur]++
//     return acc;
// },{})

// console.log(fruitsCount);

const arr3 = new Set([...fruits])
console.log(arr3);
