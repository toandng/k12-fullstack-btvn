// filter2

Array.prototype.filter2 = function(callback,thisArg) {
    const newArr = [];
    for(let i = 0 ; i<this.length;i++){
        if(i in this) {
            const cur = this[i];
            if(callback.call(thisArg,cur,i,this)){
                newArr.push(cur);
            }
        }
    }
    return newArr;
};
const arr = [1,2,3,4,5];
const newArr = arr.filter2((value) => {
    return value %2 !==0;
});
console.log(newArr);


// map 2

Array.prototype.map2 = function(callback, thisArg) {
    const result = [];
    for(let i = 0; i<this.length;i++){
        if(i in this){
            const cur = this[i];
            result[i] =callback.call(thisArg,cur, i, this);
        }
    return result;
}
}
const arr1 = [1, 2, 3, 4, 5];
const result1 = arr1.map2((value) => value * 2);

console.log(result1); // [2, 4, 6, 8, 10]
console.log(result1.length); // 5

// Sample 2
const arr2 = [1, , , , 5]; // Có phần tử trống
const result2 = arr2.map2((value) => value * 2);

console.log(result2); // [2, empty, empty, empty, 10]
console.log(result2.length);


// reduce2

    