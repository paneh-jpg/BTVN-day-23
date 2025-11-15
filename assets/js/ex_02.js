// Event && Event Listener
// console.log("Hello World");

//Cú pháp lắng nghe sự kiện - 1

//elements.on<ten_su_kien> = function (){Logic}
// Nhược điểm: bị ghi đè, sẽ chỉ nhận sự kiện cuối cùng
const btn = document.querySelector(".btn");
let count = 0;
// btn.onclick = function (e) {
//   //   console.log("Clicked");
//   //   console.log(this);
//   //   console.log(e);
//   count++;
//   btn.innerText = `Click me: ${count}`;

//   if (count === 5) {
//     btn.onclick = null;
//   }
// };

// btn.onmouseover = function () {
//   console.log("Over mouse");
// };

// btn.onmouseout = function () {
//   console.log("Out mouse");
// };

// Không dùng được trong arrow function
// tham số function(e) => e là thông tin của

// Cú pháp lắng nghe sự kiện - 2
// Khắc phục khi bị ghi đè

// addEventListener (event-name, listener)
//Thêm listener cho elements
// Vẫn có (e), this
// btn.addEventListener("click", () => {
//   console.log("Click 1");
// });

// btn.addEventListener("click", () => {
//   console.log("Click 2");
// });

// Xóa một event thì cần tách hàm. (Để hàm khởi tạo 1 lần )
// Cần remove sau khi sử dụng xong sự kiện vì sẽ chỉ luôn luôn add vào
const handleClick = () => {
  count++;
  btn.innerText = `Click me: ${count}`;
  if (count === 5) {
    btn.removeEventListener("click", handleClick);
  }
};

btn.addEventListener("click", handleClick);

// List event usually to use:
/**
 * click
 * dblClick
 * mouseover
 * mouseout
 * mousemove
 * mousedown
 * mouseup
 * keydown
 * keyup
 * submit
 * change
 * input
 * blur
 * focus
 */

const contentEl = document.querySelector(".content");
contentEl.addEventListener("copy", () => {
  console.log("Copied");
});

const items = document.querySelectorAll("ul li");
items.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(item.innerHTML);
  });
});
