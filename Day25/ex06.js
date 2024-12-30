// Wrapper object:
/**
 * Auto boxing: Cơ chế tự động bọc các biến bởi object để sử dụng phương thức có sẵn
 * từ function constructor của kiểu dữ liệu đó. Sau khi Js thực hiện xong thì phương thức
 * thì Wrapper object tự được phá bỏ để dữ liệu trở về trạng thái ban đầu
 *
 */
// null và undefined không có hàm tạo riêng, phương thức
const myStr = "f8-hoc lap trinh";
console.log(myStr.toUpperCase());

let myStr2  = new String("hello");
console.log(myStr2);
