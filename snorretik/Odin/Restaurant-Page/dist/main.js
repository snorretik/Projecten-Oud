/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n/* harmony import */ var _pageTabAbout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageTabAbout */ \"./src/pageTabAbout.js\");\n/* harmony import */ var _pageTabMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pageTabMenu */ \"./src/pageTabMenu.js\");\n/* harmony import */ var _pageTabContact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pageTabContact */ \"./src/pageTabContact.js\");\n\n\n\n\n\n(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.pageLoadFunc)();\n(0,_pageTabAbout__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_pageTabMenu__WEBPACK_IMPORTED_MODULE_2__.menuTab)();\n(0,_pageTabContact__WEBPACK_IMPORTED_MODULE_3__.contactTab)();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageLoadFunc\": () => (/* binding */ pageLoadFunc)\n/* harmony export */ });\nconst pageLoadFunc = () => {\n    const contentDiv = document.querySelector(\"#content\");\n    // const reference = document.querySelector(\"#tab1\");\n\n    const inputTab1 = document.createElement('input');\n    inputTab1.setAttribute('id', 'tab1');\n    inputTab1.setAttribute('class', 'radioKnop');\n    inputTab1.setAttribute('type', 'radio');\n    inputTab1.setAttribute('name', 'tabs');\n    inputTab1.setAttribute('checked', true);\n    const labelTab1 = document.createElement('label');\n    labelTab1.setAttribute('class', 'label');\n    labelTab1.setAttribute('for', 'tab1');\n    labelTab1.textContent = \"About\";\n    const inputTab2 = document.createElement('input');\n    inputTab2.setAttribute('id', 'tab2');\n    inputTab2.setAttribute('class', 'radioKnop');\n    inputTab2.setAttribute('type', 'radio');\n    inputTab2.setAttribute('name', 'tabs');\n    const labelTab2 = document.createElement('label');\n    labelTab2.setAttribute('class', 'label');\n    labelTab2.setAttribute('for', 'tab2');\n    labelTab2.textContent = \"Menu\";\n    const inputTab3 = document.createElement('input');\n    inputTab3.setAttribute('id', 'tab3');\n    inputTab3.setAttribute('class', 'radioKnop');\n    inputTab3.setAttribute('type', 'radio');\n    inputTab3.setAttribute('name', 'tabs');\n    const labelTab3 = document.createElement('label');\n    labelTab3.setAttribute('class', 'label');\n    labelTab3.setAttribute('for', 'tab3');\n    labelTab3.textContent = \"Contact\";\n\n    const titleRest = document.createElement('h1');\n    titleRest.textContent = \"Tommies Restaurant\";\n    const imageRest = document.createElement('img');\n    imageRest.setAttribute('src', '../src/cropped-restaurant-image.jpg');\n    const breakExtra = document.createElement('br');\n    const breakExtraTwo = document.createElement('br');\n    // const someText = document.createElement('p');\n    // someText.textContent = \"Our restaurant is all about tomatoes! It's wonderful! Here, have some more text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\";\n\n    contentDiv.appendChild(titleRest);\n    contentDiv.appendChild(imageRest);\n    contentDiv.appendChild(breakExtra);\n    contentDiv.appendChild(breakExtraTwo);\n    \n    contentDiv.appendChild(inputTab1);\n    contentDiv.appendChild(labelTab1);\n    contentDiv.appendChild(inputTab2);\n    contentDiv.appendChild(labelTab2);\n    contentDiv.appendChild(inputTab3);\n    contentDiv.appendChild(labelTab3);\n    // contentDiv.appendChild(someText);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/pageLoad.js?");

/***/ }),

/***/ "./src/pageTabAbout.js":
/*!*****************************!*\
  !*** ./src/pageTabAbout.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// javascript tab 1\n\nconst aboutTab = () => {\n    const tab = document.querySelector(\"#tab1\");\n\n    if (tab.checked == true) {\n        addText();\n    }\n\n    tab.addEventListener('click', (e) => {\n        removePrevious();\n        addText();\n    })\n\n    function removePrevious() {\n        const contentDiv = document.querySelector(\"#contentTabs\");\n        \n        while (contentDiv.firstChild) {\n            contentDiv.removeChild(contentDiv.firstChild);\n        }\n    }\n\n    function addText() {\n        const contentDiv = document.querySelector(\"#contentTabs\");\n\n        const parToAdd = document.createElement('p');\n        parToAdd.textContent = \"Our restaurant is all about tomatoes! It's wonderful! Here, have some more text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\";\n        \n        contentDiv.appendChild(parToAdd);\n    }\n\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutTab);\n\n//# sourceURL=webpack://restaurant-page/./src/pageTabAbout.js?");

/***/ }),

/***/ "./src/pageTabContact.js":
/*!*******************************!*\
  !*** ./src/pageTabContact.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactTab\": () => (/* binding */ contactTab)\n/* harmony export */ });\n// javascript tab 3\n\nconst contactTab = () => {\n    const tab = document.querySelector(\"#tab3\");\n\n    if (tab.checked == true) {\n        addContact();\n    }\n\n    tab.addEventListener('click', (e) => {\n        removePrevious();\n        addContact();\n    })\n\n    function removePrevious() {\n        const contentDiv = document.querySelector(\"#contentTabs\");\n        \n        while (contentDiv.firstChild) {\n            contentDiv.removeChild(contentDiv.firstChild);\n        }\n    }\n\n    function addContact() {\n        const contentDiv = document.querySelector(\"#contentTabs\");\n\n        const contactPhone = document.createElement('p');\n        contactPhone.textContent = \"phone: 1234567890\";\n        const contactEmail = document.createElement('p');\n        contactEmail.textContent = \"email: abcdefghijk\";\n\n        // contentDiv.appendChild(contactBreak);\n        contentDiv.appendChild(contactPhone);\n        contentDiv.appendChild(contactEmail);\n    }\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/pageTabContact.js?");

/***/ }),

/***/ "./src/pageTabMenu.js":
/*!****************************!*\
  !*** ./src/pageTabMenu.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuTab\": () => (/* binding */ menuTab)\n/* harmony export */ });\n// javascript tab 2\n\nconst menuTab = () => {\n    const tab = document.querySelector(\"#tab2\");\n\n    if (tab.checked == true) {\n        addMenu();\n    }\n\n    tab.addEventListener('click', (e) => {\n        removePrevious();\n        addMenu();\n    })\n\n    function removePrevious() {\n        const contentDiv = document.querySelector(\"#contentTabs\");\n        \n        while (contentDiv.firstChild) {\n            contentDiv.removeChild(contentDiv.firstChild);\n        }\n    }\n\n    function addMenu() {\n        const contentDiv = document.querySelector(\"#contentTabs\");\n\n        const menu = document.createElement('p');\n        menu.textContent = \"The menu:\";\n        const menuList = document.createElement('ul');\n        const courseOne = document.createElement('li');\n        courseOne.textContent = \"Tomatoes with garlic and butter.\";\n        const courseTwo = document.createElement('li');\n        courseTwo.textContent = \"Fried tomatoes with fatty noodles.\";\n        const courseThree = document.createElement('li');\n        courseThree.textContent = \"Pulled pork with tomatoe stuffing(...).\";\n\n        menuList.appendChild(courseOne);\n        menuList.appendChild(courseTwo);\n        menuList.appendChild(courseThree);\n\n        contentDiv.appendChild(menu);\n        contentDiv.appendChild(menuList);\n    }\n\n\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/pageTabMenu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;