const categories = [
    {
      id: 1,
      name: "Chuyên mục 1",
      parent: 0,
      slug: "chuyen-muc-1",
    },
    {
      id: 2,
      name: "Chuyên mục 2",
      parent: 0,
      slug: "chuyen-muc-2",
    },
    {
      id: 3,
      name: "Chuyên mục 3",
      parent: 0,
      slug: "chuyen-muc-3",
    },
    {
      id: 4,
      name: "Chuyên mục 2.1",
      parent: 2,
      slug: "chuyen-muc-2-1",
    },
    {
      id: 5,
      name: "Chuyên mục 2.2",
      parent: 2,
      slug: "chuyen-muc-2-2",
    },
    {
      id: 6,
      name: "Chuyên mục 2.3",
      parent: 2,
      slug: "chuyen-muc-2-3",
    },
    {
      id: 7,
      name: "Chuyên mục 3.1",
      parent: 3,
      slug: "chuyen-muc-3-1",
    },
    {
      id: 8,
      name: "Chuyên mục 3.2",
      parent: 3,
      slug: "chuyen-muc-3-2",
    },
    {
      id: 9,
      name: "Chuyên mục 3.3",
      parent: 3,
      slug: "chuyen-muc-3-3",
    },
    {
      id: 10,
      name: "Chuyên mục 2.2.1",
      parent: 5,
      slug: "chuyen-muc-2-2-1",
    },
    {
      id: 11,
      name: "Chuyên mục 2.2.2",
      parent: 5,
      slug: "chuyen-muc-2-2-2",
    },
  ];
  function buildNestedMenu(categories) {
    const map = {};
    const roots = [];
    categories.forEach(category => {
      map[category.id] = { ...category, children: [] };
    });

    categories.forEach(category => {
      if (category.parent === 0) {
        roots.push(map[category.id]);
      } else {
        map[category.parent]?.children.push(map[category.id]);
      }
    });
  
    return roots;
  }
  
  const nestedCategories = buildNestedMenu(categories);
  

function renderMenu(categories) {
    const createMenuItems = items => {
      return items
        .map(
          item => `
          <li>
            <a href="/${item.slug}">${item.name}</a>
            ${
              item.children.length > 0
                ? `<ul class="submenu">${createMenuItems(item.children)}</ul>`
                : ""
            }
          </li>`
        )
        .join("");
    };
  
    return `<ul class="menu">${createMenuItems(categories)}</ul>`;
  }
  
  const menuHTML = renderMenu(nestedCategories);
  document.getElementById("menu-container").innerHTML = menuHTML;
  