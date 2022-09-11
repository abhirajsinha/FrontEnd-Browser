let colorBtn = document.querySelectorAll(".filter-color");
let mainContainer = document.querySelector(".main-container");
// let modalContainer = document.querySelector(".modal-container");
let body = document.body;
let plusButton = document.querySelector(".add");
let removeButton = document.querySelector(".remove");
let flag = false;

for (let i = 0; i < colorBtn.length; i++) {
  colorBtn[i].addEventListener("click", function (e) {
    let color = colorBtn[i].classList[1];
    mainContainer.style.backgroundColor = color;
  });
}

//Add Button
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
  let modalFilters = document.querySelectorAll(
    ".modal-filter-container .filter"
  );
  //SetAttributes remove previous classes
  //modalFilters[0].setAttribute("class",".border");

  modalFilters[0].classList.add("border");
  for (let i = 0; i < modalFilters.length; i++) {
    modalFilters[i].addEventListener("click", function () {
      modalFilters.forEach((filter) => {
        filter.classList.remove("border");
      });
      modalFilters[i].classList.add("border");
    });
  }
});
