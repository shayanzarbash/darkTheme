"use strict";
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ \"@mui/material/Box\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction Home() {\n    const { 0: darkMode , 1: setDarkMode  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const darkTheme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.createTheme)({\n        palette: {\n            mode: darkMode ? \"dark\" : \"light\"\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const themeType = localStorage.getItem(\"dark\") || \"dark\";\n        if (themeType != \"dark\") {\n            setDarkMode(false);\n        }\n    }, []);\n    const changeTheme = ()=>{\n        localStorage.setItem(\"dark\", darkMode ? \"light\" : \"dark\");\n        setDarkMode(!darkMode);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n        theme: darkTheme,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Paper, {\n            style: {\n                height: \"100vh\",\n                margin: 0\n            },\n            sx: {\n                display: \"flex\",\n                justifyContent: \"center\",\n                p: 1,\n                m: 1\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {\n                sx: {\n                    display: \"flex\",\n                    justifyContent: \"center\",\n                    flexDirection: \"column\",\n                    alignItems: \"center\",\n                    p: 1,\n                    m: 1\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Switch, {\n                        checked: darkMode,\n                        onChange: changeTheme\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shayan\\\\Desktop\\\\darkTheme\\\\pages\\\\index.js\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        variant: \"h4\",\n                        gutterBottom: true,\n                        component: \"div\",\n                        mt: \"4\",\n                        children: [\n                            darkMode ? \"Dark\" : \"Light\",\n                            \" Mode Handler\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\shayan\\\\Desktop\\\\darkTheme\\\\pages\\\\index.js\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\shayan\\\\Desktop\\\\darkTheme\\\\pages\\\\index.js\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\shayan\\\\Desktop\\\\darkTheme\\\\pages\\\\index.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\shayan\\\\Desktop\\\\darkTheme\\\\pages\\\\index.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNMO0FBQ1Y7QUFDOEI7QUFDaEI7U0FFeENTLElBQUksR0FBRyxDQUFDO0lBQ2YsS0FBSyxNQUFFQyxRQUFRLE1BQUVDLFdBQVcsTUFBSVYsK0NBQVEsQ0FBQyxJQUFJO0lBRTdDLEtBQUssQ0FBQ1csU0FBUyxHQUFHTixpRUFBVyxDQUFDLENBQUM7UUFDN0JPLE9BQU8sRUFBRSxDQUFDO1lBQ1JDLElBQUksRUFBRUosUUFBUSxHQUFHLENBQU0sUUFBRyxDQUFPO1FBQ25DLENBQUM7SUFDSCxDQUFDO0lBRURSLGdEQUFTLEtBQU8sQ0FBQztRQUNmLEtBQUssQ0FBQ2EsU0FBUyxHQUFHQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxDQUFNLFVBQUssQ0FBTTtRQUN4RCxFQUFFLEVBQUVGLFNBQVMsSUFBSSxDQUFNLE9BQUUsQ0FBQztZQUN4QkosV0FBVyxDQUFDLEtBQUs7UUFDbkIsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxLQUFLLENBQUNPLFdBQVcsT0FBUyxDQUFDO1FBQ3pCRixZQUFZLENBQUNHLE9BQU8sQ0FBQyxDQUFNLE9BQUVULFFBQVEsR0FBRyxDQUFPLFNBQUcsQ0FBTTtRQUN4REMsV0FBVyxFQUFFRCxRQUFRO0lBQ3ZCLENBQUM7SUFFRCxNQUFNLDZFQUNISCwrREFBYTtRQUFDYSxLQUFLLEVBQUVSLFNBQVM7OEZBQzVCVCxnREFBSztZQUNKa0IsS0FBSyxFQUFFLENBQUM7Z0JBQUNDLE1BQU0sRUFBRSxDQUFPO2dCQUFFQyxNQUFNLEVBQUUsQ0FBQztZQUFDLENBQUM7WUFDckNDLEVBQUUsRUFBRSxDQUFDO2dCQUNIQyxPQUFPLEVBQUUsQ0FBTTtnQkFDZkMsY0FBYyxFQUFFLENBQVE7Z0JBQ3hCQyxDQUFDLEVBQUUsQ0FBQztnQkFDSkMsQ0FBQyxFQUFFLENBQUM7WUFDTixDQUFDO2tHQUVBdkIsMERBQUc7Z0JBQ0ZtQixFQUFFLEVBQUUsQ0FBQztvQkFDSEMsT0FBTyxFQUFFLENBQU07b0JBQ2ZDLGNBQWMsRUFBRSxDQUFRO29CQUN4QkcsYUFBYSxFQUFFLENBQVE7b0JBQ3ZCQyxVQUFVLEVBQUUsQ0FBUTtvQkFDcEJILENBQUMsRUFBRSxDQUFDO29CQUNKQyxDQUFDLEVBQUUsQ0FBQztnQkFDTixDQUFDOztnR0FFQXhCLGlEQUFNO3dCQUFDMkIsT0FBTyxFQUFFckIsUUFBUTt3QkFBRXNCLFFBQVEsRUFBRWQsV0FBVzs7Ozs7O2dHQUMvQ1YsaUVBQVU7d0JBQUN5QixPQUFPLEVBQUMsQ0FBSTt3QkFBQ0MsWUFBWTt3QkFBQ0MsU0FBUyxFQUFDLENBQUs7d0JBQUNDLEVBQUUsRUFBQyxDQUFHOzs0QkFDekQxQixRQUFRLEdBQUcsQ0FBTSxRQUFHLENBQU87NEJBQUMsQ0FDL0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1YsQ0FBQztBQUVELGlFQUFlRCxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVtZXMtYXBwcy8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUGFwZXIsIFN3aXRjaCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRoZW1lLCBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW2RhcmtNb2RlLCBzZXREYXJrTW9kZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgY29uc3QgZGFya1RoZW1lID0gY3JlYXRlVGhlbWUoe1xyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICBtb2RlOiBkYXJrTW9kZSA/IFwiZGFya1wiIDogXCJsaWdodFwiLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRoZW1lVHlwZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZGFya1wiKSB8fCBcImRhcmtcIjtcclxuICAgIGlmICh0aGVtZVR5cGUgIT0gXCJkYXJrXCIpIHtcclxuICAgICAgc2V0RGFya01vZGUoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgY2hhbmdlVGhlbWUgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRhcmtcIiwgZGFya01vZGUgPyBcImxpZ2h0XCIgOiBcImRhcmtcIik7XHJcbiAgICBzZXREYXJrTW9kZSghZGFya01vZGUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17ZGFya1RoZW1lfT5cclxuICAgICAgPFBhcGVyXHJcbiAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMHZoXCIsIG1hcmdpbjogMCB9fVxyXG4gICAgICAgIHN4PXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgcDogMSxcclxuICAgICAgICAgIG06IDEsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgcDogMSxcclxuICAgICAgICAgICAgbTogMSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFN3aXRjaCBjaGVja2VkPXtkYXJrTW9kZX0gb25DaGFuZ2U9e2NoYW5nZVRoZW1lfSAvPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgZ3V0dGVyQm90dG9tIGNvbXBvbmVudD1cImRpdlwiIG10PVwiNFwiPlxyXG4gICAgICAgICAgICB7ZGFya01vZGUgPyBcIkRhcmtcIiA6IFwiTGlnaHRcIn0gTW9kZSBIYW5kbGVyXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJQYXBlciIsIlN3aXRjaCIsIkJveCIsImNyZWF0ZVRoZW1lIiwiVGhlbWVQcm92aWRlciIsIlR5cG9ncmFwaHkiLCJIb21lIiwiZGFya01vZGUiLCJzZXREYXJrTW9kZSIsImRhcmtUaGVtZSIsInBhbGV0dGUiLCJtb2RlIiwidGhlbWVUeXBlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNoYW5nZVRoZW1lIiwic2V0SXRlbSIsInRoZW1lIiwic3R5bGUiLCJoZWlnaHQiLCJtYXJnaW4iLCJzeCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInAiLCJtIiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJ2YXJpYW50IiwiZ3V0dGVyQm90dG9tIiwiY29tcG9uZW50IiwibXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ "@mui/material/Box":
/*!************************************!*\
  !*** external "@mui/material/Box" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ "@mui/material/Typography":
/*!*******************************************!*\
  !*** external "@mui/material/Typography" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();