webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Movies.js":
/*!******************************!*\
  !*** ./components/Movies.js ***!
  \******************************/
/*! exports provided: default, loadMovie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Movies; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadMovie\", function() { return loadMovie; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/esm/index.js\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _axiosConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../axiosConfig */ \"./axiosConfig.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nvar _jsxFileName = \"/Users/duandingmin/workSpace/\\u6D82\\u9E26/tuya-lesson/movie/components/Movies.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction Movies() {\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    maxW: 1200,\n    mx: \"auto\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"HStack\"], {\n    fontSize: \"24px\",\n    mx: \"auto\",\n    mt: \"20px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_2__[\"MdMovie\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n    as: \"h3\",\n    fontSize: \"24px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, \"\\u7535\\u5F71\")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"HStack\"], {\n    mt: \"20px\",\n    spacing: 3,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    w: 290,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n    src: \"/images/item_1.jpg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 11\n    }\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    mt: \"10px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 11\n    }\n  }, \"Movie 1Movie 1Movie 1\")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    w: 290,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n    src: \"/images/item_1.jpg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 11\n    }\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    mt: \"10px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 11\n    }\n  }, \"Movie 1Movie 1Movie 1\"))));\n}\n_c = Movies;\nfunction loadMovie() {}\n\nvar _c;\n\n$RefreshReg$(_c, \"Movies\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01vdmllcy5qcz80ZGFmIl0sIm5hbWVzIjpbIk1vdmllcyIsImxvYWRNb3ZpZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDZSxTQUFTQSxNQUFULEdBQWtCO0FBQy9CLFNBQ0UsMERBQUMsbURBQUQ7QUFBSyxRQUFJLEVBQUUsSUFBWDtBQUFpQixNQUFFLEVBQUMsTUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLDBEQUFDLHNEQUFEO0FBQVEsWUFBUSxFQUFDLE1BQWpCO0FBQXdCLE1BQUUsRUFBQyxNQUEzQjtBQUFrQyxNQUFFLEVBQUMsTUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLDBEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLDBEQUFDLHVEQUFEO0FBQVMsTUFBRSxFQUFDLElBQVo7QUFBaUIsWUFBUSxFQUFDLE1BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkYsQ0FERixFQUtFLDBEQUFDLHNEQUFEO0FBQVEsTUFBRSxFQUFDLE1BQVg7QUFBa0IsV0FBTyxFQUFFLENBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSwwREFBQyxtREFBRDtBQUFLLEtBQUMsRUFBRSxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSwwREFBQyxxREFBRDtBQUFPLE9BQUcsRUFBQyxvQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSwwREFBQyxvREFBRDtBQUFNLE1BQUUsRUFBQyxNQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRkYsQ0FERixFQUtFLDBEQUFDLG1EQUFEO0FBQUssS0FBQyxFQUFFLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLDBEQUFDLHFEQUFEO0FBQU8sT0FBRyxFQUFDLG9CQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLDBEQUFDLG9EQUFEO0FBQU0sTUFBRSxFQUFDLE1BQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFGRixDQUxGLENBTEYsQ0FERjtBQWtCRDtLQW5CdUJBLE07QUFxQmpCLFNBQVNDLFNBQVQsR0FBc0IsQ0FFNUIiLCJmaWxlIjoiLi9jb21wb25lbnRzL01vdmllcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgSGVhZGluZywgSFN0YWNrLCBJbWFnZSwgVGV4dCB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSdcbmltcG9ydCB7IE1kTW92aWUgfSBmcm9tICdyZWFjdC1pY29ucy9tZCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IGJhc2VVUkwgfSBmcm9tICcuLi9heGlvc0NvbmZpZydcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllcygpIHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IG1heFc9ezEyMDB9IG14PVwiYXV0b1wiID5cbiAgICAgIDxIU3RhY2sgZm9udFNpemU9XCIyNHB4XCIgbXg9XCJhdXRvXCIgbXQ9XCIyMHB4XCIgPlxuICAgICAgICA8TWRNb3ZpZSAvPlxuICAgICAgICA8SGVhZGluZyBhcz1cImgzXCIgZm9udFNpemU9XCIyNHB4XCIgPueUteW9sTwvSGVhZGluZz5cbiAgICAgIDwvSFN0YWNrPlxuICAgICAgPEhTdGFjayBtdD1cIjIwcHhcIiBzcGFjaW5nPXszfSA+XG4gICAgICAgIDxCb3ggdz17MjkwfSA+XG4gICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWFnZXMvaXRlbV8xLmpwZ1wiIC8+XG4gICAgICAgICAgPFRleHQgbXQ9XCIxMHB4XCIgPk1vdmllIDFNb3ZpZSAxTW92aWUgMTwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggdz17MjkwfSA+XG4gICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWFnZXMvaXRlbV8xLmpwZ1wiIC8+XG4gICAgICAgICAgPFRleHQgbXQ9XCIxMHB4XCIgPk1vdmllIDFNb3ZpZSAxTW92aWUgMTwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0hTdGFjaz5cbiAgICA8L0JveD5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZE1vdmllICgpIHtcblxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Movies.js\n");

/***/ })

})