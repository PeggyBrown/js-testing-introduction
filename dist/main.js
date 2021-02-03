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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { checkAndGenerate, createElement } = __webpack_require__(/*! ./util */ \"./util.js\");\r\n\r\nconst initApp = () => {\r\n  // Initializes the app, registers the button click listener\r\n  const newUserButton = document.querySelector('#btnAddUser');\r\n  newUserButton.addEventListener('click', addUser);\r\n};\r\n\r\nconst addUser = () => {\r\n  // Fetches the user input, creates a new HTML element based on it\r\n  // and appends the element to the DOM\r\n  const newUserNameInput = document.querySelector('input#name');\r\n  const newUserAgeInput = document.querySelector('input#age');\r\n\r\n  const outputText = checkAndGenerate(\r\n      newUserNameInput.value,\r\n      newUserAgeInput.value\r\n  );\r\n\r\n  if (!outputText) {\r\n    return;\r\n  }\r\n\r\n  const userList = document.querySelector('.user-list');\r\n\r\n  const element = createElement('li', outputText, 'user-item');\r\n  userList.appendChild(element);\r\n};\r\n\r\n// Start the app!\r\ninitApp();\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./util.js":
/*!*****************!*\
  !*** ./util.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const generateText = (name, age) => {\r\n  // Returns output text\r\n  return `${name} (${age} years old)`;\r\n};\r\n\r\nexports.createElement = (type, text, className) => {\r\n  // Creates a new HTML element and returns it\r\n  const newElement = document.createElement(type);\r\n  newElement.classList.add(className);\r\n  newElement.textContent = text;\r\n  return newElement;\r\n};\r\n\r\nconst validateInput = (text, notEmpty, isNumber) => {\r\n  // Validate user input with two pre-defined rules\r\n  if (!text) {\r\n    return false;\r\n  }\r\n  if (notEmpty && text.trim().length === 0) {\r\n    return false;\r\n  }\r\n  if (isNumber && +text === NaN) {\r\n    return false;\r\n  }\r\n  return true;\r\n};\r\n\r\nexports.checkAndGenerate = (name, age) => {\r\n  if (!validateInput(name, true, false) || !validateInput(age, false, true)) {\r\n    return false;\r\n  }\r\n  return generateText(name, age);\r\n};\r\n\r\nexports.generateText = generateText;\r\nexports.validateInput = validateInput;\n\n//# sourceURL=webpack:///./util.js?");

/***/ })

/******/ });