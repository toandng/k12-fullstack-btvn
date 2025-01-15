const cart = [
    {
      id: 1,
      name: 'T-Shirt',
      price: 100000,
      quantity: 2,
      hotSale: false
    },
    {
      id: 2,
      name: 'Jean',
      price: 200000,
      quantity: 1,
      hotSale: false
    },
    {
      id: 3,
      name: 'Skirt',
      price: 150000,
      quantity: 3,
      hotSale: true
    },
    {
      id: 4,
      name: 'Shirt',
      price: 120000,
      quantity: 2,
      hotSale: false
    },
    {
      id: 5,
      name: 'Jacket',
      price: 250000,
      quantity: 1,
      hotSale: true
    }
  ];
function renderOrder(cart) {
    const tbTable = document.createElement("table");

    // sytle cho table
    tbTable.style.borderCollapse = "collapse";
    tbTable.style.width = "100%";
    tbTable.style.textAlign = "left";
    tbTable.style.marginTop = "120px"

    const headers = ["Id", "Tên sản phẩm","Giá","Số lượng","Thành tiền"];
    const headerRow = document.createElement("tr");
    headers.forEach(headers => {
        const th = document.createElement("th");
        th.textContent = headers;
        th.style.border = "1px solid #000";
        th.style.padding = "8px";
        headerRow.appendChild(th);
    });
    tbTable.appendChild(headerRow);

    let total = 0;
    cart.forEach(cart => {
        const row = document.createElement("tr");
        // idCell
        const idCell = document.createElement("td");
        idCell.textContent = cart.id
        row.appendChild(idCell);
        idCell.style.border = "1px solid #000";
        idCell.style.padding = "8px";

        // nameCell
        const titleCell = document.createElement("td");
        titleCell.textContent = cart.name;
        titleCell.style.border = "1px solid #000";
        titleCell.style.padding = "8px";
        if(cart.hotSale) {
            titleCell.style.color = "red"
        }
        row.appendChild(titleCell);

        // Giá
        const priceCell = document.createElement("td");
        priceCell.textContent = cart.price;
        priceCell.style.border = "1px solid #000";
        priceCell.style.padding = "8px";
        row.appendChild(priceCell);

        // Số lượng
        const quantityCeil = document.createElement("td");
        quantityCeil.textContent = cart.quantity;
        quantityCeil.style.border = "1px solid #000";
        quantityCeil.style.padding = "8px";
        row.appendChild(quantityCeil);

        const totalValueCell = document.createElement("td");
        const totalValue = cart.price * cart.quantity;
        totalValueCell.textContent = totalValue;
        totalValueCell.style.border = "1px solid #000";
        totalValueCell.style.padding = "8px";
        row.appendChild(totalValueCell);

        // Thành tiền
        total += totalValue;
        
        tbTable.appendChild(row)

       
      
    });
   const totalRow = document.createElement("tr");
        const totalLableCell = document.createElement("td");
        totalLableCell.setAttribute("colspan", "4");
        totalLableCell.textContent = "Tổng tiền";
        totalRow.appendChild(totalLableCell);

        const totalCells = document.createElement("td");
        totalCells.textContent = total;
        totalRow.appendChild(totalCells);
        totalRow.style.border = "1px solid #000";
        totalRow.style.height = "40px"

        document.body.appendChild(tbTable)
        tbTable.appendChild(totalRow); 
}
renderOrder(cart)
