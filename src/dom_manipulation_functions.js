// This has all the dom manipulation functions for the game to run accurately

// Display the current cards dealt on screen
const updateCurrentView = (playersHandArray) => {
    // show the current card data on each of the IDs, i.e. card-0, card-1, etc
    for (let i = 0; i < playersHandArray.length; i++) {
        let myElement = document.getElementById('card-' + i);
        // document.getElementById('card-' + i).innerHTML = "" + playersHandArray[i].rank + "\n\n" + playersHandArray[i].suit;
        myElement.innerHTML = "" + playersHandArray[i].rank + "\n\n" + playersHandArray[i].suit;

        // change background based on the suit
        if (playersHandArray[i].suit === 'Diamonds') {
            myElement.style.backgroundColor = 'black'; 
            myElement.style.color = 'white';     
        }
        else if (playersHandArray[i].suit === 'Spades') {
            myElement.style.backgroundColor = 'blue';    
            myElement.style.color = 'white';    
        }
        else if (playersHandArray[i].suit === 'Hearts') {
            myElement.style.backgroundColor = 'red';   
            myElement.style.color = 'white';   
        }
        else { // Case for Clubs
            myElement.style.backgroundColor = 'green';  
            myElement.style.color = 'white';    
        }
    }
};

// Reset all cards for a new round
const resetViewToBlank = (playersHandArray) => {
    // show the current card data on each of the IDs, i.e. card-0, card-1, etc
    for (let i = 0; i < playersHandArray.length; i++) {
        document.getElementById('card-hold-' + i).style.backgroundColor = "whitesmoke";
    }
};

const toggleHoldButtonsBackground = (elementID) => {
    if (document.getElementById(elementID).style.backgroundColor === "cornflowerblue") {
        document.getElementById(elementID).style.backgroundColor = "whitesmoke";
    } else 
        document.getElementById(elementID).style.backgroundColor = "cornflowerblue";
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