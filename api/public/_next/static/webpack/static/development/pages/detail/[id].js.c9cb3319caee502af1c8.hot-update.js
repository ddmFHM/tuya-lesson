webpackHotUpdate("static/development/pages/detail/[id].js",{

/***/ "./pages/detail/[id].js":
/*!******************************!*\
  !*** ./pages/detail/[id].js ***!
  \******************************/
/*! exports provided: __N_SSG, default, getStaticPops */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return detail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPops\", function() { return getStaticPops; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/esm/index.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _axiosConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../axiosConfig */ \"./axiosConfig.js\");\n\n\nvar _jsxFileName = \"/Users/duandingmin/workSpace/\\u6D82\\u9E26/tuya-lesson/movie/pages/detail/[id].js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__() { return \"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\"; }\n\n\n\n\n\n\n\nvar DatailContainer = false ? undefined : {\n  name: \"1i1ndt5-DatailContainer\",\n  styles: \"padding:10px 0;& > p{font-size:14px;margin-bottom:10px}& > img{display:block;margin-bottom:10px;};label:DatailContainer;\",\n  map: \"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kdWFuZGluZ21pbi93b3JrU3BhY2Uv5raC6bimL3R1eWEtbGVzc29uL21vdmllL3BhZ2VzL2RldGFpbC9baWRdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU0yQiIsImZpbGUiOiIvVXNlcnMvZHVhbmRpbmdtaW4vd29ya1NwYWNlL+a2gum4pi90dXlhLWxlc3Nvbi9tb3ZpZS9wYWdlcy9kZXRhaWwvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCJcbmltcG9ydCB7IEJveCwgSGVhZGluZywgVGV4dCwgRGl2aWRlciB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSdcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcbmltcG9ydCB7IGJhc2VVUkwgfSBmcm9tIFwiLi4vLi4vYXhpb3NDb25maWdcIlxuXG5jb25zdCBEYXRhaWxDb250YWluZXIgPSBjc3NgXG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgJiA+IHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4XG4gIH1cbiAgJiA+IGltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXRhaWwoKSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxCb3ggbWF4Vz17MTIwMH0gbXM9XCJhdXRvXCIgbXQ9XCI3MHB4XCIgPlxuICAgICAgICA8SGVhZGluZyBhcz1cImgyXCIgc2l6ZT1cInhsXCIgPk1haW4gVGl0bGU6IGRoYWt3ZWh3YURIS0pzZmFsa3dlaGZzPC9IZWFkaW5nPlxuICAgICAgICA8SGVhZGluZyBhcz1cImg0XCIgc2l6ZT1cImxnXCIgbXQ9XCIxMHB4XCIgY29sb3I9XCJncmF5LjUwMFwiIGZvbnRXZWlnaHQ9XCJsaWdodFwiID5TZWNvbmQgVGl0bGU6IGprbHNoZGthd2dlZGlha2hkbGF3aGRrbGF3aGRpYWt3Z2Q8L0hlYWRpbmc+XG4gICAgICAgIDxEaXZpZGVyIG10PVwiMTBweFwiIC8+XG4gICAgICAgIDxCb3ggb3ZlcmZsb3c9XCJoaWRkZW5cIiAgPlxuICAgICAgICAgIDxUZXh0IGZsb2F0PVwibGVmdFwiID7kvZzogIXvvJpUb21hczwvVGV4dD5cbiAgICAgICAgICA8VGV4dCBmbG9hdD1cInJpZ2h0XCIgPuWPkeW4g+aXpeacn++8mjE5OTgtMTEtOTwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxEaXZpZGVyIG10PVwiMTBweFwiIC8+XG4gICAgICAgIDxCb3ggY3NzPXtEYXRhaWxDb250YWluZXJ9ID5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIHRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJcbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICB0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVyXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgdGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lclxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIHRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuLy8g6I635Y+W5Yiw55So5oi36IO96K6/6Zeu5Yiw55qE5omA5pyJ6Lev55Sx5Y+C5pWwXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMgKCkge1xuXG59XG5cbi8vIOagueaNruWPguaVsOiOt+WPluWFtuWvueW6lOeahOaVsOaNrlxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BvcHMgKCkge1xuXG59Il19 */\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\nvar __N_SSG = true;\nfunction detail() {\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n    maxW: 1200,\n    ms: \"auto\",\n    mt: \"70px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Heading\"], {\n    as: \"h2\",\n    size: \"xl\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, \"Main Title: dhakwehwaDHKJsfalkwehfs\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Heading\"], {\n    as: \"h4\",\n    size: \"lg\",\n    mt: \"10px\",\n    color: \"gray.500\",\n    fontWeight: \"light\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, \"Second Title: jklshdkawgediakhdlawhdklawhdiakwgd\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Divider\"], {\n    mt: \"10px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n    overflow: \"hidden\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n    \"float\": \"left\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }, \"\\u4F5C\\u8005\\uFF1ATomas\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n    \"float\": \"right\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }\n  }, \"\\u53D1\\u5E03\\u65E5\\u671F\\uFF1A1998-11-9\")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Divider\"], {\n    mt: \"10px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n    css: DatailContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  }, \"text containertext containertext containertext containertext containertext containertext containertext containertext containertext containertext container\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 11\n    }\n  }, \"text containertext containertext containertext containertext containertext containertext containertext containertext containertext containertext container\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }\n  }, \"text containertext containertext containertext containertext containertext containertext containertext containertext containertext containertext container\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 11\n    }\n  }, \"text containertext containertext containertext containertext containertext containertext containertext containertext containertext containertext container\"))));\n} // 获取到用户能访问到的所有路由参数\n\n// 根据参数获取其对应的数据\nfunction getStaticPops() {\n  return _getStaticPops.apply(this, arguments);\n}\n\nfunction _getStaticPops() {\n  _getStaticPops = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getStaticPops.apply(this, arguments);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kZXRhaWwvLmpzPzk1NGQiXSwibmFtZXMiOlsiRGF0YWlsQ29udGFpbmVyIiwiZGV0YWlsIiwiZ2V0U3RhdGljUG9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGVBQWU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXJCOztBQVllLFNBQVNDLE1BQVQsR0FBa0I7QUFDL0IsU0FDRSwwREFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsMERBQUMsbURBQUQ7QUFBSyxRQUFJLEVBQUUsSUFBWDtBQUFpQixNQUFFLEVBQUMsTUFBcEI7QUFBMkIsTUFBRSxFQUFDLE1BQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSwwREFBQyx1REFBRDtBQUFTLE1BQUUsRUFBQyxJQUFaO0FBQWlCLFFBQUksRUFBQyxJQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJDQURGLEVBRUUsMERBQUMsdURBQUQ7QUFBUyxNQUFFLEVBQUMsSUFBWjtBQUFpQixRQUFJLEVBQUMsSUFBdEI7QUFBMkIsTUFBRSxFQUFDLE1BQTlCO0FBQXFDLFNBQUssRUFBQyxVQUEzQztBQUFzRCxjQUFVLEVBQUMsT0FBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3REFGRixFQUdFLDBEQUFDLHVEQUFEO0FBQVMsTUFBRSxFQUFDLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUUsMERBQUMsbURBQUQ7QUFBSyxZQUFRLEVBQUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsMERBQUMsb0RBQUQ7QUFBTSxhQUFNLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFERixFQUVFLDBEQUFDLG9EQUFEO0FBQU0sYUFBTSxPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0NBRkYsQ0FKRixFQVFFLDBEQUFDLHVEQUFEO0FBQVMsTUFBRSxFQUFDLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLEVBU0UsMERBQUMsbURBQUQ7QUFBSyxPQUFHLEVBQUVELGVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0tBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtLQUpGLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrS0FQRixFQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0tBVkYsQ0FURixDQURGLENBREY7QUE0QkQsQyxDQUVEOztBQUtBO0FBQ08sU0FBZUUsYUFBdEI7QUFBQTtBQUFBOzs7b01BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwiZmlsZSI6Ii4vcGFnZXMvZGV0YWlsL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiXG5pbXBvcnQgeyBCb3gsIEhlYWRpbmcsIFRleHQsIERpdmlkZXIgfSBmcm9tICdAY2hha3JhLXVpL2NvcmUnXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5pbXBvcnQgeyBiYXNlVVJMIH0gZnJvbSBcIi4uLy4uL2F4aW9zQ29uZmlnXCJcblxuY29uc3QgRGF0YWlsQ29udGFpbmVyID0gY3NzYFxuICBwYWRkaW5nOiAxMHB4IDA7XG4gICYgPiBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweFxuICB9XG4gICYgPiBpbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGV0YWlsKCkge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8Qm94IG1heFc9ezEyMDB9IG1zPVwiYXV0b1wiIG10PVwiNzBweFwiID5cbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoMlwiIHNpemU9XCJ4bFwiID5NYWluIFRpdGxlOiBkaGFrd2Vod2FESEtKc2ZhbGt3ZWhmczwvSGVhZGluZz5cbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoNFwiIHNpemU9XCJsZ1wiIG10PVwiMTBweFwiIGNvbG9yPVwiZ3JheS41MDBcIiBmb250V2VpZ2h0PVwibGlnaHRcIiA+U2Vjb25kIFRpdGxlOiBqa2xzaGRrYXdnZWRpYWtoZGxhd2hka2xhd2hkaWFrd2dkPC9IZWFkaW5nPlxuICAgICAgICA8RGl2aWRlciBtdD1cIjEwcHhcIiAvPlxuICAgICAgICA8Qm94IG92ZXJmbG93PVwiaGlkZGVuXCIgID5cbiAgICAgICAgICA8VGV4dCBmbG9hdD1cImxlZnRcIiA+5L2c6ICF77yaVG9tYXM8L1RleHQ+XG4gICAgICAgICAgPFRleHQgZmxvYXQ9XCJyaWdodFwiID7lj5HluIPml6XmnJ/vvJoxOTk4LTExLTk8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8RGl2aWRlciBtdD1cIjEwcHhcIiAvPlxuICAgICAgICA8Qm94IGNzcz17RGF0YWlsQ29udGFpbmVyfSA+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICB0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVyXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgdGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lclxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIHRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJcbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICB0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVydGV4dCBjb250YWluZXJ0ZXh0IGNvbnRhaW5lcnRleHQgY29udGFpbmVyXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbi8vIOiOt+WPluWIsOeUqOaIt+iDveiuv+mXruWIsOeahOaJgOaciei3r+eUseWPguaVsFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzICgpIHtcblxufVxuXG4vLyDmoLnmja7lj4LmlbDojrflj5blhbblr7nlupTnmoTmlbDmja5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQb3BzICgpIHtcblxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/detail/[id].js\n");

/***/ })

})