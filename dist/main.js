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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _style_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/main.css */ \"./src/style/main.css\");\n/* harmony import */ var _js_draw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/draw */ \"./src/js/draw.js\");\n/* harmony import */ var _js_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/control */ \"./src/js/control.js\");\n/* harmony import */ var _images_scin_0_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/scin/0.png */ \"./src/images/scin/0.png\");\n/* harmony import */ var _images_scin_1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/scin/1.png */ \"./src/images/scin/1.png\");\n/* harmony import */ var _images_scin_2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/scin/2.png */ \"./src/images/scin/2.png\");\n/* harmony import */ var _images_scin_3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/scin/3.png */ \"./src/images/scin/3.png\");\n/* harmony import */ var _images_scin_4_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/scin/4.png */ \"./src/images/scin/4.png\");\n/* harmony import */ var _images_scin_5_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/scin/5.png */ \"./src/images/scin/5.png\");\n/* harmony import */ var _images_scin_6_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/scin/6.png */ \"./src/images/scin/6.png\");\n/* harmony import */ var _images_scin_7_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/scin/7.png */ \"./src/images/scin/7.png\");\n/* harmony import */ var _images_scin_8_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/scin/8.png */ \"./src/images/scin/8.png\");\n/* harmony import */ var _images_scin_9_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/scin/9.png */ \"./src/images/scin/9.png\");\n/* harmony import */ var _images_scin_10_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/scin/10.png */ \"./src/images/scin/10.png\");\n/* harmony import */ var _images_scin_11_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/scin/11.png */ \"./src/images/scin/11.png\");\n/* harmony import */ var _images_scin_12_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./images/scin/12.png */ \"./src/images/scin/12.png\");\n/* harmony import */ var _images_scin_13_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./images/scin/13.png */ \"./src/images/scin/13.png\");\n/* harmony import */ var _images_scin_14_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./images/scin/14.png */ \"./src/images/scin/14.png\");\n/* harmony import */ var _images_scin_15_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./images/scin/15.png */ \"./src/images/scin/15.png\");\n/* harmony import */ var _images_scin_p0_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./images/scin/p0.png */ \"./src/images/scin/p0.png\");\n/* harmony import */ var _images_gun_g0_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./images/gun/g0.png */ \"./src/images/gun/g0.png\");\n/* harmony import */ var _images_gun_g1_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./images/gun/g1.png */ \"./src/images/gun/g1.png\");\n/* harmony import */ var _images_backgrund_b0_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./images/backgrund/b0.png */ \"./src/images/backgrund/b0.png\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://gun/./src/index.js?");

/***/ }),

/***/ "./src/js/cnv.js":
/*!***********************!*\
  !*** ./src/js/cnv.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ctx\": () => (/* binding */ ctx)\n/* harmony export */ });\nconst canvas = document.createElement('canvas');\ncanvas.width = 1300;\ncanvas.height = 600;\nconst ctx = canvas.getContext('2d');\ndocument.body.appendChild(canvas);\n\n//# sourceURL=webpack://gun/./src/js/cnv.js?");

/***/ }),

/***/ "./src/js/control.js":
/*!***************************!*\
  !*** ./src/js/control.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero */ \"./src/js/hero.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/js/player.js\");\n/* harmony import */ var _gun_m14__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gun/m14 */ \"./src/js/gun/m14.js\");\n/* harmony import */ var _dom_id__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom_id */ \"./src/js/dom_id.js\");\n\n\n\n\nlet shot = true;\ndocument.addEventListener('keydown', function (event) {\n  switch (event.code) {\n    case 'KeyW':\n      _player__WEBPACK_IMPORTED_MODULE_1__.player.array[_hero__WEBPACK_IMPORTED_MODULE_0__.hero.index].up = true;\n      break;\n\n    case 'KeyS':\n      _player__WEBPACK_IMPORTED_MODULE_1__.player.array[_hero__WEBPACK_IMPORTED_MODULE_0__.hero.index].down = true;\n      break;\n\n    case 'KeyA':\n      _player__WEBPACK_IMPORTED_MODULE_1__.player.array[_hero__WEBPACK_IMPORTED_MODULE_0__.hero.index].left = true;\n      break;\n\n    case 'KeyD':\n      _player__WEBPACK_IMPORTED_MODULE_1__.player.array[_hero__WEBPACK_IMPORTED_MODULE_0__.hero.index].right = true;\n      break;\n  }\n\n  if (event.code === 'KeyF' && shot) {\n    _gun_m14__WEBPACK_IMPORTED_MODULE_2__.m14.array[_player__WEBPACK_IMPORTED_MODULE_1__.player.array[_hero__WEBPACK_IMPORTED_MODULE_0__.hero.index].gun].shot();\n    shot = false;\n  }\n});\ndocument.addEventListener('keyup', function (e) {\n  switch (e.code) {\n    case 'KeyW':\n      _player__WEBPACK_IMPORTED_MODULE_1__.player.array[_hero__WEBPACK_IMPORTED_MODULE_0__.hero.index].up = false;\n      break;\n\n    case 'KeyS':\n      _player__WEBPACK_IMPORTED_MODULE_1__.player.array[_hero__WEBPACK_IMPORTED_MODULE_0__.hero.index].down = false;\n      break;\n\n    case 'KeyA':\n      _player__WEBPACK_IMPORTED_MODULE_1__.player.array[_hero__WEBPACK_IMPORTED_MODULE_0__.hero.index].left = false;\n      break;\n\n    case 'KeyD':\n      _player__WEBPACK_IMPORTED_MODULE_1__.player.array[_hero__WEBPACK_IMPORTED_MODULE_0__.hero.index].right = false;\n      break;\n\n    case 'KeyQ':\n      _dom_id__WEBPACK_IMPORTED_MODULE_3__.dom_id.menu.style.display = 'block';\n      break;\n  }\n\n  if (event.code === 'KeyF') {\n    shot = true;\n  }\n});\n\n//# sourceURL=webpack://gun/./src/js/control.js?");

/***/ }),

/***/ "./src/js/dom_id.js":
/*!**************************!*\
  !*** ./src/js/dom_id.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dom_id\": () => (/* binding */ dom_id)\n/* harmony export */ });\nconst dom_id = {\n  menu: document.getElementById('menu'),\n  image: document.getElementById('img'),\n  menu2: document.getElementById('menu2')\n};\n\n//# sourceURL=webpack://gun/./src/js/dom_id.js?");

/***/ }),

/***/ "./src/js/draw.js":
/*!************************!*\
  !*** ./src/js/draw.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero */ \"./src/js/hero.js\");\n/* harmony import */ var _cnv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cnv */ \"./src/js/cnv.js\");\n/* harmony import */ var _fun_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fun_dom */ \"./src/js/fun_dom.js\");\n/* harmony import */ var _local__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local */ \"./src/js/local.js\");\n/* harmony import */ var _gun_m14__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gun/m14 */ \"./src/js/gun/m14.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player */ \"./src/js/player.js\");\n/* harmony import */ var _gun_weapon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gun/weapon */ \"./src/js/gun/weapon.js\");\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images */ \"./src/js/images.js\");\n\n\n\n\n\n\n\n\n_fun_dom__WEBPACK_IMPORTED_MODULE_2__.fun_dom.check();\n_hero__WEBPACK_IMPORTED_MODULE_0__.hero.check();\n\nfunction draw() {\n  _cnv__WEBPACK_IMPORTED_MODULE_1__.ctx.clearRect(0, 0, 1300, 600);\n  (0,_local__WEBPACK_IMPORTED_MODULE_3__.localStorageReturn)();\n  _cnv__WEBPACK_IMPORTED_MODULE_1__.ctx.beginPath();\n  _cnv__WEBPACK_IMPORTED_MODULE_1__.ctx.fillStyle = 'green';\n  _cnv__WEBPACK_IMPORTED_MODULE_1__.ctx.fillRect(0, 0, 1000, 600);\n  _cnv__WEBPACK_IMPORTED_MODULE_1__.ctx.drawImage(_images__WEBPACK_IMPORTED_MODULE_7__.backgrund[0], 0, 0, 500, 500);\n  _player__WEBPACK_IMPORTED_MODULE_5__.player.draw();\n  _gun_weapon__WEBPACK_IMPORTED_MODULE_6__.weapon.draw();\n  _gun_m14__WEBPACK_IMPORTED_MODULE_4__.m14.draw();\n  _hero__WEBPACK_IMPORTED_MODULE_0__.hero.checkScin();\n  _gun_m14__WEBPACK_IMPORTED_MODULE_4__.m14.give();\n}\n\nsetInterval(draw, 25);\n\n//# sourceURL=webpack://gun/./src/js/draw.js?");

/***/ }),

/***/ "./src/js/fun_dom.js":
/*!***************************!*\
  !*** ./src/js/fun_dom.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fun_dom\": () => (/* binding */ fun_dom)\n/* harmony export */ });\n/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero */ \"./src/js/hero.js\");\n/* harmony import */ var _gun_m14__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gun/m14 */ \"./src/js/gun/m14.js\");\n\n\nconst fun_dom = {\n  get_id: {\n    complete: document.getElementById(\"button_complete\")\n  },\n\n  check() {\n    this.get_id.complete.addEventListener('click', event => {\n      const text = document.getElementById('text').value;\n      _hero__WEBPACK_IMPORTED_MODULE_0__.hero.array[0] = new _hero__WEBPACK_IMPORTED_MODULE_0__.Hero(text, _hero__WEBPACK_IMPORTED_MODULE_0__.range, 0, _hero__WEBPACK_IMPORTED_MODULE_0__.who_value);\n      _hero__WEBPACK_IMPORTED_MODULE_0__.hero.array[0].play();\n      _gun_m14__WEBPACK_IMPORTED_MODULE_1__.m14.array[0] = new _gun_m14__WEBPACK_IMPORTED_MODULE_1__.M14(500, 500, 0);\n      _gun_m14__WEBPACK_IMPORTED_MODULE_1__.m14.array[1] = new _gun_m14__WEBPACK_IMPORTED_MODULE_1__.M14(500, 400, 1);\n      _gun_m14__WEBPACK_IMPORTED_MODULE_1__.m14.array[2] = new _gun_m14__WEBPACK_IMPORTED_MODULE_1__.M14(500, 300, 2);\n      _gun_m14__WEBPACK_IMPORTED_MODULE_1__.m14.array[3] = new _gun_m14__WEBPACK_IMPORTED_MODULE_1__.M14(500, 200, 3);\n    });\n  }\n\n};\n\n//# sourceURL=webpack://gun/./src/js/fun_dom.js?");

/***/ }),

/***/ "./src/js/gun/m14.js":
/*!***************************!*\
  !*** ./src/js/gun/m14.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"M14\": () => (/* binding */ M14),\n/* harmony export */   \"m14\": () => (/* binding */ m14)\n/* harmony export */ });\n/* harmony import */ var _weapon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weapon */ \"./src/js/gun/weapon.js\");\n/* harmony import */ var _cnv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cnv */ \"./src/js/cnv.js\");\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images */ \"./src/js/images.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../player */ \"./src/js/player.js\");\n\n\n\n\nclass M14 {\n  constructor(x, y, index) {\n    this.x = x;\n    this.y = y;\n    this.x2 = y;\n    this.y2 = x;\n    this.index = index;\n    this.who = 0;\n    this.amount = 10;\n    this.have = false;\n  }\n\n  draw() {\n    if (this.have) {\n      this.x = _player__WEBPACK_IMPORTED_MODULE_3__.player.array[this.player].x;\n      this.y = _player__WEBPACK_IMPORTED_MODULE_3__.player.array[this.player].y + 60;\n    }\n\n    _cnv__WEBPACK_IMPORTED_MODULE_1__.ctx.drawImage(_images__WEBPACK_IMPORTED_MODULE_2__.gunImage[this.who], this.x, this.y, 70, 20);\n  }\n\n  give() {\n    if (this.have) return;\n\n    for (let i = 0; i < _player__WEBPACK_IMPORTED_MODULE_3__.player.array.length; i++) {\n      const p = _player__WEBPACK_IMPORTED_MODULE_3__.player.array[i];\n\n      if (this.x >= p.x && this.x <= p.x2 && this.y >= p.y && this.y <= p.y2 && p.gun === null) {\n        this.player = p.index;\n        p.gun = this.index;\n        p.have = true;\n        this.have = true;\n        if (p.who === 'prisoners') this.who = 0;else this.who = 1;\n      }\n    }\n  }\n\n  shot() {\n    if (this.who === 0) {\n      this.xWeapon = this.x + 60;\n      this.yWeapon = this.y + 3;\n    } else {\n      this.xWeapon = this.x;\n      this.yWeapon = this.y + 3;\n    }\n\n    if (this.amount > 0) {\n      _weapon__WEBPACK_IMPORTED_MODULE_0__.weapon.array[_weapon__WEBPACK_IMPORTED_MODULE_0__.weapon.number] = new _weapon__WEBPACK_IMPORTED_MODULE_0__.Weapon(this.xWeapon, this.yWeapon, 50, _player__WEBPACK_IMPORTED_MODULE_3__.player.array[this.player].position);\n    }\n\n    _weapon__WEBPACK_IMPORTED_MODULE_0__.weapon.number++;\n  }\n\n}\nconst m14 = {\n  array: [],\n  number: 0,\n\n  draw() {\n    for (let i = 0; i < this.array.length; i++) {\n      this.array[i].draw();\n    }\n  },\n\n  give() {\n    for (let i = 0; i < this.array.length; i++) {\n      this.array[i].give();\n    }\n  }\n\n};\nm14.array[0] = new M14(500, 500, 0);\nm14.array[1] = new M14(500, 400, 1);\nm14.array[2] = new M14(500, 300, 2);\nm14.array[3] = new M14(500, 200, 3);\n\n//# sourceURL=webpack://gun/./src/js/gun/m14.js?");

/***/ }),

/***/ "./src/js/gun/weapon.js":
/*!******************************!*\
  !*** ./src/js/gun/weapon.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Weapon\": () => (/* binding */ Weapon),\n/* harmony export */   \"weapon\": () => (/* binding */ weapon)\n/* harmony export */ });\n/* harmony import */ var _cnv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cnv */ \"./src/js/cnv.js\");\n\nclass Weapon {\n  constructor(x, y, speed, position) {\n    this.x = x;\n    this.y = y;\n    this.speed = speed;\n    this.xRight = this.x + 10000;\n    this.xLeft = this.x - 10000;\n    this.position = position;\n  }\n\n  check() {\n    switch (this.position) {\n      case 'left':\n        if (this.x > this.xLeft) this.x -= this.speed;\n        break;\n\n      case 'right':\n        if (this.x < this.xRight) this.x += this.speed;\n        break;\n    }\n  }\n\n  draw() {\n    _cnv__WEBPACK_IMPORTED_MODULE_0__.ctx.beginPath();\n    _cnv__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = 'black';\n    _cnv__WEBPACK_IMPORTED_MODULE_0__.ctx.fillRect(this.x, this.y, 10, 4);\n  }\n\n}\nconst weapon = {\n  array: [],\n  number: 0,\n\n  draw() {\n    for (let i = 0; i < this.array.length; i++) {\n      this.array[i].draw();\n      this.array[i].check();\n    }\n  }\n\n};\n\n//# sourceURL=webpack://gun/./src/js/gun/weapon.js?");

/***/ }),

/***/ "./src/js/hero.js":
/*!************************!*\
  !*** ./src/js/hero.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"range\": () => (/* binding */ range),\n/* harmony export */   \"who_value\": () => (/* binding */ who_value),\n/* harmony export */   \"hero\": () => (/* binding */ hero),\n/* harmony export */   \"Hero\": () => (/* binding */ Hero)\n/* harmony export */ });\n/* harmony import */ var _dom_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_id */ \"./src/js/dom_id.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/js/player.js\");\n\n\nlet range = document.getElementById('range').value;\nlet who_value;\nconst hero = {\n  array: [],\n  number: 0,\n  index: 0,\n\n  checkScin() {\n    if (document.getElementById('r1').checked) {\n      who_value = document.getElementById('r1').value;\n    }\n\n    if (document.getElementById('r2').checked) {\n      who_value = document.getElementById('r2').value;\n    }\n\n    range = document.getElementById('range').value;\n    const range1 = document.getElementById('range');\n\n    if (who_value === 'prisoners') {\n      _dom_id__WEBPACK_IMPORTED_MODULE_0__.dom_id.image.src = 'images/' + range + '.png';\n      range1.max = 14;\n    } else {\n      _dom_id__WEBPACK_IMPORTED_MODULE_0__.dom_id.image.src = 'images/p' + range + '.png';\n      range1.max = 0;\n    }\n  },\n\n  check() {\n    for (let i = 0; i < this.array.length; i++) {\n      this.array[i].check();\n    }\n  }\n\n};\nclass Hero {\n  constructor(name, scin, index, who) {\n    this.name = name;\n    this.scin = scin;\n    this.index = index;\n    this.player = null;\n    this.who = who;\n  }\n\n  play() {\n    _player__WEBPACK_IMPORTED_MODULE_1__.player.array[0] = new _player__WEBPACK_IMPORTED_MODULE_1__.Player(this.scin, this.name, 0, this.who);\n    hero.index = 0;\n    _dom_id__WEBPACK_IMPORTED_MODULE_0__.dom_id.menu.style.display = 'none';\n  }\n\n  check() {\n    this.buttonID.addEventListener('click', event => {\n      this.play();\n    });\n  }\n\n}\n\n//# sourceURL=webpack://gun/./src/js/hero.js?");

/***/ }),

/***/ "./src/js/images.js":
/*!**************************!*\
  !*** ./src/js/images.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scin\": () => (/* binding */ scin),\n/* harmony export */   \"scinPolice\": () => (/* binding */ scinPolice),\n/* harmony export */   \"gunImage\": () => (/* binding */ gunImage),\n/* harmony export */   \"backgrund\": () => (/* binding */ backgrund)\n/* harmony export */ });\nconst scin = [new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image()];\n\nfor (let i = 0; i < scin.length; i++) {\n  scin[i].src = 'images/' + i + '.png';\n}\n\nconst scinPolice = [new Image()];\n\nfor (let i = 0; i < scinPolice.length; i++) {\n  scinPolice[i].src = 'images/p' + i + '.png';\n}\n\nconst gunImage = [new Image(), new Image()\n/*new Image()*/\n];\n\nfor (let i = 0; i < gunImage.length; i++) {\n  gunImage[i].src = 'images/g' + i + '.png';\n}\n\nconst backgrund = [new Image()\n/*, new Image(), new Image()*/\n];\n\nfor (let i = 0; i < backgrund.length; i++) {\n  backgrund[i].src = 'images/b' + i + '.png';\n}\n\n//# sourceURL=webpack://gun/./src/js/images.js?");

/***/ }),

/***/ "./src/js/local.js":
/*!*************************!*\
  !*** ./src/js/local.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"localStorageReturn\": () => (/* binding */ localStorageReturn)\n/* harmony export */ });\nconst raw = localStorage.getItem(\"gunshot_player\"),\n      person = JSON.parse(raw);\nlocalStorage.clear();\n\nif (localStorage.getItem(\"gunshot_player\")) {}\n\nfunction localStorageReturn() {\n  let storage = {};\n  localStorage.setItem(\"gunshot_player\", JSON.stringify(storage));\n}\n\n//# sourceURL=webpack://gun/./src/js/local.js?");

/***/ }),

/***/ "./src/js/player.js":
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player),\n/* harmony export */   \"player\": () => (/* binding */ player)\n/* harmony export */ });\n/* harmony import */ var _cnv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cnv */ \"./src/js/cnv.js\");\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images */ \"./src/js/images.js\");\n\n\nconst speed = 10;\nclass Player {\n  constructor(scin, name, index, who) {\n    this.scin = scin;\n    this.name = name;\n    this.index = index;\n    this.who = who;\n    this.up = false;\n    this.down = false;\n    this.left = false;\n    this.right = false;\n    this.gun = null;\n\n    if (this.who === 'prisoners') {\n      this.x = 0;\n      this.y = 0;\n    } else {\n      this.x = 900;\n      this.y = 0;\n    }\n  }\n\n  check() {\n    if (this.who === 'prisoners') this.position = 'right';else this.position = 'left';\n    if (this.up) this.y -= speed;\n    if (this.down) this.y += speed;\n    if (this.left) this.x -= speed;\n    if (this.right) this.x += speed;\n  }\n\n  draw() {\n    this.x2 = this.x + 100;\n    this.y2 = this.y + 100;\n    _cnv__WEBPACK_IMPORTED_MODULE_0__.ctx.font = \"25px serif\";\n    _cnv__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = \"black\";\n    _cnv__WEBPACK_IMPORTED_MODULE_0__.ctx.fillText(this.name, this.x + 20, this.y + 10);\n    if (this.who === 'prisoners') _cnv__WEBPACK_IMPORTED_MODULE_0__.ctx.drawImage(_images__WEBPACK_IMPORTED_MODULE_1__.scin[this.scin], this.x, this.y, 100, 100);else _cnv__WEBPACK_IMPORTED_MODULE_0__.ctx.drawImage(_images__WEBPACK_IMPORTED_MODULE_1__.scinPolice[this.scin], this.x, this.y, 100, 100);\n  }\n\n}\nconst player = {\n  array: [],\n  number: 0,\n\n  draw() {\n    for (let i = 0; i < this.array.length; i++) {\n      this.array[i].draw();\n      this.array[i].check();\n    }\n  }\n\n};\n\n//# sourceURL=webpack://gun/./src/js/player.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"index.html\");\n\n//# sourceURL=webpack://gun/./src/index.html?");

/***/ }),

/***/ "./src/images/backgrund/b0.png":
/*!*************************************!*\
  !*** ./src/images/backgrund/b0.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/b0.png\");\n\n//# sourceURL=webpack://gun/./src/images/backgrund/b0.png?");

/***/ }),

/***/ "./src/images/gun/g0.png":
/*!*******************************!*\
  !*** ./src/images/gun/g0.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/g0.png\");\n\n//# sourceURL=webpack://gun/./src/images/gun/g0.png?");

/***/ }),

/***/ "./src/images/gun/g1.png":
/*!*******************************!*\
  !*** ./src/images/gun/g1.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/g1.png\");\n\n//# sourceURL=webpack://gun/./src/images/gun/g1.png?");

/***/ }),

/***/ "./src/images/scin/0.png":
/*!*******************************!*\
  !*** ./src/images/scin/0.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/0.png\");\n\n//# sourceURL=webpack://gun/./src/images/scin/0.png?");

/***/ }),

/***/ "./src/images/scin/1.png":
/*!*******************************!*\
  !*** ./src/images/scin/1.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/1.png\");\n\n//# sourceURL=webpack://gun/./src/images/scin/1.png?");

/***/ }),

/***/ "./src/images/scin/10.png":
/*!********************************!*\
  !*** ./src/images/scin/10.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/10.png\");\n\n//# sourceURL=webpack://gun/./src/images/scin/10.png?");

/***/ }),

/***/ "./src/images/scin/11.png":
/*!********************************!*\
  !*** ./src/images/scin/11.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/11.png\");\n\n//# sourceURL=webpack://gun/./src/images/scin/11.png?");

/***/ }),

/***/ "./src/images/scin/12.png":
/*!********************************!*\
  !*** ./src/images/scin/12.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/12.png\");\n\n//# sourceURL=webpack://gun/./src/images/scin/12.png?");

/***/ }),

/***/ "./src/images/scin/13.png":
/*!********************************!*\
  !*** ./src/images/scin/13.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/13.png\");\n\n//# sourceURL=webpack://gun/./src/images/scin/13.png?");

/***/ }),

/***/ "./src/images/scin/14.png":
/*!********************************!*\
  !*** ./src/images/scin/14.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/14.png\");\n\n//# sourceURL=webpack://gun/./src/images/scin/14.png?");

/***/ }),

/***/ "./src/images/scin/15.png":
/*!********************************!*\
  !*** ./src/images/scin/15.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/15.png\");\n\n//# sourceURL=webpack://gun/./src/images/scin/15.png?");

/***/ }),

/***/ "./src/images/scin/2.png":
/*!*******************************!*\
  !*** ./src/images/scin/2.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/2.png\");\n\n//# sourceURL=webpack://gun/./src/images/scin/2.png?");

/***/ }),

/***/ "./src/images/scin/3.png":
/*!*******************************!*\
  !*** ./src/images/scin/3.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/3.png\");\n\n//# sourceURL=webpack://gun/./src/images/scin/3.png?");

/***/ }),

/***/ "./src/images/scin/4.png":
/*!*******************************!*\
  !*** ./src/images/scin/4.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/4.png\");\n\n//# sourceURL=webpack://gun/./src/images/scin/4.png?");

/***/ }),

/***/ "./src/images/scin/5.png":
/*!*******************************!*\
  !*** ./src/images/scin/5.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/5.png\");\n\n//# sourceURL=webpack://gun/./src/images/scin/5.png?");

/***/ }),

/***/ "./src/images/scin/6.png":
/*!*******************************!*\
  !*** ./src/images/scin/6.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/6.png\");\n\n//# sourceURL=webpack://gun/./src/images/scin/6.png?");

/***/ }),

/***/ "./src/images/scin/7.png":
/*!*******************************!*\
  !*** ./src/images/scin/7.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/7.png\");\n\n//# sourceURL=webpack://gun/./src/images/scin/7.png?");

/***/ }),

/***/ "./src/images/scin/8.png":
/*!*******************************!*\
  !*** ./src/images/scin/8.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/8.png\");\n\n//# sourceURL=webpack://gun/./src/images/scin/8.png?");

/***/ }),

/***/ "./src/images/scin/9.png":
/*!*******************************!*\
  !*** ./src/images/scin/9.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/9.png\");\n\n//# sourceURL=webpack://gun/./src/images/scin/9.png?");

/***/ }),

/***/ "./src/images/scin/p0.png":
/*!********************************!*\
  !*** ./src/images/scin/p0.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/p0.png\");\n\n//# sourceURL=webpack://gun/./src/images/scin/p0.png?");

/***/ }),

/***/ "./src/style/main.css":
/*!****************************!*\
  !*** ./src/style/main.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://gun/./src/style/main.css?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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