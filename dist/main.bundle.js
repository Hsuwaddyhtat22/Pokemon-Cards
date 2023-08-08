"use strict";
(self["webpackChunkpokemon_capstone_js"] = self["webpackChunkpokemon_capstone_js"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Geologica:wght@300;400;600;700;900&family=Lato:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  font-family: 'Geologica', sans-serif;
  margin: 20px 80px;
  padding: 0;
  background-color: #dddd4c;
  font-weight: bold;
  font-size: 25px;
  color: rgb(40, 40, 38);
}

.logo {
  color: yellow;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  letter-spacing: 15px;
  font-weight: bold;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3e3e11;
  color: white;
  padding: 10px 20px;
}

.navbar img {
  height: 40px;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 50px;
}

.nav-links a {
  text-decoration: none;
  color: white;
  font-weight: bold;
}

.nav-links a:hover {
  color: yellow;
  transform: scale(1.06);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
}

.item {
  background-color: #a6cb50;
  border: 5px solid #351600;
  border-radius: 20px;
  padding: 10px;
  text-align: center;
}

.item img {
  max-width: 100%;
  height: 200px;
}

.actions {
  margin-top: 10px;
}

.item:hover {
  transform: scale(1.06);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.footer {
  color: rgb(245, 245, 56);
  background-color: #68ad33;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-weight: bold;
}

.like {
  background-color: #3c8400;
  color: yellow;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
  border-radius: 16px;
}

.like:hover {
  background-color: #75a23d;
}

.comment {
  background-color: #3c8400;
  color: rgb(255, 255, 0);
  padding: 5px 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
  border-radius: 16px;
}

.comment:hover {
  background-color: #75a23d;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(0);
  z-index: 1000;
  transition: backdrop-filter 0.3s;
}

.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #dddd4c;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 1001;
}

.popup-content {
  text-align: center;
}

.close-popup {
  background-color: #658e0d;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
}

.comment-section {
  margin-top: 20px;
  text-align: left;
}

.comment-section label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.comment-section input,
.comment-section textarea {
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.comment-section button.comment {
  background-color: #658e0d;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  margin-right: 5px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,oCAAoC;EACpC,iBAAiB;EACjB,UAAU;EACV,yBAAyB;EACzB,iBAAiB;EACjB,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,qGAAqG;EACrG,oBAAoB;EACpB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,SAAS;AACX;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,wCAAwC;AAC1C;;AAIA;EACE,aAAa;EACb,qCAAqC;EACrC,SAAS;EACT,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,mBAAmB;EACnB,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,aAAa;AACf;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,wCAAwC;AAC1C;;AAEA;EACE,wBAAwB;EACxB,yBAAyB;EACzB,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,iBAAiB;EACjB,eAAe;EACf,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,uBAAuB;EACvB,iBAAiB;EACjB,eAAe;EACf,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,wBAAwB;EACxB,aAAa;EACb,gCAAgC;AAClC;;AAEA;EACE,eAAe;EACf,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,yBAAyB;EACzB,aAAa;EACb,mBAAmB;EACnB,uCAAuC;EACvC,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;;EAEE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;AACnB","sourcesContent":["body {\r\n  font-family: 'Geologica', sans-serif;\r\n  margin: 20px 80px;\r\n  padding: 0;\r\n  background-color: #dddd4c;\r\n  font-weight: bold;\r\n  font-size: 25px;\r\n  color: rgb(40, 40, 38);\r\n}\r\n\r\n.logo {\r\n  color: yellow;\r\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n  letter-spacing: 15px;\r\n  font-weight: bold;\r\n}\r\n\r\n.navbar {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: #3e3e11;\r\n  color: white;\r\n  padding: 10px 20px;\r\n}\r\n\r\n.navbar img {\r\n  height: 40px;\r\n}\r\n\r\n.nav-links {\r\n  list-style: none;\r\n  display: flex;\r\n  gap: 50px;\r\n}\r\n\r\n.nav-links a {\r\n  text-decoration: none;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n.nav-links a:hover {\r\n  color: yellow;\r\n  transform: scale(1.06);\r\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n@import url('https://fonts.googleapis.com/css2?family=Geologica:wght@300;400;600;700;900&family=Lato:wght@300&display=swap');\r\n\r\n.container {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 20px;\r\n  padding: 20px;\r\n}\r\n\r\n.item {\r\n  background-color: #a6cb50;\r\n  border: 5px solid #351600;\r\n  border-radius: 20px;\r\n  padding: 10px;\r\n  text-align: center;\r\n}\r\n\r\n.item img {\r\n  max-width: 100%;\r\n  height: 200px;\r\n}\r\n\r\n.actions {\r\n  margin-top: 10px;\r\n}\r\n\r\n.item:hover {\r\n  transform: scale(1.06);\r\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.footer {\r\n  color: rgb(245, 245, 56);\r\n  background-color: #68ad33;\r\n  height: 60px;\r\n  line-height: 60px;\r\n  text-align: center;\r\n  font-weight: bold;\r\n}\r\n\r\n.like {\r\n  background-color: #3c8400;\r\n  color: yellow;\r\n  padding: 5px 10px;\r\n  cursor: pointer;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  margin-right: 10px;\r\n  border-radius: 16px;\r\n}\r\n\r\n.like:hover {\r\n  background-color: #75a23d;\r\n}\r\n\r\n.comment {\r\n  background-color: #3c8400;\r\n  color: rgb(255, 255, 0);\r\n  padding: 5px 10px;\r\n  cursor: pointer;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  margin-right: 10px;\r\n  border-radius: 16px;\r\n}\r\n\r\n.comment:hover {\r\n  background-color: #75a23d;\r\n}\r\n\r\n.overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  backdrop-filter: blur(0);\r\n  z-index: 1000;\r\n  transition: backdrop-filter 0.3s;\r\n}\r\n\r\n.popup {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background-color: #dddd4c;\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n  z-index: 1001;\r\n}\r\n\r\n.popup-content {\r\n  text-align: center;\r\n}\r\n\r\n.close-popup {\r\n  background-color: #658e0d;\r\n  color: #fff;\r\n  border: none;\r\n  border-radius: 5px;\r\n  padding: 5px 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.comment-section {\r\n  margin-top: 20px;\r\n  text-align: left;\r\n}\r\n\r\n.comment-section label {\r\n  display: block;\r\n  margin-bottom: 5px;\r\n  font-weight: bold;\r\n}\r\n\r\n.comment-section input,\r\n.comment-section textarea {\r\n  width: 100%;\r\n  padding: 5px;\r\n  margin-bottom: 10px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n}\r\n\r\n.comment-section button.comment {\r\n  background-color: #658e0d;\r\n  color: #fff;\r\n  border: none;\r\n  border-radius: 5px;\r\n  padding: 5px 10px;\r\n  cursor: pointer;\r\n  margin-right: 5px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const BASE_API_URL = 'https://pokeapi.co/api/v2';

const itemContainer = document.getElementById('itemContainer');
const itemCounter = document.getElementById('itemCounter');
const pokemonCards = [
  { name: 'bulbasaur', id: 1, description: 'A Grass/Poison-type Pokémon with a plant bulb on its back.' },
  { name: 'ivysaur', id: 2, description: 'The evolved form of Bulbasaur, known for the large flower on its back.' },
  { name: 'venusaur', id: 3, description: 'The final evolution of Bulbasaur, a powerful Grass/Poison-type Pokémon.' },
  { name: 'squirtle', id: 7, description: 'A Water-type Pokémon that hides in its shell for protection.' },
  { name: 'wartortle', id: 8, description: 'The evolved form of Squirtle, a Water-type Pokémon with impressive water cannons.' },
  { name: 'blastoise', id: 9, description: 'The final evolution of Squirtle, a Water-type Pokémon with powerful water cannons on its back.' },
  { name: 'charmander', id: 4, description: 'A Fire-type Pokémon known for the flame on the tip of its tail.' },
  { name: 'charmeleon', id: 5, description: 'The evolved form of Charmander, a Fire-type Pokémon with a fiery personality.' },
  { name: 'charizard', id: 6, description: 'A powerful Fire/Flying-type Pokémon with a fiery breath.' },
  { name: 'pidgey', id: 16, description: 'A Normal/Flying-type Pokémon that is a common sight in many areas.' },
  { name: 'pidgeotto', id: 17, description: 'The evolved form of Pidgey, a larger and more powerful Normal/Flying-type Pokémon.' },
  { name: 'pidgeot', id: 18, description: 'The final evolution of Pidgey, a majestic Normal/Flying-type Pokémon.' },
  { name: 'eevee', id: 133, description: 'A Normal-type Pokémon with multiple evolutionary paths.' },
  { name: 'pikachu', id: 25, description: 'An Electric-type Pokémon known for its lightning bolt-shaped tail.' },
  { name: 'charizard', id: 6, description: 'A powerful Fire/Flying-type Pokémon with a fiery breath.' },
  { name: 'squirtle', id: 7, description: 'A Water-type Pokémon that hides in its shell for protection.' },
  { name: 'bulbasaur', id: 1, description: 'A Grass/Poison-type Pokémon with a plant bulb on its back.' },
  { name: 'eevee', id: 133, description: 'A Normal-type Pokémon with multiple evolutionary paths.' },
  { name: 'jigglypuff', id: 39, description: 'A Normal/Fairy-type Pokémon that puts its foes to sleep by singing.' },
  { name: 'meowth', id: 52, description: 'A Normal-type Pokémon known for its mischievous behavior and coin-collecting.' },
  { name: 'magikarp', id: 129, description: 'A weak Water-type Pokémon that can evolve into a powerful Gyarados.' },
  { name: 'raichu', id: 26, description: 'The evolved form of Pikachu, Raichu is an Electric-type Pokémon.' },
  { name: 'mewtwo', id: 150, description: 'A Psychic-type Legendary Pokémon with immense power.' },
  { name: 'vaporeon', id: 134, description: 'A Water-type Eeveelution known for its aquatic abilities.' },
  { name: 'gyarados', id: 130, description: 'A powerful Water/Flying-type Pokémon known for its rage.' },
  { name: 'snorlax', id: 143, description: 'A Normal-type Pokémon known for its sleeping habits and huge size.' },
  { name: 'eevee', id: 133, description: 'A Normal-type Pokémon with multiple evolutionary paths.' },
  { name: 'dragonite', id: 149, description: 'A powerful Dragon/Flying-type Pokémon with a kind heart.' },
  { name: 'lapras', id: 131, description: 'A Water/Ice-type Pokémon known for its soothing song and serenity.' },
  { name: 'machamp', id: 68, description: 'A Fighting-type Pokémon with impressive physical strength and power.' },
  { name: 'meowth', id: 52, description: 'A Normal-type Pokémon known for its mischievous behavior and coin-collecting.' },
  { name: 'magikarp', id: 129, description: 'A weak Water-type Pokémon that can evolve into a powerful Gyarados.' },
  { name: 'raichu', id: 26, description: 'The evolved form of Pikachu, Raichu is an Electric-type Pokémon.' },
];

const openPopup = async (pokemon) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
    const data = await response.json();

    const popup = document.createElement('div');
    popup.classList.add('popup');

    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');

    const img = document.createElement('img');

    img.src = data.sprites.front_default;
    img.alt = data.name;

    const description = document.createElement('p');
    description.textContent = pokemon.description;

    const commentSection = document.createElement('div');
    commentSection.classList.add('comment-section');

    const commentHeader = document.createElement('div');
    commentHeader.classList.add('comment-header');

    const commentTitle = document.createElement('h2');
    commentTitle.textContent = 'Comments';
    commentTitle.style.fontSize = '20px';

    const commentCount = document.createElement('p');
    commentCount.textContent = 'Total Comments: 0';
    commentCount.style.fontSize = '20px';

    commentHeader.appendChild(commentTitle);
    commentHeader.appendChild(commentCount);

    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Your Name:';
    nameLabel.style.fontSize = '20px';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';

    const commentLabel = document.createElement('label');
    commentLabel.textContent = 'Your Comment:';
    commentLabel.style.fontSize = '20px';
    const commentInput = document.createElement('textarea');

    const commentButton = document.createElement('button');
    commentButton.classList.add('comment');
    commentButton.textContent = 'Comment';
    commentButton.addEventListener('click', () => {
      const commentText = commentInput.value;
      if (commentText.trim() !== '') {
        const commenterName = nameInput.value;
        const today = new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        });

        const commentItem = document.createElement('div');
        commentItem.classList.add('comment-item');

        const commentContent = document.createElement('p');
        commentContent.style.fontSize = '20px';
        commentContent.textContent = `${today} / ${commenterName}: ${commentText}`;

        commentItem.appendChild(commentContent);
        commentSection.appendChild(commentItem);
        commentInput.value = '';

        const commentCountValue = parseInt(commentCount.textContent.split(':')[1].trim(), 10) + 1;
        commentCount.textContent = `Total Comments: ${commentCountValue}`;

        // Store the comment in the popup's local storage
        const popupComments = JSON.parse(localStorage.getItem('popupComments')) || {};
        if (!popupComments[pokemon.name]) {
          popupComments[pokemon.name] = [];
        }
        popupComments[pokemon.name].push({ date: today, author: commenterName, text: commentText });
        localStorage.setItem('popupComments', JSON.stringify(popupComments));
      }
    });

    const closePopupButton = document.createElement('button');
    closePopupButton.classList.add('close-popup');
    closePopupButton.textContent = 'Close';
    closePopupButton.addEventListener('click', () => {
      popup.remove();
    });

    popupContent.appendChild(img);
    popupContent.appendChild(description);
    commentSection.appendChild(commentHeader);
    commentSection.appendChild(nameLabel);
    commentSection.appendChild(nameInput);
    commentSection.appendChild(commentLabel);
    commentSection.appendChild(commentInput);
    commentSection.appendChild(commentButton);
    commentSection.appendChild(closePopupButton);
    popupContent.appendChild(commentSection);

    // Display existing comments for this popup
    const popupComments = JSON.parse(localStorage.getItem('popupComments')) || {};
    const storedComments = popupComments[pokemon.name] || [];
    storedComments.forEach((commentData) => {
      const commentItem = document.createElement('div');
      commentItem.classList.add('comment-item');

      const commentContent = document.createElement('p');
      commentContent.style.fontSize = '15px';
      commentContent.style.color = 'green';
      commentContent.textContent = `${commentData.date} / ${commentData.author}: ${commentData.text}`;

      commentItem.appendChild(commentContent);
      commentSection.appendChild(commentItem);
    });

    // Update total comment count
    commentCount.textContent = `Total Comments: ${storedComments.length}`;

    popup.appendChild(popupContent);
    document.body.appendChild(popup);
  } catch (error) {
    console.error('Error fetching Pokémon details:', error);
  }
};
const updateLikeCount = async (likeButton, pokemonName) => {
  try {
    let likeCount = localStorage.getItem(pokemonName) || 0;

    likeButton.textContent = `${likeCount} ${likeCount === '1' ? 'Like' : 'Likes'}`;

    likeButton.addEventListener('click', async () => {
      likeCount += 1;
      likeButton.textContent = `${likeCount} ${likeCount === 1 ? 'Like' : 'Likes'}`;
      localStorage.setItem(pokemonName, likeCount);
    });
  } catch (error) {
    console.error('Error updating like count:', error);
  }
};

const fetchPokemon = async (pokemon) => {
  try {
    const response = await fetch(`${BASE_API_URL}/pokemon/${pokemon.name}`);
    const data = await response.json();

    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');

    const img = document.createElement('img');
    img.src = data.sprites.front_default;
    img.alt = data.name;

    const description = document.createElement('p');
    description.textContent = pokemon.description;

    const actionsDiv = document.createElement('div');
    actionsDiv.classList.add('actions');

    const likeButton = document.createElement('button');
    likeButton.classList.add('like');
    updateLikeCount(likeButton, pokemon.name);

    const commentButton = document.createElement('button');
    commentButton.classList.add('comment');
    commentButton.textContent = 'Comment';
    commentButton.addEventListener('click', () => {
      openPopup(pokemon);
    });

    actionsDiv.appendChild(likeButton);
    actionsDiv.appendChild(commentButton);

    itemDiv.appendChild(img);
    itemDiv.appendChild(description);
    itemDiv.appendChild(actionsDiv);

    itemContainer.appendChild(itemDiv);
    itemCounter.textContent = `Total Cards: ${pokemonCards.length}`;
  } catch (error) {
    console.error('Error fetching Pokémon:', error);
  }
};

pokemonCards.forEach((card) => {
  fetchPokemon(card);
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLGtIQUFrSCxJQUFJLElBQUksSUFBSSx1Q0FBdUM7QUFDcks7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx1REFBdUQ7QUFDbEc7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msa0JBQWtCLElBQUksbUJBQW1CLElBQUksaUJBQWlCO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esa0RBQWtELHNCQUFzQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsV0FBVyxFQUFFLHFDQUFxQztBQUNsRjtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsV0FBVyxFQUFFLG1DQUFtQztBQUNsRjtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGFBQWEsV0FBVyxhQUFhO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsb0JBQW9CO0FBQ2xFLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9rZW1vbi1jYXBzdG9uZS1qcy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1jYXBzdG9uZS1qcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1jYXBzdG9uZS1qcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Bva2Vtb24tY2Fwc3RvbmUtanMvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1jYXBzdG9uZS1qcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wb2tlbW9uLWNhcHN0b25lLWpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wb2tlbW9uLWNhcHN0b25lLWpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Bva2Vtb24tY2Fwc3RvbmUtanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1jYXBzdG9uZS1qcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Bva2Vtb24tY2Fwc3RvbmUtanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wb2tlbW9uLWNhcHN0b25lLWpzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R2VvbG9naWNhOndnaHRAMzAwOzQwMDs2MDA7NzAwOzkwMCZmYW1pbHk9TGF0bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiAnR2VvbG9naWNhJywgc2Fucy1zZXJpZjtcclxuICBtYXJnaW46IDIwcHggODBweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkNGM7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiByZ2IoNDAsIDQwLCAzOCk7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBjb2xvcjogeWVsbG93O1xyXG4gIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZTNlMTE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxufVxyXG5cclxuLm5hdmJhciBpbWcge1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLm5hdi1saW5rcyB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogNTBweDtcclxufVxyXG5cclxuLm5hdi1saW5rcyBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubmF2LWxpbmtzIGE6aG92ZXIge1xyXG4gIGNvbG9yOiB5ZWxsb3c7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA2KTtcclxuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTZjYjUwO1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkICMzNTE2MDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLml0ZW0gaW1nIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLmFjdGlvbnMge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5pdGVtOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDYpO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIGNvbG9yOiByZ2IoMjQ1LCAyNDUsIDU2KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjhhZDMzO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBsaW5lLWhlaWdodDogNjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5saWtlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M4NDAwO1xyXG4gIGNvbG9yOiB5ZWxsb3c7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxufVxyXG5cclxuLmxpa2U6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3NWEyM2Q7XHJcbn1cclxuXHJcbi5jb21tZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M4NDAwO1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDApO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbn1cclxuXHJcbi5jb21tZW50OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzVhMjNkO1xyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDApO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgdHJhbnNpdGlvbjogYmFja2Ryb3AtZmlsdGVyIDAuM3M7XHJcbn1cclxuXHJcbi5wb3B1cCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZDRjO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgei1pbmRleDogMTAwMTtcclxufVxyXG5cclxuLnBvcHVwLWNvbnRlbnQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNsb3NlLXBvcHVwIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjU4ZTBkO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY29tbWVudC1zZWN0aW9uIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5jb21tZW50LXNlY3Rpb24gbGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNvbW1lbnQtc2VjdGlvbiBpbnB1dCxcclxuLmNvbW1lbnQtc2VjdGlvbiB0ZXh0YXJlYSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5jb21tZW50LXNlY3Rpb24gYnV0dG9uLmNvbW1lbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NThlMGQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usb0NBQW9DO0VBQ3BDLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFHQUFxRztFQUNyRyxvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix3Q0FBd0M7QUFDMUM7O0FBSUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLFNBQVM7RUFDVCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUNBQXVDO0VBQ3ZDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdHZW9sb2dpY2EnLCBzYW5zLXNlcmlmO1xcclxcbiAgbWFyZ2luOiAyMHB4IDgwcHg7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGQ0YztcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgY29sb3I6IHJnYig0MCwgNDAsIDM4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgY29sb3I6IHllbGxvdztcXHJcXG4gIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDE1cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZTNlMTE7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIgaW1nIHtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rcyB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rcyBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmtzIGE6aG92ZXIge1xcclxcbiAgY29sb3I6IHllbGxvdztcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNik7XFxyXFxuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbn1cXHJcXG5cXHJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HZW9sb2dpY2E6d2dodEAzMDA7NDAwOzYwMDs3MDA7OTAwJmZhbWlseT1MYXRvOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTZjYjUwO1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgIzM1MTYwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbSBpbWcge1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGlvbnMge1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW06aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA2KTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgY29sb3I6IHJnYigyNDUsIDI0NSwgNTYpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY4YWQzMztcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5saWtlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYzg0MDA7XFxyXFxuICBjb2xvcjogeWVsbG93O1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5saWtlOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3NWEyM2Q7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYzg0MDA7XFxyXFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAwKTtcXHJcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzVhMjNkO1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheSB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMCk7XFxyXFxuICB6LWluZGV4OiAxMDAwO1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2Ryb3AtZmlsdGVyIDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGQ0YztcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgei1pbmRleDogMTAwMTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbnRlbnQge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtcG9wdXAge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY1OGUwZDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXNlY3Rpb24ge1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXNlY3Rpb24gbGFiZWwge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtc2VjdGlvbiBpbnB1dCxcXHJcXG4uY29tbWVudC1zZWN0aW9uIHRleHRhcmVhIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXNlY3Rpb24gYnV0dG9uLmNvbW1lbnQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY1OGUwZDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgQkFTRV9BUElfVVJMID0gJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjInO1xyXG5cclxuY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtQ29udGFpbmVyJyk7XHJcbmNvbnN0IGl0ZW1Db3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1Db3VudGVyJyk7XHJcbmNvbnN0IHBva2Vtb25DYXJkcyA9IFtcclxuICB7IG5hbWU6ICdidWxiYXNhdXInLCBpZDogMSwgZGVzY3JpcHRpb246ICdBIEdyYXNzL1BvaXNvbi10eXBlIFBva8OpbW9uIHdpdGggYSBwbGFudCBidWxiIG9uIGl0cyBiYWNrLicgfSxcclxuICB7IG5hbWU6ICdpdnlzYXVyJywgaWQ6IDIsIGRlc2NyaXB0aW9uOiAnVGhlIGV2b2x2ZWQgZm9ybSBvZiBCdWxiYXNhdXIsIGtub3duIGZvciB0aGUgbGFyZ2UgZmxvd2VyIG9uIGl0cyBiYWNrLicgfSxcclxuICB7IG5hbWU6ICd2ZW51c2F1cicsIGlkOiAzLCBkZXNjcmlwdGlvbjogJ1RoZSBmaW5hbCBldm9sdXRpb24gb2YgQnVsYmFzYXVyLCBhIHBvd2VyZnVsIEdyYXNzL1BvaXNvbi10eXBlIFBva8OpbW9uLicgfSxcclxuICB7IG5hbWU6ICdzcXVpcnRsZScsIGlkOiA3LCBkZXNjcmlwdGlvbjogJ0EgV2F0ZXItdHlwZSBQb2vDqW1vbiB0aGF0IGhpZGVzIGluIGl0cyBzaGVsbCBmb3IgcHJvdGVjdGlvbi4nIH0sXHJcbiAgeyBuYW1lOiAnd2FydG9ydGxlJywgaWQ6IDgsIGRlc2NyaXB0aW9uOiAnVGhlIGV2b2x2ZWQgZm9ybSBvZiBTcXVpcnRsZSwgYSBXYXRlci10eXBlIFBva8OpbW9uIHdpdGggaW1wcmVzc2l2ZSB3YXRlciBjYW5ub25zLicgfSxcclxuICB7IG5hbWU6ICdibGFzdG9pc2UnLCBpZDogOSwgZGVzY3JpcHRpb246ICdUaGUgZmluYWwgZXZvbHV0aW9uIG9mIFNxdWlydGxlLCBhIFdhdGVyLXR5cGUgUG9rw6ltb24gd2l0aCBwb3dlcmZ1bCB3YXRlciBjYW5ub25zIG9uIGl0cyBiYWNrLicgfSxcclxuICB7IG5hbWU6ICdjaGFybWFuZGVyJywgaWQ6IDQsIGRlc2NyaXB0aW9uOiAnQSBGaXJlLXR5cGUgUG9rw6ltb24ga25vd24gZm9yIHRoZSBmbGFtZSBvbiB0aGUgdGlwIG9mIGl0cyB0YWlsLicgfSxcclxuICB7IG5hbWU6ICdjaGFybWVsZW9uJywgaWQ6IDUsIGRlc2NyaXB0aW9uOiAnVGhlIGV2b2x2ZWQgZm9ybSBvZiBDaGFybWFuZGVyLCBhIEZpcmUtdHlwZSBQb2vDqW1vbiB3aXRoIGEgZmllcnkgcGVyc29uYWxpdHkuJyB9LFxyXG4gIHsgbmFtZTogJ2NoYXJpemFyZCcsIGlkOiA2LCBkZXNjcmlwdGlvbjogJ0EgcG93ZXJmdWwgRmlyZS9GbHlpbmctdHlwZSBQb2vDqW1vbiB3aXRoIGEgZmllcnkgYnJlYXRoLicgfSxcclxuICB7IG5hbWU6ICdwaWRnZXknLCBpZDogMTYsIGRlc2NyaXB0aW9uOiAnQSBOb3JtYWwvRmx5aW5nLXR5cGUgUG9rw6ltb24gdGhhdCBpcyBhIGNvbW1vbiBzaWdodCBpbiBtYW55IGFyZWFzLicgfSxcclxuICB7IG5hbWU6ICdwaWRnZW90dG8nLCBpZDogMTcsIGRlc2NyaXB0aW9uOiAnVGhlIGV2b2x2ZWQgZm9ybSBvZiBQaWRnZXksIGEgbGFyZ2VyIGFuZCBtb3JlIHBvd2VyZnVsIE5vcm1hbC9GbHlpbmctdHlwZSBQb2vDqW1vbi4nIH0sXHJcbiAgeyBuYW1lOiAncGlkZ2VvdCcsIGlkOiAxOCwgZGVzY3JpcHRpb246ICdUaGUgZmluYWwgZXZvbHV0aW9uIG9mIFBpZGdleSwgYSBtYWplc3RpYyBOb3JtYWwvRmx5aW5nLXR5cGUgUG9rw6ltb24uJyB9LFxyXG4gIHsgbmFtZTogJ2VldmVlJywgaWQ6IDEzMywgZGVzY3JpcHRpb246ICdBIE5vcm1hbC10eXBlIFBva8OpbW9uIHdpdGggbXVsdGlwbGUgZXZvbHV0aW9uYXJ5IHBhdGhzLicgfSxcclxuICB7IG5hbWU6ICdwaWthY2h1JywgaWQ6IDI1LCBkZXNjcmlwdGlvbjogJ0FuIEVsZWN0cmljLXR5cGUgUG9rw6ltb24ga25vd24gZm9yIGl0cyBsaWdodG5pbmcgYm9sdC1zaGFwZWQgdGFpbC4nIH0sXHJcbiAgeyBuYW1lOiAnY2hhcml6YXJkJywgaWQ6IDYsIGRlc2NyaXB0aW9uOiAnQSBwb3dlcmZ1bCBGaXJlL0ZseWluZy10eXBlIFBva8OpbW9uIHdpdGggYSBmaWVyeSBicmVhdGguJyB9LFxyXG4gIHsgbmFtZTogJ3NxdWlydGxlJywgaWQ6IDcsIGRlc2NyaXB0aW9uOiAnQSBXYXRlci10eXBlIFBva8OpbW9uIHRoYXQgaGlkZXMgaW4gaXRzIHNoZWxsIGZvciBwcm90ZWN0aW9uLicgfSxcclxuICB7IG5hbWU6ICdidWxiYXNhdXInLCBpZDogMSwgZGVzY3JpcHRpb246ICdBIEdyYXNzL1BvaXNvbi10eXBlIFBva8OpbW9uIHdpdGggYSBwbGFudCBidWxiIG9uIGl0cyBiYWNrLicgfSxcclxuICB7IG5hbWU6ICdlZXZlZScsIGlkOiAxMzMsIGRlc2NyaXB0aW9uOiAnQSBOb3JtYWwtdHlwZSBQb2vDqW1vbiB3aXRoIG11bHRpcGxlIGV2b2x1dGlvbmFyeSBwYXRocy4nIH0sXHJcbiAgeyBuYW1lOiAnamlnZ2x5cHVmZicsIGlkOiAzOSwgZGVzY3JpcHRpb246ICdBIE5vcm1hbC9GYWlyeS10eXBlIFBva8OpbW9uIHRoYXQgcHV0cyBpdHMgZm9lcyB0byBzbGVlcCBieSBzaW5naW5nLicgfSxcclxuICB7IG5hbWU6ICdtZW93dGgnLCBpZDogNTIsIGRlc2NyaXB0aW9uOiAnQSBOb3JtYWwtdHlwZSBQb2vDqW1vbiBrbm93biBmb3IgaXRzIG1pc2NoaWV2b3VzIGJlaGF2aW9yIGFuZCBjb2luLWNvbGxlY3RpbmcuJyB9LFxyXG4gIHsgbmFtZTogJ21hZ2lrYXJwJywgaWQ6IDEyOSwgZGVzY3JpcHRpb246ICdBIHdlYWsgV2F0ZXItdHlwZSBQb2vDqW1vbiB0aGF0IGNhbiBldm9sdmUgaW50byBhIHBvd2VyZnVsIEd5YXJhZG9zLicgfSxcclxuICB7IG5hbWU6ICdyYWljaHUnLCBpZDogMjYsIGRlc2NyaXB0aW9uOiAnVGhlIGV2b2x2ZWQgZm9ybSBvZiBQaWthY2h1LCBSYWljaHUgaXMgYW4gRWxlY3RyaWMtdHlwZSBQb2vDqW1vbi4nIH0sXHJcbiAgeyBuYW1lOiAnbWV3dHdvJywgaWQ6IDE1MCwgZGVzY3JpcHRpb246ICdBIFBzeWNoaWMtdHlwZSBMZWdlbmRhcnkgUG9rw6ltb24gd2l0aCBpbW1lbnNlIHBvd2VyLicgfSxcclxuICB7IG5hbWU6ICd2YXBvcmVvbicsIGlkOiAxMzQsIGRlc2NyaXB0aW9uOiAnQSBXYXRlci10eXBlIEVldmVlbHV0aW9uIGtub3duIGZvciBpdHMgYXF1YXRpYyBhYmlsaXRpZXMuJyB9LFxyXG4gIHsgbmFtZTogJ2d5YXJhZG9zJywgaWQ6IDEzMCwgZGVzY3JpcHRpb246ICdBIHBvd2VyZnVsIFdhdGVyL0ZseWluZy10eXBlIFBva8OpbW9uIGtub3duIGZvciBpdHMgcmFnZS4nIH0sXHJcbiAgeyBuYW1lOiAnc25vcmxheCcsIGlkOiAxNDMsIGRlc2NyaXB0aW9uOiAnQSBOb3JtYWwtdHlwZSBQb2vDqW1vbiBrbm93biBmb3IgaXRzIHNsZWVwaW5nIGhhYml0cyBhbmQgaHVnZSBzaXplLicgfSxcclxuICB7IG5hbWU6ICdlZXZlZScsIGlkOiAxMzMsIGRlc2NyaXB0aW9uOiAnQSBOb3JtYWwtdHlwZSBQb2vDqW1vbiB3aXRoIG11bHRpcGxlIGV2b2x1dGlvbmFyeSBwYXRocy4nIH0sXHJcbiAgeyBuYW1lOiAnZHJhZ29uaXRlJywgaWQ6IDE0OSwgZGVzY3JpcHRpb246ICdBIHBvd2VyZnVsIERyYWdvbi9GbHlpbmctdHlwZSBQb2vDqW1vbiB3aXRoIGEga2luZCBoZWFydC4nIH0sXHJcbiAgeyBuYW1lOiAnbGFwcmFzJywgaWQ6IDEzMSwgZGVzY3JpcHRpb246ICdBIFdhdGVyL0ljZS10eXBlIFBva8OpbW9uIGtub3duIGZvciBpdHMgc29vdGhpbmcgc29uZyBhbmQgc2VyZW5pdHkuJyB9LFxyXG4gIHsgbmFtZTogJ21hY2hhbXAnLCBpZDogNjgsIGRlc2NyaXB0aW9uOiAnQSBGaWdodGluZy10eXBlIFBva8OpbW9uIHdpdGggaW1wcmVzc2l2ZSBwaHlzaWNhbCBzdHJlbmd0aCBhbmQgcG93ZXIuJyB9LFxyXG4gIHsgbmFtZTogJ21lb3d0aCcsIGlkOiA1MiwgZGVzY3JpcHRpb246ICdBIE5vcm1hbC10eXBlIFBva8OpbW9uIGtub3duIGZvciBpdHMgbWlzY2hpZXZvdXMgYmVoYXZpb3IgYW5kIGNvaW4tY29sbGVjdGluZy4nIH0sXHJcbiAgeyBuYW1lOiAnbWFnaWthcnAnLCBpZDogMTI5LCBkZXNjcmlwdGlvbjogJ0Egd2VhayBXYXRlci10eXBlIFBva8OpbW9uIHRoYXQgY2FuIGV2b2x2ZSBpbnRvIGEgcG93ZXJmdWwgR3lhcmFkb3MuJyB9LFxyXG4gIHsgbmFtZTogJ3JhaWNodScsIGlkOiAyNiwgZGVzY3JpcHRpb246ICdUaGUgZXZvbHZlZCBmb3JtIG9mIFBpa2FjaHUsIFJhaWNodSBpcyBhbiBFbGVjdHJpYy10eXBlIFBva8OpbW9uLicgfSxcclxuXTtcclxuXHJcbmNvbnN0IG9wZW5Qb3B1cCA9IGFzeW5jIChwb2tlbW9uKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8ke3Bva2Vtb24ubmFtZX1gKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ3BvcHVwJyk7XHJcblxyXG4gICAgY29uc3QgcG9wdXBDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwb3B1cENvbnRlbnQuY2xhc3NMaXN0LmFkZCgncG9wdXAtY29udGVudCcpO1xyXG5cclxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5cclxuICAgIGltZy5zcmMgPSBkYXRhLnNwcml0ZXMuZnJvbnRfZGVmYXVsdDtcclxuICAgIGltZy5hbHQgPSBkYXRhLm5hbWU7XHJcblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHBva2Vtb24uZGVzY3JpcHRpb247XHJcblxyXG4gICAgY29uc3QgY29tbWVudFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbW1lbnRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnQtc2VjdGlvbicpO1xyXG5cclxuICAgIGNvbnN0IGNvbW1lbnRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbW1lbnRIZWFkZXIuY2xhc3NMaXN0LmFkZCgnY29tbWVudC1oZWFkZXInKTtcclxuXHJcbiAgICBjb25zdCBjb21tZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgY29tbWVudFRpdGxlLnRleHRDb250ZW50ID0gJ0NvbW1lbnRzJztcclxuICAgIGNvbW1lbnRUaXRsZS5zdHlsZS5mb250U2l6ZSA9ICcyMHB4JztcclxuXHJcbiAgICBjb25zdCBjb21tZW50Q291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb21tZW50Q291bnQudGV4dENvbnRlbnQgPSAnVG90YWwgQ29tbWVudHM6IDAnO1xyXG4gICAgY29tbWVudENvdW50LnN0eWxlLmZvbnRTaXplID0gJzIwcHgnO1xyXG5cclxuICAgIGNvbW1lbnRIZWFkZXIuYXBwZW5kQ2hpbGQoY29tbWVudFRpdGxlKTtcclxuICAgIGNvbW1lbnRIZWFkZXIuYXBwZW5kQ2hpbGQoY29tbWVudENvdW50KTtcclxuXHJcbiAgICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbmFtZUxhYmVsLnRleHRDb250ZW50ID0gJ1lvdXIgTmFtZTonO1xyXG4gICAgbmFtZUxhYmVsLnN0eWxlLmZvbnRTaXplID0gJzIwcHgnO1xyXG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIG5hbWVJbnB1dC50eXBlID0gJ3RleHQnO1xyXG5cclxuICAgIGNvbnN0IGNvbW1lbnRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBjb21tZW50TGFiZWwudGV4dENvbnRlbnQgPSAnWW91ciBDb21tZW50Oic7XHJcbiAgICBjb21tZW50TGFiZWwuc3R5bGUuZm9udFNpemUgPSAnMjBweCc7XHJcbiAgICBjb25zdCBjb21tZW50SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG5cclxuICAgIGNvbnN0IGNvbW1lbnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbW1lbnRCdXR0b24uY2xhc3NMaXN0LmFkZCgnY29tbWVudCcpO1xyXG4gICAgY29tbWVudEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb21tZW50JztcclxuICAgIGNvbW1lbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNvbW1lbnRUZXh0ID0gY29tbWVudElucHV0LnZhbHVlO1xyXG4gICAgICBpZiAoY29tbWVudFRleHQudHJpbSgpICE9PSAnJykge1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRlck5hbWUgPSBuYW1lSW5wdXQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCB7XHJcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXHJcbiAgICAgICAgICBtb250aDogJ251bWVyaWMnLFxyXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29tbWVudEl0ZW0uY2xhc3NMaXN0LmFkZCgnY29tbWVudC1pdGVtJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbW1lbnRDb250ZW50LnN0eWxlLmZvbnRTaXplID0gJzIwcHgnO1xyXG4gICAgICAgIGNvbW1lbnRDb250ZW50LnRleHRDb250ZW50ID0gYCR7dG9kYXl9IC8gJHtjb21tZW50ZXJOYW1lfTogJHtjb21tZW50VGV4dH1gO1xyXG5cclxuICAgICAgICBjb21tZW50SXRlbS5hcHBlbmRDaGlsZChjb21tZW50Q29udGVudCk7XHJcbiAgICAgICAgY29tbWVudFNlY3Rpb24uYXBwZW5kQ2hpbGQoY29tbWVudEl0ZW0pO1xyXG4gICAgICAgIGNvbW1lbnRJbnB1dC52YWx1ZSA9ICcnO1xyXG5cclxuICAgICAgICBjb25zdCBjb21tZW50Q291bnRWYWx1ZSA9IHBhcnNlSW50KGNvbW1lbnRDb3VudC50ZXh0Q29udGVudC5zcGxpdCgnOicpWzFdLnRyaW0oKSwgMTApICsgMTtcclxuICAgICAgICBjb21tZW50Q291bnQudGV4dENvbnRlbnQgPSBgVG90YWwgQ29tbWVudHM6ICR7Y29tbWVudENvdW50VmFsdWV9YDtcclxuXHJcbiAgICAgICAgLy8gU3RvcmUgdGhlIGNvbW1lbnQgaW4gdGhlIHBvcHVwJ3MgbG9jYWwgc3RvcmFnZVxyXG4gICAgICAgIGNvbnN0IHBvcHVwQ29tbWVudHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwb3B1cENvbW1lbnRzJykpIHx8IHt9O1xyXG4gICAgICAgIGlmICghcG9wdXBDb21tZW50c1twb2tlbW9uLm5hbWVdKSB7XHJcbiAgICAgICAgICBwb3B1cENvbW1lbnRzW3Bva2Vtb24ubmFtZV0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcG9wdXBDb21tZW50c1twb2tlbW9uLm5hbWVdLnB1c2goeyBkYXRlOiB0b2RheSwgYXV0aG9yOiBjb21tZW50ZXJOYW1lLCB0ZXh0OiBjb21tZW50VGV4dCB9KTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncG9wdXBDb21tZW50cycsIEpTT04uc3RyaW5naWZ5KHBvcHVwQ29tbWVudHMpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgY2xvc2VQb3B1cEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY2xvc2VQb3B1cEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjbG9zZS1wb3B1cCcpO1xyXG4gICAgY2xvc2VQb3B1cEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDbG9zZSc7XHJcbiAgICBjbG9zZVBvcHVwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBwb3B1cC5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHBvcHVwQ29udGVudC5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgcG9wdXBDb250ZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxuICAgIGNvbW1lbnRTZWN0aW9uLmFwcGVuZENoaWxkKGNvbW1lbnRIZWFkZXIpO1xyXG4gICAgY29tbWVudFNlY3Rpb24uYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcclxuICAgIGNvbW1lbnRTZWN0aW9uLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XHJcbiAgICBjb21tZW50U2VjdGlvbi5hcHBlbmRDaGlsZChjb21tZW50TGFiZWwpO1xyXG4gICAgY29tbWVudFNlY3Rpb24uYXBwZW5kQ2hpbGQoY29tbWVudElucHV0KTtcclxuICAgIGNvbW1lbnRTZWN0aW9uLmFwcGVuZENoaWxkKGNvbW1lbnRCdXR0b24pO1xyXG4gICAgY29tbWVudFNlY3Rpb24uYXBwZW5kQ2hpbGQoY2xvc2VQb3B1cEJ1dHRvbik7XHJcbiAgICBwb3B1cENvbnRlbnQuYXBwZW5kQ2hpbGQoY29tbWVudFNlY3Rpb24pO1xyXG5cclxuICAgIC8vIERpc3BsYXkgZXhpc3RpbmcgY29tbWVudHMgZm9yIHRoaXMgcG9wdXBcclxuICAgIGNvbnN0IHBvcHVwQ29tbWVudHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwb3B1cENvbW1lbnRzJykpIHx8IHt9O1xyXG4gICAgY29uc3Qgc3RvcmVkQ29tbWVudHMgPSBwb3B1cENvbW1lbnRzW3Bva2Vtb24ubmFtZV0gfHwgW107XHJcbiAgICBzdG9yZWRDb21tZW50cy5mb3JFYWNoKChjb21tZW50RGF0YSkgPT4ge1xyXG4gICAgICBjb25zdCBjb21tZW50SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBjb21tZW50SXRlbS5jbGFzc0xpc3QuYWRkKCdjb21tZW50LWl0ZW0nKTtcclxuXHJcbiAgICAgIGNvbnN0IGNvbW1lbnRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICBjb21tZW50Q29udGVudC5zdHlsZS5mb250U2l6ZSA9ICcxNXB4JztcclxuICAgICAgY29tbWVudENvbnRlbnQuc3R5bGUuY29sb3IgPSAnZ3JlZW4nO1xyXG4gICAgICBjb21tZW50Q29udGVudC50ZXh0Q29udGVudCA9IGAke2NvbW1lbnREYXRhLmRhdGV9IC8gJHtjb21tZW50RGF0YS5hdXRob3J9OiAke2NvbW1lbnREYXRhLnRleHR9YDtcclxuXHJcbiAgICAgIGNvbW1lbnRJdGVtLmFwcGVuZENoaWxkKGNvbW1lbnRDb250ZW50KTtcclxuICAgICAgY29tbWVudFNlY3Rpb24uYXBwZW5kQ2hpbGQoY29tbWVudEl0ZW0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVXBkYXRlIHRvdGFsIGNvbW1lbnQgY291bnRcclxuICAgIGNvbW1lbnRDb3VudC50ZXh0Q29udGVudCA9IGBUb3RhbCBDb21tZW50czogJHtzdG9yZWRDb21tZW50cy5sZW5ndGh9YDtcclxuXHJcbiAgICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cENvbnRlbnQpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwb3B1cCk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIFBva8OpbW9uIGRldGFpbHM6JywgZXJyb3IpO1xyXG4gIH1cclxufTtcclxuY29uc3QgdXBkYXRlTGlrZUNvdW50ID0gYXN5bmMgKGxpa2VCdXR0b24sIHBva2Vtb25OYW1lKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCBsaWtlQ291bnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwb2tlbW9uTmFtZSkgfHwgMDtcclxuXHJcbiAgICBsaWtlQnV0dG9uLnRleHRDb250ZW50ID0gYCR7bGlrZUNvdW50fSAke2xpa2VDb3VudCA9PT0gJzEnID8gJ0xpa2UnIDogJ0xpa2VzJ31gO1xyXG5cclxuICAgIGxpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGxpa2VDb3VudCArPSAxO1xyXG4gICAgICBsaWtlQnV0dG9uLnRleHRDb250ZW50ID0gYCR7bGlrZUNvdW50fSAke2xpa2VDb3VudCA9PT0gMSA/ICdMaWtlJyA6ICdMaWtlcyd9YDtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocG9rZW1vbk5hbWUsIGxpa2VDb3VudCk7XHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgbGlrZSBjb3VudDonLCBlcnJvcik7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZmV0Y2hQb2tlbW9uID0gYXN5bmMgKHBva2Vtb24pID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtCQVNFX0FQSV9VUkx9L3Bva2Vtb24vJHtwb2tlbW9uLm5hbWV9YCk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIGNvbnN0IGl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGl0ZW1EaXYuY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xyXG5cclxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgaW1nLnNyYyA9IGRhdGEuc3ByaXRlcy5mcm9udF9kZWZhdWx0O1xyXG4gICAgaW1nLmFsdCA9IGRhdGEubmFtZTtcclxuXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gcG9rZW1vbi5kZXNjcmlwdGlvbjtcclxuXHJcbiAgICBjb25zdCBhY3Rpb25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhY3Rpb25zRGl2LmNsYXNzTGlzdC5hZGQoJ2FjdGlvbnMnKTtcclxuXHJcbiAgICBjb25zdCBsaWtlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBsaWtlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2xpa2UnKTtcclxuICAgIHVwZGF0ZUxpa2VDb3VudChsaWtlQnV0dG9uLCBwb2tlbW9uLm5hbWUpO1xyXG5cclxuICAgIGNvbnN0IGNvbW1lbnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbW1lbnRCdXR0b24uY2xhc3NMaXN0LmFkZCgnY29tbWVudCcpO1xyXG4gICAgY29tbWVudEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb21tZW50JztcclxuICAgIGNvbW1lbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIG9wZW5Qb3B1cChwb2tlbW9uKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGFjdGlvbnNEaXYuYXBwZW5kQ2hpbGQobGlrZUJ1dHRvbik7XHJcbiAgICBhY3Rpb25zRGl2LmFwcGVuZENoaWxkKGNvbW1lbnRCdXR0b24pO1xyXG5cclxuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChhY3Rpb25zRGl2KTtcclxuXHJcbiAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EaXYpO1xyXG4gICAgaXRlbUNvdW50ZXIudGV4dENvbnRlbnQgPSBgVG90YWwgQ2FyZHM6ICR7cG9rZW1vbkNhcmRzLmxlbmd0aH1gO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBQb2vDqW1vbjonLCBlcnJvcik7XHJcbiAgfVxyXG59O1xyXG5cclxucG9rZW1vbkNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcclxuICBmZXRjaFBva2Vtb24oY2FyZCk7XHJcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==