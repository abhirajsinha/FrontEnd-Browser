let modalCont = document.querySelector(".modal-cont");
let mainCont = document.querySelector(".main-cont");
let addBtn = document.querySelector(".action-add");
let removeBtn = document.querySelector(".action-rem");
let textareaCont = document.querySelector(".textarea-cont");
let idCont = document.querySelector(".ticket-id");
let taskareaCont = document.querySelector(".task-area");
let allPriorityColors = document.querySelectorAll(".priority-color");
let colors = ["green","blue","orange","red"];
let modalPriorityColor = colors[colors.length-1];
let addFlag = false;
let removeFlag = false;
let lockClass = "fa-lock";
let unlockClass = "fa-lock-open";



//Listener for modal Priority Coloring - SetBorder 
allPriorityColors.forEach((colorElem, idx) =>{
    colorElem.addEventListener("click",(e)=>{
        allPriorityColors.forEach((priorityColorElem, idx) =>{
            priorityColorElem.classList.remove("border");
        })
        colorElem.classList.add("border");
        modalPriorityColor = colorElem.classList[0];
    })
})

addBtn.addEventListener("click",(e)=>{
    // console.log("Add");

    //AddFlag === True , then display the modal : Vice-versa
    addFlag=!addFlag;
    if(addFlag){
        modalCont.style.display = "flex";
    }else{
        modalCont.style.display = "none";
    }
})

removeBtn.addEventListener("click",(e)=>{
    removeFlag = !removeFlag;
})

modalCont.addEventListener("keydown", (e) => {
    let key = e.key;
    if(key==="Shift"){
        createTicket(modalPriorityColor, textareaCont.value, shortid());
        modalCont.style.display = "none";
        addFlag=false;
        textareaCont.value="";
    }
})

function createTicket(ticketColor, ticketTask, ticketID){
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class","ticket-cont");
    ticketCont.innerHTML = `
            <div class="ticket-color ${ticketColor}"></div>
            <div class="ticket-id">#${ticketID}</div>
            <div class="task-area">${ticketTask}</div>
            <div class="ticket-lock">
                    <i class="fa-solid fa-lock"></i>
                </div>
    `;
    mainCont.appendChild(ticketCont);
    handleRemoval(ticketCont);
    handleLock(ticketCont);
}

function handleRemoval(ticket){
    // removeFlag -> true -> removeticket
    if(removeFlag){
        ticket.remove();
    }
}

function handleLock(ticket){
    let ticketLockElem = ticket.querySelector(".ticket-lock");
    let ticketLock = ticketLockElem.children[0];
    ticketLock.addEventListener("click",(e)=>{
        if(ticketLock.classList.contains(lockClass)){
            ticketLock.classList.remove(lockClass);
            ticket.classList.add(unlockClass);
        }else{
            ticketLock.classList.remove(unlockClass);
            ticket.classList.add(lockClass);
        }
    })
}

