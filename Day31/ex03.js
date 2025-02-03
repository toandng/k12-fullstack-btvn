const dataMenu = [
    {id: 1, name: "Trang chủ", slug: "/"},
    {id: 2, name: "Sản phẩm", slug: "/san-pham"},
    {id: 3, name: "Bài viết", slug: "/bai-viet"},
    {id: 4, name: "Lập trình C++", slug: "/lap-trinh-c", parentId: 3},
];
/**
 * Cách 1:
 * bước 1: Sắp xếp lại mảng theo parentId
 * bước 2: sử dụng vòng lặp hoặc đệ quy
 */
/**
 * Cacsh2:
 * b1: Tạo mảng lồng nhau
 * b2: Duyệt mảng lồng nhau
 */
let mainMenuElement = document.getElementsByClassName("main-menu")[0];
console.log(mainMenuElement);

function buildData(data) {
    data.forEach((item) => {
        let liElement = document.createElement("li");
        liElement.innerHTML = `<a data-id = "${item.id}" href="${item.slug}" >${item.name}</a>`;

    });

}

   


