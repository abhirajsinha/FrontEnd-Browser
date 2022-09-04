let modalCont = document.querySelector(".modal-cont");
let mainCont = document.querySelector(".main-cont");
let addBtn = document.querySelector(".action-add");
let removeBtn = document.querySelector(".action-rem");
let textareaCont = document.querySelector(".textarea-cont");
let idCont = document.querySelector(".ticket-id");
let taskareaCont = document.querySelector(".task-area");
let allPriorityColors = document.querySelectorAll(".priority-color");
let colors = ["green", "blue", "orange", "red"];
let modalPriorityColor = colors[colors.length - 1];
let toolBoxColor = document.querySelectorAll(".color");
let addFlag = false;
let removeFlag = false;
let lockClass = "fa-lock";
let unlockClass = "fa-lock-open";

let ticketsArr = [];

for (let i = 0; i < toolBoxColor.length; i++) {
  toolBoxColor[i].addEventListener("click", (e) => {
    let currentToolBocColor = toolBoxColor[i].classList[0];
    let filteredTickets = ticketsArr.filter((ticketObj, idx) => {
      return currentToolBocColor === ticketObj.ticketColor;
    });

    let allTickets = document.querySelectorAll(".ticket-cont");

    //Remove Previous Tickets
    for (let j = 0; j < allTickets.length; j++) {
      allTickets[j].remove();
    }

    //Display new Filtered Ticket
    filteredTickets.forEach((ticketObj, idx) => {
      createTicket(
        ticketObj.ticketColor,
        ticketObj.ticketTask,
        ticketObj.ticketID
      );
    });
  });

  toolBoxColor[i].addEventListener("dblclick", (e) => {
    //Remove Previous Tickets
    let allTickets = document.querySelectorAll(".ticket-cont");
    for (let j = 0; j < allTickets.length; j++) {
      allTickets[j].remove();
    }

    ticketsArr.forEach((ticketObj, idx) => {
      createTicket(
        ticketObj.ticketColor,
        ticketObj.ticketTask,
        ticketObj.ticketID
      );
    });
  });
}

//Listener for modal Priority Coloring - SetBorder
allPriorityColors.forEach((colorElem, idx) => {
  colorElem.addEventListener("click", (e) => {
    allPriorityColors.forEach((priorityColorElem, idx) => {
      priorityColorElem.classList.remove("border");
    });
    colorElem.classList.add("border");
    modalPriorityColor = colorElem.classList[0];
  });
});

addBtn.addEventListener("click", (e) => {
  // console.log("Add");

  //AddFlag === True , then display the modal : Vice-versa
  addFlag = !addFlag;
  if (addFlag) {
    modalCont.style.display = "flex";
  } else {
    modalCont.style.display = "none";
  }
});

removeBtn.addEventListener("click", (e) => {
  removeFlag = !removeFlag;
});

modalCont.addEventListener("keydown", (e) => {
  let key = e.key;
  if (key === "Shift") {
    createTicket(modalPriorityColor, textareaCont.value);
    addFlag = false;
    setModalToDefault();
  }
});

function createTicket(ticketColor, ticketTask, ticketID) {
  let id = ticketID || shortid();
  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");
  ticketCont.innerHTML = `
            <div class="ticket-color ${ticketColor}"></div>
            <div class="ticket-id">#${ticketID}</div>
            <div class="task-area">${ticketTask}</div>
            <div class="ticket-lock">
                    <i class="fa-solid fa-lock"></i>
                </div>
    `;
  mainCont.appendChild(ticketCont);

  // Create object of ticket and add to Array
  if (!ticketID) ticketsArr.push({ ticketColor, ticketTask, ticketID: id });

  handleRemoval(ticketCont);
  handleLock(ticketCont);
  handleColor(ticketCont);
}

function handleRemoval(ticket) {
  // removeFlag -> true -> removeticket
  if (removeFlag) {
    ticket.remove();
  }
}

function handleLock(ticket) {
  let ticketLockElem = ticket.querySelector(".ticket-lock");
  let taskarea = ticket.querySelector(".task-area");
  let ticketLock = ticketLockElem.children[0];
  ticketLock.addEventListener("click", (e) => {
    // if(ticketLock.classList.contains(lockClass)){
    //     ticketLock.classList.remove(lockClass);
    //     ticket.classList.add(unlockClass);
    // }else{
    //     ticketLock.classList.remove(unlockClass);
    //     ticket.classList.add(lockClass);
    // }

    ticketLock.classList.toggle(lockClass);
    ticketLock.classList.toggle(unlockClass);

    if (ticketLock.classList.contains(unlockClass)) {
      taskarea.setAttribute("contenteditable", "true");
    }
    if (ticketLock.classList.contains(lockClass)) {
      taskarea.setAttribute("contenteditable", "false");
    }
  });
}

function handleColor(ticket) {
  let ticketColor = ticket.querySelector(".ticket-color");
  ticketColor.addEventListener("click", (e) => {
    let currentTicketColor = ticketColor.classList[1];
    //Get the index of current color
    let currentTicketColorIdx = colors.findIndex((color) => {
      return currentTicketColor === color;
    });
    currentTicketColorIdx++;
    let newTicketColorIdx = currentTicketColorIdx % colors.length;
    let newTicketColor = colors[newTicketColorIdx];
    ticketColor.classList.remove(currentTicketColor);
    ticketColor.classList.add(newTicketColor);
  });
}

function setModalToDefault() {
  modalCont.style.display = "none";
  textareaCont.value = "";
  modalPriorityColor = colors[colors.length - 1];
  allPriorityColors.forEach((priorityColorElem, idx) => {
    priorityColorElem.classList.remove("border");
  });

  allPriorityColors[allPriorityColors.length - 1].classList.add("border");
}
