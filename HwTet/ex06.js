const categories = [
    {
      id: 1,
      name: "Electronics",
      slugs: "electronics",
      children: [
        {
          id: 2,
          name: "Laptops",
          slugs: "laptops",
          children: [
            {
              id: 3,
              name: "Apple",
              slugs: "apple",
            },
            {
              id: 4,
              name: "Dell",
              slugs: "dell",
            },
          ],
        },
        {
          id: 5,
          name: "Headphones",
          slug: "headphones",
        },
      ],
    },
    {
      id: 6,
      name: "Books",
      slugs: "books",
      children: [
        {
          id: 7,
          name: "Fiction",
          slugs: "fiction",
          children: [
            {
              id: 8,
              name: "Thrillers",
              slug: "thrillers",
            },
            {
              id: 9,
              name: "Mystery",
              slug: "mystery",
            },
          ],
        },
        {
          id: 10,
          name: "Non-Fiction",
          slug: "non-fiction",
        },
      ],
    },
  ];
  function renderNestedMenu(categories, parentPath = "") {
    return `
      <ul class="menu">
        ${categories
          .map(category => {
            const fullPath = `${parentPath}/${category.slugs}`;
            return `
              <li>
                <a href="${fullPath}">${category.name}</a>
                ${
                  category.children
                    ? renderNestedMenu(category.children, fullPath)
                    : ""
                }
              </li>`;
          })
          .join("")}
      </ul>`;
  }

  document.getElementById("menu-container").innerHTML = renderNestedMenu(
    categories
  );  