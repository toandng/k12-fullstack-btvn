const students = [
    {name:"Nguyen Van A", score: 9},
    {name:"Tran Thi B", score: 8},
    {name:"Le Van C", score: 5},
    {name:"Pham Thi D", score: 3},
    {name:"Doan Van E", score: 10},
    {name:"Hoang Thi F", score: 6},
]

function highestStudent() {
    let hightudents = students[0];
    for(let i =0; i< students.length;i++){
        if(students[i].score > hightudents.score){
            hightudents = students[i].score
        }
    }
    return hightudents;
}
function lowestStudent (){
    let lowStudent = students[0];
    for(let i=0;i< students.length;i++){
        if(students[i].score < lowStudent.score){
            lowStudent = students[i].score
        }
    }
    return lowStudent;
}

function groupStudentsByScore(students) {
    const groups = {
        A: [], // Điểm từ 8 đến 10
        B: [], // Điểm từ 6 đến <8
        C: [], // Điểm từ 4 đến <6
        D: [], // Điểm còn lại
    };

    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        if (student.score >= 8) {
            groups.A.push(student);
        } else if (student.score >= 6) {
            groups.B.push(student);
        } else if (student.score >= 4) {
            groups.C.push(student);
        } else {
            groups.D.push(student);
        }
    }
    return groups
}

const hightudents = highestStudent(students);
const lowStudent = lowestStudent(students);
const groupStudent = groupStudentsByScore(students);

console.log("sinh vien co diem cao nhat", hightudents);
console.log("sinh vien co diem thap nhat", lowStudent);
console.log("Nhom loai diem cac sinh vien", groupStudent);