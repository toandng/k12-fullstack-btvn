// Viết hàm in ra bảng cửu chương từ 1 đến 10

function printMultiplication(i,j){
    for(let i=1; i<=10;i++){
        let row = '\t';
        for(let j=1; j<=10; j++){
                row +=(`${i} x ${j} = ${i*j}\t`);
        }
       console.log(row.trim());
    }
}
printMultiplication();