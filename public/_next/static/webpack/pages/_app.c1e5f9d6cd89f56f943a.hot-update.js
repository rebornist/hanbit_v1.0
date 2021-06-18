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
              className: "col-5 col-sm-5 col-lg-5",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "header-top-first clearfix",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                  className: "list-inline hidden-md-down",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    className: "list-inline-item",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      className: "fa fa-map-marker pr-1 pl-2"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 48,
                      columnNumber: 23
                    }, _this), " \uCDA9\uB0A8 \uC608\uC0B0\uAD70 \uC0BD\uAD50\uC74D \uC218\uCD0C\uD559\uC7AC\uAE38 141"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 47,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    className: "list-inline-item",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      className: "fa fa-phone pr-1 pl-2"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 52,
                      columnNumber: 23
                    }, _this), " 041-337-4971"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 51,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    className: "list-inline-item",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      href: "https://www.youtube.com/channel/UCzWJxN425lDAY7J0PcCw8iQ",
                      style: {
                        textDecoration: "none"
                      },
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                        className: "fa fa-youtube-play pr-1 pl-2"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 59,
                        columnNumber: 25
                      }, _this), " ", "\uD55C\uBE5B\uAD50\uD68C \uC601\uC0C1"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 55,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 54,
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
              className: "col-7 col-sm-7 col-lg-7",
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
                      lineNumber: 76,
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
                              lineNumber: 87,
                              columnNumber: 35
                            }, _this), " ", "".concat(userObj === null || userObj === void 0 ? void 0 : userObj.email).split("@")[0]]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 86,
                            columnNumber: 33
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 85,
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
                            lineNumber: 97,
                            columnNumber: 33
                          }, _this), " \uB85C\uADF8\uC544\uC6C3"]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 91,
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
                              lineNumber: 104,
                              columnNumber: 35
                            }, _this), " \uB85C\uADF8\uC778"]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 103,
                            columnNumber: 33
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 102,
                          columnNumber: 31
                        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                          href: "/signup",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                            className: "btn btn-default btn-sm ml-1",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                              className: "fa fa-user-plus pr-2"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 109,
                              columnNumber: 35
                            }, _this), " ", "\uD68C\uC6D0\uAC00\uC785"]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 108,
                            columnNumber: 33
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 107,
                          columnNumber: 31
                        }, _this)]
                      }, void 0, true)
                    }, void 0, false)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 74,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
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
          lineNumber: 137,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXJUb3AudHN4Il0sIm5hbWVzIjpbIkhlYWRlciIsInVzZXJPYmoiLCJzaWdub3V0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVybCIsIlNlbmRSZXF1ZXN0IiwidGhlbiIsImFsZXJ0Iiwid2luZG93IiwibG9jYXRpb24iLCJyZXBsYWNlIiwiZXJyb3IiLCJ0ZXh0RGVjb3JhdGlvbiIsImNvbW1vbkltYWdlcyIsImhlYWRlckxvYWRpbmciLCJpc0xvZ2dlZEluIiwiZW1haWwiLCJzcGxpdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBSUE7O0FBTUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBd0I7QUFBQSxNQUFyQkMsT0FBcUIsUUFBckJBLE9BQXFCOztBQUNyQyxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUNkQyxLQURjLEVBRUw7QUFDVEEsU0FBSyxDQUFDQyxjQUFOO0FBRUEsUUFBTUMsR0FBRyxzQkFBVDtBQUNBQyxzREFBVyxDQUFDRCxHQUFELEVBQU0sS0FBTixDQUFYLENBQ0dFLElBREgsQ0FDUSxZQUFNO0FBQ1ZDLFdBQUssQ0FBQyxNQUFELENBQUw7QUFDQUMsWUFBTSxDQUFDQyxRQUFQLENBQWdCQyxPQUFoQixDQUF3QixHQUF4QjtBQUNELEtBSkgsV0FLUyxVQUFDQyxLQUFELEVBQVc7QUFDaEJKLFdBQUssQ0FBQ0ksS0FBRCxDQUFMO0FBQ0FILFlBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0IsR0FBeEI7QUFDRCxLQVJIO0FBU0QsR0FmRDs7QUFpQkEsc0JBQ0U7QUFBQSwyQkFFRTtBQUFLLGVBQVMsRUFBQyxrQkFBZjtBQUFBLDhCQUdFO0FBQUssaUJBQVMsRUFBQyxvQkFBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFDLEtB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QUE7QUFBQTtBQUFBO0FBQUEscUNBREYsRUFDMkMsR0FEM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FORjtBQUFBO0FBbkJKO0FBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkExQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRixlQW9HRTtBQUFRLGlCQUFTLEVBQUMsK0NBQWxCO0FBQUEsK0JBQ0UsOERBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFwR0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkYsbUJBREY7QUE2R0QsQ0EvSEQ7O0tBQU1GLE07QUFpSU4sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jMWU1ZjlkNmNkODlmNTZmOTQzYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW91c2VFdmVudCwgS2V5Ym9hcmRFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgeyBTZW5kUmVxdWVzdCB9IGZyb20gXCIuL0FqYXhcIjtcclxuaW1wb3J0IEhlYWRlckJvZHkgZnJvbSBcIi4vSGVhZGVyQm9keVwiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBVc2VyIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvdXNlclwiO1xyXG5cclxuaW1wb3J0IHsgY29tbW9uSW1hZ2VzIH0gZnJvbSBcIi4uL3V0aWxzL0ltYWdlc1wiO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICB1c2VyT2JqOiBVc2VyIHwgbnVsbDtcclxufTtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICh7IHVzZXJPYmogfTogUHJvcHMpID0+IHtcclxuICBjb25zdCBzaWdub3V0ID0gKFxyXG4gICAgZXZlbnQ6IE1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQ+IHwgS2V5Ym9hcmRFdmVudDxIVE1MRWxlbWVudD4sXHJcbiAgKTogdm9pZCA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IHVybCA9IGAvYXBpL3VzZXIvc2lnbm91dGA7XHJcbiAgICBTZW5kUmVxdWVzdCh1cmwsIFwiR0VUXCIpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBhbGVydChcIuuhnOq3uOyVhOybg1wiKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcIi9cIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBhbGVydChlcnJvcik7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCIvXCIpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgey8qIGhlYWRlci1jb250YWluZXIgc3RhcnQgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIHsvKiBoZWFkZXItdG9wIHN0YXJ0ICovfVxyXG4gICAgICAgIHsvKiA9PT09PT09PT09PT09PT09ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXRvcCBjb2xvcmVkXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTUgY29sLXNtLTUgY29sLWxnLTVcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBoZWFkZXItdG9wLWZpcnN0IHN0YXJ0ICovfVxyXG4gICAgICAgICAgICAgICAgey8qID09PT09PT09PT09PT09PT0gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci10b3AtZmlyc3QgY2xlYXJmaXhcIj5cclxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtaW5saW5lIGhpZGRlbi1tZC1kb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtaW5saW5lLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLW1hcC1tYXJrZXIgcHItMSBwbC0yXCI+PC9pPiDstqnrgqgg7JiI7IKw6rWwXHJcbiAgICAgICAgICAgICAgICAgICAgICDsgr3qtZDsnY0g7IiY7LSM7ZWZ7J6s6ri4IDE0MVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtaW5saW5lLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBob25lIHByLTEgcGwtMlwiPjwvaT4gMDQxLTMzNy00OTcxXHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1pbmxpbmUtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2NoYW5uZWwvVUN6V0p4TjQyNWxEQVk3SjBQY0N3OGlRXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXlvdXR1YmUtcGxheSBwci0xIHBsLTJcIj48L2k+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICDtlZzruZvqtZDtmowg7JiB7IOBXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIGhlYWRlci10b3AtZmlyc3QgZW5kICovfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTcgY29sLXNtLTcgY29sLWxnLTdcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBoZWFkZXItdG9wLXNlY29uZCBzdGFydCAqL31cclxuICAgICAgICAgICAgICAgIHsvKiA9PT09PT09PT09PT09PT09ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImhlYWRlci10b3Atc2Vjb25kXCIgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cclxuICAgICAgICAgICAgICAgICAgey8qIGhlYWRlciB0b3AgZHJvcGRvd25zIHN0YXJ0ICovfVxyXG4gICAgICAgICAgICAgICAgICB7LyogPT09PT09PT09PT09PT09PSAqL31cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItdG9wLWRyb3Bkb3duIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cCBtbC0yXCIgaWQ9XCJhdXRoLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dXNlck9iaiA9PT0gbnVsbCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1UeXBlPVwiaW1hZ2Uvc3ZnK3htbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17Y29tbW9uSW1hZ2VzLmhlYWRlckxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L29iamVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJPYmogJiYgdXNlck9iai5pc0xvZ2dlZEluID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdXNlciBwci0xIHBsLTJcIj48L2k+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake3VzZXJPYmo/LmVtYWlsfWAuc3BsaXQoXCJAXCIpWzBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWdub3V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIG1sLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NpZ25vdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS11bmxvY2sgcHItMlwiPjwvaT4g66Gc6re47JWE7JuDXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbmluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtbG9jayBwci0yXCI+PC9pPiDroZzqt7jsnbhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIG1sLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXVzZXItcGx1cyBwci0yXCI+PC9pPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIO2ajOybkOqwgOyehVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgey8qIGhlYWRlciB0b3AgZHJvcGRvd25zIGVuZCAqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIGhlYWRlci10b3Atc2Vjb25kIGVuZCAqL31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogaGVhZGVyLXRvcCBlbmQgKi99XHJcblxyXG4gICAgICAgIHsvKiBoZWFkZXIgc3RhcnQgKi99XHJcbiAgICAgICAgey8qIGNsYXNzZXM6ICovfVxyXG4gICAgICAgIHsvKiBcImZpeGVkXCI6IGVuYWJsZXMgZml4ZWQgbmF2aWdhdGlvbiBtb2RlIChzdGlja3kgbWVudSkgZS5nLiBjbGFzc05hbWU9XCJoZWFkZXIgZml4ZWQgY2xlYXJmaXhcIiAqL31cclxuICAgICAgICB7LyogXCJmaXhlZC1kZXNrdG9wXCI6IGVuYWJsZXMgZml4ZWQgbmF2aWdhdGlvbiBvbmx5IGZvciBkZXNrdG9wIGRldmljZXMgZS5nLiBjbGFzc05hbWU9XCJoZWFkZXIgZml4ZWQgZml4ZWQtZGVza3RvcCBjbGVhcmZpeFwiICovfVxyXG4gICAgICAgIHsvKiBcImZpeGVkLWFsbFwiOiBlbmFibGVzIGZpeGVkIG5hdmlnYXRpb24gb25seSBmb3IgYWxsIGRldmljZXMgZGVza3RvcCBhbmQgbW9iaWxlIGUuZy4gY2xhc3NOYW1lPVwiaGVhZGVyIGZpeGVkIGZpeGVkLWRlc2t0b3AgY2xlYXJmaXhcIiAqL31cclxuICAgICAgICB7LyogXCJkYXJrXCI6IGRhcmsgdmVyc2lvbiBvZiBoZWFkZXIgZS5nLiBjbGFzc05hbWU9XCJoZWFkZXIgZGFyayBjbGVhcmZpeFwiICovfVxyXG4gICAgICAgIHsvKiBcImNlbnRlcmVkXCI6IG1hbmRhdG9yeSBjbGFzcyBmb3IgdGhlIGNlbnRlcmVkIGxvZ28gbGF5b3V0ICovfVxyXG4gICAgICAgIHsvKiA9PT09PT09PT09PT09PT09ICovfVxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyIGZpeGVkIGZpeGVkLWRlc2t0b3AgY2xlYXJmaXggdGV4dC1ub3RvXCI+XHJcbiAgICAgICAgICA8SGVhZGVyQm9keSAvPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=