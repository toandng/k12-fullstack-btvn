const categories = [
	{
		id: 1,
		name: "Chuyên mục 1",
		parent: 0,
	},
	{
		id: 2,
		name: "Chuyên mục 2",
		parent: 0,
	},
	{
		id: 3,
		name: "Chuyên mục 3",
		parent: 0,
	},
	{
		id: 4,
		name: "Chuyên mục 2.1",
		parent: 2,
	},
	{
		id: 5,
		name: "Chuyên mục 2.2",
		parent: 2,
	},
	{
		id: 6,
		name: "Chuyên mục 2.3",
		parent: 2,
	},
	{
		id: 7,
		name: "Chuyên mục 3.1",
		parent: 3,
	},
	{
		id: 8,
		name: "Chuyên mục 3.2",
		parent: 3,
	},
	{
		id: 9,
		name: "Chuyên mục 3.3",
		parent: 3,
	},
	{
		id: 10,
		name: "Chuyên mục 2.2.1",
		parent: 5,
	},
	{
		id: 11,
		name: "Chuyên mục 2.2.2",
		parent: 5,
	},
];
function convertNested(arr) {
    const map = new Map();
    const result = [];
    for(const item of arr) {
        map.set(item.id, {...item, children: []});
    }
    for(const item of arr) {
        if(item.parent === 0) {
            result.push(map.get(item.id));
        }else{
            const parent = map.get(item.parent);
            if(parent){
                parent.children.push(map.get(item.id));
            }
        }
    }
    return result;
}
const categoriesNess = convertNested(categories);
console.log(categoriesNess);





