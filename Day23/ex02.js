const myStudents = ["Minh","Tue","Vinh"];
const result = myStudents.splice(1, Infinity,"F8","Hoc lap trinh");
console.log(result);
console.log(myStudents);



/**
 * splice(start, deleteCount, item1,...itemN)
 * -Nếu k truyền tham sô -> cắt được mảng rỗng
 * -Start: vị trí bắt đầu cắt.
 * -deleteCount: Số lượng phần tự bị cắt nhận giá trị 
 * nguyên dương , nếu là âm -> 0,
 */


const data = ["F8", undefined, 0, "Hoang", "Tue", 100, NaN,"Dong"];
/**
 * loại bỏ các giá trị falsy khỏi data
 */
for(let i = 0; i < data.length; i++) {
    
    if(!data[i] ) {
      data.splice(i,1);
      i--;
    }
}
console.log(data);