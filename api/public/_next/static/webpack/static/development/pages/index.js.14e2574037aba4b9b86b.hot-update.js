webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Swiper.js":
/*!******************************!*\
  !*** ./components/Swiper.js ***!
  \******************************/
/*! exports provided: default, loadSwiper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Swiper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadSwiper\", function() { return loadSwiper; });\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/esm/index.js\");\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-responsive-carousel */ \"./node_modules/react-responsive-carousel/lib/es/index.js\");\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _axiosConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../axiosConfig */ \"./axiosConfig.js\");\n\nvar _jsxFileName = \"/Users/duandingmin/workSpace/\\u6D82\\u9E26/tuya-lesson/movie/components/Swiper.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__() { return \"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\"; }\n\n\n\n\n\n\n\n\n\n\nvar CarouselItem = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", {\n  target: \"e10ehgb00\",\n  label: \"CarouselItem\"\n})(false ? undefined : {\n  name: \"mursgm\",\n  styles: \"position:relative;& > div{position:absolute;left:30%;top:0;transform:translateX(-50%);color:#FFF;padding-top:180px;text-align:left;max-width:1200px;& > p{margin:15px 0;font-size:14px;width:450px;}& > img{filter:brightness(50%);}}\",\n  map: \"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kdWFuZGluZ21pbi93b3JrU3BhY2Uv5raC6bimL3R1eWEtbGVzc29uL21vdmllL2NvbXBvbmVudHMvU3dpcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVMrQiIsImZpbGUiOiIvVXNlcnMvZHVhbmRpbmdtaW4vd29ya1NwYWNlL+a2gum4pi90dXlhLWxlc3Nvbi9tb3ZpZS9jb21wb25lbnRzL1N3aXBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IEJveCwgSGVhZGluZywgVGV4dCwgQnV0dG9uIH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJ1xuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICdyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsJ1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgYmFzZVVSTCB9IGZyb20gXCIuLi9heGlvc0NvbmZpZ1wiO1xuXG5jb25zdCBDYXJvdXNlbEl0ZW0gPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICYgPiBkaXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAzMCU7XG4gICAgdG9wOiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBwYWRkaW5nLXRvcDogMTgwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICAmID4gcCB7XG4gICAgICBtYXJnaW46IDE1cHggMDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHdpZHRoOiA0NTBweDtcbiAgICB9XG4gICAgJiA+IGltZyB7XG4gICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNTAlKTtcbiAgICB9XG4gIH1cbmBcbmNvbnN0IHN3aXBlckNvbnRhaW5lciA9IGNzc2BcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmID4gLmNhcm91c2VsOmxhc3QtY2hpbGQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5mcm9tOiB0cmFuc2xhdGV4KC01MCUpO1xuICB9XG5gXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTd2lwZXIoeyBkYXRhIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL2Nzcy9jYXJvdXNlbC5taW4uY3NzXCIgPjwvbGluaz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxDYXJvdXNlbCBjc3M9e3N3aXBlckNvbnRhaW5lcn0gc2hvd0Fycm93cz17ZmFsc2V9IHNob3dJbmRpY2F0b3JzPXtmYWxzZX0gc2hvd1N0YXR1cz17ZmFsc2V9ID5cbiAgICAgICAgXG4gICAgICAgIHtcbiAgICAgICAgICBkYXRhLm1hcChzd2lwZXIgPT4gKFxuICAgICAgICAgICAgPENhcm91c2VsSXRlbSBrZXk9e3N3aXBlci5pZH0gPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17c3dpcGVyLnVybH0gLz5cbiAgICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICA8SGVhZGluZyAgYXM9XCJoMlwiIHNpemU9XCJsZ1wiID5cbiAgICAgICAgICAgICAgICAgIHtzd2lwZXIudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAge3N3aXBlci5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBiZ0NvbG9yPVwiI2Y0MFwiID5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGV0YWlsL1tpZF1cIiBhcz17YC9kZXRhaWB9ID5cbiAgICAgICAgICAgICAgICAgICAgPGE+Q0hFQ0sgREVUQUlMPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRTd2lwZXIgKCkge1xuICByZXR1cm4gYXhpb3MuZ2V0KCcvYXBpL3N3aXBlcicsIHtcbiAgICBiYXNlVVJMXG4gIH0pXG59Il19 */\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n});\n\nvar swiperContainer = false ? undefined : {\n  name: \"11c9a56-swiperContainer\",\n  styles: \"position:relative;& > .carousel:last-child{position:absolute;bottom:0;left:50%;tranfrom:translatex(-50%);};label:swiperContainer;\",\n  map: \"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kdWFuZGluZ21pbi93b3JrU3BhY2Uv5raC6bimL3R1eWEtbGVzc29uL21vdmllL2NvbXBvbmVudHMvU3dpcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCMkIiLCJmaWxlIjoiL1VzZXJzL2R1YW5kaW5nbWluL3dvcmtTcGFjZS/mtoLpuKYvdHV5YS1sZXNzb24vbW92aWUvY29tcG9uZW50cy9Td2lwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBCb3gsIEhlYWRpbmcsIFRleHQsIEJ1dHRvbiB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSdcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAncmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbCdcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IGJhc2VVUkwgfSBmcm9tIFwiLi4vYXhpb3NDb25maWdcIjtcblxuY29uc3QgQ2Fyb3VzZWxJdGVtID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmID4gZGl2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMzAlO1xuICAgIHRvcDogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgcGFkZGluZy10b3A6IDE4MHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgJiA+IHAge1xuICAgICAgbWFyZ2luOiAxNXB4IDA7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB3aWR0aDogNDUwcHg7XG4gICAgfVxuICAgICYgPiBpbWcge1xuICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDUwJSk7XG4gICAgfVxuICB9XG5gXG5jb25zdCBzd2lwZXJDb250YWluZXIgPSBjc3NgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgJiA+IC5jYXJvdXNlbDpsYXN0LWNoaWxkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuZnJvbTogdHJhbnNsYXRleCgtNTAlKTtcbiAgfVxuYFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3dpcGVyKHsgZGF0YSB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9jc3MvY2Fyb3VzZWwubWluLmNzc1wiID48L2xpbms+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Q2Fyb3VzZWwgY3NzPXtzd2lwZXJDb250YWluZXJ9IHNob3dBcnJvd3M9e2ZhbHNlfSBzaG93SW5kaWNhdG9ycz17ZmFsc2V9IHNob3dTdGF0dXM9e2ZhbHNlfSA+XG4gICAgICAgIFxuICAgICAgICB7XG4gICAgICAgICAgZGF0YS5tYXAoc3dpcGVyID0+IChcbiAgICAgICAgICAgIDxDYXJvdXNlbEl0ZW0ga2V5PXtzd2lwZXIuaWR9ID5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e3N3aXBlci51cmx9IC8+XG4gICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgPEhlYWRpbmcgIGFzPVwiaDJcIiBzaXplPVwibGdcIiA+XG4gICAgICAgICAgICAgICAgICB7c3dpcGVyLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgIHtzd2lwZXIuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gYmdDb2xvcj1cIiNmNDBcIiA+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2RldGFpbC9baWRdXCIgYXM9e2AvZGV0YWlgfSA+XG4gICAgICAgICAgICAgICAgICAgIDxhPkNIRUNLIERFVEFJTDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0Nhcm91c2VsSXRlbT5cbiAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICA8L0Nhcm91c2VsPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkU3dpcGVyICgpIHtcbiAgcmV0dXJuIGF4aW9zLmdldCgnL2FwaS9zd2lwZXInLCB7XG4gICAgYmFzZVVSTFxuICB9KVxufSJdfQ== */\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\nfunction Swiper(_ref) {\n  var _this = this;\n\n  var data = _ref.data;\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"link\", {\n    rel: \"stylesheet\",\n    href: \"/css/carousel.min.css\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__[\"Carousel\"], {\n    css: swiperContainer,\n    showArrows: false,\n    showIndicators: false,\n    showStatus: false,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, data.map(function (swiper) {\n    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(CarouselItem, {\n      key: swiper.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 13\n      }\n    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"img\", {\n      src: swiper.url,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 15\n      }\n    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 15\n      }\n    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Heading\"], {\n      as: \"h2\",\n      size: \"lg\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 17\n      }\n    }, swiper.title), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 17\n      }\n    }, swiper.description), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n      bgColor: \"#f40\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 17\n      }\n    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      href: \"/detail/[id]\",\n      as: \"/detai\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 19\n      }\n    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 21\n      }\n    }, \"CHECK DETAIL\")))));\n  })));\n}\n_c = Swiper;\nfunction loadSwiper() {\n  return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get('/api/swiper', {\n    baseURL: _axiosConfig__WEBPACK_IMPORTED_MODULE_8__[\"baseURL\"]\n  });\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"Swiper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1N3aXBlci5qcz83M2FmIl0sIm5hbWVzIjpbIkNhcm91c2VsSXRlbSIsInN3aXBlckNvbnRhaW5lciIsIlN3aXBlciIsImRhdGEiLCJtYXAiLCJzd2lwZXIiLCJpZCIsInVybCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJsb2FkU3dpcGVyIiwiYXhpb3MiLCJnZXQiLCJiYXNlVVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUEsSUFBTUEsWUFBWSxHQUFHO0FBQUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUFsQjs7QUFxQkEsSUFBTUMsZUFBZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBckI7QUFTZSxTQUFTQyxNQUFULE9BQTBCO0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQ3ZDLFNBQ0UsdUhBQ0UsMERBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sT0FBRyxFQUFDLFlBQVY7QUFBdUIsUUFBSSxFQUFDLHVCQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFLDBEQUFDLGtFQUFEO0FBQVUsT0FBRyxFQUFFRixlQUFmO0FBQWdDLGNBQVUsRUFBRSxLQUE1QztBQUFtRCxrQkFBYyxFQUFFLEtBQW5FO0FBQTBFLGNBQVUsRUFBRSxLQUF0RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0lFLElBQUksQ0FBQ0MsR0FBTCxDQUFTLFVBQUFDLE1BQU07QUFBQSxXQUNiLDBEQUFDLFlBQUQ7QUFBYyxTQUFHLEVBQUVBLE1BQU0sQ0FBQ0MsRUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssU0FBRyxFQUFFRCxNQUFNLENBQUNFLEdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFLDBEQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSwwREFBQyx1REFBRDtBQUFVLFFBQUUsRUFBQyxJQUFiO0FBQWtCLFVBQUksRUFBQyxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dGLE1BQU0sQ0FBQ0csS0FEVixDQURGLEVBSUUsMERBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHSCxNQUFNLENBQUNJLFdBRFYsQ0FKRixFQU9FLDBEQUFDLHNEQUFEO0FBQVEsYUFBTyxFQUFDLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSwwREFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxjQUFYO0FBQTBCLFFBQUUsVUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsQ0FERixDQVBGLENBRkYsQ0FEYTtBQUFBLEdBQWYsQ0FISixDQUpGLENBREY7QUE4QkQ7S0EvQnVCUCxNO0FBaUNqQixTQUFTUSxVQUFULEdBQXVCO0FBQzVCLFNBQU9DLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSxhQUFWLEVBQXlCO0FBQzlCQyxXQUFPLEVBQVBBLG9EQUFPQTtBQUR1QixHQUF6QixDQUFQO0FBR0QiLCJmaWxlIjoiLi9jb21wb25lbnRzL1N3aXBlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IEJveCwgSGVhZGluZywgVGV4dCwgQnV0dG9uIH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJ1xuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICdyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsJ1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgYmFzZVVSTCB9IGZyb20gXCIuLi9heGlvc0NvbmZpZ1wiO1xuXG5jb25zdCBDYXJvdXNlbEl0ZW0gPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICYgPiBkaXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAzMCU7XG4gICAgdG9wOiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBwYWRkaW5nLXRvcDogMTgwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICAmID4gcCB7XG4gICAgICBtYXJnaW46IDE1cHggMDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHdpZHRoOiA0NTBweDtcbiAgICB9XG4gICAgJiA+IGltZyB7XG4gICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNTAlKTtcbiAgICB9XG4gIH1cbmBcbmNvbnN0IHN3aXBlckNvbnRhaW5lciA9IGNzc2BcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmID4gLmNhcm91c2VsOmxhc3QtY2hpbGQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5mcm9tOiB0cmFuc2xhdGV4KC01MCUpO1xuICB9XG5gXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTd2lwZXIoeyBkYXRhIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL2Nzcy9jYXJvdXNlbC5taW4uY3NzXCIgPjwvbGluaz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxDYXJvdXNlbCBjc3M9e3N3aXBlckNvbnRhaW5lcn0gc2hvd0Fycm93cz17ZmFsc2V9IHNob3dJbmRpY2F0b3JzPXtmYWxzZX0gc2hvd1N0YXR1cz17ZmFsc2V9ID5cbiAgICAgICAgXG4gICAgICAgIHtcbiAgICAgICAgICBkYXRhLm1hcChzd2lwZXIgPT4gKFxuICAgICAgICAgICAgPENhcm91c2VsSXRlbSBrZXk9e3N3aXBlci5pZH0gPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17c3dpcGVyLnVybH0gLz5cbiAgICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICA8SGVhZGluZyAgYXM9XCJoMlwiIHNpemU9XCJsZ1wiID5cbiAgICAgICAgICAgICAgICAgIHtzd2lwZXIudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAge3N3aXBlci5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBiZ0NvbG9yPVwiI2Y0MFwiID5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGV0YWlsL1tpZF1cIiBhcz17YC9kZXRhaWB9ID5cbiAgICAgICAgICAgICAgICAgICAgPGE+Q0hFQ0sgREVUQUlMPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRTd2lwZXIgKCkge1xuICByZXR1cm4gYXhpb3MuZ2V0KCcvYXBpL3N3aXBlcicsIHtcbiAgICBiYXNlVVJMXG4gIH0pXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Swiper.js\n");

/***/ })

})