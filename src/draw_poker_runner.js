import { printGreeting } from "./draw_poker_functions";
import { getBet } from "./draw_poker_functions";
import { getFirstHand } from "./draw_poker_functions";
import { analyzeHand } from "./draw_poker_functions";
import { updatePlayersHand } from "./draw_poker_functions";

import { updateCurrentView } from "./dom_manipulation_functions";
import { updateHoldButtons } from "./dom_manipulation_functions";
import { resetViewToBlank } from "./dom_manipulation_functions";


const runDrawPoker = () => {
    let bank = 100;
    let stillPlay = 'N';

    printGreeting();

    do {
        let bet = getBet('input-bet-div'); // use getBet() to grab from a div/ input on page

        // initialize the first hand, store the card objects in the hand Array
        let playersHand = [];
        getFirstHand(playersHand);

        //
        // Issue with this here as it messes up the display on round 2 // 
        //
        // Add event listeners for the Hold buttons
        for (let i = 0; i < 5; i++) {
            document.getElementById('card-hold-' + i).addEventListener('click', function() {
                updateHoldButtons(playersHand, 'card-hold-' + i);
            });
        };

        // updateCurrentView(playersHand);

        console.log("Your five cards: \n");
        playersHand.forEach(card => {
            console.log("Card " + (card.index + 1) + ": " + card.rank + " of " + card.suit);
        });

        updateCurrentView(playersHand);

        document.getElementById('deal-new-hand-button').addEventListener('click', function() {
            updatePlayersHand(playersHand);
            updateCurrentView(playersHand);

            console.table(playersHand);
    
            console.log("\nYour FINAL five cards: \n");
            playersHand.forEach(card => {
                console.log("Card " + (card.index + 1) + ": " + card.rank + " of " + card.suit);
            });

            let firstCardSuitArg = playersHand[0].suit;
            let winnings = analyzeHand(playersHand, firstCardSuitArg);
        
            // Show this to the user
            console.log("You won " + (bet * winnings) + "!\n");

            // Show the user's Bank
            bank = bank - bet + (bet * winnings);
            console.log("\nYour bank is now " + bank + ".\n");
        
            // Reset the view here
            updateCurrentView(playersHand);
            resetViewToBlank(playersHand);


            stillPlay = window.prompt("\nDo you want to play again? (y/n)");

            for (let i = 0; i < 5; i++) {
                document.getElementById('card-hold-' + i).style.backgroundColor = 'whitesmoke';
            }
        });

    
    } while (stillPlay == 'Y' || stillPlay == 'y'); // Tie this to a PLAY button

};


export {
    runDrawPoker,

}