// Function Declarations

// Create the Card Class
class dealtCard {
    constructor(suit, rank, index, rankInt) { 
        this.suit = suit;
        this.rank = rank;
        this.rankInt = rankInt;
        this.index = index;
        this.hold = true;
    }

    updateHold() {
        if (this.hold === false)
            this.hold = true;
        else 
            this.hold = false;
    }

    sayHi() {
        console.log("Suit is " + this.suit + " and the rank is " + this.rank);
    }
};

const printGreeting = () => {
    console.log("***********************************************************\n");
    console.log("\n\n\tWelcome to the Casino!\n\n");
    console.log("\t\tHome of Video Draw Poker\n\n\n");
    console.log("***********************************************************\n");

    console.log("Here are the rules:\n");
    console.log("-You start with 100 credits, and you make a bet from 1 to 5 credits.\n");
    console.log("-You are dealt 5 cards, and you can choose which cards to keep or discard.\n");
    console.log("-You want to make the best possible hand.\n");
    console.log("\nHere is the table for winnings (assuming a bet of 1 credit):");
    console.log("\n\tPair\t\t\t\t1  credit");
    console.log("\n\tTwo Pairs\t\t\t2  credits");
    console.log("\n\tThree of a Kind\t\t3  credits");
    console.log("\n\tStraight\t\t\t4  credits");
    console.log("\n\tFlush\t\t\t\t5  credits");
    console.log("\n\tFull House\t\t\t8  credits");
    console.log("\n\tFour of a Kind\t\t10 credits");
    console.log("\n\tStraight Flush\t\t20 credits");
    // console.log("\Royal Flush\t\t\t\t50 credits");
    // Find a way to implement this
    console.log("\n\nHave fun!!\n\n");
};

// Deals the first hand of the game
const getFirstHand = (cardRank, cardSuit) => {
    let cardDup = 0;

    for (let i = 0; i < 5; i++)
    {
        cardDup = 0;
        do {
            // Card rank is one of 13 (2-10, J, Q, K, A)
            cardRank[i] = (Math.floor(Math.random() * 13) % 13);
            // Card suit is one of 4
            // Club, Diamond, Heart, or Spade
            cardSuit[i] = (Math.floor(Math.random() * 4) % 4);

            // Loop that ensures each card is unique
            for (let j = 0; j < i; j++)
            {
                if ((cardRank[i] == cardRank[j]) && (cardSuit[i] == cardSuit[j]))
                {
                    cardDup = 1;
                }
            }
        } while (cardDup == 1);
    }
};

// Takes in the random number and returns the suit. // THIS IS GOOD 
const getSuit = (suit) => {
    switch(suit) {
        case 0:
            return('Clubs');
        case 1:
            return('Diamonds');
        case 2:
            return('Hearts');
        case 3:
            return('Spades');
    }
};

// Takes in the random number and returns the card rank // THIS IS GOOD 
const getRank = (rank) => {
    switch(rank)
    {
        case 0:
            return('Ace');
        case 1:
            return('2');
        case 2:
            return('3');
        case 3:
            return('4');
        case 4:
            return('5');
        case 5:
            return('6');
        case 6:
            return('7');
        case 7:
            return('8');
        case 8:
            return('9');
        case 9:
            return('10');
        case 10:
            return('Jack');
        case 11:
            return('Queen');
        case 12:
            return('King');
    }
};

// Gets the User's current bet (range is 0 - 5, should make up the the total score value)
const getBet = () => {
    let bet;

    do // will keep running until the user enters 0-5
    {
        bet = window.prompt("How much do you want to bet? (Enter a number 1 to 5, or 0 to quit the game): ");

        if (bet >= 1 && bet <= 5) {
            return(bet);
        }
        else if (bet == 0) {
            console.log("User has Quit...");
        }
        else {
            window.prompt("Please enter a bet from 1-5 or 0 to quit the game.");
        }

    } while ( (bet < 0 || bet > 5));
};

const analyzeHand = (ranksinHand, suitsinHand) => {
    let num_consec = 0;
    let i = 0;
    let rank = 0;
    let suit = 0;
    let straight = false;
    let flush = false;
    let four = false;
    let three = false;
    let pairs = 0;


    for (suit = 0; suit < 4; suit++)
        if (suitsinHand[suit] == 5)
            flush = true;
    rank = 0;

    while (ranksinHand[rank] == 0)
        rank++;

    for (; rank < 13 && ranksinHand[rank]; rank++)
        num_consec++;

    if (num_consec == 5) {
        straight = true;
    }

    for (rank = 0; rank < 13; rank++)
    {
        if (ranksinHand[rank] == 4)
            four = true;
        if (ranksinHand[rank] == 3)
            three = true;
        if (ranksinHand[rank] == 2)
            pairs++;
    }

    if (straight && flush)
    {
        console.log("Straight flush\n\n");
        return(20);
    }
    else if (four)
    {
        console.log("Four of a kind\n\n");
        return(10);
    }
    else if (three&& pairs == 1)
    {
        console.log("Full house\n\n");
        return(8);
    }
    else if (flush)
    {
        console.log("Flush\n\n");
        return(5);
    }
    else if (straight)
    {
        console.log("Straight\n\n");
        return(4);
    }
    else if (three)
    {
        console.log("Three\n\n");
        return(3);
    }
    else if (pairs == 2)
    {
        console.log("Two pairs\n\n");
        return(2);
    }
    else if (pairs == 1)
    {
        console.log("Pair\n\n");
        return(1);
    }
    else
    {
        console.log("High Card\n\n");
        return(0);
    }
};

// This function looks through each of the five cards in the first hand and asks the user if they
// want to keep the card. If they say no, they get a replacement card.
const getFinalHand = (cardRank, cardSuit, finalRank, finalSuit, ranksinHand, suitsinHand) => {

    let suit;
    let rank;

    for (let i = 0; i < 5; i++)
    {
        suit = getSuit(cardSuit[i]);
        rank = getRank(cardRank[i]);
        window.alert("Do you want to keep card #" + (i + 1) + ": " + rank + suit + "?");
        let ans = window.prompt("\nPlease answer (Y/N): ");

        if (ans.toUpperCase() == 'Y')
        {
            finalRank[i] = cardRank[i];
            finalSuit[i] = cardSuit[i];
            ranksinHand[finalRank[i]]++;
            suitsinHand[finalSuit[i]]++;
            continue;
        }
        else if (ans.toUpperCase() == 'N')
        {
            let cardDup = 0;
            do {
                cardDup = 0;
                finalRank[i] = (Math.floor(Math.random() * 13) % 13);
                finalSuit[i] = (Math.floor(Math.random() * 4) % 4);

                // First check your new card against the
                // 5 original cars to avoid duplication
                for (let j = 0; j < 5; j++)
                {
                    if (finalRank[i] == cardRank[j] && (finalSuit[i] == cardSuit[j])) {
                        cardDup = 1;
                    }
                }

                // Next, check the new card against any newly drawn
                // cards to avoid duplucation
                for (let j = 0; j < i; j++)
                {
                    if (finalRank[i] == finalRank[j] && (finalSuit[i] == finalSuit[j])) {
                        cardDup = 1;
                    }
                }
            } while (cardDup == 1);

            ranksinHand[finalRank[i]]++;
            suitsinHand[finalSuit[i]]++;
        }
    }

};



export {
    printGreeting,
    getFirstHand,
    getSuit,
    getRank,
    getBet,
    analyzeHand,
    getFinalHand,
    dealtCard
}