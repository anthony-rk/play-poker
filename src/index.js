import './index.css';

import { pageInitializer } from "./page_initializer";
import { printGreeting } from "./draw_poker_functions";

window.addEventListener('load', function () {
    pageInitializer();
	printGreeting();
});
