const input = document.getElementById("commentInput");
const btn = document.getElementById("btnSend");
const output = document.getElementById("output");

btn.addEventListener("click", () => {
  const p = document.createElement("p");
  p.textContent = input.value; // chỉ text, không HTML
  output.appendChild(p);

  input.value = "";
});
