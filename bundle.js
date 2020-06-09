/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n    background-color: lightgray;\n}\n\n#content {\n    text-align: center;\n    \n}\n\n#bank-holder-div {\n    margin: 0 auto;\n    width: 40%;\n    background-color: greenyellow;\n    border-style: solid;\n    border-width: 2px;\n    margin-bottom: 15px;\n}\n\n#bank-div-amount {\n    display: inline-block;\n    float: left;\n    padding-left: 25%;\n}\n\n#bank-div {\n    font-style: italic;\n}\n\n#bankDiv {\n    float: left;\n    display: inline-block;\n}\n\n#play-game-button {\n    margin-bottom: 10px;\n}\n\n#bet-div {\n    display: inline-block;\n    padding-left: 10px;\n    padding-right: 5px;\n}\n\n#card-holder {\n    margin: 0 auto;\n    width: 100%;\n}\n\n#card-0 {\n    float: left;\n    text-align: center;\n    background-color: #222;\n    display: inline-block;\n    height: 100px;\n    padding-top: 50px;\n    width: 20%;\n}\n\n#card-1 {\n    float: left;\n    text-align: center;\n    background-color: #222;\n    display: inline-block;\n    width: 19%;\n    height: 100px;\n    padding-top: 50px;\n    width: 20%;\n}\n\n#card-2 {\n    float: left;\n    text-align: center;\n    background-color: #222;\n    display: inline-block;\n    width: 19%;\n    height: 100px;\n    padding-top: 50px;\n    width: 20%;\n}\n\n#card-3 {\n    float: left;\n    text-align: center;\n    background-color: #222;\n    display: inline-block;\n    width: 19%;\n    height: 100px;\n    padding-top: 50px;\n    width: 20%;\n}\n\n#card-4 {\n    float: left;\n    text-align: center;\n    background-color: #222;\n    display: inline-block;\n    width: 19%;\n    height: 100px;\n    padding-top: 50px;\n    width: 20%;\n}\n\n#update-hold-button-div {\n    text-align: center;\n    /* width: 100%; */\n}\n\n#card-hold-0 {\n    float: left;\n    text-align: center;\n    display: inline-block;\n    width: 20%;\n    height: 50px;\n    padding-top: 5px;\n    background-color: whitesmoke;\n}\n\n#card-hold-1 {\n    float: left;\n    text-align: center;\n    display: inline-block;\n    width: 20%;\n    height: 50px;\n    padding-top: 5px;\n    background-color: whitesmoke;\n}\n\n#card-hold-2 {\n    float: left;\n    text-align: center;\n    display: inline-block;\n    width: 20%;\n    height: 50px;\n    padding-top: 5px;\n    background-color: whitesmoke;\n}\n\n#card-hold-3 {\n    float: left;\n    text-align: center;\n    display: inline-block;\n    width: 20%;\n    height: 50px;\n    padding-top: 5px;\n    background-color: whitesmoke;\n}\n\n#card-hold-4 {\n    float: left;\n    text-align: center;\n    display: inline-block;\n    width: 20%;\n    height: 50px;\n    padding-top: 5px;\n    background-color: whitesmoke;\n}\n\n#winning-log-holder-div {\n    margin: 0 auto;\n    width: 100%;\n}\n\n/* Make this show some flashing colors around the border when a winner */\n#winning-log-div {\n    text-align: center;\n    background-color: greenyellow;\n    display: inline-block;\n    width: 30%;\n    height: 40px;\n    margin-top: 15px;\n    border-style: solid;\n    border-width: 2px;\n    padding-top: 15px;\n}\n/* \n#winning-log-div-winner {\n    text-align: center;\n    background-color: greenyellow;\n    display: inline-block;\n    width: 30%;\n    height: 40px;\n    margin-top: 15px;\n    border-style: solid;\n    border-width: 2px;\n    padding-top: 15px;\n} */\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/dom_manipulation_functions.js":
/*!*******************************************!*\
  !*** ./src/dom_manipulation_functions.js ***!
  \*******************************************/
/*! exports provided: updateCurrentView, updateHoldButtons, resetViewToBlank, updateBankDiv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCurrentView", function() { return updateCurrentView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateHoldButtons", function() { return updateHoldButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetViewToBlank", function() { return resetViewToBlank; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBankDiv", function() { return updateBankDiv; });
// This has all the dom manipulation functions for the game to run accurately

// Display the current cards dealt on screen
const updateCurrentView = (playersHandArray) => {
    // show the current card data on each of the IDs, i.e. card-0, card-1, etc
    for (let i = 0; i < playersHandArray.length; i++) {
        let myElement = document.getElementById('card-' + i);
        // document.getElementById('card-' + i).innerHTML = "" + playersHandArray[i].rank + "\n\n" + playersHandArray[i].suit;
        myElement.innerHTML = "" + playersHandArray[i].rank + "\n\n" + playersHandArray[i].suit;

        // change background based on the suit
        if (playersHandArray[i].suit === 'Diamonds') {
            myElement.style.backgroundColor = 'black'; 
            myElement.style.color = 'white';     
        }
        else if (playersHandArray[i].suit === 'Spades') {
            myElement.style.backgroundColor = 'blue';    
            myElement.style.color = 'white';    
        }
        else if (playersHandArray[i].suit === 'Hearts') {
            myElement.style.backgroundColor = 'red';   
            myElement.style.color = 'white';   
        }
        else { // Case for Clubs
            myElement.style.backgroundColor = 'green';  
            myElement.style.color = 'white';    
        }
    }
};

// Reset all cards for a new round
const resetViewToBlank = (playersHandArray) => {
    // show the current card data on each of the IDs, i.e. card-0, card-1, etc
    for (let i = 0; i < playersHandArray.length; i++) {
        document.getElementById('card-hold-' + i).style.backgroundColor = "whitesmoke";
    }
};

const toggleHoldButtonsBackground = (elementID) => {
    if (document.getElementById(elementID).style.backgroundColor === "cornflowerblue") {
        document.getElementById(elementID).style.backgroundColor = "whitesmoke";
    } else 
        document.getElementById(elementID).style.backgroundColor = "cornflowerblue";
};

// Show the cards are held and update the data to hold on the backend
const updateHoldButtons = (buttonID) => {
    // change background color to GREEN or WHITESMOKE

    // Update the correct Card's this.hold = true or false if true
    if (buttonID == 'card-hold-0') { 
        // playersHandArray[0].updateHold();
        toggleHoldButtonsBackground('card-hold-0');
    }
    if (buttonID == 'card-hold-1') { 
        // playersHandArray[1].updateHold();
        toggleHoldButtonsBackground('card-hold-1');
     };
    if (buttonID == 'card-hold-2') { 
        // playersHandArray[2].updateHold();
        toggleHoldButtonsBackground('card-hold-2');
     };
    if (buttonID == 'card-hold-3') { 
        // playersHandArray[3].updateHold();
        toggleHoldButtonsBackground('card-hold-3');
     };
    if (buttonID == 'card-hold-4') { 
        // playersHandArray[4].updateHold();
        toggleHoldButtonsBackground('card-hold-4');
    };
};

const updateBankDiv = (newValue) => {
    document.getElementById('bank-div').innerHTML = newValue;
};



/***/ }),

/***/ "./src/draw_poker_functions.js":
/*!*************************************!*\
  !*** ./src/draw_poker_functions.js ***!
  \*************************************/
/*! exports provided: printGreeting, updatePlayersHand, getFirstHand, getSuit, getRank, getBet, getBank, analyzeHand, dealtCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printGreeting", function() { return printGreeting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePlayersHand", function() { return updatePlayersHand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstHand", function() { return getFirstHand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSuit", function() { return getSuit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRank", function() { return getRank; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBet", function() { return getBet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBank", function() { return getBank; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "analyzeHand", function() { return analyzeHand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dealtCard", function() { return dealtCard; });
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



/***/ }),

/***/ "./src/draw_poker_runner.js":
/*!**********************************!*\
  !*** ./src/draw_poker_runner.js ***!
  \**********************************/
/*! exports provided: runDrawPoker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runDrawPoker", function() { return runDrawPoker; });
/* harmony import */ var _draw_poker_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draw_poker_functions */ "./src/draw_poker_functions.js");
/* harmony import */ var _dom_manipulation_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom_manipulation_functions */ "./src/dom_manipulation_functions.js");










// Activates onClick of the Start Game Button
const runDrawPoker = () => {
    // Reset the Hold buttons to WHITESMOKE
    for (let i = 0; i < 5; i++) {
        document.getElementById('card-hold-' + i).style.backgroundColor = 'whitesmoke';
    }

    // Reset the Winnings Div to black
    document.getElementById('winning-log-div').innerHTML = ' ';


    let canDealFinalHand = true;

    let bank = Object(_draw_poker_functions__WEBPACK_IMPORTED_MODULE_0__["getBank"])('bank-div'); // grabs bank total
    console.log(bank + " is bank");

    let bet = Object(_draw_poker_functions__WEBPACK_IMPORTED_MODULE_0__["getBet"])('input-bet-div'); // use getBet() to grab from a div/ input on page

    // initialize the first hand, store the card objects in the hand Array
    let playersHand = [];
    Object(_draw_poker_functions__WEBPACK_IMPORTED_MODULE_0__["getFirstHand"])(playersHand);

    // Updates the Hold field to True or False depending on if the user clicks the Hold Button for the card
    for (let i = 0; i < 5; i++) {
        let buttonID = 'card-hold-' + i;
        document.getElementById(buttonID).addEventListener('click', function() {
            if (buttonID == 'card-hold-0') { 
                playersHand[0].updateHold();
            }
            if (buttonID == 'card-hold-1') { 
                playersHand[1].updateHold();
            };
            if (buttonID == 'card-hold-2') { 
                playersHand[2].updateHold();
            };
            if (buttonID == 'card-hold-3') { 
                playersHand[3].updateHold();
            };
            if (buttonID == 'card-hold-4') { 
                playersHand[4].updateHold();
            };
        });
    };

    console.log("Your five cards: \n");

    playersHand.forEach(card => {
        console.log("Card " + (card.index + 1) + ": " + card.rank + " of " + card.suit);
    });

    Object(_dom_manipulation_functions__WEBPACK_IMPORTED_MODULE_1__["updateCurrentView"])(playersHand);

    // Waits for click on DEAL FINAL HAND button
    document.getElementById('deal-new-hand-button').addEventListener('click', function() {
        if (canDealFinalHand === true) {
            Object(_draw_poker_functions__WEBPACK_IMPORTED_MODULE_0__["updatePlayersHand"])(playersHand);
            Object(_dom_manipulation_functions__WEBPACK_IMPORTED_MODULE_1__["updateCurrentView"])(playersHand);
    
            console.table(playersHand);
    
            console.log("\nYour FINAL five cards: \n");
            playersHand.forEach(card => {
                console.log("Card " + (card.index + 1) + ": " + card.rank + " of " + card.suit);
            });
    
            let firstCardSuitArg = playersHand[0].suit;
            let winnings = Object(_draw_poker_functions__WEBPACK_IMPORTED_MODULE_0__["analyzeHand"])(playersHand, firstCardSuitArg);

            let winningMessage = 'TEST';


            if (winnings == 20)
                winningMessage = "Straight Flush";

            else if (winnings == 10)
                winningMessage = "Four of a Kind";
    
            else if (winnings == 8)
                winningMessage = "Full House";

            else if (winnings == 5)
                winningMessage = "Flush";

            else if (winnings == 4)
                winningMessage = "Straight";
                    
            else if (winnings == 3)
                winningMessage = "Three of a Kind";
                
            else if (winnings == 2)
                winningMessage = "2 Pairs";
            
            else if (winnings == 1)
                winningMessage = "1 Pair";

            else
                winningMessage = "High Card";

            console.log(winningMessage + ' is the WINNING MESSAGE');
            document.getElementById('winning-log-div').innerHTML = winningMessage;
        
            // Show this to the user
            console.log("You won " + (bet * winnings) + "!\n");
    
            // Show the user's Bank
            bank = bank - bet + (bet * winnings);
            Object(_dom_manipulation_functions__WEBPACK_IMPORTED_MODULE_1__["updateBankDiv"])(bank);
            console.log("\nYour bank is now " + bank + ".\n");

            canDealFinalHand = false;

            let button = document.getElementById('play-game-button');
            button.disabled = false;
        }
        else
            console.log("Start a new game to get a final hand...");

    });

};




/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_initializer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page_initializer */ "./src/page_initializer.js");




window.addEventListener('load', function () {
    Object(_page_initializer__WEBPACK_IMPORTED_MODULE_1__["pageInitializer"])();

});


/***/ }),

/***/ "./src/page_initializer.js":
/*!*********************************!*\
  !*** ./src/page_initializer.js ***!
  \*********************************/
/*! exports provided: pageInitializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageInitializer", function() { return pageInitializer; });
/* harmony import */ var _dom_manipulation_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_manipulation_functions */ "./src/dom_manipulation_functions.js");
/* harmony import */ var _draw_poker_runner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draw_poker_runner */ "./src/draw_poker_runner.js");
// Initialize the page with the basic HTML markup




let component = function(newElement, newInnerHTML, newID) {
    const element = document.createElement(newElement);
    element.innerHTML = newInnerHTML;
    element.setAttribute("id", newID);

    return element;
};

let pageInitializer = function() {
    // Display Bank info here
    const bankHolderDiv = component('div', '', 'bank-holder-div');
    document.getElementById("content").appendChild(bankHolderDiv);

    const bankDivAmount = component('div', 'Bank: ', 'bank-div-amount');
    document.getElementById("bank-holder-div").appendChild(bankDivAmount);

    const bankDiv = component('div', '100', 'bank-div');
    document.getElementById("bank-holder-div").appendChild(bankDiv);


    // Add play game button
    const playGameButton = component('button', 'Start Game', 'play-game-button');
    document.getElementById("content").appendChild(playGameButton);

    // Add Deal New Hand Button
    const dealNewHandGameButton = component('button', 'Deal Final Hand', 'deal-new-hand-button');
    document.getElementById("content").appendChild(dealNewHandGameButton);

    const callbackFunction = (_callbackFn) => {
        _callbackFn();
    };

    playGameButton.addEventListener('click', function() {
        console.log("Start game button clicked!");
        let button = document.getElementById('play-game-button');
        button.disabled = true;
        // Remove onclick until runDrawPoker() is completed, need to wait for it to complete to readd
        callbackFunction(_draw_poker_runner__WEBPACK_IMPORTED_MODULE_1__["runDrawPoker"]);
    });

    // Get the Bet / display the current Bet here
    const betDiv = component('div', 'Bet: ', 'bet-div');
    document.getElementById("content").appendChild(betDiv);

    const betInputDiv = component('input', 'Input Bet (1 - 5)', 'input-bet-div');
    betInputDiv.placeholder = 1;
    document.getElementById("content").appendChild(betInputDiv);

    betInputDiv.contentEditable = 'true';


    // Where the 5 Cards will be placed
    const cardHolderDiv = component("div", '', "card-holder");
    document.getElementById("content").appendChild(cardHolderDiv);

    // Make the div for each of the 5 cards
    for (let i = 0; i < 5; i++) {
        let tempCardDiv = component("div", '', "card-" + i);
        document.getElementById("card-holder").appendChild(tempCardDiv);
    };

    // Div that will hold the Hold Buttons for each of the 5 cards
    const updateHoldButtonsDiv = component("div", '', "update-hold-button-div");
    document.getElementById("content").appendChild(updateHoldButtonsDiv);

    // Make Button for "Hold / New Card" for 5 cards
    for (let i = 0; i < 5; i++) {
        let tempCardDiv = component("button", 'Hold', "card-hold-" + i);
        document.getElementById("update-hold-button-div").appendChild(tempCardDiv);

        tempCardDiv.addEventListener('click', function() {
            Object(_dom_manipulation_functions__WEBPACK_IMPORTED_MODULE_0__["updateHoldButtons"])('card-hold-' + i);
        });
    };

    // Winning hand combo here
    const winningLogDivHolder = component('div', '', 'winning-log-holder-div');
    document.getElementById("content").appendChild(winningLogDivHolder);
    
    const winningLogDiv = component('div', 'Winnings Are Here...', 'winning-log-div');
    document.getElementById('winning-log-holder-div').appendChild(winningLogDiv);

    console.log("pageInitializer function ran..");
};



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tX21hbmlwdWxhdGlvbl9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyYXdfcG9rZXJfZnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9kcmF3X3Bva2VyX3J1bm5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlX2luaXRpYWxpemVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hE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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsK0RBQVk7QUFDckMsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTs7QUFFQTtBQUNBLFlBQVkscUZBQWlCO0FBQzdCLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbiNiYW5rLWhvbGRlci1kaXYge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4jYmFuay1kaXYtYW1vdW50IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyNSU7XFxufVxcblxcbiNiYW5rLWRpdiB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuI2JhbmtEaXYge1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4jcGxheS1nYW1lLWJ1dHRvbiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbiNiZXQtZGl2IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXG59XFxuXFxuI2NhcmQtaG9sZGVyIHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jY2FyZC0wIHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcXG4gICAgd2lkdGg6IDIwJTtcXG59XFxuXFxuI2NhcmQtMSB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDE5JTtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgIHdpZHRoOiAyMCU7XFxufVxcblxcbiNjYXJkLTIge1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAxOSU7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcbiAgICB3aWR0aDogMjAlO1xcbn1cXG5cXG4jY2FyZC0zIHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMTklO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcXG4gICAgd2lkdGg6IDIwJTtcXG59XFxuXFxuI2NhcmQtNCB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDE5JTtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgIHdpZHRoOiAyMCU7XFxufVxcblxcbiN1cGRhdGUtaG9sZC1idXR0b24tZGl2IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cXG59XFxuXFxuI2NhcmQtaG9sZC0wIHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHBhZGRpbmctdG9wOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbiNjYXJkLWhvbGQtMSB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4jY2FyZC1ob2xkLTIge1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuI2NhcmQtaG9sZC0zIHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHBhZGRpbmctdG9wOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbiNjYXJkLWhvbGQtNCB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4jd2lubmluZy1sb2ctaG9sZGVyLWRpdiB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogTWFrZSB0aGlzIHNob3cgc29tZSBmbGFzaGluZyBjb2xvcnMgYXJvdW5kIHRoZSBib3JkZXIgd2hlbiBhIHdpbm5lciAqL1xcbiN3aW5uaW5nLWxvZy1kaXYge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xcbn1cXG4vKiBcXG4jd2lubmluZy1sb2ctZGl2LXdpbm5lciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxufSAqL1xcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvLyBUaGlzIGhhcyBhbGwgdGhlIGRvbSBtYW5pcHVsYXRpb24gZnVuY3Rpb25zIGZvciB0aGUgZ2FtZSB0byBydW4gYWNjdXJhdGVseVxuXG4vLyBEaXNwbGF5IHRoZSBjdXJyZW50IGNhcmRzIGRlYWx0IG9uIHNjcmVlblxuY29uc3QgdXBkYXRlQ3VycmVudFZpZXcgPSAocGxheWVyc0hhbmRBcnJheSkgPT4ge1xuICAgIC8vIHNob3cgdGhlIGN1cnJlbnQgY2FyZCBkYXRhIG9uIGVhY2ggb2YgdGhlIElEcywgaS5lLiBjYXJkLTAsIGNhcmQtMSwgZXRjXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJzSGFuZEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBteUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZC0nICsgaSk7XG4gICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkLScgKyBpKS5pbm5lckhUTUwgPSBcIlwiICsgcGxheWVyc0hhbmRBcnJheVtpXS5yYW5rICsgXCJcXG5cXG5cIiArIHBsYXllcnNIYW5kQXJyYXlbaV0uc3VpdDtcbiAgICAgICAgbXlFbGVtZW50LmlubmVySFRNTCA9IFwiXCIgKyBwbGF5ZXJzSGFuZEFycmF5W2ldLnJhbmsgKyBcIlxcblxcblwiICsgcGxheWVyc0hhbmRBcnJheVtpXS5zdWl0O1xuXG4gICAgICAgIC8vIGNoYW5nZSBiYWNrZ3JvdW5kIGJhc2VkIG9uIHRoZSBzdWl0XG4gICAgICAgIGlmIChwbGF5ZXJzSGFuZEFycmF5W2ldLnN1aXQgPT09ICdEaWFtb25kcycpIHtcbiAgICAgICAgICAgIG15RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmxhY2snOyBcbiAgICAgICAgICAgIG15RWxlbWVudC5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7ICAgICBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwbGF5ZXJzSGFuZEFycmF5W2ldLnN1aXQgPT09ICdTcGFkZXMnKSB7XG4gICAgICAgICAgICBteUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsdWUnOyAgICBcbiAgICAgICAgICAgIG15RWxlbWVudC5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7ICAgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBsYXllcnNIYW5kQXJyYXlbaV0uc3VpdCA9PT0gJ0hlYXJ0cycpIHtcbiAgICAgICAgICAgIG15RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJzsgICBcbiAgICAgICAgICAgIG15RWxlbWVudC5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7ICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7IC8vIENhc2UgZm9yIENsdWJzXG4gICAgICAgICAgICBteUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJzsgIFxuICAgICAgICAgICAgbXlFbGVtZW50LnN0eWxlLmNvbG9yID0gJ3doaXRlJzsgICAgXG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vLyBSZXNldCBhbGwgY2FyZHMgZm9yIGEgbmV3IHJvdW5kXG5jb25zdCByZXNldFZpZXdUb0JsYW5rID0gKHBsYXllcnNIYW5kQXJyYXkpID0+IHtcbiAgICAvLyBzaG93IHRoZSBjdXJyZW50IGNhcmQgZGF0YSBvbiBlYWNoIG9mIHRoZSBJRHMsIGkuZS4gY2FyZC0wLCBjYXJkLTEsIGV0Y1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyc0hhbmRBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZC1ob2xkLScgKyBpKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlc21va2VcIjtcbiAgICB9XG59O1xuXG5jb25zdCB0b2dnbGVIb2xkQnV0dG9uc0JhY2tncm91bmQgPSAoZWxlbWVudElEKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJRCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID09PSBcImNvcm5mbG93ZXJibHVlXCIpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElEKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlc21va2VcIjtcbiAgICB9IGVsc2UgXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJRCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJjb3JuZmxvd2VyYmx1ZVwiO1xufTtcblxuLy8gU2hvdyB0aGUgY2FyZHMgYXJlIGhlbGQgYW5kIHVwZGF0ZSB0aGUgZGF0YSB0byBob2xkIG9uIHRoZSBiYWNrZW5kXG5jb25zdCB1cGRhdGVIb2xkQnV0dG9ucyA9IChidXR0b25JRCkgPT4ge1xuICAgIC8vIGNoYW5nZSBiYWNrZ3JvdW5kIGNvbG9yIHRvIEdSRUVOIG9yIFdISVRFU01PS0VcblxuICAgIC8vIFVwZGF0ZSB0aGUgY29ycmVjdCBDYXJkJ3MgdGhpcy5ob2xkID0gdHJ1ZSBvciBmYWxzZSBpZiB0cnVlXG4gICAgaWYgKGJ1dHRvbklEID09ICdjYXJkLWhvbGQtMCcpIHsgXG4gICAgICAgIC8vIHBsYXllcnNIYW5kQXJyYXlbMF0udXBkYXRlSG9sZCgpO1xuICAgICAgICB0b2dnbGVIb2xkQnV0dG9uc0JhY2tncm91bmQoJ2NhcmQtaG9sZC0wJyk7XG4gICAgfVxuICAgIGlmIChidXR0b25JRCA9PSAnY2FyZC1ob2xkLTEnKSB7IFxuICAgICAgICAvLyBwbGF5ZXJzSGFuZEFycmF5WzFdLnVwZGF0ZUhvbGQoKTtcbiAgICAgICAgdG9nZ2xlSG9sZEJ1dHRvbnNCYWNrZ3JvdW5kKCdjYXJkLWhvbGQtMScpO1xuICAgICB9O1xuICAgIGlmIChidXR0b25JRCA9PSAnY2FyZC1ob2xkLTInKSB7IFxuICAgICAgICAvLyBwbGF5ZXJzSGFuZEFycmF5WzJdLnVwZGF0ZUhvbGQoKTtcbiAgICAgICAgdG9nZ2xlSG9sZEJ1dHRvbnNCYWNrZ3JvdW5kKCdjYXJkLWhvbGQtMicpO1xuICAgICB9O1xuICAgIGlmIChidXR0b25JRCA9PSAnY2FyZC1ob2xkLTMnKSB7IFxuICAgICAgICAvLyBwbGF5ZXJzSGFuZEFycmF5WzNdLnVwZGF0ZUhvbGQoKTtcbiAgICAgICAgdG9nZ2xlSG9sZEJ1dHRvbnNCYWNrZ3JvdW5kKCdjYXJkLWhvbGQtMycpO1xuICAgICB9O1xuICAgIGlmIChidXR0b25JRCA9PSAnY2FyZC1ob2xkLTQnKSB7IFxuICAgICAgICAvLyBwbGF5ZXJzSGFuZEFycmF5WzRdLnVwZGF0ZUhvbGQoKTtcbiAgICAgICAgdG9nZ2xlSG9sZEJ1dHRvbnNCYWNrZ3JvdW5kKCdjYXJkLWhvbGQtNCcpO1xuICAgIH07XG59O1xuXG5jb25zdCB1cGRhdGVCYW5rRGl2ID0gKG5ld1ZhbHVlKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhbmstZGl2JykuaW5uZXJIVE1MID0gbmV3VmFsdWU7XG59O1xuXG5leHBvcnQge1xuICAgIHVwZGF0ZUN1cnJlbnRWaWV3LFxuICAgIHVwZGF0ZUhvbGRCdXR0b25zLFxuICAgIHJlc2V0Vmlld1RvQmxhbmssXG4gICAgdXBkYXRlQmFua0RpdlxufSIsIi8vIEZ1bmN0aW9uIERlY2xhcmF0aW9uc1xuXG4vLyBDcmVhdGUgdGhlIENhcmQgQ2xhc3NcbmNsYXNzIGRlYWx0Q2FyZCB7XG4gICAgY29uc3RydWN0b3Ioc3VpdCwgcmFuaywgaW5kZXgsIHJhbmtJbnQpIHsgXG4gICAgICAgIHRoaXMuc3VpdCA9IHN1aXQ7XG4gICAgICAgIHRoaXMucmFuayA9IHJhbms7XG4gICAgICAgIHRoaXMucmFua0ludCA9IHJhbmtJbnQ7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy5ob2xkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdXBkYXRlSG9sZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaG9sZCA9PT0gZmFsc2UpXG4gICAgICAgICAgICB0aGlzLmhvbGQgPSB0cnVlO1xuICAgICAgICBlbHNlIFxuICAgICAgICAgICAgdGhpcy5ob2xkID0gZmFsc2U7XG4gICAgfVxufTtcblxuY29uc3QgcHJpbnRHcmVldGluZyA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiXFxuXFxuXFx0V2VsY29tZSB0byB0aGUgQ2FzaW5vIVxcblxcblwiKTtcbiAgICBjb25zb2xlLmxvZyhcIlxcdFxcdEhvbWUgb2YgVmlkZW8gRHJhdyBQb2tlclxcblxcblxcblwiKTtcbiAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuXCIpO1xuXG4gICAgY29uc29sZS5sb2coXCJIZXJlIGFyZSB0aGUgcnVsZXM6XFxuXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiLVlvdSBzdGFydCB3aXRoIDEwMCBjcmVkaXRzLCBhbmQgeW91IG1ha2UgYSBiZXQgZnJvbSAxIHRvIDUgY3JlZGl0cy5cXG5cIik7XG4gICAgY29uc29sZS5sb2coXCItWW91IGFyZSBkZWFsdCA1IGNhcmRzLCBhbmQgeW91IGNhbiBjaG9vc2Ugd2hpY2ggY2FyZHMgdG8ga2VlcCBvciBkaXNjYXJkLlxcblwiKTtcbiAgICBjb25zb2xlLmxvZyhcIi1Zb3Ugd2FudCB0byBtYWtlIHRoZSBiZXN0IHBvc3NpYmxlIGhhbmQuXFxuXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiXFxuSGVyZSBpcyB0aGUgdGFibGUgZm9yIHdpbm5pbmdzIChhc3N1bWluZyBhIGJldCBvZiAxIGNyZWRpdCk6XCIpO1xuICAgIGNvbnNvbGUubG9nKFwiXFxuXFx0UGFpclxcdFxcdFxcdFxcdDEgIGNyZWRpdFwiKTtcbiAgICBjb25zb2xlLmxvZyhcIlxcblxcdFR3byBQYWlyc1xcdFxcdFxcdDIgIGNyZWRpdHNcIik7XG4gICAgY29uc29sZS5sb2coXCJcXG5cXHRUaHJlZSBvZiBhIEtpbmRcXHRcXHQzICBjcmVkaXRzXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiXFxuXFx0U3RyYWlnaHRcXHRcXHRcXHQ0ICBjcmVkaXRzXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiXFxuXFx0Rmx1c2hcXHRcXHRcXHRcXHQ1ICBjcmVkaXRzXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiXFxuXFx0RnVsbCBIb3VzZVxcdFxcdFxcdDggIGNyZWRpdHNcIik7XG4gICAgY29uc29sZS5sb2coXCJcXG5cXHRGb3VyIG9mIGEgS2luZFxcdFxcdDEwIGNyZWRpdHNcIik7XG4gICAgY29uc29sZS5sb2coXCJcXG5cXHRTdHJhaWdodCBGbHVzaFxcdFxcdDIwIGNyZWRpdHNcIik7XG4gICAgLy8gY29uc29sZS5sb2coXCJcXFJveWFsIEZsdXNoXFx0XFx0XFx0XFx0NTAgY3JlZGl0c1wiKTtcbiAgICAvLyBGaW5kIGEgd2F5IHRvIGltcGxlbWVudCB0aGlzXG4gICAgY29uc29sZS5sb2coXCJcXG5cXG5IYXZlIGZ1biEhXFxuXFxuXCIpO1xufTtcblxuLy8gRGVhbHMgdGhlIGZpcnN0IGhhbmQgb2YgdGhlIGdhbWVcbmNvbnN0IGdldEZpcnN0SGFuZCA9IChwbGF5ZXJzSGFuZEFycmF5KSA9PiB7XG4gICAgZm9yIChsZXQgY2FyZEluZGV4ID0gMDsgY2FyZEluZGV4IDwgNTsgY2FyZEluZGV4KyspIHtcbiAgICAgICAgbGV0IGNhcmRJc0R1cGxpY2F0ZSA9IDA7XG5cbiAgICAgICAgbGV0IHJhbmRvbVN1aXQ7XG4gICAgICAgIGxldCByYW5kb21SYW5rO1xuXG4gICAgICAgIGxldCByYW5kb21SYW5rTnVtO1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGNhcmRJc0R1cGxpY2F0ZSA9IDA7XG4gICAgICAgICAgICByYW5kb21TdWl0ID0gZ2V0U3VpdCgoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCkgJSA0KSk7XG5cbiAgICAgICAgICAgIHJhbmRvbVJhbmtOdW0gPSAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTMpICUgMTMpO1xuICAgICAgICAgICAgcmFuZG9tUmFuayA9IGdldFJhbmsocmFuZG9tUmFua051bSk7IFxuXG4gICAgICAgICAgICAvLyBDaGVja3MgZm9yIER1cGxpY2F0ZXNcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2FyZEluZGV4OyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAocmFuZG9tU3VpdCA9PT0gcGxheWVyc0hhbmRBcnJheVtqXS5zdWl0ICYmIHJhbmRvbVJhbmsgPT09IHBsYXllcnNIYW5kQXJyYXlbal0ucmFuaykge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBhbm90aGVyIGNhcmQgaGFzIHRoZSBzYW1lIFN1aXQgYW5kIFJhbmssIHNldCBjYXJkSXNEdXBsaWNhdGUgdG8gMVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnXFxuSVMgQSBEVVBFLCBNQVRDSEVTIFdJVEggQ0FSRCBBVCBJTkRFWCAnKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgY2FyZElzRHVwbGljYXRlID0gMTtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gd2hpbGUgKGNhcmRJc0R1cGxpY2F0ZSA9PT0gMSk7XG5cbiAgICAgICAgbGV0IHRlbXBDYXJkID0gbmV3IGRlYWx0Q2FyZChyYW5kb21TdWl0LCByYW5kb21SYW5rLCBjYXJkSW5kZXgsIHJhbmRvbVJhbmtOdW0pO1xuICAgICAgICBwbGF5ZXJzSGFuZEFycmF5LnB1c2godGVtcENhcmQpO1xuICAgIH07XG59O1xuXG4vLyBUYWtlcyBpbiB0aGUgcmFuZG9tIG51bWJlciBhbmQgcmV0dXJucyB0aGUgc3VpdC4gLy8gVEhJUyBJUyBHT09EIFxuY29uc3QgZ2V0U3VpdCA9IChzdWl0KSA9PiB7XG4gICAgc3dpdGNoKHN1aXQpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgcmV0dXJuKCdDbHVicycpO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4oJ0RpYW1vbmRzJyk7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybignSGVhcnRzJyk7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybignU3BhZGVzJyk7XG4gICAgfVxufTtcblxuLy8gVGFrZXMgaW4gdGhlIHJhbmRvbSBudW1iZXIgYW5kIHJldHVybnMgdGhlIGNhcmQgcmFuayAvLyBUSElTIElTIEdPT0QgXG5jb25zdCBnZXRSYW5rID0gKHJhbmspID0+IHtcbiAgICBzd2l0Y2gocmFuaylcbiAgICB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybignQWNlJyk7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybignMicpO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4oJzMnKTtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuKCc0Jyk7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIHJldHVybignNScpO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICByZXR1cm4oJzYnKTtcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgcmV0dXJuKCc3Jyk7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgIHJldHVybignOCcpO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICByZXR1cm4oJzknKTtcbiAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgcmV0dXJuKCcxMCcpO1xuICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgcmV0dXJuKCdKYWNrJyk7XG4gICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICByZXR1cm4oJ1F1ZWVuJyk7XG4gICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICByZXR1cm4oJ0tpbmcnKTtcbiAgICB9XG59O1xuXG4vLyBHZXRzIHRoZSBVc2VyJ3MgY3VycmVudCBiZXQgKHJhbmdlIGlzIDAgLSA1LCBzaG91bGQgbWFrZSB1cCB0aGUgdGhlIHRvdGFsIHNjb3JlIHZhbHVlKVxuY29uc3QgZ2V0QmV0ID0gKGVsZW1lbnRJRCkgPT4ge1xuXG4gICAgZG8gLy8gd2lsbCBrZWVwIHJ1bm5pbmcgdW50aWwgdGhlIHVzZXIgZW50ZXJzIDAtNVxuICAgIHtcbiAgICAgICAgLy8gbGV0IGJldCA9IHdpbmRvdy5wcm9tcHQoXCJIb3cgbXVjaCBkbyB5b3Ugd2FudCB0byBiZXQ/IChFbnRlciBhIG51bWJlciAxIHRvIDUsIG9yIDAgdG8gcXVpdCB0aGUgZ2FtZSk6IFwiKTtcbiAgICAgICAgbGV0IGJldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJRCkudmFsdWU7XG5cbiAgICAgICAgaWYgKGJldCA9PSAwKSB7XG4gICAgICAgICAgICBiZXQgPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJldCA+PSAxICYmIGJldCA8PSA1KSB7XG4gICAgICAgICAgICByZXR1cm4gKGJldCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYmV0ID09IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXNlciBoYXMgUXVpdC4uLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIlBsZWFzZSBlbnRlciBhIGJldCBmcm9tIDEtNVwiKTtcbiAgICAgICAgfVxuXG4gICAgfSB3aGlsZSAoIChiZXQgPCAwIHx8IGJldCA+IDUpKTtcbn07XG5cbmNvbnN0IGdldEJhbmsgPSAoZWxlbWVudElEKSA9PiB7XG4gICAgbGV0IGJhbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SUQpLmlubmVySFRNTDtcbiAgICBcbiAgICByZXR1cm4gYmFuaztcbn07XG5cblxuY29uc3QgYW5hbHl6ZUhhbmQgPSAocGxheWVyc0hhbmRBcnJheSwgZmlyc3RTdWl0KSA9PiB7XG4gICAgbGV0IHN0cmFpZ2h0ID0gZmFsc2U7XG4gICAgbGV0IGZsdXNoID0gZmFsc2U7XG4gICAgbGV0IGZvdXIgPSBmYWxzZTtcbiAgICBsZXQgdGhyZWUgPSBmYWxzZTtcbiAgICBsZXQgcGFpcnMgPSAwO1xuXG4gICAgLy8gQ2hlY2sgZm9yIEZMVVNIIC8vIExPT0tTIEdPT0RcbiAgICBsZXQgaXNGbHVzaCA9IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBsYXllcnNIYW5kQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHBsYXllcnNIYW5kQXJyYXlbaV0uc3VpdCA9PSBmaXJzdFN1aXQpXG4gICAgICAgICAgICBpc0ZsdXNoKys7XG4gICAgICAgIGlmIChpc0ZsdXNoID09PSA0KSB7XG4gICAgICAgICAgICBmbHVzaCA9IHRydWU7IFxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIENoZWNrIGZvciBTVFJBSUdIVCAvLyBMT09LUyBHT09EIFxuICAgIGxldCBzb3J0ZWRSYW5rQXJyYXkgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyc0hhbmRBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBzb3J0ZWRSYW5rQXJyYXkucHVzaChwbGF5ZXJzSGFuZEFycmF5W2ldLnJhbmtJbnQpO1xuICAgIH07XG5cbiAgICBsZXQgaXNTb3J0ZWQgPSAwO1xuICAgIHNvcnRlZFJhbmtBcnJheS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gICAgY29uc29sZS5sb2coc29ydGVkUmFua0FycmF5KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc29ydGVkUmFua0FycmF5Lmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICBpZiAoc29ydGVkUmFua0FycmF5W2ldID09PSAoKHNvcnRlZFJhbmtBcnJheVtpICsgMV0pIC0gMSkpIHtcbiAgICAgICAgICAgIGlzU29ydGVkKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzU29ydGVkID09PSA0KSB7XG4gICAgICAgICAgICBzdHJhaWdodCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gQ2hlY2sgZm9yIDQgb2YgYSBraW5kLCAzIG9mIGEga2luZCwgb3IgUGFpcnNcbiAgICBsZXQgZGlhbW9uZHNJbkhhbmQgPSAwO1xuICAgIGxldCBjbHVic0luSGFuZCA9IDA7XG4gICAgbGV0IGhlYXJ0c0luSGFuZCA9IDA7XG4gICAgbGV0IHNwYWRlc0luSGFuZCA9IDA7XG5cbiAgICAvLyBDb3VudCBob3cgbWFueSBvZiBlYWNoIFN1aXQgdHlwZSBhcmUgaW4gdGhlIGhhbmRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllcnNIYW5kQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHBsYXllcnNIYW5kQXJyYXlbaV0uc3VpdCA9PT0gJ0NsdWJzJykgeyBjbHVic0luSGFuZCsrOyB9XG4gICAgICAgIGVsc2UgaWYgKHBsYXllcnNIYW5kQXJyYXlbaV0uc3VpdCA9PT0gJ0RpYW1vbmRzJykgeyBkaWFtb25kc0luSGFuZCsrOyB9XG4gICAgICAgIGVsc2UgaWYgKHBsYXllcnNIYW5kQXJyYXlbaV0uc3VpdCA9PT0gJ0hlYXJ0cycpIHsgaGVhcnRzSW5IYW5kKys7IH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgc3BhZGVzSW5IYW5kKys7XG4gICAgfVxuXG4gICAgbGV0IHN1aXRzQXJyYXkgPSBbXTtcbiAgICBzdWl0c0FycmF5LnB1c2goY2x1YnNJbkhhbmQpO1xuICAgIHN1aXRzQXJyYXkucHVzaChkaWFtb25kc0luSGFuZCk7XG4gICAgc3VpdHNBcnJheS5wdXNoKGhlYXJ0c0luSGFuZCk7XG4gICAgc3VpdHNBcnJheS5wdXNoKHNwYWRlc0luSGFuZCk7XG5cbiAgICAvLyBDaGVjayBpZiA0IG9mIGEga2luZCBvciAzIG9mIGEga2luZFxuICAgIGlmIChzdWl0c0FycmF5LmluY2x1ZGVzKDQpKSB7IGZvdXIgPSB0cnVlOyB9O1xuICAgIGlmIChzdWl0c0FycmF5LmluY2x1ZGVzKDMpKSB7IHRocmVlID0gdHJ1ZTsgfTtcblxuICAgIC8vIENvdW50cyBob3cgbWFueSBwYWlycyB0aGVyZSBhcmVcbiAgICBzdWl0c0FycmF5LmZvckVhY2goc3VpdCA9PiB7XG4gICAgICAgIGlmIChzdWl0ID09IDIpIHtcbiAgICAgICAgICAgIHBhaXJzKys7XG4gICAgICAgIH1cbiAgICB9KTtcblxuXG4gICAgaWYgKHN0cmFpZ2h0ICYmIGZsdXNoKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJTdHJhaWdodCBGbHVzaFxcblxcblwiKTtcbiAgICAgICAgcmV0dXJuKDIwKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZm91cilcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRm91ciBvZiBhIEtpbmRcXG5cXG5cIik7XG4gICAgICAgIHJldHVybigxMCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRocmVlICYmIHBhaXJzID09IDEpXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkZ1bGwgSG91c2VcXG5cXG5cIik7XG4gICAgICAgIHJldHVybig4KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZmx1c2gpXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkZsdXNoXFxuXFxuXCIpO1xuICAgICAgICByZXR1cm4oNSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHN0cmFpZ2h0KVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJTdHJhaWdodFxcblxcblwiKTtcbiAgICAgICAgcmV0dXJuKDQpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aHJlZSlcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhyZWUgb2YgYSBLaW5kXFxuXFxuXCIpO1xuICAgICAgICByZXR1cm4oMyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhaXJzID09IDIpXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlR3byBwYWlyc1xcblxcblwiKTtcbiAgICAgICAgcmV0dXJuKDIpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwYWlycyA9PSAxKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coXCIxIFBhaXJcXG5cXG5cIik7XG4gICAgICAgIHJldHVybigxKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJIaWdoIENhcmRcXG5cXG5cIik7XG4gICAgICAgIHJldHVybigwKTtcbiAgICB9XG5cbn07XG5cbmNvbnN0IHVwZGF0ZVBsYXllcnNIYW5kID0gKHBsYXllcnNIYW5kQXJyYXkpID0+IHsgLy8gTE9PS1MgR09PRFxuICAgIGxldCBjYXJkSXNEdXBsaWNhdGUgPSAwO1xuICAgIGxldCByYW5kb21TdWl0O1xuICAgIGxldCByYW5kb21SYW5rO1xuICAgIGxldCByYW5kb21SYW5rTnVtO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgaWYgKHBsYXllcnNIYW5kQXJyYXlbaV0uaG9sZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBjYXJkSXNEdXBsaWNhdGUgPSAwO1xuXG4gICAgICAgICAgICAgICAgLy8gcmVwbGFjZSBjYXJkXG4gICAgICAgICAgICAgICAgcmFuZG9tU3VpdCA9IGdldFN1aXQoKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpICUgNCkpO1xuXG4gICAgICAgICAgICAgICAgcmFuZG9tUmFua051bSA9IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMykgJSAxMyk7XG4gICAgICAgICAgICAgICAgcmFuZG9tUmFuayA9IGdldFJhbmsocmFuZG9tUmFua051bSk7IFxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA1OyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGogPT09IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBleGNsdWRlIHRoZSBjdXJyZW50IGNhcmQncyBpbmRleCB0byBub3QgY2hlY2sgYWdhaW5zdCBpdHNlbGYsIHN0YXJ0aW5nIGFuIGVuZGxlc3MgbG9vcFxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChyYW5kb21TdWl0ID09IHBsYXllcnNIYW5kQXJyYXlbal0uc3VpdCAmJiByYW5kb21SYW5rID09IHBsYXllcnNIYW5kQXJyYXlbal0ucmFuaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZElzRHVwbGljYXRlID0gMTsgLy8gSWYgYW5vdGhlciBjYXJkIGhhcyB0aGUgc2FtZSBTdWl0IGFuZCBSYW5rLCBzZXQgY2FyZElzRHVwbGljYXRlIHRvIDFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSB3aGlsZSAoY2FyZElzRHVwbGljYXRlID09PSAxKTtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBjYXJkIG9uY2UgaXQgaXMgdW5pcXVlXG4gICAgICAgICAgICBwbGF5ZXJzSGFuZEFycmF5W2ldLnN1aXQgPSByYW5kb21TdWl0O1xuICAgICAgICAgICAgcGxheWVyc0hhbmRBcnJheVtpXS5yYW5rID0gcmFuZG9tUmFuaztcbiAgICAgICAgICAgIHBsYXllcnNIYW5kQXJyYXlbaV0ucmFua0ludCA9IHJhbmRvbVJhbmtOdW07XG4gICAgICAgICAgICBwbGF5ZXJzSGFuZEFycmF5W2ldLmhvbGQgPSB0cnVlO1xuXG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQge1xuICAgIHByaW50R3JlZXRpbmcsXG4gICAgdXBkYXRlUGxheWVyc0hhbmQsXG4gICAgZ2V0Rmlyc3RIYW5kLFxuICAgIGdldFN1aXQsXG4gICAgZ2V0UmFuayxcbiAgICBnZXRCZXQsXG4gICAgZ2V0QmFuayxcbiAgICBhbmFseXplSGFuZCxcbiAgICBkZWFsdENhcmQsXG59IiwiaW1wb3J0IHsgcHJpbnRHcmVldGluZyB9IGZyb20gXCIuL2RyYXdfcG9rZXJfZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBnZXRCZXQgfSBmcm9tIFwiLi9kcmF3X3Bva2VyX2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgZ2V0Rmlyc3RIYW5kIH0gZnJvbSBcIi4vZHJhd19wb2tlcl9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IGFuYWx5emVIYW5kIH0gZnJvbSBcIi4vZHJhd19wb2tlcl9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IHVwZGF0ZVBsYXllcnNIYW5kIH0gZnJvbSBcIi4vZHJhd19wb2tlcl9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IGdldEJhbmsgfSBmcm9tIFwiLi9kcmF3X3Bva2VyX2Z1bmN0aW9uc1wiO1xuXG5pbXBvcnQgeyB1cGRhdGVDdXJyZW50VmlldyB9IGZyb20gXCIuL2RvbV9tYW5pcHVsYXRpb25fZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyB1cGRhdGVCYW5rRGl2IH0gZnJvbSBcIi4vZG9tX21hbmlwdWxhdGlvbl9mdW5jdGlvbnNcIjtcblxuLy8gQWN0aXZhdGVzIG9uQ2xpY2sgb2YgdGhlIFN0YXJ0IEdhbWUgQnV0dG9uXG5jb25zdCBydW5EcmF3UG9rZXIgPSAoKSA9PiB7XG4gICAgLy8gUmVzZXQgdGhlIEhvbGQgYnV0dG9ucyB0byBXSElURVNNT0tFXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmQtaG9sZC0nICsgaSkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlc21va2UnO1xuICAgIH1cblxuICAgIC8vIFJlc2V0IHRoZSBXaW5uaW5ncyBEaXYgdG8gYmxhY2tcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2lubmluZy1sb2ctZGl2JykuaW5uZXJIVE1MID0gJyAnO1xuXG5cbiAgICBsZXQgY2FuRGVhbEZpbmFsSGFuZCA9IHRydWU7XG5cbiAgICBsZXQgYmFuayA9IGdldEJhbmsoJ2JhbmstZGl2Jyk7IC8vIGdyYWJzIGJhbmsgdG90YWxcbiAgICBjb25zb2xlLmxvZyhiYW5rICsgXCIgaXMgYmFua1wiKTtcblxuICAgIGxldCBiZXQgPSBnZXRCZXQoJ2lucHV0LWJldC1kaXYnKTsgLy8gdXNlIGdldEJldCgpIHRvIGdyYWIgZnJvbSBhIGRpdi8gaW5wdXQgb24gcGFnZVxuXG4gICAgLy8gaW5pdGlhbGl6ZSB0aGUgZmlyc3QgaGFuZCwgc3RvcmUgdGhlIGNhcmQgb2JqZWN0cyBpbiB0aGUgaGFuZCBBcnJheVxuICAgIGxldCBwbGF5ZXJzSGFuZCA9IFtdO1xuICAgIGdldEZpcnN0SGFuZChwbGF5ZXJzSGFuZCk7XG5cbiAgICAvLyBVcGRhdGVzIHRoZSBIb2xkIGZpZWxkIHRvIFRydWUgb3IgRmFsc2UgZGVwZW5kaW5nIG9uIGlmIHRoZSB1c2VyIGNsaWNrcyB0aGUgSG9sZCBCdXR0b24gZm9yIHRoZSBjYXJkXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgbGV0IGJ1dHRvbklEID0gJ2NhcmQtaG9sZC0nICsgaTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYnV0dG9uSUQpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoYnV0dG9uSUQgPT0gJ2NhcmQtaG9sZC0wJykgeyBcbiAgICAgICAgICAgICAgICBwbGF5ZXJzSGFuZFswXS51cGRhdGVIb2xkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYnV0dG9uSUQgPT0gJ2NhcmQtaG9sZC0xJykgeyBcbiAgICAgICAgICAgICAgICBwbGF5ZXJzSGFuZFsxXS51cGRhdGVIb2xkKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGJ1dHRvbklEID09ICdjYXJkLWhvbGQtMicpIHsgXG4gICAgICAgICAgICAgICAgcGxheWVyc0hhbmRbMl0udXBkYXRlSG9sZCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChidXR0b25JRCA9PSAnY2FyZC1ob2xkLTMnKSB7IFxuICAgICAgICAgICAgICAgIHBsYXllcnNIYW5kWzNdLnVwZGF0ZUhvbGQoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoYnV0dG9uSUQgPT0gJ2NhcmQtaG9sZC00JykgeyBcbiAgICAgICAgICAgICAgICBwbGF5ZXJzSGFuZFs0XS51cGRhdGVIb2xkKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc29sZS5sb2coXCJZb3VyIGZpdmUgY2FyZHM6IFxcblwiKTtcblxuICAgIHBsYXllcnNIYW5kLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2FyZCBcIiArIChjYXJkLmluZGV4ICsgMSkgKyBcIjogXCIgKyBjYXJkLnJhbmsgKyBcIiBvZiBcIiArIGNhcmQuc3VpdCk7XG4gICAgfSk7XG5cbiAgICB1cGRhdGVDdXJyZW50VmlldyhwbGF5ZXJzSGFuZCk7XG5cbiAgICAvLyBXYWl0cyBmb3IgY2xpY2sgb24gREVBTCBGSU5BTCBIQU5EIGJ1dHRvblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWFsLW5ldy1oYW5kLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChjYW5EZWFsRmluYWxIYW5kID09PSB0cnVlKSB7XG4gICAgICAgICAgICB1cGRhdGVQbGF5ZXJzSGFuZChwbGF5ZXJzSGFuZCk7XG4gICAgICAgICAgICB1cGRhdGVDdXJyZW50VmlldyhwbGF5ZXJzSGFuZCk7XG4gICAgXG4gICAgICAgICAgICBjb25zb2xlLnRhYmxlKHBsYXllcnNIYW5kKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXFxuWW91ciBGSU5BTCBmaXZlIGNhcmRzOiBcXG5cIik7XG4gICAgICAgICAgICBwbGF5ZXJzSGFuZC5mb3JFYWNoKGNhcmQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2FyZCBcIiArIChjYXJkLmluZGV4ICsgMSkgKyBcIjogXCIgKyBjYXJkLnJhbmsgKyBcIiBvZiBcIiArIGNhcmQuc3VpdCk7XG4gICAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgICAgIGxldCBmaXJzdENhcmRTdWl0QXJnID0gcGxheWVyc0hhbmRbMF0uc3VpdDtcbiAgICAgICAgICAgIGxldCB3aW5uaW5ncyA9IGFuYWx5emVIYW5kKHBsYXllcnNIYW5kLCBmaXJzdENhcmRTdWl0QXJnKTtcblxuICAgICAgICAgICAgbGV0IHdpbm5pbmdNZXNzYWdlID0gJ1RFU1QnO1xuXG5cbiAgICAgICAgICAgIGlmICh3aW5uaW5ncyA9PSAyMClcbiAgICAgICAgICAgICAgICB3aW5uaW5nTWVzc2FnZSA9IFwiU3RyYWlnaHQgRmx1c2hcIjtcblxuICAgICAgICAgICAgZWxzZSBpZiAod2lubmluZ3MgPT0gMTApXG4gICAgICAgICAgICAgICAgd2lubmluZ01lc3NhZ2UgPSBcIkZvdXIgb2YgYSBLaW5kXCI7XG4gICAgXG4gICAgICAgICAgICBlbHNlIGlmICh3aW5uaW5ncyA9PSA4KVxuICAgICAgICAgICAgICAgIHdpbm5pbmdNZXNzYWdlID0gXCJGdWxsIEhvdXNlXCI7XG5cbiAgICAgICAgICAgIGVsc2UgaWYgKHdpbm5pbmdzID09IDUpXG4gICAgICAgICAgICAgICAgd2lubmluZ01lc3NhZ2UgPSBcIkZsdXNoXCI7XG5cbiAgICAgICAgICAgIGVsc2UgaWYgKHdpbm5pbmdzID09IDQpXG4gICAgICAgICAgICAgICAgd2lubmluZ01lc3NhZ2UgPSBcIlN0cmFpZ2h0XCI7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgZWxzZSBpZiAod2lubmluZ3MgPT0gMylcbiAgICAgICAgICAgICAgICB3aW5uaW5nTWVzc2FnZSA9IFwiVGhyZWUgb2YgYSBLaW5kXCI7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBlbHNlIGlmICh3aW5uaW5ncyA9PSAyKVxuICAgICAgICAgICAgICAgIHdpbm5pbmdNZXNzYWdlID0gXCIyIFBhaXJzXCI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGVsc2UgaWYgKHdpbm5pbmdzID09IDEpXG4gICAgICAgICAgICAgICAgd2lubmluZ01lc3NhZ2UgPSBcIjEgUGFpclwiO1xuXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgd2lubmluZ01lc3NhZ2UgPSBcIkhpZ2ggQ2FyZFwiO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh3aW5uaW5nTWVzc2FnZSArICcgaXMgdGhlIFdJTk5JTkcgTUVTU0FHRScpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbm5pbmctbG9nLWRpdicpLmlubmVySFRNTCA9IHdpbm5pbmdNZXNzYWdlO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIFNob3cgdGhpcyB0byB0aGUgdXNlclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJZb3Ugd29uIFwiICsgKGJldCAqIHdpbm5pbmdzKSArIFwiIVxcblwiKTtcbiAgICBcbiAgICAgICAgICAgIC8vIFNob3cgdGhlIHVzZXIncyBCYW5rXG4gICAgICAgICAgICBiYW5rID0gYmFuayAtIGJldCArIChiZXQgKiB3aW5uaW5ncyk7XG4gICAgICAgICAgICB1cGRhdGVCYW5rRGl2KGJhbmspO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJcXG5Zb3VyIGJhbmsgaXMgbm93IFwiICsgYmFuayArIFwiLlxcblwiKTtcblxuICAgICAgICAgICAgY2FuRGVhbEZpbmFsSGFuZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXktZ2FtZS1idXR0b24nKTtcbiAgICAgICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3RhcnQgYSBuZXcgZ2FtZSB0byBnZXQgYSBmaW5hbCBoYW5kLi4uXCIpO1xuXG4gICAgfSk7XG5cbn07XG5cblxuZXhwb3J0IHtcbiAgICBydW5EcmF3UG9rZXIsXG59IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5cbmltcG9ydCB7IHBhZ2VJbml0aWFsaXplciB9IGZyb20gXCIuL3BhZ2VfaW5pdGlhbGl6ZXJcIjtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgcGFnZUluaXRpYWxpemVyKCk7XG5cbn0pO1xuIiwiLy8gSW5pdGlhbGl6ZSB0aGUgcGFnZSB3aXRoIHRoZSBiYXNpYyBIVE1MIG1hcmt1cFxuXG5pbXBvcnQgeyB1cGRhdGVIb2xkQnV0dG9ucyB9IGZyb20gXCIuL2RvbV9tYW5pcHVsYXRpb25fZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBydW5EcmF3UG9rZXIgfSBmcm9tIFwiLi9kcmF3X3Bva2VyX3J1bm5lclwiO1xuXG5sZXQgY29tcG9uZW50ID0gZnVuY3Rpb24obmV3RWxlbWVudCwgbmV3SW5uZXJIVE1MLCBuZXdJRCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5ld0VsZW1lbnQpO1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gbmV3SW5uZXJIVE1MO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgbmV3SUQpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5sZXQgcGFnZUluaXRpYWxpemVyID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gRGlzcGxheSBCYW5rIGluZm8gaGVyZVxuICAgIGNvbnN0IGJhbmtIb2xkZXJEaXYgPSBjb21wb25lbnQoJ2RpdicsICcnLCAnYmFuay1ob2xkZXItZGl2Jyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKGJhbmtIb2xkZXJEaXYpO1xuXG4gICAgY29uc3QgYmFua0RpdkFtb3VudCA9IGNvbXBvbmVudCgnZGl2JywgJ0Jhbms6ICcsICdiYW5rLWRpdi1hbW91bnQnKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhbmstaG9sZGVyLWRpdlwiKS5hcHBlbmRDaGlsZChiYW5rRGl2QW1vdW50KTtcblxuICAgIGNvbnN0IGJhbmtEaXYgPSBjb21wb25lbnQoJ2RpdicsICcxMDAnLCAnYmFuay1kaXYnKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhbmstaG9sZGVyLWRpdlwiKS5hcHBlbmRDaGlsZChiYW5rRGl2KTtcblxuXG4gICAgLy8gQWRkIHBsYXkgZ2FtZSBidXR0b25cbiAgICBjb25zdCBwbGF5R2FtZUJ1dHRvbiA9IGNvbXBvbmVudCgnYnV0dG9uJywgJ1N0YXJ0IEdhbWUnLCAncGxheS1nYW1lLWJ1dHRvbicpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZChwbGF5R2FtZUJ1dHRvbik7XG5cbiAgICAvLyBBZGQgRGVhbCBOZXcgSGFuZCBCdXR0b25cbiAgICBjb25zdCBkZWFsTmV3SGFuZEdhbWVCdXR0b24gPSBjb21wb25lbnQoJ2J1dHRvbicsICdEZWFsIEZpbmFsIEhhbmQnLCAnZGVhbC1uZXctaGFuZC1idXR0b24nKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoZGVhbE5ld0hhbmRHYW1lQnV0dG9uKTtcblxuICAgIGNvbnN0IGNhbGxiYWNrRnVuY3Rpb24gPSAoX2NhbGxiYWNrRm4pID0+IHtcbiAgICAgICAgX2NhbGxiYWNrRm4oKTtcbiAgICB9O1xuXG4gICAgcGxheUdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJTdGFydCBnYW1lIGJ1dHRvbiBjbGlja2VkIVwiKTtcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5LWdhbWUtYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIC8vIFJlbW92ZSBvbmNsaWNrIHVudGlsIHJ1bkRyYXdQb2tlcigpIGlzIGNvbXBsZXRlZCwgbmVlZCB0byB3YWl0IGZvciBpdCB0byBjb21wbGV0ZSB0byByZWFkZFxuICAgICAgICBjYWxsYmFja0Z1bmN0aW9uKHJ1bkRyYXdQb2tlcik7XG4gICAgfSk7XG5cbiAgICAvLyBHZXQgdGhlIEJldCAvIGRpc3BsYXkgdGhlIGN1cnJlbnQgQmV0IGhlcmVcbiAgICBjb25zdCBiZXREaXYgPSBjb21wb25lbnQoJ2RpdicsICdCZXQ6ICcsICdiZXQtZGl2Jyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKGJldERpdik7XG5cbiAgICBjb25zdCBiZXRJbnB1dERpdiA9IGNvbXBvbmVudCgnaW5wdXQnLCAnSW5wdXQgQmV0ICgxIC0gNSknLCAnaW5wdXQtYmV0LWRpdicpO1xuICAgIGJldElucHV0RGl2LnBsYWNlaG9sZGVyID0gMTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoYmV0SW5wdXREaXYpO1xuXG4gICAgYmV0SW5wdXREaXYuY29udGVudEVkaXRhYmxlID0gJ3RydWUnO1xuXG5cbiAgICAvLyBXaGVyZSB0aGUgNSBDYXJkcyB3aWxsIGJlIHBsYWNlZFxuICAgIGNvbnN0IGNhcmRIb2xkZXJEaXYgPSBjb21wb25lbnQoXCJkaXZcIiwgJycsIFwiY2FyZC1ob2xkZXJcIik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKGNhcmRIb2xkZXJEaXYpO1xuXG4gICAgLy8gTWFrZSB0aGUgZGl2IGZvciBlYWNoIG9mIHRoZSA1IGNhcmRzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgbGV0IHRlbXBDYXJkRGl2ID0gY29tcG9uZW50KFwiZGl2XCIsICcnLCBcImNhcmQtXCIgKyBpKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkLWhvbGRlclwiKS5hcHBlbmRDaGlsZCh0ZW1wQ2FyZERpdik7XG4gICAgfTtcblxuICAgIC8vIERpdiB0aGF0IHdpbGwgaG9sZCB0aGUgSG9sZCBCdXR0b25zIGZvciBlYWNoIG9mIHRoZSA1IGNhcmRzXG4gICAgY29uc3QgdXBkYXRlSG9sZEJ1dHRvbnNEaXYgPSBjb21wb25lbnQoXCJkaXZcIiwgJycsIFwidXBkYXRlLWhvbGQtYnV0dG9uLWRpdlwiKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQodXBkYXRlSG9sZEJ1dHRvbnNEaXYpO1xuXG4gICAgLy8gTWFrZSBCdXR0b24gZm9yIFwiSG9sZCAvIE5ldyBDYXJkXCIgZm9yIDUgY2FyZHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICBsZXQgdGVtcENhcmREaXYgPSBjb21wb25lbnQoXCJidXR0b25cIiwgJ0hvbGQnLCBcImNhcmQtaG9sZC1cIiArIGkpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVwZGF0ZS1ob2xkLWJ1dHRvbi1kaXZcIikuYXBwZW5kQ2hpbGQodGVtcENhcmREaXYpO1xuXG4gICAgICAgIHRlbXBDYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB1cGRhdGVIb2xkQnV0dG9ucygnY2FyZC1ob2xkLScgKyBpKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIFdpbm5pbmcgaGFuZCBjb21ibyBoZXJlXG4gICAgY29uc3Qgd2lubmluZ0xvZ0RpdkhvbGRlciA9IGNvbXBvbmVudCgnZGl2JywgJycsICd3aW5uaW5nLWxvZy1ob2xkZXItZGl2Jyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKHdpbm5pbmdMb2dEaXZIb2xkZXIpO1xuICAgIFxuICAgIGNvbnN0IHdpbm5pbmdMb2dEaXYgPSBjb21wb25lbnQoJ2RpdicsICdXaW5uaW5ncyBBcmUgSGVyZS4uLicsICd3aW5uaW5nLWxvZy1kaXYnKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2lubmluZy1sb2ctaG9sZGVyLWRpdicpLmFwcGVuZENoaWxkKHdpbm5pbmdMb2dEaXYpO1xuXG4gICAgY29uc29sZS5sb2coXCJwYWdlSW5pdGlhbGl6ZXIgZnVuY3Rpb24gcmFuLi5cIik7XG59O1xuXG5leHBvcnQge1xuICAgIHBhZ2VJbml0aWFsaXplclxufSJdLCJzb3VyY2VSb290IjoiIn0=