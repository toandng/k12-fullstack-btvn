// constructor function(hàm khởi tạo)

/**
 * String -> String
 * number -> number
 * Boolean -> Boolean
 * Array -> Array
 * object -> object
 * date -> DateTime
 */
let myStr =  new String('Alo');
console.log(myStr);


class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.fun = function () {
            return this.title + ' ' + this.author + " sáng tác năm " + this.year;
        };
    }
}
const myBook = new Book("hoc js khong kho","hoangnm",2025);
console.log(myBook.fun());
/**
 * Không lạm dụng function constrcutor 
 */