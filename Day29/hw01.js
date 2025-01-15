const menu = [
    {
      id: 1,
      name: 'Home',
      parentId: 0
    },
    {
      id: 2,
      name: 'About',
      parentId: 0
    },
    {
      id: 3,
      name: 'News',
      parentId: 0
    },
    {
      id: 4,
      name: 'Products',
      parentId: 0
    },
    {
      id: 5,
      name: 'Contact',
      parentId: 0
    },
    {
      id: 6,
      name: 'T-Shirt',
      parentId: 4
    },
    {
      id: 7,
      name: 'Jean',
      parentId: 4
    },
    {
      id: 8,
      name: 'Skirt',
      parentId: 4
    }
  ];

  function parentId(data) {
    const menu = document.createElement("ul");
    menu.id = "main-menu";
    menu.style.display = "flex";

    const mainMenus = data.filter(item => item.parentId === 0);

    mainMenus.forEach(mainItems => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#";
        a.textContent = mainItems.name;

        // Style cho menu cha
        a.style.fontSize = "24px";
        a.style.textDecoration = "none";
        a.style.padding = "10px 20px";
        li.style.listStyle = "none";
        li.style.position = "relative";

        // Thêm menu con (nếu có)
        const subMenus = data.filter(item => item.parentId === mainItems.id);
        if (subMenus.length > 0) {
            const subMenuList = document.createElement("ul");
            subMenuList.style.display = "none"; 
            subMenuList.style.position = "absolute";
            subMenuList.style.top = "24px";
            subMenuList.style.left = "4px"
            subMenuList.style.backgroundColor = "#f0f0f0";
            subMenuList.style.padding = "10px";
            subMenuList.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
            subMenuList.style.margin = "0";
            subMenuList.style.listStyle = "none";

            subMenus.forEach(subItem => {
                const subLi = document.createElement("li");
                const subA = document.createElement("a");
                subA.href = "#";
                subA.textContent = subItem.name;

                // Style cho menu con
                subA.style.fontSize = "20px";
                subA.style.textDecoration = "none";
                subA.style.display = "block";
                subA.style.padding = "5px 10px";

    
                subA.onclick = (e) => {
                    e.stopPropagation(); 
                };

                subLi.appendChild(subA);
                subMenuList.appendChild(subLi);
            });

            li.appendChild(subMenuList);

            
            a.onclick = (e) => {
                e.preventDefault(); 
                subMenuList.style.display = subMenuList.style.display === "block" ? "none" : "block";
            };
        } else {
            
            a.onclick = (e) => {
                e.preventDefault(); 
            };
        }

        li.appendChild(a);
        menu.appendChild(li);
    });

    return menu;
}

document.body.appendChild(parentId(menu));


