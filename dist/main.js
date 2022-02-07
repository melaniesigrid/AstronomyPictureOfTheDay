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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/nasalization-cufonfonts-webfont/nasalization rg.woff */ \"./src/assets/nasalization-cufonfonts-webfont/nasalization rg.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/Helvetica-Font/Helvetica.ttf */ \"./src/assets/Helvetica-Font/Helvetica.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\r\\n  font-family: \\\"Nasalization\\\";\\r\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n}\\r\\n\\r\\n@font-face {\\r\\n  font-family: \\\"Helvetica\\\";\\r\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format(\\\"truetype\\\");\\r\\n}\\r\\n\\r\\n:root {\\r\\n  --light-violet: #be9ce7;\\r\\n  --dark-violet: #9f5eee;\\r\\n  --dark-background: #18161e;\\r\\n  --light-background: #1b1a27;\\r\\n  --custom-red: #eb3f5e;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n  font-family: \\\"Helvetica\\\", sans-serif;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.app-container {\\r\\n  width: 100%;\\r\\n  height: 100vh;\\r\\n  overflow: hidden;\\r\\n  box-sizing: border-box;\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr;\\r\\n  grid-template-rows: auto auto 1fr auto auto;\\r\\n  grid-template-areas:\\r\\n    \\\"top-decoration\\\"\\r\\n    \\\"header\\\"\\r\\n    \\\"main\\\"\\r\\n    \\\"footer\\\";\\r\\n  border: 4px solid var(--light-violet);\\r\\n  background-color: var(--dark-background);\\r\\n}\\r\\n\\r\\n.browser {\\r\\n  grid-area: top-decoration;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  text-align: center;\\r\\n  border-bottom: 4px solid var(--light-violet);\\r\\n}\\r\\n\\r\\n.browser-navigation {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-around;\\r\\n  align-items: center;\\r\\n  padding: 1.5vh 30px;\\r\\n}\\r\\n\\r\\n.browser-navigation img {\\r\\n  width: auto;\\r\\n  height: 43px;\\r\\n}\\r\\n\\r\\n.address-bar {\\r\\n  text-align: left;\\r\\n  box-sizing: border-box;\\r\\n  margin-bottom: 1vh;\\r\\n  padding: 8px;\\r\\n  width: 60vw;\\r\\n  height: 40px;\\r\\n  border: 4px solid var(--light-violet);\\r\\n  background-color: var(--dark-background);\\r\\n  color: var(--light-violet);\\r\\n  font-weight: bold;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n#address {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  background-color: var(--light-background);\\r\\n  grid-area: header;\\r\\n  margin: 15px 20px;\\r\\n  padding: 5px 0 5px 40px;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  border: 3px solid var(--light-violet);\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n.web-title {\\r\\n  font-family: \\\"Nasalization\\\", sans-serif;\\r\\n  font-size: 2.7rem;\\r\\n  margin: 0 0;\\r\\n  color: var(--custom-red);\\r\\n}\\r\\n\\r\\n.content {\\r\\n  grid-area: main;\\r\\n  overflow-y: auto;\\r\\n  margin: 0 5vw;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  text-align: center;\\r\\n  font-family: \\\"Nasalization\\\", sans-serif;\\r\\n  font-size: 2.5rem;\\r\\n  margin-bottom: 3vw;\\r\\n}\\r\\n\\r\\n.title-link {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.title-link:hover {\\r\\n  color: var(--light-violet);\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.item-grid {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 1fr 1fr;\\r\\n  justify-items: center;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  border: 3px solid #fff;\\r\\n  border-radius: 15px;\\r\\n  width: 25vw;\\r\\n  margin-bottom: 8vh;\\r\\n  animation-name: out;\\r\\n  transition: ease-in-out 0.4s;\\r\\n}\\r\\n\\r\\n.card:hover {\\r\\n  border-color: var(--dark-violet);\\r\\n  transform: scale(1.05);\\r\\n  transition: ease-in-out 0.4s;\\r\\n  animation-name: in;\\r\\n}\\r\\n\\r\\n@keyframes in {\\r\\n  from {transform: scale(1);}\\r\\n  to {transform: scale(1.02);}\\r\\n}\\r\\n\\r\\n@keyframes out {\\r\\n  from {transform: scale(1.05);}\\r\\n  to {transform: scale(1);}\\r\\n}\\r\\n\\r\\n.picture {\\r\\n  width: 20vw;\\r\\n  height: 15vw;\\r\\n  border-radius: 15px;\\r\\n  object-fit: cover;\\r\\n  margin-top: 5vh;\\r\\n}\\r\\n\\r\\n.picture:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.video {\\r\\n  width: 20vw;\\r\\n  height: 15vw;\\r\\n  border-radius: 15px;\\r\\n  margin-top: 5vh;\\r\\n}\\r\\n\\r\\n.title-container {\\r\\n  width: 18vw;\\r\\n  text-align: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.card-title {\\r\\n  font-size: 1.4rem;\\r\\n}\\r\\n\\r\\n.card-title:hover {\\r\\n  color: var(--light-violet);\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.content-container {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  width: 18vw;\\r\\n  margin-bottom: 3vh;\\r\\n}\\r\\n\\r\\n.likes-container {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.comment-btn {\\r\\n  color: #fff;\\r\\n  background-color: var(--dark-background);\\r\\n  border: 3px solid #fff;\\r\\n  font-family: \\\"Helvetica\\\", sans-serif;\\r\\n  font-weight: bold;\\r\\n  font-size: 1.2rem;\\r\\n}\\r\\n\\r\\n.comment-btn:hover {\\r\\n  color: var(--light-violet);\\r\\n  border-color: var(--light-violet);\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.fa-heart {\\r\\n  margin-right: 15px;\\r\\n  font-size: 1.3rem;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.fa-heart:hover {\\r\\n  cursor: pointer;\\r\\n  color: var(--custom-red);\\r\\n}\\r\\n\\r\\n.hearted {\\r\\n  color: var(--custom-red);\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  grid-area: footer;\\r\\n  border: 3px solid var(--light-violet);\\r\\n  height: 50px;\\r\\n  margin: 15px 20px 15px 20px;\\r\\n  padding-left: 20px;\\r\\n  background-color: var(--light-background);\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 1200px) {\\r\\n  .browser-navigation img {\\r\\n    display: none;\\r\\n  }\\r\\n}\\r\\n\\r\\n* {\\r\\n  color: #ebebeb;\\r\\n}\\r\\n\\r\\nsection {\\r\\n  margin-bottom: 100px;\\r\\n}\\r\\n\\r\\nheader p {\\r\\n  font-size: 1.2rem;\\r\\n}\\r\\n\\r\\nnav ul li {\\r\\n  list-style-type: none;\\r\\n  display: inline;\\r\\n  padding: 0 30px;\\r\\n  font-size: 1.2rem;\\r\\n}\\r\\n\\r\\nnav ul li a {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\na:hover {\\r\\n  color: var(--light-violet);\\r\\n}\\r\\n\\r\\n.active-tab {\\r\\n  color: rgb(255, 208, 0);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesForComment.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesForComment.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".comment-model {\\r\\n  position: fixed;\\r\\n  left: 0;\\r\\n  top: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  overflow: auto;\\r\\n  z-index: -1;\\r\\n  opacity: 0;\\r\\n  animation: hide 0.25s;\\r\\n  transform: scale(0);\\r\\n  backdrop-filter: blur(10px) !important;\\r\\n}\\r\\n\\r\\n@keyframes hide {\\r\\n  from {\\r\\n    z-index: 2;\\r\\n    transform: scale(1);\\r\\n    opacity: 1;\\r\\n  }\\r\\n\\r\\n  to {\\r\\n    z-index: -1;\\r\\n    transform: scale(0);\\r\\n    opacity: 0;\\r\\n  }\\r\\n}\\r\\n\\r\\n.active {\\r\\n  opacity: 1;\\r\\n  z-index: 2;\\r\\n  animation: show 0.2s;\\r\\n  transform: scale(1);\\r\\n}\\r\\n\\r\\n@keyframes show {\\r\\n  from {\\r\\n    transform: scale(0);\\r\\n    opacity: 0;\\r\\n    z-index: -1;\\r\\n  }\\r\\n\\r\\n  to {\\r\\n    transform: scale(1);\\r\\n    opacity: 1;\\r\\n    z-index: 2;\\r\\n  }\\r\\n}\\r\\n\\r\\n.comment-card {\\r\\n  width: 70%;\\r\\n  margin: 3rem auto;\\r\\n  border: 4px solid #be9ce7;\\r\\n  background-color: #111624;\\r\\n  border-radius: 15px;\\r\\n}\\r\\n\\r\\n.close-icon {\\r\\n  float: right;\\r\\n  margin: 10px 18px;\\r\\n  font-size: 2.5rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.close-icon i:hover {\\r\\n  color: red;\\r\\n  transform: scale(1.3);\\r\\n  transition: 0.4s;\\r\\n}\\r\\n\\r\\n.main-description {\\r\\n  padding: 80px 130px;\\r\\n}\\r\\n\\r\\n.mediaImage {\\r\\n  width: 100%;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n.mediaVideo {\\r\\n  width: 100%;\\r\\n  height: 50vh;\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.image-title {\\r\\n  text-align: center;\\r\\n  font-size: 2rem;\\r\\n}\\r\\n\\r\\n.image-explanation {\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n.copyright {\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\n.image-date {\\r\\n  float: right;\\r\\n}\\r\\n\\r\\n.comment-card h2 {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\nform {\\r\\n  width: 50%;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n.name-input {\\r\\n  outline: none;\\r\\n  color: #111624;\\r\\n  font-size: 1rem;\\r\\n  padding: 10px;\\r\\n  border-radius: 5px;\\r\\n  width: 100%;\\r\\n  border: none;\\r\\n  box-sizing: border-box;\\r\\n  background-color: snow;\\r\\n}\\r\\n\\r\\n.comment-input {\\r\\n  width: 100%;\\r\\n  height: 150px;\\r\\n  outline: none;\\r\\n  padding: 10px;\\r\\n  color: #111624;\\r\\n  border: none;\\r\\n  border-radius: 5px;\\r\\n  font-size: 1rem;\\r\\n  font-family: inherit;\\r\\n  resize: none;\\r\\n  margin: 25px 0;\\r\\n  box-sizing: border-box;\\r\\n  background-color: snow;\\r\\n}\\r\\n\\r\\nform button {\\r\\n  width: 100%;\\r\\n  background-color: #3ac4;\\r\\n  border: none;\\r\\n  font-size: 1.2rem;\\r\\n  padding: 10px;\\r\\n  border-radius: 5px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nform button:hover {\\r\\n  background-color: rgba(64, 214, 255, 0.527);\\r\\n}\\r\\n\\r\\n.comment-message {\\r\\n  margin: 20px auto;\\r\\n  display: block;\\r\\n  padding: 10px 20px;\\r\\n  font-size: 1.5rem;\\r\\n  color: black;\\r\\n  width: 200px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./src/stylesForComment.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./src/style.css?");

/***/ }),

/***/ "./src/stylesForComment.css":
/*!**********************************!*\
  !*** ./src/stylesForComment.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_stylesForComment_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./stylesForComment.css */ \"./node_modules/css-loader/dist/cjs.js!./src/stylesForComment.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_stylesForComment_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_stylesForComment_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_stylesForComment_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_stylesForComment_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./src/stylesForComment.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cards */ \"./src/modules/cards.js\");\n/* harmony import */ var _stylesForComment_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stylesForComment.css */ \"./src/stylesForComment.css\");\n\r\n\r\n\r\n\r\nwindow.onload = (0,_modules_cards__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./src/index.js?");

/***/ }),

/***/ "./src/modules/APIcomments.js":
/*!************************************!*\
  !*** ./src/modules/APIcomments.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"addComments\": () => (/* binding */ addComments)\n/* harmony export */ });\nconst getComments = async (itemId) => {\r\n  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PXvVn75NsImDnwHgqLa4/comments?item_id=${itemId}`);\r\n  const data = await response.json();\r\n  return data;\r\n};\r\n\r\nconst addComments = async (username, comment, itemID) => {\r\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PXvVn75NsImDnwHgqLa4/comments', {\r\n    method: 'POST',\r\n    body: JSON.stringify({\r\n      item_id: itemID,\r\n      username,\r\n      comment,\r\n    }),\r\n    headers: {\r\n      'Content-Type': 'application/json; charset=UTF-8',\r\n    },\r\n  });\r\n  return response.text();\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./src/modules/APIcomments.js?");

/***/ }),

/***/ "./src/modules/GetRequest.js":
/*!***********************************!*\
  !*** ./src/modules/GetRequest.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getPictures)\n/* harmony export */ });\nconst baseUrl = 'https://api.nasa.gov/planetary/apod?api_key=';\r\nconst key = 'j9gWflgyCduUULTGmKMfahoaNAbzAULMkGGuu9jN';\r\nconst startDate = '2022-01-27';\r\nconst endDate = '2022-02-07';\r\nconst url = `${baseUrl}${key}&start_date=${startDate}&end_date=${endDate}`;\r\n\r\nconst getPictures = async () => {\r\n  const response = await fetch(url);\r\n  const answer = await response.json();\r\n  return answer;\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./src/modules/GetRequest.js?");

/***/ }),

/***/ "./src/modules/cards.js":
/*!******************************!*\
  !*** ./src/modules/cards.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createCards)\n/* harmony export */ });\n/* harmony import */ var _GetRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetRequest */ \"./src/modules/GetRequest.js\");\n/* harmony import */ var _involvementApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./involvementApp */ \"./src/modules/involvementApp.js\");\n/* harmony import */ var _showCommentsCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showCommentsCard */ \"./src/modules/showCommentsCard.js\");\n/* harmony import */ var _count__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./count */ \"./src/modules/count.js\");\n\r\n\r\n // eslint-disable-line import/no-cycle\r\n\r\n\r\nconst itemGrid = document.querySelector('.item-grid');\r\n\r\nconst createCards = async () => {\r\n  const myPictures = await (0,_GetRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  myPictures.forEach((item, i) => {\r\n    const card = document.createElement('div');\r\n    card.classList.add('card');\r\n\r\n    if (item.media_type === 'image') {\r\n      const media = document.createElement('img');\r\n      media.classList.add('picture');\r\n      media.src = item.url;\r\n      card.appendChild(media);\r\n      media.addEventListener('click', async () => {\r\n        await (0,_showCommentsCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(item.title);\r\n        const modal = document.querySelector('.comment-model');\r\n        modal.classList.add('active');\r\n      });\r\n    } else {\r\n      const media = document.createElement('iframe');\r\n      media.classList.add('video');\r\n      media.src = item.url;\r\n      card.appendChild(media);\r\n    }\r\n\r\n    const titleContainer = document.createElement('div');\r\n    titleContainer.classList.add('title-container');\r\n\r\n    const cardTitle = document.createElement('h3');\r\n    cardTitle.textContent = item.title;\r\n    cardTitle.classList.add('card-title');\r\n\r\n    const contentContainer = document.createElement('div');\r\n    contentContainer.classList.add('content-container');\r\n\r\n    const likesContainer = document.createElement('div');\r\n    likesContainer.classList.add('likes-container');\r\n\r\n    const love = document.createElement('i');\r\n    love.classList.add('fas', 'fa-heart');\r\n    love.setAttribute('index', `${i}`);\r\n    likesContainer.appendChild(love);\r\n\r\n    const likes = document.createElement('p');\r\n    likes.textContent = '0 likes';\r\n\r\n    const likeNumber = async () => {\r\n      const itemLikes = await (0,_involvementApp__WEBPACK_IMPORTED_MODULE_1__.getLikes)();\r\n      itemLikes.forEach((like) => {\r\n        if (like.item_id === `picture-${i}`) {\r\n          likes.textContent = '';\r\n          likes.classList.add('like-number');\r\n          likes.textContent = `${like.likes} likes`;\r\n        }\r\n      });\r\n    };\r\n\r\n    love.addEventListener('click', async () => {\r\n      await (0,_involvementApp__WEBPACK_IMPORTED_MODULE_1__.postLike)(`picture-${i}`);\r\n      likeNumber();\r\n      love.classList.add('hearted');\r\n    });\r\n\r\n    likeNumber();\r\n    likesContainer.appendChild(likes);\r\n\r\n    const comment = document.createElement('button');\r\n    comment.classList.add('comment-btn');\r\n    comment.type = 'button';\r\n    comment.setAttribute('title', `${item.title}`);\r\n    comment.innerText = 'Comments';\r\n\r\n    comment.addEventListener('click', async () => {\r\n      await (0,_showCommentsCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(item.title);\r\n      const modal = document.querySelector('.comment-model');\r\n      modal.classList.add('active');\r\n    });\r\n\r\n    titleContainer.appendChild(cardTitle);\r\n    titleContainer.appendChild(contentContainer);\r\n    contentContainer.appendChild(likesContainer);\r\n    contentContainer.appendChild(comment);\r\n    card.appendChild(titleContainer);\r\n    card.setAttribute('index', `${i}`);\r\n    itemGrid.appendChild(card);\r\n  });\r\n\r\n  const counter = document.getElementById('picture-counter');\r\n  counter.textContent = (0,_count__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./src/modules/cards.js?");

/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayComments)\n/* harmony export */ });\n/* harmony import */ var _APIcomments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./APIcomments */ \"./src/modules/APIcomments.js\");\n\r\n\r\nconst displayComments = async (userID) => {\r\n  const comments = await (0,_APIcomments__WEBPACK_IMPORTED_MODULE_0__.getComments)(userID);\r\n\r\n  if (comments.length === undefined) {\r\n    const commentCounter = document.querySelector('.comment-counter');\r\n    commentCounter.innerHTML = 0;\r\n  } else {\r\n    comments.forEach((comment) => {\r\n      const commentContainer = document.querySelector('.comment-container');\r\n\r\n      const li = document.createElement('li');\r\n      li.classList.add('single-comment');\r\n      const time = document.createElement('span');\r\n      time.classList.add('comment-time');\r\n      time.innerText = `${comment.creation_date}, `;\r\n\r\n      const author = document.createElement('span');\r\n      author.classList.add('comment-author');\r\n      author.innerText = `${comment.username}: `;\r\n\r\n      const message = document.createElement('span');\r\n      message.classList.add('commentMsg');\r\n      message.innerText = comment.comment;\r\n\r\n      li.append(time, author, message);\r\n      commentContainer.appendChild(li);\r\n    });\r\n  }\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./src/modules/comments.js?");

/***/ }),

/***/ "./src/modules/count.js":
/*!******************************!*\
  !*** ./src/modules/count.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countCards = () => {\r\n  const myArray = document.querySelectorAll('.card');\r\n  const count = myArray.length;\r\n  return count;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countCards);\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./src/modules/count.js?");

/***/ }),

/***/ "./src/modules/countComments.js":
/*!**************************************!*\
  !*** ./src/modules/countComments.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countComments = () => {\r\n  const allComments = document.querySelectorAll('.single-comment').length;\r\n  return allComments;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countComments);\r\n\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./src/modules/countComments.js?");

/***/ }),

/***/ "./src/modules/involvementApp.js":
/*!***************************************!*\
  !*** ./src/modules/involvementApp.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"postLike\": () => (/* binding */ postLike),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes)\n/* harmony export */ });\nconst postLike = async (itemId) => {\r\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PXvVn75NsImDnwHgqLa4/likes/', {\r\n    method: 'POST',\r\n    body: JSON.stringify({\r\n      item_id: itemId,\r\n    }),\r\n    headers: {\r\n      'Content-Type': 'application/json; charset=UTF-8',\r\n    },\r\n  });\r\n  return response.text();\r\n};\r\n\r\nconst getLikes = async () => {\r\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PXvVn75NsImDnwHgqLa4/likes/');\r\n  const data = await response.json();\r\n  return data;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./src/modules/involvementApp.js?");

/***/ }),

/***/ "./src/modules/showCommentsCard.js":
/*!*****************************************!*\
  !*** ./src/modules/showCommentsCard.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showCommentCard)\n/* harmony export */ });\n/* harmony import */ var _GetRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetRequest */ \"./src/modules/GetRequest.js\");\n/* harmony import */ var _comments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments */ \"./src/modules/comments.js\");\n/* harmony import */ var _APIcomments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./APIcomments */ \"./src/modules/APIcomments.js\");\n/* harmony import */ var _countComments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./countComments */ \"./src/modules/countComments.js\");\n\r\n\r\n\r\n\r\n\r\nconst showCommentCard = async (title) => {\r\n  const myPicturesJson = await (0,_GetRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  const stringifiedJson = JSON.stringify(myPicturesJson);\r\n  const myPictures = JSON.parse(stringifiedJson);\r\n\r\n  myPictures.forEach((element, index) => {\r\n    if (element.title === title) {\r\n      const commentModel = document.querySelector('.comment-model');\r\n      const commentCard = document.createElement('div');\r\n      commentCard.classList.add('comment-card');\r\n      commentCard.setAttribute('index', index);\r\n\r\n      const closeIcon = document.createElement('div');\r\n      closeIcon.classList.add('close-icon');\r\n      const icon = document.createElement('i');\r\n      icon.classList.add('fas', 'fa-times');\r\n      closeIcon.appendChild(icon);\r\n\r\n      const closeClick = () => {\r\n        commentModel.classList.remove('active');\r\n        commentModel.innerHTML = '';\r\n      };\r\n\r\n      closeIcon.addEventListener('click', closeClick);\r\n\r\n      const mainDescription = document.createElement('div');\r\n      mainDescription.classList.add('main-description');\r\n\r\n      if (element.media_type === 'image') {\r\n        const media = document.createElement('img');\r\n        media.classList.add('mediaImage');\r\n        media.src = element.url;\r\n        mainDescription.appendChild(media);\r\n      } else {\r\n        const media = document.createElement('iframe');\r\n        media.classList.add('mediaVideo');\r\n        media.src = element.url;\r\n        mainDescription.appendChild(media);\r\n      }\r\n      const h1 = document.createElement('h1');\r\n      h1.classList.add('image-title');\r\n      h1.innerText = element.title;\r\n\r\n      const explanation = document.createElement('p');\r\n      explanation.classList.add('image-explanation');\r\n      explanation.innerText = element.explanation;\r\n\r\n      const extraExplanation = document.createElement('p');\r\n      const copyright = document.createElement('span');\r\n      copyright.classList.add('copyright');\r\n      copyright.innerText = `By ${element.copyright ?? 'Anonymous'}`;\r\n\r\n      const imageDate = document.createElement('span');\r\n      imageDate.classList.add('image-date');\r\n      imageDate.innerText = `${element.date}`;\r\n      extraExplanation.append(copyright, imageDate);\r\n\r\n      const h2 = document.createElement('h2');\r\n      h2.innerText = 'Comments (';\r\n      const commentCounter = document.createElement('span');\r\n      commentCounter.classList.add('comment-counter');\r\n      commentCounter.innerText = '';\r\n      const bracket = document.createTextNode(')');\r\n      h2.append(commentCounter, bracket);\r\n\r\n      const commentContainer = document.createElement('ul');\r\n      commentContainer.classList.add('comment-container');\r\n\r\n      const commentTitle = document.createElement('h2');\r\n      commentTitle.innerText = 'Add a comment';\r\n\r\n      const form = document.createElement('form');\r\n      form.innerHTML = `\r\n          <input type=\"text\" placeholder=\"Your name\" class=\"name-input\" required autocomplete=\"off\" />\r\n          <textarea name=\"comment-input\" class=\"comment-input\" placeholder=\"Your insights...\" required></textarea>\r\n          <button type=\"submit\">Comment</button>\r\n          `;\r\n\r\n      mainDescription.append(h1, explanation, extraExplanation, h2, commentContainer, commentTitle, form); // eslint-disable-line max-len\r\n      commentCard.append(closeIcon, mainDescription);\r\n      commentModel.appendChild(commentCard);\r\n\r\n      form.addEventListener('submit', async (event) => {\r\n        event.preventDefault();\r\n        commentContainer.innerHTML = '';\r\n\r\n        const username = document.querySelector('.name-input').value;\r\n        const commentMessage = document.querySelector('.comment-input').value;\r\n        const userID = commentCard.getAttribute('index');\r\n\r\n        await (0,_APIcomments__WEBPACK_IMPORTED_MODULE_2__.addComments)(username, commentMessage, userID);\r\n        await (0,_comments__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(userID);\r\n\r\n        form.reset();\r\n\r\n        const counter = document.querySelector('.comment-counter');\r\n        counter.textContent = (0,_countComments__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n      });\r\n    }\r\n  });\r\n\r\n  const commentCard = document.querySelector('.comment-card');\r\n  const userID = commentCard.getAttribute('index');\r\n  await (0,_comments__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(userID);\r\n\r\n  const commentCounter = document.querySelector('.comment-counter');\r\n  commentCounter.innerHTML = (0,_countComments__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./src/modules/showCommentsCard.js?");

/***/ }),

/***/ "./src/assets/Helvetica-Font/Helvetica.ttf":
/*!*************************************************!*\
  !*** ./src/assets/Helvetica-Font/Helvetica.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"06113bf748ae7dc33e05.ttf\";\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./src/assets/Helvetica-Font/Helvetica.ttf?");

/***/ }),

/***/ "./src/assets/nasalization-cufonfonts-webfont/nasalization rg.woff":
/*!*************************************************************************!*\
  !*** ./src/assets/nasalization-cufonfonts-webfont/nasalization rg.woff ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"329b50bddebde6dc070b.woff\";\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./src/assets/nasalization-cufonfonts-webfont/nasalization_rg.woff?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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