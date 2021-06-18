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
          phone_number: response.phone_number,
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
          phone_number: response.phone_number,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS9lZGl0LnRzeCJdLCJuYW1lcyI6WyJyZXF1ZXN0UHJvZmlsZUVkaXQiLCJkYXRhIiwiaWRUb2tlbiIsInBvc3RVcmwiLCJTZW5kUmVxdWVzdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRBdHRyaWJ1dGUiLCJ0aGVuIiwicmVzcCIsImFsZXJ0IiwibWVzc2FnZSIsImRlbGV0ZUxvYWRpbmdCdG4iLCJlcnJvciIsImdldFZhbGlkRmlsZUxpc3QiLCJmaWxlcyIsImNhbGxiYWNrIiwiY291bnQiLCJsZW5ndGgiLCJmaWxlRGF0YXMiLCJmaWxlbmFtZXMiLCJpIiwiY2hlY2tGaWxlIiwiZmlsZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJ0eXBlIiwic3BsaXQiLCJhcnJheUJ1ZmZlciIsInJlc3VsdCIsInB1c2giLCJuYW1lIiwicmVhZEFzRGF0YVVSTCIsIlByb2ZpbGVFZGl0IiwidXNlU3RhdGUiLCJiaXJ0aGRheSIsIkRhdGUiLCJ0b1N0cmluZyIsInJlc3BvbnNlIiwic2V0UmVzcG9uc2UiLCJ1c2VFZmZlY3QiLCJ1cmwiLCJjc3JmIiwiZW1haWwiLCJwcm9maWxlIiwicGhvbmVOdW1iZXIiLCJtb2JpbGUiLCJwaG90byIsImNvbnRlbnQiLCJncmFkZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ2YWx1ZSIsInRhcmdldCIsIm9uQ2hhbmdlRGF0ZSIsImRhdGUiLCJvbkNoYW5nZVRleHRhcmVhIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZUxvYWRpbmdCdG4iLCJmaWxlRWxlbSIsInBob3RvRmlsZXMiLCJnZXRCYXNlNjRzIiwiYmFzZTY0cyIsInBob25lX251bWJlciIsIl9faHRtbCIsImRpc3BsYXkiLCJmbGV4V3JhcCIsImFsaWduU2VsZiIsIndpZHRoIiwicGFkZGluZyIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBZUEsU0FBU0Esa0JBQVQsQ0FBNEJDLElBQTVCLEVBQXVDQyxPQUF2QyxFQUF3RDtBQUFBOztBQUN0RCxNQUFNQyxPQUFPLDJCQUFiO0FBQ0FDLCtEQUFXLENBQ1RELE9BRFMsRUFFVCxNQUZTLEVBR1RGLElBSFMsWUFJTkMsT0FKTSxzQ0FLTkcsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLENBTE0sMERBS04sc0JBQWtDQyxZQUFsQyxDQUErQyxPQUEvQyxDQUxNLEVBQVgsQ0FPR0MsSUFQSCxDQU9RLFVBQUNDLElBQUQsRUFBVTtBQUNkQyxTQUFLLENBQUNELElBQUksQ0FBQ1IsSUFBTCxDQUFVVSxPQUFYLENBQUw7QUFDQUMseUVBQWdCLENBQUMsWUFBRCxFQUFlLE9BQWYsQ0FBaEIsQ0FGYyxDQUdkO0FBQ0QsR0FYSCxXQVlTLFVBQUNDLEtBQUQsRUFBVztBQUNoQkgsU0FBSyxDQUFDRyxLQUFLLENBQUNGLE9BQVAsQ0FBTDtBQUNBQyx5RUFBZ0IsQ0FBQyxZQUFELEVBQWUsT0FBZixDQUFoQjtBQUNELEdBZkg7QUFnQkQ7O0FBRUQsU0FBU0UsZ0JBQVQsQ0FBMEJDLEtBQTFCLEVBQTJDQyxRQUEzQyxFQUEwRDtBQUN4RCxNQUFJQyxLQUFLLEdBQUdGLEtBQUssQ0FBQ0csTUFBbEIsQ0FEd0QsQ0FDOUI7O0FBQzFCLE1BQUlDLFNBQW1CLEdBQUcsRUFBMUIsQ0FGd0QsQ0FFMUI7O0FBQzlCLE1BQUlDLFNBQW1CLEdBQUcsRUFBMUIsQ0FId0QsQ0FHMUI7O0FBQzlCLE1BQUlILEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2ZELFlBQVEsQ0FBQ0csU0FBRCxFQUFZQyxTQUFaLENBQVI7QUFDRCxHQU51RCxDQVF4RDs7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSixLQUFwQixFQUEyQkksQ0FBQyxFQUE1QixFQUFnQztBQUM5QjtBQUNBQyxhQUFTLENBQUNQLEtBQUssQ0FBQ00sQ0FBRCxDQUFOLENBQVQ7QUFDRDs7QUFFRCxXQUFTQyxTQUFULENBQW1CQyxJQUFuQixFQUErQjtBQUM3QixRQUFJQyxNQUFNLEdBQUcsSUFBSUMsVUFBSixFQUFiOztBQUNBRCxVQUFNLENBQUNFLE1BQVAsR0FBZ0IsWUFBWTtBQUMxQixVQUFJLFVBQUdILElBQUksQ0FBQ0ksSUFBUixFQUFlQyxLQUFmLENBQXFCLEdBQXJCLEVBQTBCLENBQTFCLE1BQWlDLE9BQXJDLEVBQThDO0FBQzVDLFlBQUlDLFdBQVcsR0FBRyxLQUFLQyxNQUF2QixDQUQ0QyxDQUU1Qzs7QUFDQVgsaUJBQVMsQ0FBQ1ksSUFBVixDQUFlRixXQUFmLEVBSDRDLENBR0w7O0FBQ3ZDVCxpQkFBUyxDQUFDVyxJQUFWLENBQWVSLElBQUksQ0FBQ1MsSUFBcEI7QUFDQSxZQUFJLENBQUMsR0FBRWYsS0FBUCxFQUFjRCxRQUFRLENBQUNHLFNBQUQsRUFBWUMsU0FBWixDQUFSLENBTDhCLENBS0U7QUFDL0M7QUFDRixLQVJEOztBQVNBSSxVQUFNLENBQUNTLGFBQVAsQ0FBcUJWLElBQXJCO0FBQ0Q7QUFDRjs7QUFFRCxJQUFNVyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsa0JBQ1FDLCtDQUFRLENBQWtCO0FBQ3hEQyxZQUFRLEVBQUUsSUFBSUMsSUFBSixHQUFXQyxRQUFYO0FBRDhDLEdBQWxCLENBRGhCO0FBQUEsTUFDakJDLFFBRGlCO0FBQUEsTUFDUEMsV0FETzs7QUFLeEJDLGtEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLEdBQUcsR0FBRyxtQkFBWjtBQUNBdEMsaUVBQVcsQ0FBQ3NDLEdBQUQsRUFBTSxLQUFOLENBQVgsQ0FDR2xDLElBREgsQ0FDUSxVQUFDQyxJQUFELEVBQVU7QUFDZCtCLGlCQUFXLENBQUM7QUFDVkcsWUFBSSxFQUFFbEMsSUFBSSxDQUFDUixJQUFMLENBQVUwQyxJQUROO0FBRVZDLGFBQUssRUFBRW5DLElBQUksQ0FBQ1IsSUFBTCxDQUFVNEMsT0FBVixDQUFrQkQsS0FGZjtBQUdWWixZQUFJLEVBQUV2QixJQUFJLENBQUNSLElBQUwsQ0FBVTRDLE9BQVYsQ0FBa0JiLElBSGQ7QUFJVkksZ0JBQVEsRUFBRTNCLElBQUksQ0FBQ1IsSUFBTCxDQUFVNEMsT0FBVixDQUFrQlQsUUFKbEI7QUFLVlUsbUJBQVcsRUFBRXJDLElBQUksQ0FBQ1IsSUFBTCxDQUFVNEMsT0FBVixDQUFrQkMsV0FMckI7QUFNVkMsY0FBTSxFQUFFdEMsSUFBSSxDQUFDUixJQUFMLENBQVU0QyxPQUFWLENBQWtCRSxNQU5oQjtBQU9WQyxhQUFLLEVBQUV2QyxJQUFJLENBQUNSLElBQUwsQ0FBVTRDLE9BQVYsQ0FBa0JHLEtBUGY7QUFRVkMsZUFBTyxFQUFFeEMsSUFBSSxDQUFDUixJQUFMLENBQVU0QyxPQUFWLENBQWtCSSxPQVJqQjtBQVNWQyxhQUFLLEVBQUV6QyxJQUFJLENBQUNSLElBQUwsQ0FBVTRDLE9BQVYsQ0FBa0JLLEtBVGY7QUFVVmhELGVBQU8sRUFBRU8sSUFBSSxDQUFDUixJQUFMLENBQVVDO0FBVlQsT0FBRCxDQUFYO0FBWUQsS0FkSCxXQWVTLFVBQUNXLEtBQUQsRUFBVztBQUNoQnNDLFlBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0IsR0FBeEI7QUFDRCxLQWpCSDtBQWtCRCxHQXBCUSxFQW9CTixFQXBCTSxDQUFULENBTHdCLENBeUJoQjs7QUFFUixNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQTBDO0FBQUEsUUFDakRDLEtBRGlELEdBQ3ZDRCxLQUFLLENBQUNFLE1BRGlDLENBQ2pERCxLQURpRDs7QUFHekQsWUFBUUQsS0FBSyxDQUFDRSxNQUFOLENBQWFsRCxZQUFiLENBQTBCLElBQTFCLENBQVI7QUFDRSxXQUFLLFNBQUw7QUFDRTs7QUFDRixXQUFLLE9BQUw7QUFDRWlDLG1CQUFXLGlDQUNORCxRQURNO0FBRVRPLHFCQUFXLEVBQUVVO0FBRkosV0FBWDtBQUlBOztBQUNGLFdBQUssUUFBTDtBQUNFaEIsbUJBQVcsaUNBQ05ELFFBRE07QUFFVFEsZ0JBQU0sRUFBRVM7QUFGQyxXQUFYO0FBSUE7O0FBQ0YsV0FBSyxVQUFMO0FBQ0VoQixtQkFBVyxpQ0FDTkQsUUFETTtBQUVUUCxjQUFJLEVBQUV3QjtBQUZHLFdBQVg7QUFJQTs7QUFDRjtBQUNFO0FBdEJKO0FBd0JELEdBM0JEOztBQTZCQSxNQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxJQUFELEVBQTRDO0FBQy9EbkIsZUFBVyxpQ0FDTkQsUUFETTtBQUVUSCxjQUFRLEVBQUV1QixJQUFGLGFBQUVBLElBQUYsdUJBQUVBLElBQUksQ0FBRXJCLFFBQU47QUFGRCxPQUFYO0FBSUQsR0FMRDs7QUFPQSxNQUFNc0IsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDTCxLQUFELEVBQTZDO0FBQUEsUUFDNURDLEtBRDRELEdBQ2xERCxLQUFLLENBQUNFLE1BRDRDLENBQzVERCxLQUQ0RDs7QUFFcEUsUUFBS0QsS0FBSyxDQUFDRSxNQUFOLENBQWFsRCxZQUFiLENBQTBCLElBQTFCLENBQUQsS0FBZ0QsU0FBcEQsRUFBK0Q7QUFDN0RpQyxpQkFBVyxpQ0FDTkQsUUFETTtBQUVUVSxlQUFPLFlBQUtPLEtBQUw7QUFGRSxTQUFYO0FBSUQ7QUFDRixHQVJEOztBQVVBLE1BQU1LLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQ2ZOLEtBRGUsRUFFWjtBQUNIQSxTQUFLLENBQUNPLGNBQU47QUFFQUMseUVBQWdCLENBQUMsWUFBRCxDQUFoQjtBQUVBLFFBQU1DLFFBQVEsR0FBRzNELFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFqQjtBQUNBLFFBQU0yRCxVQUFVLEdBQUdELFFBQVEsQ0FBQ2pELEtBQTVCLENBTkcsQ0FPSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBRCxvQkFBZ0IsQ0FBQ21ELFVBQUQsRUFBYUMsVUFBYixDQUFoQjs7QUFFQSxhQUFTQSxVQUFULENBQW9CQyxPQUFwQixFQUF1Qy9DLFNBQXZDLEVBQTREO0FBQzFELFVBQUkrQyxPQUFPLENBQUNqRCxNQUFSLEdBQWlCLENBQWpCLElBQXNCRSxTQUFTLENBQUNGLE1BQVYsR0FBbUIsQ0FBN0MsRUFBZ0Q7QUFDOUMsWUFBTWpCLElBQUksR0FBRztBQUNYMkMsZUFBSyxFQUFFTCxRQUFRLENBQUNLLEtBREw7QUFFWFosY0FBSSxFQUFFTyxRQUFRLENBQUNQLElBRko7QUFHWEksa0JBQVEsRUFBRUcsUUFBUSxDQUFDSCxRQUhSO0FBSVhnQyxzQkFBWSxFQUFFN0IsUUFBUSxDQUFDNkIsWUFKWjtBQUtYckIsZ0JBQU0sRUFBRVIsUUFBUSxDQUFDUSxNQUxOO0FBTVhDLGVBQUssRUFBRW1CLE9BQU8sQ0FBQyxDQUFELENBTkg7QUFPWGxCLGlCQUFPLEVBQUVWLFFBQVEsQ0FBQ1U7QUFQUCxTQUFiO0FBU0FqRCwwQkFBa0IsQ0FBQ0MsSUFBRCxFQUFPc0MsUUFBUCxhQUFPQSxRQUFQLHVCQUFPQSxRQUFRLENBQUVyQyxPQUFqQixDQUFsQjtBQUNELE9BWEQsTUFXTztBQUNMLFlBQU1ELEtBQUksR0FBRztBQUNYMkMsZUFBSyxFQUFFTCxRQUFRLENBQUNLLEtBREw7QUFFWFosY0FBSSxFQUFFTyxRQUFRLENBQUNQLElBRko7QUFHWEksa0JBQVEsRUFBRUcsUUFBUSxDQUFDSCxRQUhSO0FBSVhnQyxzQkFBWSxFQUFFN0IsUUFBUSxDQUFDNkIsWUFKWjtBQUtYckIsZ0JBQU0sRUFBRVIsUUFBUSxDQUFDUSxNQUxOO0FBTVhFLGlCQUFPLEVBQUVWLFFBQVEsQ0FBQ1U7QUFOUCxTQUFiO0FBUUFqRCwwQkFBa0IsQ0FBQ0MsS0FBRCxFQUFPc0MsUUFBUCxhQUFPQSxRQUFQLHVCQUFPQSxRQUFRLENBQUVyQyxPQUFqQixDQUFsQjtBQUNEO0FBQ0Y7QUFDRixHQS9DRDs7QUFpREEsc0JBQ0U7QUFBQSxjQUNHLENBQUFxQyxRQUFRLFNBQVIsSUFBQUEsUUFBUSxXQUFSLFlBQUFBLFFBQVEsQ0FBRXJDLE9BQVYsa0JBQ0M7QUFBSyxlQUFTLEVBQUMsZ0JBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyw0QkFBZjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBQyxRQUFmO0FBQUEsbUNBR0U7QUFBSyx1QkFBUyxFQUFDLE1BQWY7QUFBQSxxQ0FDRTtBQUFLLHlCQUFTLEVBQUMsc0NBQWY7QUFBQSx3Q0FDRTtBQUFJLDJCQUFTLEVBQUMsT0FBZDtBQUFBLDZCQUF1QnFDLFFBQVEsQ0FBQ0ssS0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBR0U7QUFBTSx3QkFBTSxFQUFDLE1BQWI7QUFBb0IsMkJBQVMsRUFBQyxpQkFBOUI7QUFBQSwwQ0FDRTtBQUNFLDJDQUF1QixFQUFFO0FBQ3ZCeUIsNEJBQU0sWUFBSzlCLFFBQUwsYUFBS0EsUUFBTCx1QkFBS0EsUUFBUSxDQUFFSSxJQUFmO0FBRGlCO0FBRDNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsZUFPRTtBQUFLLDZCQUFTLEVBQUMsWUFBZjtBQUFBLDRDQUNFO0FBQU8sNkJBQU8sRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURGLGVBRUU7QUFDRSwwQkFBSSxFQUFDLE1BRFA7QUFFRSwrQkFBUyxFQUFDLGNBRlo7QUFHRSx3QkFBRSxFQUFDLE9BSEw7QUFJRSwwQkFBSSxFQUFDO0FBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFGRixlQVFFO0FBQ0UsK0JBQVMsRUFBQyxrQkFEWjtBQUVFLHdCQUFFLEVBQUMsbUJBRkw7QUFHRSwyQkFBSyxFQUFFO0FBQ0wyQiwrQkFBTyxFQUFFLE1BREo7QUFFTEMsZ0NBQVEsRUFBRSxNQUZMO0FBR0xDLGlDQUFTLEVBQUU7QUFITix1QkFIVDtBQUFBLGdDQVNHakMsUUFBUSxDQUFDUyxLQUFULElBQWtCVCxRQUFRLENBQUNTLEtBQVQsS0FBbUIsRUFBckMsZ0JBQ0M7QUFDRSxpQ0FBUyxFQUFDLG1CQURaO0FBRUUsNkJBQUssRUFBRTtBQUNMeUIsK0JBQUssRUFBRSxLQURGO0FBRUxDLGlDQUFPLEVBQUUsS0FGSjtBQUdMSixpQ0FBTyxFQUFFLE1BSEo7QUFJTEssd0NBQWMsRUFBRSxRQUpYO0FBS0xDLG9DQUFVLEVBQUU7QUFMUCx5QkFGVDtBQUFBLCtDQVVFO0FBQ0UsNkJBQUcsbUJBQVlyQyxRQUFRLENBQUNTLEtBQXJCLENBREw7QUFFRSw2QkFBRyxFQUFFVCxRQUFRLENBQUNTO0FBRmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURELGdCQWlCQztBQTFCSjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFQRixlQThDRTtBQUFLLDZCQUFTLEVBQUMsWUFBZjtBQUFBLDRDQUNFO0FBQU8sNkJBQU8sRUFBQyxVQUFmO0FBQTBCLDJCQUFLLEVBQUU7QUFBRXNCLCtCQUFPLEVBQUU7QUFBWCx1QkFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsZUFLRTtBQUNFLCtCQUFTLEVBQUMsY0FEWjtBQUVFLHdCQUFFLEVBQUMsVUFGTDtBQUdFLDBCQUFJLEVBQUMsVUFIUDtBQUlFLDhCQUFRLEVBQUVoQixRQUpaO0FBS0Usa0NBQVksRUFBRWYsUUFBUSxDQUFDUDtBQUx6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUxGLGVBYUU7QUFDRSw2QkFBTyxFQUFDLE9BRFY7QUFFRSwrQkFBUyxFQUFDLE1BRlo7QUFHRSwyQkFBSyxFQUFFO0FBQUVzQywrQkFBTyxFQUFFO0FBQVgsdUJBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBYkYsZUFxQkUsOERBQUMseURBQUQ7QUFDRSx3QkFBRSxFQUFDLFdBREw7QUFFRSwwQkFBSSxFQUFDLFdBRlA7QUFHRSwrQkFBUyxFQUFDLDJCQUhaO0FBSUUsZ0NBQVUsRUFBQyxZQUpiO0FBS0UsOEJBQVEsRUFDTi9CLFFBQVEsQ0FBQ0gsUUFBVCxHQUNJLElBQUlDLElBQUosV0FBWUUsUUFBUSxDQUFDSCxRQUFyQixFQURKLEdBRUksSUFBSUMsSUFBSixFQVJSO0FBVUUsOEJBQVEsRUFBRSxrQkFBQ3NCLElBQUQ7QUFBQSwrQkFBVUQsWUFBWSxDQUFDQyxJQUFELENBQXRCO0FBQUEsdUJBVlosQ0FVMEM7O0FBVjFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBckJGLGVBa0NFO0FBQ0UsNkJBQU8sRUFBQyxPQURWO0FBRUUsK0JBQVMsRUFBQyxNQUZaO0FBR0UsMkJBQUssRUFBRTtBQUFFVywrQkFBTyxFQUFFO0FBQVgsdUJBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBbENGLGVBMENFO0FBQ0UsK0JBQVMsRUFBQyxjQURaO0FBRUUsd0JBQUUsRUFBQyxPQUZMO0FBR0UsMEJBQUksRUFBQyxPQUhQO0FBSUUsOEJBQVEsRUFBRWhCLFFBSlo7QUFLRSxrQ0FBWSxFQUFFZixRQUFRLENBQUM2QjtBQUx6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQTFDRixlQWtERTtBQUNFLDZCQUFPLEVBQUMsT0FEVjtBQUVFLCtCQUFTLEVBQUMsTUFGWjtBQUdFLDJCQUFLLEVBQUU7QUFBRUUsK0JBQU8sRUFBRTtBQUFYLHVCQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQWxERixlQTBERTtBQUNFLCtCQUFTLEVBQUMsY0FEWjtBQUVFLHdCQUFFLEVBQUMsUUFGTDtBQUdFLDBCQUFJLEVBQUMsUUFIUDtBQUlFLDhCQUFRLEVBQUVoQixRQUpaO0FBS0Usa0NBQVksRUFBRWYsUUFBUSxDQUFDUTtBQUx6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQTFERixlQWtFRTtBQUNFLDZCQUFPLEVBQUMsU0FEVjtBQUVFLCtCQUFTLEVBQUMsTUFGWjtBQUdFLDJCQUFLLEVBQUU7QUFBRXVCLCtCQUFPLEVBQUU7QUFBWCx1QkFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFsRUYsZUEwRUU7QUFDRSwrQkFBUyxFQUFDLGNBRFo7QUFFRSx3QkFBRSxFQUFDLFNBRkw7QUFHRSwwQkFBSSxFQUFDLFNBSFA7QUFJRSwwQkFBSSxFQUFFLENBSlI7QUFLRSw4QkFBUSxFQUFFVixnQkFMWjtBQU1FLGtDQUFZLEVBQUVyQixRQUFRLENBQUNVO0FBTnpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBMUVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkE5Q0YsZUFrSUU7QUFDRSxzQkFBRSxFQUFDLFlBREw7QUFFRSw2QkFBUyxFQUFDLGlCQUZaO0FBR0UsMkJBQU8sRUFBRVksUUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFsSUYsZUF5SUUsOERBQUMsa0RBQUQ7QUFBTSx3QkFBSSxFQUFDLFVBQVg7QUFBQSwyQ0FDRTtBQUNFLHdCQUFFLEVBQUMsV0FETDtBQUVFLCtCQUFTLEVBQUMsZ0NBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQXpJRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSixtQkFERjtBQXdLRCxDQWxTRDs7R0FBTTNCLFc7O0tBQUFBLFc7QUFvU04sK0RBQWUsTUFBQTJDLHVEQUFVLENBQUMzQyxXQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUvZWRpdC43N2M5ZjdjOWJmNTNiMDY0ZTg3My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICB1c2VTdGF0ZSxcclxuICB1c2VFZmZlY3QsXHJcbiAgQ2hhbmdlRXZlbnQsXHJcbiAgS2V5Ym9hcmRFdmVudCxcclxuICBNb3VzZUV2ZW50LFxyXG59IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSBcInJlYWN0LWRhdGVwaWNrZXJcIjtcclxuXHJcbmltcG9ydCB7IFNlbmRSZXF1ZXN0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQWpheFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVMb2FkaW5nQnRuLCBkZWxldGVMb2FkaW5nQnRuIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTG9hZGluZ1wiO1xyXG5cclxuaW1wb3J0IFwicmVhY3QtZGF0ZXBpY2tlci9kaXN0L3JlYWN0LWRhdGVwaWNrZXIuY3NzXCI7XHJcblxyXG50eXBlIFByb2ZpbGVFZGl0Rm9ybSA9IHtcclxuICBjc3JmPzogc3RyaW5nO1xyXG4gIGVtYWlsPzogc3RyaW5nO1xyXG4gIG5hbWU/OiBzdHJpbmc7XHJcbiAgYmlydGhkYXk6IHN0cmluZztcclxuICBwaG9uZU51bWJlcj86IHN0cmluZztcclxuICBtb2JpbGU/OiBzdHJpbmc7XHJcbiAgcGhvdG8/OiBzdHJpbmc7XHJcbiAgY29udGVudD86IHN0cmluZztcclxuICBncmFkZT86IG51bWJlcjtcclxuICBpZFRva2VuPzogc3RyaW5nO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVxdWVzdFByb2ZpbGVFZGl0KGRhdGE6IGFueSwgaWRUb2tlbjogc3RyaW5nKSB7XHJcbiAgY29uc3QgcG9zdFVybCA9IGAvYXBpL3VzZXIvcHJvZmlsZS9lZGl0YDtcclxuICBTZW5kUmVxdWVzdChcclxuICAgIHBvc3RVcmwsXHJcbiAgICBcIlBPU1RcIixcclxuICAgIGRhdGEsXHJcbiAgICBgJHtpZFRva2VufWAsXHJcbiAgICBgJHtkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIl9jc3JmXCIpPy5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKX1gLFxyXG4gIClcclxuICAgIC50aGVuKChyZXNwKSA9PiB7XHJcbiAgICAgIGFsZXJ0KHJlc3AuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgZGVsZXRlTG9hZGluZ0J0bihcInN1Ym1pdC1idG5cIiwgXCLsgqzsp4Qg65Ox66GdXCIpO1xyXG4gICAgICAvLyBnbG9iYWwud2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCIvcHJvZmlsZVwiKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICBkZWxldGVMb2FkaW5nQnRuKFwic3VibWl0LWJ0blwiLCBcIuyCrOynhCDrk7HroZ1cIik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VmFsaWRGaWxlTGlzdChmaWxlczogRmlsZUxpc3QsIGNhbGxiYWNrOiBhbnkpIHtcclxuICB2YXIgY291bnQgPSBmaWxlcy5sZW5ndGg7IC8vIHRvdGFsIG51bWJlciBvZiBmaWxlc1xyXG4gIHZhciBmaWxlRGF0YXM6IHN0cmluZ1tdID0gW107IC8vIGFjY2VwdGVkIGZpbGVzXHJcbiAgdmFyIGZpbGVuYW1lczogc3RyaW5nW10gPSBbXTsgLy8gYWNjZXB0ZWQgZmlsZXNcclxuICBpZiAoY291bnQgPT09IDApIHtcclxuICAgIGNhbGxiYWNrKGZpbGVEYXRhcywgZmlsZW5hbWVzKTtcclxuICB9XHJcblxyXG4gIC8vR2V0IHRoZSBzZWxlY3RlZCBmaWxlc1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgLy8gaW52b2tlIHJlYWRlcnNcclxuICAgIGNoZWNrRmlsZShmaWxlc1tpXSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGVja0ZpbGUoZmlsZTogRmlsZSkge1xyXG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoYCR7ZmlsZS50eXBlfWAuc3BsaXQoXCIvXCIpWzBdID09PSBcImltYWdlXCIpIHtcclxuICAgICAgICB2YXIgYXJyYXlCdWZmZXIgPSB0aGlzLnJlc3VsdDtcclxuICAgICAgICAvL0hlcmUgSSBwYXJzZSBhbmQgY2hlY2sgdGhlIGRhdGEgYW5kIGlmIHZhbGlkIGFwcGVuZCBpdCB0byBmaWxlTGlzdFxyXG4gICAgICAgIGZpbGVEYXRhcy5wdXNoKGFycmF5QnVmZmVyIGFzIHN0cmluZyk7IC8vIG9yIHRoZSBvcmlnaW5hbCBgZmlsZWAgYmxvYi4uXHJcbiAgICAgICAgZmlsZW5hbWVzLnB1c2goZmlsZS5uYW1lKTtcclxuICAgICAgICBpZiAoIS0tY291bnQpIGNhbGxiYWNrKGZpbGVEYXRhcywgZmlsZW5hbWVzKTsgLy8gd2hlbiBkb25lLCBpbnZva2UgY2FsbGJhY2tcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgUHJvZmlsZUVkaXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Jlc3BvbnNlLCBzZXRSZXNwb25zZV0gPSB1c2VTdGF0ZTxQcm9maWxlRWRpdEZvcm0+KHtcclxuICAgIGJpcnRoZGF5OiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1cmwgPSBcIi9hcGkvdXNlci9wcm9maWxlXCI7XHJcbiAgICBTZW5kUmVxdWVzdCh1cmwsIFwiR0VUXCIpXHJcbiAgICAgIC50aGVuKChyZXNwKSA9PiB7XHJcbiAgICAgICAgc2V0UmVzcG9uc2Uoe1xyXG4gICAgICAgICAgY3NyZjogcmVzcC5kYXRhLmNzcmYsXHJcbiAgICAgICAgICBlbWFpbDogcmVzcC5kYXRhLnByb2ZpbGUuZW1haWwsXHJcbiAgICAgICAgICBuYW1lOiByZXNwLmRhdGEucHJvZmlsZS5uYW1lLFxyXG4gICAgICAgICAgYmlydGhkYXk6IHJlc3AuZGF0YS5wcm9maWxlLmJpcnRoZGF5LFxyXG4gICAgICAgICAgcGhvbmVOdW1iZXI6IHJlc3AuZGF0YS5wcm9maWxlLnBob25lTnVtYmVyLFxyXG4gICAgICAgICAgbW9iaWxlOiByZXNwLmRhdGEucHJvZmlsZS5tb2JpbGUsXHJcbiAgICAgICAgICBwaG90bzogcmVzcC5kYXRhLnByb2ZpbGUucGhvdG8sXHJcbiAgICAgICAgICBjb250ZW50OiByZXNwLmRhdGEucHJvZmlsZS5jb250ZW50LFxyXG4gICAgICAgICAgZ3JhZGU6IHJlc3AuZGF0YS5wcm9maWxlLmdyYWRlLFxyXG4gICAgICAgICAgaWRUb2tlbjogcmVzcC5kYXRhLmlkVG9rZW4sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcIi9cIik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTsgLy8gPC0tIGVtcHR5IGRlcGVuZGVuY3kgdG8gcnVuIG9uY2Ugb24gY29tcG9uZW50IG1vdW50XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlID0gKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgIHN3aXRjaCAoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpIGFzIHN0cmluZykge1xyXG4gICAgICBjYXNlIFwiY29udGVudFwiOlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwicGhvbmVcIjpcclxuICAgICAgICBzZXRSZXNwb25zZSh7XHJcbiAgICAgICAgICAuLi5yZXNwb25zZSxcclxuICAgICAgICAgIHBob25lTnVtYmVyOiB2YWx1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIm1vYmlsZVwiOlxyXG4gICAgICAgIHNldFJlc3BvbnNlKHtcclxuICAgICAgICAgIC4uLnJlc3BvbnNlLFxyXG4gICAgICAgICAgbW9iaWxlOiB2YWx1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImZ1bGxOYW1lXCI6XHJcbiAgICAgICAgc2V0UmVzcG9uc2Uoe1xyXG4gICAgICAgICAgLi4ucmVzcG9uc2UsXHJcbiAgICAgICAgICBuYW1lOiB2YWx1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNoYW5nZURhdGUgPSAoZGF0ZTogRGF0ZSB8IFtEYXRlLCBEYXRlXSB8IG51bGwpOiB2b2lkID0+IHtcclxuICAgIHNldFJlc3BvbnNlKHtcclxuICAgICAgLi4ucmVzcG9uc2UsXHJcbiAgICAgIGJpcnRoZGF5OiBkYXRlPy50b1N0cmluZygpIGFzIHN0cmluZyxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlVGV4dGFyZWEgPSAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB7XHJcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XHJcbiAgICBpZiAoKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSBhcyBzdHJpbmcpID09PSBcImNvbnRlbnRcIikge1xyXG4gICAgICBzZXRSZXNwb25zZSh7XHJcbiAgICAgICAgLi4ucmVzcG9uc2UsXHJcbiAgICAgICAgY29udGVudDogYCR7dmFsdWV9YCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSAoXHJcbiAgICBldmVudDogS2V5Ym9hcmRFdmVudDxIVE1MRWxlbWVudD4gfCBNb3VzZUV2ZW50PEhUTUxFbGVtZW50PixcclxuICApID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY3JlYXRlTG9hZGluZ0J0bihcInN1Ym1pdC1idG5cIik7XHJcblxyXG4gICAgY29uc3QgZmlsZUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBob3RvXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBjb25zdCBwaG90b0ZpbGVzID0gZmlsZUVsZW0uZmlsZXMgYXMgRmlsZUxpc3Q7XHJcbiAgICAvLyBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIC8vIGlmIChwaG90b0ZpbGVzWzBdICE9PSB1bmRlZmluZWQpIHtcclxuICAgIC8vICAgZm9ybURhdGEuYXBwZW5kKFwicGhvdG9cIiwgcGhvdG9GaWxlc1swXSk7XHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgLy8gICBmb3JtRGF0YS5hcHBlbmQoXCJvcmlnaW5QaG90b1wiLCByZXNwb25zZT8ucGhvdG8gYXMgc3RyaW5nKTtcclxuICAgIC8vIH1cclxuICAgIC8vIGZvcm1EYXRhLmFwcGVuZChcImNvbnRlbnRcIiwgcmVzcG9uc2U/LmNvbnRlbnQgYXMgc3RyaW5nKTtcclxuICAgIC8vIGZvcm1EYXRhLmFwcGVuZChcInBob25lXCIsIHJlc3BvbnNlPy5waG9uZV9udW1iZXIgYXMgc3RyaW5nKTtcclxuICAgIC8vIGZvcm1EYXRhLmFwcGVuZChcIm1vYmlsZVwiLCByZXNwb25zZT8ubW9iaWxlIGFzIHN0cmluZyk7XHJcbiAgICAvLyBmb3JtRGF0YS5hcHBlbmQoXCJmdWxsTmFtZVwiLCByZXNwb25zZT8ubmFtZSBhcyBzdHJpbmcpO1xyXG4gICAgLy8gZm9ybURhdGEuYXBwZW5kKFwiYmlydGhkYXlcIiwgYCR7cmVzcG9uc2UuYmlydGhkYXl9YCk7XHJcblxyXG4gICAgZ2V0VmFsaWRGaWxlTGlzdChwaG90b0ZpbGVzLCBnZXRCYXNlNjRzKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRCYXNlNjRzKGJhc2U2NHM6IHN0cmluZ1tdLCBmaWxlbmFtZXM6IHN0cmluZ1tdKSB7XHJcbiAgICAgIGlmIChiYXNlNjRzLmxlbmd0aCA+IDAgJiYgZmlsZW5hbWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgZW1haWw6IHJlc3BvbnNlLmVtYWlsLFxyXG4gICAgICAgICAgbmFtZTogcmVzcG9uc2UubmFtZSxcclxuICAgICAgICAgIGJpcnRoZGF5OiByZXNwb25zZS5iaXJ0aGRheSxcclxuICAgICAgICAgIHBob25lX251bWJlcjogcmVzcG9uc2UucGhvbmVfbnVtYmVyLFxyXG4gICAgICAgICAgbW9iaWxlOiByZXNwb25zZS5tb2JpbGUsXHJcbiAgICAgICAgICBwaG90bzogYmFzZTY0c1swXSxcclxuICAgICAgICAgIGNvbnRlbnQ6IHJlc3BvbnNlLmNvbnRlbnQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXF1ZXN0UHJvZmlsZUVkaXQoZGF0YSwgcmVzcG9uc2U/LmlkVG9rZW4gYXMgc3RyaW5nKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgZW1haWw6IHJlc3BvbnNlLmVtYWlsLFxyXG4gICAgICAgICAgbmFtZTogcmVzcG9uc2UubmFtZSxcclxuICAgICAgICAgIGJpcnRoZGF5OiByZXNwb25zZS5iaXJ0aGRheSxcclxuICAgICAgICAgIHBob25lX251bWJlcjogcmVzcG9uc2UucGhvbmVfbnVtYmVyLFxyXG4gICAgICAgICAgbW9iaWxlOiByZXNwb25zZS5tb2JpbGUsXHJcbiAgICAgICAgICBjb250ZW50OiByZXNwb25zZS5jb250ZW50LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVxdWVzdFByb2ZpbGVFZGl0KGRhdGEsIHJlc3BvbnNlPy5pZFRva2VuIGFzIHN0cmluZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3Jlc3BvbnNlPy5pZFRva2VuICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTBcIj5cclxuICAgICAgICAgICAgICAgIHsvKiA8IS0tIG1haW4gc3RhcnQgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgey8qIDwhLS0gPT09PT09PT09PT09PT09PSAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtIHAtMzAgbGlnaHQtZ3JheS1iZyBib3JkZXItY2xlYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj57cmVzcG9uc2UuZW1haWx9J3MgUHJvZmlsZSDsiJjsoJU8L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgY2xhc3NOYW1lPVwiZm9ybS1ob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX19odG1sOiBgJHtyZXNwb25zZT8uY3NyZiBhcyBzdHJpbmd9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG90b1wiPlBob3RvIFVwbG9hZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGhvdG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwaG90b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwaG90by10aHVtYi1saXN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBob3RvLWRlbGV0ZS1mb3JtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnblNlbGY6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXNwb25zZS5waG90byAmJiByZXNwb25zZS5waG90byAhPT0gXCJcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3ZlcmxheS1jb250YWluZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9tZWRpYS8ke3Jlc3BvbnNlLnBob3RvfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtyZXNwb25zZS5waG90b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZnVsbE5hbWVcIiBzdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAg7J2066aEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZnVsbE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmdWxsTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cmVzcG9uc2UubmFtZSBhcyBzdHJpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiYmxvY2tcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAg7IOd64WE7JuU7J28XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYmlydGhEYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmlydGhEYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteURhdGVQaWNrZXIgZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PVwieXl5eS1NTS1kZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuYmlydGhkYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBuZXcgRGF0ZShgJHtyZXNwb25zZS5iaXJ0aGRheX1gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG5ldyBEYXRlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBvbkNoYW5nZURhdGUoZGF0ZSl9IC8vb25seSB3aGVuIHZhbHVlIGhhcyBjaGFuZ2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiYmxvY2tcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAg7KCE7ZmU67KI7Zi4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwaG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cmVzcG9uc2UucGhvbmVfbnVtYmVyIGFzIHN0cmluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICDtnLTrjIDsoITtmZTrsojtmLhcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJtb2JpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtb2JpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3Jlc3BvbnNlLm1vYmlsZSBhcyBzdHJpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiY29udGVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICDshozqsJzquIBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29udGVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17N31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VUZXh0YXJlYX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3Jlc3BvbnNlLmNvbnRlbnQgYXMgc3RyaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdWJtaXQtYnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25TdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOuTseuhnVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNsb3NlLWJ0blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgdGV4dC13aGl0ZSBtbC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIOuCmOqwgOq4sFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoUHJvZmlsZUVkaXQpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9