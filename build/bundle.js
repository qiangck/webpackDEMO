/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var sub = __webpack_require__(1);
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./main.css\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var app  = document.createElement('div');
	app.innerHTML = '<h1>Hello Worlddddddd</h1>';
	app.appendChild(sub());
	app.setAttribute('class','abc');
	document.body.insertBefore(app,document.body.firstChild);


/***/ },
/* 1 */
/***/ function(module, exports) {

	//我们这里使用CommonJS的风格
	function generateText() {
	  var element = document.createElement('h2');
	  element.innerHTML = "Hello h2 world25";
	  return element;
	}

	module.exports = generateText;

/***/ }
/******/ ]);