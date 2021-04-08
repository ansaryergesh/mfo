webpackHotUpdate_N_E("pages/cabinet/continue",{

/***/ "./components/continue/ContinueStep3.js":
/*!**********************************************!*\
  !*** ./components/continue/ContinueStep3.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _defaults_defaultRelative__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../defaults/defaultRelative */ "./defaults/defaultRelative.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _defaults_validations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../defaults/validations */ "./defaults/validations.js");
/* harmony import */ var _defaults_validationredux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../defaults/validationredux */ "./defaults/validationredux.js");




var _jsxFileName = "E:\\icredit\\server-zaymi\\zaymikz \u2014 \u043A\u043E\u043F\u0438\u044F\\components\\continue\\ContinueStep3.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var _onSubmit = function onSubmit(values) {};

var IinMask = function IinMask(_ref) {
  var field = _ref.field,
      form = _ref.form,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["field", "form"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_input_mask__WEBPACK_IMPORTED_MODULE_5___default.a, _objectSpread(_objectSpread({
    mask: "999999999",
    maskChar: " ",
    className: "my-input",
    type: "tel"
  }, field), props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 47
  }, _this);
};

_c = IinMask;

var GivenDate = function GivenDate(_ref2) {
  var field = _ref2.field,
      form = _ref2.form,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["field", "form"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_input_mask__WEBPACK_IMPORTED_MODULE_5___default.a, _objectSpread(_objectSpread({
    mask: "99.99.9999",
    maskChar: " ",
    type: "tel",
    className: "my-input"
  }, field), props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 49
  }, _this);
};

_c2 = GivenDate;

var IbanN = function IbanN(_ref3) {
  var field = _ref3.field,
      form = _ref3.form,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, ["field", "form"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_input_mask__WEBPACK_IMPORTED_MODULE_5___default.a, _objectSpread(_objectSpread({
    mask: "KZ******************",
    placeholder: "KZ",
    className: "my-input"
  }, field), props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 45
  }, _this);
};

_c3 = IbanN;

var CardNumber = function CardNumber(_ref4) {
  var field = _ref4.field,
      form = _ref4.form,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref4, ["field", "form"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_input_mask__WEBPACK_IMPORTED_MODULE_5___default.a, _objectSpread(_objectSpread({
    mask: "9999-9999-9999-9999",
    maskChar: " ",
    type: "tel",
    className: "my-input"
  }, field), props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 50
  }, _this);
};

_c4 = CardNumber;

var CardExp = function CardExp(_ref5) {
  var field = _ref5.field,
      form = _ref5.form,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref5, ["field", "form"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_input_mask__WEBPACK_IMPORTED_MODULE_5___default.a, _objectSpread(_objectSpread({
    mask: "99/99",
    maskChar: " ",
    type: "tel",
    className: "my-input"
  }, field), props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 47
  }, _this);
};

_c5 = CardExp;

var ContinueStep3 = function ContinueStep3(_ref6) {
  _s();

  var step = _ref6.step,
      setStep = _ref6.setStep,
      stepResult = _ref6.stepResult;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      checked = _useState[0],
      setChecked = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      iban = _useState2[0],
      setIban = _useState2[1];

  var ibanText = Object(_defaults_validationredux__WEBPACK_IMPORTED_MODULE_8__["isValidIBANNumber"])(iban);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_6__["Formik"], {
      initialValues: {
        UF_31: '',
        UF_33: '',
        UF_32: '',
        UF_34: '',
        UF_35: '',
        UF_36: '',
        UF_37: '',
        UF_38: '',
        UF_39: '',
        UF_40: '',
        UF_41: '',
        UF_42: '',
        UF_43: '',
        UF_44: '',
        UF_45: '',
        UF_46: '',
        UF_47: ''
      },
      onSubmit: function onSubmit(values) {
        _onSubmit(values);
      },
      children: function children(_ref7) {
        var errors = _ref7.errors,
            touched = _ref7.touched,
            isValidating = _ref7.isValidating,
            isSubmitting = _ref7.isSubmitting;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_6__["Form"], {
          className: "container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
            className: "mt-5 mb-5",
            children: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u043C\u0435\u0441\u0442\u0435 \u0440\u0430\u0431\u043E\u0442\u044B"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "row form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "col-md-12 mb-3",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                htmlFor: "",
                children: "\u041C\u0435\u0441\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u044B *"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 11
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_6__["Field"], {
                validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_7__["requiredd"],
                name: "UF_31",
                className: "form-control",
                placeholder: "\u041C\u0435\u0441\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u044B"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 11
              }, _this), errors.UF_31 && touched.UF_31 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                className: "text-danger",
                children: errors.UF_31
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 45
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 9
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "col-md-6 mb-3",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                htmlFor: "",
                children: "\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C *"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 11
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_6__["Field"], {
                as: "select",
                validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_7__["requiredd"],
                name: "UF_33",
                className: "form-control",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                  value: "",
                  disabled: true,
                  selected: true,
                  children: "\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 13
                }, _this), _defaults_defaultRelative__WEBPACK_IMPORTED_MODULE_4__["speciality"].map(function (spec) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                    value: spec.id,
                    children: spec.name
                  }, spec.id, false, {
                    fileName: _jsxFileName,
                    lineNumber: 128,
                    columnNumber: 15
                  }, _this);
                })]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 11
              }, _this), errors.UF_33 && touched.UF_33 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                className: "text-danger",
                children: errors.UF_33
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 45
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 9
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "col-md-6 mb-3",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                htmlFor: "",
                children: "\u0421\u0442\u0430\u0436 \u0440\u0430\u0431\u043E\u0442\u044B \u043D\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u043C \u043C\u0435\u0441\u0442\u0435 \u0440\u0430\u0431\u043E\u0442\u044B *"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 11
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_6__["Field"], {
                validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_7__["requiredd"],
                as: "select",
                name: "UF_32",
                className: "form-control",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                  value: "",
                  disabled: true,
                  selected: true,
                  children: "\u0421\u0442\u0430\u0436 \u0440\u0430\u0431\u043E\u0442\u044B"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 13
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                  value: "\u0434\u043E 3\u043C\u0435\u0441.",
                  children: "\u0434\u043E 3\u043C\u0435\u0441."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 13
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                  value: "\u0434\u043E 4-6\u043C\u0435\u0441.",
                  children: "\u0434\u043E 4-6\u043C\u0435\u0441."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 13
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                  value: "\u0434\u043E 7-12\u043C\u0435\u0441.",
                  children: "\u0434\u043E 7-12\u043C\u0435\u0441."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 13
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                  value: "\u043E\u0442 1 \u0434\u043E 2\u043B\u0435\u0442",
                  children: "\u043E\u0442 1 \u0434\u043E 2\u043B\u0435\u0442"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 143,
                  columnNumber: 13
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                  value: "\u043E\u0442 2 \u0434\u043E 5\u043B\u0435\u0442",
                  children: "\u043E\u0442 2 \u0434\u043E 5\u043B\u0435\u0442"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 13
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 11
              }, _this), errors.UF_32 && touched.UF_32 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                className: "text-danger",
                children: errors.UF_32
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 45
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 9
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
              className: "col-md-12 mt-5 mb-5",
              children: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u0443\u0434. \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 9
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "col-md-6 mb-3",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                htmlFor: "",
                children: "\u041C\u0435\u0441\u0442\u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F *"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 150,
                columnNumber: 11
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_6__["Field"], {
                validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_7__["requiredd"],
                name: "UF_46",
                className: "form-control"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 11
              }, _this), errors.UF_46 && touched.UF_46 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                className: "text-danger",
                children: errors.UF_46
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 45
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 9
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "col-md-6 mb-3",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                htmlFor: "",
                children: "\u041D\u043E\u043C\u0435\u0440 \u0443\u0434\u043E\u0441\u0442\u0432\u043E\u0440\u0435\u043D\u0438\u044F \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438 *"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 11
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_6__["Field"], {
                validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_7__["idNumber"],
                name: "UF_42",
                className: "form-control",
                component: IinMask
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 11
              }, _this), errors.UF_42 && touched.UF_42 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                className: "text-danger",
                children: errors.UF_42
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 45
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 9
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "col-md-6 mb-3",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                htmlFor: "",
                children: "\u0414\u0430\u0442\u0430 \u0432\u044B\u0434\u0430\u0447\u0438(\u0434\u0434.\u043C\u043C.\u0433\u0433\u0433\u0433) * :"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 11
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "input-group",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_6__["Field"], {
                  name: "UF_43",
                  className: "form-control",
                  validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_7__["CheckGivedDate"],
                  component: GivenDate
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 171,
                  columnNumber: 13
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                  className: "hint",
                  children: "\u0414\u0430\u0442\u0430 \u0432\u044B\u0434\u0430\u0447\u0438 (\u0414\u0414.\u041C\u041C.\u0413\u0413\u0413\u0413)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 173,
                  columnNumber: 11
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 11
              }, _this), errors.UF_43 && touched.UF_43 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                className: "text-danger",
                children: errors.UF_43
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 45
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 9
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "col-md-6 mb-3",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                htmlFor: "",
                children: "\u0421\u0440\u043E\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F (\u0434\u0434.\u043C\u043C.\u0433\u0433\u0433\u0433) * :"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 178,
                columnNumber: 11
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "input-group",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_6__["Field"], {
                  name: "UF_44",
                  className: "form-control",
                  validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_7__["CheckExpDate"],
                  component: GivenDate
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 182,
                  columnNumber: 11
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                  className: "hint",
                  children: "\u0421\u0440\u043E\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F  (\u0414\u0414.\u041C\u041C.\u0413\u0413\u0413\u0413)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 184,
                  columnNumber: 11
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 181,
                columnNumber: 11
              }, _this), errors.UF_44 && touched.UF_44 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                className: "text-danger",
                children: errors.UF_44
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 45
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 9
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "col-md-6 mb-3",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                htmlFor: "",
                children: "\u041A\u0435\u043C \u0432\u044B\u0434\u0430\u043D\u043E *"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 189,
                columnNumber: 11
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_6__["Field"], {
                as: "select",
                name: "UF_45",
                validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_7__["requiredd"],
                className: "form-control",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                  value: "",
                  disabled: true,
                  selected: true,
                  children: "\u041A\u0435\u043C \u0432\u044B\u0434\u0430\u043D\u043E"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 193,
                  columnNumber: 13
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                  value: "\u041C\u042E \u0420\u041A",
                  children: "\u041C\u042E \u0420\u041A"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 194,
                  columnNumber: 13
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                  value: "\u041C\u0412\u0414 \u0420\u041A",
                  children: "\u041C\u0412\u0414 \u0420\u041A"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 195,
                  columnNumber: 13
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 192,
                columnNumber: 11
              }, _this), errors.UF_45 && touched.UF_45 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                className: "text-danger",
                children: errors.UF_45
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 45
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 9
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "col-md-6 mb-3",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                children: "\u0414\u043E\u0445\u043E\u0434 *"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 201,
                columnNumber: 11
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_6__["Field"], {
                validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_7__["requiredd"],
                autocomplete: "off",
                name: "UF_34",
                className: "form-control",
                type: "number"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 202,
                columnNumber: 11
              }, _this), errors.UF_34 && touched.UF_34 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                className: "text-danger",
                children: errors.UF_34
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 203,
                columnNumber: 45
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 9
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "col-md-6 mb-3",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                children: "\u041E\u0441\u0442\u0430\u0442\u043E\u043A \u043D\u0430 \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u0435 *"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 207,
                columnNumber: 11
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "input-group",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_6__["Field"], {
                  validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_7__["requiredd"],
                  name: "UF_40",
                  autocomplete: "off",
                  className: "form-control",
                  type: "number"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 209,
                  columnNumber: 13
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                  className: "hint",
                  children: "\u0427\u0435\u043C \u0431\u043E\u043B\u044C\u0448\u0435 \u0441\u0443\u043C\u043C\u0430 \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u0430 \u0442\u0435\u043C \u0431\u043E\u043B\u044C\u0448\u0435 \u0441\u0443\u043C\u043C\u0430 \u043F\u0440\u0438 \u043E\u0434\u043E\u0431\u0440\u0435\u043D\u0438\u0438 \u0437\u0430\u0438\u043C\u0430"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 210,
                  columnNumber: 13
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 208,
                columnNumber: 11
              }, _this), errors.UF_40 && touched.UF_40 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                className: "text-danger",
                children: errors.UF_40
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 212,
                columnNumber: 45
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 9
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "col-md-6 mb-3",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                children: "\u0421\u0443\u043C\u043C\u0430 *"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 215,
                columnNumber: 11
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_6__["Field"], {
                validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_7__["requiredd"],
                name: "UF_41",
                type: "number",
                placeholder: "\u0421\u0443\u043C\u043C\u0430 \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \u043A\u0440\u0435\u0434\u0438\u0442\u043E\u0432:",
                className: "form-control",
                disabled: checked
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 216,
                columnNumber: 11
              }, _this), errors.UF_41 && touched.UF_41 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                className: "text-danger",
                children: errors.UF_41
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 217,
                columnNumber: 45
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 214,
              columnNumber: 9
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "col-md-6 mb-3",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                children: "\u0421\u0443\u043C\u043C\u0430 \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439 \u0437\u0430\u043A\u0440\u044B\u0442\u044B\u0445 \u043A\u0440\u0435\u0434\u0438\u0442\u043E\u0432 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 6 \u043C\u0435\u0441. *"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 221,
                columnNumber: 11
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_6__["Field"], {
                validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_7__["requiredd"],
                name: "UF_39",
                type: "number",
                className: "form-control"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 222,
                columnNumber: 11
              }, _this), errors.UF_39 && touched.UF_39 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                className: "text-danger",
                children: errors.UF_39
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 223,
                columnNumber: 45
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 9
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "col-md-6 mb-3",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                children: "IBAN \u0441\u0447\u0435\u0442 *"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 227,
                columnNumber: 11
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "input-group",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_6__["Field"], {
                  className: "form-control",
                  name: "UF_35",
                  validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_7__["isValidIBANNumber2"],
                  component: IbanN
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 229,
                  columnNumber: 13
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                  className: "hint",
                  children: "\u041D\u043E\u043C\u0435\u0440 \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u043E\u0433\u043E \u0441\u0447\u0435\u0442\u0430"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 230,
                  columnNumber: 13
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 228,
                columnNumber: 11
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 9
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "button form-group mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
              type: "submit ",
              className: "",
              children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 262,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 261,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 5
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 5
  }, _this);
};

_s(ContinueStep3, "ayc0Slpe4IvR6ml9WApg5oJxRYc=");

_c6 = ContinueStep3;
/* harmony default export */ __webpack_exports__["default"] = (ContinueStep3);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "IinMask");
$RefreshReg$(_c2, "GivenDate");
$RefreshReg$(_c3, "IbanN");
$RefreshReg$(_c4, "CardNumber");
$RefreshReg$(_c5, "CardExp");
$RefreshReg$(_c6, "ContinueStep3");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./defaults/validationredux.js":
/*!*************************************!*\
  !*** ./defaults/validationredux.js ***!
  \*************************************/
/*! exports provided: required, validEmail, acceptCirrilic, confirmPassword, checkAlphabet, passwordCheck, iin, phoneCheck, isValidIBANNumber, isValidIBANNumber2, givenDateCardId, expDateCardId, onlyEnglish, checkStringName, idNumber, isExpDateOfCardValid, checkCardValid, validage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "required", function() { return required; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validEmail", function() { return validEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "acceptCirrilic", function() { return acceptCirrilic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmPassword", function() { return confirmPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAlphabet", function() { return checkAlphabet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordCheck", function() { return passwordCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iin", function() { return iin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phoneCheck", function() { return phoneCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidIBANNumber", function() { return isValidIBANNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidIBANNumber2", function() { return isValidIBANNumber2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "givenDateCardId", function() { return givenDateCardId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expDateCardId", function() { return expDateCardId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyEnglish", function() { return onlyEnglish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkStringName", function() { return checkStringName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idNumber", function() { return idNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExpDateOfCardValid", function() { return isExpDateOfCardValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkCardValid", function() { return checkCardValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validage", function() { return validage; });
var _this = undefined;

var required = function required(val) {
  return val && val.length;
};
var validEmail = function validEmail(val) {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
};
var acceptCirrilic = function acceptCirrilic(val) {
  var falsy = /[a-zA-Z0-9_"*/]/i.test(val);

  if (falsy === false) {
    return true;
  }

  return false;
};
var confirmPassword = function confirmPassword(allValues) {
  if ( false || allValues.password) {
    if (allValues.password === allValues.password_confirmation) {
      return true;
    }
  }

  return false;
};
var checkAlphabet = function checkAlphabet(val) {
  return /[a-zA-Z0-9_]/i.test(val);
};
var passwordCheck = function passwordCheck(val) {
  if (val && val.length < 5) return false;
  if (!val) return false;
  return true;
};
var iin = function iin(val) {
  if (val && val.length !== 12) return false;
  if (!val) return false;
  var b1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  var b2 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2];
  var a = [];
  var controll = 0;

  for (var i = 0; i < 12; i++) {
    a[i] = parseInt(val.substring(i, i + 1));
    if (i < 11) controll += a[i] * b1[i];
  }

  controll = controll % 11;

  if (controll == 10) {
    controll = 0;

    for (var i = 0; i < 11; i++) {
      controll += a[i] * b2[i];
    }

    controll = controll % 11;
  }

  if (controll != a[11]) return false;
  return true;
};
var phoneCheck = function phoneCheck(val) {
  var PHONE_OPERATORS = [{
    id: '7700'
  }, {
    id: '7701'
  }, {
    id: '7702'
  }, {
    id: '7705'
  }, {
    id: '7706'
  }, {
    id: '7707'
  }, {
    id: '7708'
  }, {
    id: '7747'
  }, {
    id: '7771'
  }, {
    id: '7775'
  }, {
    id: '7776'
  }, {
    id: '7777'
  }, {
    id: '7778'
  }];
  var phone = String(val).replace(/[^A-Z0-9]/g, ''),
      code = phone.match(/^(\d{4})(\d{3})(\d{4})$/);

  if (!code || phone.length !== 11) {
    return false;
  }

  var phone_number = code[1];
  var phone_operator = PHONE_OPERATORS.filter(function (item) {
    return item.id == phone_number;
  });

  if (phone_operator.length > 0) {
    return true;
  } else {
    return false;
  }
}; // Luna algo

var isValidIBANNumber = function isValidIBANNumber(input) {
  var CODE_LENGTHS = 20;
  var BANKS = [{
    id: '947',
    name: 'АО "Дочерний Банк "АЛЬФА-БАНК"'
  }, {
    id: '826',
    name: 'АО "АТФБанк"'
  }, {
    id: '913',
    name: 'АО ДБ "БАНК КИТАЯ В КАЗАХСТАНЕ"'
  }, {
    id: '722',
    name: 'АО "KASPI BANK"'
  }, {
    id: '766',
    name: 'АО "Центральный Депозитарий Ценных Бумаг"'
  }, {
    id: '832',
    name: 'АО "Ситибанк Казахстан"'
  }, {
    id: '907',
    name: 'АО "Банк Развития Казахстана"'
  }, {
    id: '700',
    name: 'ЕВРАЗИЙСКИЙ БАНК РАЗВИТИЯ'
  }, {
    id: '948',
    name: 'АО "Евразийский Банк"'
  }, {
    id: '009',
    name: 'НАО Государственная корпорация "Правительство для граждан"'
  }, {
    id: '972',
    name: 'АО "Жилстройсбербанк Казахстана"'
  }, {
    id: '246',
    name: 'АО "Исламский Банк "Al Hilal"'
  }, {
    id: '601',
    name: 'АО "Народный Банк Казахстана"'
  }, {
    id: '930',
    name: 'АО "Торгово-промышленный Банк Китая в г. Алматы"'
  }, {
    id: '550',
    name: 'г.Москва Межгосударственный Банк'
  }, {
    id: '886',
    name: 'ДБ АО "Хоум Кредит энд Финанс Банк"'
  }, {
    id: '965',
    name: 'АО "ForteBank"'
  }, {
    id: '927',
    name: 'АО "Казахстанская фондовая биржа"'
  }, {
    id: '821',
    name: 'АО "Банк "Bank RBK"'
  }, {
    id: '224',
    name: 'РГП "Казахстанский центр межбанковских расчетов НБРК"'
  }, {
    id: '070',
    name: 'РГУ "Комитет казначейства Министерства финансов РК"'
  }, {
    id: '551',
    name: 'АО "Банк Kassa Nova" (Дочерний банк АО "ForteBank")'
  }, {
    id: '885',
    name: 'АО "ДБ "КАЗАХСТАН-ЗИРААТ ИНТЕРНЕШНЛ БАНК"'
  }, {
    id: '774',
    name: 'АО "AsiaCredit Bank (АзияКредит Банк)" '
  }, {
    id: '553',
    name: 'АО ДБ "Национальный Банк Пакистана" в Казахстане'
  }, {
    id: '147',
    name: '"Банк-кастодиан АО  "ЕНПФ"'
  }, {
    id: '125',
    name: 'РГУ Национальный Банк Республики Казахстан'
  }, {
    id: '849',
    name: 'АО "Нурбанк"'
  }, {
    id: '914',
    name: 'ДБ АО "Сбербанк"'
  }, {
    id: '435',
    name: 'АО "Шинхан Банк Казахстан"'
  }, {
    id: '781',
    name: 'АО "Capital Bank Kazakhstan"'
  }, {
    id: '620',
    name: 'АО "Tengri Bank"'
  }, {
    id: '998',
    name: 'АО "First Heartland Jysan Bank"'
  }, {
    id: '432',
    name: 'ДО АО Банк ВТБ (Казахстан)'
  }, {
    id: '896',
    name: 'АО "Исламский банк "Заман-Банк"'
  }, ''];
  var iban = String(input).toUpperCase().replace(/[^A-Z0-9]/g, ''),
      code = iban.match(/^([A-Z]{2})(\d{2})(\d{3})([A-Z\d]+)$/),
      digits;

  if (!code || iban.length !== CODE_LENGTHS) {
    return 'Заполните поле до конца';
    return false;
  }

  var bank_code = code[3];
  var bank = BANKS.filter(function (item) {
    return item.id == bank_code;
  });

  if (bank.length > 0) {
    return bank[0].name;
  } else {
    return "Некорректный счет";
    return false;
  }

  digits = (code[3] + code[4] + code[1] + code[2]).replace(/[A-Z]/g, function (letter) {
    return letter.charCodeAt(0) - 55;
  });

  if (_this.mod97(digits) === 1) {
    return true;
  } else {
    return "Неправильно";
  }
};
var isValidIBANNumber2 = function isValidIBANNumber2(input) {
  var CODE_LENGTHS = 20;
  var BANKS = [{
    id: '947',
    name: 'АО "Дочерний Банк "АЛЬФА-БАНК"'
  }, {
    id: '826',
    name: 'АО "АТФБанк"'
  }, {
    id: '949',
    name: 'АО "Altyn Bank" (ДБ China Citic Bank Corporation Limited) '
  }, {
    id: '913',
    name: 'АО ДБ "БАНК КИТАЯ В КАЗАХСТАНЕ"'
  }, {
    id: '722',
    name: 'АО "KASPI BANK"'
  }, {
    id: '766',
    name: 'АО "Центральный Депозитарий Ценных Бумаг"'
  }, {
    id: '832',
    name: 'АО "Ситибанк Казахстан"'
  }, {
    id: '907',
    name: 'АО "Банк Развития Казахстана"'
  }, {
    id: '700',
    name: 'ЕВРАЗИЙСКИЙ БАНК РАЗВИТИЯ'
  }, {
    id: '948',
    name: 'АО "Евразийский Банк"'
  }, {
    id: '009',
    name: 'НАО Государственная корпорация "Правительство для граждан"'
  }, {
    id: '972',
    name: 'АО "Жилстройсбербанк Казахстана"'
  }, {
    id: '246',
    name: 'АО "Исламский Банк "Al Hilal"'
  }, {
    id: '601',
    name: 'АО "Народный Банк Казахстана"'
  }, {
    id: '930',
    name: 'АО "Торгово-промышленный Банк Китая в г. Алматы"'
  }, {
    id: '550',
    name: 'г.Москва Межгосударственный Банк'
  }, {
    id: '886',
    name: 'ДБ АО "Хоум Кредит энд Финанс Банк"'
  }, {
    id: '965',
    name: 'АО "ForteBank"'
  }, {
    id: '927',
    name: 'АО "Казахстанская фондовая биржа"'
  }, {
    id: '821',
    name: 'АО "Банк "Bank RBK"'
  }, {
    id: '224',
    name: 'РГП "Казахстанский центр межбанковских расчетов НБРК"'
  }, {
    id: '070',
    name: 'РГУ "Комитет казначейства Министерства финансов РК"'
  }, {
    id: '563',
    name: 'АО "КАЗПОЧТА"'
  }, {
    id: '551',
    name: 'АО "Банк Kassa Nova" (Дочерний банк АО "ForteBank")'
  }, {
    id: '885',
    name: 'АО "ДБ "КАЗАХСТАН-ЗИРААТ ИНТЕРНЕШНЛ БАНК"'
  }, {
    id: '774',
    name: 'АО "AsiaCredit Bank (АзияКредит Банк)" '
  }, {
    id: '553',
    name: 'АО ДБ "Национальный Банк Пакистана" в Казахстане'
  }, {
    id: '147',
    name: '"Банк-кастодиан АО  "ЕНПФ"'
  }, {
    id: '125',
    name: 'РГУ Национальный Банк Республики Казахстан'
  }, {
    id: '849',
    name: 'АО "Нурбанк"'
  }, {
    id: '914',
    name: 'ДБ АО "Сбербанк"'
  }, {
    id: '435',
    name: 'АО "Шинхан Банк Казахстан"'
  }, {
    id: '781',
    name: 'АО "Capital Bank Kazakhstan"'
  }, {
    id: '620',
    name: 'АО "Tengri Bank"'
  }, {
    id: '998',
    name: 'АО "First Heartland Jysan Bank"'
  }, {
    id: '432',
    name: 'ДО АО Банк ВТБ (Казахстан)'
  }, {
    id: '896',
    name: 'АО "Исламский банк "Заман-Банк"'
  }, ''];
  var iban = String(input).toUpperCase().replace(/[^A-Z0-9]/g, ''),
      code = iban.match(/^([A-Z]{2})(\d{2})(\d{3})([A-Z\d]+)$/),
      digits;

  if (!code || iban.length !== CODE_LENGTHS) {
    // return 'Заполните поле до конца'
    return false;
  }

  var bank_code = code[3];
  var bank = BANKS.filter(function (item) {
    return item.id == bank_code;
  });

  if (bank.length > 0) {
    return true;
  } else {
    return false;
  }

  digits = (code[3] + code[4] + code[1] + code[2]).replace(/[A-Z]/g, function (letter) {
    return letter.charCodeAt(0) - 55;
  });

  if (_this.mod97(digits) === 1) {
    return true;
  } else {
    return false;
  }
}; // Third step

var givenDateCardId = function givenDateCardId(val) {
  var res = String(val).replace(/_/g, "");

  if (res.length !== 10) {
    return false;
  }

  var myDate = new Date(val.substring(6, 10) + '-' + val.substring(3, 5) + '-' + val.substring(0, 2));

  if (myDate == 'Invalid Date') {
    return false;
  }

  var today = new Date();
  var todayM = today.getMonth() + 1;
  var todayD = today.getDate();
  var todayY = today.getFullYear();
  var myM = myDate.getMonth() + 1;
  var myD = myDate.getDate();
  var myY = myDate.getFullYear();

  if (myY > todayY) {
    return false;
  }

  if (myY < todayY - 25) {
    return false;
  }

  if (myY === todayY) {
    if (myM === todayM && myD > todayD) {
      return false;
    }

    if (myM > todayM) {
      return false;
    }

    return true;
  }

  return true;
};
var expDateCardId = function expDateCardId(val) {
  var res = String(val).replace(/_/g, "");

  if (res.length !== 10) {
    return false;
  }

  var myDate = new Date(val.substring(6, 10) + '-' + val.substring(3, 5) + '-' + val.substring(0, 2));

  if (myDate == 'Invalid Date') {
    return false;
  }

  var today = new Date();
  var todayM = today.getMonth() + 1;
  var todayD = today.getDate();
  var todayY = today.getFullYear();
  var myM = myDate.getMonth() + 1;
  var myD = myDate.getDate();
  var myY = myDate.getFullYear();

  if (myY < todayY) {
    return false;
  }

  return true;
}; // export const givenDateCardId = (val) => {
//     var res = String(val).replace(/_/g, "");
//     if(res.length !== 10) {
//         return false
//     }
//     // 02.05.1999
// 	// const myDate = new Date(val);
// 	const today = new Date()
// 	var todayM = today.getMonth() + 1;
// 	var todayD = today.getDay();
// 	var todayY = today.getFullYear();
// 	var myM = () => {
//         if(val[3] == 0) {
//             return val[4]
//         }
//         else {
//             return val.substring(3,5);
//         }
//     };
//     var myD = () => {
//         if(val[0] == 0) {
//             return val[1]
//         }
//         else {
//             return val.substring(0,2);
//         }
//     };
// 	var myY = val.substring(6,9)
// 	if(myY>todayY) {
// 		return false;
// 	}
// 	if(myY < todayY-11) {
// 		return false;
// 	}
// 	if(myY === todayY) {
// 		if(myM === todayM && myD > todayD) {
// 			return false
// 		}
// 		if(myM > todayM) {
// 			return false
// 		}
// 		return true
// 	}
// 	return true
// }

var onlyEnglish = function onlyEnglish(val) {
  return /^[a-zA-Z\s]*$/.test(val);
};
var checkStringName = function checkStringName(val) {
  if (val && val.replace(/\s+$/, '').split(/\W+/).length === 2) {
    return true;
  }

  return false;
};
var idNumber = function idNumber(val) {
  var res = String(val).replace(/_/g, "");

  if (res.length !== 9) {
    return false;
  } else {
    return true;
  }
};
var isExpDateOfCardValid = function isExpDateOfCardValid(input) {
  var expDate = String(input).toUpperCase().replace(/[^0-9]/g, '');
  var date = expDate.match(/^(\d{2})(\d{2})$/);

  if (expDate.length === 4) {
    if (date[1] > 12 || date[2] < 20) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};
var checkCardValid = function checkCardValid(value) {
  if (/[^0-9-\s]+/.test(value)) return false;
  var nCheck = 0,
      nDigit = 0,
      bEven = false;
  value = value.replace(/\D/g, "");

  if (value.length !== 16) {
    return false;
  } else {
    for (var n = value.length - 1; n >= 0; n--) {
      var cDigit = value.charAt(n),
          _nDigit = parseInt(cDigit, 10);

      if (bEven) {
        if ((_nDigit *= 2) > 9) _nDigit -= 9;
      }

      nCheck += _nDigit;
      bEven = !bEven;
    }

    if (nCheck % 10 !== 0) {
      return false;
    } else {
      return true;
    }
  }
};

function year(dateString) {
  if (dateString[0] == 0) {
    return '20' + dateString.substring(0, 2);
  }

  return '19' + dateString.substring(0, 2);
}

function getAge(dateString) {
  var now = new Date();
  var yearNow = now.getYear();
  var monthNow = now.getMonth();
  var dateNow = now.getDate();
  var dob = new Date(year(dateString), dateString.substring(2, 4) - 1, dateString.substring(4, 6));
  var yearDob = dob.getYear();
  var monthDob = dob.getMonth();
  var dateDob = dob.getDate();
  var age = {};
  var yearAge = yearNow - yearDob;
  if (monthNow >= monthDob) var monthAge = monthNow - monthDob;else {
    yearAge--;
    var monthAge = 12 + monthNow - monthDob;
  }
  if (dateNow >= dateDob) var dateAge = dateNow - dateDob;else {
    monthAge--;
    var dateAge = 31 + dateNow - dateDob;

    if (monthAge < 0) {
      monthAge = 11;
      yearAge--;
    }
  }
  age = {
    years: yearAge,
    months: monthAge,
    days: dateAge
  };
  return age.years;
}

var validage = function validage(iin) {
  if (getAge(iin) < 18 || getAge(iin) > 63) {
    return false;
  }

  return true;
};

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250aW51ZS9Db250aW51ZVN0ZXAzLmpzIiwid2VicGFjazovL19OX0UvLi9kZWZhdWx0cy92YWxpZGF0aW9ucmVkdXguanMiXSwibmFtZXMiOlsib25TdWJtaXQiLCJ2YWx1ZXMiLCJJaW5NYXNrIiwiZmllbGQiLCJmb3JtIiwicHJvcHMiLCJHaXZlbkRhdGUiLCJJYmFuTiIsIkNhcmROdW1iZXIiLCJDYXJkRXhwIiwiQ29udGludWVTdGVwMyIsInN0ZXAiLCJzZXRTdGVwIiwic3RlcFJlc3VsdCIsInVzZVN0YXRlIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJpYmFuIiwic2V0SWJhbiIsImliYW5UZXh0IiwiaXNWYWxpZElCQU5OdW1iZXIiLCJVRl8zMSIsIlVGXzMzIiwiVUZfMzIiLCJVRl8zNCIsIlVGXzM1IiwiVUZfMzYiLCJVRl8zNyIsIlVGXzM4IiwiVUZfMzkiLCJVRl80MCIsIlVGXzQxIiwiVUZfNDIiLCJVRl80MyIsIlVGXzQ0IiwiVUZfNDUiLCJVRl80NiIsIlVGXzQ3IiwiZXJyb3JzIiwidG91Y2hlZCIsImlzVmFsaWRhdGluZyIsImlzU3VibWl0dGluZyIsInJlcXVpcmVkZCIsInNwZWNpYWxpdHkiLCJtYXAiLCJzcGVjIiwiaWQiLCJuYW1lIiwiaWROdW1iZXIiLCJDaGVja0dpdmVkRGF0ZSIsIkNoZWNrRXhwRGF0ZSIsImlzVmFsaWRJQkFOTnVtYmVyMiIsInJlcXVpcmVkIiwidmFsIiwibGVuZ3RoIiwidmFsaWRFbWFpbCIsInRlc3QiLCJhY2NlcHRDaXJyaWxpYyIsImZhbHN5IiwiY29uZmlybVBhc3N3b3JkIiwiYWxsVmFsdWVzIiwicGFzc3dvcmQiLCJwYXNzd29yZF9jb25maXJtYXRpb24iLCJjaGVja0FscGhhYmV0IiwicGFzc3dvcmRDaGVjayIsImlpbiIsImIxIiwiYjIiLCJhIiwiY29udHJvbGwiLCJpIiwicGFyc2VJbnQiLCJzdWJzdHJpbmciLCJwaG9uZUNoZWNrIiwiUEhPTkVfT1BFUkFUT1JTIiwicGhvbmUiLCJTdHJpbmciLCJyZXBsYWNlIiwiY29kZSIsIm1hdGNoIiwicGhvbmVfbnVtYmVyIiwicGhvbmVfb3BlcmF0b3IiLCJmaWx0ZXIiLCJpdGVtIiwiaW5wdXQiLCJDT0RFX0xFTkdUSFMiLCJCQU5LUyIsInRvVXBwZXJDYXNlIiwiZGlnaXRzIiwiYmFua19jb2RlIiwiYmFuayIsImxldHRlciIsImNoYXJDb2RlQXQiLCJtb2Q5NyIsImdpdmVuRGF0ZUNhcmRJZCIsInJlcyIsIm15RGF0ZSIsIkRhdGUiLCJ0b2RheSIsInRvZGF5TSIsImdldE1vbnRoIiwidG9kYXlEIiwiZ2V0RGF0ZSIsInRvZGF5WSIsImdldEZ1bGxZZWFyIiwibXlNIiwibXlEIiwibXlZIiwiZXhwRGF0ZUNhcmRJZCIsIm9ubHlFbmdsaXNoIiwiY2hlY2tTdHJpbmdOYW1lIiwic3BsaXQiLCJpc0V4cERhdGVPZkNhcmRWYWxpZCIsImV4cERhdGUiLCJkYXRlIiwiY2hlY2tDYXJkVmFsaWQiLCJ2YWx1ZSIsIm5DaGVjayIsIm5EaWdpdCIsImJFdmVuIiwibiIsImNEaWdpdCIsImNoYXJBdCIsInllYXIiLCJkYXRlU3RyaW5nIiwiZ2V0QWdlIiwibm93IiwieWVhck5vdyIsImdldFllYXIiLCJtb250aE5vdyIsImRhdGVOb3ciLCJkb2IiLCJ5ZWFyRG9iIiwibW9udGhEb2IiLCJkYXRlRG9iIiwiYWdlIiwieWVhckFnZSIsIm1vbnRoQWdlIiwiZGF0ZUFnZSIsInllYXJzIiwibW9udGhzIiwiZGF5cyIsInZhbGlkYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFzQkE7O0FBR0EsSUFBTUEsU0FBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsTUFBRCxFQUFZLENBRTVCLENBRkQ7O0FBR0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFV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WUFBUTtBQUNSLFFBQUlDLE9BQU8sR0FBRyxLQUFLUixPQUFMLEdBQWVJLE9BQTdCOztBQUVBLFFBQUlHLFFBQVEsR0FBRyxDQUFmLEVBQWtCO0FBQ2hCQSxjQUFRLEdBQUcsRUFBWDtBQUNBRCxhQUFPO0FBQ1I7QUFDRjtBQUVERCxLQUFHLEdBQUc7QUFDRkksU0FBSyxFQUFFSCxPQURMO0FBRUZJLFVBQU0sRUFBRUgsUUFGTjtBQUdGSSxRQUFJLEVBQUVIO0FBSEosR0FBTjtBQU1BLFNBQU9ILEdBQUcsQ0FBQ0ksS0FBWDtBQUNIOztBQUdNLElBQU1HLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUM3RSxHQUFELEVBQVM7QUFDN0IsTUFBRzRELE1BQU0sQ0FBQzVELEdBQUQsQ0FBTixHQUFZLEVBQVosSUFBa0I0RCxNQUFNLENBQUM1RCxHQUFELENBQU4sR0FBWSxFQUFqQyxFQUFxQztBQUNqQyxXQUFPLEtBQVA7QUFDSDs7QUFDRCxTQUFPLElBQVA7QUFDSCxDQUxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhYmluZXQvY29udGludWUuMGU3OGQzYjc0YWU4MzFiNTE2NjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdvcm9kcywgcmVsYXRpdmVfdHlwZSwgc3BlY2lhbGl0eSB9IGZyb20gXCIuLi8uLi9kZWZhdWx0cy9kZWZhdWx0UmVsYXRpdmVcIjtcclxuaW1wb3J0IElucHV0TWFzayBmcm9tIFwicmVhY3QtaW5wdXQtbWFza1wiO1xyXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0sICBGaWVsZCAgfSBmcm9tICdmb3JtaWsnO1xyXG5pbXBvcnQge1xyXG4gIGlpblZhbGlkYXRpb24sXHJcbiAgcmVxdWlyZWQsXHJcbiAgcGhvbmVDaGVjayxcclxuICB2YWxpZEVtYWlsbCxcclxuICBwYXNzd29yZENoZWNrLFxyXG4gIHBob25lVmFsaWRhdGlvbixcclxuICBhY2NlcHRDaXJyaWxpYyxcclxuICBhY2NlcHRDaXJyaWxpY09ubHksXHJcbiAgdmFsaWRhdGVDb25maXJtUGFzc3dvcmQsXHJcbiAgdmFsaWRhZ2UsXHJcbiAgZ2V0QWdlLFxyXG4gIHJlcXVpcmVkZCxcclxuICB2YWxpZEVtYWlsLFxyXG4gIGlkTnVtYmVyLFxyXG4gIGNoZWNrSWROdW1iZXIsXHJcbiAgQ2hlY2tHaXZlZERhdGUsXHJcbiAgQ2hlY2tFeHBEYXRlLFxyXG4gIGlzVmFsaWRJQkFOTnVtYmVyMixcclxuICBvbmx5RW5nbGlzaCxcclxuICB0ZXh0Q2hlY2tDYXJkVmFsaWRcclxufSBmcm9tICcuLi8uLi9kZWZhdWx0cy92YWxpZGF0aW9ucyc7XHJcbmltcG9ydCB7IGlzVmFsaWRJQkFOTnVtYmVyIH0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzL3ZhbGlkYXRpb25yZWR1eFwiO1xyXG5cclxuXHJcbmNvbnN0IG9uU3VibWl0ID0gKHZhbHVlcykgPT4ge1xyXG5cclxufVxyXG5jb25zdCBJaW5NYXNrID0gKHsgZmllbGQsIGZvcm0sIC4uLnByb3BzfSkgPT4gPElucHV0TWFzayBcclxubWFzaz1cIjk5OTk5OTk5OVwiXHJcbiAgbWFza0NoYXI9IFwiIFwiXHJcbiAgY2xhc3NOYW1lPVwibXktaW5wdXRcIlxyXG4gIHR5cGU9J3RlbCdcclxuICB7Li4uZmllbGR9XHJcbiAgey4uLnByb3BzfSBcclxuLz5cclxuXHJcbmNvbnN0IEdpdmVuRGF0ZSA9ICh7IGZpZWxkLCBmb3JtLCAuLi5wcm9wc30pID0+IDxJbnB1dE1hc2sgXHJcbiAgbWFzaz1cIjk5Ljk5Ljk5OTlcIlxyXG4gIG1hc2tDaGFyPSBcIiBcIlxyXG4gIHR5cGU9J3RlbCdcclxuICBjbGFzc05hbWU9XCJteS1pbnB1dFwiXHJcbiAgey4uLmZpZWxkfVxyXG4gIHsuLi5wcm9wc30gXHJcbi8+XHJcblxyXG5jb25zdCBJYmFuTiA9ICh7IGZpZWxkLCBmb3JtLCAuLi5wcm9wc30pID0+IDxJbnB1dE1hc2sgXHJcbiAgbWFzaz1cIktaKioqKioqKioqKioqKioqKioqXCJcclxuICBwbGFjZWhvbGRlcj0nS1onXHJcblxyXG4gIGNsYXNzTmFtZT1cIm15LWlucHV0XCJcclxuICB7Li4uZmllbGR9XHJcbiAgey4uLnByb3BzfSBcclxuLz5cclxuXHJcbmNvbnN0IENhcmROdW1iZXIgPSAoeyBmaWVsZCwgZm9ybSwgLi4ucHJvcHN9KSA9PiA8SW5wdXRNYXNrIFxyXG4gIG1hc2s9XCI5OTk5LTk5OTktOTk5OS05OTk5XCJcclxuICBtYXNrQ2hhcj0gXCIgXCJcclxuICB0eXBlPSd0ZWwnXHJcbiAgY2xhc3NOYW1lPVwibXktaW5wdXRcIlxyXG4gIHsuLi5maWVsZH1cclxuICB7Li4ucHJvcHN9IFxyXG4vPlxyXG5cclxuY29uc3QgQ2FyZEV4cCA9ICh7IGZpZWxkLCBmb3JtLCAuLi5wcm9wc30pID0+IDxJbnB1dE1hc2sgXHJcbiAgbWFzaz1cIjk5Lzk5XCJcclxuICBtYXNrQ2hhcj0gXCIgXCJcclxuICB0eXBlPSd0ZWwnXHJcbiAgY2xhc3NOYW1lPVwibXktaW5wdXRcIlxyXG4gIHsuLi5maWVsZH1cclxuICB7Li4ucHJvcHN9IFxyXG4vPlxyXG5cclxuY29uc3QgQ29udGludWVTdGVwMyA9ICh7c3RlcCxzZXRTdGVwLCBzdGVwUmVzdWx0fSkgPT4ge1xyXG4gIFxyXG4gIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtpYmFuLHNldEliYW5dID0gdXNlU3RhdGUoJycpXHJcblxyXG4gIGNvbnN0IGliYW5UZXh0ID0gaXNWYWxpZElCQU5OdW1iZXIoaWJhbilcclxuICByZXR1cm4oXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Rm9ybWlrXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgIFVGXzMxOiAnJyxcclxuICAgICAgICBVRl8zMzogJycsXHJcbiAgICAgICAgVUZfMzI6ICcnLFxyXG4gICAgICAgIFVGXzM0OiAnJyxcclxuICAgICAgICBVRl8zNTogJycsXHJcbiAgICAgICAgVUZfMzY6ICcnLFxyXG4gICAgICAgIFVGXzM3OiAnJyxcclxuICAgICAgICBVRl8zODogJycsXHJcbiAgICAgICAgVUZfMzk6ICcnLFxyXG4gICAgICAgIFVGXzQwOiAnJyxcclxuICAgICAgICBVRl80MTogJycsXHJcbiAgICAgICAgVUZfNDI6ICcnLFxyXG4gICAgICAgIFVGXzQzOiAnJyxcclxuICAgICAgICBVRl80NDogJycsXHJcbiAgICAgICAgVUZfNDU6ICcnLFxyXG4gICAgICAgIFVGXzQ2OiAnJyxcclxuICAgICAgICBVRl80NzogJydcclxuICAgICAgfX1cclxuICAgICAgb25TdWJtaXQ9e3ZhbHVlcz0+IHtcclxuICAgICAgICBvblN1Ym1pdCh2YWx1ZXMpXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgeyh7IGVycm9ycywgdG91Y2hlZCwgaXNWYWxpZGF0aW5nLCBpc1N1Ym1pdHRpbmcgfSkgPT4gKFxyXG4gICAgPEZvcm0gY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwibXQtNSBtYi01XCI+0JjQvdGE0L7RgNC80LDRhtC40Y8g0L4g0LzQtdGB0YLQtSDRgNCw0LHQvtGC0Ys8L2gyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGZvcm0tZ3JvdXAnPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtMTIgbWItMyc+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nJz5cclxuICAgICAgICAgICAg0JzQtdGB0YLQviDRgNCw0LHQvtGC0YsgKlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxGaWVsZCB2YWxpZGF0ZT17cmVxdWlyZWRkfSBuYW1lPSdVRl8zMScgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHBsYWNlaG9sZGVyPSfQnNC10YHRgtC+INGA0LDQsdC+0YLRiyc+PC9GaWVsZD5cclxuICAgICAgICAgIHtlcnJvcnMuVUZfMzEgJiYgdG91Y2hlZC5VRl8zMSAmJiA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLlVGXzMxfTwvcD59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC02IG1iLTMnPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9Jyc+XHJcbiAgICAgICAgICAgINCU0L7Qu9C20L3QvtGB0YLRjCAqXHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPEZpZWxkIGFzPSdzZWxlY3QnIHZhbGlkYXRlPXtyZXF1aXJlZGR9ICBuYW1lPSdVRl8zMycgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgc2VsZWN0ZWQ+0JTQvtC70LbQvdC+0YHRgtGMPC9vcHRpb24+XHJcbiAgICAgICAgICAgIHtzcGVjaWFsaXR5Lm1hcChzcGVjID0+IChcclxuICAgICAgICAgICAgICA8b3B0aW9uIGtleT17c3BlYy5pZH0gdmFsdWU9e3NwZWMuaWR9PntzcGVjLm5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgIHtlcnJvcnMuVUZfMzMgJiYgdG91Y2hlZC5VRl8zMyAmJiA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLlVGXzMzfTwvcD59XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNiBtYi0zJz5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPScnPlxyXG4gICAgICAgICAgICDQodGC0LDQtiDRgNCw0LHQvtGC0Ysg0L3QsCDQv9C+0YHQu9C10LTQvdC10Lwg0LzQtdGB0YLQtSDRgNCw0LHQvtGC0YsgKlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxGaWVsZCB2YWxpZGF0ZT17cmVxdWlyZWRkfSBhcz0nc2VsZWN0JyBuYW1lPSdVRl8zMicgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgc2VsZWN0ZWQ+0KHRgtCw0LYg0YDQsNCx0L7RgtGLPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCLQtNC+IDPQvNC10YEuXCI+0LTQviAz0LzQtdGBLjwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwi0LTQviA0LTbQvNC10YEuXCI+0LTQviA0LTbQvNC10YEuPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCLQtNC+IDctMTLQvNC10YEuXCI+0LTQviA3LTEy0LzQtdGBLjwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwi0L7RgiAxINC00L4gMtC70LXRglwiPtC+0YIgMSDQtNC+IDLQu9C10YI8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cItC+0YIgMiDQtNC+IDXQu9C10YJcIj7QvtGCIDIg0LTQviA10LvQtdGCPC9vcHRpb24+XHJcbiAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAge2Vycm9ycy5VRl8zMiAmJiB0b3VjaGVkLlVGXzMyICYmIDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMuVUZfMzJ9PC9wPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY29sLW1kLTEyIG10LTUgbWItNVwiPtCY0L3RhNC+0YDQvNCw0YbQuNGPINC+INGD0LQuINC70LjRh9C90L7RgdGC0Lg8L2gyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNiBtYi0zJz5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPScnPlxyXG4gICAgICAgICAgICDQnNC10YHRgtC+INGA0L7QttC00LXQvdC40Y8gKlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxGaWVsZCB2YWxpZGF0ZT17cmVxdWlyZWRkfSBuYW1lPSdVRl80NicgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnPjwvRmllbGQ+XHJcbiAgICAgICAgICB7ZXJyb3JzLlVGXzQ2ICYmIHRvdWNoZWQuVUZfNDYgJiYgPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5VRl80Nn08L3A+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNiBtYi0zJz5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPScnPlxyXG4gICAgICAgICAgICDQndC+0LzQtdGAINGD0LTQvtGB0YLQstC+0YDQtdC90LjRjyDQu9C40YfQvdC+0YHRgtC4ICpcclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxGaWVsZCAgdmFsaWRhdGU9e2lkTnVtYmVyfSBuYW1lPSdVRl80MicgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIGNvbXBvbmVudD17SWluTWFza30+XHJcbiAgICAgICBcclxuICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICB7ZXJyb3JzLlVGXzQyICYmIHRvdWNoZWQuVUZfNDIgJiYgPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5VRl80Mn08L3A+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNiBtYi0zJz5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPScnPlxyXG4gICAgICAgICAgICDQlNCw0YLQsCDQstGL0LTQsNGH0Lgo0LTQtC7QvNC8LtCz0LPQs9CzKSAqIDpcclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZ3JvdXAnPlxyXG4gICAgICAgICAgICA8RmllbGQgbmFtZT0nVUZfNDMnIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyB2YWxpZGF0ZT17Q2hlY2tHaXZlZERhdGV9IGNvbXBvbmVudD17R2l2ZW5EYXRlfT48L0ZpZWxkPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpbnRcIj7QlNCw0YLQsCDQstGL0LTQsNGH0LggKNCU0JQu0JzQnC7Qk9CT0JPQkyk8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge2Vycm9ycy5VRl80MyAmJiB0b3VjaGVkLlVGXzQzICYmIDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMuVUZfNDN9PC9wPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYgbWItMyc+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nJz5cclxuICAgICAgICAgICAg0KHRgNC+0Log0LTQtdC50YHRgtCy0LjRjyAo0LTQtC7QvNC8LtCz0LPQs9CzKSAqIDpcclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZ3JvdXAnPlxyXG4gICAgICAgICAgPEZpZWxkIG5hbWU9J1VGXzQ0JyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgdmFsaWRhdGU9e0NoZWNrRXhwRGF0ZX0gY29tcG9uZW50PXtHaXZlbkRhdGV9PjwvRmllbGQ+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpbnRcIj7QodGA0L7QuiDQtNC10LnRgdGC0LLQuNGPICAo0JTQlC7QnNCcLtCT0JPQk9CTKTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7ZXJyb3JzLlVGXzQ0ICYmIHRvdWNoZWQuVUZfNDQgJiYgPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5VRl80NH08L3A+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNiBtYi0zJz5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPScnPlxyXG4gICAgICAgICAgICDQmtC10Lwg0LLRi9C00LDQvdC+ICpcclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8RmllbGQgYXM9J3NlbGVjdCcgbmFtZT0nVUZfNDUnIHZhbGlkYXRlPXtyZXF1aXJlZGR9IGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJz5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkPtCa0LXQvCDQstGL0LTQsNC90L48L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cItCc0K4g0KDQmlwiPtCc0K4g0KDQmjwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwi0JzQktCUINCg0JpcIj7QnNCS0JQg0KDQmjwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgIHtlcnJvcnMuVUZfNDUgJiYgdG91Y2hlZC5VRl80NSAmJiA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLlVGXzQ1fTwvcD59XHJcbiAgICAgICAgPC9kaXY+ICBcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC02IG1iLTMnPlxyXG4gICAgICAgICAgPGxhYmVsPtCU0L7RhdC+0LQgKjwvbGFiZWw+XHJcbiAgICAgICAgICA8RmllbGQgdmFsaWRhdGU9e3JlcXVpcmVkZH0gYXV0b2NvbXBsZXRlPSdvZmYnIG5hbWU9J1VGXzM0JyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgdHlwZT0nbnVtYmVyJz48L0ZpZWxkID5cclxuICAgICAgICAgIHtlcnJvcnMuVUZfMzQgJiYgdG91Y2hlZC5VRl8zNCAmJiA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLlVGXzM0fTwvcD59XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNiBtYi0zJz5cclxuICAgICAgICAgIDxsYWJlbD7QntGB0YLQsNGC0L7QuiDQvdCwINC00LXQv9C+0LfQuNGC0LUgKjwvbGFiZWw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZ3JvdXAnPlxyXG4gICAgICAgICAgICA8RmllbGQgdmFsaWRhdGU9e3JlcXVpcmVkZH0gbmFtZT0nVUZfNDAnIGF1dG9jb21wbGV0ZT0nb2ZmJyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgdHlwZT0nbnVtYmVyJz48L0ZpZWxkPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpbnRcIj7Qp9C10Lwg0LHQvtC70YzRiNC1INGB0YPQvNC80LAg0LTQtdC/0L7Qt9C40YLQsCDRgtC10Lwg0LHQvtC70YzRiNC1INGB0YPQvNC80LAg0L/RgNC4INC+0LTQvtCx0YDQtdC90LjQuCDQt9Cw0LjQvNCwPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtlcnJvcnMuVUZfNDAgJiYgdG91Y2hlZC5VRl80MCAmJiA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLlVGXzQwfTwvcD59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC02IG1iLTMnPlxyXG4gICAgICAgICAgPGxhYmVsPtCh0YPQvNC80LAgKjwvbGFiZWw+XHJcbiAgICAgICAgICA8RmllbGQgdmFsaWRhdGU9e3JlcXVpcmVkZH0gbmFtZT0nVUZfNDEnIHR5cGU9J251bWJlcicgcGxhY2Vob2xkZXI9J9Ch0YPQvNC80LAg0L/Qu9Cw0YLQtdC20LXQuSDQtNC10LnRgdGC0LLRg9GO0YnQuNGFINC60YDQtdC00LjRgtC+0LI6JyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgZGlzYWJsZWQ9e2NoZWNrZWR9PjwvRmllbGQ+XHJcbiAgICAgICAgICB7ZXJyb3JzLlVGXzQxICYmIHRvdWNoZWQuVUZfNDEgJiYgPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5VRl80MX08L3A+fVxyXG4gICAgICAgIDwvZGl2PiBcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC02IG1iLTMnPlxyXG4gICAgICAgICAgPGxhYmVsPtCh0YPQvNC80LAg0L/Qu9Cw0YLQtdC20LXQuSDQt9Cw0LrRgNGL0YLRi9GFINC60YDQtdC00LjRgtC+0LIg0L/QvtGB0LvQtdC00L3QuNC5IDYg0LzQtdGBLiAqPC9sYWJlbD5cclxuICAgICAgICAgIDxGaWVsZCB2YWxpZGF0ZT17cmVxdWlyZWRkfSBuYW1lPSdVRl8zOScgdHlwZT0nbnVtYmVyJyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgPjwvRmllbGQ+XHJcbiAgICAgICAgICB7ZXJyb3JzLlVGXzM5ICYmIHRvdWNoZWQuVUZfMzkgJiYgPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5VRl8zOX08L3A+fVxyXG4gICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC02IG1iLTMnPlxyXG4gICAgICAgICAgPGxhYmVsPklCQU4g0YHRh9C10YIgKjwvbGFiZWw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZ3JvdXAnPlxyXG4gICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIG5hbWU9J1VGXzM1JyB2YWxpZGF0ZT17aXNWYWxpZElCQU5OdW1iZXIyfSBjb21wb25lbnQ9e0liYW5OfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpbnRcIj7QndC+0LzQtdGAINCx0LDQvdC60L7QstGB0LrQvtCz0L4g0YHRh9C10YLQsDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiA8aDIgY2xhc3NOYW1lPVwiY29sLW1kLTEyIG10LTUgbWItNVwiPtCY0L3RhNC+0YDQvNCw0YbQuNGPINC+INGB0YfQtdGC0LDRhTwvaDI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgZm9ybS1ncm91cCc+XHJcbiAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYgbWItMyc+XHJcbiAgICAgICAgICA8bGFiZWw+0J3QvtC80LXRgCDQutCw0YDRgtGLICo8L2xhYmVsPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWdyb3VwJz5cclxuICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgbmFtZT0nVUZfMzYnIHZhbGlkYXRlPXt0ZXh0Q2hlY2tDYXJkVmFsaWR9IGNvbXBvbmVudD17Q2FyZE51bWJlcn0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge2Vycm9ycy5VRl8zNiAmJiB0b3VjaGVkLlVGXzM2ICYmIDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMuVUZfMzZ9PC9wPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYgbWItMyc+XHJcbiAgICAgICAgPGxhYmVsPtCU0LDRgtCwINC+0LrQsNC90YfQsNC90LjRjyAqPC9sYWJlbD5cclxuICAgICAgICA8RmllbGQgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIG5hbWU9J1VGXzM3JyBjb21wb25lbnQ9e0NhcmRFeHB9IC8+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNiBtYi0zJz5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj0nbmFtZV9vZl9vd25lcic+0JjQvNGPINCy0LvQsNC00LXQu9GM0YbQsCDQutCw0YDRgtGLINC70LDRgtC40L3RgdC60LjQvNC4INCx0YPQutCy0LDQvNC4ICogOlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZ3JvdXAnPlxyXG4gICAgICAgICAgICA8RmllbGQgdmFsaWRhdGU9e29ubHlFbmdsaXNofSBuYW1lPSdVRl8zOCcgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wgIGlucHV0LXVwcGVyY2FzZSBjYXJkTmFtZSc+PC9GaWVsZD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaW50XCI+0KLQvtC70YzQutC+INC90LAg0LvQsNGC0LjQvdGB0LrQvtC8PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbiBmb3JtLWdyb3VwIG1iLTVcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0IFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgICAgID7QntGC0L/RgNCw0LLQuNGC0Yw8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgPC9Gb3JtPlxyXG4gICl9XHJcbiAgICAgIDwvRm9ybWlrPlxyXG4gICAgICB7LyogPGZvcm0gY2xhc3NOYW1lPSdjb250YWluZXIgJz5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cIm10LTUgbWItNVwiPtCY0L3RhNC+0YDQvNCw0YbQuNGPINC+INC80LXRgdGC0LUg0YDQsNCx0L7RgtGLPC9oMj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgZm9ybS1ncm91cCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtMTIgbWItMyc+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9Jyc+XHJcbiAgICAgICAgICAgICAgICDQnNC10YHRgtC+INGA0LDQsdC+0YLRiyAqXHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXQgbmFtZT0nVUZfMzEnIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyBwbGFjZWhvbGRlcj0n0JzQtdGB0YLQviDRgNCw0LHQvtGC0YsnPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYgbWItMyc+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9Jyc+XHJcbiAgICAgICAgICAgICAgICDQlNC+0LvQttC90L7RgdGC0YwgKlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPHNlbGVjdCAgbmFtZT0nVUZfMzMnIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJz5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZCBzZWxlY3RlZD7QlNC+0LvQttC90L7RgdGC0Yw8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIHtzcGVjaWFsaXR5Lm1hcChzcGVjID0+IChcclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3NwZWMuaWR9IHZhbHVlPXtzcGVjLmlkfT57c3BlYy5uYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC02IG1iLTMnPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPScnPlxyXG4gICAgICAgICAgICAgICAg0KHRgtCw0LYg0YDQsNCx0L7RgtGLINC90LAg0L/QvtGB0LvQtdC00L3QtdC8INC80LXRgdGC0LUg0YDQsNCx0L7RgtGLICpcclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT0nVUZfMzInIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJz5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZCBzZWxlY3RlZD7QodGC0LDQtiDRgNCw0LHQvtGC0Ys8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCLQtNC+IDPQvNC10YEuXCI+0LTQviAz0LzQtdGBLjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cItC00L4gNC020LzQtdGBLlwiPtC00L4gNC020LzQtdGBLjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cItC00L4gNy0xMtC80LXRgS5cIj7QtNC+IDctMTLQvNC10YEuPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwi0L7RgiAxINC00L4gMtC70LXRglwiPtC+0YIgMSDQtNC+IDLQu9C10YI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCLQvtGCIDIg0LTQviA10LvQtdGCXCI+0L7RgiAyINC00L4gNdC70LXRgjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNvbC1tZC0xMiBtdC01IG1iLTVcIj7QmNC90YTQvtGA0LzQsNGG0LjRjyDQviDRg9C0LiDQu9C40YfQvdC+0YHRgtC4PC9oMj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC02IG1iLTMnPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPScnPlxyXG4gICAgICAgICAgICAgICAg0JzQtdGB0YLQviDRgNC+0LbQtNC10L3QuNGPICpcclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBuYW1lPSdVRl80NicgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYgbWItMyc+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9Jyc+XHJcbiAgICAgICAgICAgICAgICDQndC+0LzQtdGAINGD0LTQvtGB0YLQstC+0YDQtdC90LjRjyDQu9C40YfQvdC+0YHRgtC4ICpcclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxJbnB1dE1hc2tcclxuICAgICAgICAgICAgICBtYXNrPVwiOTk5OTk5OTk5XCJcclxuICAgICAgICAgICAgICBtYXNrQ2hhcj1cIiBcIlxyXG4gICAgICAgICAgICAgIG5hbWU9J1VGXzQyJ1xyXG4gICAgICAgICAgICAgIC8vIHBsYWNlaG9sZGVyPVwiKzcgIFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC02IG1iLTMnPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPScnPlxyXG4gICAgICAgICAgICAgICAg0JTQsNGC0LAg0LLRi9C00LDRh9C4KNC00LQu0LzQvC7Qs9Cz0LPQsykgKiA6XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZ3JvdXAnPlxyXG4gICAgICAgICAgICAgIDxJbnB1dE1hc2tcclxuICAgICAgICAgICAgICBtYXNrPVwiOTkuOTkuOTk5OVwiXHJcbiAgICAgICAgICAgICAgbWFza0NoYXI9XCIgXCJcclxuICAgICAgICAgICAgICBuYW1lPSdVRl80MydcclxuICAgICAgICAgICAgICAvLyBwbGFjZWhvbGRlcj1cIis3ICBcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpbnRcIj7QlNCw0YLQsCDQstGL0LTQsNGH0LggKNCU0JQu0JzQnC7Qk9CT0JPQkyk8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC02IG1iLTMnPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPScnPlxyXG4gICAgICAgICAgICAgICAg0KHRgNC+0Log0LTQtdC50YHRgtCy0LjRjyAo0LTQtC7QvNC8LtCz0LPQs9CzKSAqIDpcclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1ncm91cCc+XHJcbiAgICAgICAgICAgICAgPElucHV0TWFza1xyXG4gICAgICAgICAgICAgIG5hbWU9J1VGXzQ0J1xyXG4gICAgICAgICAgICAgIG1hc2s9XCI5OS45OS45OTk5XCJcclxuICAgICAgICAgICAgICBtYXNrQ2hhcj1cIiBcIlxyXG4gICAgICAgICAgICAgIC8vIHBsYWNlaG9sZGVyPVwiKzcgIFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGludFwiPtCh0YDQvtC6INC00LXQudGB0YLQstC40Y8gICjQlNCULtCc0Jwu0JPQk9CT0JMpPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNiBtYi0zJz5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nJz5cclxuICAgICAgICAgICAgICAgINCa0LXQvCDQstGL0LTQsNC90L4gKlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPSdVRl80NScgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkPtCa0LXQvCDQstGL0LTQsNC90L48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCLQnNCuINCg0JpcIj7QnNCuINCg0Jo8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCLQnNCS0JQg0KDQmlwiPtCc0JLQlCDQoNCaPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYgbWItMyc+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPtCU0L7RhdC+0LQgKjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0IGF1dG9jb21wbGV0ZT0nb2ZmJyBuYW1lPSdVRl8zNCcgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHR5cGU9J251bWJlcic+PC9pbnB1dD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYgbWItMyc+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPtCe0YHRgtCw0YLQvtC6INC90LAg0LTQtdC/0L7Qt9C40YLQtSAqPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZ3JvdXAnPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9J1VGXzQwJyBhdXRvY29tcGxldGU9J29mZicgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHR5cGU9J251bWJlcic+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGludFwiPtCn0LXQvCDQsdC+0LvRjNGI0LUg0YHRg9C80LzQsCDQtNC10L/QvtC30LjRgtCwINGC0LXQvCDQsdC+0LvRjNGI0LUg0YHRg9C80LzQsCDQv9GA0Lgg0L7QtNC+0LHRgNC10L3QuNC4INC30LDQuNC80LA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNiBtYi0zJz5cclxuICAgICAgICAgICAgICA8bGFiZWw+0KHRg9C80LzQsCAqPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXQgbmFtZT0nNDEnIHR5cGU9J251bWJlcicgcGxhY2Vob2xkZXI9J9Ch0YPQvNC80LAg0L/Qu9Cw0YLQtdC20LXQuSDQtNC10LnRgdGC0LLRg9GO0YnQuNGFINC60YDQtdC00LjRgtC+0LI6JyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgZGlzYWJsZWQ9e2NoZWNrZWR9PjwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDwvZGl2PiBcclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNiBtYi0zJz5cclxuICAgICAgICAgICAgICA8bGFiZWw+0KHRg9C80LzQsCDQv9C70LDRgtC10LbQtdC5INC30LDQutGA0YvRgtGL0YUg0LrRgNC10LTQuNGC0L7QsiDQv9C+0YHQu9C10LTQvdC40LkgNiDQvNC10YEuICo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBuYW1lPSdVRl8zOScgdHlwZT0nbnVtYmVyJyBwbGFjZWhvbGRlcj0nJyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgZGlzYWJsZWQ9e2NoZWNrZWR9PjwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgbXQtNSBtYi01XCI+0JjQvdGE0L7RgNC80LDRhtC40Y8g0L4g0YHRh9C10YLQsNGFPC9oMj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgZm9ybS1ncm91cCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNiBtYi0zJz5cclxuICAgICAgICAgICAgICA8bGFiZWw+SUJBTiDRgdGH0LXRgiAqPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICA8SW5wdXRNYXNrIG1hc2s9XCJLWioqKioqKioqKioqKioqKioqKlwiIHBsYWNlaG9sZGVyPSdLWicgbmFtZT0nVUZfMzUnIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYgbWItMyc+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPtCd0L7QvNC10YAg0LrQsNGA0YLRiyAqPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZ3JvdXAnPlxyXG4gICAgICAgICAgICAgIDxJbnB1dE1hc2sgbmFtZT0nVUZfMzYnIG1hc2s9XCI5OTk5LTk5OTktOTk5OS05OTk5XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT0ndGVsJyAvPjtcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNiBtYi0zJz5cclxuICAgICAgICAgICAgPGxhYmVsPtCU0LDRgtCwINC+0LrQsNC90YfQsNC90LjRjyAqPC9sYWJlbD5cclxuICAgICAgICAgICAgPElucHV0TWFza1xyXG4gICAgICAgICAgICAgIG5hbWU9J1VGXzM3J1xyXG4gICAgICAgICAgICAgIG1hc2s9XCI5OS85OVwiXHJcbiAgICAgICAgICAgICAgbWFza0NoYXI9XCIgXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYgbWItMyc+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSduYW1lX29mX293bmVyJz7QmNC80Y8g0LLQu9Cw0LTQtdC70YzRhtCwINC60LDRgNGC0Ysg0LvQsNGC0LjQvdGB0LrQuNC80Lgg0LHRg9C60LLQsNC80LggKiA6XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWdyb3VwJz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPSdVRl8zOCcgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wgIGlucHV0LXVwcGVyY2FzZSBjYXJkTmFtZSc+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGludFwiPtCi0L7Qu9GM0LrQviDQvdCwINC70LDRgtC40L3RgdC60L7QvDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9mb3JtPiAqL31cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGludWVTdGVwMzsiLCJcclxuZXhwb3J0IGNvbnN0IHJlcXVpcmVkID0gKHZhbCkgPT4gdmFsICYmIHZhbC5sZW5ndGg7XHJcbmV4cG9ydCBjb25zdCB2YWxpZEVtYWlsID0gKHZhbCkgPT4gL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsNH0kL2kudGVzdCh2YWwpO1xyXG5leHBvcnQgY29uc3QgYWNjZXB0Q2lycmlsaWMgPSB2YWwgPT4ge1xyXG4gICAgdmFyIGZhbHN5ID0gL1thLXpBLVowLTlfXCIqL10vaS50ZXN0KHZhbClcclxuICAgIGlmKGZhbHN5ID09PSBmYWxzZSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGNvbmZpcm1QYXNzd29yZCAgPSAoYWxsVmFsdWVzKSA9PiB7XHJcbiAgICBpZihudWxsIHx8IGFsbFZhbHVlcy5wYXNzd29yZCkge1xyXG4gICAgICAgIGlmKGFsbFZhbHVlcy5wYXNzd29yZCA9PT0gYWxsVmFsdWVzLnBhc3N3b3JkX2NvbmZpcm1hdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5leHBvcnQgY29uc3QgY2hlY2tBbHBoYWJldCA9ICh2YWwpID0+IFx0L1thLXpBLVowLTlfXS9pLnRlc3QodmFsKTtcclxuZXhwb3J0IGNvbnN0IHBhc3N3b3JkQ2hlY2sgPSAodmFsKT0+IHtcclxuXHRpZih2YWwgJiYgdmFsLmxlbmd0aCA8IDUpIHJldHVybiBmYWxzZTtcclxuXHRpZighdmFsKSByZXR1cm4gZmFsc2U7XHJcblx0cmV0dXJuIHRydWVcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBpaW4gPSAodmFsKSA9PiAge1xyXG4gIGlmKHZhbCAmJiB2YWwubGVuZ3RoIT09MTIpIHJldHVybiBmYWxzZTtcclxuICBpZighdmFsKSByZXR1cm4gZmFsc2U7XHJcbiAgdmFyIGIxID0gWyAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEgXTtcclxuICB2YXIgYjIgPSBbIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMSwgMiBdO1xyXG4gIHZhciBhID0gW107XHJcbiAgdmFyIGNvbnRyb2xsID0gMDtcclxuICBmb3IodmFyIGk9MDsgaTwxMjsgaSsrKXtcclxuXHRhW2ldID0gcGFyc2VJbnQodmFsLnN1YnN0cmluZyhpLCBpKzEpKTtcclxuXHRpZihpPDExKSBjb250cm9sbCArPSBhW2ldKmIxW2ldO1xyXG4gIH1cclxuICBjb250cm9sbCA9IGNvbnRyb2xsICUgMTE7XHJcbiAgaWYoY29udHJvbGw9PTEwKSB7XHJcbiAgICBjb250cm9sbCA9IDA7XHJcbiAgICBmb3IodmFyIGk9MDsgaTwxMTsgaSsrKVxyXG4gICAgY29udHJvbGwgKz0gYVtpXSpiMltpXTtcclxuICAgIGNvbnRyb2xsID0gY29udHJvbGwgJSAxMTtcclxuICB9XHJcbiAgaWYoY29udHJvbGwhPWFbMTFdKSByZXR1cm4gZmFsc2U7XHJcbiAgXHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgcGhvbmVDaGVjayA9ICh2YWwpID0+IHtcclxuICAgIHZhciBQSE9ORV9PUEVSQVRPUlMgPSBbXHJcbiAgICAgICAge2lkOiAnNzcwMCd9LFxyXG4gICAgICAgIHtpZDogJzc3MDEnfSxcclxuICAgICAgICB7aWQ6ICc3NzAyJ30sXHJcbiAgICAgICAge2lkOiAnNzcwNSd9LFxyXG4gICAgICAgIHtpZDogJzc3MDYnfSxcclxuICAgICAgICB7aWQ6ICc3NzA3J30sXHJcbiAgICAgICAge2lkOiAnNzcwOCd9LFxyXG4gICAgICAgIHtpZDogJzc3NDcnfSxcclxuICAgICAgICB7aWQ6ICc3NzcxJ30sXHJcbiAgICAgICAge2lkOiAnNzc3NSd9LFxyXG4gICAgICAgIHtpZDogJzc3NzYnfSxcclxuICAgICAgICB7aWQ6ICc3Nzc3J30sXHJcbiAgICAgICAge2lkOiAnNzc3OCd9LFxyXG4gICAgXTtcclxuICAgIHZhciBwaG9uZSA9IFN0cmluZyh2YWwpLnJlcGxhY2UoL1teQS1aMC05XS9nLCAnJyksXHJcbiAgICAgICAgY29kZSA9IHBob25lLm1hdGNoKC9eKFxcZHs0fSkoXFxkezN9KShcXGR7NH0pJC8pO1xyXG4gICAgaWYgKCFjb2RlIHx8IHBob25lLmxlbmd0aCAhPT0gMTEpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcGhvbmVfbnVtYmVyID0gY29kZVsxXTtcclxuICAgIHZhciBwaG9uZV9vcGVyYXRvciA9IFBIT05FX09QRVJBVE9SUy5maWx0ZXIoZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtLmlkID09IHBob25lX251bWJlclxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYocGhvbmVfb3BlcmF0b3IubGVuZ3RoID4wKXtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gTHVuYSBhbGdvXHJcblxyXG5leHBvcnQgY29uc3QgaXNWYWxpZElCQU5OdW1iZXIgPSAoaW5wdXQpPT4ge1xyXG4gICAgdmFyIENPREVfTEVOR1RIUyA9IDIwO1xyXG5cclxuICAgIHZhciBCQU5LUyA9IFtcclxuICAgICAgICB7aWQ6ICc5NDcnLCBuYW1lOiAn0JDQniBcItCU0L7Rh9C10YDQvdC40Lkg0JHQsNC90LogXCLQkNCb0KzQpNCQLdCR0JDQndCaXCInfSxcclxuICAgICAgICB7aWQ6ICc4MjYnLCBuYW1lOiAn0JDQniBcItCQ0KLQpNCR0LDQvdC6XCInfSxcclxuICAgICAgICB7aWQ6ICc5MTMnLCBuYW1lOiAn0JDQniDQlNCRIFwi0JHQkNCd0Jog0JrQmNCi0JDQryDQkiDQmtCQ0JfQkNCl0KHQotCQ0J3QlVwiJ30sXHJcbiAgICAgICAge2lkOiAnNzIyJywgbmFtZTogJ9CQ0J4gXCJLQVNQSSBCQU5LXCInfSxcclxuICAgICAgICB7aWQ6ICc3NjYnLCBuYW1lOiAn0JDQniBcItCm0LXQvdGC0YDQsNC70YzQvdGL0Lkg0JTQtdC/0L7Qt9C40YLQsNGA0LjQuSDQptC10L3QvdGL0YUg0JHRg9C80LDQs1wiJ30sXHJcbiAgICAgICAge2lkOiAnODMyJywgbmFtZTogJ9CQ0J4gXCLQodC40YLQuNCx0LDQvdC6INCa0LDQt9Cw0YXRgdGC0LDQvVwiJ30sXHJcbiAgICAgICAge2lkOiAnOTA3JywgbmFtZTogJ9CQ0J4gXCLQkdCw0L3QuiDQoNCw0LfQstC40YLQuNGPINCa0LDQt9Cw0YXRgdGC0LDQvdCwXCInfSxcclxuICAgICAgICB7aWQ6ICc3MDAnLCBuYW1lOiAn0JXQktCg0JDQl9CY0JnQodCa0JjQmSDQkdCQ0J3QmiDQoNCQ0JfQktCY0KLQmNCvJ30sXHJcbiAgICAgICAge2lkOiAnOTQ4JywgbmFtZTogJ9CQ0J4gXCLQldCy0YDQsNC30LjQudGB0LrQuNC5INCR0LDQvdC6XCInfSxcclxuICAgICAgICB7aWQ6ICcwMDknLCBuYW1lOiAn0J3QkNCeINCT0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90LDRjyDQutC+0YDQv9C+0YDQsNGG0LjRjyBcItCf0YDQsNCy0LjRgtC10LvRjNGB0YLQstC+INC00LvRjyDQs9GA0LDQttC00LDQvVwiJ30sXHJcbiAgICAgICAge2lkOiAnOTcyJywgbmFtZTogJ9CQ0J4gXCLQltC40LvRgdGC0YDQvtC50YHQsdC10YDQsdCw0L3QuiDQmtCw0LfQsNGF0YHRgtCw0L3QsFwiJ30sXHJcbiAgICAgICAge2lkOiAnMjQ2JywgbmFtZTogJ9CQ0J4gXCLQmNGB0LvQsNC80YHQutC40Lkg0JHQsNC90LogXCJBbCBIaWxhbFwiJ30sXHJcbiAgICAgICAge2lkOiAnNjAxJywgbmFtZTogJ9CQ0J4gXCLQndCw0YDQvtC00L3Ri9C5INCR0LDQvdC6INCa0LDQt9Cw0YXRgdGC0LDQvdCwXCInfSxcclxuICAgICAgICB7aWQ6ICc5MzAnLCBuYW1lOiAn0JDQniBcItCi0L7RgNCz0L7QstC+LdC/0YDQvtC80YvRiNC70LXQvdC90YvQuSDQkdCw0L3QuiDQmtC40YLQsNGPINCyINCzLiDQkNC70LzQsNGC0YtcIid9LFxyXG4gICAgICAgIHtpZDogJzU1MCcsIG5hbWU6ICfQsy7QnNC+0YHQutCy0LAg0JzQtdC20LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INCR0LDQvdC6J30sXHJcbiAgICAgICAge2lkOiAnODg2JywgbmFtZTogJ9CU0JEg0JDQniBcItCl0L7Rg9C8INCa0YDQtdC00LjRgiDRjdC90LQg0KTQuNC90LDQvdGBINCR0LDQvdC6XCInfSxcclxuICAgICAgICB7aWQ6ICc5NjUnLCBuYW1lOiAn0JDQniBcIkZvcnRlQmFua1wiJ30sXHJcbiAgICAgICAge2lkOiAnOTI3JywgbmFtZTogJ9CQ0J4gXCLQmtCw0LfQsNGF0YHRgtCw0L3RgdC60LDRjyDRhNC+0L3QtNC+0LLQsNGPINCx0LjRgNC20LBcIid9LFxyXG4gICAgICAgIHtpZDogJzgyMScsIG5hbWU6ICfQkNCeIFwi0JHQsNC90LogXCJCYW5rIFJCS1wiJ30sXHJcbiAgICAgICAge2lkOiAnMjI0JywgbmFtZTogJ9Cg0JPQnyBcItCa0LDQt9Cw0YXRgdGC0LDQvdGB0LrQuNC5INGG0LXQvdGC0YAg0LzQtdC20LHQsNC90LrQvtCy0YHQutC40YUg0YDQsNGB0YfQtdGC0L7QsiDQndCR0KDQmlwiJ30sXHJcbiAgICAgICAge2lkOiAnMDcwJywgbmFtZTogJ9Cg0JPQoyBcItCa0L7QvNC40YLQtdGCINC60LDQt9C90LDRh9C10LnRgdGC0LLQsCDQnNC40L3QuNGB0YLQtdGA0YHRgtCy0LAg0YTQuNC90LDQvdGB0L7QsiDQoNCaXCInfSxcclxuICAgICAgICB7aWQ6ICc1NTEnLCBuYW1lOiAn0JDQniBcItCR0LDQvdC6IEthc3NhIE5vdmFcIiAo0JTQvtGH0LXRgNC90LjQuSDQsdCw0L3QuiDQkNCeIFwiRm9ydGVCYW5rXCIpJ30sXHJcbiAgICAgICAge2lkOiAnODg1JywgbmFtZTogJ9CQ0J4gXCLQlNCRIFwi0JrQkNCX0JDQpdCh0KLQkNCdLdCX0JjQoNCQ0JDQoiDQmNCd0KLQldCg0J3QldCo0J3QmyDQkdCQ0J3QmlwiJ30sXHJcbiAgICAgICAge2lkOiAnNzc0JywgbmFtZTogJ9CQ0J4gXCJBc2lhQ3JlZGl0IEJhbmsgKNCQ0LfQuNGP0JrRgNC10LTQuNGCINCR0LDQvdC6KVwiICd9LFxyXG4gICAgICAgIHtpZDogJzU1MycsIG5hbWU6ICfQkNCeINCU0JEgXCLQndCw0YbQuNC+0L3QsNC70YzQvdGL0Lkg0JHQsNC90Log0J/QsNC60LjRgdGC0LDQvdCwXCIg0LIg0JrQsNC30LDRhdGB0YLQsNC90LUnfSxcclxuICAgICAgICB7aWQ6ICcxNDcnLCBuYW1lOiAnXCLQkdCw0L3Qui3QutCw0YHRgtC+0LTQuNCw0L0g0JDQniAgXCLQldCd0J/QpFwiJ30sXHJcbiAgICAgICAge2lkOiAnMTI1JywgbmFtZTogJ9Cg0JPQoyDQndCw0YbQuNC+0L3QsNC70YzQvdGL0Lkg0JHQsNC90Log0KDQtdGB0L/Rg9Cx0LvQuNC60Lgg0JrQsNC30LDRhdGB0YLQsNC9J30sXHJcbiAgICAgICAge2lkOiAnODQ5JywgbmFtZTogJ9CQ0J4gXCLQndGD0YDQsdCw0L3QulwiJ30sXHJcbiAgICAgICAge2lkOiAnOTE0JywgbmFtZTogJ9CU0JEg0JDQniBcItCh0LHQtdGA0LHQsNC90LpcIid9LFxyXG4gICAgICAgIHtpZDogJzQzNScsIG5hbWU6ICfQkNCeIFwi0KjQuNC90YXQsNC9INCR0LDQvdC6INCa0LDQt9Cw0YXRgdGC0LDQvVwiJ30sXHJcbiAgICAgICAge2lkOiAnNzgxJywgbmFtZTogJ9CQ0J4gXCJDYXBpdGFsIEJhbmsgS2F6YWtoc3RhblwiJ30sXHJcbiAgICAgICAge2lkOiAnNjIwJywgbmFtZTogJ9CQ0J4gXCJUZW5ncmkgQmFua1wiJ30sXHJcbiAgICAgICAge2lkOiAnOTk4JywgbmFtZTogJ9CQ0J4gXCJGaXJzdCBIZWFydGxhbmQgSnlzYW4gQmFua1wiJ30sXHJcbiAgICAgICAge2lkOiAnNDMyJywgbmFtZTogJ9CU0J4g0JDQniDQkdCw0L3QuiDQktCi0JEgKNCa0LDQt9Cw0YXRgdGC0LDQvSknfSxcclxuICAgICAgICB7aWQ6ICc4OTYnLCBuYW1lOiAn0JDQniBcItCY0YHQu9Cw0LzRgdC60LjQuSDQsdCw0L3QuiBcItCX0LDQvNCw0L0t0JHQsNC90LpcIid9LFxyXG4nJ1xyXG4gICAgXTtcclxuICAgIHZhciBpYmFuID0gU3RyaW5nKGlucHV0KS50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoL1teQS1aMC05XS9nLCAnJyksXHJcbiAgICAgICAgY29kZSA9IGliYW4ubWF0Y2goL14oW0EtWl17Mn0pKFxcZHsyfSkoXFxkezN9KShbQS1aXFxkXSspJC8pLCBkaWdpdHM7XHJcbiAgICBpZiAoIWNvZGUgfHwgaWJhbi5sZW5ndGggIT09IENPREVfTEVOR1RIUykge1xyXG4gICAgICAgIHJldHVybiAn0JfQsNC/0L7Qu9C90LjRgtC1INC/0L7Qu9C1INC00L4g0LrQvtC90YbQsCdcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIHZhciBiYW5rX2NvZGUgPSBjb2RlWzNdO1xyXG5cclxuICAgIHZhciBiYW5rID0gQkFOS1MuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbS5pZCA9PSBiYW5rX2NvZGVcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBpZihiYW5rLmxlbmd0aCA+MCl7XHJcbiAgICAgICAgcmV0dXJuIGJhbmtbMF0ubmFtZVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIFwi0J3QtdC60L7RgNGA0LXQutGC0L3Ri9C5INGB0YfQtdGCXCI7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIGRpZ2l0cyA9IChjb2RlWzNdICsgY29kZVs0XSArIGNvZGVbMV0gKyBjb2RlWzJdKS5yZXBsYWNlKC9bQS1aXS9nLCBmdW5jdGlvbiAobGV0dGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIGxldHRlci5jaGFyQ29kZUF0KDApIC0gNTU7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZih0aGlzLm1vZDk3KGRpZ2l0cykgPT09IDEpe1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gXCLQndC10L/RgNCw0LLQuNC70YzQvdC+XCJcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGlzVmFsaWRJQkFOTnVtYmVyMiA9IChpbnB1dCk9PiB7XHJcblxyXG4gICAgdmFyIENPREVfTEVOR1RIUyA9IDIwO1xyXG5cclxuICAgIHZhciBCQU5LUyA9IFtcclxuICAgICAgICB7aWQ6ICc5NDcnLCBuYW1lOiAn0JDQniBcItCU0L7Rh9C10YDQvdC40Lkg0JHQsNC90LogXCLQkNCb0KzQpNCQLdCR0JDQndCaXCInfSxcclxuICAgICAgICB7aWQ6ICc4MjYnLCBuYW1lOiAn0JDQniBcItCQ0KLQpNCR0LDQvdC6XCInfSxcclxuICAgICAgICB7aWQ6ICc5NDknLCBuYW1lOiAn0JDQniBcIkFsdHluIEJhbmtcIiAo0JTQkSBDaGluYSBDaXRpYyBCYW5rIENvcnBvcmF0aW9uIExpbWl0ZWQpICd9LFxyXG4gICAgICAgIHtpZDogJzkxMycsIG5hbWU6ICfQkNCeINCU0JEgXCLQkdCQ0J3QmiDQmtCY0KLQkNCvINCSINCa0JDQl9CQ0KXQodCi0JDQndCVXCInfSxcclxuICAgICAgICB7aWQ6ICc3MjInLCBuYW1lOiAn0JDQniBcIktBU1BJIEJBTktcIid9LFxyXG4gICAgICAgIHtpZDogJzc2NicsIG5hbWU6ICfQkNCeIFwi0KbQtdC90YLRgNCw0LvRjNC90YvQuSDQlNC10L/QvtC30LjRgtCw0YDQuNC5INCm0LXQvdC90YvRhSDQkdGD0LzQsNCzXCInfSxcclxuICAgICAgICB7aWQ6ICc4MzInLCBuYW1lOiAn0JDQniBcItCh0LjRgtC40LHQsNC90Log0JrQsNC30LDRhdGB0YLQsNC9XCInfSxcclxuICAgICAgICB7aWQ6ICc5MDcnLCBuYW1lOiAn0JDQniBcItCR0LDQvdC6INCg0LDQt9Cy0LjRgtC40Y8g0JrQsNC30LDRhdGB0YLQsNC90LBcIid9LFxyXG4gICAgICAgIHtpZDogJzcwMCcsIG5hbWU6ICfQldCS0KDQkNCX0JjQmdCh0JrQmNCZINCR0JDQndCaINCg0JDQl9CS0JjQotCY0K8nfSxcclxuICAgICAgICB7aWQ6ICc5NDgnLCBuYW1lOiAn0JDQniBcItCV0LLRgNCw0LfQuNC50YHQutC40Lkg0JHQsNC90LpcIid9LFxyXG4gICAgICAgIHtpZDogJzAwOScsIG5hbWU6ICfQndCQ0J4g0JPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QsNGPINC60L7RgNC/0L7RgNCw0YbQuNGPIFwi0J/RgNCw0LLQuNGC0LXQu9GM0YHRgtCy0L4g0LTQu9GPINCz0YDQsNC20LTQsNC9XCInfSxcclxuICAgICAgICB7aWQ6ICc5NzInLCBuYW1lOiAn0JDQniBcItCW0LjQu9GB0YLRgNC+0LnRgdCx0LXRgNCx0LDQvdC6INCa0LDQt9Cw0YXRgdGC0LDQvdCwXCInfSxcclxuICAgICAgICB7aWQ6ICcyNDYnLCBuYW1lOiAn0JDQniBcItCY0YHQu9Cw0LzRgdC60LjQuSDQkdCw0L3QuiBcIkFsIEhpbGFsXCInfSxcclxuICAgICAgICB7aWQ6ICc2MDEnLCBuYW1lOiAn0JDQniBcItCd0LDRgNC+0LTQvdGL0Lkg0JHQsNC90Log0JrQsNC30LDRhdGB0YLQsNC90LBcIid9LFxyXG4gICAgICAgIHtpZDogJzkzMCcsIG5hbWU6ICfQkNCeIFwi0KLQvtGA0LPQvtCy0L4t0L/RgNC+0LzRi9GI0LvQtdC90L3Ri9C5INCR0LDQvdC6INCa0LjRgtCw0Y8g0LIg0LMuINCQ0LvQvNCw0YLRi1wiJ30sXHJcbiAgICAgICAge2lkOiAnNTUwJywgbmFtZTogJ9CzLtCc0L7RgdC60LLQsCDQnNC10LbQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0JHQsNC90LonfSxcclxuICAgICAgICB7aWQ6ICc4ODYnLCBuYW1lOiAn0JTQkSDQkNCeIFwi0KXQvtGD0Lwg0JrRgNC10LTQuNGCINGN0L3QtCDQpNC40L3QsNC90YEg0JHQsNC90LpcIid9LFxyXG4gICAgICAgIHtpZDogJzk2NScsIG5hbWU6ICfQkNCeIFwiRm9ydGVCYW5rXCInfSxcclxuICAgICAgICB7aWQ6ICc5MjcnLCBuYW1lOiAn0JDQniBcItCa0LDQt9Cw0YXRgdGC0LDQvdGB0LrQsNGPINGE0L7QvdC00L7QstCw0Y8g0LHQuNGA0LbQsFwiJ30sXHJcbiAgICAgICAge2lkOiAnODIxJywgbmFtZTogJ9CQ0J4gXCLQkdCw0L3QuiBcIkJhbmsgUkJLXCInfSxcclxuICAgICAgICB7aWQ6ICcyMjQnLCBuYW1lOiAn0KDQk9CfIFwi0JrQsNC30LDRhdGB0YLQsNC90YHQutC40Lkg0YbQtdC90YLRgCDQvNC10LbQsdCw0L3QutC+0LLRgdC60LjRhSDRgNCw0YHRh9C10YLQvtCyINCd0JHQoNCaXCInfSxcclxuICAgICAgICB7aWQ6ICcwNzAnLCBuYW1lOiAn0KDQk9CjIFwi0JrQvtC80LjRgtC10YIg0LrQsNC30L3QsNGH0LXQudGB0YLQstCwINCc0LjQvdC40YHRgtC10YDRgdGC0LLQsCDRhNC40L3QsNC90YHQvtCyINCg0JpcIid9LFxyXG4gICAgICAgIHtpZDogJzU2MycsIG5hbWU6ICfQkNCeIFwi0JrQkNCX0J/QntCn0KLQkFwiJ30sXHJcbiAgICAgICAge2lkOiAnNTUxJywgbmFtZTogJ9CQ0J4gXCLQkdCw0L3QuiBLYXNzYSBOb3ZhXCIgKNCU0L7Rh9C10YDQvdC40Lkg0LHQsNC90Log0JDQniBcIkZvcnRlQmFua1wiKSd9LFxyXG4gICAgICAgIHtpZDogJzg4NScsIG5hbWU6ICfQkNCeIFwi0JTQkSBcItCa0JDQl9CQ0KXQodCi0JDQnS3Ql9CY0KDQkNCQ0KIg0JjQndCi0JXQoNCd0JXQqNCd0Jsg0JHQkNCd0JpcIid9LFxyXG4gICAgICAgIHtpZDogJzc3NCcsIG5hbWU6ICfQkNCeIFwiQXNpYUNyZWRpdCBCYW5rICjQkNC30LjRj9Ca0YDQtdC00LjRgiDQkdCw0L3QuilcIiAnfSxcclxuICAgICAgICB7aWQ6ICc1NTMnLCBuYW1lOiAn0JDQniDQlNCRIFwi0J3QsNGG0LjQvtC90LDQu9GM0L3Ri9C5INCR0LDQvdC6INCf0LDQutC40YHRgtCw0L3QsFwiINCyINCa0LDQt9Cw0YXRgdGC0LDQvdC1J30sXHJcbiAgICAgICAge2lkOiAnMTQ3JywgbmFtZTogJ1wi0JHQsNC90Lot0LrQsNGB0YLQvtC00LjQsNC9INCQ0J4gIFwi0JXQndCf0KRcIid9LFxyXG4gICAgICAgIHtpZDogJzEyNScsIG5hbWU6ICfQoNCT0KMg0J3QsNGG0LjQvtC90LDQu9GM0L3Ri9C5INCR0LDQvdC6INCg0LXRgdC/0YPQsdC70LjQutC4INCa0LDQt9Cw0YXRgdGC0LDQvSd9LFxyXG4gICAgICAgIHtpZDogJzg0OScsIG5hbWU6ICfQkNCeIFwi0J3Rg9GA0LHQsNC90LpcIid9LFxyXG4gICAgICAgIHtpZDogJzkxNCcsIG5hbWU6ICfQlNCRINCQ0J4gXCLQodCx0LXRgNCx0LDQvdC6XCInfSxcclxuICAgICAgICB7aWQ6ICc0MzUnLCBuYW1lOiAn0JDQniBcItCo0LjQvdGF0LDQvSDQkdCw0L3QuiDQmtCw0LfQsNGF0YHRgtCw0L1cIid9LFxyXG4gICAgICAgIHtpZDogJzc4MScsIG5hbWU6ICfQkNCeIFwiQ2FwaXRhbCBCYW5rIEthemFraHN0YW5cIid9LFxyXG4gICAgICAgIHtpZDogJzYyMCcsIG5hbWU6ICfQkNCeIFwiVGVuZ3JpIEJhbmtcIid9LFxyXG4gICAgICAgIHtpZDogJzk5OCcsIG5hbWU6ICfQkNCeIFwiRmlyc3QgSGVhcnRsYW5kIEp5c2FuIEJhbmtcIid9LFxyXG4gICAgICAgIHtpZDogJzQzMicsIG5hbWU6ICfQlNCeINCQ0J4g0JHQsNC90Log0JLQotCRICjQmtCw0LfQsNGF0YHRgtCw0L0pJ30sXHJcbiAgICAgICAge2lkOiAnODk2JywgbmFtZTogJ9CQ0J4gXCLQmNGB0LvQsNC80YHQutC40Lkg0LHQsNC90LogXCLQl9Cw0LzQsNC9LdCR0LDQvdC6XCInfSxcclxuJydcclxuICAgIF07XHJcbiAgICB2YXIgaWJhbiA9IFN0cmluZyhpbnB1dCkudG9VcHBlckNhc2UoKS5yZXBsYWNlKC9bXkEtWjAtOV0vZywgJycpLFxyXG4gICAgICAgIGNvZGUgPSBpYmFuLm1hdGNoKC9eKFtBLVpdezJ9KShcXGR7Mn0pKFxcZHszfSkoW0EtWlxcZF0rKSQvKSwgZGlnaXRzO1xyXG4gICAgaWYgKCFjb2RlIHx8IGliYW4ubGVuZ3RoICE9PSBDT0RFX0xFTkdUSFMpIHtcclxuICAgICAgICAvLyByZXR1cm4gJ9CX0LDQv9C+0LvQvdC40YLQtSDQv9C+0LvQtSDQtNC+INC60L7QvdGG0LAnXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICB2YXIgYmFua19jb2RlID0gY29kZVszXTtcclxuXHJcbiAgICB2YXIgYmFuayA9IEJBTktTLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0uaWQgPT0gYmFua19jb2RlXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgaWYoYmFuay5sZW5ndGggPjApe1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgZGlnaXRzID0gKGNvZGVbM10gKyBjb2RlWzRdICsgY29kZVsxXSArIGNvZGVbMl0pLnJlcGxhY2UoL1tBLVpdL2csIGZ1bmN0aW9uIChsZXR0ZXIpIHtcclxuICAgICAgICByZXR1cm4gbGV0dGVyLmNoYXJDb2RlQXQoMCkgLSA1NTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmKHRoaXMubW9kOTcoZGlnaXRzKSA9PT0gMSl7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbi8vIFRoaXJkIHN0ZXBcclxuXHJcbmV4cG9ydCBjb25zdCBnaXZlbkRhdGVDYXJkSWQgPSAodmFsKSA9PiB7XHJcbiAgICB2YXIgcmVzID0gU3RyaW5nKHZhbCkucmVwbGFjZSgvXy9nLCBcIlwiKTtcclxuICAgIGlmKHJlcy5sZW5ndGggIT09IDEwKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBjb25zdCBteURhdGUgPSBuZXcgRGF0ZSh2YWwuc3Vic3RyaW5nKDYsMTApKyctJyt2YWwuc3Vic3RyaW5nKDMsNSkrJy0nK3ZhbC5zdWJzdHJpbmcoMCwyKSk7XHJcbiAgICBpZihteURhdGUgPT0gJ0ludmFsaWQgRGF0ZScpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHRjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcclxuXHR2YXIgdG9kYXlNID0gdG9kYXkuZ2V0TW9udGgoKSArIDE7XHJcblx0dmFyIHRvZGF5RCA9IHRvZGF5LmdldERhdGUoKTtcclxuXHR2YXIgdG9kYXlZID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuXHR2YXIgbXlNID0gbXlEYXRlLmdldE1vbnRoKCkgKyAxO1xyXG5cdHZhciBteUQgPSBteURhdGUuZ2V0RGF0ZSgpO1xyXG5cdHZhciBteVkgPSBteURhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHJcblx0aWYobXlZPnRvZGF5WSkge1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHRpZihteVkgPCB0b2RheVktMjUpIHtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblx0aWYobXlZID09PSB0b2RheVkpIHtcclxuXHRcdGlmKG15TSA9PT0gdG9kYXlNICYmIG15RCA+IHRvZGF5RCkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2VcclxuXHRcdH1cclxuXHRcdGlmKG15TSA+IHRvZGF5TSkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2VcclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlXHJcblx0fVxyXG5cdHJldHVybiB0cnVlXHJcbn1cclxuZXhwb3J0IGNvbnN0IGV4cERhdGVDYXJkSWQgPSAodmFsKSA9PiB7XHJcbiAgICB2YXIgcmVzID0gU3RyaW5nKHZhbCkucmVwbGFjZSgvXy9nLCBcIlwiKTtcclxuICAgIGlmKHJlcy5sZW5ndGggIT09IDEwKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBjb25zdCBteURhdGUgPSBuZXcgRGF0ZSh2YWwuc3Vic3RyaW5nKDYsMTApKyctJyt2YWwuc3Vic3RyaW5nKDMsNSkrJy0nK3ZhbC5zdWJzdHJpbmcoMCwyKSk7XHJcbiAgICBpZihteURhdGUgPT0gJ0ludmFsaWQgRGF0ZScpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHRjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcclxuXHR2YXIgdG9kYXlNID0gdG9kYXkuZ2V0TW9udGgoKSArIDE7XHJcblx0dmFyIHRvZGF5RCA9IHRvZGF5LmdldERhdGUoKTtcclxuXHR2YXIgdG9kYXlZID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuXHR2YXIgbXlNID0gbXlEYXRlLmdldE1vbnRoKCkgKyAxO1xyXG5cdHZhciBteUQgPSBteURhdGUuZ2V0RGF0ZSgpO1xyXG5cdHZhciBteVkgPSBteURhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHJcblx0aWYobXlZPHRvZGF5WSkge1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHRyZXR1cm4gdHJ1ZVxyXG59XHJcbi8vIGV4cG9ydCBjb25zdCBnaXZlbkRhdGVDYXJkSWQgPSAodmFsKSA9PiB7XHJcbi8vICAgICB2YXIgcmVzID0gU3RyaW5nKHZhbCkucmVwbGFjZSgvXy9nLCBcIlwiKTtcclxuLy8gICAgIGlmKHJlcy5sZW5ndGggIT09IDEwKSB7XHJcbi8vICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbi8vICAgICB9XHJcbi8vICAgICAvLyAwMi4wNS4xOTk5XHJcbi8vIFx0Ly8gY29uc3QgbXlEYXRlID0gbmV3IERhdGUodmFsKTtcclxuLy8gXHRjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcclxuLy8gXHR2YXIgdG9kYXlNID0gdG9kYXkuZ2V0TW9udGgoKSArIDE7XHJcbi8vIFx0dmFyIHRvZGF5RCA9IHRvZGF5LmdldERheSgpO1xyXG4vLyBcdHZhciB0b2RheVkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xyXG4vLyBcdHZhciBteU0gPSAoKSA9PiB7XHJcbi8vICAgICAgICAgaWYodmFsWzNdID09IDApIHtcclxuLy8gICAgICAgICAgICAgcmV0dXJuIHZhbFs0XVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBlbHNlIHtcclxuLy8gICAgICAgICAgICAgcmV0dXJuIHZhbC5zdWJzdHJpbmcoMyw1KTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9O1xyXG4vLyAgICAgdmFyIG15RCA9ICgpID0+IHtcclxuLy8gICAgICAgICBpZih2YWxbMF0gPT0gMCkge1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gdmFsWzFdXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGVsc2Uge1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gdmFsLnN1YnN0cmluZygwLDIpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH07XHJcbi8vIFx0dmFyIG15WSA9IHZhbC5zdWJzdHJpbmcoNiw5KVxyXG5cclxuLy8gXHRpZihteVk+dG9kYXlZKSB7XHJcbi8vIFx0XHRyZXR1cm4gZmFsc2U7XHJcbi8vIFx0fVxyXG4vLyBcdGlmKG15WSA8IHRvZGF5WS0xMSkge1xyXG4vLyBcdFx0cmV0dXJuIGZhbHNlO1xyXG4vLyBcdH1cclxuLy8gXHRpZihteVkgPT09IHRvZGF5WSkge1xyXG4vLyBcdFx0aWYobXlNID09PSB0b2RheU0gJiYgbXlEID4gdG9kYXlEKSB7XHJcbi8vIFx0XHRcdHJldHVybiBmYWxzZVxyXG4vLyBcdFx0fVxyXG4vLyBcdFx0aWYobXlNID4gdG9kYXlNKSB7XHJcbi8vIFx0XHRcdHJldHVybiBmYWxzZVxyXG4vLyBcdFx0fVxyXG4vLyBcdFx0cmV0dXJuIHRydWVcclxuLy8gXHR9XHJcbi8vIFx0cmV0dXJuIHRydWVcclxuLy8gfVxyXG5cclxuZXhwb3J0IGNvbnN0IG9ubHlFbmdsaXNoID12YWw9PiAvXlthLXpBLVpcXHNdKiQvLnRlc3QodmFsKTtcclxuXHJcbmV4cG9ydCBjb25zdCBjaGVja1N0cmluZ05hbWUgPSB2YWwgPT4ge1xyXG5cdGlmICh2YWwgJiYgdmFsLnJlcGxhY2UoL1xccyskLywgJycpLnNwbGl0KC9cXFcrLykubGVuZ3RoID09PSAyKSB7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHQgfVxyXG5cdCByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpZE51bWJlciA9ICh2YWwpPT4ge1xyXG5cdHZhciByZXMgPSBTdHJpbmcodmFsKS5yZXBsYWNlKC9fL2csIFwiXCIpO1xyXG4gICAgaWYocmVzLmxlbmd0aCAhPT0gOSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfWVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpc0V4cERhdGVPZkNhcmRWYWxpZCA9IChpbnB1dCkgPT57XHJcblx0dmFyIGV4cERhdGUgPSBTdHJpbmcoaW5wdXQpLnRvVXBwZXJDYXNlKCkucmVwbGFjZSgvW14wLTldL2csICcnKTtcclxuXHR2YXIgZGF0ZSA9IGV4cERhdGUubWF0Y2goL14oXFxkezJ9KShcXGR7Mn0pJC8pO1xyXG5cclxuXHRpZihleHBEYXRlLmxlbmd0aCA9PT0gNCl7XHJcblx0XHRpZihkYXRlWzFdID4gMTIgfHwgZGF0ZVsyXSA8IDIwKXtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fWVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZVxyXG5cdFx0fVxyXG5cclxuXHR9ZWxzZXtcclxuXHRcdHJldHVybiBmYWxzZVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNoZWNrQ2FyZFZhbGlkPSAodmFsdWUpID0+IHtcclxuXHRpZiAoL1teMC05LVxcc10rLy50ZXN0KHZhbHVlKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuXHRsZXQgbkNoZWNrID0gMCwgbkRpZ2l0ID0gMCwgYkV2ZW4gPSBmYWxzZTtcclxuXHR2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcRC9nLCBcIlwiKTtcclxuXHJcblx0aWYodmFsdWUubGVuZ3RoICE9PSAxNil7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fWVsc2V7XHJcblx0XHRmb3IgKGxldCBuID0gdmFsdWUubGVuZ3RoIC0gMTsgbiA+PSAwOyBuLS0pIHtcclxuXHRcdFx0bGV0IGNEaWdpdCA9IHZhbHVlLmNoYXJBdChuKSxcclxuXHRcdFx0XHRuRGlnaXQgPSBwYXJzZUludChjRGlnaXQsIDEwKTtcclxuXHJcblx0XHRcdGlmIChiRXZlbikge1xyXG5cdFx0XHRcdGlmICgobkRpZ2l0ICo9IDIpID4gOSkgbkRpZ2l0IC09IDk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG5DaGVjayArPSBuRGlnaXQ7XHJcblx0XHRcdGJFdmVuID0gIWJFdmVuO1xyXG5cdFx0fVxyXG5cdFx0aWYoKG5DaGVjayAlIDEwKSAhPT0gMCl7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiB5ZWFyKGRhdGVTdHJpbmcpIHtcclxuICAgIGlmKCBkYXRlU3RyaW5nWzBdID09IDApIHtcclxuICAgICAgICByZXR1cm4gJzIwJytkYXRlU3RyaW5nLnN1YnN0cmluZygwLDIpO1xyXG4gICAgfVxyXG4gICAgICAgIHJldHVybiAnMTknK2RhdGVTdHJpbmcuc3Vic3RyaW5nKDAsMik7XHJcbn1cclxuZnVuY3Rpb24gZ2V0QWdlKGRhdGVTdHJpbmcpIHtcclxuICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdmFyIHllYXJOb3cgPSBub3cuZ2V0WWVhcigpO1xyXG4gICAgdmFyIG1vbnRoTm93ID0gbm93LmdldE1vbnRoKCk7XHJcbiAgICB2YXIgZGF0ZU5vdyA9IG5vdy5nZXREYXRlKCk7XHJcblxyXG4gICAgdmFyIGRvYiA9IG5ldyBEYXRlKHllYXIoZGF0ZVN0cmluZyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0ZVN0cmluZy5zdWJzdHJpbmcoMiw0KS0xLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIGRhdGVTdHJpbmcuc3Vic3RyaW5nKDQsNilcclxuICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgIHZhciB5ZWFyRG9iID0gZG9iLmdldFllYXIoKTtcclxuICAgIHZhciBtb250aERvYiA9IGRvYi5nZXRNb250aCgpO1xyXG4gICAgdmFyIGRhdGVEb2IgPSBkb2IuZ2V0RGF0ZSgpO1xyXG4gICAgdmFyIGFnZSA9IHt9O1xyXG5cclxuICAgIHZhciB5ZWFyQWdlID0geWVhck5vdyAtIHllYXJEb2I7XHJcblxyXG4gICAgaWYgKG1vbnRoTm93ID49IG1vbnRoRG9iKVxyXG4gICAgICB2YXIgbW9udGhBZ2UgPSBtb250aE5vdyAtIG1vbnRoRG9iO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIHllYXJBZ2UtLTtcclxuICAgICAgdmFyIG1vbnRoQWdlID0gMTIgKyBtb250aE5vdyAtbW9udGhEb2I7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGVOb3cgPj0gZGF0ZURvYilcclxuICAgICAgdmFyIGRhdGVBZ2UgPSBkYXRlTm93IC0gZGF0ZURvYjtcclxuICAgIGVsc2Uge1xyXG4gICAgICBtb250aEFnZS0tO1xyXG4gICAgICB2YXIgZGF0ZUFnZSA9IDMxICsgZGF0ZU5vdyAtIGRhdGVEb2I7XHJcblxyXG4gICAgICBpZiAobW9udGhBZ2UgPCAwKSB7XHJcbiAgICAgICAgbW9udGhBZ2UgPSAxMTtcclxuICAgICAgICB5ZWFyQWdlLS07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZ2UgPSB7XHJcbiAgICAgICAgeWVhcnM6IHllYXJBZ2UsXHJcbiAgICAgICAgbW9udGhzOiBtb250aEFnZSxcclxuICAgICAgICBkYXlzOiBkYXRlQWdlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICByZXR1cm4gYWdlLnllYXJzO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHZhbGlkYWdlID0gKGlpbikgPT4ge1xyXG4gICAgaWYoZ2V0QWdlKGlpbik8MTggfHwgZ2V0QWdlKGlpbik+NjMpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=