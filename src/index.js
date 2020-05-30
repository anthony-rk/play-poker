import { getRank } from "./draw_poker_functions";
import { analyzeHand } from "./draw_poker_functions";
import { runDrawPoker } from "./draw_poker_runner";
import { testRunDrawPoker } from "./test_draw_poker_runner";


window.addEventListener('load', function () {
    // setTimeout(() => {  runDrawPoker(); }, 2000);

    
    testRunDrawPoker();

});
