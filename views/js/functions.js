function resetBoard () {
    this_turn = "X";
    board = new Array(9);
    all_blocks.forEach((block) => {
        block.innerText = "";
        block.classList.remove("occupied")
    });
    winner_div.textContent = ""
}

function switchTurns () {
    switch (this_turn) {
        case "X":
            this_turn = "O";
            break;
        case "O":
            this_turn = "X";
            break;
        default:
            break;
    }
}

function isValidPlay (choice) {
    if (!choice) {
        return true;
    } else {
        return false;
    }
}

function checkWin (current_turn) {
    if (winByColumn(current_turn) || winByRow(current_turn) || checkByLeftRightDiag(current_turn) || checkByRightLeftDiag(current_turn)) {
        return true;
    } else {
        return false;
    }
}

// win helpers

function winByRow (current_turn) {
    for (i = 0; i < 9; i += 3) {
        if (board[i] === current_turn && board[i] === board[i+1] && board[i+1] === board[i+2]) {
            return true;
        }
    }
    return false; 
}

function winByColumn(current_turn) {
    let j = 0
    let k = 6
    while (j <= 2) {
        if (columnHelper(j, k, current_turn)) {
            return true;
        }
        else {
            j++
            k++
        }
    }
    return false;
}

function columnHelper (start_index, last_index, current_turn) {
    for (i = start_index; i <= last_index; i += 3) {
        if (board[i] !== current_turn) {
            return false
        }
    }
    return true
}

function checkByLeftRightDiag(current_turn) {
    if (board[0] === current_turn && board[0] === board[4] && board[4] === board[8]) {
        return true
    } else {
        return false
    }
}

function checkByRightLeftDiag(current_turn) {
    if (board[2] === current_turn && board[2] === board[4] && board[4] === board[6]) {
        return true
    } else {
        return false
    }
}