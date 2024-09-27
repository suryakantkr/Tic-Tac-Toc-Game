let boxes=document.querySelectorAll(".box");
let resetbtm=document.querySelector(".reset");
let newGamebtn=document.querySelector(".new-btn");
let msg=document.querySelector(".mgs");
let msgContainer=document.querySelector(".msg-container");

 let turn0=true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame=()=>{
    turn0=true;
    enableboxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("clicked");
        if(turn0){
            box.innerText="o";
            turn0=false;
        }else{
            box.innerText="x";
            turn0=true;
        }
        box.disabled=true;
        checkwin();
    });
});
const disabledboxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const ShowWinner=(winner)=>{
    msg.innerText=`Congratulation Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledboxes();
};
const checkwin=()=>{
    for(pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
            if(pos1Val===pos2Val&&pos2Val===pos3Val){
                console.log("winner",pos1Val);
                ShowWinner(pos1Val);
            }
        }
    }
};
newGamebtn.addEventListener("click",resetGame);
resetbtm.addEventListener("click",resetGame);


 