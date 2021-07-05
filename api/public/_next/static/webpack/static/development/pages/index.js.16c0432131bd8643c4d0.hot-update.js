webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Swiper.js":
/*!******************************!*\
  !*** ./components/Swiper.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Swiper; });\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/esm/index.js\");\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive-carousel */ \"./node_modules/react-responsive-carousel/lib/es/index.js\");\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n\nvar _jsxFileName = \"/Users/duandingmin/workSpace/\\u6D82\\u9E26/tuya-lesson/movie/components/Swiper.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__() { return \"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\"; }\n\n\n\n\n\n\n\nvar CarouselItem = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", {\n  target: \"e10ehgb00\",\n  label: \"CarouselItem\"\n})(false ? undefined : {\n  name: \"1ygx2u6\",\n  styles: \"position:relative;& > div{position:absolute;left:50%;top:0;transform:translateX(-50%);color:#FFF;padding-top:180px;text-align:left;max-width:1200px;& > p{margin:15px 0;font-size:14px;width:450px;}& > img{filter:briness(50%);}}\",\n  map: \"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kdWFuZGluZ21pbi93b3JrU3BhY2Uv5raC6bimL3R1eWEtbGVzc29uL21vdmllL2NvbXBvbmVudHMvU3dpcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU0rQiIsImZpbGUiOiIvVXNlcnMvZHVhbmRpbmdtaW4vd29ya1NwYWNlL+a2gum4pi90dXlhLWxlc3Nvbi9tb3ZpZS9jb21wb25lbnRzL1N3aXBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IEJveCwgSGVhZGluZywgVGV4dCwgQnV0dG9uIH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJ1xuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICdyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsJ1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5jb25zdCBDYXJvdXNlbEl0ZW0gPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICYgPiBkaXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBwYWRkaW5nLXRvcDogMTgwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICAmID4gcCB7XG4gICAgICBtYXJnaW46IDE1cHggMDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHdpZHRoOiA0NTBweDtcbiAgICB9XG4gICAgJiA+IGltZyB7XG4gICAgICBmaWx0ZXI6IGJyaW5lc3MoNTAlKTtcbiAgICB9XG4gIH1cbmBcbmNvbnN0IHN3aXBlckNvbnRhaW5lciA9IGNzc2BcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmID4gLmNhcm91c2VsOmxhc3QtY2hpbGQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5mcm9tOiB0cmFuc2xhdGV4KC01MCUpO1xuICB9XG5gXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTd2lwZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9jc3MvY2Fyb3VzZWwubWluLmNzc1wiID48L2xpbms+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Q2Fyb3VzZWwgY3NzPXtzd2lwZXJDb250YWluZXJ9IHNob3dBcnJvd3M9e2ZhbHNlfSBzaG93SW5kaWNhdG9ycz17ZmFsc2V9IHNob3dTdGF0dXM9e2ZhbHNlfSA+XG4gICAgICAgIDxDYXJvdXNlbEl0ZW0+XG4gICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzLzEuanBnXCIgLz5cbiAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgPEhlYWRpbmcgIGFzPVwiaDJcIiBzaXplPVwibGdcIiA+S0lORyBJTiBCTEFDSzwvSGVhZGluZz5cbiAgICAgICAgICAgIDxUZXh0PlRoZSBuZXh0IHNob2NraW5nIGNoYXB0ZXIgaW4gRG9ubnkgQ2F0ZXMgYW5kIFJ5dWFuIFN0ZWdtYW4nczwvVGV4dD5cbiAgICAgICAgICAgIDxCdXR0b24gYmdDb2xvcj1cIiNmNDBcIiA+Q0hFQ0sgREVUQUlMPC9CdXR0b24+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQ2Fyb3VzZWxJdGVtPlxuICAgICAgICA8Q2Fyb3VzZWxJdGVtPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy8yLmpwZ1wiIC8+XG4gICAgICAgIDwvQ2Fyb3VzZWxJdGVtPlxuICAgICAgICA8Q2Fyb3VzZWxJdGVtPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy8zLmpwZ1wiIC8+XG4gICAgICAgIDwvQ2Fyb3VzZWxJdGVtPlxuICAgICAgPC9DYXJvdXNlbD5cbiAgICA8Lz5cbiAgKVxufSJdfQ== */\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n});\n\nvar swiperContainer = false ? undefined : {\n  name: \"11c9a56-swiperContainer\",\n  styles: \"position:relative;& > .carousel:last-child{position:absolute;bottom:0;left:50%;tranfrom:translatex(-50%);};label:swiperContainer;\",\n  map: \"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kdWFuZGluZ21pbi93b3JrU3BhY2Uv5raC6bimL3R1eWEtbGVzc29uL21vdmllL2NvbXBvbmVudHMvU3dpcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCMkIiLCJmaWxlIjoiL1VzZXJzL2R1YW5kaW5nbWluL3dvcmtTcGFjZS/mtoLpuKYvdHV5YS1sZXNzb24vbW92aWUvY29tcG9uZW50cy9Td2lwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBCb3gsIEhlYWRpbmcsIFRleHQsIEJ1dHRvbiB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSdcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAncmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbCdcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuY29uc3QgQ2Fyb3VzZWxJdGVtID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmID4gZGl2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgcGFkZGluZy10b3A6IDE4MHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgJiA+IHAge1xuICAgICAgbWFyZ2luOiAxNXB4IDA7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB3aWR0aDogNDUwcHg7XG4gICAgfVxuICAgICYgPiBpbWcge1xuICAgICAgZmlsdGVyOiBicmluZXNzKDUwJSk7XG4gICAgfVxuICB9XG5gXG5jb25zdCBzd2lwZXJDb250YWluZXIgPSBjc3NgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgJiA+IC5jYXJvdXNlbDpsYXN0LWNoaWxkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuZnJvbTogdHJhbnNsYXRleCgtNTAlKTtcbiAgfVxuYFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3dpcGVyKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvY3NzL2Nhcm91c2VsLm1pbi5jc3NcIiA+PC9saW5rPlxuICAgICAgPC9IZWFkPlxuICAgICAgPENhcm91c2VsIGNzcz17c3dpcGVyQ29udGFpbmVyfSBzaG93QXJyb3dzPXtmYWxzZX0gc2hvd0luZGljYXRvcnM9e2ZhbHNlfSBzaG93U3RhdHVzPXtmYWxzZX0gPlxuICAgICAgICA8Q2Fyb3VzZWxJdGVtPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy8xLmpwZ1wiIC8+XG4gICAgICAgICAgPEJveD5cbiAgICAgICAgICAgIDxIZWFkaW5nICBhcz1cImgyXCIgc2l6ZT1cImxnXCIgPktJTkcgSU4gQkxBQ0s8L0hlYWRpbmc+XG4gICAgICAgICAgICA8VGV4dD5UaGUgbmV4dCBzaG9ja2luZyBjaGFwdGVyIGluIERvbm55IENhdGVzIGFuZCBSeXVhbiBTdGVnbWFuJ3M8L1RleHQ+XG4gICAgICAgICAgICA8QnV0dG9uIGJnQ29sb3I9XCIjZjQwXCIgPkNIRUNLIERFVEFJTDwvQnV0dG9uPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0Nhcm91c2VsSXRlbT5cbiAgICAgICAgPENhcm91c2VsSXRlbT5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvMi5qcGdcIiAvPlxuICAgICAgICA8L0Nhcm91c2VsSXRlbT5cbiAgICAgICAgPENhcm91c2VsSXRlbT5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvMy5qcGdcIiAvPlxuICAgICAgICA8L0Nhcm91c2VsSXRlbT5cbiAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgPC8+XG4gIClcbn0iXX0= */\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\nfunction Swiper() {\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"link\", {\n    rel: \"stylesheet\",\n    href: \"/css/carousel.min.css\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_4__[\"Carousel\"], {\n    css: swiperContainer,\n    showArrows: false,\n    showIndicators: false,\n    showStatus: false,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(CarouselItem, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"img\", {\n    src: \"/images/1.jpg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 11\n    }\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 11\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Heading\"], {\n    as: \"h2\",\n    size: \"lg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }\n  }, \"KING IN BLACK\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }\n  }, \"The next shocking chapter in Donny Cates and Ryuan Stegman's\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    bgColor: \"#f40\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }\n  }, \"CHECK DETAIL\"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(CarouselItem, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"img\", {\n    src: \"/images/2.jpg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 11\n    }\n  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(CarouselItem, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"img\", {\n    src: \"/images/3.jpg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }\n  }))));\n}\n_c = Swiper;\n\nvar _c;\n\n$RefreshReg$(_c, \"Swiper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1N3aXBlci5qcz83M2FmIl0sIm5hbWVzIjpbIkNhcm91c2VsSXRlbSIsInN3aXBlckNvbnRhaW5lciIsIlN3aXBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLElBQU1BLFlBQVksR0FBRztBQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFBbEI7O0FBcUJBLElBQU1DLGVBQWU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXJCO0FBU2UsU0FBU0MsTUFBVCxHQUFrQjtBQUMvQixTQUNFLHVIQUNFLDBEQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLE9BQUcsRUFBQyxZQUFWO0FBQXVCLFFBQUksRUFBQyx1QkFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRSwwREFBQyxrRUFBRDtBQUFVLE9BQUcsRUFBRUQsZUFBZjtBQUFnQyxjQUFVLEVBQUUsS0FBNUM7QUFBbUQsa0JBQWMsRUFBRSxLQUFuRTtBQUEwRSxjQUFVLEVBQUUsS0FBdEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLDBEQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLGVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsMERBQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLDBEQUFDLHVEQUFEO0FBQVUsTUFBRSxFQUFDLElBQWI7QUFBa0IsUUFBSSxFQUFDLElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFFRSwwREFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9FQUZGLEVBR0UsMERBQUMsc0RBQUQ7QUFBUSxXQUFPLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFIRixDQUZGLENBREYsRUFTRSwwREFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBQyxlQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVRGLEVBWUUsMERBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMsZUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FaRixDQUpGLENBREY7QUF1QkQ7S0F4QnVCQyxNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Td2lwZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBCb3gsIEhlYWRpbmcsIFRleHQsIEJ1dHRvbiB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSdcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAncmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbCdcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuY29uc3QgQ2Fyb3VzZWxJdGVtID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmID4gZGl2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgcGFkZGluZy10b3A6IDE4MHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgJiA+IHAge1xuICAgICAgbWFyZ2luOiAxNXB4IDA7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB3aWR0aDogNDUwcHg7XG4gICAgfVxuICAgICYgPiBpbWcge1xuICAgICAgZmlsdGVyOiBicmluZXNzKDUwJSk7XG4gICAgfVxuICB9XG5gXG5jb25zdCBzd2lwZXJDb250YWluZXIgPSBjc3NgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgJiA+IC5jYXJvdXNlbDpsYXN0LWNoaWxkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuZnJvbTogdHJhbnNsYXRleCgtNTAlKTtcbiAgfVxuYFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3dpcGVyKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvY3NzL2Nhcm91c2VsLm1pbi5jc3NcIiA+PC9saW5rPlxuICAgICAgPC9IZWFkPlxuICAgICAgPENhcm91c2VsIGNzcz17c3dpcGVyQ29udGFpbmVyfSBzaG93QXJyb3dzPXtmYWxzZX0gc2hvd0luZGljYXRvcnM9e2ZhbHNlfSBzaG93U3RhdHVzPXtmYWxzZX0gPlxuICAgICAgICA8Q2Fyb3VzZWxJdGVtPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy8xLmpwZ1wiIC8+XG4gICAgICAgICAgPEJveD5cbiAgICAgICAgICAgIDxIZWFkaW5nICBhcz1cImgyXCIgc2l6ZT1cImxnXCIgPktJTkcgSU4gQkxBQ0s8L0hlYWRpbmc+XG4gICAgICAgICAgICA8VGV4dD5UaGUgbmV4dCBzaG9ja2luZyBjaGFwdGVyIGluIERvbm55IENhdGVzIGFuZCBSeXVhbiBTdGVnbWFuJ3M8L1RleHQ+XG4gICAgICAgICAgICA8QnV0dG9uIGJnQ29sb3I9XCIjZjQwXCIgPkNIRUNLIERFVEFJTDwvQnV0dG9uPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0Nhcm91c2VsSXRlbT5cbiAgICAgICAgPENhcm91c2VsSXRlbT5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvMi5qcGdcIiAvPlxuICAgICAgICA8L0Nhcm91c2VsSXRlbT5cbiAgICAgICAgPENhcm91c2VsSXRlbT5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvMy5qcGdcIiAvPlxuICAgICAgICA8L0Nhcm91c2VsSXRlbT5cbiAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgPC8+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Swiper.js\n");

/***/ })

})