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
          children: [response && response.userGrade ? response.userGrade !== "Member" && response.userGrade !== "User" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "text-right",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/gallaries/create/",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "button",
                className: "btn btn-default-transparent btn-animation btn-animation--slide-horizontal margin-clear",
                value: "\uAE00 \uC791\uC131"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 17
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            className: "title text-bold",
            children: "\uAC24\uB7EC\uB9AC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "separator-2 mb-20"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
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
                lineNumber: 100,
                columnNumber: 19
              }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
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
                    lineNumber: 113,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
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
                    lineNumber: 119,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: "page-item mt-2 mx-4",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                  children: [response && response.page, " of", " ", response && response.totalPage]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
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
                    lineNumber: 135,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
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
                    lineNumber: 141,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "sr-only"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 142,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FsbGFyaWVzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJHYWxsYXJ5TGlzdCIsImNhdGVnb3J5IiwidXNlU3RhdGUiLCJyZXNwb25zZSIsInNldFJlc3BvbnNlIiwicGFnZSIsInVuZGVmaW5lZCIsInVzZUVmZmVjdCIsInVybCIsIlNlbmRSZXF1ZXN0IiwidGhlbiIsInJlc3AiLCJkYXRhIiwiZXJyb3IiLCJhbGVydCIsIm9uUGFnZUNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsIm5hdGl2ZUV2ZW50IiwidGV4dCIsInBhcmVudEVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwibWVzc2FnZSIsInVzZXJHcmFkZSIsInRvdGFsUGFnZSIsImdhbGxhcmllcyIsIk1hdGgiLCJjZWlsIiwiTnVtYmVyIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBV0EsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUN4QixNQUFNQyxRQUFnQixHQUFHLFdBQXpCOztBQUR3QixrQkFHUUMsK0NBQVEsQ0FBbUIsSUFBbkIsQ0FIaEI7QUFBQSxNQUdqQkMsUUFIaUI7QUFBQSxNQUdQQyxXQUhPOztBQUl4QixNQUFJQyxJQUFKOztBQUNBLE1BQUksQ0FBQUYsUUFBUSxTQUFSLElBQUFBLFFBQVEsV0FBUixZQUFBQSxRQUFRLENBQUVFLElBQVYsTUFBbUJDLFNBQW5CLElBQWdDLElBQXBDLEVBQTBDO0FBQ3hDRCxRQUFJLEdBQUcsQ0FBUDtBQUNELEdBRkQsTUFFTztBQUNMQSxRQUFJLEdBQUdGLFFBQVEsQ0FBQ0UsSUFBaEI7QUFDRDs7QUFFREUsa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsR0FBRyxrQkFBV1AsUUFBWCxtQkFBNEJJLElBQTVCLENBQVQ7QUFD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QUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRCxnQkFRQztBQUFJLHlCQUFTLEVBQUMsZ0JBQWQ7QUFBK0IsdUJBQU8sRUFBRVgsV0FBeEM7QUFBQSx1Q0FDRTtBQUFHLDJCQUFTLEVBQUMsV0FBYjtBQUFBLDBDQUNFO0FBQUcsc0JBQUUsRUFBQyxXQUFOO0FBQWtCLDZCQUFTLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQUVFO0FBQU0sNkJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBOUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBcENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMEZELENBMUlEOztHQUFNZixXOztLQUFBQSxXO0FBNElOLCtEQUFlLE1BQUErQix1REFBVSxDQUFDL0IsV0FBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nYWxsYXJpZXMuMzc5OTNiZDhlZmM1MGFkMTVhMTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIE1vdXNlRXZlbnQsIEtleWJvYXJkRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBTZW5kUmVxdWVzdCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0FqYXhcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvR2FsbGFyeUxpc3RcIjtcclxuXHJcbmltcG9ydCB0eXBlIHsgR2FsbGFyeSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2dhbGxhcnlcIjtcclxuXHJcbnR5cGUgR2FsbGFyaWVzID0ge1xyXG4gIHRvdGFsUGFnZTogbnVtYmVyO1xyXG4gIHBhZ2U6IG51bWJlcjtcclxuICBnYWxsYXJpZXM6IEdhbGxhcnlbXTtcclxuICB1c2VyR3JhZGU6IHN0cmluZztcclxufTtcclxuXHJcbmNvbnN0IEdhbGxhcnlMaXN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNhdGVnb3J5OiBzdHJpbmcgPSBcImdhbGxhcmllc1wiO1xyXG5cclxuICBjb25zdCBbcmVzcG9uc2UsIHNldFJlc3BvbnNlXSA9IHVzZVN0YXRlPEdhbGxhcmllcyB8IG51bGw+KG51bGwpO1xyXG4gIGxldCBwYWdlOiBudW1iZXI7XHJcbiAgaWYgKHJlc3BvbnNlPy5wYWdlID09PSB1bmRlZmluZWQgfHwgbnVsbCkge1xyXG4gICAgcGFnZSA9IDE7XHJcbiAgfSBlbHNlIHtcclxuICAgIHBhZ2UgPSByZXNwb25zZS5wYWdlO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVybCA9IGAvYXBpLyR7Y2F0ZWdvcnl9P3BhZ2U9JHtwYWdlfWA7XHJcbiAgICBTZW5kUmVxdWVzdCh1cmwsIFwiR0VUXCIpXHJcbiAgICAgIC50aGVuKChyZXNwKSA9PiB7XHJcbiAgICAgICAgc2V0UmVzcG9uc2UocmVzcC5kYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGFsZXJ0KGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pOyAvLyA8LS0gZW1wdHkgZGVwZW5kZW5jeSB0byBydW4gb25jZSBvbiBjb21wb25lbnQgbW91bnRcclxuXHJcbiAgY29uc3Qgb25QYWdlQ2xpY2sgPSAoXHJcbiAgICBldmVudDogTW91c2VFdmVudDxIVE1MRWxlbWVudD4gfCBLZXlib2FyZEV2ZW50PEhUTUxFbGVtZW50PixcclxuICApOiB2b2lkID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQubmF0aXZlRXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgdGV4dCA9IHRhcmdldC5wYXJlbnRFbGVtZW50Py5xdWVyeVNlbGVjdG9yKFwiaVwiKT8uZ2V0QXR0cmlidXRlKFwiaWRcIik7XHJcblxyXG4gICAgaWYgKHRleHQgPT09IFwibmV4dC1wYWdlXCIpIHtcclxuICAgICAgcGFnZSA9IHBhZ2UgKyAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcGFnZSA9IHBhZ2UgLSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVybCA9IGAvYXBpLyR7Y2F0ZWdvcnl9P3BhZ2U9JHtwYWdlfWA7XHJcbiAgICBTZW5kUmVxdWVzdCh1cmwsIFwiR0VUXCIpXHJcbiAgICAgIC50aGVuKChyZXNwKSA9PiB7XHJcbiAgICAgICAgc2V0UmVzcG9uc2UocmVzcC5kYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtYWluLWNvbnRhaW5lciB0ZXh0LW5vdG8gdGV4dC1tZCBmb250LXNtXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIHsvKiA8IS0tIG1haW4gc3RhcnQgLS0+ICovfVxyXG4gICAgICAgICAgey8qIDwhLS0gPT09PT09PT09PT09PT09PSAtLT4gKi99XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluIGNvbC0xMlwiPlxyXG4gICAgICAgICAgICB7cmVzcG9uc2UgJiYgcmVzcG9uc2UudXNlckdyYWRlID8gKFxyXG4gICAgICAgICAgICAgIHJlc3BvbnNlLnVzZXJHcmFkZSAhPT0gXCJNZW1iZXJcIiAmJlxyXG4gICAgICAgICAgICAgIHJlc3BvbnNlLnVzZXJHcmFkZSAhPT0gXCJVc2VyXCIgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9nYWxsYXJpZXMvY3JlYXRlL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHQtdHJhbnNwYXJlbnQgYnRuLWFuaW1hdGlvbiBidG4tYW5pbWF0aW9uLS1zbGlkZS1ob3Jpem9udGFsIG1hcmdpbi1jbGVhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIuq4gCDsnpHshLFcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7LyogPCEtLSBwYWdlLXRpdGxlIHN0YXJ0IC0tPiAqL31cclxuICAgICAgICAgICAgey8qIDwhLS0gPT09PT09PT09PT09PT09PSAtLT4gKi99XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZSB0ZXh0LWJvbGRcIj7qsKTrn6zrpqw8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcGFyYXRvci0yIG1iLTIwXCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogPCEtLSBwYWdlLXRpdGxlIGVuZCAtLT4gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZ3JpZC1zcGFjZS0wXCI+XHJcbiAgICAgICAgICAgICAgICB7cmVzcG9uc2UgJiYgcmVzcG9uc2UudG90YWxQYWdlID4gMCA/IChcclxuICAgICAgICAgICAgICAgICAgPExpc3QgY2F0ZWdvcnk9e2NhdGVnb3J5fSBpdGVtcz17cmVzcG9uc2UuZ2FsbGFyaWVzfSAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPD48Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIDwhLS0gcGFnaW5hdGlvbiBzdGFydCAtLT4gKi99XHJcbiAgICAgICAgICAgIDxuYXYgYXJpYS1sYWJlbD1cIlBhZ2UgbmF2aWdhdGlvblwiPlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwYWdpbmF0aW9uIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIHtyZXNwb25zZSAmJiByZXNwb25zZS5wYWdlID4gMSA/IChcclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2UtaXRlbVwiIG9uQ2xpY2s9e29uUGFnZUNsaWNrfT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYWdlLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGlkPVwicHJldi1wYWdlXCIgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtbGVmdFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicGFnZS1pdGVtIGRpc2FibGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGFnZS1saW5rXCIgYXJpYS1sYWJlbD1cIlByZXZpb3VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1sZWZ0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2UtaXRlbSBtdC0yIG14LTRcIj5cclxuICAgICAgICAgICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICAgICAgICAgIHtyZXNwb25zZSAmJiByZXNwb25zZS5wYWdlfSBvZntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICB7cmVzcG9uc2UgJiYgcmVzcG9uc2UudG90YWxQYWdlfVxyXG4gICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICB7cmVzcG9uc2UgJiZcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLnBhZ2UgPT09IE1hdGguY2VpbChOdW1iZXIocmVzcG9uc2UudG90YWxQYWdlKSAvIDEwKSA/IChcclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2UtaXRlbSBtbC0yIGRpc2FibGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGFnZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1yaWdodFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicGFnZS1pdGVtIG1sLTJcIiBvbkNsaWNrPXtvblBhZ2VDbGlja30+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGFnZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBpZD1cIm5leHQtcGFnZVwiIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICB7LyogPCEtLSBwYWdpbmF0aW9uIGVuZCAtLT4gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiA8IS0tIG1haW4gZW5kIC0tPiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoR2FsbGFyeUxpc3QpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9