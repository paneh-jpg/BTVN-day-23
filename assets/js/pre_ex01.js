// const queryString =
//   "status=active&keyword=ahihi&category=1&category=2&category=3";

// function convertQueryString(str) {
//   return str.split("&").reduce((acc, curr) => {
//     const [key, value] = curr.split("=");
//     if (!acc[key]) {
//       acc[key] = value;
//     } else {
//       if (!Array.isArray(acc[key])) {
//         acc[key] = [acc[key]];
//       }
//       acc[key].push(value);
//     }
//     return acc;
//   }, {});
// }
// console.log(convertQueryString(queryString));

//Các loại DOM
/*
- DOM Document
- DOM Element
- DOM HTML
- DOM CSS
- DOM Event
- DOM Event Listener
- DOM Node, NodeList
- DOM Navigation
=> Bổ sung: Web Component (Tự tạo HTML riêng để xử lí), Custom Element, Shadow DOM(Nội dung mới)
(Các nội dung này khá khó nên ở Việt Nam ít được nhắc tới.)
 */

// console.log(document);

//DOM Element => Thao tác dựa vào các thẻ HTML có sẵn để trả về Object (Element Node)
//(5 Cách thao tác - selector bằng JS)

//1. document.getElementById(id)
// => Chỉ trả về một phần tử đầu tiên tìm được, có 2 thẻ title thì lấy ra cái đầu
// var title = document.getElementById("title");
// console.log(title);

//2. document.getElementsByClassName(ten_class)
// => Trả về 1 danh sách các Element thỏa mãn điều kiện
// var titleList = document.getElementsByClassName("title");
// console.log(titleList);

// 3. document.getElementsByTagName(ten_the)
// => Trả về 1 danh sách các Element thỏa mãn
// var titleList = document.getElementsByTagName("h1");
// console.log(titleList);

// 4. document.querySelector(selector)
// => Dựa vào selector của css để chọn và trả về 1 phần tử đầu tiên
// (Không có phần tử giả và lớp giả before after hover...)
// var title = document.querySelector(".title");
// console.log(title);

// 5. document.querySelectorAll(selector)
// => dựa vào selector của css để chọn và trả về một danh sách chứa các phần tử thỏa mãn
// var titleList = document.querySelectorAll(".title");
// console.log(titleList);

//6. Trường hợp đặc biệt
// console.log(document.head);
// console.log(document.body);
// console.log(document.title);
// document.title = "HEHE";

/**
 * Renders an unordered list (ul) of items into the specified element.
 * @param {string[]} items - Array of strings to render as list items.
 * @param {string} elementId - The ID of the HTML element to append the list.
 */
function renderList(items, elementId) {
  if (!Array.isArray(items) || typeof elementId !== "string")
    return "Invalid input: items must be an array and elementId must be a string.";
  const itemsList = items.map((item) => {
    return `<li>${item}</li>`;
  });
  const element = document.getElementById(elementId);
  if (element) {
    element.innerHTML = `<ul>${itemsList}</ul`;
  }
}

// Sample usage

// Case 1: Render list into valid element
renderList(["Apple", "Banana", "Cherry"], "list-container");
// Expected: <ul><li>Apple</li><li>Banana</li><li>Cherry</li></ul>

// Case 2: Invalid items input
renderList("Not an array", "test-container");
// Expected console.error: "Invalid input: items must be an array and elementId must be a string."

// Case 3: Invalid elementId input
renderList(["Apple", "Banana"], 123);
// Expected console.error: "Invalid input: items must be an array and elementId must be a string."

// Case 4: Non-existent elementId
renderList(["One", "Two"], "non-existent-container");
// Expected console.error: "Element with ID 'non-existent-container' not found."
