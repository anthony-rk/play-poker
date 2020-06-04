// Initialize the page with the basic HTML markup

import { updateHoldButtons } from "./dom_manipulation_functions";
import { runDrawPoker } from "./draw_poker_runner";

let component = function(newElement, newInnerHTML, newID) {
    const element = document.createElement(newElement);
    element.innerHTML = newInnerHTML;
    element.setAttribute("id", newID);

    return element;
};

let pageInitializer = function() {
    // Display Bank info here
    const bankHolderDiv = component('div', '', 'bank-holder-div');
    document.getElementById("content").appendChild(bankHolderDiv);

    const bankDivAmount = component('div', 'Bank: ', 'bank-div-amount');
    document.getElementById("bank-holder-div").appendChild(bankDivAmount);

    const bankDiv = component('div', '100', 'bank-div');
    document.getElementById("bank-holder-div").appendChild(bankDiv);


    // Add play game button
    const playGameButton = component('button', 'Start Game', 'play-game-button');
    document.getElementById("content").appendChild(playGameButton);

    // Add Deal New Hand Button
    const dealNewHandGameButton = component('button', 'Deal Final Hand', 'deal-new-hand-button');
    document.getElementById("content").appendChild(dealNewHandGameButton);

    playGameButton.addEventListener('click', function() {
        console.log("New game button clicked!");
        runDrawPoker();
    });

    // Get the Bet / display the current Bet here
    const betDiv = component('div', 'Bet: ', 'bet-div');
    document.getElementById("content").appendChild(betDiv);

    const betInputDiv = component('input', 'Input Bet (1 - 5)', 'input-bet-div');
    betInputDiv.placeholder = 1;
    document.getElementById("content").appendChild(betInputDiv);

    betInputDiv.contentEditable = 'true';


    // Where the 5 Cards will be placed
    const cardHolderDiv = component("div", '', "card-holder");
    document.getElementById("content").appendChild(cardHolderDiv);

    // Make the div for each of the 5 cards
    for (let i = 0; i < 5; i++) {
        let tempCardDiv = component("div", 'TEST', "card-" + i);
        document.getElementById("card-holder").appendChild(tempCardDiv);
    };

    // Div that will hold the Hold Buttons for each of the 5 cards
    const updateHoldButtonsDiv = component("div", '', "update-hold-button-div");
    document.getElementById("content").appendChild(updateHoldButtonsDiv);

    // Make Button for "Hold / New Card" for 5 cards
    for (let i = 0; i < 5; i++) {
        let tempCardDiv = component("button", 'Hold', "card-hold-" + i);
        document.getElementById("update-hold-button-div").appendChild(tempCardDiv);

        tempCardDiv.addEventListener('click', function() {
            updateHoldButtons('card-hold-' + i);
        });
    };

    console.log("pageInitializer function ran..");
};

export {
    pageInitializer
}