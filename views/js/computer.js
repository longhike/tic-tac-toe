function doComputerTurn(current_board) {
    if (comp_turn) {
        let play_id = randomIndexHelper(workingArrayHelper(current_board));
        let comp_play = document.getElementById(play_id.toString());
        comp_play.click();
        comp_turn = false;
    }
}

// takes array of index values made by workingArrayHelper
// and returns as a number a random value from the array of index values. 

// this return is the index that should be played in the function 
// and the id (when put to string) of the html block that should be 
// written in and class-changed.


function randomIndexHelper(array_of_index_values) {
    let result
    result = array_of_index_values[Math.floor(Math.random() * (array_of_index_values.length - 1))]
    return result;
}

// takes the current board array, returns NEW array where each value  
// is the index-number in current_board where value is false

function workingArrayHelper (current_board) {
    let working_array = [];
    for (i = 0; i < current_board.length; i++) {
        if(!current_board[i]) {
            working_array.push(i)
        }
    } 
    return working_array;
}

