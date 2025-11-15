// const title = document.querySelector("#title");

//textContent không xóa khoảng trắng
// title.textContent = "<span>Test</span>";

// innerText xóa khoảng trắng thừa(hiệu năng chậm hơn textContent)
// Khi xử lí quá nhiều elements thì có thể cân nhắc sử dụng textContent

// HTMLCollection, NodeList và Array
// So sánh

/**
 * HTMLCollection
 * - document.getElementsByTagName()
 * - document.getElementsByClassName()
 */

/**
 * NodeList
 * - document.querySelectorAll();
 */

// const elements = document.getElementsByTagName("li");
// console.log(elements);
// => Tạo ra từ hàm tạo HTMLCollection và đc kế thừa từ HTMLCollection Prototype
// => Không có các phương thức làm việc như mảng.
// => Giống mảng nhưng không phải mảng
// => Vậy làm sao để sử dụng các phương thức của mảng => Chuyển nó sang mảng
// => Có thể dùng for(in/of/thường)
// const array = Array.from(elements);
// console.log(array);

// Chuyển về mảng là dùng bình thường

//NodeList
// const elements = document.querySelectorAll("li");
// console.log(elements);

// Có forEach nhưng nó không phải mảng
// Có thể dùng forEach để duyệt qua mảng như bình thường
// console.log(Array.from(elements));

// => Sau này trong tương lai sẽ phải sử dụng rất nhiều

//QUẢN LÝ HTML ATTRIBUTES CỦA PHẦN TỬ
// const h1 = document.querySelector("h1");
// console.log(h1.id);
// console.log(h1.className);
// muốn sửa thì sửa trực tiếp
// h1.style = "";

// Hoặc thêm thuộc tính vào
// Thuộc tính có 2 chữ cái thì sẽ viết theo kiểu camelCase();
// Nếu cần thiết thì tra bảng thuộc tính w3schools

// h1.src = "" => h1 thì không có src

// Xóa hẳn không được, có thể gán cho nó bằng 1 chuỗi rỗng

//Kiểm tra attribute có tồn tại trong thuộc tính này hay không thì sẽ gặp vấn đề
// console.log(h1.className);
// console.log(h1.id);

// console.log(h1.getAttribute("id"));
// console.log(h1.getAttribute("class"));

// h1.setAttribute("id", "something");
// h1.setAttribute("class", "something");

// console.log(h1.hasAttribute("id")); // if để làm gì gì đó
// id rỗng thì vẫn là true

// Để gỡ bỏ 1 attribute
// h1.removeAttribute("id");

// Gỡ xong thì ko còn nữa
// console.log(h1.hasAttribute("id")); // if để làm gì gì đó

// const a = document.querySelector("a");
// console.log(a.href);
// console.log(a.getAttribute("href"));

// Thêm được các attribute
// h1.setAttribute("href", "...");

// Thêm được những thứ chưa từng tồn tại trong html
// Muốn lấy ra thì phải dùng getAttribute

// toggleAttribute (giống như công tắc điện)
// Kiểm tra phần tử đó có attribute đó hay không
// Nếu có thì xóa đi
// Nếu không có thì thêm vào

// a.toggleAttribute("hidden");
// // Xử lí các thao tác đóng/mở dạng toggle

// const button = document.querySelector("#button");
// console.log(button);

// button.addEventListener("click", () => {
//   h1.toggleAttribute("hidden");
// });

// PHÂN BIỆT ATTRIBUTE VÀ PROPERTY

// - Attribute: Thuộc tính, tính chất mang tính tĩnh
// - Property: Thuộc tính, tính chất mang tính động

// Thuộc tính của thẻ HTML là Attribute
// => dữ liệu khởi tạo ban đầu , nó mang tính tĩnh và không thay đổi được
// => thể hiện dữ liệu khởi tạo cho phần tử

// Thuộc tính của Object là Property
// => dữ liệu của phần tử ở trong DOM nên nó mang tính động và có thể thay đổi nó được
// => dữ liệu hiện tại của phần tử

// Giữa 2 cái có sự đồng bộ, sửa cái này thì cái kia cũng bị sửa, nhưng một số TH thì không
// const h1 = document.querySelector("h1");
// console.log(h1.title);

// Sửa property => bên HTML cũng bị thay đổi là do đồng bộ từ property sang attribute
// h1.title = "New title";

// Sửa attribute => Và nó có đồng bộ với property
// h1.setAttribute("title", "something");
// console.log(h1.title);

// Hầu hết đều có đồng bộ. Tuy nhiên Form thì không(Nó sẽ không đồng bộ như ta mong đợi)

// const email = document.querySelector("#email");
// console.log(email);

//Sửa property của nó => attribute ở html không bị ảnh hưởng
// email.value = "nguyenvana@gmail.com";

//Sửa attribute của nó => property có bị ảnh hưởng (chỉ đối với trường hợp khi ô input chưa bị động vào)
// Nếu từ khi trang web khởi chạy, ô input đã được động vào và nhập dữ liệu vào thì SỬA ATTRIBUTE SẼ KHÔNG LÀM ẢNH HƯỞNG ĐẾN PROPERTY
// email.setAttribute("value", "xyz@gmail.com");

// Tương tự với các dữ liệu khác trong form

// LÀM VIỆC VỚI CLASS CỦA PHẦN TỬ
// element.classList

// const heading = document.querySelector("#heading");

// heading.className = `${heading.className} underline`;
// console.log(heading.className.split(" ").includes("italic"));

// console.log(heading.classList);
// Thường dùng: add, contains, remove, replace, toggle
// add()
// heading.classList.add("underline", "class2");

//contains()
// console.log(heading.classList.contains("italic"));

//replace()
// heading.classList.replace("red", "underline"); // Nếu không có red thì sẽ không bị thay thế

//toggle()
// heading.classList.toggle("underline"); // Ứng dụng mở đóng modal
// tham số thứ 2("underline", true) => mặc định là add vào, thêm lần nữa cũng không xóa đi

// heading.classList.toggle("red", true);

// Nếu mục đích rõ ràng là thêm vào/xóa đi thì nên dùng:
// add()/remove() => thêm xóa được nhiều cái 1 lúc
// toggle chỉ được 1 cái

// LÀM VIỆC VỚI STYLE CỦA PHẦN TỬ
// Làm việc với CSS inline trong phần tử DOM
// const heading = document.querySelector("#heading");

// Chỉ lấy được CSS inline
// Lấy từng thuộc tính đơn lẻ
// console.log(heading.style.fontSize);
//Nếu color thập lục phân => trả về rgb/rgba

//Lấy ra tất cả
// console.log(heading.style.cssText);

// Muốn sửa thì gán trực tiếp vào thôi là được
// Nếu muốn sửa nhiều:
// Object.assign(heading.style, {
//   color: "green",
//   fontStyle: "italic",
// });
// => Hợp nhất vào style của phần tử

// heading.style.cssText = `color: green;
//  font-style: italic`;
// heading.style.cssText = "";
