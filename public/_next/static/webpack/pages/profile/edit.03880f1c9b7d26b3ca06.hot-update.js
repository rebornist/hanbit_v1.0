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
        phone_number: resp.data.profile.phone_number,
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
          phone_number: value
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS9lZGl0LnRzeCJdLCJuYW1lcyI6WyJyZXF1ZXN0UHJvZmlsZUVkaXQiLCJkYXRhIiwiaWRUb2tlbiIsInBvc3RVcmwiLCJTZW5kUmVxdWVzdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRBdHRyaWJ1dGUiLCJ0aGVuIiwicmVzcCIsImFsZXJ0IiwibWVzc2FnZSIsImRlbGV0ZUxvYWRpbmdCdG4iLCJlcnJvciIsImdldFZhbGlkRmlsZUxpc3QiLCJmaWxlcyIsImNhbGxiYWNrIiwiY291bnQiLCJsZW5ndGgiLCJmaWxlRGF0YXMiLCJmaWxlbmFtZXMiLCJpIiwiY2hlY2tGaWxlIiwiZmlsZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJ0eXBlIiwic3BsaXQiLCJhcnJheUJ1ZmZlciIsInJlc3VsdCIsInB1c2giLCJuYW1lIiwicmVhZEFzRGF0YVVSTCIsIlByb2ZpbGVFZGl0IiwidXNlU3RhdGUiLCJiaXJ0aGRheSIsIkRhdGUiLCJ0b1N0cmluZyIsInJlc3BvbnNlIiwic2V0UmVzcG9uc2UiLCJ1c2VFZmZlY3QiLCJ1cmwiLCJjc3JmIiwiZW1haWwiLCJwcm9maWxlIiwicGhvbmVfbnVtYmVyIiwibW9iaWxlIiwicGhvdG8iLCJjb250ZW50IiwiZ3JhZGUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJvbkNoYW5nZSIsImV2ZW50IiwidmFsdWUiLCJ0YXJnZXQiLCJvbkNoYW5nZURhdGUiLCJkYXRlIiwib25DaGFuZ2VUZXh0YXJlYSIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjcmVhdGVMb2FkaW5nQnRuIiwiZmlsZUVsZW0iLCJwaG90b0ZpbGVzIiwiZ2V0QmFzZTY0cyIsImJhc2U2NHMiLCJfX2h0bWwiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJhbGlnblNlbGYiLCJ3aWR0aCIsInBhZGRpbmciLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRl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QUMsY0FEWjtBQUVFLHdCQUFFLEVBQUMsU0FGTDtBQUdFLDBCQUFJLEVBQUMsU0FIUDtBQUlFLDBCQUFJLEVBQUUsQ0FKUjtBQUtFLDhCQUFRLEVBQUVULGdCQUxaO0FBTUUsa0NBQVksRUFBRXJCLFFBQVEsQ0FBQ1U7QUFOekI7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkExRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQTlDRixlQWtJRTtBQUNFLHNCQUFFLEVBQUMsWUFETDtBQUVFLDZCQUFTLEVBQUMsaUJBRlo7QUFHRSwyQkFBTyxFQUFFWSxRQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQWxJRixlQXlJRSw4REFBQyxrREFBRDtBQUFNLHdCQUFJLEVBQUMsVUFBWDtBQUFBLDJDQUNFO0FBQ0Usd0JBQUUsRUFBQyxXQURMO0FBRUUsK0JBQVMsRUFBQyxnQ0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBeklGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKLG1CQURGO0FBd0tELENBbFNEOztHQUFNM0IsVzs7S0FBQUEsVztBQW9TTiwrREFBZSxNQUFBMEMsdURBQVUsQ0FBQzFDLFdBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS9lZGl0LjAzODgwZjFjOWI3ZDI2YjNjYTA2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIHVzZVN0YXRlLFxyXG4gIHVzZUVmZmVjdCxcclxuICBDaGFuZ2VFdmVudCxcclxuICBLZXlib2FyZEV2ZW50LFxyXG4gIE1vdXNlRXZlbnQsXHJcbn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tIFwicmVhY3QtZGF0ZXBpY2tlclwiO1xyXG5cclxuaW1wb3J0IHsgU2VuZFJlcXVlc3QgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9BamF4XCI7XHJcbmltcG9ydCB7IGNyZWF0ZUxvYWRpbmdCdG4sIGRlbGV0ZUxvYWRpbmdCdG4gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Mb2FkaW5nXCI7XHJcblxyXG5pbXBvcnQgXCJyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci5jc3NcIjtcclxuXHJcbnR5cGUgUHJvZmlsZUVkaXRGb3JtID0ge1xyXG4gIGNzcmY/OiBzdHJpbmc7XHJcbiAgZW1haWw/OiBzdHJpbmc7XHJcbiAgbmFtZT86IHN0cmluZztcclxuICBiaXJ0aGRheTogc3RyaW5nO1xyXG4gIHBob25lTnVtYmVyPzogc3RyaW5nO1xyXG4gIG1vYmlsZT86IHN0cmluZztcclxuICBwaG90bz86IHN0cmluZztcclxuICBjb250ZW50Pzogc3RyaW5nO1xyXG4gIGdyYWRlPzogbnVtYmVyO1xyXG4gIGlkVG9rZW4/OiBzdHJpbmc7XHJcbn07XHJcblxyXG5mdW5jdGlvbiByZXF1ZXN0UHJvZmlsZUVkaXQoZGF0YTogYW55LCBpZFRva2VuOiBzdHJpbmcpIHtcclxuICBjb25zdCBwb3N0VXJsID0gYC9hcGkvdXNlci9wcm9maWxlL2VkaXRgO1xyXG4gIFNlbmRSZXF1ZXN0KFxyXG4gICAgcG9zdFVybCxcclxuICAgIFwiUE9TVFwiLFxyXG4gICAgZGF0YSxcclxuICAgIGAke2lkVG9rZW59YCxcclxuICAgIGAke2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiX2NzcmZcIik/LmdldEF0dHJpYnV0ZShcInZhbHVlXCIpfWAsXHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3ApID0+IHtcclxuICAgICAgYWxlcnQocmVzcC5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICBkZWxldGVMb2FkaW5nQnRuKFwic3VibWl0LWJ0blwiLCBcIuyCrOynhCDrk7HroZ1cIik7XHJcbiAgICAgIC8vIGdsb2JhbC53aW5kb3cubG9jYXRpb24ucmVwbGFjZShcIi9wcm9maWxlXCIpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIGRlbGV0ZUxvYWRpbmdCdG4oXCJzdWJtaXQtYnRuXCIsIFwi7IKs7KeEIOuTseuhnVwiKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRWYWxpZEZpbGVMaXN0KGZpbGVzOiBGaWxlTGlzdCwgY2FsbGJhY2s6IGFueSkge1xyXG4gIHZhciBjb3VudCA9IGZpbGVzLmxlbmd0aDsgLy8gdG90YWwgbnVtYmVyIG9mIGZpbGVzXHJcbiAgdmFyIGZpbGVEYXRhczogc3RyaW5nW10gPSBbXTsgLy8gYWNjZXB0ZWQgZmlsZXNcclxuICB2YXIgZmlsZW5hbWVzOiBzdHJpbmdbXSA9IFtdOyAvLyBhY2NlcHRlZCBmaWxlc1xyXG4gIGlmIChjb3VudCA9PT0gMCkge1xyXG4gICAgY2FsbGJhY2soZmlsZURhdGFzLCBmaWxlbmFtZXMpO1xyXG4gIH1cclxuXHJcbiAgLy9HZXQgdGhlIHNlbGVjdGVkIGZpbGVzXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICAvLyBpbnZva2UgcmVhZGVyc1xyXG4gICAgY2hlY2tGaWxlKGZpbGVzW2ldKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoZWNrRmlsZShmaWxlOiBGaWxlKSB7XHJcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmIChgJHtmaWxlLnR5cGV9YC5zcGxpdChcIi9cIilbMF0gPT09IFwiaW1hZ2VcIikge1xyXG4gICAgICAgIHZhciBhcnJheUJ1ZmZlciA9IHRoaXMucmVzdWx0O1xyXG4gICAgICAgIC8vSGVyZSBJIHBhcnNlIGFuZCBjaGVjayB0aGUgZGF0YSBhbmQgaWYgdmFsaWQgYXBwZW5kIGl0IHRvIGZpbGVMaXN0XHJcbiAgICAgICAgZmlsZURhdGFzLnB1c2goYXJyYXlCdWZmZXIgYXMgc3RyaW5nKTsgLy8gb3IgdGhlIG9yaWdpbmFsIGBmaWxlYCBibG9iLi5cclxuICAgICAgICBmaWxlbmFtZXMucHVzaChmaWxlLm5hbWUpO1xyXG4gICAgICAgIGlmICghLS1jb3VudCkgY2FsbGJhY2soZmlsZURhdGFzLCBmaWxlbmFtZXMpOyAvLyB3aGVuIGRvbmUsIGludm9rZSBjYWxsYmFja1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBQcm9maWxlRWRpdCA9ICgpID0+IHtcclxuICBjb25zdCBbcmVzcG9uc2UsIHNldFJlc3BvbnNlXSA9IHVzZVN0YXRlPFByb2ZpbGVFZGl0Rm9ybT4oe1xyXG4gICAgYmlydGhkYXk6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSxcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVybCA9IFwiL2FwaS91c2VyL3Byb2ZpbGVcIjtcclxuICAgIFNlbmRSZXF1ZXN0KHVybCwgXCJHRVRcIilcclxuICAgICAgLnRoZW4oKHJlc3ApID0+IHtcclxuICAgICAgICBzZXRSZXNwb25zZSh7XHJcbiAgICAgICAgICBjc3JmOiByZXNwLmRhdGEuY3NyZixcclxuICAgICAgICAgIGVtYWlsOiByZXNwLmRhdGEucHJvZmlsZS5lbWFpbCxcclxuICAgICAgICAgIG5hbWU6IHJlc3AuZGF0YS5wcm9maWxlLm5hbWUsXHJcbiAgICAgICAgICBiaXJ0aGRheTogcmVzcC5kYXRhLnByb2ZpbGUuYmlydGhkYXksXHJcbiAgICAgICAgICBwaG9uZV9udW1iZXI6IHJlc3AuZGF0YS5wcm9maWxlLnBob25lX251bWJlcixcclxuICAgICAgICAgIG1vYmlsZTogcmVzcC5kYXRhLnByb2ZpbGUubW9iaWxlLFxyXG4gICAgICAgICAgcGhvdG86IHJlc3AuZGF0YS5wcm9maWxlLnBob3RvLFxyXG4gICAgICAgICAgY29udGVudDogcmVzcC5kYXRhLnByb2ZpbGUuY29udGVudCxcclxuICAgICAgICAgIGdyYWRlOiByZXNwLmRhdGEucHJvZmlsZS5ncmFkZSxcclxuICAgICAgICAgIGlkVG9rZW46IHJlc3AuZGF0YS5pZFRva2VuLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCIvXCIpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7IC8vIDwtLSBlbXB0eSBkZXBlbmRlbmN5IHRvIHJ1biBvbmNlIG9uIGNvbXBvbmVudCBtb3VudFxyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9IChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICBzd2l0Y2ggKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSBhcyBzdHJpbmcpIHtcclxuICAgICAgY2FzZSBcImNvbnRlbnRcIjpcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcInBob25lXCI6XHJcbiAgICAgICAgc2V0UmVzcG9uc2Uoe1xyXG4gICAgICAgICAgLi4ucmVzcG9uc2UsXHJcbiAgICAgICAgICBwaG9uZV9udW1iZXI6IHZhbHVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwibW9iaWxlXCI6XHJcbiAgICAgICAgc2V0UmVzcG9uc2Uoe1xyXG4gICAgICAgICAgLi4ucmVzcG9uc2UsXHJcbiAgICAgICAgICBtb2JpbGU6IHZhbHVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiZnVsbE5hbWVcIjpcclxuICAgICAgICBzZXRSZXNwb25zZSh7XHJcbiAgICAgICAgICAuLi5yZXNwb25zZSxcclxuICAgICAgICAgIG5hbWU6IHZhbHVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlRGF0ZSA9IChkYXRlOiBEYXRlIHwgW0RhdGUsIERhdGVdIHwgbnVsbCk6IHZvaWQgPT4ge1xyXG4gICAgc2V0UmVzcG9uc2Uoe1xyXG4gICAgICAuLi5yZXNwb25zZSxcclxuICAgICAgYmlydGhkYXk6IGRhdGU/LnRvU3RyaW5nKCkgYXMgc3RyaW5nLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VUZXh0YXJlYSA9IChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+IHtcclxuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcclxuICAgIGlmICgoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpIGFzIHN0cmluZykgPT09IFwiY29udGVudFwiKSB7XHJcbiAgICAgIHNldFJlc3BvbnNlKHtcclxuICAgICAgICAuLi5yZXNwb25zZSxcclxuICAgICAgICBjb250ZW50OiBgJHt2YWx1ZX1gLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IChcclxuICAgIGV2ZW50OiBLZXlib2FyZEV2ZW50PEhUTUxFbGVtZW50PiB8IE1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQ+LFxyXG4gICkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjcmVhdGVMb2FkaW5nQnRuKFwic3VibWl0LWJ0blwiKTtcclxuXHJcbiAgICBjb25zdCBmaWxlRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGhvdG9cIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IHBob3RvRmlsZXMgPSBmaWxlRWxlbS5maWxlcyBhcyBGaWxlTGlzdDtcclxuICAgIC8vIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgLy8gaWYgKHBob3RvRmlsZXNbMF0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgLy8gICBmb3JtRGF0YS5hcHBlbmQoXCJwaG90b1wiLCBwaG90b0ZpbGVzWzBdKTtcclxuICAgIC8vIH0gZWxzZSB7XHJcbiAgICAvLyAgIGZvcm1EYXRhLmFwcGVuZChcIm9yaWdpblBob3RvXCIsIHJlc3BvbnNlPy5waG90byBhcyBzdHJpbmcpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gZm9ybURhdGEuYXBwZW5kKFwiY29udGVudFwiLCByZXNwb25zZT8uY29udGVudCBhcyBzdHJpbmcpO1xyXG4gICAgLy8gZm9ybURhdGEuYXBwZW5kKFwicGhvbmVcIiwgcmVzcG9uc2U/LnBob25lX251bWJlciBhcyBzdHJpbmcpO1xyXG4gICAgLy8gZm9ybURhdGEuYXBwZW5kKFwibW9iaWxlXCIsIHJlc3BvbnNlPy5tb2JpbGUgYXMgc3RyaW5nKTtcclxuICAgIC8vIGZvcm1EYXRhLmFwcGVuZChcImZ1bGxOYW1lXCIsIHJlc3BvbnNlPy5uYW1lIGFzIHN0cmluZyk7XHJcbiAgICAvLyBmb3JtRGF0YS5hcHBlbmQoXCJiaXJ0aGRheVwiLCBgJHtyZXNwb25zZS5iaXJ0aGRheX1gKTtcclxuXHJcbiAgICBnZXRWYWxpZEZpbGVMaXN0KHBob3RvRmlsZXMsIGdldEJhc2U2NHMpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldEJhc2U2NHMoYmFzZTY0czogc3RyaW5nW10sIGZpbGVuYW1lczogc3RyaW5nW10pIHtcclxuICAgICAgaWYgKGJhc2U2NHMubGVuZ3RoID4gMCAmJiBmaWxlbmFtZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICBlbWFpbDogcmVzcG9uc2UuZW1haWwsXHJcbiAgICAgICAgICBuYW1lOiByZXNwb25zZS5uYW1lLFxyXG4gICAgICAgICAgYmlydGhkYXk6IHJlc3BvbnNlLmJpcnRoZGF5LFxyXG4gICAgICAgICAgcGhvbmVfbnVtYmVyOiByZXNwb25zZS5waG9uZV9udW1iZXIsXHJcbiAgICAgICAgICBtb2JpbGU6IHJlc3BvbnNlLm1vYmlsZSxcclxuICAgICAgICAgIHBob3RvOiBiYXNlNjRzWzBdLFxyXG4gICAgICAgICAgY29udGVudDogcmVzcG9uc2UuY29udGVudCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcXVlc3RQcm9maWxlRWRpdChkYXRhLCByZXNwb25zZT8uaWRUb2tlbiBhcyBzdHJpbmcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICBlbWFpbDogcmVzcG9uc2UuZW1haWwsXHJcbiAgICAgICAgICBuYW1lOiByZXNwb25zZS5uYW1lLFxyXG4gICAgICAgICAgYmlydGhkYXk6IHJlc3BvbnNlLmJpcnRoZGF5LFxyXG4gICAgICAgICAgcGhvbmVfbnVtYmVyOiByZXNwb25zZS5waG9uZV9udW1iZXIsXHJcbiAgICAgICAgICBtb2JpbGU6IHJlc3BvbnNlLm1vYmlsZSxcclxuICAgICAgICAgIGNvbnRlbnQ6IHJlc3BvbnNlLmNvbnRlbnQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXF1ZXN0UHJvZmlsZUVkaXQoZGF0YSwgcmVzcG9uc2U/LmlkVG9rZW4gYXMgc3RyaW5nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7cmVzcG9uc2U/LmlkVG9rZW4gJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgey8qIDwhLS0gbWFpbiBzdGFydCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPCEtLSA9PT09PT09PT09PT09PT09IC0tPiAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0gcC0zMCBsaWdodC1ncmF5LWJnIGJvcmRlci1jbGVhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPntyZXNwb25zZS5lbWFpbH0ncyBQcm9maWxlIOyImOyglTwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIiBjbGFzc05hbWU9XCJmb3JtLWhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IGAke3Jlc3BvbnNlPy5jc3JmIGFzIHN0cmluZ31gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBob3RvXCI+UGhvdG8gVXBsb2FkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwaG90b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBob3RvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBob3RvLXRodW1iLWxpc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGhvdG8tZGVsZXRlLWZvcm1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduU2VsZjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlc3BvbnNlLnBob3RvICYmIHJlc3BvbnNlLnBob3RvICE9PSBcIlwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvdmVybGF5LWNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL21lZGlhLyR7cmVzcG9uc2UucGhvdG99YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3Jlc3BvbnNlLnBob3RvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+PC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmdWxsTmFtZVwiIHN0eWxlPXt7IGRpc3BsYXk6IFwiYmxvY2tcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICDsnbTrpoRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmdWxsTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZ1bGxOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtyZXNwb25zZS5uYW1lIGFzIHN0cmluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICDsg53rhYTsm5TsnbxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJiaXJ0aERhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiaXJ0aERhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm15RGF0ZVBpY2tlciBmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJ5eXl5LU1NLWRkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5iaXJ0aGRheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG5ldyBEYXRlKGAke3Jlc3BvbnNlLmJpcnRoZGF5fWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbmV3IERhdGUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+IG9uQ2hhbmdlRGF0ZShkYXRlKX0gLy9vbmx5IHdoZW4gdmFsdWUgaGFzIGNoYW5nZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICDsoITtmZTrsojtmLhcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwaG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtyZXNwb25zZS5waG9uZV9udW1iZXIgYXMgc3RyaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIO2ctOuMgOyghO2ZlOuyiO2YuFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm1vYmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1vYmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cmVzcG9uc2UubW9iaWxlIGFzIHN0cmluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJjb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIOyGjOqwnOq4gFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXs3fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRleHRhcmVhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cmVzcG9uc2UuY29udGVudCBhcyBzdHJpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN1Ym1pdC1idG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg65Ox66GdXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY2xvc2UtYnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciB0ZXh0LXdoaXRlIG1sLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAg64KY6rCA6riwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihQcm9maWxlRWRpdCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=