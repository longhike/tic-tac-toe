document.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target);
    let this_id = e.target.id;
    let id_as_num = parseInt(this_id);
    if (this_id === "reset_board_button") {
        console.log("reset clicked!");
        resetBoard();
    }
    else if (isNaN(id_as_num)) {
        return;
    }
    else {
        if (isValidPlay(board[id_as_num])) {
            board[id_as_num] = this_turn;
            e.target.classList.add("occupied");
            console.log(board);
            e.target.innerText = this_turn;
            if(!checkWin(this_turn)) {
                switchTurns();
                return;
            } else {
                winner_div.textContent = `${this_turn} WINS!!`;
                return;
            }
            
        } else {
            alert("invalid move");
        }
    }
})