/**
 * sort(compareFn)
 */
const arr1 = [5,100,3,1,4,10,2,];
const arr2 = ["Hoan","Minh","Duy","Dung"];


console.log(arr1.sort());
console.log(arr1);
console.log(arr2.sort());

console.log(arr1.sort((a,b) => a-b));
console.log(arr1.sort((a,b) => b-a));

// const students = [
//     {id: 1, fullname: "Le Van Minh", age: 28, address: "NgheAn"},
//     {id: 2, fullname: "Hoang Quang Thang", age: 21, address: "VinhPhuc"},
//     {id: 3, fullname: "Kieu Minh Tue", age: 18, address: "VinhPhuc"},
//     {id: 4, fullname: "Nguyen Van Cong", age: 18, address: "VinhPhuc"},
//     {id: 5, fullname: "Nguyen Van Cong", age: 22, address: "VinhPhuc"},

// ];

// const sortedStudents = students.sort(function(a, b) {
//     return a.age - b.age; 
// });

// function sortbyName(data) {
//     for(let i = 0 ; i< data.length;i++) {
//         const arrFullname = data[i].fullname.split(" ");
//         const lastName = arrFullname[arrFullname.length - 1]
//         console.log(lastName);
//     }
// }
// console.log(sortedStudents);
// console.log(sortbyName(students));


const students = [
    { id: 1, fullname: "Le Van Minh", age: 28, address: "NgheAn" },
    { id: 2, fullname: "Hoang Quang Thang", age: 18, address: "VinhPhuc" },
    { id: 3, fullname: "Kieu Minh Tue", age: 21, address: "VinhPhuc" },
    { id: 4, fullname: "Nguyen Van Cong", age: 18, address: "HaNoi" },
    { id: 5, fullname: "Nguyen Minh Cong", age: 18, address: "HaNoi" },
    { id: 6, fullname: "Nguyen Van Anh Cong", age: 22, address: "HaNoi" },
    { id: 7, fullname: "Cong", age: 22, address: "HaNoi" },

    ];
    const sortedByAge = students.sort((a, b) => a.age - b.age);
    console.log(sortedByAge);
    const sortedByLastName = sortedByAge.sort((a, b) => {
        let lastNameA = a.fullname.split(" ").pop();
        let lastNameB = b.fullname.split(" ").pop();
        if(lastNameA < lastNameB){
            return -1;
        }
        if(lastNameA > lastNameB) {
            return 1;
        }
        if(lastNameA.join(" ") < lastNameB.join(" "))
             return -1;
    });