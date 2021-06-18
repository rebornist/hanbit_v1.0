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
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                            className: "btn btn-default btn-sm ml-1",
                            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                              className: "fa fa-youtube-square"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 107,
                              columnNumber: 35
                            }, _this)
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
          lineNumber: 134,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXJUb3AudHN4Il0sIm5hbWVzIjpbIkhlYWRlciIsInVzZXJPYmoiLCJzaWdub3V0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVybCIsIlNlbmRSZXF1ZXN0IiwidGhlbiIsImFsZXJ0Iiwid2luZG93IiwibG9jYXRpb24iLCJyZXBsYWNlIiwiZXJyb3IiLCJjb21tb25JbWFnZXMiLCJoZWFkZXJMb2FkaW5nIiwiaXNMb2dnZWRJbiIsImVtYWlsIiwic3BsaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUlBOztBQU1BLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQXdCO0FBQUEsTUFBckJDLE9BQXFCLFFBQXJCQSxPQUFxQjs7QUFDckMsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FDZEMsS0FEYyxFQUVMO0FBQ1RBLFNBQUssQ0FBQ0MsY0FBTjtBQUVBLFFBQU1DLEdBQUcsc0JBQVQ7QUFDQUMsc0RBQVcsQ0FBQ0QsR0FBRCxFQUFNLEtBQU4sQ0FBWCxDQUNHRSxJQURILENBQ1EsWUFBTTtBQUNWQyxXQUFLLENBQUMsTUFBRCxDQUFMO0FBQ0FDLFlBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0IsR0FBeEI7QUFDRCxLQUpILFdBS1MsVUFBQ0MsS0FBRCxFQUFXO0FBQ2hCSixXQUFLLENBQUNJLEtBQUQsQ0FBTDtBQUNBSCxZQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCLEdBQXhCO0FBQ0QsS0FSSDtBQVNELEdBZkQ7O0FBaUJBLHNCQUNFO0FBQUEsMkJBRUU7QUFBSyxlQUFTLEVBQUMsa0JBQWY7QUFBQSw4QkFHRTtBQUFLLGlCQUFTLEVBQUMsb0JBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBQyxLQUFmO0FBQUEsb0NBQ0U7QUFB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QTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQVpGO0FBQUE7QUFuQko7QUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGVBaUdFO0FBQVEsaUJBQVMsRUFBQywrQ0FBbEI7QUFBQSwrQkFDRSw4REFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpHRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixtQkFERjtBQTBHRCxDQTVIRDs7S0FBTUYsTTtBQThITiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmVjZDA4ZjU0ZTkwY2YwYjhlYjZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb3VzZUV2ZW50LCBLZXlib2FyZEV2ZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmltcG9ydCB7IFNlbmRSZXF1ZXN0IH0gZnJvbSBcIi4vQWpheFwiO1xyXG5pbXBvcnQgSGVhZGVyQm9keSBmcm9tIFwiLi9IZWFkZXJCb2R5XCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7IFVzZXIgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy91c2VyXCI7XHJcblxyXG5pbXBvcnQgeyBjb21tb25JbWFnZXMgfSBmcm9tIFwiLi4vdXRpbHMvSW1hZ2VzXCI7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIHVzZXJPYmo6IFVzZXIgfCBudWxsO1xyXG59O1xyXG5cclxuY29uc3QgSGVhZGVyID0gKHsgdXNlck9iaiB9OiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHNpZ25vdXQgPSAoXHJcbiAgICBldmVudDogTW91c2VFdmVudDxIVE1MRWxlbWVudD4gfCBLZXlib2FyZEV2ZW50PEhUTUxFbGVtZW50PixcclxuICApOiB2b2lkID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgdXJsID0gYC9hcGkvdXNlci9zaWdub3V0YDtcclxuICAgIFNlbmRSZXF1ZXN0KHVybCwgXCJHRVRcIilcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGFsZXJ0KFwi66Gc6re47JWE7JuDXCIpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFwiL1wiKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGFsZXJ0KGVycm9yKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcIi9cIik7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogaGVhZGVyLWNvbnRhaW5lciBzdGFydCAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgey8qIGhlYWRlci10b3Agc3RhcnQgKi99XHJcbiAgICAgICAgey8qID09PT09PT09PT09PT09PT0gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItdG9wIGNvbG9yZWRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNCBjb2wtc20tNCBjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgey8qIGhlYWRlci10b3AtZmlyc3Qgc3RhcnQgKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPT09PT09PT09PT09PT09PSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXRvcC1maXJzdCBjbGVhcmZpeFwiPlxyXG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1pbmxpbmUgaGlkZGVuLW1kLWRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1pbmxpbmUtaXRlbVwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtaW5saW5lLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLW1hcC1tYXJrZXIgcHItMSBwbC0yXCI+PC9pPiDstqnrgqgg7JiI7IKw6rWwXHJcbiAgICAgICAgICAgICAgICAgICAgICDsgr3qtZDsnY0g7IiY7LSM7ZWZ7J6s6ri4IDE0MVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtaW5saW5lLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBob25lIHByLTEgcGwtMlwiPjwvaT4gMDQxLTMzNy00OTcxXHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIGhlYWRlci10b3AtZmlyc3QgZW5kICovfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTggY29sLXNtLTggY29sLWxnLThcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBoZWFkZXItdG9wLXNlY29uZCBzdGFydCAqL31cclxuICAgICAgICAgICAgICAgIHsvKiA9PT09PT09PT09PT09PT09ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImhlYWRlci10b3Atc2Vjb25kXCIgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cclxuICAgICAgICAgICAgICAgICAgey8qIGhlYWRlciB0b3AgZHJvcGRvd25zIHN0YXJ0ICovfVxyXG4gICAgICAgICAgICAgICAgICB7LyogPT09PT09PT09PT09PT09PSAqL31cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItdG9wLWRyb3Bkb3duIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cCBtbC0yXCIgaWQ9XCJhdXRoLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dXNlck9iaiA9PT0gbnVsbCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1UeXBlPVwiaW1hZ2Uvc3ZnK3htbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17Y29tbW9uSW1hZ2VzLmhlYWRlckxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L29iamVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJPYmogJiYgdXNlck9iai5pc0xvZ2dlZEluID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdXNlciBwci0xIHBsLTJcIj48L2k+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake3VzZXJPYmo/LmVtYWlsfWAuc3BsaXQoXCJAXCIpWzBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWdub3V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIG1sLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NpZ25vdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS11bmxvY2sgcHItMlwiPjwvaT4g66Gc6re47JWE7JuDXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbmluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtbG9jayBwci0yXCI+PC9pPiDroZzqt7jsnbhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIG1sLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXVzZXItcGx1cyBwci0yXCI+PC9pPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIO2ajOybkOqwgOyehVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdCBidG4tc20gbWwtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEteW91dHViZS1zcXVhcmVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7LyogaGVhZGVyIHRvcCBkcm9wZG93bnMgZW5kICovfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogaGVhZGVyLXRvcC1zZWNvbmQgZW5kICovfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiBoZWFkZXItdG9wIGVuZCAqL31cclxuXHJcbiAgICAgICAgey8qIGhlYWRlciBzdGFydCAqL31cclxuICAgICAgICB7LyogY2xhc3NlczogKi99XHJcbiAgICAgICAgey8qIFwiZml4ZWRcIjogZW5hYmxlcyBmaXhlZCBuYXZpZ2F0aW9uIG1vZGUgKHN0aWNreSBtZW51KSBlLmcuIGNsYXNzTmFtZT1cImhlYWRlciBmaXhlZCBjbGVhcmZpeFwiICovfVxyXG4gICAgICAgIHsvKiBcImZpeGVkLWRlc2t0b3BcIjogZW5hYmxlcyBmaXhlZCBuYXZpZ2F0aW9uIG9ubHkgZm9yIGRlc2t0b3AgZGV2aWNlcyBlLmcuIGNsYXNzTmFtZT1cImhlYWRlciBmaXhlZCBmaXhlZC1kZXNrdG9wIGNsZWFyZml4XCIgKi99XHJcbiAgICAgICAgey8qIFwiZml4ZWQtYWxsXCI6IGVuYWJsZXMgZml4ZWQgbmF2aWdhdGlvbiBvbmx5IGZvciBhbGwgZGV2aWNlcyBkZXNrdG9wIGFuZCBtb2JpbGUgZS5nLiBjbGFzc05hbWU9XCJoZWFkZXIgZml4ZWQgZml4ZWQtZGVza3RvcCBjbGVhcmZpeFwiICovfVxyXG4gICAgICAgIHsvKiBcImRhcmtcIjogZGFyayB2ZXJzaW9uIG9mIGhlYWRlciBlLmcuIGNsYXNzTmFtZT1cImhlYWRlciBkYXJrIGNsZWFyZml4XCIgKi99XHJcbiAgICAgICAgey8qIFwiY2VudGVyZWRcIjogbWFuZGF0b3J5IGNsYXNzIGZvciB0aGUgY2VudGVyZWQgbG9nbyBsYXlvdXQgKi99XHJcbiAgICAgICAgey8qID09PT09PT09PT09PT09PT0gKi99XHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXIgZml4ZWQgZml4ZWQtZGVza3RvcCBjbGVhcmZpeCB0ZXh0LW5vdG9cIj5cclxuICAgICAgICAgIDxIZWFkZXJCb2R5IC8+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==