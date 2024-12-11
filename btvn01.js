
function squareNumber(n){
    let flag = 0;
    let i = 0;
    while(i <=n ){
        if(i**2 == n){
            flag = 1;
            break;
        }
        i++;
     }
     return flag;
}
let n = prompt("Nhập 1 số tự nhiên");
let check = squareNumber(n);
if(check == 1) {
    console.log(`${n}  là số chính phương`);
}
else{console.log(`${n} Đây không phải là số chính phương`)};
