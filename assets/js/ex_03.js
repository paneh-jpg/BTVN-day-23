//DOM HTML: Các thao tác với thẻ HTML

// 1. Lấy nội dung bên trong
// const contentEl = document.querySelector(".content");
// console.log(contentEl.innerText);

/**
 * innerHTML
 * innerText
 * textContent
 */

//2. Lấy nội dung bên trong và chính nó
/**
 * outerHTML
 * outerText (bỏ HTML)
 */

// 3. Cập nhật nội dung bên trong
// contentEl.innerHTML = `<p> Cập nhật nội dung bên trong </p>`;
// contentEl.innerText = ` Cập nhật nội dung bên trong `;

// textContent: Giữ lại khoảng trắng (Ứng dụng đưa code vào html)
// innerText: xóa khoảng trắng

// outer => Thay đổi cả Element đó
// contentEl.outerHTML = `<h1 style="color: #333"> Thay đổi cả Element đó</h1>`;

// 4. Xóa phần tử HTML
// contentEl.remove();

const contentEl = document.querySelector(".content");
const btnEl = document.querySelector(".btn");
const originalContent = contentEl.innerHTML;

btnEl.addEventListener("click", function () {
  if (!contentEl.innerHTML) {
    contentEl.innerHTML = originalContent;
    btnEl.innerHTML = "Hide";
  } else {
    contentEl.innerHTML = "";
    btnEl.innerHTML = "Show";
  }
});

// //Attribute
// // const imgEl = document.querySelector("img");
// // console.log(imgEl.src);
// // console.log(imgEl.alt);
// // console.log(imgEl.className);
// // console.log(imgEl.width);
// // console.log(imgEl.height);

// const imgEl = document.querySelector(".image");

// // Cách này sẽ có thể gây lỗi bảo mật
// const inputEl = document.querySelector("input");
// const btnSubmitEl = document.querySelector(".submit");

// btnSubmitEl.disabled = true;
// inputEl.addEventListener("input", function () {
//   if (inputEl.value) {
//     btnSubmitEl.disabled = false;
//   } else {
//     btnSubmitEl.disabled = true;
//   }
// });

// // VỀ nhà tìm hiểu thêm
// btnSubmitEl.addEventListener("click", () => {
//   const newImgSrc = inputEl.value;
//     const img = document.createElement("img");
//     img.src = newImgSrc;
//     img.width = 300;
//     imgEl.innerHTML = "";
//     // append()
//     imgEl.append(img);
//     newImgSrc = "";
//   imgEl.src = newImgSrc;
// });

// Cách khắc phục khi người dùng cố đưa một đường link không hợp lệ (dùng append)

const imgWrapEl = document.querySelector(".img-wrap");
const inputEl = document.querySelector("input");
const btnSubmitEl = document.querySelector(".submit");

btnSubmitEl.disabled = true;

inputEl.addEventListener("input", function () {
  btnSubmitEl.disabled = !inputEl.value.trim();
});

btnSubmitEl.addEventListener("click", () => {
  const newImgSrc = inputEl.value.trim();

  const img = document.createElement("img");
  img.src = newImgSrc;
  img.width = 600;

  // Xoá ảnh cũ (an toàn vì không parse HTML từ user)
  imgWrapEl.innerHTML = "";

  // Thêm ảnh mới
  imgWrapEl.appendChild(img);

  inputEl.value = "";
  btnSubmitEl.disabled = true;
});
