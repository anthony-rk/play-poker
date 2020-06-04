// This has all the dom manipulation functions for the game to run accurately

// Display the current cards dealt on screen
const updateCurrentView = (playersHandArray) => {
    // show the current card data on each of the IDs, i.e. card-0, card-1, etc
    for (let i = 0; i < playersHandArray.length; i++) {
        document.getElementById('card-' + i).innerHTML = "" + playersHandArray[i].rank + "\n\n" + playersHandArray[i].suit;
    }
};

// Reset all cards for a new round
const resetViewToBlank = (playersHandArray) => {
    // show the current card data on each of the IDs, i.e. card-0, card-1, etc
    for (let i = 0; i < playersHandArray.length; i++) {
        // document.getElementById('card-' + i).innerHTML = "BLANK";
        document.getElementById('card-hold-' + i).style.backgroundColor = "whitesmoke";
    }
};

const toggleHoldButtonsBackground = (elementID) => {
    if (document.getElementById(elementID).style.backgroundColor === "green") {
        document.getElementById(elementID).style.backgroundColor = "whitesmoke";
    } else 
        document.getElementById(elementID).style.backgroundColor = "green";
};

// Show the cards are held and update the data to hold on the backend
const updateHoldButtons = (buttonID) => {
    // change background color to GREEN or WHITESMOKE

    // Update the correct Card's this.hold = true or false if true
    if (buttonID == 'card-hold-0') { 
        // playersHandArray[0].updateHold();
        toggleHoldButtonsBackground('card-hold-0');
    }
    if (buttonID == 'card-hold-1') { 
        // playersHandArray[1].updateHold();
        toggleHoldButtonsBackground('card-hold-1');
     };
    if (buttonID == 'card-hold-2') { 
        // playersHandArray[2].updateHold();
        toggleHoldButtonsBackground('card-hold-2');
     };
    if (buttonID == 'card-hold-3') { 
        // playersHandArray[3].updateHold();
        toggleHoldButtonsBackground('card-hold-3');
     };
    if (buttonID == 'card-hold-4') { 
        // playersHandArray[4].updateHold();
        toggleHoldButtonsBackground('card-hold-4');
    };
};

const updateBankDiv = (newValue) => {
    document.getElementById('bank-div').innerHTML = newValue;
};

export {
    updateCurrentView,
    updateHoldButtons,
    resetViewToBlank,
    updateBankDiv
}