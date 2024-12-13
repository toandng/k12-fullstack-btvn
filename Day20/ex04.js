const products = [
    {id:1, title:"Product A", price:200},
    {id:2, title:"Product B",},
    {id:3, title:"Product C", price:200},

]
function valibdationValue(products) {
    if(products.price != undefined && products.price >=0) {
        return true
    }
    return false
}

for(let i = 0; i < products.length; i++){
    if(!valibdationValue(products[i])) {
        console.log(i);
    }
}
