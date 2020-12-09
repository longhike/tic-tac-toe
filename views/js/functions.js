function resetBoard () {
    this_turn = "X";
    board = new Array(9);
    all_blocks.forEach((block) => {
        block.innerText = "";
        block.classList.remove("occupied")
    });
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
    if (checkByFirstColumn(current_turn) || checkBySecondColumn(current_turn) || checkByThirdColumn(current_turn) || checkByFirstRow(current_turn) || checkBySecondRow(current_turn) || checkByThirdRow(current_turn) || checkByLeftRightDiag(current_turn) || checkByRightLeftDiag(current_turn)) {
        return true;
    } else {
        return false;
    }
}

// win helpers

function checkByFirstColumn(current_turn) {
    for (i = 0; i <= 6; i += 3) {
        if (board[i] !== current_turn) {
            return false;
        }
    }
    return true
}

function checkBySecondColumn(current_turn) {
    for (i = 1; i <= 7; i += 3) {
        if (board[i] !== current_turn) {
            return false;
        }
    }
    return true
}

function checkByThirdColumn(current_turn) {
    for (i = 2; i <= 8; i += 3) {
        if (board[i] !== current_turn) {
            return false;
        }
    }
    return true
}

function checkByFirstRow(current_turn) {
    for (i = 0; i <= 2; i++) {
        if (board[i] !== current_turn) {
            return false;
        }
    }
    return true
}

function checkBySecondRow(current_turn) {
    for (i = 3; i <= 5; i++) {
        if (board[i] !== current_turn) {
            return false;
        }
    }
    return true
}

function checkByThirdRow(current_turn) {
    for (i = 6; i <= 8; i++) {
        if (board[i] !== current_turn) {
            return false;
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