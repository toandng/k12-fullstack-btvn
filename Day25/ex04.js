function User (email, name,address) {
    this.email = email;
    this.name = name;
    this.address = address;

    this.hello = function() {
        console.log(`Xin chao, minh la ${name}, minh den từ ${address}`);
        
    };
}
User.prototype.getInfor = function() {
    console.log(`name: ${this.name}, address: ${this.name}, email: ${this.email}`);
}
const toan = new User("toan@gmail.com","toan","ha nam");

toan.hello();

toan.getInfor();    
/**
 * Dùng prototype khi nào:
 * -Khi muốn tạo ra những phương thức, thuộc tính dùng chung.
 * - Dễ dàng kiểm soát hàng loạt
 * - Tối ưu bộ nhớ
 * 
 * Khai báo phương thức, thuộc tính trong constructor function khi nào:
 * -Dùng khi muốn tách biệt các đối tượng tạo ra
 * - Có thể ghi đè thuộc tính, phương thức mới cho từng đối tượng cụ thể.
 * -Tốn bộ nhớ     
 */

