/**
 * includes()
 * concat()
 * filter()
 * some()
 * every()
 *  
 * ES6 với Array
 * flat()
 * sort()
 * reduce()
 * 
 */

const arr1 = [1,2,3,4,5,"Hoang","F8",NaN];
console.log(arr1.includes(NaN));
console.log(arr1.find((item) => item === NaN));
console.log(arr1.findIndex((item) => item === "Hoang"));


const arrFilter = arr1.filter((item) => {
  return item % 2 === 1 ;
})
console.log(arrFilter);

const students = [
  {id: 1, fullname: "Le Van Minh", age: 28, address: "Nghe An"},
  {id: 2, fullname: "Hoang Quang Thang", age: 21, address: "Vinh Phuc"},
  {id: 3, fullname: "Kieu Minh Tue", age: 18, address: "Vinh Phuc"},
];

const newStudent = students.some((item) => {
    return item.age > 18
})
console.log(newStudent);


