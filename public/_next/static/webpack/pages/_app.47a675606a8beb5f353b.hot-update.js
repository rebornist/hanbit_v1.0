self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/HeaderTop.tsx":
/*!**********************************!*\
  !*** ./components/HeaderTop.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Ajax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ajax */ "./components/Ajax.tsx");
/* harmony import */ var _HeaderBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderBody */ "./components/HeaderBody.tsx");
/* harmony import */ var _utils_Images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/Images */ "./utils/Images.ts");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\saint\\OneDrive\\dev\\frontend\\hanbit-ts\\components\\HeaderTop.tsx",
    _this = undefined;






var Header = function Header(_ref) {
  var userObj = _ref.userObj;

  var signout = function signout(event) {
    event.preventDefault();
    var url = "/api/user/signout";
    (0,_Ajax__WEBPACK_IMPORTED_MODULE_2__.SendRequest)(url, "GET").then(function () {
      alert("로그아웃");
      window.location.replace("/");
    })["catch"](function (error) {
      alert(error);
      window.location.replace("/");
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "header-container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "header-top colored",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "container",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col-4 col-sm-4 col-lg-4",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "header-top-first clearfix",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                  className: "list-inline hidden-md-down",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    className: "list-inline-item"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 47,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    className: "list-inline-item",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      className: "fa fa-map-marker pr-1 pl-2"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 49,
                      columnNumber: 23
                    }, _this), " \uCDA9\uB0A8 \uC608\uC0B0\uAD70 \uC0BD\uAD50\uC74D \uC218\uCD0C\uD559\uC7AC\uAE38 141"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 48,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    className: "list-inline-item",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      className: "fa fa-phone pr-1 pl-2"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 53,
                      columnNumber: 23
                    }, _this), " 041-337-4971"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col-8 col-sm-8 col-lg-8",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                id: "header-top-second",
                className: "clearfix",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "header-top-dropdown text-right",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "btn-group ml-2",
                    id: "auth-group",
                    children: userObj === null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("object", {
                      className: "mt-1",
                      itemType: "image/svg+xml",
                      data: _utils_Images__WEBPACK_IMPORTED_MODULE_4__.commonImages.headerLoading
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 68,
                      columnNumber: 25
                    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                      children: userObj && userObj.isLoggedIn ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                          href: "/profile",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                            className: "btn btn-default btn-sm",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                              className: "fa fa-user pr-1 pl-2"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 79,
                              columnNumber: 35
                            }, _this), " ", "".concat(userObj === null || userObj === void 0 ? void 0 : userObj.email).split("@")[0]]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 78,
                            columnNumber: 33
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 77,
                          columnNumber: 31
                        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                          id: "signout",
                          type: "button",
                          className: "btn btn-default btn-sm ml-1",
                          onClick: signout,
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                            className: "fa fa-unlock pr-2"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 89,
                            columnNumber: 33
                          }, _this), " \uB85C\uADF8\uC544\uC6C3"]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 83,
                          columnNumber: 31
                        }, _this)]
                      }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                          href: "/signin",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                            className: "btn btn-default btn-sm",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                              className: "fa fa-lock pr-2"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 96,
                              columnNumber: 35
                            }, _this), " \uB85C\uADF8\uC778"]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 95,
                            columnNumber: 33
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 94,
                          columnNumber: 31
                        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                          href: "/signup",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                            className: "btn btn-default btn-sm ml-1",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                              className: "fa fa-user-plus pr-2"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 101,
                              columnNumber: 35
                            }, _this), " ", "\uD68C\uC6D0\uAC00\uC785"]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 100,
                            columnNumber: 33
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 99,
                          columnNumber: 31
                        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                          href: "/signup",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                            className: "fa fa-youtube-square"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 106,
                            columnNumber: 33
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 105,
                          columnNumber: 31
                        }, _this)]
                      }, void 0, true)
                    }, void 0, false)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 66,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
        className: "header fixed fixed-desktop clearfix text-noto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderBody__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXJUb3AudHN4Il0sIm5hbWVzIjpbIkhlYWRlciIsInVzZXJPYmoiLCJzaWdub3V0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVybCIsIlNlbmRSZXF1ZXN0IiwidGhlbiIsImFsZXJ0Iiwid2luZG93IiwibG9jYXRpb24iLCJyZXBsYWNlIiwiZXJyb3IiLCJjb21tb25JbWFnZXMiLCJoZWFkZXJMb2FkaW5nIiwiaXNMb2dnZWRJbiIsImVtYWlsIiwic3BsaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUlBOztBQU1BLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQXdCO0FBQUEsTUFBckJDLE9BQXFCLFFBQXJCQSxPQUFxQjs7QUFDckMsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FDZEMsS0FEYyxFQUVMO0FBQ1RBLFNBQUssQ0FBQ0MsY0FBTjtBQUVBLFFBQU1DLEdBQUcsc0JBQVQ7QUFDQUMsc0RBQVcsQ0FBQ0QsR0FBRCxFQUFNLEtBQU4sQ0FBWCxDQUNHRSxJQURILENBQ1EsWUFBTTtBQUNWQyxXQUFLLENBQUMsTUFBRCxDQUFMO0FBQ0FDLFlBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0IsR0FBeEI7QUFDRCxLQUpILFdBS1MsVUFBQ0MsS0FBRCxFQUFXO0FBQ2hCSixXQUFLLENBQUNJLEtBQUQsQ0FBTDtBQUNBSCxZQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCLEdBQXhCO0FBQ0QsS0FSSDtBQVNELEdBZkQ7O0FBaUJBLHNCQUNFO0FBQUEsMkJBRUU7QUFBSyxlQUFTLEVBQUMsa0JBQWY7QUFBQSw4QkFHRTtBQUFLLGlCQUFTLEVBQUMsb0JBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBQyxLQUFmO0FBQUEsb0NBQ0U7QUFB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QUFBO0FBQUEsaUNBWkY7QUFBQTtBQW5CSjtBQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsZUErRkU7QUFBUSxpQkFBUyxFQUFDLCtDQUFsQjtBQUFBLCtCQUNFLDhEQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBL0ZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGLG1CQURGO0FBd0dELENBMUhEOztLQUFNRixNO0FBNEhOLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNDdhNjc1NjA2YThiZWI1ZjM1M2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vdXNlRXZlbnQsIEtleWJvYXJkRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW1wb3J0IHsgU2VuZFJlcXVlc3QgfSBmcm9tIFwiLi9BamF4XCI7XHJcbmltcG9ydCBIZWFkZXJCb2R5IGZyb20gXCIuL0hlYWRlckJvZHlcIjtcclxuXHJcbmltcG9ydCB0eXBlIHsgVXNlciB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3VzZXJcIjtcclxuXHJcbmltcG9ydCB7IGNvbW1vbkltYWdlcyB9IGZyb20gXCIuLi91dGlscy9JbWFnZXNcIjtcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgdXNlck9iajogVXNlciB8IG51bGw7XHJcbn07XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoeyB1c2VyT2JqIH06IFByb3BzKSA9PiB7XHJcbiAgY29uc3Qgc2lnbm91dCA9IChcclxuICAgIGV2ZW50OiBNb3VzZUV2ZW50PEhUTUxFbGVtZW50PiB8IEtleWJvYXJkRXZlbnQ8SFRNTEVsZW1lbnQ+LFxyXG4gICk6IHZvaWQgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCB1cmwgPSBgL2FwaS91c2VyL3NpZ25vdXRgO1xyXG4gICAgU2VuZFJlcXVlc3QodXJsLCBcIkdFVFwiKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgYWxlcnQoXCLroZzqt7jslYTsm4NcIik7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCIvXCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgYWxlcnQoZXJyb3IpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFwiL1wiKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHsvKiBoZWFkZXItY29udGFpbmVyIHN0YXJ0ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jb250YWluZXJcIj5cclxuICAgICAgICB7LyogaGVhZGVyLXRvcCBzdGFydCAqL31cclxuICAgICAgICB7LyogPT09PT09PT09PT09PT09PSAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci10b3AgY29sb3JlZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00IGNvbC1zbS00IGNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICB7LyogaGVhZGVyLXRvcC1maXJzdCBzdGFydCAqL31cclxuICAgICAgICAgICAgICAgIHsvKiA9PT09PT09PT09PT09PT09ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItdG9wLWZpcnN0IGNsZWFyZml4XCI+XHJcbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWlubGluZSBoaWRkZW4tbWQtZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWlubGluZS1pdGVtXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1pbmxpbmUtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtbWFwLW1hcmtlciBwci0xIHBsLTJcIj48L2k+IOy2qeuCqCDsmIjsgrDqtbBcclxuICAgICAgICAgICAgICAgICAgICAgIOyCveq1kOydjSDsiJjstIztlZnsnqzquLggMTQxXHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1pbmxpbmUtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcGhvbmUgcHItMSBwbC0yXCI+PC9pPiAwNDEtMzM3LTQ5NzFcclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogaGVhZGVyLXRvcC1maXJzdCBlbmQgKi99XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOCBjb2wtc20tOCBjb2wtbGctOFwiPlxyXG4gICAgICAgICAgICAgICAgey8qIGhlYWRlci10b3Atc2Vjb25kIHN0YXJ0ICovfVxyXG4gICAgICAgICAgICAgICAgey8qID09PT09PT09PT09PT09PT0gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaGVhZGVyLXRvcC1zZWNvbmRcIiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxyXG4gICAgICAgICAgICAgICAgICB7LyogaGVhZGVyIHRvcCBkcm9wZG93bnMgc3RhcnQgKi99XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA9PT09PT09PT09PT09PT09ICovfVxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci10b3AtZHJvcGRvd24gdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyb3VwIG1sLTJcIiBpZD1cImF1dGgtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHt1c2VyT2JqID09PSBudWxsID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b2JqZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVR5cGU9XCJpbWFnZS9zdmcreG1sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtjb21tb25JbWFnZXMuaGVhZGVyTG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvb2JqZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlck9iaiAmJiB1c2VyT2JqLmlzTG9nZ2VkSW4gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS11c2VyIHByLTEgcGwtMlwiPjwvaT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7dXNlck9iaj8uZW1haWx9YC5zcGxpdChcIkBcIilbMF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZ25vdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdCBidG4tc20gbWwtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2lnbm91dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXVubG9jayBwci0yXCI+PC9pPiDroZzqt7jslYTsm4NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWduaW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1sb2NrIHByLTJcIj48L2k+IOuhnOq3uOyduFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdCBidG4tc20gbWwtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdXNlci1wbHVzIHByLTJcIj48L2k+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7ZqM7JuQ6rCA7J6FXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEteW91dHViZS1zcXVhcmVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiBoZWFkZXIgdG9wIGRyb3Bkb3ducyBlbmQgKi99XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiBoZWFkZXItdG9wLXNlY29uZCBlbmQgKi99XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIGhlYWRlci10b3AgZW5kICovfVxyXG5cclxuICAgICAgICB7LyogaGVhZGVyIHN0YXJ0ICovfVxyXG4gICAgICAgIHsvKiBjbGFzc2VzOiAqL31cclxuICAgICAgICB7LyogXCJmaXhlZFwiOiBlbmFibGVzIGZpeGVkIG5hdmlnYXRpb24gbW9kZSAoc3RpY2t5IG1lbnUpIGUuZy4gY2xhc3NOYW1lPVwiaGVhZGVyIGZpeGVkIGNsZWFyZml4XCIgKi99XHJcbiAgICAgICAgey8qIFwiZml4ZWQtZGVza3RvcFwiOiBlbmFibGVzIGZpeGVkIG5hdmlnYXRpb24gb25seSBmb3IgZGVza3RvcCBkZXZpY2VzIGUuZy4gY2xhc3NOYW1lPVwiaGVhZGVyIGZpeGVkIGZpeGVkLWRlc2t0b3AgY2xlYXJmaXhcIiAqL31cclxuICAgICAgICB7LyogXCJmaXhlZC1hbGxcIjogZW5hYmxlcyBmaXhlZCBuYXZpZ2F0aW9uIG9ubHkgZm9yIGFsbCBkZXZpY2VzIGRlc2t0b3AgYW5kIG1vYmlsZSBlLmcuIGNsYXNzTmFtZT1cImhlYWRlciBmaXhlZCBmaXhlZC1kZXNrdG9wIGNsZWFyZml4XCIgKi99XHJcbiAgICAgICAgey8qIFwiZGFya1wiOiBkYXJrIHZlcnNpb24gb2YgaGVhZGVyIGUuZy4gY2xhc3NOYW1lPVwiaGVhZGVyIGRhcmsgY2xlYXJmaXhcIiAqL31cclxuICAgICAgICB7LyogXCJjZW50ZXJlZFwiOiBtYW5kYXRvcnkgY2xhc3MgZm9yIHRoZSBjZW50ZXJlZCBsb2dvIGxheW91dCAqL31cclxuICAgICAgICB7LyogPT09PT09PT09PT09PT09PSAqL31cclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlciBmaXhlZCBmaXhlZC1kZXNrdG9wIGNsZWFyZml4IHRleHQtbm90b1wiPlxyXG4gICAgICAgICAgPEhlYWRlckJvZHkgLz5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9