webpackHotUpdate("static/development/pages/detail/[id].js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _asyncToGenerator; });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\n\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n        args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n\n      _next(undefined);\n    });\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcz8xZGExIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\n");

/***/ }),

/***/ "./pages/detail/[id].js":
/*!******************************!*\
  !*** ./pages/detail/[id].js ***!
  \******************************/
/*! exports provided: __N_SSG, default, getStaticPops */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return detail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPops\", function() { return getStaticPops; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/esm/index.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n\n\nvar _jsxFileName = \"/Users/duandingmin/workSpace/\\u6D82\\u9E26/tuya-lesson/movie/pages/detail/[id].js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__() { return \"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\"; }\n\n\n\n\n\nvar DatailContainer = false ? undefined : {\n  name: \"1i1ndt5-DatailContainer\",\n  styles: \"padding:10px 0;& > p{font-size:14px;margin-bottom:10px}& > img{display:block;margin-bottom:10px;};label:DatailContainer;\",\n  map: \"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kdWFuZGluZ21pbi93b3JrU3BhY2Uv5raC6bimL3R1eWEtbGVzc29uL21vdmllL3BhZ2VzL2RldGFpbC9baWRdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUkyQiIsImZpbGUiOiIvVXNlcnMvZHVhbmRpbmdtaW4vd29ya1NwYWNlL+a2gum4pi90dXlhLWxlc3Nvbi9tb3ZpZS9wYWdlcy9kZXRhaWwvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCJcbmltcG9ydCB7IEJveCwgSGVhZGluZywgVGV4dCwgRGl2aWRlciB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSdcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5cbmNvbnN0IERhdGFpbENvbnRhaW5lciA9IGNzc2BcbiAgcGFkZGluZzogMTBweCAwO1xuICAmID4gcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHhcbiAgfVxuICAmID4gaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRldGFpbCgpIHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPEJveCBtYXhXPXsxMjAwfSBtcz1cImF1dG9cIiBtdD1cIjcwcHhcIiA+XG4gICAgICAgIDxIZWFkaW5nIGFzPVwiaDJcIiBzaXplPVwieGxcIiA+TWFpbiBUaXRsZTogZGhha3dlaHdhREhLSnNmYWxrd2VoZnM8L0hlYWRpbmc+XG4gICAgICAgIDxIZWFkaW5nIGFzPVwiaDRcIiBzaXplPVwibGdcIiBtdD1cIjEwcHhcIiBjb2xvcj1cImdyYXkuNTAwXCIgZm9udFdlaWdodD1cImxpZ2h0XCIgPlNlY29uZCBUaXRsZTogamtsc2hka2F3Z2VkaWFraGRsYXdoZGtsYXdoZGlha3dnZDwvSGVhZGluZz5cbiAgICAgICAgPERpdmlkZXIgbXQ9XCIxMHB4XCIgLz5cbiAgICAgICAgPEJveCBvdmVyZmxvdz1cImhpZGRlblwiICA+XG4gICAgICAgICAgPFRleHQgZmxvYXQ9XCJsZWZ0XCIgPuS9nOiAhe+8mlRvbWFzPC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGZsb2F0PVwicmlnaHRcIiA+5Y+R5biD5pel5pyf77yaMTk5OC0xMS05PC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPERpdmlkZXIgbXQ9XCIxMHB4XCIgLz5cbiAgICAgICAgPEJveCBjc3M9e0RhdGFpbENvbnRhaW5lcn0gPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgdGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lclxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIHRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJcbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICB0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVyXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgdGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lclxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG4vLyDojrflj5bliLDnlKjmiLfog73orr/pl67liLDnmoTmiYDmnInot6/nlLHlj4LmlbBcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocyAoKSB7XG5cbn1cblxuLy8g5qC55o2u5Y+C5pWw6I635Y+W5YW25a+55bqU55qE5pWw5o2uXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUG9wcyAoKSB7XG4gIFxufSJdfQ== */\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\nvar __N_SSG = true;\nfunction detail() {\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n    maxW: 1200,\n    ms: \"auto\",\n    mt: \"70px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Heading\"], {\n    as: \"h2\",\n    size: \"xl\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, \"Main Title: dhakwehwaDHKJsfalkwehfs\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Heading\"], {\n    as: \"h4\",\n    size: \"lg\",\n    mt: \"10px\",\n    color: \"gray.500\",\n    fontWeight: \"light\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, \"Second Title: jklshdkawgediakhdlawhdklawhdiakwgd\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Divider\"], {\n    mt: \"10px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n    overflow: \"hidden\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n    \"float\": \"left\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 11\n    }\n  }, \"\\u4F5C\\u8005\\uFF1ATomas\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n    \"float\": \"right\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 11\n    }\n  }, \"\\u53D1\\u5E03\\u65E5\\u671F\\uFF1A1998-11-9\")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Divider\"], {\n    mt: \"10px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n    css: DatailContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }\n  }, \"text containertext containertext containertext containertext containertext containertext containertext containertext containertext containertext container\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }\n  }, \"text containertext containertext containertext containertext containertext containertext containertext containertext containertext containertext container\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  }, \"text containertext containertext containertext containertext containertext containertext containertext containertext containertext containertext container\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }\n  }, \"text containertext containertext containertext containertext containertext containertext containertext containertext containertext containertext container\"))));\n} // 获取到用户能访问到的所有路由参数\n\n// 根据参数获取其对应的数据\nfunction getStaticPops() {\n  return _getStaticPops.apply(this, arguments);\n}\n\nfunction _getStaticPops() {\n  _getStaticPops = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getStaticPops.apply(this, arguments);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kZXRhaWwvLmpzPzk1NGQiXSwibmFtZXMiOlsiRGF0YWlsQ29udGFpbmVyIiwiZGV0YWlsIiwiZ2V0U3RhdGljUG9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZUFBZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBckI7O0FBWWUsU0FBU0MsTUFBVCxHQUFrQjtBQUMvQixTQUNFLDBEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSwwREFBQyxtREFBRDtBQUFLLFFBQUksRUFBRSxJQUFYO0FBQWlCLE1BQUUsRUFBQyxNQUFwQjtBQUEyQixNQUFFLEVBQUMsTUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLDBEQUFDLHVEQUFEO0FBQVMsTUFBRSxFQUFDLElBQVo7QUFBaUIsUUFBSSxFQUFDLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkNBREYsRUFFRSwwREFBQyx1REFBRDtBQUFTLE1BQUUsRUFBQyxJQUFaO0FBQWlCLFFBQUksRUFBQyxJQUF0QjtBQUEyQixNQUFFLEVBQUMsTUFBOUI7QUFBcUMsU0FBSyxFQUFDLFVBQTNDO0FBQXNELGNBQVUsRUFBQyxPQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdEQUZGLEVBR0UsMERBQUMsdURBQUQ7QUFBUyxNQUFFLEVBQUMsTUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFJRSwwREFBQyxtREFBRDtBQUFLLFlBQVEsRUFBQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSwwREFBQyxvREFBRDtBQUFNLGFBQU0sTUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURGLEVBRUUsMERBQUMsb0RBQUQ7QUFBTSxhQUFNLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQ0FGRixDQUpGLEVBUUUsMERBQUMsdURBQUQ7QUFBUyxNQUFFLEVBQUMsTUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsRUFTRSwwREFBQyxtREFBRDtBQUFLLE9BQUcsRUFBRUQsZUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrS0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0tBSkYsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtLQVBGLEVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrS0FWRixDQVRGLENBREYsQ0FERjtBQTRCRCxDLENBRUQ7O0FBS0E7QUFDTyxTQUFlRSxhQUF0QjtBQUFBO0FBQUE7OztvTUFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJmaWxlIjoiLi9wYWdlcy9kZXRhaWwvW2lkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCJcbmltcG9ydCB7IEJveCwgSGVhZGluZywgVGV4dCwgRGl2aWRlciB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSdcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5cbmNvbnN0IERhdGFpbENvbnRhaW5lciA9IGNzc2BcbiAgcGFkZGluZzogMTBweCAwO1xuICAmID4gcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHhcbiAgfVxuICAmID4gaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRldGFpbCgpIHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPEJveCBtYXhXPXsxMjAwfSBtcz1cImF1dG9cIiBtdD1cIjcwcHhcIiA+XG4gICAgICAgIDxIZWFkaW5nIGFzPVwiaDJcIiBzaXplPVwieGxcIiA+TWFpbiBUaXRsZTogZGhha3dlaHdhREhLSnNmYWxrd2VoZnM8L0hlYWRpbmc+XG4gICAgICAgIDxIZWFkaW5nIGFzPVwiaDRcIiBzaXplPVwibGdcIiBtdD1cIjEwcHhcIiBjb2xvcj1cImdyYXkuNTAwXCIgZm9udFdlaWdodD1cImxpZ2h0XCIgPlNlY29uZCBUaXRsZTogamtsc2hka2F3Z2VkaWFraGRsYXdoZGtsYXdoZGlha3dnZDwvSGVhZGluZz5cbiAgICAgICAgPERpdmlkZXIgbXQ9XCIxMHB4XCIgLz5cbiAgICAgICAgPEJveCBvdmVyZmxvdz1cImhpZGRlblwiICA+XG4gICAgICAgICAgPFRleHQgZmxvYXQ9XCJsZWZ0XCIgPuS9nOiAhe+8mlRvbWFzPC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGZsb2F0PVwicmlnaHRcIiA+5Y+R5biD5pel5pyf77yaMTk5OC0xMS05PC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPERpdmlkZXIgbXQ9XCIxMHB4XCIgLz5cbiAgICAgICAgPEJveCBjc3M9e0RhdGFpbENvbnRhaW5lcn0gPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgdGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lclxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIHRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJcbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICB0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVyXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgdGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lclxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG4vLyDojrflj5bliLDnlKjmiLfog73orr/pl67liLDnmoTmiYDmnInot6/nlLHlj4LmlbBcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocyAoKSB7XG5cbn1cblxuLy8g5qC55o2u5Y+C5pWw6I635Y+W5YW25a+55bqU55qE5pWw5o2uXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUG9wcyAoKSB7XG4gIFxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/detail/[id].js\n");

/***/ })

})