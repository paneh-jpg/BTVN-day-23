console.log("Hello World");

//Event: Hành động từ phía ng dùng tác động lên các thẻ HTML
//Các thẻ html sẽ có sẵn các Event
//Việc của lập trình viên là => lắng nghe các event đó để thực thi công việc cụ thể
//Định nghĩa các công việc bằng 1 hàm (Event Handler)
// Trong Event Handler sẽ luôn luôn có một tham số là event object(Mô tả thông tin của event)

// var btnEl = document.querySelector(".btn");
// btnEl.onclick = function (e) {
//   console.log("Click me");
// };

// btnEl.onmouseover = function () {
//   console.log("Di chuột vào");
// };

// btnEl.onmouseout = function () {
//   console.log("Di chuột ra");
// };

// btnEl.onmousemove = function () {
//   console.log("Di chuyển");
// };

// var inputEl = document.querySelector("input");
// inputEl.onblur = function () {
//   console.log("Blur");
// };

// inputEl.onfocus = function () {
//   console.log("Focus");
// };

// inputEl.onchange = function () {
//   console.log("Change");
// };

// Dựa trên hành động mình mong muốn và kết hợp research

// inputEl.oncopy = function () {
//   console.log("Bạn vừa copy");
// };

// inputEl.oncut = function () {
//   console.log("Bạn vừa cut");
// };

//Tương tự với paste

// var formEl = document.querySelector("form");
// formEl.onsubmit = function () {
//   console.log("OK chưa?");
//   var value = formEl.querySelector("input").value;
//   console.log(value);
//   return false;
// };

// document.onkeyup = function (e) {
//   console.log(e.key);
//   if (e.key === "Enter") {
//     document.body.style.background = "pink";
//   }

//   if (e.key === "Control") {
//     document.body.style.background = "#FFF";
//   }

//   if (e.key === "Escape") {
//     document.body.style.background = "red";
//   }
// };

// Lưu ý: Event Handler sẽ không thể xử lí 2 sự kiện cho cùng 1 đối tượng.
// Nếu một đối tượng có 2 event thì sẽ ưu tiên thiwjc hiện cái sự kiện phía sau (ghi đè thuộc tính của object)
// Cách khắc phục: Ở dưới

// Event Listener
// -addEventListener (Cứ thêm các sự kiện vào)
// var btn2El = document.querySelector(".btn-2");

// btn2El.addEventListener("click", function () {
//   console.log("Click me 2");
// });

// btn2El.addEventListener("click", function () {
//   console.log("Click me 3");
// });

//Cách viết theo hàm, nếu Event xuất hiện nhiều lần thì hãy dùng hàm
// var count = 0;
// var handleClick = function () {
//   console.log(`Count:`, ++count);
//   if (count === 5) {
//     btn2El.removeEventListener("click", handleClick);
//   }
// };

// btn2El.addEventListener("click", handleClick);

// - removeEventListener ra khỏi Element
/**
 * Element
 * Tên Event
 * Tên listener
 * => Tách thành hàm khác
 */
