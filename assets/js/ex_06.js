const parent = document.querySelector("#parent");

//Element node
const h1 = document.createElement("h1");
h1.textContent = "Hello F10";
// parent.appendChild(h1);

//Text node
const text = document.createTextNode("Text node");
// parent.appendChild(text);
// console.log(text);

//Comment node
const comment = document.createComment("Comment");
// parent.appendChild(comment);
// console.log(comment);

//Attribute node
// const title = document.createAttribute("title");
// title.value = "Hello F9";
// parent.setAttributeNode(title);
// console.log(title);

// appendChild(), removeChild(),
// append(), insertBefore(), replaceChild(), cloneNode();

//append() => thêm nhiều node một lần
// parent.append(h1, text, comment);

// insertBefore();
// parent.append(h1);
// Ví dụ, chèn text ở đằng trước h1
// parent.insertBefore(text, h1);

// replaceChild() => thay thế
// parent.append(h1);
// parent.replaceChild(text, h1);

// clondeNode()
// const newH1 = h1.cloneNode(true);
