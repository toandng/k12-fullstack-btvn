const products = [
    { id: 1, title: "Samsung Galaxy 19", price: 2000, quantity: 2 },
    { id: 2, title: "Oppo corolla X", price: 1200, quantity: 1 },
    { id: 3, title: "Iphone 16 pro max", price: 2100, quantity: 3 },
    { id: 4, title: "Iphone 15 pro max", price: 2100, quantity: 2 },
    { id: 5, title: "Iphone 14 pro max", price: 2200, quantity: 2 },


    ];
    /**
    * Xây dựng giao diện bảng sản phẩm với mỗi sản phẩm có thêm cột tổng giá trị theo từng sản phẩm.
    * Dòng cuối bảng tính tổng giá trị danh sách sản phẩm
    * Thực hiện tất cả bằng JavaScript
    */
    const tbTable= document.createElement("table");
    tbTable.classList.add('border')
    const headers = ["ID", "Title", "Giá", "Số lượng","Tổng tiền (vnđ)"];
    const headerRow = document.createElement("tr");
    headers.forEach(headers => {
        const th = document.createElement("th");
        th.textContent = headers;
        headerRow.appendChild(th);
    });
    tbTable.appendChild(headerRow);

    let totalValueAllProducts = 0;
    products.forEach(product => {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.textContent = product.id;
        row.appendChild(idCell);

        const titleCell = document.createElement("td");
        titleCell.textContent = product.title;
        row.appendChild(titleCell);

        const priceCell = document.createElement("td");
        priceCell.textContent = product.price
        row.appendChild(priceCell);

        const quantityCeil = document.createElement("td");
        quantityCeil.textContent = product.quantity;
        row.appendChild(quantityCeil);

        const totalValueCell = document.createElement("td");
        const totalValue = product.price * product.quantity;
        totalValueCell.textContent = totalValue;
        row.appendChild(totalValueCell);
    
        totalValueAllProducts += totalValue;
    
        tbTable.appendChild(row);
    });

    const totalRow = document.createElement("tr");
    const totalLabelCell = document.createElement("td");
    totalLabelCell.setAttribute("colspan", "4");
    totalLabelCell.textContent = "Tổng số tiền(vnđ)";
    totalRow.appendChild(totalLabelCell);

    const totalCell = document.createElement("td");
    totalCell.textContent = totalValueAllProducts;
    totalRow.appendChild(totalCell);

    tbTable.appendChild(totalRow);
    document.body.appendChild(tbTable);

//
