import './index.css';

import { runDrawPoker } from "./draw_poker_runner";
import { pageInitializer } from "./page_initializer";



window.addEventListener('load', function () {
    // setTimeout(() => {  runDrawPoker(); }, 2000);
    pageInitializer();
    
    // runDrawPoker();

});
