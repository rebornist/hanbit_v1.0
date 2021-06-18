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
    // formData.append("phone", response?.phone_number as string);
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
          phone_number: response.phoneNumber,
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
          phoneNumber: response.phone_number,
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
                      defaultValue: response.phone_number
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS9lZGl0LnRzeCJdLCJuYW1lcyI6WyJyZXF1ZXN0UHJvZmlsZUVkaXQiLCJkYXRhIiwiaWRUb2tlbiIsInBvc3RVcmwiLCJTZW5kUmVxdWVzdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRBdHRyaWJ1dGUiLCJ0aGVuIiwicmVzcCIsImFsZXJ0IiwibWVzc2FnZSIsImRlbGV0ZUxvYWRpbmdCdG4iLCJlcnJvciIsImdldFZhbGlkRmlsZUxpc3QiLCJmaWxlcyIsImNhbGxiYWNrIiwiY291bnQiLCJsZW5ndGgiLCJmaWxlRGF0YXMiLCJmaWxlbmFtZXMiLCJpIiwiY2hlY2tGaWxlIiwiZmlsZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJ0eXBlIiwic3BsaXQiLCJhcnJheUJ1ZmZlciIsInJlc3VsdCIsInB1c2giLCJuYW1lIiwicmVhZEFzRGF0YVVSTCIsIlByb2ZpbGVFZGl0IiwidXNlU3RhdGUiLCJiaXJ0aGRheSIsIkRhdGUiLCJ0b1N0cmluZyIsInJlc3BvbnNlIiwic2V0UmVzcG9uc2UiLCJ1c2VFZmZlY3QiLCJ1cmwiLCJjc3JmIiwiZW1haWwiLCJwcm9maWxlIiwicGhvbmVOdW1iZXIiLCJtb2JpbGUiLCJwaG90byIsImNvbnRlbnQiLCJncmFkZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ2YWx1ZSIsInRhcmdldCIsIm9uQ2hhbmdlRGF0ZSIsImRhdGUiLCJvbkNoYW5nZVRleHRhcmVhIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZUxvYWRpbmdCdG4iLCJmaWxlRWxlbSIsInBob3RvRmlsZXMiLCJnZXRCYXNlNjRzIiwiYmFzZTY0cyIsInBob25lX251bWJlciIsIl9faHRtbCIsImRpc3BsYXkiLCJmbGV4V3JhcCIsImFsaWduU2VsZiIsIndpZHRoIiwicGFkZGluZyIsImp1c3RpZnlDb250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RixlQTBFRTtBQUNFLCtCQUFTLEVBQUMsY0FEWjtBQUVFLHdCQUFFLEVBQUMsU0FGTDtBQUdFLDBCQUFJLEVBQUMsU0FIUDtBQUlFLDBCQUFJLEVBQUUsQ0FKUjtBQUtFLDhCQUFRLEVBQUVWLGdCQUxaO0FBTUUsa0NBQVksRUFBRXJCLFFBQVEsQ0FBQ1U7QUFOekI7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkExRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQTlDRixlQWtJRTtBQUNFLHNCQUFFLEVBQUMsWUFETDtBQUVFLDZCQUFTLEVBQUMsaUJBRlo7QUFHRSwyQkFBTyxFQUFFWSxRQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQWxJRixlQXlJRSw4REFBQyxrREFBRDtBQUFNLHdCQUFJLEVBQUMsVUFBWDtBQUFBLDJDQUNFO0FBQ0Usd0JBQUUsRUFBQyxXQURMO0FBRUUsK0JBQVMsRUFBQyxnQ0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBeklGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKLG1CQURGO0FBd0tELENBbFNEOztHQUFNM0IsVzs7S0FBQUEsVztBQW9TTiwrREFBZSxNQUFBMkMsdURBQVUsQ0FBQzNDLFdBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS9lZGl0LmQwMmNhNzVmYWM1Y2FjZWRjNjU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIHVzZVN0YXRlLFxyXG4gIHVzZUVmZmVjdCxcclxuICBDaGFuZ2VFdmVudCxcclxuICBLZXlib2FyZEV2ZW50LFxyXG4gIE1vdXNlRXZlbnQsXHJcbn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tIFwicmVhY3QtZGF0ZXBpY2tlclwiO1xyXG5cclxuaW1wb3J0IHsgU2VuZFJlcXVlc3QgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9BamF4XCI7XHJcbmltcG9ydCB7IGNyZWF0ZUxvYWRpbmdCdG4sIGRlbGV0ZUxvYWRpbmdCdG4gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Mb2FkaW5nXCI7XHJcblxyXG5pbXBvcnQgXCJyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci5jc3NcIjtcclxuXHJcbnR5cGUgUHJvZmlsZUVkaXRGb3JtID0ge1xyXG4gIGNzcmY/OiBzdHJpbmc7XHJcbiAgZW1haWw/OiBzdHJpbmc7XHJcbiAgbmFtZT86IHN0cmluZztcclxuICBiaXJ0aGRheTogc3RyaW5nO1xyXG4gIHBob25lTnVtYmVyPzogc3RyaW5nO1xyXG4gIG1vYmlsZT86IHN0cmluZztcclxuICBwaG90bz86IHN0cmluZztcclxuICBjb250ZW50Pzogc3RyaW5nO1xyXG4gIGdyYWRlPzogbnVtYmVyO1xyXG4gIGlkVG9rZW4/OiBzdHJpbmc7XHJcbn07XHJcblxyXG5mdW5jdGlvbiByZXF1ZXN0UHJvZmlsZUVkaXQoZGF0YTogYW55LCBpZFRva2VuOiBzdHJpbmcpIHtcclxuICBjb25zdCBwb3N0VXJsID0gYC9hcGkvdXNlci9wcm9maWxlL2VkaXRgO1xyXG4gIFNlbmRSZXF1ZXN0KFxyXG4gICAgcG9zdFVybCxcclxuICAgIFwiUE9TVFwiLFxyXG4gICAgZGF0YSxcclxuICAgIGAke2lkVG9rZW59YCxcclxuICAgIGAke2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiX2NzcmZcIik/LmdldEF0dHJpYnV0ZShcInZhbHVlXCIpfWAsXHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3ApID0+IHtcclxuICAgICAgYWxlcnQocmVzcC5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICBkZWxldGVMb2FkaW5nQnRuKFwic3VibWl0LWJ0blwiLCBcIuyCrOynhCDrk7HroZ1cIik7XHJcbiAgICAgIC8vIGdsb2JhbC53aW5kb3cubG9jYXRpb24ucmVwbGFjZShcIi9wcm9maWxlXCIpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIGRlbGV0ZUxvYWRpbmdCdG4oXCJzdWJtaXQtYnRuXCIsIFwi7IKs7KeEIOuTseuhnVwiKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRWYWxpZEZpbGVMaXN0KGZpbGVzOiBGaWxlTGlzdCwgY2FsbGJhY2s6IGFueSkge1xyXG4gIHZhciBjb3VudCA9IGZpbGVzLmxlbmd0aDsgLy8gdG90YWwgbnVtYmVyIG9mIGZpbGVzXHJcbiAgdmFyIGZpbGVEYXRhczogc3RyaW5nW10gPSBbXTsgLy8gYWNjZXB0ZWQgZmlsZXNcclxuICB2YXIgZmlsZW5hbWVzOiBzdHJpbmdbXSA9IFtdOyAvLyBhY2NlcHRlZCBmaWxlc1xyXG4gIGlmIChjb3VudCA9PT0gMCkge1xyXG4gICAgY2FsbGJhY2soZmlsZURhdGFzLCBmaWxlbmFtZXMpO1xyXG4gIH1cclxuXHJcbiAgLy9HZXQgdGhlIHNlbGVjdGVkIGZpbGVzXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICAvLyBpbnZva2UgcmVhZGVyc1xyXG4gICAgY2hlY2tGaWxlKGZpbGVzW2ldKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoZWNrRmlsZShmaWxlOiBGaWxlKSB7XHJcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmIChgJHtmaWxlLnR5cGV9YC5zcGxpdChcIi9cIilbMF0gPT09IFwiaW1hZ2VcIikge1xyXG4gICAgICAgIHZhciBhcnJheUJ1ZmZlciA9IHRoaXMucmVzdWx0O1xyXG4gICAgICAgIC8vSGVyZSBJIHBhcnNlIGFuZCBjaGVjayB0aGUgZGF0YSBhbmQgaWYgdmFsaWQgYXBwZW5kIGl0IHRvIGZpbGVMaXN0XHJcbiAgICAgICAgZmlsZURhdGFzLnB1c2goYXJyYXlCdWZmZXIgYXMgc3RyaW5nKTsgLy8gb3IgdGhlIG9yaWdpbmFsIGBmaWxlYCBibG9iLi5cclxuICAgICAgICBmaWxlbmFtZXMucHVzaChmaWxlLm5hbWUpO1xyXG4gICAgICAgIGlmICghLS1jb3VudCkgY2FsbGJhY2soZmlsZURhdGFzLCBmaWxlbmFtZXMpOyAvLyB3aGVuIGRvbmUsIGludm9rZSBjYWxsYmFja1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBQcm9maWxlRWRpdCA9ICgpID0+IHtcclxuICBjb25zdCBbcmVzcG9uc2UsIHNldFJlc3BvbnNlXSA9IHVzZVN0YXRlPFByb2ZpbGVFZGl0Rm9ybT4oe1xyXG4gICAgYmlydGhkYXk6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSxcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVybCA9IFwiL2FwaS91c2VyL3Byb2ZpbGVcIjtcclxuICAgIFNlbmRSZXF1ZXN0KHVybCwgXCJHRVRcIilcclxuICAgICAgLnRoZW4oKHJlc3ApID0+IHtcclxuICAgICAgICBzZXRSZXNwb25zZSh7XHJcbiAgICAgICAgICBjc3JmOiByZXNwLmRhdGEuY3NyZixcclxuICAgICAgICAgIGVtYWlsOiByZXNwLmRhdGEucHJvZmlsZS5lbWFpbCxcclxuICAgICAgICAgIG5hbWU6IHJlc3AuZGF0YS5wcm9maWxlLm5hbWUsXHJcbiAgICAgICAgICBiaXJ0aGRheTogcmVzcC5kYXRhLnByb2ZpbGUuYmlydGhkYXksXHJcbiAgICAgICAgICBwaG9uZU51bWJlcjogcmVzcC5kYXRhLnByb2ZpbGUucGhvbmVOdW1iZXIsXHJcbiAgICAgICAgICBtb2JpbGU6IHJlc3AuZGF0YS5wcm9maWxlLm1vYmlsZSxcclxuICAgICAgICAgIHBob3RvOiByZXNwLmRhdGEucHJvZmlsZS5waG90byxcclxuICAgICAgICAgIGNvbnRlbnQ6IHJlc3AuZGF0YS5wcm9maWxlLmNvbnRlbnQsXHJcbiAgICAgICAgICBncmFkZTogcmVzcC5kYXRhLnByb2ZpbGUuZ3JhZGUsXHJcbiAgICAgICAgICBpZFRva2VuOiByZXNwLmRhdGEuaWRUb2tlbixcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFwiL1wiKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pOyAvLyA8LS0gZW1wdHkgZGVwZW5kZW5jeSB0byBydW4gb25jZSBvbiBjb21wb25lbnQgbW91bnRcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2UgPSAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgc3dpdGNoIChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIikgYXMgc3RyaW5nKSB7XHJcbiAgICAgIGNhc2UgXCJjb250ZW50XCI6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJwaG9uZVwiOlxyXG4gICAgICAgIHNldFJlc3BvbnNlKHtcclxuICAgICAgICAgIC4uLnJlc3BvbnNlLFxyXG4gICAgICAgICAgcGhvbmVOdW1iZXI6IHZhbHVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwibW9iaWxlXCI6XHJcbiAgICAgICAgc2V0UmVzcG9uc2Uoe1xyXG4gICAgICAgICAgLi4ucmVzcG9uc2UsXHJcbiAgICAgICAgICBtb2JpbGU6IHZhbHVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiZnVsbE5hbWVcIjpcclxuICAgICAgICBzZXRSZXNwb25zZSh7XHJcbiAgICAgICAgICAuLi5yZXNwb25zZSxcclxuICAgICAgICAgIG5hbWU6IHZhbHVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlRGF0ZSA9IChkYXRlOiBEYXRlIHwgW0RhdGUsIERhdGVdIHwgbnVsbCk6IHZvaWQgPT4ge1xyXG4gICAgc2V0UmVzcG9uc2Uoe1xyXG4gICAgICAuLi5yZXNwb25zZSxcclxuICAgICAgYmlydGhkYXk6IGRhdGU/LnRvU3RyaW5nKCkgYXMgc3RyaW5nLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VUZXh0YXJlYSA9IChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+IHtcclxuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcclxuICAgIGlmICgoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpIGFzIHN0cmluZykgPT09IFwiY29udGVudFwiKSB7XHJcbiAgICAgIHNldFJlc3BvbnNlKHtcclxuICAgICAgICAuLi5yZXNwb25zZSxcclxuICAgICAgICBjb250ZW50OiBgJHt2YWx1ZX1gLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IChcclxuICAgIGV2ZW50OiBLZXlib2FyZEV2ZW50PEhUTUxFbGVtZW50PiB8IE1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQ+LFxyXG4gICkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjcmVhdGVMb2FkaW5nQnRuKFwic3VibWl0LWJ0blwiKTtcclxuXHJcbiAgICBjb25zdCBmaWxlRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGhvdG9cIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IHBob3RvRmlsZXMgPSBmaWxlRWxlbS5maWxlcyBhcyBGaWxlTGlzdDtcclxuICAgIC8vIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgLy8gaWYgKHBob3RvRmlsZXNbMF0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgLy8gICBmb3JtRGF0YS5hcHBlbmQoXCJwaG90b1wiLCBwaG90b0ZpbGVzWzBdKTtcclxuICAgIC8vIH0gZWxzZSB7XHJcbiAgICAvLyAgIGZvcm1EYXRhLmFwcGVuZChcIm9yaWdpblBob3RvXCIsIHJlc3BvbnNlPy5waG90byBhcyBzdHJpbmcpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gZm9ybURhdGEuYXBwZW5kKFwiY29udGVudFwiLCByZXNwb25zZT8uY29udGVudCBhcyBzdHJpbmcpO1xyXG4gICAgLy8gZm9ybURhdGEuYXBwZW5kKFwicGhvbmVcIiwgcmVzcG9uc2U/LnBob25lX251bWJlciBhcyBzdHJpbmcpO1xyXG4gICAgLy8gZm9ybURhdGEuYXBwZW5kKFwibW9iaWxlXCIsIHJlc3BvbnNlPy5tb2JpbGUgYXMgc3RyaW5nKTtcclxuICAgIC8vIGZvcm1EYXRhLmFwcGVuZChcImZ1bGxOYW1lXCIsIHJlc3BvbnNlPy5uYW1lIGFzIHN0cmluZyk7XHJcbiAgICAvLyBmb3JtRGF0YS5hcHBlbmQoXCJiaXJ0aGRheVwiLCBgJHtyZXNwb25zZS5iaXJ0aGRheX1gKTtcclxuXHJcbiAgICBnZXRWYWxpZEZpbGVMaXN0KHBob3RvRmlsZXMsIGdldEJhc2U2NHMpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldEJhc2U2NHMoYmFzZTY0czogc3RyaW5nW10sIGZpbGVuYW1lczogc3RyaW5nW10pIHtcclxuICAgICAgaWYgKGJhc2U2NHMubGVuZ3RoID4gMCAmJiBmaWxlbmFtZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICBlbWFpbDogcmVzcG9uc2UuZW1haWwsXHJcbiAgICAgICAgICBuYW1lOiByZXNwb25zZS5uYW1lLFxyXG4gICAgICAgICAgYmlydGhkYXk6IHJlc3BvbnNlLmJpcnRoZGF5LFxyXG4gICAgICAgICAgcGhvbmVfbnVtYmVyOiByZXNwb25zZS5waG9uZU51bWJlcixcclxuICAgICAgICAgIG1vYmlsZTogcmVzcG9uc2UubW9iaWxlLFxyXG4gICAgICAgICAgcGhvdG86IGJhc2U2NHNbMF0sXHJcbiAgICAgICAgICBjb250ZW50OiByZXNwb25zZS5jb250ZW50LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVxdWVzdFByb2ZpbGVFZGl0KGRhdGEsIHJlc3BvbnNlPy5pZFRva2VuIGFzIHN0cmluZyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgIGVtYWlsOiByZXNwb25zZS5lbWFpbCxcclxuICAgICAgICAgIG5hbWU6IHJlc3BvbnNlLm5hbWUsXHJcbiAgICAgICAgICBiaXJ0aGRheTogcmVzcG9uc2UuYmlydGhkYXksXHJcbiAgICAgICAgICBwaG9uZU51bWJlcjogcmVzcG9uc2UucGhvbmVfbnVtYmVyLFxyXG4gICAgICAgICAgbW9iaWxlOiByZXNwb25zZS5tb2JpbGUsXHJcbiAgICAgICAgICBjb250ZW50OiByZXNwb25zZS5jb250ZW50LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVxdWVzdFByb2ZpbGVFZGl0KGRhdGEsIHJlc3BvbnNlPy5pZFRva2VuIGFzIHN0cmluZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3Jlc3BvbnNlPy5pZFRva2VuICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTBcIj5cclxuICAgICAgICAgICAgICAgIHsvKiA8IS0tIG1haW4gc3RhcnQgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgey8qIDwhLS0gPT09PT09PT09PT09PT09PSAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtIHAtMzAgbGlnaHQtZ3JheS1iZyBib3JkZXItY2xlYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj57cmVzcG9uc2UuZW1haWx9J3MgUHJvZmlsZSDsiJjsoJU8L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgY2xhc3NOYW1lPVwiZm9ybS1ob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX19odG1sOiBgJHtyZXNwb25zZT8uY3NyZiBhcyBzdHJpbmd9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG90b1wiPlBob3RvIFVwbG9hZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGhvdG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwaG90b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwaG90by10aHVtYi1saXN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBob3RvLWRlbGV0ZS1mb3JtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnblNlbGY6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXNwb25zZS5waG90byAmJiByZXNwb25zZS5waG90byAhPT0gXCJcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3ZlcmxheS1jb250YWluZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9tZWRpYS8ke3Jlc3BvbnNlLnBob3RvfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtyZXNwb25zZS5waG90b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZnVsbE5hbWVcIiBzdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAg7J2066aEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZnVsbE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmdWxsTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cmVzcG9uc2UubmFtZSBhcyBzdHJpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiYmxvY2tcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAg7IOd64WE7JuU7J28XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYmlydGhEYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmlydGhEYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteURhdGVQaWNrZXIgZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PVwieXl5eS1NTS1kZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuYmlydGhkYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBuZXcgRGF0ZShgJHtyZXNwb25zZS5iaXJ0aGRheX1gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG5ldyBEYXRlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBvbkNoYW5nZURhdGUoZGF0ZSl9IC8vb25seSB3aGVuIHZhbHVlIGhhcyBjaGFuZ2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiYmxvY2tcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAg7KCE7ZmU67KI7Zi4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwaG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cmVzcG9uc2UucGhvbmVfbnVtYmVyIGFzIHN0cmluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICDtnLTrjIDsoITtmZTrsojtmLhcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJtb2JpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtb2JpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3Jlc3BvbnNlLm1vYmlsZSBhcyBzdHJpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiY29udGVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICDshozqsJzquIBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29udGVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17N31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VUZXh0YXJlYX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3Jlc3BvbnNlLmNvbnRlbnQgYXMgc3RyaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdWJtaXQtYnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25TdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOuTseuhnVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNsb3NlLWJ0blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgdGV4dC13aGl0ZSBtbC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIOuCmOqwgOq4sFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoUHJvZmlsZUVkaXQpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9