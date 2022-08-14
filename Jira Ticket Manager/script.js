let modalCont = document.querySelector(".modal-cont");
let mainCont = document.querySelector(".main-cont");
let addBtn = document.querySelector(".action-add");
let textareaCont = document.querySelector(".textarea-cont");
let idCont = document.querySelector(".ticket-id");
let taskareaCont = document.querySelector(".task-area");
let addFlag = false;


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

modalCont.addEventListener("keydown", (e) => {
    let key = e.key;
    if(key==="Shift"){
        createTicket();
        modalCont.style.display = "none";
        addFlag=false;
        textareaCont.value="";
    }
})

function createTicket(){
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class","ticket-cont");
    ticketCont.innerHTML = `
            <div class="ticket-color"></div>
            <div class="ticket-id">#12</div>
            <div class="task-area">
                Sample Text
            </div>
    `;
    mainCont.appendChild(ticketCont);
   
}

