// DOM variables
const start_question = 'Would you like to play the computer, or with someone next to you? ("OK" to play the computer, "Cancel" to play with a friend)'
const all_blocks = document.querySelectorAll(".play_area div");
const winner_div = document.getElementById("winner")

// functionality variables

let this_turn = "X"

let computer = false;
let comp_turn = false;

let board = new Array(9)