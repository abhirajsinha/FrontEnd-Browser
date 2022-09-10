let colorBtn = document.querySelectorAll(".filter-color");
let mainContainer = document.querySelector(".main-container");
let modalContainer = document.querySelector(".modal-container");
let body = document.body;
let plusButton = document.querySelector(".add");
let removeButton = document.querySelector(".remove");
let modalFilterCont =  document.querySelector(".modal-filter-container");
let flag = false;

for (let i = 0; i < colorBtn.length; i++) {
  colorBtn[i].addEventListener("click", function (e) {
    let color = colorBtn[i].classList[1];
    mainContainer.style.backgroundColor = color;
  });
}

//Add Button
plusButton.addEventListener("click", function () {
  if (flag === false) {
    modalContainer.style.display = "flex";
  } else {
    modalContainer.style.display = "none";
  }
  flag = !flag;
});
