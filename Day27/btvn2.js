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

function flattenCategories(arr, parentId = 0) {
    return arr.reduce((pre, cur) => {
        const {children, ...rest} = cur;
        const current = {...rest, parentId}; 
        if(children && Array.isArray(children)){
            return pre.concat(current, flattenCategories(children, cur.id));
            
        }
        return pre.concat(current);
    },[])
}

const result = flattenCategories(categories);
console.log(result)