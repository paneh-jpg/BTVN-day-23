//1. innerHTML (được viết theo hình thức setter getter)
// console.log(contentEl.innerHTML); //getter
// contentEl.innerHTML = `<h1>Lorem ipsum dolor sit</h1>`;

//2. innerText (chỉ lấy và trả về text, các thẻ html và khoảng trắng sẽ bị bỏ hết, khoảng trắng xuống dòng thì giữ)
// contentEl.innerText = ` <h1>Lorem amet.</h1>`; // Tránh lỗi bảo mật xss

//3. textContent
// trả về text và giữ nguyên tất cả khoảng trắng ở phần html còn ở console thì giữ nguyên dấu cách và khoảng trắng
// console.log(contentEl.textContent);

// contentEl.textContent = `

// <h1>Lorem ipsum dolor sit</h1>

// 0`;

// console.log(contentEl.textContent);

//4. outerHTML => lấy ra cả thẻ div.content (Từ chính nó đến tất cả những cái bên trong và đưa ra console)
// console.log(contentEl.outerHTML);
// contentEl.outerHTML = `<h1>Lorem ipsum dolor sit</h1>`;

// 5. outerText (Ít dùng)
// var contentEl = document.querySelector(".content");
// var originalContent = contentEl.innerHTML;
// var isHidden = false;

// btnHideEl = document.querySelector(".btn-hide");
// btnHideEl.onclick = function () {
//   if (isHidden) {
//     contentEl.innerHTML = originalContent;
//     this.innerHTML = "Hide";
//     isHidden = false;
//   } else {
//     contentEl.innerHTML = "";
//     this.innerHTML = "Show";
//     isHidden = true;
//   }
// };

// var numberEl = document.querySelector(".number");

// var minusBtnEl = document.querySelector(".minus-btn");
// var plusBtnEl = document.querySelector(".plus-btn");

// minusBtnEl.addEventListener("click", function () {
//   numberEl.innerHTML = numberEl.innerHTML - 1;
// });

// plusBtnEl.addEventListener("click", function () {
//   numberEl.innerHTML = Number(numberEl.innerHTML) + 1;
// });

//Attribute (Thuộc tính KHẢ DỤNG với thẻ html đó)

// TH1. Áp dụng với các thuộc tính hợp lệ.
// Cú pháp: element.attributeName;

// TH2. Áp dụng với các thuộc tính không có sẵn (tự tạo)
// - getAttribute (attributeName);
// - setAttribute (attributeName, value);
// => rất phổ biến và thường xuyên xảy ra.

// var linkEl = document.querySelector("a");
// console.log(linkEl.href);
// console.log(linkEl.target);
// console.log(linkEl.id);
// console.log(linkEl.title);
// console.log(linkEl.className);

// Gán lại attribute;
// linkEl.href = "https://google.com";
// linkEl.className = `link-text`;

// Có thể thêm thuộc tính (style)
// linkEl.style = `background: yellow`;

// Phát sinh vấn đề: Không chuẩn semantic
// console.log(linkEl.getAttribute("v-name"));
// linkEl.setAttribute("v-name", "Phương Anh F9");

//Data Attribute : data-* => được chấp nhận và đc coi là hợp lệ

// console.log(linkEl.getAttribute("data-index"));

// dùng dataset thay cho get và set
// làm việc với data-index
// console.log(linkEl.dataset.index);
// linkEl.dataset.index = 2;

// Giả sử có thuộc tính data-animation-duration
// linkEl.dataset.animationDuration = "1s";

// Hoặc data-animation-timing-function(vẫn dùng camelCase để viết)
// linkEl.dataset.animationTimingFunction = "ease-in";

// XÓa data attribute
// delete linkEl.dataset.index;

//Xóa các loại thuộc tính  => removeAttribute (attributeName)
// linkEl.removeAttribute("target");

//Xóa thẻ html (Áp dụng được với tất cả các thẻ HTML)
// linkEl.remove(); //thẻ a đã bay màu khỏi cây DOM

var websiteEl = document.querySelector(".website");
websiteEl.addEventListener("change", function () {
  var value = this.value;
  console.log(value);
  if (value) {
    window.open(value);
  }
});
