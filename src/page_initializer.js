// Initialize the page

import { runDrawPoker } from "./draw_poker_runner";

let component = function(newElement, newInnerHTML, newID) {
    const element = document.createElement(newElement);
    element.innerHTML = newInnerHTML;
    element.setAttribute("id", newID);

    return element;
};

let pageInitializer = function() {
    // Project related HTML
    const playGameButton = component('button', 'Play Game', 'play-game-button');
    document.getElementById("content").appendChild(playGameButton);
    playGameButton.addEventListener('click', function() {
        console.log("Play game button clicked!");
        runDrawPoker();
    });

    const cardHolderDiv = component("div", '', "card-holder");
    document.getElementById("content").appendChild(cardHolderDiv);




    console.log("pageInitializer function ran..");
};

export {
    pageInitializer
}