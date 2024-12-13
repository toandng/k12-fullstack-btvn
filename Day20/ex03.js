const users = [
    {id:1, username: "Minh",address: "NgheAn"},
    {id:2, username: "Tue",   address: "VinhPhuc"},
    {id:3, username: "Son", address: "HaNoi"},
    {id:4, username: "Cong",address: "HaNoi"},
    {id:4, username: "Toan",address: "HaNam"},
]

const usersGroupByAddress = {};

// users.forEach(users => {
//     const {address} = users;
//     if(!usersGroupByAddress[address]){
//         usersGroupByAddress[address] = [];
//     }
//     usersGroupByAddress[address].push(users)
// })
// console.log(usersGroupByAddress);


for(value of users){
    if(!usersGroupByAddress[value.address]){
        usersGroupByAddress[value.address] = []
    }
    usersGroupByAddress[value.address].push(value)
}
console.log(usersGroupByAddress)


const students = [
    { id: 1, username: "Son", score: 8 },
    { id: 2, username: "Dung", score: 5 },
    { id: 3, username: "Minh", score: 2 },
];

// let maxScore = -Infinity; 
// let minScore = Infinity;  
// let totalScore = 0;     


// for(let i =0 ; i < students.length; i++){
//     const score = students[i].score;
//     if(score > maxScore) {
//         maxScore = score
//     }
//     if(score < minScore) {
//         minScore = score
//     }
//     totalScore += score
// }
// const averageScore = totalScore / students.length;

// console.log("Điểm cao nhất:", maxScore);
// console.log("Điểm thấp nhất:", minScore);
// console.log("Điểm trung b:", averageScore);

let highest = students[0].score;
let lowest = students[0].score;
total = students[0].score;
for(let i = 1 ; i <  students.length; i++) {
    if(students[i].score  >highest.score) {
        highest = students[i].score;
    }
    if(students[i].score < lowest.score) {
        lowest  = students[i].score;
    }
    total += students[i].score;
}
const averageScore = total /  students.length;
console.log("Điểm cao nhất:", highest);
console.log("Điểm thấp nhất:", lowest);
console.log("Điểm trung bình:", averageScore);