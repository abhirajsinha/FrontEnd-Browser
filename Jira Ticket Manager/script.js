let colorBtn = document.querySelectorAll(".filter-color");
let mainContainer = document.querySelector(".main-container");
let body = document.body;
let plusButton = document.querySelector(".fa-plus");
let removeButton = document.querySelector(".fa-solid fa-xmark");
let main_container = document.querySelector("main-container");
for (let i = 0; i < colorBtn.length; i++) {
  colorBtn[i].addEventListener("click", function (e) {
    let color = colorBtn[i].classList[1];
    mainContainer.style.backgroundColor = color;
  });
}

// 
plusButton.addEventListener("click", function () {
  let div = document.createElement("div");
  div.setAttribute("class", "modal-container");
  div.innerHTML = `
    <div class="input-container">
    <textarea class="modal-input" placeholder="Enter Your Text Here"></textarea>
  </div>
  <div class="modal-filter-container">
    <div class="filter lightpink"></div>
    <div class="filter lightblue"></div>
    <div class="filter lightgreen"></div>
    <div class="filter black"></div>
  </div>
    `;
    mainContainer.appendChild(div);
});

