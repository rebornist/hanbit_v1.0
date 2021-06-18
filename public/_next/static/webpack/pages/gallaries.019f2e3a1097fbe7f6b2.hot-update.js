self["webpackHotUpdate_N_E"]("pages/gallaries",{

/***/ "./pages/gallaries/index.tsx":
/*!***********************************!*\
  !*** ./pages/gallaries/index.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Ajax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Ajax */ "./components/Ajax.tsx");
/* harmony import */ var _components_GallaryList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/GallaryList */ "./components/GallaryList.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\saint\\OneDrive\\dev\\frontend\\hanbit-ts\\pages\\gallaries\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var GallaryList = function GallaryList() {
  _s();

  var category = "gallaries";

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      response = _useState[0],
      setResponse = _useState[1];

  var page;

  if ((response === null || response === void 0 ? void 0 : response.page) === undefined || null) {
    page = 1;
  } else {
    page = response.page;
  }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var url = "/api/".concat(category, "?page=").concat(page);
    (0,_components_Ajax__WEBPACK_IMPORTED_MODULE_4__.SendRequest)(url, "GET").then(function (resp) {
      setResponse(resp.data);
    })["catch"](function (error) {
      alert(error);
    });
  }, []); // <-- empty dependency to run once on component mount

  var onPageClick = function onPageClick(event) {
    var _target$parentElement, _target$parentElement2;

    event.preventDefault();
    var target = event.nativeEvent.target;
    var text = (_target$parentElement = target.parentElement) === null || _target$parentElement === void 0 ? void 0 : (_target$parentElement2 = _target$parentElement.querySelector("i")) === null || _target$parentElement2 === void 0 ? void 0 : _target$parentElement2.getAttribute("id");

    if (text === "next-page") {
      page = page + 1;
    } else {
      page = page - 1;
    }

    var url = "/api/".concat(category, "?page=").concat(page);
    (0,_components_Ajax__WEBPACK_IMPORTED_MODULE_4__.SendRequest)(url, "GET").then(function (resp) {
      setResponse(resp.data);
    })["catch"](function (error) {
      if (true) {
        alert(error.message);
      }
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "main-container text-noto text-md font-sm",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "main col-12",
          children: [response && response.userGrade && (response.userGrade !== "Member" && response.userGrade !== "User" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "text-right",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/gallaries/create/",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "button",
                className: "btn btn-default-transparent btn-animation btn-animation--slide-horizontal margin-clear",
                value: "\uAE00 \uC791\uC131"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 17
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            className: "title text-bold",
            children: "\uAC24\uB7EC\uB9AC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "separator-2 mb-20"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "container-fluid",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "row grid-space-0",
              children: response && response.totalPage > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GallaryList__WEBPACK_IMPORTED_MODULE_5__.default, {
                category: category,
                items: response.gallaries
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 19
              }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
            "aria-label": "Page navigation",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              className: "pagination justify-content-center",
              children: [response && response.page > 1 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: "page-item",
                onClick: onPageClick,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "page-link",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                    id: "prev-page",
                    className: "fa fa-angle-left"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 111,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 110,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 19
              }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: "page-item disabled",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "page-link",
                  "aria-label": "Previous",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                    "aria-hidden": "true",
                    className: "fa fa-angle-left"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 117,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: "page-item mt-2 mx-4",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                  children: [response && response.page, " of", " ", response && response.totalPage]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 17
              }, _this), response && response.page === Math.ceil(Number(response.totalPage) / 10) ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: "page-item ml-2 disabled",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "page-link",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                    "aria-hidden": "true",
                    className: "fa fa-angle-right"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 133,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 19
              }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: "page-item ml-2",
                onClick: onPageClick,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "page-link",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                    id: "next-page",
                    className: "fa fa-angle-right"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 139,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "sr-only"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 140,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 5
  }, _this);
};

_s(GallaryList, "UzygO7jZ75H4HW8mRsa6teov5jY=");

_c = GallaryList;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.withRouter)(GallaryList));

var _c, _c2;

$RefreshReg$(_c, "GallaryList");
$RefreshReg$(_c2, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FsbGFyaWVzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJHYWxsYXJ5TGlzdCIsImNhdGVnb3J5IiwidXNlU3RhdGUiLCJyZXNwb25zZSIsInNldFJlc3BvbnNlIiwicGFnZSIsInVuZGVmaW5lZCIsInVzZUVmZmVjdCIsInVybCIsIlNlbmRSZXF1ZXN0IiwidGhlbiIsInJlc3AiLCJkYXRhIiwiZXJyb3IiLCJhbGVydCIsIm9uUGFnZUNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsIm5hdGl2ZUV2ZW50IiwidGV4dCIsInBhcmVudEVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwibWVzc2FnZSIsInVzZXJHcmFkZSIsInRvdGFsUGFnZSIsImdhbGxhcmllcyIsIk1hdGgiLCJjZWlsIiwiTnVtYmVyIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBV0EsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUN4QixNQUFNQyxRQUFnQixHQUFHLFdBQXpCOztBQUR3QixrQkFHUUMsK0NBQVEsQ0FBbUIsSUFBbkIsQ0FIaEI7QUFBQSxNQUdqQkMsUUFIaUI7QUFBQSxNQUdQQyxXQUhPOztBQUl4QixNQUFJQyxJQUFKOztBQUNBLE1BQUksQ0FBQUYsUUFBUSxTQUFSLElBQUFBLFFBQVEsV0FBUixZQUFBQSxRQUFRLENBQUVFLElBQVYsTUFBbUJDLFNBQW5CLElBQWdDLElBQXBDLEVBQTBDO0FBQ3hDRCxRQUFJLEdBQUcsQ0FBUDtBQUNELEdBRkQsTUFFTztBQUNMQSxRQUFJLEdBQUdGLFFBQVEsQ0FBQ0UsSUFBaEI7QUFDRDs7QUFFREUsa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsR0FBRyxrQkFBV1AsUUFBWCxtQkFBNEJJLElBQTVCLENBQVQ7QUFD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QUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZELGdCQVFDO0FBQUkseUJBQVMsRUFBQyxnQkFBZDtBQUErQix1QkFBTyxFQUFFWCxXQUF4QztBQUFBLHVDQUNFO0FBQUcsMkJBQVMsRUFBQyxXQUFiO0FBQUEsMENBQ0U7QUFBRyxzQkFBRSxFQUFDLFdBQU47QUFBa0IsNkJBQVMsRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGVBRUU7QUFBTSw2QkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkE5Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFsQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF3RkQsQ0F4SUQ7O0dBQU1mLFc7O0tBQUFBLFc7QUEwSU4sK0RBQWUsTUFBQStCLHVEQUFVLENBQUMvQixXQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dhbGxhcmllcy4wMTlmMmUzYTEwOTdmYmU3ZjZiMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgTW91c2VFdmVudCwgS2V5Ym9hcmRFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IFNlbmRSZXF1ZXN0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQWpheFwiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9HYWxsYXJ5TGlzdFwiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBHYWxsYXJ5IH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvZ2FsbGFyeVwiO1xyXG5cclxudHlwZSBHYWxsYXJpZXMgPSB7XHJcbiAgdG90YWxQYWdlOiBudW1iZXI7XHJcbiAgcGFnZTogbnVtYmVyO1xyXG4gIGdhbGxhcmllczogR2FsbGFyeVtdO1xyXG4gIHVzZXJHcmFkZTogc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3QgR2FsbGFyeUxpc3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2F0ZWdvcnk6IHN0cmluZyA9IFwiZ2FsbGFyaWVzXCI7XHJcblxyXG4gIGNvbnN0IFtyZXNwb25zZSwgc2V0UmVzcG9uc2VdID0gdXNlU3RhdGU8R2FsbGFyaWVzIHwgbnVsbD4obnVsbCk7XHJcbiAgbGV0IHBhZ2U6IG51bWJlcjtcclxuICBpZiAocmVzcG9uc2U/LnBhZ2UgPT09IHVuZGVmaW5lZCB8fCBudWxsKSB7XHJcbiAgICBwYWdlID0gMTtcclxuICB9IGVsc2Uge1xyXG4gICAgcGFnZSA9IHJlc3BvbnNlLnBhZ2U7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdXJsID0gYC9hcGkvJHtjYXRlZ29yeX0/cGFnZT0ke3BhZ2V9YDtcclxuICAgIFNlbmRSZXF1ZXN0KHVybCwgXCJHRVRcIilcclxuICAgICAgLnRoZW4oKHJlc3ApID0+IHtcclxuICAgICAgICBzZXRSZXNwb25zZShyZXNwLmRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgYWxlcnQoZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7IC8vIDwtLSBlbXB0eSBkZXBlbmRlbmN5IHRvIHJ1biBvbmNlIG9uIGNvbXBvbmVudCBtb3VudFxyXG5cclxuICBjb25zdCBvblBhZ2VDbGljayA9IChcclxuICAgIGV2ZW50OiBNb3VzZUV2ZW50PEhUTUxFbGVtZW50PiB8IEtleWJvYXJkRXZlbnQ8SFRNTEVsZW1lbnQ+LFxyXG4gICk6IHZvaWQgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC5uYXRpdmVFdmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCB0ZXh0ID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoXCJpXCIpPy5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcclxuXHJcbiAgICBpZiAodGV4dCA9PT0gXCJuZXh0LXBhZ2VcIikge1xyXG4gICAgICBwYWdlID0gcGFnZSArIDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwYWdlID0gcGFnZSAtIDE7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXJsID0gYC9hcGkvJHtjYXRlZ29yeX0/cGFnZT0ke3BhZ2V9YDtcclxuICAgIFNlbmRSZXF1ZXN0KHVybCwgXCJHRVRcIilcclxuICAgICAgLnRoZW4oKHJlc3ApID0+IHtcclxuICAgICAgICBzZXRSZXNwb25zZShyZXNwLmRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1haW4tY29udGFpbmVyIHRleHQtbm90byB0ZXh0LW1kIGZvbnQtc21cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgey8qIDwhLS0gbWFpbiBzdGFydCAtLT4gKi99XHJcbiAgICAgICAgICB7LyogPCEtLSA9PT09PT09PT09PT09PT09IC0tPiAqL31cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4gY29sLTEyXCI+XHJcbiAgICAgICAgICAgIHtyZXNwb25zZSAmJlxyXG4gICAgICAgICAgICAgIHJlc3BvbnNlLnVzZXJHcmFkZSAmJlxyXG4gICAgICAgICAgICAgIChyZXNwb25zZS51c2VyR3JhZGUgIT09IFwiTWVtYmVyXCIgJiZcclxuICAgICAgICAgICAgICByZXNwb25zZS51c2VyR3JhZGUgIT09IFwiVXNlclwiID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZ2FsbGFyaWVzL2NyZWF0ZS9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0LXRyYW5zcGFyZW50IGJ0bi1hbmltYXRpb24gYnRuLWFuaW1hdGlvbi0tc2xpZGUtaG9yaXpvbnRhbCBtYXJnaW4tY2xlYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCLquIAg7J6R7ISxXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPD48Lz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgey8qIDwhLS0gcGFnZS10aXRsZSBzdGFydCAtLT4gKi99XHJcbiAgICAgICAgICAgIHsvKiA8IS0tID09PT09PT09PT09PT09PT0gLS0+ICovfVxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGUgdGV4dC1ib2xkXCI+6rCk65+s66asPC9oMT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXBhcmF0b3ItMiBtYi0yMFwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIDwhLS0gcGFnZS10aXRsZSBlbmQgLS0+ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGdyaWQtc3BhY2UtMFwiPlxyXG4gICAgICAgICAgICAgICAge3Jlc3BvbnNlICYmIHJlc3BvbnNlLnRvdGFsUGFnZSA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0IGNhdGVnb3J5PXtjYXRlZ29yeX0gaXRlbXM9e3Jlc3BvbnNlLmdhbGxhcmllc30gLz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDw+PC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiA8IS0tIHBhZ2luYXRpb24gc3RhcnQgLS0+ICovfVxyXG4gICAgICAgICAgICA8bmF2IGFyaWEtbGFiZWw9XCJQYWdlIG5hdmlnYXRpb25cIj5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGFnaW5hdGlvbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7cmVzcG9uc2UgJiYgcmVzcG9uc2UucGFnZSA+IDEgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwYWdlLWl0ZW1cIiBvbkNsaWNrPXtvblBhZ2VDbGlja30+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGFnZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBpZD1cInByZXYtcGFnZVwiIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWxlZnRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2UtaXRlbSBkaXNhYmxlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBhZ2UtbGlua1wiIGFyaWEtbGFiZWw9XCJQcmV2aW91c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtbGVmdFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwYWdlLWl0ZW0gbXQtMiBteC00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAgICAgICAgICB7cmVzcG9uc2UgJiYgcmVzcG9uc2UucGFnZX0gb2Z7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAge3Jlc3BvbnNlICYmIHJlc3BvbnNlLnRvdGFsUGFnZX1cclxuICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAge3Jlc3BvbnNlICYmXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5wYWdlID09PSBNYXRoLmNlaWwoTnVtYmVyKHJlc3BvbnNlLnRvdGFsUGFnZSkgLyAxMCkgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwYWdlLWl0ZW0gbWwtMiBkaXNhYmxlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBhZ2UtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtcmlnaHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2UtaXRlbSBtbC0yXCIgb25DbGljaz17b25QYWdlQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBhZ2UtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgaWQ9XCJuZXh0LXBhZ2VcIiBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1yaWdodFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgey8qIDwhLS0gcGFnaW5hdGlvbiBlbmQgLS0+ICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogPCEtLSBtYWluIGVuZCAtLT4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEdhbGxhcnlMaXN0KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==