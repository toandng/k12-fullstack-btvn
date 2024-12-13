const list = ["Xuan", "Ha","Thu","Dong"];
let myString = list.join("->");
console.log(myString);
console.log(list.reverse());


let paragraph = 
"Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh, euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."

let myArray = paragraph.split(",");
console.log(myArray.join(""))

const product = {
    name: "Đầm nữ ren abc",
    SKU: "CA-123",
    categoryId: "CATE-145",
    slug: "dam-nu-ren-abc-ca-123-cate-145"
}
let myArrays = product.name.replaceAll(" ", "-")

console.log(myArrays);


