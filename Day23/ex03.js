const arr1 = [1,2,3,4,5,6,7,8];
const evenElemnt = arr1.findIndex((arr) => arr % 2 === 0);
console.log(evenElemnt);

const element = arr1.find((item) => item > 100);
console.log(element);
/**
 * -Trả về phần tử đầu tiên tìm thấy thỏa mãn điều kiện
 * - Nếu không tìm tháy -> undefined
 * Nếu k tìm thấy phần tử thỏa mãn điều kiện thì findIndex, findLastIndex trả về -1
 * includes(searchElement, fromIndex): Trả về giá trị boolean theo giá trị
 * tìm kiếm.
 * -fromInfex [optional]: Vị trí bắt đầu tìm kiếm, nếu không có thì tìm từ đầu mảng
 * 
 */
const element1 = arr1.findIndex(function(item) {
    return item > 1;
});
console.log(element1);

const includesValue = arr1.includes("Dong");
console.log(includesValue);
    