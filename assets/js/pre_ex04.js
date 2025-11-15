console.log("Hello World");

// classList (Danh sách class)
// trả về danh sách các class trong thuộc tính class
var titleEl = document.querySelector("#title");
console.log(titleEl.classList);

// add() => Thêm class cho element
titleEl.classList.add("title-1", "title-2", "title-3");

//remove() => Xóa class khỏi element
titleEl.classList.remove("title-1", "title-3");

//replace() => Thay thế class cũ thành class mới
titleEl.classList.replace("title-2", "title-4");

//toggle => Thêm class nếu không tồn tại, nếu tồn tại rồi thì xóa đi (show/hide when click)
titleEl.onclick = function () {
  titleEl.classList.toggle("hide");
};

//contains => kiểm tra class có tồn tại hay không và trả về true/false
console.log(titleEl.classList.contains("title-4"));

var btnSwitchEl = document.querySelector(".switch-theme");
var bodyEl = document.body;

btnSwitchEl.addEventListener("click", function () {
  bodyEl.classList.toggle("dark");
});

//Khi làm dự án thật thì mỗi element sẽ có 1 class riêng và set light color, dark color riêng (như trong dự aán cuối module 1)

var items = document.querySelectorAll("ul li");
console.log(items);
// forEach nhưng items không phải mảng
items.forEach(function (itemEl) {
  itemEl.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});
