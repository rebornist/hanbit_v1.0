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
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      className: "fa fa-youtube-play pr-1 pl-2"
                    }, void 0, false, {
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
                      lineNumber: 70,
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
                              lineNumber: 81,
                              columnNumber: 35
                            }, _this), " ", "".concat(userObj === null || userObj === void 0 ? void 0 : userObj.email).split("@")[0]]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 80,
                            columnNumber: 33
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 79,
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
                            lineNumber: 91,
                            columnNumber: 33
                          }, _this), " \uB85C\uADF8\uC544\uC6C3"]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 85,
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
                              lineNumber: 98,
                              columnNumber: 35
                            }, _this), " \uB85C\uADF8\uC778"]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 97,
                            columnNumber: 33
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 96,
                          columnNumber: 31
                        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                          href: "/signup",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                            className: "btn btn-default btn-sm ml-1",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                              className: "fa fa-user-plus pr-2"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 103,
                              columnNumber: 35
                            }, _this), " ", "\uD68C\uC6D0\uAC00\uC785"]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 102,
                            columnNumber: 33
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 101,
                          columnNumber: 31
                        }, _this)]
                      }, void 0, true)
                    }, void 0, false)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 68,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
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
          lineNumber: 131,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXJUb3AudHN4Il0sIm5hbWVzIjpbIkhlYWRlciIsInVzZXJPYmoiLCJzaWdub3V0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVybCIsIlNlbmRSZXF1ZXN0IiwidGhlbiIsImFsZXJ0Iiwid2luZG93IiwibG9jYXRpb24iLCJyZXBsYWNlIiwiZXJyb3IiLCJjb21tb25JbWFnZXMiLCJoZWFkZXJMb2FkaW5nIiwiaXNMb2dnZWRJbiIsImVtYWlsIiwic3BsaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUlBOztBQU1BLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQXdCO0FBQUEsTUFBckJDLE9BQXFCLFFBQXJCQSxPQUFxQjs7QUFDckMsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FDZEMsS0FEYyxFQUVMO0FBQ1RBLFNBQUssQ0FBQ0MsY0FBTjtBQUVBLFFBQU1DLEdBQUcsc0JBQVQ7QUFDQUMsc0RBQVcsQ0FBQ0QsR0FBRCxFQUFNLEtBQU4sQ0FBWCxDQUNHRSxJQURILENBQ1EsWUFBTTtBQUNWQyxXQUFLLENBQUMsTUFBRCxDQUFMO0FBQ0FDLFlBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0IsR0FBeEI7QUFDRCxLQUpILFdBS1MsVUFBQ0MsS0FBRCxFQUFXO0FBQ2hCSixXQUFLLENBQUNJLEtBQUQsQ0FBTDtBQUNBSCxZQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCLEdBQXhCO0FBQ0QsS0FSSDtBQVNELEdBZkQ7O0FBaUJBLHNCQUNFO0FBQUEsMkJBRUU7QUFBSyxlQUFTLEVBQUMsa0JBQWY7QUFBQSw4QkFHRTtBQUFLLGlCQUFTLEVBQUMsb0JBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBQyxLQUFmO0FBQUEsb0NBQ0U7QUFB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QUE7QUFBQTtBQUFBO0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsZUE4RkU7QUFBUSxpQkFBUyxFQUFDLCtDQUFsQjtBQUFBLCtCQUNFLDhEQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBOUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGLG1CQURGO0FBdUdELENBekhEOztLQUFNRixNO0FBMkhOLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuODM5YjRiZDJjYmU0YWNiZDQyMTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vdXNlRXZlbnQsIEtleWJvYXJkRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW1wb3J0IHsgU2VuZFJlcXVlc3QgfSBmcm9tIFwiLi9BamF4XCI7XHJcbmltcG9ydCBIZWFkZXJCb2R5IGZyb20gXCIuL0hlYWRlckJvZHlcIjtcclxuXHJcbmltcG9ydCB0eXBlIHsgVXNlciB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3VzZXJcIjtcclxuXHJcbmltcG9ydCB7IGNvbW1vbkltYWdlcyB9IGZyb20gXCIuLi91dGlscy9JbWFnZXNcIjtcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgdXNlck9iajogVXNlciB8IG51bGw7XHJcbn07XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoeyB1c2VyT2JqIH06IFByb3BzKSA9PiB7XHJcbiAgY29uc3Qgc2lnbm91dCA9IChcclxuICAgIGV2ZW50OiBNb3VzZUV2ZW50PEhUTUxFbGVtZW50PiB8IEtleWJvYXJkRXZlbnQ8SFRNTEVsZW1lbnQ+LFxyXG4gICk6IHZvaWQgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCB1cmwgPSBgL2FwaS91c2VyL3NpZ25vdXRgO1xyXG4gICAgU2VuZFJlcXVlc3QodXJsLCBcIkdFVFwiKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgYWxlcnQoXCLroZzqt7jslYTsm4NcIik7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCIvXCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgYWxlcnQoZXJyb3IpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFwiL1wiKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHsvKiBoZWFkZXItY29udGFpbmVyIHN0YXJ0ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jb250YWluZXJcIj5cclxuICAgICAgICB7LyogaGVhZGVyLXRvcCBzdGFydCAqL31cclxuICAgICAgICB7LyogPT09PT09PT09PT09PT09PSAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci10b3AgY29sb3JlZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC01IGNvbC1zbS01IGNvbC1sZy01XCI+XHJcbiAgICAgICAgICAgICAgICB7LyogaGVhZGVyLXRvcC1maXJzdCBzdGFydCAqL31cclxuICAgICAgICAgICAgICAgIHsvKiA9PT09PT09PT09PT09PT09ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItdG9wLWZpcnN0IGNsZWFyZml4XCI+XHJcbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWlubGluZSBoaWRkZW4tbWQtZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWlubGluZS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1tYXAtbWFya2VyIHByLTEgcGwtMlwiPjwvaT4g7Lap64KoIOyYiOyCsOq1sFxyXG4gICAgICAgICAgICAgICAgICAgICAg7IK96rWQ7J2NIOyImOy0jO2VmeyerOq4uCAxNDFcclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWlubGluZS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1waG9uZSBwci0xIHBsLTJcIj48L2k+IDA0MS0zMzctNDk3MVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtaW5saW5lLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXlvdXR1YmUtcGxheSBwci0xIHBsLTJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIGhlYWRlci10b3AtZmlyc3QgZW5kICovfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTcgY29sLXNtLTcgY29sLWxnLTdcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBoZWFkZXItdG9wLXNlY29uZCBzdGFydCAqL31cclxuICAgICAgICAgICAgICAgIHsvKiA9PT09PT09PT09PT09PT09ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImhlYWRlci10b3Atc2Vjb25kXCIgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cclxuICAgICAgICAgICAgICAgICAgey8qIGhlYWRlciB0b3AgZHJvcGRvd25zIHN0YXJ0ICovfVxyXG4gICAgICAgICAgICAgICAgICB7LyogPT09PT09PT09PT09PT09PSAqL31cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItdG9wLWRyb3Bkb3duIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cCBtbC0yXCIgaWQ9XCJhdXRoLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dXNlck9iaiA9PT0gbnVsbCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1UeXBlPVwiaW1hZ2Uvc3ZnK3htbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17Y29tbW9uSW1hZ2VzLmhlYWRlckxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L29iamVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJPYmogJiYgdXNlck9iai5pc0xvZ2dlZEluID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdXNlciBwci0xIHBsLTJcIj48L2k+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake3VzZXJPYmo/LmVtYWlsfWAuc3BsaXQoXCJAXCIpWzBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWdub3V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIG1sLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NpZ25vdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS11bmxvY2sgcHItMlwiPjwvaT4g66Gc6re47JWE7JuDXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbmluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtbG9jayBwci0yXCI+PC9pPiDroZzqt7jsnbhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIG1sLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXVzZXItcGx1cyBwci0yXCI+PC9pPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIO2ajOybkOqwgOyehVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgey8qIGhlYWRlciB0b3AgZHJvcGRvd25zIGVuZCAqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIGhlYWRlci10b3Atc2Vjb25kIGVuZCAqL31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogaGVhZGVyLXRvcCBlbmQgKi99XHJcblxyXG4gICAgICAgIHsvKiBoZWFkZXIgc3RhcnQgKi99XHJcbiAgICAgICAgey8qIGNsYXNzZXM6ICovfVxyXG4gICAgICAgIHsvKiBcImZpeGVkXCI6IGVuYWJsZXMgZml4ZWQgbmF2aWdhdGlvbiBtb2RlIChzdGlja3kgbWVudSkgZS5nLiBjbGFzc05hbWU9XCJoZWFkZXIgZml4ZWQgY2xlYXJmaXhcIiAqL31cclxuICAgICAgICB7LyogXCJmaXhlZC1kZXNrdG9wXCI6IGVuYWJsZXMgZml4ZWQgbmF2aWdhdGlvbiBvbmx5IGZvciBkZXNrdG9wIGRldmljZXMgZS5nLiBjbGFzc05hbWU9XCJoZWFkZXIgZml4ZWQgZml4ZWQtZGVza3RvcCBjbGVhcmZpeFwiICovfVxyXG4gICAgICAgIHsvKiBcImZpeGVkLWFsbFwiOiBlbmFibGVzIGZpeGVkIG5hdmlnYXRpb24gb25seSBmb3IgYWxsIGRldmljZXMgZGVza3RvcCBhbmQgbW9iaWxlIGUuZy4gY2xhc3NOYW1lPVwiaGVhZGVyIGZpeGVkIGZpeGVkLWRlc2t0b3AgY2xlYXJmaXhcIiAqL31cclxuICAgICAgICB7LyogXCJkYXJrXCI6IGRhcmsgdmVyc2lvbiBvZiBoZWFkZXIgZS5nLiBjbGFzc05hbWU9XCJoZWFkZXIgZGFyayBjbGVhcmZpeFwiICovfVxyXG4gICAgICAgIHsvKiBcImNlbnRlcmVkXCI6IG1hbmRhdG9yeSBjbGFzcyBmb3IgdGhlIGNlbnRlcmVkIGxvZ28gbGF5b3V0ICovfVxyXG4gICAgICAgIHsvKiA9PT09PT09PT09PT09PT09ICovfVxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyIGZpeGVkIGZpeGVkLWRlc2t0b3AgY2xlYXJmaXggdGV4dC1ub3RvXCI+XHJcbiAgICAgICAgICA8SGVhZGVyQm9keSAvPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=