const productsSection = document.getElementById("products");
fetch("http://localhost:3000/products")
    .then((response) =>response.json())

    .then((data) => {
        const ulElement = document.createElement('ul');
        console.log(data);
        
        data.forEach(item => {
            const liElement = document.createElement('li');
            liElement.innerHTML = `
                <h2>${item.title}</h2>
                <p><strong>Price:</strong> ${item.price}</p>
                <p><strong>Description</strong>: ${item.description}</p>
                <img src ="${item.thumbnail}" />
            `
            ulElement.appendChild(liElement);
        });
        productsSection.appendChild(ulElement);
    } )
    .catch((error) => { console.log(error);})
    // Promise chain
    // Promise có 3 trạng thái: peding, fullfiled, rejected