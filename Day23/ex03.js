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
    


const products = [
	{
		id: 1,
		name: "Apple iPhone 12",
		price: 1000,
	},
	{
		id: 2,
		name: "Samsung Galaxy S21",
		price: 900,
	},
	{
		id: 3,
		name: "Xiaomi Mi 11",
		price: 800,
	},
	{
		id: 4,
		name: "Apple iPhone 11",
		price: 700,
	},
	{
		id: 5,
		name: "Samsung Galaxy S20",
		price: 600,
	},
	{
		id: 6,
		name: "Xiaomi Mi 10",
		price: 500,
	},
];
function getTopProducts(products, top) {
    const result = [...products];
    for(let i = 0; i< result.length;i++){
        let maxId = i;
        for(let j = i+1 ; j < result.length;j++){
            if(result[j].price > result[maxId] ){
                maxId = j;
            }
            if(maxId != i){
                [result[i], result[maxId] = result[maxId], result[i]];
            }
        }
        
    }
     return result.slice(0,top);
}
const topProduct = getTopProducts(products,3 )
console.log(topProduct);

const categories = [
	{
		id: 1,
		name: "Electronics",
		children: [
			{
				id: 2,
				name: "Laptops",
				children: [
					{
						id: 3,
						name: "Apple",
					},
					{
						id: 4,
						name: "Dell",
					},
				],
			},
			{
				id: 5,
				name: "Headphones",
			},
		],
	},
	{
		id: 6,
		name: "Books",
		children: [
			{
				id: 7,
				name: "Fiction",
				children: [
					{
						id: 8,
						name: "Thrillers",
					},
					{
						id: 9,
						name: "Mystery",
					},
				],
			},
			{
				id: 10,
				name: "Non-Fiction",
			},
		],
	},
];
function flattenCategories(categories) {
    return categories.reduce((pre, cur) => {
        if(cur.children && Array.isArray(cur.children)){
            return pre.concat(cur, flattenCategories(cur.children));
        }
        return pre.concat(cur)
    }, []);
}
console.log(flattenCategories(categories));

function getCategoryName(categories, categoryId) {
    for(let category of categories) {
        if(category.id === categoryId) {
            return category.name;
        }
        if(category.children){
            const result = getCategoryName(category.children, categoryId);
            if(result){
                return result;
            }
        }
    }return null;
}
console.log(getCategoryName(categories,3));
console.log(getCategoryName(categories,99));


