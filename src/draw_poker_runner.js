import { printGreeting } from "./draw_poker_functions";
import { getFirstHand } from "./draw_poker_functions";
import { getSuit } from "./draw_poker_functions";
import { getRank } from "./draw_poker_functions";
import { getBet } from "./draw_poker_functions";
import { analyzeHand } from "./draw_poker_functions";
import { getFinalHand } from "./draw_poker_functions";
import { dealtCard } from "./draw_poker_functions";

const runDrawPoker = () => {
    let bet = 0;
    let bank = 100;

    let cardRank = [];
    let cardSuit = [];
    let finalRank = [];
    let finalSuit =[];
    let ranksinHand = [];
    let suitsinHand = [];
    let winnings;
    
    
    let suit;
    let rank;
    let stillPlay = "Y";

    // This function is called outside the do...while loop because the greeting only needs
    // to be displayed once, while everything else in main will run multiple times, depending
    // on how many times the user wants to play.

    printGreeting();

    // Loop runs each time the user plays a hand of draw poker

    do {
        bet = getBet();
        // srand(time(NULL));
        // srand(time(&t)); 
        getFirstHand(cardRank, cardSuit);

        // Loops through the initial 5 cards
        console.log("Your five cards: \n");
        for (let i = 0; i < 5; i++)
        {
            suit = getSuit(cardSuit[i]);
            rank = getRank(cardRank[i]);
            console.log("Card #" + (i + 1) + ": " + rank + " " + suit + "\n");
        }

    // These two arrays are used to figure out the value of the player's hand. However,
    // they must be zeroed out in case the user plays multiple hands.

    for (let i = 0; i < 4; i++)
    {
        suitsinHand[i] = 0;
    }

    for (let i = 0; i < 13; i++)
    {
        ranksinHand[i] = 0;
    }

    getFinalHand(cardRank, cardSuit, finalRank, finalSuit, ranksinHand, suitsinHand);

    console.log("Your five final cards: \n");
    for (let i = 0; i < 5; i++)
    {
        suit = getSuit(finalSuit[i]);
        rank = getRank(finalRank[i]);
        console.log("Card #" + (i + 1) + ": " + rank + " " + suit + "\n");
    }

    winnings = analyzeHand(ranksinHand, suitsinHand);
    console.log("You won " + (bet * winnings) + "!\n");

    bank = bank - bet + (bet * winnings);
    console.log("\nYour bank is now " + bank + ".\n");

    stillPlay = window.prompt("\nDo you want to play again? (y/n)");

    } while (stillPlay == 'Y' || stillPlay == 'y');

};


export {
    runDrawPoker
}