import { printGreeting } from "./draw_poker_functions";
import { getFirstHand } from "./draw_poker_functions";
import { getSuit } from "./draw_poker_functions";
import { getRank } from "./draw_poker_functions";
import { getBet } from "./draw_poker_functions";
import { analyzeHand } from "./draw_poker_functions";
import { getFinalHand } from "./draw_poker_functions";

const runDrawPoker = () => {
    let bet = 0;
    let bank = 100;
    // int i;
    // int cardRank[5]; // Will be one of 13 values (Ace-King)
    // int cardSuit[5]; // Will be one of 4 values (for Clubs, Diamonds, Hearts, Spades)
    // int finalRank[5];
    // int finalSuit[4];
    // int ranksinHand[13]; // Used for evaluating the final hand
    // int suitsinHand[4];  // Used for evaluating the final hand

    let cardRank = [];
    let cardSuit = [];
    let finalRank = [];
    let finalSuit =[];
    let ranksinHand = [];
    let suitsinHand = [];
    let winnings;
    
    // Need to replace this 
    // time_t t;
    
    let suit;
    let rank;
    let stillPlay;

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
            console.log("Card #" + (i + 1) + ": " + rank + suit + "\n");
        }

    // These two arrays are used to figure out the value of the player's hand. However,
    // they must be zeroed out in case the user plays multiple hands.

    for (i = 0; i < 4; i++)
    {
        suitsinHand[i] = 0;
    }

    for (i = 0; i < 13; i++)
    {
        ranksinHand[i] = 0;
    }

    getFinalHand(cardRank, cardSuit, finalRank, finalSuit, ranksinHand, suitsinHand);

    console.log("Your five final cards: \n");
    for (i = 0; i < 5; i++)
    {
        suit = getSuit(finalSuit[i]);
        rank = getRank(finalRank[i]);
        console.log("Card #" + (i + 1) + ": " + rank + suit + "\n");
    }

    winnings = analyzeHand(ranksinHand, suitsinHand);
    console.log("You won " + (bet * winnings) + "!\n");

    bank = bank - bet + (bet * winnings);
    console.log("\nYour bank is now " + bank + ".\n");

    let stillPlay = window.prompt("\nDo you want to play again? (y/n)");

    } while (stillPlay.toUpperCase() == 'Y');

};


export {
    runDrawPoker
}