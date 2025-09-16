let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msg = document.querySelector("#msg");
let newBtn = document.querySelector("#new-btn");
let msgContainner = document.querySelector(".msg-container");
let turnO = true; //playerX, player0

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) //player O
        {
            box.innerText = "O";
            turnO = false;
        }
        else // player X
        {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        chekWinner();
    })

})
const resetGame = () => {
    turnO = true;
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
    msgContainner.classList.add("hide");

}
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner} !!!`;
    // console.log(msgContainner.classList);
    msgContainner.classList.remove("hide");
    // console.log(msgContainner.classList);
    disableBoxes();
};
const draw = () => {
    msg.innerText = `Both are playing Well! Game is Draw!!!!`;
    msgContainner.classList.remove("hide");
    disableBoxes();
}
const chekWinner = () => {
    let ok = false, c = 0;
    for (let pattern of winPatterns) {

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos1 == pos3 && pos3 == pos2) {
                console.log("Winner", pos1);
                showWinner(pos1);
                ok = true;
            }
        }
    }
    for(let box of boxes)
    {
        if(box.innerText!="")c++;
    }
    if(!ok && c===9)draw();
};
newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
