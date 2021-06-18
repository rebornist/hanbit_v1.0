self["webpackHotUpdate_N_E"]("pages/profile/edit",{

/***/ "./pages/profile/edit.tsx":
/*!********************************!*\
  !*** ./pages/profile/edit.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_saint_OneDrive_dev_frontend_hanbit_ts_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Ajax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Ajax */ "./components/Ajax.tsx");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Loading */ "./components/Loading.tsx");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\saint\\OneDrive\\dev\\frontend\\hanbit-ts\\pages\\profile\\edit.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_saint_OneDrive_dev_frontend_hanbit_ts_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









function requestProfileEdit(data, idToken) {
  var _document$getElementB;

  var postUrl = "/api/user/profile/edit";
  (0,_components_Ajax__WEBPACK_IMPORTED_MODULE_5__.SendRequest)(postUrl, "POST", data, "".concat(idToken), "".concat((_document$getElementB = document.getElementById("_csrf")) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.getAttribute("value"))).then(function (resp) {
    alert(resp.data.message);
    (0,_components_Loading__WEBPACK_IMPORTED_MODULE_6__.deleteLoadingBtn)("submit-btn", "사진 등록"); // global.window.location.replace("/profile");
  })["catch"](function (error) {
    alert(error.message);
    (0,_components_Loading__WEBPACK_IMPORTED_MODULE_6__.deleteLoadingBtn)("submit-btn", "사진 등록");
  });
}

function getValidFileList(files, callback) {
  var count = files.length; // total number of files

  var fileDatas = []; // accepted files

  var filenames = []; // accepted files

  if (count === 0) {
    callback(fileDatas, filenames);
  } //Get the selected files


  for (var i = 0; i < count; i++) {
    // invoke readers
    checkFile(files[i]);
  }

  function checkFile(file) {
    var reader = new FileReader();

    reader.onload = function () {
      if ("".concat(file.type).split("/")[0] === "image") {
        var arrayBuffer = this.result; //Here I parse and check the data and if valid append it to fileList

        fileDatas.push(arrayBuffer); // or the original `file` blob..

        filenames.push(file.name);
        if (! --count) callback(fileDatas, filenames); // when done, invoke callback
      }
    };

    reader.readAsDataURL(file);
  }
}

var ProfileEdit = function ProfileEdit() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    birthday: new Date().toString()
  }),
      response = _useState[0],
      setResponse = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var url = "/api/user/profile";
    (0,_components_Ajax__WEBPACK_IMPORTED_MODULE_5__.SendRequest)(url, "GET").then(function (resp) {
      setResponse({
        csrf: resp.data.csrf,
        email: resp.data.profile.email,
        name: resp.data.profile.name,
        birthday: resp.data.profile.birthday,
        phoneNumber: resp.data.profile.phoneNumber,
        mobile: resp.data.profile.mobile,
        photo: resp.data.profile.photo,
        content: resp.data.profile.content,
        grade: resp.data.profile.grade,
        idToken: resp.data.idToken
      });
    })["catch"](function (error) {
      window.location.replace("/");
    });
  }, []); // <-- empty dependency to run once on component mount

  var onChange = function onChange(event) {
    var value = event.target.value;

    switch (event.target.getAttribute("id")) {
      case "content":
        break;

      case "phone":
        setResponse(_objectSpread(_objectSpread({}, response), {}, {
          phoneNumber: value
        }));
        break;

      case "mobile":
        setResponse(_objectSpread(_objectSpread({}, response), {}, {
          mobile: value
        }));
        break;

      case "fullName":
        setResponse(_objectSpread(_objectSpread({}, response), {}, {
          name: value
        }));
        break;

      default:
        break;
    }
  };

  var onChangeDate = function onChangeDate(date) {
    setResponse(_objectSpread(_objectSpread({}, response), {}, {
      birthday: date === null || date === void 0 ? void 0 : date.toString()
    }));
  };

  var onChangeTextarea = function onChangeTextarea(event) {
    var value = event.target.value;

    if (event.target.getAttribute("id") === "content") {
      setResponse(_objectSpread(_objectSpread({}, response), {}, {
        content: "".concat(value)
      }));
    }
  };

  var onSubmit = function onSubmit(event) {
    event.preventDefault();
    (0,_components_Loading__WEBPACK_IMPORTED_MODULE_6__.createLoadingBtn)("submit-btn");
    var fileElem = document.getElementById("photo");
    var photoFiles = fileElem.files; // let formData = new FormData();
    // if (photoFiles[0] !== undefined) {
    //   formData.append("photo", photoFiles[0]);
    // } else {
    //   formData.append("originPhoto", response?.photo as string);
    // }
    // formData.append("content", response?.content as string);
    // formData.append("phone", response?.phoneNumber as string);
    // formData.append("mobile", response?.mobile as string);
    // formData.append("fullName", response?.name as string);
    // formData.append("birthday", `${response.birthday}`);

    getValidFileList(photoFiles, getBase64s);

    function getBase64s(base64s, filenames) {
      if (base64s.length > 0 && filenames.length > 0) {
        var data = {
          email: response.email,
          name: response.name,
          birthday: response.birthday,
          phoneNumber: response.phoneNumber,
          mobile: response.mobile,
          photo: base64s[0],
          content: response.content
        };
        requestProfileEdit(data, response === null || response === void 0 ? void 0 : response.idToken);
      } else {
        var _data = {
          email: response.email,
          name: response.name,
          birthday: response.birthday,
          phoneNumber: response.phoneNumber,
          mobile: response.mobile,
          content: response.content
        };
        requestProfileEdit(_data, response === null || response === void 0 ? void 0 : response.idToken);
      }
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: (response === null || response === void 0 ? void 0 : response.idToken) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "main-container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row justify-content-center",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-10",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "main",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "form p-30 light-gray-bg border-clear",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                  className: "title",
                  children: [response.email, "'s Profile \uC218\uC815"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 212,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
                  method: "post",
                  className: "form-horizontal",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    dangerouslySetInnerHTML: {
                      __html: "".concat(response === null || response === void 0 ? void 0 : response.csrf)
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 215,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "photo",
                      children: "Photo Upload"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 222,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                      type: "file",
                      className: "form-control",
                      id: "photo",
                      name: "photo"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 223,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      className: "photo-thumb-list",
                      id: "photo-delete-form",
                      style: {
                        display: "flex",
                        flexWrap: "wrap",
                        alignSelf: "center"
                      },
                      children: response.photo && response.photo !== "" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "overlay-container",
                        style: {
                          width: "20%",
                          padding: "1px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                        },
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                          src: "/media/".concat(response.photo),
                          alt: response.photo
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 249,
                          columnNumber: 31
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 239,
                        columnNumber: 29
                      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 229,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 221,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "fullName",
                      style: {
                        display: "block"
                      },
                      children: "\uC774\uB984"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 261,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                      className: "form-control",
                      id: "fullName",
                      name: "fullName",
                      onChange: onChange,
                      defaultValue: response.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 265,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "title",
                      className: "mt-3",
                      style: {
                        display: "block"
                      },
                      children: "\uC0DD\uB144\uC6D4\uC77C"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 273,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_datepicker__WEBPACK_IMPORTED_MODULE_8___default()), {
                      id: "birthDate",
                      name: "birthDate",
                      className: "myDatePicker form-control",
                      dateFormat: "yyyy-MM-dd",
                      selected: response.birthday ? new Date("".concat(response.birthday)) : new Date(),
                      onChange: function onChange(date) {
                        return onChangeDate(date);
                      } //only when value has changed

                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 281,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "title",
                      className: "mt-3",
                      style: {
                        display: "block"
                      },
                      children: "\uC804\uD654\uBC88\uD638"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 294,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                      className: "form-control",
                      id: "phone",
                      name: "phone",
                      onChange: onChange,
                      defaultValue: response.phoneNumber
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 302,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "title",
                      className: "mt-3",
                      style: {
                        display: "block"
                      },
                      children: "\uD734\uB300\uC804\uD654\uBC88\uD638"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 310,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                      className: "form-control",
                      id: "mobile",
                      name: "mobile",
                      onChange: onChange,
                      defaultValue: response.mobile
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 318,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "content",
                      className: "mt-3",
                      style: {
                        display: "block"
                      },
                      children: "\uC18C\uAC1C\uAE00"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 326,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
                      className: "form-control",
                      id: "content",
                      name: "content",
                      rows: 7,
                      onChange: onChangeTextarea,
                      defaultValue: response.content
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 334,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 260,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                    id: "submit-btn",
                    className: "btn btn-default",
                    onClick: onSubmit,
                    children: "\uB4F1\uB85D"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 344,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    href: "/profile",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      id: "close-btn",
                      className: "btn btn-danger text-white ml-2",
                      children: "\uB098\uAC00\uAE30"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 352,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 351,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 214,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 211,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 9
    }, _this)
  }, void 0, false);
};

_s(ProfileEdit, "xv95Xusml37o8lXbwfjeU8YQu2A=");

_c = ProfileEdit;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.withRouter)(ProfileEdit));

var _c, _c2;

$RefreshReg$(_c, "ProfileEdit");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS9lZGl0LnRzeCJdLCJuYW1lcyI6WyJyZXF1ZXN0UHJvZmlsZUVkaXQiLCJkYXRhIiwiaWRUb2tlbiIsInBvc3RVcmwiLCJTZW5kUmVxdWVzdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRBdHRyaWJ1dGUiLCJ0aGVuIiwicmVzcCIsImFsZXJ0IiwibWVzc2FnZSIsImRlbGV0ZUxvYWRpbmdCdG4iLCJlcnJvciIsImdldFZhbGlkRmlsZUxpc3QiLCJmaWxlcyIsImNhbGxiYWNrIiwiY291bnQiLCJsZW5ndGgiLCJmaWxlRGF0YXMiLCJmaWxlbmFtZXMiLCJpIiwiY2hlY2tGaWxlIiwiZmlsZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJ0eXBlIiwic3BsaXQiLCJhcnJheUJ1ZmZlciIsInJlc3VsdCIsInB1c2giLCJuYW1lIiwicmVhZEFzRGF0YVVSTCIsIlByb2ZpbGVFZGl0IiwidXNlU3RhdGUiLCJiaXJ0aGRheSIsIkRhdGUiLCJ0b1N0cmluZyIsInJlc3BvbnNlIiwic2V0UmVzcG9uc2UiLCJ1c2VFZmZlY3QiLCJ1cmwiLCJjc3JmIiwiZW1haWwiLCJwcm9maWxlIiwicGhvbmVOdW1iZXIiLCJtb2JpbGUiLCJwaG90byIsImNvbnRlbnQiLCJncmFkZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ2YWx1ZSIsInRhcmdldCIsIm9uQ2hhbmdlRGF0ZSIsImRhdGUiLCJvbkNoYW5nZVRleHRhcmVhIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZUxvYWRpbmdCdG4iLCJmaWxlRWxlbSIsInBob3RvRmlsZXMiLCJnZXRCYXNlNjRzIiwiYmFzZTY0cyIsIl9faHRtbCIsImRpc3BsYXkiLCJmbGV4V3JhcCIsImFsaWduU2VsZiIsIndpZHRoIiwicGFkZGluZyIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVt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QyxjQURaO0FBRUUsd0JBQUUsRUFBQyxTQUZMO0FBR0UsMEJBQUksRUFBQyxTQUhQO0FBSUUsMEJBQUksRUFBRSxDQUpSO0FBS0UsOEJBQVEsRUFBRVQsZ0JBTFo7QUFNRSxrQ0FBWSxFQUFFckIsUUFBUSxDQUFDVTtBQU56QjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQTFFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBOUNGLGVBa0lFO0FBQ0Usc0JBQUUsRUFBQyxZQURMO0FBRUUsNkJBQVMsRUFBQyxpQkFGWjtBQUdFLDJCQUFPLEVBQUVZLFFBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBbElGLGVBeUlFLDhEQUFDLGtEQUFEO0FBQU0sd0JBQUksRUFBQyxVQUFYO0FBQUEsMkNBQ0U7QUFDRSx3QkFBRSxFQUFDLFdBREw7QUFFRSwrQkFBUyxFQUFDLGdDQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkF6SUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkosbUJBREY7QUF3S0QsQ0FsU0Q7O0dBQU0zQixXOztLQUFBQSxXO0FBb1NOLCtEQUFlLE1BQUEwQyx1REFBVSxDQUFDMUMsV0FBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlL2VkaXQuNWVlMjkwMjRlMjNlZDJiYjY4YjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgdXNlU3RhdGUsXHJcbiAgdXNlRWZmZWN0LFxyXG4gIENoYW5nZUV2ZW50LFxyXG4gIEtleWJvYXJkRXZlbnQsXHJcbiAgTW91c2VFdmVudCxcclxufSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCJyZWFjdC1kYXRlcGlja2VyXCI7XHJcblxyXG5pbXBvcnQgeyBTZW5kUmVxdWVzdCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0FqYXhcIjtcclxuaW1wb3J0IHsgY3JlYXRlTG9hZGluZ0J0biwgZGVsZXRlTG9hZGluZ0J0biB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xvYWRpbmdcIjtcclxuXHJcbmltcG9ydCBcInJlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLmNzc1wiO1xyXG5cclxudHlwZSBQcm9maWxlRWRpdEZvcm0gPSB7XHJcbiAgY3NyZj86IHN0cmluZztcclxuICBlbWFpbD86IHN0cmluZztcclxuICBuYW1lPzogc3RyaW5nO1xyXG4gIGJpcnRoZGF5OiBzdHJpbmc7XHJcbiAgcGhvbmVOdW1iZXI/OiBzdHJpbmc7XHJcbiAgbW9iaWxlPzogc3RyaW5nO1xyXG4gIHBob3RvPzogc3RyaW5nO1xyXG4gIGNvbnRlbnQ/OiBzdHJpbmc7XHJcbiAgZ3JhZGU/OiBudW1iZXI7XHJcbiAgaWRUb2tlbj86IHN0cmluZztcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlcXVlc3RQcm9maWxlRWRpdChkYXRhOiBhbnksIGlkVG9rZW46IHN0cmluZykge1xyXG4gIGNvbnN0IHBvc3RVcmwgPSBgL2FwaS91c2VyL3Byb2ZpbGUvZWRpdGA7XHJcbiAgU2VuZFJlcXVlc3QoXHJcbiAgICBwb3N0VXJsLFxyXG4gICAgXCJQT1NUXCIsXHJcbiAgICBkYXRhLFxyXG4gICAgYCR7aWRUb2tlbn1gLFxyXG4gICAgYCR7ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJfY3NyZlwiKT8uZ2V0QXR0cmlidXRlKFwidmFsdWVcIil9YCxcclxuICApXHJcbiAgICAudGhlbigocmVzcCkgPT4ge1xyXG4gICAgICBhbGVydChyZXNwLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgIGRlbGV0ZUxvYWRpbmdCdG4oXCJzdWJtaXQtYnRuXCIsIFwi7IKs7KeEIOuTseuhnVwiKTtcclxuICAgICAgLy8gZ2xvYmFsLndpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFwiL3Byb2ZpbGVcIik7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcclxuICAgICAgZGVsZXRlTG9hZGluZ0J0bihcInN1Ym1pdC1idG5cIiwgXCLsgqzsp4Qg65Ox66GdXCIpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFZhbGlkRmlsZUxpc3QoZmlsZXM6IEZpbGVMaXN0LCBjYWxsYmFjazogYW55KSB7XHJcbiAgdmFyIGNvdW50ID0gZmlsZXMubGVuZ3RoOyAvLyB0b3RhbCBudW1iZXIgb2YgZmlsZXNcclxuICB2YXIgZmlsZURhdGFzOiBzdHJpbmdbXSA9IFtdOyAvLyBhY2NlcHRlZCBmaWxlc1xyXG4gIHZhciBmaWxlbmFtZXM6IHN0cmluZ1tdID0gW107IC8vIGFjY2VwdGVkIGZpbGVzXHJcbiAgaWYgKGNvdW50ID09PSAwKSB7XHJcbiAgICBjYWxsYmFjayhmaWxlRGF0YXMsIGZpbGVuYW1lcyk7XHJcbiAgfVxyXG5cclxuICAvL0dldCB0aGUgc2VsZWN0ZWQgZmlsZXNcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcclxuICAgIC8vIGludm9rZSByZWFkZXJzXHJcbiAgICBjaGVja0ZpbGUoZmlsZXNbaV0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hlY2tGaWxlKGZpbGU6IEZpbGUpIHtcclxuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKGAke2ZpbGUudHlwZX1gLnNwbGl0KFwiL1wiKVswXSA9PT0gXCJpbWFnZVwiKSB7XHJcbiAgICAgICAgdmFyIGFycmF5QnVmZmVyID0gdGhpcy5yZXN1bHQ7XHJcbiAgICAgICAgLy9IZXJlIEkgcGFyc2UgYW5kIGNoZWNrIHRoZSBkYXRhIGFuZCBpZiB2YWxpZCBhcHBlbmQgaXQgdG8gZmlsZUxpc3RcclxuICAgICAgICBmaWxlRGF0YXMucHVzaChhcnJheUJ1ZmZlciBhcyBzdHJpbmcpOyAvLyBvciB0aGUgb3JpZ2luYWwgYGZpbGVgIGJsb2IuLlxyXG4gICAgICAgIGZpbGVuYW1lcy5wdXNoKGZpbGUubmFtZSk7XHJcbiAgICAgICAgaWYgKCEtLWNvdW50KSBjYWxsYmFjayhmaWxlRGF0YXMsIGZpbGVuYW1lcyk7IC8vIHdoZW4gZG9uZSwgaW52b2tlIGNhbGxiYWNrXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IFByb2ZpbGVFZGl0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtyZXNwb25zZSwgc2V0UmVzcG9uc2VdID0gdXNlU3RhdGU8UHJvZmlsZUVkaXRGb3JtPih7XHJcbiAgICBiaXJ0aGRheTogbmV3IERhdGUoKS50b1N0cmluZygpLFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdXJsID0gXCIvYXBpL3VzZXIvcHJvZmlsZVwiO1xyXG4gICAgU2VuZFJlcXVlc3QodXJsLCBcIkdFVFwiKVxyXG4gICAgICAudGhlbigocmVzcCkgPT4ge1xyXG4gICAgICAgIHNldFJlc3BvbnNlKHtcclxuICAgICAgICAgIGNzcmY6IHJlc3AuZGF0YS5jc3JmLFxyXG4gICAgICAgICAgZW1haWw6IHJlc3AuZGF0YS5wcm9maWxlLmVtYWlsLFxyXG4gICAgICAgICAgbmFtZTogcmVzcC5kYXRhLnByb2ZpbGUubmFtZSxcclxuICAgICAgICAgIGJpcnRoZGF5OiByZXNwLmRhdGEucHJvZmlsZS5iaXJ0aGRheSxcclxuICAgICAgICAgIHBob25lTnVtYmVyOiByZXNwLmRhdGEucHJvZmlsZS5waG9uZU51bWJlcixcclxuICAgICAgICAgIG1vYmlsZTogcmVzcC5kYXRhLnByb2ZpbGUubW9iaWxlLFxyXG4gICAgICAgICAgcGhvdG86IHJlc3AuZGF0YS5wcm9maWxlLnBob3RvLFxyXG4gICAgICAgICAgY29udGVudDogcmVzcC5kYXRhLnByb2ZpbGUuY29udGVudCxcclxuICAgICAgICAgIGdyYWRlOiByZXNwLmRhdGEucHJvZmlsZS5ncmFkZSxcclxuICAgICAgICAgIGlkVG9rZW46IHJlc3AuZGF0YS5pZFRva2VuLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCIvXCIpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7IC8vIDwtLSBlbXB0eSBkZXBlbmRlbmN5IHRvIHJ1biBvbmNlIG9uIGNvbXBvbmVudCBtb3VudFxyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9IChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICBzd2l0Y2ggKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSBhcyBzdHJpbmcpIHtcclxuICAgICAgY2FzZSBcImNvbnRlbnRcIjpcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcInBob25lXCI6XHJcbiAgICAgICAgc2V0UmVzcG9uc2Uoe1xyXG4gICAgICAgICAgLi4ucmVzcG9uc2UsXHJcbiAgICAgICAgICBwaG9uZU51bWJlcjogdmFsdWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJtb2JpbGVcIjpcclxuICAgICAgICBzZXRSZXNwb25zZSh7XHJcbiAgICAgICAgICAuLi5yZXNwb25zZSxcclxuICAgICAgICAgIG1vYmlsZTogdmFsdWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJmdWxsTmFtZVwiOlxyXG4gICAgICAgIHNldFJlc3BvbnNlKHtcclxuICAgICAgICAgIC4uLnJlc3BvbnNlLFxyXG4gICAgICAgICAgbmFtZTogdmFsdWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VEYXRlID0gKGRhdGU6IERhdGUgfCBbRGF0ZSwgRGF0ZV0gfCBudWxsKTogdm9pZCA9PiB7XHJcbiAgICBzZXRSZXNwb25zZSh7XHJcbiAgICAgIC4uLnJlc3BvbnNlLFxyXG4gICAgICBiaXJ0aGRheTogZGF0ZT8udG9TdHJpbmcoKSBhcyBzdHJpbmcsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNoYW5nZVRleHRhcmVhID0gKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4ge1xyXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgaWYgKChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIikgYXMgc3RyaW5nKSA9PT0gXCJjb250ZW50XCIpIHtcclxuICAgICAgc2V0UmVzcG9uc2Uoe1xyXG4gICAgICAgIC4uLnJlc3BvbnNlLFxyXG4gICAgICAgIGNvbnRlbnQ6IGAke3ZhbHVlfWAsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gKFxyXG4gICAgZXZlbnQ6IEtleWJvYXJkRXZlbnQ8SFRNTEVsZW1lbnQ+IHwgTW91c2VFdmVudDxIVE1MRWxlbWVudD4sXHJcbiAgKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNyZWF0ZUxvYWRpbmdCdG4oXCJzdWJtaXQtYnRuXCIpO1xyXG5cclxuICAgIGNvbnN0IGZpbGVFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwaG90b1wiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uc3QgcGhvdG9GaWxlcyA9IGZpbGVFbGVtLmZpbGVzIGFzIEZpbGVMaXN0O1xyXG4gICAgLy8gbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAvLyBpZiAocGhvdG9GaWxlc1swXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAvLyAgIGZvcm1EYXRhLmFwcGVuZChcInBob3RvXCIsIHBob3RvRmlsZXNbMF0pO1xyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgIC8vICAgZm9ybURhdGEuYXBwZW5kKFwib3JpZ2luUGhvdG9cIiwgcmVzcG9uc2U/LnBob3RvIGFzIHN0cmluZyk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBmb3JtRGF0YS5hcHBlbmQoXCJjb250ZW50XCIsIHJlc3BvbnNlPy5jb250ZW50IGFzIHN0cmluZyk7XHJcbiAgICAvLyBmb3JtRGF0YS5hcHBlbmQoXCJwaG9uZVwiLCByZXNwb25zZT8ucGhvbmVOdW1iZXIgYXMgc3RyaW5nKTtcclxuICAgIC8vIGZvcm1EYXRhLmFwcGVuZChcIm1vYmlsZVwiLCByZXNwb25zZT8ubW9iaWxlIGFzIHN0cmluZyk7XHJcbiAgICAvLyBmb3JtRGF0YS5hcHBlbmQoXCJmdWxsTmFtZVwiLCByZXNwb25zZT8ubmFtZSBhcyBzdHJpbmcpO1xyXG4gICAgLy8gZm9ybURhdGEuYXBwZW5kKFwiYmlydGhkYXlcIiwgYCR7cmVzcG9uc2UuYmlydGhkYXl9YCk7XHJcblxyXG4gICAgZ2V0VmFsaWRGaWxlTGlzdChwaG90b0ZpbGVzLCBnZXRCYXNlNjRzKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRCYXNlNjRzKGJhc2U2NHM6IHN0cmluZ1tdLCBmaWxlbmFtZXM6IHN0cmluZ1tdKSB7XHJcbiAgICAgIGlmIChiYXNlNjRzLmxlbmd0aCA+IDAgJiYgZmlsZW5hbWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgZW1haWw6IHJlc3BvbnNlLmVtYWlsLFxyXG4gICAgICAgICAgbmFtZTogcmVzcG9uc2UubmFtZSxcclxuICAgICAgICAgIGJpcnRoZGF5OiByZXNwb25zZS5iaXJ0aGRheSxcclxuICAgICAgICAgIHBob25lTnVtYmVyOiByZXNwb25zZS5waG9uZU51bWJlcixcclxuICAgICAgICAgIG1vYmlsZTogcmVzcG9uc2UubW9iaWxlLFxyXG4gICAgICAgICAgcGhvdG86IGJhc2U2NHNbMF0sXHJcbiAgICAgICAgICBjb250ZW50OiByZXNwb25zZS5jb250ZW50LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVxdWVzdFByb2ZpbGVFZGl0KGRhdGEsIHJlc3BvbnNlPy5pZFRva2VuIGFzIHN0cmluZyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgIGVtYWlsOiByZXNwb25zZS5lbWFpbCxcclxuICAgICAgICAgIG5hbWU6IHJlc3BvbnNlLm5hbWUsXHJcbiAgICAgICAgICBiaXJ0aGRheTogcmVzcG9uc2UuYmlydGhkYXksXHJcbiAgICAgICAgICBwaG9uZU51bWJlcjogcmVzcG9uc2UucGhvbmVOdW1iZXIsXHJcbiAgICAgICAgICBtb2JpbGU6IHJlc3BvbnNlLm1vYmlsZSxcclxuICAgICAgICAgIGNvbnRlbnQ6IHJlc3BvbnNlLmNvbnRlbnQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXF1ZXN0UHJvZmlsZUVkaXQoZGF0YSwgcmVzcG9uc2U/LmlkVG9rZW4gYXMgc3RyaW5nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7cmVzcG9uc2U/LmlkVG9rZW4gJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgey8qIDwhLS0gbWFpbiBzdGFydCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPCEtLSA9PT09PT09PT09PT09PT09IC0tPiAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0gcC0zMCBsaWdodC1ncmF5LWJnIGJvcmRlci1jbGVhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPntyZXNwb25zZS5lbWFpbH0ncyBQcm9maWxlIOyImOyglTwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIiBjbGFzc05hbWU9XCJmb3JtLWhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IGAke3Jlc3BvbnNlPy5jc3JmIGFzIHN0cmluZ31gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBob3RvXCI+UGhvdG8gVXBsb2FkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwaG90b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBob3RvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBob3RvLXRodW1iLWxpc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGhvdG8tZGVsZXRlLWZvcm1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduU2VsZjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlc3BvbnNlLnBob3RvICYmIHJlc3BvbnNlLnBob3RvICE9PSBcIlwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvdmVybGF5LWNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL21lZGlhLyR7cmVzcG9uc2UucGhvdG99YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3Jlc3BvbnNlLnBob3RvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+PC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmdWxsTmFtZVwiIHN0eWxlPXt7IGRpc3BsYXk6IFwiYmxvY2tcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICDsnbTrpoRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmdWxsTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZ1bGxOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtyZXNwb25zZS5uYW1lIGFzIHN0cmluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICDsg53rhYTsm5TsnbxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJiaXJ0aERhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiaXJ0aERhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm15RGF0ZVBpY2tlciBmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJ5eXl5LU1NLWRkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5iaXJ0aGRheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG5ldyBEYXRlKGAke3Jlc3BvbnNlLmJpcnRoZGF5fWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbmV3IERhdGUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+IG9uQ2hhbmdlRGF0ZShkYXRlKX0gLy9vbmx5IHdoZW4gdmFsdWUgaGFzIGNoYW5nZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICDsoITtmZTrsojtmLhcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwaG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtyZXNwb25zZS5waG9uZU51bWJlciBhcyBzdHJpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiYmxvY2tcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAg7Zy064yA7KCE7ZmU67KI7Zi4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibW9iaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibW9iaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtyZXNwb25zZS5tb2JpbGUgYXMgc3RyaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiYmxvY2tcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAg7IaM6rCc6riAXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY29udGVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVGV4dGFyZWF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtyZXNwb25zZS5jb250ZW50IGFzIHN0cmluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3VibWl0LWJ0blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDrk7HroZ1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjbG9zZS1idG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIHRleHQtd2hpdGUgbWwtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICDrgpjqsIDquLBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFByb2ZpbGVFZGl0KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==