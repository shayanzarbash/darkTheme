/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"footer\": \"Home_footer____T7K\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"code\": \"Home_code__suPER\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"logo\": \"Home_logo__27_tb\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZW1lcy1hcHBzLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcz9iMTcwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX19iQ09oWVwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fX25MamlRXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfX19fVDdLXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX19UMDloRFwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fNDFPd2tcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19zdVBFUlwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfX0d4UTg1XCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fX0xwTDFcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18yN190YlwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/action */ \"./src/action.ts\");\n/* harmony import */ var _src_components_todos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/todos */ \"./src/components/todos.js\");\n\n\n\n\n\n\n\nconst Home = ()=>{\n    // توسط selector میتوانیم داده ها را بگیریم و نمایش دهیم\n    // توسط dispatch میتوانیم به آن مقادیر ارسال کنیم\n    const state = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.parameter) | 0, dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(), //تابع ما که توسط یک value آن را ارسال میکنیم \n    // value همان payload میشود\n    clicPlusHandler = ()=>{\n        dispatch((0,_src_action__WEBPACK_IMPORTED_MODULE_3__.addToParameter)(5));\n    }, clicMinusHandler = ()=>{\n        dispatch((0,_src_action__WEBPACK_IMPORTED_MODULE_3__.minusToParameter)(2));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shayan\\\\Desktop\\\\darkTheme\\\\pages\\\\index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shayan\\\\Desktop\\\\darkTheme\\\\pages\\\\index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shayan\\\\Desktop\\\\darkTheme\\\\pages\\\\index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\shayan\\\\Desktop\\\\darkTheme\\\\pages\\\\index.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                        children: state\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shayan\\\\Desktop\\\\darkTheme\\\\pages\\\\index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: clicPlusHandler,\n                        children: \"++\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shayan\\\\Desktop\\\\darkTheme\\\\pages\\\\index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: clicMinusHandler,\n                        children: \"--\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shayan\\\\Desktop\\\\darkTheme\\\\pages\\\\index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\shayan\\\\Desktop\\\\darkTheme\\\\pages\\\\index.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_todos__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\shayan\\\\Desktop\\\\darkTheme\\\\pages\\\\index.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\shayan\\\\Desktop\\\\darkTheme\\\\pages\\\\index.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE0QjtBQUcwQjtBQUNSO0FBRUM7QUFDRTtBQUNMO0FBRTVDLE1BQU1PLE9BQWlCLElBQU07SUFFM0Isd0RBQXdEO0lBQ3hELGlEQUFpRDtJQUNqRCxNQUNFQyxRQUFRTix3REFBV0EsQ0FBQyxDQUFDTSxRQUFvQkEsTUFBTUMsU0FBUyxJQUFJLEdBQzVEQyxXQUFXVCx3REFBV0EsSUFFdEIsOENBQThDO0lBQzlDLDJCQUEyQjtJQUMzQlUsa0JBQWtCLElBQU07UUFDdEJELFNBQVNOLDJEQUFjQSxDQUFDO0lBQzFCLEdBRUFRLG1CQUFtQixJQUFNO1FBQ3ZCRixTQUFTTCw2REFBZ0JBLENBQUM7SUFDNUI7SUFFRixxQkFDRSw4REFBQ1E7UUFBSUMsV0FBV1gsMEVBQWdCOzswQkFDOUIsOERBQUNILGtEQUFJQTs7a0NBQ0gsOERBQUNnQjtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFHeEIsOERBQUNDO2dCQUFLVCxXQUFXWCxxRUFBVzs7a0NBQzFCLDhEQUFDcUI7d0JBQUdWLFdBQVdYLHNFQUFZO2tDQUN4Qks7Ozs7OztrQ0FHSCw4REFBQ2lCO3dCQUFPQyxTQUFTZjtrQ0FBaUI7Ozs7OztrQ0FDbEMsOERBQUNjO3dCQUFPQyxTQUFTZDtrQ0FBa0I7Ozs7Ozs7Ozs7OzswQkFFckMsOERBQUNOLDZEQUFLQTs7Ozs7Ozs7Ozs7QUFHWjtBQUVBLGlFQUFlQyxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlbWVzLWFwcHMvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tICcuLi9zcmMvZ2VuZXJhbC10eXBlJ1xyXG5pbXBvcnQgeyBhZGRUb1BhcmFtZXRlciB9IGZyb20gJy4uL3NyYy9hY3Rpb24nO1xyXG5pbXBvcnQgeyBtaW51c1RvUGFyYW1ldGVyIH0gZnJvbSAnLi4vc3JjL2FjdGlvbic7XHJcbmltcG9ydCBUb2RvcyBmcm9tICcuLi9zcmMvY29tcG9uZW50cy90b2Rvcyc7XHJcblxyXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcclxuXHJcbiAgLy8g2KrZiNiz2Lcgc2VsZWN0b3Ig2YXbjNiq2YjYp9mG24zZhSDYr9in2K/ZhyDZh9inINix2Kcg2Kjar9uM2LHbjNmFINmIINmG2YXYp9uM2LQg2K/Zh9uM2YVcclxuICAvLyDYqtmI2LPYtyBkaXNwYXRjaCDZhduM2KrZiNin2YbbjNmFINio2Ycg2KLZhiDZhdmC2KfYr9uM2LEg2KfYsdiz2KfZhCDaqdmG24zZhVxyXG4gIGNvbnN0XHJcbiAgICBzdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogQXBwU3RhdGUpID0+IHN0YXRlLnBhcmFtZXRlcikgfCAwLFxyXG4gICAgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpLFxyXG5cclxuICAgIC8v2KrYp9io2Lkg2YXYpyDaqdmHINiq2YjYs9i3INuM2qkgdmFsdWUg2KLZhiDYsdinINin2LHYs9in2YQg2YXbjNqp2YbbjNmFIFxyXG4gICAgLy8gdmFsdWUg2YfZhdin2YYgcGF5bG9hZCDZhduM2LTZiNivXHJcbiAgICBjbGljUGx1c0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKGFkZFRvUGFyYW1ldGVyKDUpKVxyXG4gICAgfSxcclxuXHJcbiAgICBjbGljTWludXNIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICBkaXNwYXRjaChtaW51c1RvUGFyYW1ldGVyKDIpKVxyXG4gICAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgIHtzdGF0ZX1cclxuICAgICAgICA8L2gxPlxyXG5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NsaWNQbHVzSGFuZGxlcn0+Kys8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NsaWNNaW51c0hhbmRsZXJ9Pi0tPC9idXR0b24+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPFRvZG9zIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVcclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3R5bGVzIiwiYWRkVG9QYXJhbWV0ZXIiLCJtaW51c1RvUGFyYW1ldGVyIiwiVG9kb3MiLCJIb21lIiwic3RhdGUiLCJwYXJhbWV0ZXIiLCJkaXNwYXRjaCIsImNsaWNQbHVzSGFuZGxlciIsImNsaWNNaW51c0hhbmRsZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImgxIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./src/action.ts":
/*!***********************!*\
  !*** ./src/action.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToParameter\": () => (/* binding */ addToParameter),\n/* harmony export */   \"minusToParameter\": () => (/* binding */ minusToParameter),\n/* harmony export */   \"multiToParameter\": () => (/* binding */ multiToParameter)\n/* harmony export */ });\n/* harmony import */ var _general_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general-const */ \"./src/general-const.ts\");\n\n\n\nconst addToParameter = (value)=>({\n        type: _general_const__WEBPACK_IMPORTED_MODULE_0__.ADD_TO_PARAMETER,\n        payload: {\n            value: value\n        }\n    });\nconst minusToParameter = (value)=>({\n        type: _general_const__WEBPACK_IMPORTED_MODULE_0__.MINUS_TO_PARAMETER,\n        payload: {\n            value: value\n        }\n    });\nconst multiToParameter = (value)=>({\n        type: _general_const__WEBPACK_IMPORTED_MODULE_0__.MULTI_TO_PARAMETER,\n        payload: {\n            value: value\n        }\n    });\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWN0aW9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBbUQ7QUFDRTtBQUNBO0FBTTlDLE1BQU1HLGlCQUFpQixDQUMxQkMsUUFDd0I7UUFDeEJDLE1BQU1MLDREQUFnQkE7UUFDdEJNLFNBQVM7WUFDTEYsT0FBT0E7UUFDWDtJQUNKLEdBQUc7QUFFSSxNQUFNRyxtQkFBbUIsQ0FDNUJILFFBQzBCO1FBQzFCQyxNQUFNSiw4REFBa0JBO1FBQ3hCSyxTQUFTO1lBQ0xGLE9BQU9BO1FBQ1g7SUFDSixHQUFHO0FBRUksTUFBTUksbUJBQW1CLENBQzVCSixRQUMwQjtRQUMxQkMsTUFBTUgsOERBQWtCQTtRQUN4QkksU0FBUztZQUNMRixPQUFPQTtRQUNYO0lBQ0osR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZW1lcy1hcHBzLy4vc3JjL2FjdGlvbi50cz8zYWY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFERF9UT19QQVJBTUVURVIgfSBmcm9tICcuL2dlbmVyYWwtY29uc3QnO1xyXG5pbXBvcnQgeyBNSU5VU19UT19QQVJBTUVURVIgfSBmcm9tICcuL2dlbmVyYWwtY29uc3QnO1xyXG5pbXBvcnQgeyBNVUxUSV9UT19QQVJBTUVURVIgfSBmcm9tICcuL2dlbmVyYWwtY29uc3QnO1xyXG5pbXBvcnQgeyBBZGRUb1BhcmFtZXRlckFjdGlvbiB9IGZyb20gJy4vZ2VuZXJhbC10eXBlJztcclxuaW1wb3J0IHsgTWludXNUb1BhcmFtZXRlckFjdGlvbiB9IGZyb20gJy4vZ2VuZXJhbC10eXBlJztcclxuaW1wb3J0IHsgTXVsdGlUb1BhcmFtZXRlckFjdGlvbiB9IGZyb20gJy4vZ2VuZXJhbC10eXBlJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgYWRkVG9QYXJhbWV0ZXIgPSAoXHJcbiAgICB2YWx1ZTogbnVtYmVyXHJcbik6IEFkZFRvUGFyYW1ldGVyQWN0aW9uID0+ICh7XHJcbiAgICB0eXBlOiBBRERfVE9fUEFSQU1FVEVSLFxyXG4gICAgcGF5bG9hZDoge1xyXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBtaW51c1RvUGFyYW1ldGVyID0gKFxyXG4gICAgdmFsdWU6IG51bWJlclxyXG4pOiBNaW51c1RvUGFyYW1ldGVyQWN0aW9uID0+ICh7XHJcbiAgICB0eXBlOiBNSU5VU19UT19QQVJBTUVURVIsXHJcbiAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IG11bHRpVG9QYXJhbWV0ZXIgPSAoXHJcbiAgICB2YWx1ZTogbnVtYmVyXHJcbik6IE11bHRpVG9QYXJhbWV0ZXJBY3Rpb24gPT4gKHtcclxuICAgIHR5cGU6IE1VTFRJX1RPX1BBUkFNRVRFUixcclxuICAgIHBheWxvYWQ6IHtcclxuICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgIH1cclxufSk7Il0sIm5hbWVzIjpbIkFERF9UT19QQVJBTUVURVIiLCJNSU5VU19UT19QQVJBTUVURVIiLCJNVUxUSV9UT19QQVJBTUVURVIiLCJhZGRUb1BhcmFtZXRlciIsInZhbHVlIiwidHlwZSIsInBheWxvYWQiLCJtaW51c1RvUGFyYW1ldGVyIiwibXVsdGlUb1BhcmFtZXRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/action.ts\n");

/***/ }),

/***/ "./src/components/todos.js":
/*!*********************************!*\
  !*** ./src/components/todos.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todos)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst lists = [\n    {\n        id: 1,\n        name: \"ali\",\n        family: \"zari\",\n        age: 22\n    },\n    {\n        id: 2,\n        name: \"adad\",\n        family: \"zadadari\",\n        age: 23\n    },\n    {\n        id: 3,\n        name: \"erg\",\n        family: \"dgdfd\",\n        age: 24\n    },\n    {\n        id: 4,\n        name: \"sfsfrer\",\n        family: \"ferferd\",\n        age: 25\n    }\n];\nfunction Todos() {\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setData(lists);\n    }, [\n        data\n    ]);\n    const handleDel = (id)=>{\n        console.log(id);\n        const newData = data.filter((item)=>{\n            return item.id !== id;\n        });\n        setData(newData);\n    };\n    const newFile = \"\";\n    const handleChange = (e)=>{\n        newFile = e.target.value;\n        console.log(newFile);\n    };\n    const handleAdd = ()=>{\n        console.log(newFile);\n        setData([\n            ...data,\n            newFile\n        ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shayan\\\\Desktop\\\\darkTheme\\\\src\\\\components\\\\todos.js\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"del\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shayan\\\\Desktop\\\\darkTheme\\\\src\\\\components\\\\todos.js\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleAdd,\n                        children: \"add\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shayan\\\\Desktop\\\\darkTheme\\\\src\\\\components\\\\todos.js\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"edit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shayan\\\\Desktop\\\\darkTheme\\\\src\\\\components\\\\todos.js\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\shayan\\\\Desktop\\\\darkTheme\\\\src\\\\components\\\\todos.js\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: data.map((list)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            onClick: ()=>handleDel(list.id),\n                            children: list.name\n                        }, list.id, false, {\n                            fileName: \"C:\\\\Users\\\\shayan\\\\Desktop\\\\darkTheme\\\\src\\\\components\\\\todos.js\",\n                            lineNumber: 70,\n                            columnNumber: 32\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\shayan\\\\Desktop\\\\darkTheme\\\\src\\\\components\\\\todos.js\",\n                    lineNumber: 68,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\shayan\\\\Desktop\\\\darkTheme\\\\src\\\\components\\\\todos.js\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90b2Rvcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQWtEO0FBRWxELE1BQU1HLFFBQVE7SUFDVjtRQUNJQyxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxLQUFLO0lBQ1Q7SUFDQTtRQUNJSCxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxLQUFLO0lBQ1Q7SUFDQTtRQUNJSCxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxLQUFLO0lBQ1Q7SUFDQTtRQUNJSCxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxLQUFLO0lBQ1Q7Q0FDSDtBQUdjLFNBQVNDLFFBQVE7SUFFNUIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFFbkNELGdEQUFTQSxDQUFDLElBQU07UUFDWlMsUUFBUVA7SUFDWixHQUFHO1FBQUNNO0tBQUs7SUFHVCxNQUFNRSxZQUFZLENBQUNQLEtBQU87UUFDdEJRLFFBQVFDLEdBQUcsQ0FBQ1Q7UUFDWixNQUFNVSxVQUFVTCxLQUFLTSxNQUFNLENBQUMsQ0FBQ0MsT0FBUztZQUFFLE9BQU9BLEtBQUtaLEVBQUUsS0FBS0E7UUFBRztRQUM5RE0sUUFBUUk7SUFDWjtJQUVBLE1BQU1HLFVBQVU7SUFDaEIsTUFBTUMsZUFBZSxDQUFDQyxJQUFNO1FBQ3hCRixVQUFVRSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7UUFDeEJULFFBQVFDLEdBQUcsQ0FBQ0k7SUFDaEI7SUFFQSxNQUFNSyxZQUFZLElBQU07UUFDcEJWLFFBQVFDLEdBQUcsQ0FBQ0k7UUFDWlAsUUFBUTtlQUFJRDtZQUFNUTtTQUFRO0lBQzlCO0lBSUEscUJBQ0k7OzBCQUNJLDhEQUFDTTs7a0NBQ0csOERBQUNDO3dCQUFNQyxNQUFLO3dCQUFPQyxVQUFVUjs7Ozs7O2tDQUM3Qiw4REFBQ1M7a0NBQU87Ozs7OztrQ0FDUiw4REFBQ0E7d0JBQU9DLFNBQVNOO2tDQUFXOzs7Ozs7a0NBQzVCLDhEQUFDSztrQ0FBTzs7Ozs7Ozs7Ozs7OzBCQUVaLDhEQUFDSjswQkFDRyw0RUFBQ007OEJBQ0lwQixLQUFLcUIsR0FBRyxDQUFDQyxDQUFBQSxPQUFRO3dCQUNkLHFCQUFPLDhEQUFDQzs0QkFBR0osU0FBUyxJQUFNakIsVUFBVW9CLEtBQUszQixFQUFFO3NDQUFrQjJCLEtBQUsxQixJQUFJOzJCQUFuQjBCLEtBQUszQixFQUFFOzs7OztvQkFDOUQ7Ozs7Ozs7Ozs7Ozs7QUFLcEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZW1lcy1hcHBzLy4vc3JjL2NvbXBvbmVudHMvdG9kb3MuanM/M2NmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgbGlzdHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmFtZTogJ2FsaScsXHJcbiAgICAgICAgZmFtaWx5OiAnemFyaScsXHJcbiAgICAgICAgYWdlOiAyMlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBuYW1lOiAnYWRhZCcsXHJcbiAgICAgICAgZmFtaWx5OiAnemFkYWRhcmknLFxyXG4gICAgICAgIGFnZTogMjNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgbmFtZTogJ2VyZycsXHJcbiAgICAgICAgZmFtaWx5OiAnZGdkZmQnLFxyXG4gICAgICAgIGFnZTogMjRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgbmFtZTogJ3Nmc2ZyZXInLFxyXG4gICAgICAgIGZhbWlseTogJ2ZlcmZlcmQnLFxyXG4gICAgICAgIGFnZTogMjVcclxuICAgIH1cclxuXTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvcygpIHtcclxuXHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXREYXRhKGxpc3RzKTtcclxuICAgIH0sIFtkYXRhXSk7XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZURlbCA9IChpZCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkKVxyXG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSBkYXRhLmZpbHRlcigoaXRlbSkgPT4geyByZXR1cm4gaXRlbS5pZCAhPT0gaWQgfSk7XHJcbiAgICAgICAgc2V0RGF0YShuZXdEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuZXdGaWxlID0gXCJcIjtcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgbmV3RmlsZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld0ZpbGUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQWRkID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld0ZpbGUpXHJcbiAgICAgICAgc2V0RGF0YShbLi4uZGF0YSwgbmV3RmlsZV0pXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5kZWw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQWRkfT5hZGQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24+ZWRpdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAobGlzdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsKGxpc3QuaWQpfSBrZXk9e2xpc3QuaWR9PntsaXN0Lm5hbWV9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImxpc3RzIiwiaWQiLCJuYW1lIiwiZmFtaWx5IiwiYWdlIiwiVG9kb3MiLCJkYXRhIiwic2V0RGF0YSIsImhhbmRsZURlbCIsImNvbnNvbGUiLCJsb2ciLCJuZXdEYXRhIiwiZmlsdGVyIiwiaXRlbSIsIm5ld0ZpbGUiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVBZGQiLCJkaXYiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ1bCIsIm1hcCIsImxpc3QiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/todos.js\n");

/***/ }),

/***/ "./src/general-const.ts":
/*!******************************!*\
  !*** ./src/general-const.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ADD_TO_PARAMETER\": () => (/* binding */ ADD_TO_PARAMETER),\n/* harmony export */   \"MINUS_TO_PARAMETER\": () => (/* binding */ MINUS_TO_PARAMETER),\n/* harmony export */   \"MULTI_TO_PARAMETER\": () => (/* binding */ MULTI_TO_PARAMETER)\n/* harmony export */ });\nconst ADD_TO_PARAMETER = \"ADD_TO_PARAMETER\";\nconst MINUS_TO_PARAMETER = \"MINUS_TO_PARAMETER\";\nconst MULTI_TO_PARAMETER = \"MINUS_TO_PARAMETER\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2VuZXJhbC1jb25zdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxNQUFNQSxtQkFBbUIsbUJBQW1CO0FBQzVDLE1BQU1DLHFCQUFxQixxQkFBcUI7QUFDaEQsTUFBTUMscUJBQXFCLHFCQUFxQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZW1lcy1hcHBzLy4vc3JjL2dlbmVyYWwtY29uc3QudHM/NGM4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQUREX1RPX1BBUkFNRVRFUiA9ICdBRERfVE9fUEFSQU1FVEVSJztcclxuZXhwb3J0IGNvbnN0IE1JTlVTX1RPX1BBUkFNRVRFUiA9ICdNSU5VU19UT19QQVJBTUVURVInO1xyXG5leHBvcnQgY29uc3QgTVVMVElfVE9fUEFSQU1FVEVSID0gJ01JTlVTX1RPX1BBUkFNRVRFUic7Il0sIm5hbWVzIjpbIkFERF9UT19QQVJBTUVURVIiLCJNSU5VU19UT19QQVJBTUVURVIiLCJNVUxUSV9UT19QQVJBTUVURVIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/general-const.ts\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();