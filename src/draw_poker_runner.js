import { printGreeting } from "./draw_poker_functions";
import { getBet } from "./draw_poker_functions";
import { getFirstHand } from "./draw_poker_functions";
import { analyzeHand } from "./draw_poker_functions";
import { updatePlayersHand } from "./draw_poker_functions";
// import { getSuit } from "./draw_poker_functions";
// import { getRank } from "./draw_poker_functions";
// import { dealtCard } from "./draw_poker_functions";


const runDrawPoker = () => {
    let bank = 100;
    let stillPlay = 'N';

    printGreeting();

    do {
        let bet = getBet();

        // initialize the first hand, store the card objects in the hand Array
        let playersHand = [];
        getFirstHand(playersHand);

        console.log("Your five cards: \n");
        playersHand.forEach(card => {
            console.log("Card " + (card.index + 1) + ": " + card.rank + " of " + card.suit);
        });

        // Manually update a few cards to see if updatePlayersHand() works correctly
        // playersHand[0].hold = false;
        // playersHand[4].hold = false;


        // Check if the cards have card.hold === false and rerun those cards
        updatePlayersHand(playersHand);

        console.table(playersHand);
        // console.log(playersHand[0].suit);


        console.log("\nYour FINAL five cards: \n");
        playersHand.forEach(card => {
            console.log("Card " + (card.index + 1) + ": " + card.rank + " of " + card.suit);
        });


        let firstCardSuitArg = playersHand[0].suit;
        let winnings = analyzeHand(playersHand, firstCardSuitArg);

        console.log("You won " + (bet * winnings) + "!\n");


        bank = bank - bet + (bet * winnings);
        console.log("\nYour bank is now " + bank + ".\n");
    
        stillPlay = window.prompt("\nDo you want to play again? (y/n)");
    
        } while (stillPlay == 'Y' || stillPlay == 'y'); // Tie this to a PLAY button

};


export {
    runDrawPoker
}