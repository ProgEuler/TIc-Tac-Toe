let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

//playerX, playerO
let turnO = true;
let count = 0;

const winPatterns = [
	[0, 1, 2],
	[0, 3, 6],
	[0, 4, 8],
	[1, 4, 7],
	[2, 5, 8],
	[2, 4, 6],
	[3, 4, 5],
	[6, 7, 8],

] ;

boxes.forEach((box) => {
	box.addEventListener("click", () => {
		console.log("box was clicked");

		if(turnO){
			box.innerText = "O";
			turnO = false;
		}else{
			box.innerText = "X";
			turnO = true;
		}
		box.disabled = true;
		count++;

		let isWinner = checkWinner();

		if( count === 9 && !isWinner){
			gameDraw();
		}
	});
});

const disableBoxes = () => {
	for( let box of boxes){
		box.disabled = true;
	}
};



const checkWinner = () => {
	for(let pattern of winPatterns){
		let pos1Val = boxes[pattern[0]].innerText;
		let pos2Val = boxes[pattern[1]].innerText;
		let pos3Val = boxes[pattern[2]].innerText;

		if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
			if(pos1Val === pos2Val && pos2Val === pos3Val){
				console.log("Winner", pos1Val);
				showWinner();
			}
		}
	}
};


const showWinner = () => {
    msg.innerText = "Congratulations, Winner is " + (turnO ? "X" : "O");
    msgContainer.classList.remove("hide");
    disableBoxes();
    setTimeout(resetGame, 3000); 
};

const gameDraw = () => {
    msg.innerText = "It's a draw!";
    msgContainer.classList.remove("hide");
    disableBoxes();
    setTimeout(resetGame, 3000); 
};


resetbtn.addEventListener("click", () => {
    resetGame();
});

const resetGame = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    turnO = true;
    msgContainer.classList.add("hide");
};


newGameBtn.addEventListener("click", () => {
    startNewGame();
});

const startNewGame = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    turnO = true;
    msgContainer.classList.add("hide");
};
