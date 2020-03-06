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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/calculator/calculator.js":
/*!**************************************!*\
  !*** ./src/calculator/calculator.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Calculator; });\n/* harmony import */ var _operations_addition_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operations/addition.js */ \"./src/calculator/operations/addition.js\");\n/* harmony import */ var _operations_substraction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operations/substraction.js */ \"./src/calculator/operations/substraction.js\");\n/* harmony import */ var _operations_multiplication_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operations/multiplication.js */ \"./src/calculator/operations/multiplication.js\");\n/* harmony import */ var _operations_division_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operations/division.js */ \"./src/calculator/operations/division.js\");\n\n\n\n\n\nclass Calculator {\n    add(a, b) {\n        let operation = new _operations_addition_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](a, b);\n        return operation.operate();\n    }\n\n    substract(a, b) {\n        let operation = new _operations_substraction_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](a, b);\n        return operation.operate();\n    }\n\n    multiply(a, b) {\n        let operation = new _operations_multiplication_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](a, b);\n        return operation.operate();\n    }\n\n    divide(a, b) {\n        let operation = new _operations_division_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](a, b);\n        return operation.operate();\n    }\n}\n\n//# sourceURL=webpack:///./src/calculator/calculator.js?");

/***/ }),

/***/ "./src/calculator/operations/addition.js":
/*!***********************************************!*\
  !*** ./src/calculator/operations/addition.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Addition; });\n/* harmony import */ var _operation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operation.js */ \"./src/calculator/operations/operation.js\");\n\n\nclass Addition extends _operation_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(a, b) {\n        super(a, b);\n    }\n\n    operate() {\n        return this.a + this.b;\n    }\n}\n\n//# sourceURL=webpack:///./src/calculator/operations/addition.js?");

/***/ }),

/***/ "./src/calculator/operations/division.js":
/*!***********************************************!*\
  !*** ./src/calculator/operations/division.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Division; });\n/* harmony import */ var _operation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operation.js */ \"./src/calculator/operations/operation.js\");\n\n\nclass Division extends _operation_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(a, b) {\n        super(a, b);\n    }\n\n    operate() {\n        return this.a / this.b;\n    }\n}\n\n//# sourceURL=webpack:///./src/calculator/operations/division.js?");

/***/ }),

/***/ "./src/calculator/operations/multiplication.js":
/*!*****************************************************!*\
  !*** ./src/calculator/operations/multiplication.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Multiplication; });\n/* harmony import */ var _operation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operation.js */ \"./src/calculator/operations/operation.js\");\n\n\nclass Multiplication extends _operation_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(a, b) {\n        super(a, b);\n    }\n\n    operate() {\n        return this.a * this.b;\n    }\n}\n\n//# sourceURL=webpack:///./src/calculator/operations/multiplication.js?");

/***/ }),

/***/ "./src/calculator/operations/operation.js":
/*!************************************************!*\
  !*** ./src/calculator/operations/operation.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Operation; });\nclass Operation {\n    constructor(a, b) {\n        this.a = a;\n        this.b = b;\n    }\n\n    operate() {\n        throw new Error(\"This method needs to be implemented by a subclass\");\n    }\n}\n\n//# sourceURL=webpack:///./src/calculator/operations/operation.js?");

/***/ }),

/***/ "./src/calculator/operations/substraction.js":
/*!***************************************************!*\
  !*** ./src/calculator/operations/substraction.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Substraction; });\n/* harmony import */ var _operation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operation.js */ \"./src/calculator/operations/operation.js\");\n\n\nclass Substraction extends _operation_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(a, b) {\n        super(a, b);\n    }\n\n    operate() {\n        return this.a - this.b;\n    }\n}\n\n//# sourceURL=webpack:///./src/calculator/operations/substraction.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _calculator_calculator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculator/calculator.js */ \"./src/calculator/calculator.js\");\n\n\nclass App {\n    constructor() {\n        this.calculator = new _calculator_calculator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n        this.operand1Field = document.getElementById(\"operand_1\");\n        this.operand2Field = document.getElementById(\"operand_2\");\n        this.calculateButton = document.getElementById(\"run_operations\");\n\n        this.additionResultField = document.getElementById(\"addition_result\");\n        this.substractionResultField = document.getElementById(\"substraction_result\");\n        this.multiplicationResultField = document.getElementById(\"multiplication_result\");\n        this.divisionResultField = document.getElementById(\"division_result\");\n    }\n\n    run() {\n        this.calculateButton.addEventListener(\"click\", () => {\n            let operand1 = parseFloat(this.operand1Field.value);\n            let operand2 = parseFloat(this.operand2Field.value);\n\n            this.additionResultField.value = this.calculator.add(operand1, operand2);\n            this.substractionResultField.value = this.calculator.substract(operand1, operand2);\n            this.multiplicationResultField.value = this.calculator.multiply(operand1, operand2);\n            this.divisionResultField.value = this.calculator.divide(operand1, operand2);\n        });\n    }\n}\n\nconsole.log(\"Starting application\");\n\nlet app = new App();\napp.run();\n\nconsole.log(\"Application started\");\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });