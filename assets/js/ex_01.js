//DOM = Document Object Model
// console.dir(document);

//Element Node
//Attribute Node
//Text Node

//Truy cập vào các element node (5 Cách chính)
/**
 * 1. Dùng document.getElementById(id) => Chỉ chọn ra id đầu tiên
 * 2. Dùng document.getElementsByClassName(className);
 * 3. Dùng document.getElementsByTagName(tagName);
 * 4. Dùng document.querySelector(css-selector);
 * 5. Dùng document.querySelectorAll(css-selector)
 */

// 1. Dùng document.getElementById(id)
// const titleEl = document.getElementById("title");
// console.log(titleEl);

// 2. Dùng document.getElementsByClassName(className);
// const boxList = document.getElementsByClassName("box");
// Object giống mảng nhưng không phải mảng
// boxList[0].innerText = "OK chưa";

// 3. Dùng document.getElementsByTagName(tagName);
// const boxList = document.getElementsByTagName("div");
// console.log(boxList);

// 4. Dùng document.querySelector(css-selector);
// const h1El = document.querySelector("#title");
// console.log(h1El);

// Hỗ trợ lớp giả nhưng không hỗ trợ phần tử giả
// const boxEl = document.querySelector(".box:nth-of-type(2)");
// boxEl.innerHTML = "Jztr";

//5. Dùng document.querySelectorAll(css-selector)
// const boxList = document.querySelectorAll(".box");
// boxList.forEach((box) => {
//   box.innerHTML = "F9";
// });

// Ứng dụng
// Cách truy cập 1: Dùng css selector
// const items = document.querySelectorAll(".box2 .content ul li");
// console.log(items);

//Cách truy cập 2: Đi từ ngoài vào trong
// const box2 = document.querySelector(".box2");
// const content = box2.querySelector(".content");
// const items = content.querySelectorAll("ul li");
// console.log(items);

//Tạo Element node: document.createElement('tag-name');
const box2 = document.querySelector(".box2");
const h1 = document.createElement("h1");
h1.innerHTML = "Xin chào";
document.body.insertBefore(h1, box2.nextElementSibling);
