webpackHotUpdate("static\\development\\pages\\form.js",{

/***/ "./pages/form.js":
/*!***********************!*\
  !*** ./pages/form.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\Internship Programs\\React\\pages\\form.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function Form() {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(function (state, newState) {
    return _objectSpread({}, state, {}, newState);
  }, {
    name: "",
    address: ""
  }),
      userInput = _useReducer[0],
      setUserInput = _useReducer[1];

  var handleChange = function handleChange(evt) {
    var name = evt.target.name;
    var newValue = evt.target.value;
    setUserInput(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, newValue));
  };

  var handleSubmit = function handleSubmit(event) {
    alert("A name was submitted: " + userInput.name);
    event.preventDefault();
  };

  return __jsx("form", {
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, "Name:", __jsx("input", {
    type: "text",
    value: userInput.name,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  })), __jsx("input", {
    type: "submit",
    value: "Submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ })

})
//# sourceMappingURL=form.js.7c04760b0fe5f61b3a6a.hot-update.js.map