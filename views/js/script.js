document.addEventListener('click', (e) => {
    e.preventDefault();
    let this_id = e.target.id;
    let id_as_num = parseInt(this_id);
    if (this_id === "reset_board_button") {
        resetBoard();
    }
    else if (isNaN(id_as_num)) {
        return;
    }
    else {
        if (isValidPlay(board[id_as_num])) {
            board[id_as_num] = this_turn;
            e.target.innerText = this_turn;
            if(!checkWin(this_turn)) {
                e.target.classList.add("occupied");
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