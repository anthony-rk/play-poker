import { printGreeting } from "./draw_poker_functions";
import { getBet } from "./draw_poker_functions";
import { getFirstHand } from "./draw_poker_functions";
import { analyzeHand } from "./draw_poker_functions";
import { updatePlayersHand } from "./draw_poker_functions";
import { getBank } from "./draw_poker_functions";

import { updateCurrentView } from "./dom_manipulation_functions";
import { updateBankDiv } from "./dom_manipulation_functions";

// Activates onClick of the Start Game Button
const runDrawPoker = () => {
    // Reset the Hold buttons to WHITESMOKE
    for (let i = 0; i < 5; i++) {
        document.getElementById('card-hold-' + i).style.backgroundColor = 'whitesmoke';
    }

    // Reset the Winnings Div to blank
    document.getElementById('winning-log-div').innerHTML = ' ';
    document.getElementById('winning-amount-div').innerHTML = ' ';


    let canDealFinalHand = true;

    let bank = getBank('bank-div'); // grabs bank total
    console.log(bank + " is bank");

    let bet = getBet('input-bet-div'); // use getBet() to grab from a div/ input on page

    // initialize the first hand, store the card objects in the hand Array
    let playersHand = [];
    getFirstHand(playersHand);

    // Updates the Hold field to True or False depending on if the user clicks the Hold Button for the card
    for (let i = 0; i < 5; i++) {
        let buttonID = 'card-hold-' + i;
        document.getElementById(buttonID).addEventListener('click', function() {
            if (buttonID == 'card-hold-0') { 
                playersHand[0].updateHold();
            }
            if (buttonID == 'card-hold-1') { 
                playersHand[1].updateHold();
            };
            if (buttonID == 'card-hold-2') { 
                playersHand[2].updateHold();
            };
            if (buttonID == 'card-hold-3') { 
                playersHand[3].updateHold();
            };
            if (buttonID == 'card-hold-4') { 
                playersHand[4].updateHold();
            };
        });
    };

    console.log("Your five cards: \n");

    playersHand.forEach(card => {
        console.log("Card " + (card.index + 1) + ": " + card.rank + " of " + card.suit);
    });

    updateCurrentView(playersHand);

    // Waits for click on DEAL FINAL HAND button
    document.getElementById('deal-new-hand-button').addEventListener('click', function() {
        if (canDealFinalHand === true) {
            updatePlayersHand(playersHand);
            updateCurrentView(playersHand);
    
            console.table(playersHand);
    
            console.log("\nYour FINAL five cards: \n");
            playersHand.forEach(card => {
                console.log("Card " + (card.index + 1) + ": " + card.rank + " of " + card.suit);
            });
    
            let firstCardSuitArg = playersHand[0].suit;
            let winnings = analyzeHand(playersHand, firstCardSuitArg);

            let winningMessage = 'TEST';


            if (winnings == 20)
                winningMessage = "Straight Flush";

            else if (winnings == 10)
                winningMessage = "Four of a Kind";
    
            else if (winnings == 8)
                winningMessage = "Full House";

            else if (winnings == 5)
                winningMessage = "Flush";

            else if (winnings == 4)
                winningMessage = "Straight";
                    
            else if (winnings == 3)
                winningMessage = "Three of a Kind";
                
            else if (winnings == 2)
                winningMessage = "2 Pairs";
            
            else if (winnings == 1)
                winningMessage = "1 Pair";

            else
                winningMessage = "High Card";

            console.log(winningMessage + ' is the WINNING MESSAGE');
            document.getElementById('winning-log-div').innerHTML = winningMessage;
            document.getElementById('winning-amount-div').innerHTML = "You won " + winnings + "!";
        
            // Show this to the user
            console.log("You won " + (bet * winnings) + "!\n");
    
            // Show the user's Bank
            bank = bank - bet + (bet * winnings);
            updateBankDiv(bank);
            console.log("\nYour bank is now " + bank + ".\n");

            canDealFinalHand = false;

            let button = document.getElementById('play-game-button');
            button.disabled = false;
        }
        else
            console.log("Start a new game to get a final hand...");

    });

};


export {
    runDrawPoker,
}