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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/es/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/es/Car.js":
/*!***********************!*\
  !*** ./src/es/Car.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Car; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/es/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Car =
/*#__PURE__*/
function () {
  function Car(x, y, width, height) {
    _classCallCheck(this, Car);

    this.pos = {
      x: x,
      y: y
    }, this.width = width, this.height = height;
  }

  _createClass(Car, [{
    key: "show",
    value: function show() {
      _index__WEBPACK_IMPORTED_MODULE_0__["display"].drawObject(this.pos.x, this.pos.y, this.width, this.height);
    }
  }]);

  return Car;
}();



/***/ }),

/***/ "./src/es/Controller.js":
/*!******************************!*\
  !*** ./src/es/Controller.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Controller; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/es/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Controller =
/*#__PURE__*/
function () {
  function Controller() {
    _classCallCheck(this, Controller);

    this.isKeyPressed = false;
    this.isKeyReleased = true;
  }

  _createClass(Controller, [{
    key: "keyPressed",
    value: function keyPressed(e) {
      // console.log(e.keyCode);
      switch (e.keyCode) {
        case 13:
          Object(_index__WEBPACK_IMPORTED_MODULE_0__["start"])();
          break;

        case 65:
          _index__WEBPACK_IMPORTED_MODULE_0__["game"].world.moveCar(-1);
          break;

        case 68:
          _index__WEBPACK_IMPORTED_MODULE_0__["game"].world.moveCar(1);
          break;
      }
    }
  }, {
    key: "keyReleased",
    value: function keyReleased(e) {
      switch (e.keyCode) {
        // case 87: game.world.speed = 0; break;
        case 65:
          _index__WEBPACK_IMPORTED_MODULE_0__["game"].world.stopCar();
          break;
      }
    }
  }]);

  return Controller;
}();



/***/ }),

/***/ "./src/es/Display.js":
/*!***************************!*\
  !*** ./src/es/Display.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Display; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Display =
/*#__PURE__*/
function () {
  function Display() {
    _classCallCheck(this, Display);

    this.canvas = document.createElement('canvas'), this.width = 300, this.height = 600, this.context = this.canvas.getContext('2d');
  }

  _createClass(Display, [{
    key: "createCanvas",
    value: function createCanvas(w, h) {
      var body = document.getElementById('body');
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      body.appendChild(this.canvas);
    }
  }, {
    key: "drawObject",
    value: function drawObject(x, y, w, h) {
      this.context.fillStyle = 'red';
      this.context.fillRect(x, y, w, h);
    }
  }]);

  return Display;
}();



/***/ }),

/***/ "./src/es/Game.js":
/*!************************!*\
  !*** ./src/es/Game.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/es/index.js");
/* harmony import */ var _World__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./World */ "./src/es/World.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player */ "./src/es/Player.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Game =
/*#__PURE__*/
function () {
  function Game() {
    _classCallCheck(this, Game);

    this.world = new _World__WEBPACK_IMPORTED_MODULE_1__["default"](), this.player = new _Player__WEBPACK_IMPORTED_MODULE_2__["default"]();
  }

  _createClass(Game, [{
    key: "update",
    value: function update() {
      this.world.update();
    }
  }, {
    key: "start",
    value: function start() {
      this.world.show();
    }
  }]);

  return Game;
}();



/***/ }),

/***/ "./src/es/Player.js":
/*!**************************!*\
  !*** ./src/es/Player.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function Player() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Player1';

  _classCallCheck(this, Player);

  this.name = name, this.health = 1;
};



/***/ }),

/***/ "./src/es/World.js":
/*!*************************!*\
  !*** ./src/es/World.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return World; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/es/index.js");
/* harmony import */ var _Car__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Car */ "./src/es/Car.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var World =
/*#__PURE__*/
function () {
  function World() {
    _classCallCheck(this, World);

    this.roadColor = 'rgb(77,84,92)', this.linesColor = 'rgb(250, 250, 250)', this.lineWidth = 20, this.lineHeight = 100, this.lines = [], this.roadLinesVec = [{
      x: _index__WEBPACK_IMPORTED_MODULE_0__["display"].width / 2 - this.lineWidth / 2,
      y: -200
    }, {
      x: _index__WEBPACK_IMPORTED_MODULE_0__["display"].width / 2 - this.lineWidth / 2,
      y: 0
    }, {
      x: _index__WEBPACK_IMPORTED_MODULE_0__["display"].width / 2 - this.lineWidth / 2,
      y: 200
    }, {
      x: _index__WEBPACK_IMPORTED_MODULE_0__["display"].width / 2 - this.lineWidth / 2,
      y: 400
    }], this.speed = 2, this.playerCarXdir = 0, this.playerCar = new _Car__WEBPACK_IMPORTED_MODULE_1__["default"](20, _index__WEBPACK_IMPORTED_MODULE_0__["display"].height - 120, 80, 100, this.playerCarXdir);
  }

  _createClass(World, [{
    key: "createRoad",
    value: function createRoad() {
      _index__WEBPACK_IMPORTED_MODULE_0__["display"].context.fillStyle = this.roadColor;
      _index__WEBPACK_IMPORTED_MODULE_0__["display"].context.fillRect(0, 0, _index__WEBPACK_IMPORTED_MODULE_0__["display"].width, _index__WEBPACK_IMPORTED_MODULE_0__["display"].height);
    }
  }, {
    key: "createRoadLines",
    value: function createRoadLines() {
      for (var i = 0; i < 4; i++) {
        _index__WEBPACK_IMPORTED_MODULE_0__["display"].context.fillStyle = this.linesColor;
        _index__WEBPACK_IMPORTED_MODULE_0__["display"].context.fillRect(this.roadLinesVec[i].x, this.roadLinesVec[i].y, this.lineWidth, this.lineHeight);
      }
    }
  }, {
    key: "moveCar",
    value: function moveCar(dir) {
      this.playerCarXdir = dir * 4;
    }
  }, {
    key: "stopCar",
    value: function stopCar() {
      this.playerCarXdir = 0;
    }
  }, {
    key: "update",
    value: function update() {
      //move road lines
      this.roadLinesVec[0].y += this.speed;
      this.roadLinesVec[1].y += this.speed;
      this.roadLinesVec[2].y += this.speed;
      this.roadLinesVec[3].y += this.speed; //restore road lines to starting point

      if (this.roadLinesVec[0].y >= _index__WEBPACK_IMPORTED_MODULE_0__["display"].height) {
        this.roadLinesVec[0].y = -this.lineHeight * 2;
      } else if (this.roadLinesVec[1].y >= _index__WEBPACK_IMPORTED_MODULE_0__["display"].height) {
        this.roadLinesVec[1].y = -this.lineHeight * 2;
      } else if (this.roadLinesVec[2].y >= _index__WEBPACK_IMPORTED_MODULE_0__["display"].height) {
        this.roadLinesVec[2].y = -this.lineHeight * 2;
      } else if (this.roadLinesVec[3].y >= _index__WEBPACK_IMPORTED_MODULE_0__["display"].height) {
        this.roadLinesVec[3].y = -this.lineHeight * 2;
      } //Update player car position


      this.playerCar.pos.x += this.playerCarXdir;
    }
  }, {
    key: "show",
    value: function show() {
      this.createRoad();
      this.createRoadLines();
      this.playerCar.show(this.playerCar.pos.x, this.playerCar.pos.y, this.playerCar.width, this.playerCar.height);
    }
  }]);

  return World;
}();



/***/ }),

/***/ "./src/es/index.js":
/*!*************************!*\
  !*** ./src/es/index.js ***!
  \*************************/
/*! exports provided: display, game, controller, start */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "display", function() { return display; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "game", function() { return game; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "controller", function() { return controller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ "./src/sass/style.scss");
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Display */ "./src/es/Display.js");
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Game */ "./src/es/Game.js");
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Controller */ "./src/es/Controller.js");




var display = new _Display__WEBPACK_IMPORTED_MODULE_1__["default"]();
var game = new _Game__WEBPACK_IMPORTED_MODULE_2__["default"]();
var controller = new _Controller__WEBPACK_IMPORTED_MODULE_3__["default"]();

function setup() {
  display.createCanvas(); //intro

  display.context.fillStyle = game.world.roadColor;
  display.context.fillRect(0, 0, display.width, display.height);
  display.context.fillStyle = 'white';
  display.context.font = "20px Arial";
  display.context.fillText("Press Enter to start", 60, display.height / 2);
}

function start() {
  requestAnimationFrame(start);
  display.context.clearRect(0, 0, display.width, display.height);
  game.update();
  game.start();
}
setup();
window.addEventListener('keydown', controller.keyPressed);
window.addEventListener('keyup', controller.keyReleased);

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=main.js.map