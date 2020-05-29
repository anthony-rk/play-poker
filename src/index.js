import { getRank } from "./draw_poker_functions";
import { analyzeHand } from "./draw_poker_functions";
import { runDrawPoker } from "./draw_poker_runner";


window.addEventListener('load', function () {

    // let testRank = getRank(Math.floor(Math.random() * 13) % 13);
    // console.log(testRank);

    // let analyzeHandResult = analyzeHand([2, 'Ace', 4, 5], [0, 1, 2, 3]);
    // console.log(analyzeHandResult);

    runDrawPoker();

});
