const fruits = ["apple", "banana","kiwi","kiwi","banana","orange","apple","kiwi"];
function removeDuplicate(fruits){
    let newFruits = fruits.reduce(function (acc,e) {
        if(acc.indexOf(e) === -1){
            acc.push(e);
        }
        return acc;
    },[]);
    return newFruits;
};
const result = removeDuplicate(fruits);
console.log(result);


function fibonaci(n){
    if(n <= 0) return [];
    if(n === 1) return[0];
    if(n === 2 ) return [0,1];

    const fibArr = [0,1];
    for(let i = 2; i< n ;i++){
        fibArr.push(fibArr[i-1] + fibArr[i-2]);
    }
    return fibArr;
}
const fibInput = prompt("Nhập từ số bất kì ");
const n = parseInt(fibInput);
console.log(fibonaci());

if(!isNaN(n) && n> 0) {
    console.log("dãy fibonasi là", fibonaci(n));
    
}
else{
    console.log("nhập lại số");
    
}