// Function Declarations

// Create the Card Class
class dealtCard {
    constructor(suit, rank, index, rankInt) { 
        this.suit = suit;
        this.rank = rank;
        this.rankInt = rankInt;
        this.index = index;
        this.hold = false;
    }

    updateHold() {
        if (this.hold === false)
            this.hold = true;
        else 
            this.hold = false;
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
const getFirstHand = (playersHandArray) => {
    for (let cardIndex = 0; cardIndex < 5; cardIndex++) {
        let cardIsDuplicate = 0;

        let randomSuit;
        let randomRank;

        let randomRankNum;

        do {
            cardIsDuplicate = 0;
            randomSuit = getSuit((Math.floor(Math.random() * 4) % 4));

            randomRankNum = (Math.floor(Math.random() * 13) % 13);
            randomRank = getRank(randomRankNum); 

            // Checks for Duplicates
            for (let j = 0; j < cardIndex; j++) {
                if (randomSuit === playersHandArray[j].suit && randomRank === playersHandArray[j].rank) {
                    // If another card has the same Suit and Rank, set cardIsDuplicate to 1
                    console.log('\nIS A DUPE, MATCHES WITH CARD AT INDEX '+ j);
                    cardIsDuplicate = 1;
                } 
            }

        } while (cardIsDuplicate === 1);

        let tempCard = new dealtCard(randomSuit, randomRank, cardIndex, randomRankNum);
        playersHandArray.push(tempCard);
    };
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
const getBet = (elementID) => {

    do // will keep running until the user enters 0-5
    {
        // let bet = window.prompt("How much do you want to bet? (Enter a number 1 to 5, or 0 to quit the game): ");
        let bet = document.getElementById(elementID).value;

        if (bet == 0) {
            bet = 1;
        }

        if (bet >= 1 && bet <= 5) {
            return (bet);
        }
        else if (bet == 0) {
            console.log("User has Quit...");
        }
        else {
            window.alert("Please enter a bet from 1-5");
        }

    } while ( (bet < 0 || bet > 5));
};

const getBank = (elementID) => {
    let bank = document.getElementById(elementID).innerHTML;
    
    return bank;
};


const analyzeHand = (playersHandArray, firstSuit) => {
    let straight = false;
    let flush = false;
    let four = false;
    let three = false;
    let pairs = 0;

    // Check for FLUSH // LOOKS GOOD
    let isFlush = 0;

    for (let i = 1; i < playersHandArray.length; i++) {
        if (playersHandArray[i].suit == firstSuit)
            isFlush++;
        if (isFlush === 4) {
            flush = true; 
        }
    };

    // Check for STRAIGHT // LOOKS GOOD 
    let sortedRankArray = [];

    for (let i = 0; i < playersHandArray.length; i++) {
        sortedRankArray.push(playersHandArray[i].rankInt);
    };

    let isSorted = 0;
    sortedRankArray.sort((a, b) => a - b);
    console.log(sortedRankArray);

    for (let i = 0; i < sortedRankArray.length - 1; i++) {
        if (sortedRankArray[i] === ((sortedRankArray[i + 1]) - 1)) {
            isSorted++;
        }
        if (isSorted === 4) {
            straight = true;
        }
    };

    // Check for 4 of a kind, 3 of a kind, or Pairs
    let diamondsInHand = 0;
    let clubsInHand = 0;
    let heartsInHand = 0;
    let spadesInHand = 0;

    // Count how many of each Suit type are in the hand
    for (let i = 0; i < playersHandArray.length; i++) {
        if (playersHandArray[i].suit === 'Clubs') { clubsInHand++; }
        else if (playersHandArray[i].suit === 'Diamonds') { diamondsInHand++; }
        else if (playersHandArray[i].suit === 'Hearts') { heartsInHand++; }
        else
            spadesInHand++;
    }

    let suitsArray = [];
    suitsArray.push(clubsInHand);
    suitsArray.push(diamondsInHand);
    suitsArray.push(heartsInHand);
    suitsArray.push(spadesInHand);

    // Check if 4 of a kind or 3 of a kind
    if (suitsArray.includes(4)) { four = true; };
    if (suitsArray.includes(3)) { three = true; };

    // Counts how many pairs there are
    suitsArray.forEach(suit => {
        if (suit == 2) {
            pairs++;
        }
    });


    if (straight && flush)
    {
        console.log("Straight Flush\n\n");
        return(20);
    }
    else if (four)
    {
        console.log("Four of a Kind\n\n");
        return(10);
    }
    else if (three && pairs == 1)
    {
        console.log("Full House\n\n");
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
        console.log("Three of a Kind\n\n");
        return(3);
    }
    else if (pairs == 2)
    {
        console.log("Two pairs\n\n");
        return(2);
    }
    else if (pairs == 1)
    {
        console.log("1 Pair\n\n");
        return(1);
    }
    else
    {
        console.log("High Card\n\n");
        return(0);
    }

};

const updatePlayersHand = (playersHandArray) => { // LOOKS GOOD
    let cardIsDuplicate = 0;
    let randomSuit;
    let randomRank;
    let randomRankNum;

    for (let i = 0; i < 5; i++) {
        if (playersHandArray[i].hold === false) {
            do {
                cardIsDuplicate = 0;

                // replace card
                randomSuit = getSuit((Math.floor(Math.random() * 4) % 4));

                randomRankNum = (Math.floor(Math.random() * 13) % 13);
                randomRank = getRank(randomRankNum); 

                for (let j = 0; j < 5; j++) {
                    if (j === i) {
                        j++;
                    }
                    // exclude the current card's index to not check against itself, starting an endless loop
                    else if (randomSuit == playersHandArray[j].suit && randomRank == playersHandArray[j].rank) {
                        cardIsDuplicate = 1; // If another card has the same Suit and Rank, set cardIsDuplicate to 1
                    }
                }

            } while (cardIsDuplicate === 1);

            // Update the card once it is unique
            playersHandArray[i].suit = randomSuit;
            playersHandArray[i].rank = randomRank;
            playersHandArray[i].rankInt = randomRankNum;
            playersHandArray[i].hold = true;

        }
    }
};


export {
    printGreeting,
    updatePlayersHand,
    getFirstHand,
    getSuit,
    getRank,
    getBet,
    getBank,
    analyzeHand,
    dealtCard
}