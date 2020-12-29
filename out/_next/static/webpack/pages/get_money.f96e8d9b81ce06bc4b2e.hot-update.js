webpackHotUpdate_N_E("pages/get_money",{

/***/ "./components/registrationForm/FormRegister.js":
/*!*****************************************************!*\
  !*** ./components/registrationForm/FormRegister.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_ActionCreators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/actions/ActionCreators */ "./store/actions/ActionCreators.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _shared_Progressbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/Progressbar */ "./components/shared/Progressbar.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _defaults_validations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../defaults/validations */ "./defaults/validations.js");
/* harmony import */ var react_spinner_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-spinner-material */ "./node_modules/react-spinner-material/lib/index.js");
/* harmony import */ var react_spinner_material__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_spinner_material__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var disable_scroll__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! disable-scroll */ "./node_modules/disable-scroll/es/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_20__);










var _jsxFileName = "E:\\icredit\\server-zaymi\\zaymikz \u2014 \u043A\u043E\u043F\u0438\u044F\\components\\registrationForm\\FormRegister.js",
    _this = undefined;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














var scrollToElement = __webpack_require__(/*! scroll-to-element */ "./node_modules/scroll-to-element/index.js");

var mapStateToProps = function mapStateToProps(state) {
  return {
    moneyVal: state.moneyVal,
    dayVal: state.dayVal,
    checked: false,
    somemessage: state.message,
    registration: state.registration,
    loading: state.loading,
    registration1: state.registration1
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    changingMoney: function changingMoney(money) {
      dispatch(Object(_store_actions_ActionCreators__WEBPACK_IMPORTED_MODULE_11__["changingMoney"])(money));
    },
    changingDay: function changingDay(day) {
      dispatch(Object(_store_actions_ActionCreators__WEBPACK_IMPORTED_MODULE_11__["changingDay"])(day));
    },
    postRegistration: function postRegistration(registration) {
      return dispatch(Object(_store_actions_ActionCreators__WEBPACK_IMPORTED_MODULE_11__["postRegistration"])(registration));
    },
    resetRegistration: function resetRegistration() {
      dispatch(actions.reset('registration'));
    }
  };
};

var PhoneMask = function PhoneMask(_ref) {
  var field = _ref.field,
      form = _ref.form,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, ["field", "form"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_input_mask__WEBPACK_IMPORTED_MODULE_14___default.a, _objectSpread(_objectSpread({
    mask: "+7(999)-999-9999",
    maskChar: " ",
    className: "my-input"
  }, field), props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 50
  }, _this);
};

_c = PhoneMask;

var IinMask = function IinMask(_ref2) {
  var field = _ref2.field,
      form = _ref2.form,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref2, ["field", "form"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_input_mask__WEBPACK_IMPORTED_MODULE_14___default.a, _objectSpread(_objectSpread({
    mask: "999999999999",
    maskChar: " ",
    className: "my-input"
  }, field), props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 47
  }, _this);
};

_c2 = IinMask;

var FormRegister = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(FormRegister, _React$Component);

  var _super = _createSuper(FormRegister);

  function FormRegister(props) {
    var _this2;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FormRegister);

    _this2 = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2), "handlePhone", function (e) {
      _this2.setState({
        phone: e.target.value
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2), "handleCheck", function (e) {
      _this2.setState({
        checked: !_this2.state.checked
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2), "onChange", function (e) {
      var value = e.target.value;
      value = value.replace(/[^A-Za-z]/ig, '');
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2), "handleSubmitFail", function (errors) {
      var key = Object.keys(errors).reduce(function (k, l) {
        return document.getElementsByName(k)[0].offsetTop < document.getElementsByName(l)[0].offsetTop ? k : l;
      });
      window.scrollTo(0, document.getElementsByName(key)[0].offsetTop - 100);
    });

    _this2.state = {
      isModalOpen: false,
      checked: false,
      phoneError: ""
    };
    _this2.toggleModal = _this2.toggleModal.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2));
    _this2.handleSubmit = _this2.handleSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2));
    _this2.handleSubmitFail = _this2.handleSubmitFail.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2));
    _this2.handleCheck = _this2.handleCheck.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2));
    _this2.handleFocus = _this2.handleFocus.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2));
    _this2.onChange = _this2.onChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2));
    return _this2;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FormRegister, [{
    key: "toggleModal",
    value: function toggleModal() {
      this.setState({
        isModalOpen: !this.state.isModalOpen
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(values) {
      var moneyval = this.props.moneyVal;
      var dayval = this.props.dayVal;
      var other = {};
      values.loan_amount = moneyval;
      values.period_in_days = dayval;
      values.major_loan_amount = Math.floor(parseInt(moneyval) * 1.15);
      values.grace_period_amount = Math.floor(parseInt(moneyval) * 1.15);
      values.loan_amount_for_max_days = Math.floor(Math.round(parseInt(moneyval) * (1 + parseInt(dayval) / 100 * 2)) / 100 * 100);
      values.insurance_amount = Math.floor(parseInt(moneyval) * 1.15) - parseInt(moneyval);
      values.award_amount = Math.floor(parseInt(moneyval) * 1.15) - parseInt(moneyval);
      other.finished_step = 1;

      var finalObjects = _objectSpread(_objectSpread({}, other), values);

      if (Object(_defaults_validations__WEBPACK_IMPORTED_MODULE_17__["validage"])(values.iin) === false) {
        sweetalert__WEBPACK_IMPORTED_MODULE_16___default()("Oops!", "\u041F\u043E \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u043C \u043D\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u043D\u044B\u043C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u043C  \u0422\u041E\u041E \"\u041C\u0424\u041E i-redit.kz\"  \u0432\u044B\u0434\u0430\u0447\u0430 \u0437\u0430\u0439\u043C\u0430 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F  \u043B\u0438\u0446\u0430\u043C \u0434\u043E\u0441\u0442\u0438\u0433\u0448\u0438\u043C 21-\u0433\u043E \u0433\u043E\u0434\u0430 \u0438 \u043D\u0435 \u0441\u0442\u0430\u0440\u0448\u0435 63-\u0445 \u043B\u0435\u0442.", "error");
      } else {
        this.props.postRegistration(finalObjects);
      }
    }
  }, {
    key: "handleFocus",
    value: function handleFocus() {
      setTimeout(function () {
        scrollToElement('.text-danger', {
          offset: 0,
          align: 'middle',
          ease: 'outExpo',
          duration: 600
        });
      }, 100);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var progress = document.querySelector('.progress-done');
      progress.style.width = progress.getAttribute('data-done') + '%';
      progress.append(progress.getAttribute('data-done') + "%");
      progress.style.opacity = 1;
      jquery__WEBPACK_IMPORTED_MODULE_20___default()(document).ready(function () {
        jquery__WEBPACK_IMPORTED_MODULE_20___default()('input').on('change', function () {
          var cntreq = 0;
          var cntvals = 0;
          jquery__WEBPACK_IMPORTED_MODULE_20___default()('input').each(function (i, val) {
            cntreq++;

            if (jquery__WEBPACK_IMPORTED_MODULE_20___default()(this).val() != '') {
              cntvals += 5;
            }
          });
          var count = cntvals / cntreq * 100 - 20;
          jquery__WEBPACK_IMPORTED_MODULE_20___default()('#percentage').empty();
          jquery__WEBPACK_IMPORTED_MODULE_20___default()('#percentage').append(cntvals + '% completed');
          jquery__WEBPACK_IMPORTED_MODULE_20___default()('#progress-done').data('done', cntvals);
          jquery__WEBPACK_IMPORTED_MODULE_20___default()('#progress-done').width(jquery__WEBPACK_IMPORTED_MODULE_20___default()("#progress-done").data('done') + "% ");
          jquery__WEBPACK_IMPORTED_MODULE_20___default()('#progress-done').text(jquery__WEBPACK_IMPORTED_MODULE_20___default()("#progress-done").data('done') + "% ");
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      // const { history } = this.props;
      // const history = this.props.history
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "progressBar",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "progress-done",
            id: "progress-done",
            "data-done": "0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
            className: "counter",
            children: "\u0412\u0435\u0440\u043E\u044F\u0442\u043D\u043E\u0441\u0442\u044C \u043E\u0434\u043E\u0431\u0440\u0435\u043D\u0438\u044F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 9
        }, this), this.props.loading === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "modelLoader",
          children: disable_scroll__WEBPACK_IMPORTED_MODULE_19__["default"].on()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 13
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "modelLoader loaded",
          children: disable_scroll__WEBPACK_IMPORTED_MODULE_19__["default"].off()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_13__["Formik"], {
          initialValues: {
            loan_amount: '',
            period_in_days: '',
            major_loan_amount: '',
            grace_period_amount: '',
            loan_amount_for_max_days: '',
            insurance_amount: '',
            award_amount: '',
            source: 'i-credit.kz',
            name: '',
            middlename: '',
            last_name: '',
            email: '',
            iin: '',
            phone: '',
            password: '',
            password_confirmation: ''
          },
          onSubmit: function onSubmit(values) {
            // same shape as initial values
            // console.log(values)
            _this3.handleSubmit(values);
          },
          children: function children(_ref3) {
            var errors = _ref3.errors,
                touched = _ref3.touched,
                isValidating = _ref3.isValidating,
                isSubmitting = _ref3.isSubmitting;
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_13__["Form"], {
              className: "container formsStep",
              children: [_this3.props.somemessage.error !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "alert alert-danger",
                role: "alert",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("strong", {
                  children: _this3.props.somemessage.error
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 238,
                  columnNumber: 17
                }, _this3)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 237,
                columnNumber: 15
              }, _this3) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h2", {
                className: "text-center",
                children: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 242,
                columnNumber: 13
              }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "row form-group  mx-auto",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "col-12 mb-2",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Label"], {
                    htmlFor: "loan_amount",
                    children: "\u0421\u0443\u043C\u043C\u0430:"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 245,
                    columnNumber: 17
                  }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "input-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_13__["Field"], {
                      name: "loan_amount",
                      className: "form-control focus-visible",
                      value: _this3.props.moneyVal,
                      disabled: true,
                      "data-focus-visible-added": true
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 247,
                      columnNumber: 19
                    }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                      className: "input-group-append",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
                        "data-toggle": "modal",
                        "data-target": "#myModalCalc",
                        className: "input-group-text",
                        onClick: _this3.toggleModal,
                        children: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C..."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 255,
                        columnNumber: 21
                      }, _this3)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 254,
                      columnNumber: 19
                    }, _this3)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 246,
                    columnNumber: 17
                  }, _this3)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 244,
                  columnNumber: 15
                }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "col-12 mb-2",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Label"], {
                    htmlFor: "period_in_days",
                    children: "\u0414\u043D\u0435\u0439:"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 264,
                    columnNumber: 17
                  }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "input-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_13__["Field"], {
                      name: "period_in_days",
                      className: "form-control focus-visible",
                      value: _this3.props.dayVal,
                      disabled: true,
                      "data-focus-visible-added": true
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 266,
                      columnNumber: 19
                    }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                      className: "input-group-append",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
                        "data-toggle": "modal",
                        "data-target": "#myModalCalc",
                        className: "input-group-text",
                        onClick: _this3.toggleModal,
                        children: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C..."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 274,
                        columnNumber: 21
                      }, _this3)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 273,
                      columnNumber: 19
                    }, _this3)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 265,
                    columnNumber: 17
                  }, _this3)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 263,
                  columnNumber: 15
                }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "col-12 mb-2",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Label"], {
                    htmlFor: "name",
                    children: "\u0418\u043C\u044F * :"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 284,
                    columnNumber: 17
                  }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "input-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_13__["Field"], {
                      name: "name",
                      autocomplete: "off",
                      placeholder: "\u0418\u043C\u044F",
                      className: "form-control  text-capitalize registerCyrril",
                      validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_17__["acceptCirrilic"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 286,
                      columnNumber: 19
                    }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                      className: "hint",
                      children: "\u0418\u043C\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430 \u043A\u0438\u0440\u0440\u0438\u043B\u0438\u0446\u0435"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 293,
                      columnNumber: 19
                    }, _this3)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 285,
                    columnNumber: 17
                  }, _this3), errors.name && touched.name && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "text-danger",
                    children: errors.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 295,
                    columnNumber: 49
                  }, _this3)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 283,
                  columnNumber: 15
                }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "col-12 mb-2",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Label"], {
                    htmlFor: "middlename",
                    children: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F * :"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 299,
                    columnNumber: 17
                  }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "input-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_13__["Field"], {
                      name: "middlename",
                      autocomplete: "off",
                      placeholder: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F",
                      className: "form-control  text-capitalize registerCyrril",
                      validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_17__["acceptCirrilic"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 301,
                      columnNumber: 19
                    }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                      className: "hint",
                      children: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430 \u043A\u0438\u0440\u0440\u0438\u043B\u0438\u0446\u0435"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 308,
                      columnNumber: 19
                    }, _this3)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 300,
                    columnNumber: 17
                  }, _this3), errors.middlename && touched.middlename && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "text-danger",
                    children: errors.middlename
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 310,
                    columnNumber: 61
                  }, _this3)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 298,
                  columnNumber: 15
                }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "col-12 mb-2",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Label"], {
                    htmlFor: "last_name",
                    children: "\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E:"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 314,
                    columnNumber: 17
                  }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "input-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_13__["Field"], {
                      name: "last_name",
                      autocomplete: "off",
                      placeholder: "\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E",
                      className: "form-control  text-capitalize registerCyrril",
                      validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_17__["acceptCirrilicOnly"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 316,
                      columnNumber: 19
                    }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                      className: "hint",
                      children: "\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430 \u043A\u0438\u0440\u0440\u0438\u043B\u0438\u0446\u0435"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 323,
                      columnNumber: 19
                    }, _this3)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 315,
                    columnNumber: 17
                  }, _this3), errors.last_name && touched.last_name && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "text-danger",
                    children: errors.last_name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 325,
                    columnNumber: 59
                  }, _this3)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 313,
                  columnNumber: 15
                }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "col-12 mb-2",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Label"], {
                    htmlFor: "email",
                    children: "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441 * :"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 329,
                    columnNumber: 17
                  }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "input-group",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_13__["Field"], {
                      name: "email",
                      className: "form-control",
                      validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_17__["validEmail"],
                      placeholder: "\u0412\u0430\u0448 email"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 331,
                      columnNumber: 19
                    }, _this3)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 330,
                    columnNumber: 17
                  }, _this3), errors.email && touched.email && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "text-danger",
                    children: errors.email
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 338,
                    columnNumber: 51
                  }, _this3)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 328,
                  columnNumber: 15
                }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "col-12 mb-2",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Label"], {
                    htmlFor: "iin",
                    children: "\u0418\u0418\u041D * :"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 342,
                    columnNumber: 17
                  }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "input-group",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_13__["Field"], {
                      name: "iin",
                      type: "tel",
                      className: "form-control",
                      validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_17__["iinValidation"],
                      component: IinMask,
                      placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u044E\u0434\u0430"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 344,
                      columnNumber: 19
                    }, _this3)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 343,
                    columnNumber: 17
                  }, _this3), errors.iin && touched.iin && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "text-danger",
                    children: errors.iin
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 353,
                    columnNumber: 47
                  }, _this3)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 341,
                  columnNumber: 15
                }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "col-12 mb-2",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Label"], {
                    htmlFor: "phone",
                    children: "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 * :"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 357,
                    columnNumber: 17
                  }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "input-group",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_13__["Field"], {
                      name: "phone",
                      type: "tel",
                      className: "form-control",
                      validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_17__["phoneValidation"],
                      component: PhoneMask,
                      placeholder: "+7(705)000-00-00"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 359,
                      columnNumber: 19
                    }, _this3)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 358,
                    columnNumber: 17
                  }, _this3), errors.phone && touched.phone && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "text-danger",
                    children: errors.phone
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 368,
                    columnNumber: 51
                  }, _this3)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 356,
                  columnNumber: 15
                }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "col-12 mb-2",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Label"], {
                    htmlFor: "phone",
                    children: "\u041F\u0430\u0440\u043E\u043B\u044C * :"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 372,
                    columnNumber: 17
                  }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "input-group",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_13__["Field"], {
                      name: "password",
                      className: "form-control",
                      validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_17__["passwordCheck"],
                      placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C",
                      type: "password"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 374,
                      columnNumber: 19
                    }, _this3)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 373,
                    columnNumber: 17
                  }, _this3), errors.password && touched.password && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "text-danger",
                    children: errors.password
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 382,
                    columnNumber: 57
                  }, _this3)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 371,
                  columnNumber: 15
                }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "col-12 mb-2",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Label"], {
                    htmlFor: "phone",
                    children: "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C * :"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 386,
                    columnNumber: 17
                  }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "input-group",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_13__["Field"], {
                      name: "password_confirmation",
                      className: "form-control",
                      type: "password",
                      validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_17__["requiredd"],
                      placeholder: "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 388,
                      columnNumber: 19
                    }, _this3)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 387,
                    columnNumber: 17
                  }, _this3), errors.password_confirmation && touched.password_confirmation && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "text-danger",
                    children: errors.password_confirmation
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 396,
                    columnNumber: 83
                  }, _this3)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 385,
                  columnNumber: 15
                }, _this3)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 243,
                columnNumber: 13
              }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "col-12 mb-2 form-group d-flex align-items-center col-12 mx-auto",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("input", {
                  type: "checkbox",
                  onChange: _this3.handleCheck,
                  defaultChecked: _this3.state.checked
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 400,
                  columnNumber: 15
                }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("label", {
                  className: "form-check-label ml-3",
                  htmlFor: "exampleCheck1",
                  children: ["\u0421\u043E\u0433\u043B\u0430\u0441\u0435\u043D \u043D\u0430 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
                    className: "agreement ",
                    href: "https://api.money-men.kz/docs/approve.pdf",
                    target: "_blank",
                    children: "\u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0434\u0430\u043D\u043D\u044B\u0445 \u0441 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438 \u0441\u0430\u0439\u0442\u0430"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 404,
                    columnNumber: 92
                  }, _this3)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 404,
                  columnNumber: 15
                }, _this3)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 399,
                columnNumber: 13
              }, _this3), _this3.props.somemessage.error !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "alert alert-danger",
                role: "alert",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("strong", {
                  children: [" ", _this3.props.somemessage.error || null]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 415,
                  columnNumber: 16
                }, _this3)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 414,
                columnNumber: 8
              }, _this3) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "button form-group",
                children: _this3.props.loading === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_spinner_material__WEBPACK_IMPORTED_MODULE_18___default.a, {
                    className: "loading",
                    size: 200,
                    spinnerColor: "#ef2221",
                    spinnerWidth: 2,
                    visible: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 421,
                    columnNumber: 10
                  }, _this3)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 419,
                  columnNumber: 9
                }, _this3) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
                  disabled: !_this3.state.checked,
                  type: "submit ",
                  onClick: function onClick() {
                    return _this3.handleFocus();
                  },
                  className: "agreement-btn",
                  children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u043E\u0434"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 426,
                  columnNumber: 9
                }, _this3)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 417,
                columnNumber: 8
              }, _this3)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 235,
              columnNumber: 11
            }, _this3);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Modal"], {
          "class": "modal modal-calculator",
          isOpen: this.state.isModalOpen,
          toggle: this.toggleModal,
          size: "lg",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_12__["ModalHeader"], {
            toggle: this.toggleModal,
            children: "\u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 439,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_12__["ModalBody"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_shared_Progressbar__WEBPACK_IMPORTED_MODULE_15__["default"], {
              className: "progressbar modal"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 441,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 440,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 434,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 7
      }, this);
    }
  }]);

  return FormRegister;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps)(FormRegister));

var _c, _c2;

$RefreshReg$(_c, "PhoneMask");
$RefreshReg$(_c2, "IinMask");

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

/***/ "./node_modules/react-text-mask/dist/reactTextMask.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZWdpc3RyYXRpb25Gb3JtL0Zvcm1SZWdpc3Rlci5qcyJdLCJuYW1lcyI6WyJzY3JvbGxUb0VsZW1lbnQiLCJyZXF1aXJlIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtb25leVZhbCIsImRheVZhbCIsImNoZWNrZWQiLCJzb21lbWVzc2FnZSIsIm1lc3NhZ2UiLCJyZWdpc3RyYXRpb24iLCJsb2FkaW5nIiwicmVnaXN0cmF0aW9uMSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiY2hhbmdpbmdNb25leSIsIm1vbmV5IiwiY2hhbmdpbmdEYXkiLCJkYXkiLCJwb3N0UmVnaXN0cmF0aW9uIiwicmVzZXRSZWdpc3RyYXRpb24iLCJhY3Rpb25zIiwicmVzZXQiLCJQaG9uZU1hc2siLCJmaWVsZCIsImZvcm0iLCJwcm9wcyIsIklpbk1hc2siLCJGb3JtUmVnaXN0ZXIiLCJlIiwic2V0U3RhdGUiLCJwaG9uZSIsInRhcmdldCIsInZhbHVlIiwicmVwbGFjZSIsImVycm9ycyIsImtleSIsIk9iamVjdCIsImtleXMiLCJyZWR1Y2UiLCJrIiwibCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJvZmZzZXRUb3AiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsImlzTW9kYWxPcGVuIiwicGhvbmVFcnJvciIsInRvZ2dsZU1vZGFsIiwiYmluZCIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZVN1Ym1pdEZhaWwiLCJoYW5kbGVDaGVjayIsImhhbmRsZUZvY3VzIiwib25DaGFuZ2UiLCJ2YWx1ZXMiLCJtb25leXZhbCIsImRheXZhbCIsIm90aGVyIiwibG9hbl9hbW91bnQiLCJwZXJpb2RfaW5fZGF5cyIsIm1ham9yX2xvYW5fYW1vdW50IiwiTWF0aCIsImZsb29yIiwicGFyc2VJbnQiLCJncmFjZV9wZXJpb2RfYW1vdW50IiwibG9hbl9hbW91bnRfZm9yX21heF9kYXlzIiwicm91bmQiLCJpbnN1cmFuY2VfYW1vdW50IiwiYXdhcmRfYW1vdW50IiwiZmluaXNoZWRfc3RlcCIsImZpbmFsT2JqZWN0cyIsInZhbGlkYWdlIiwiaWluIiwic3dhbCIsInNldFRpbWVvdXQiLCJvZmZzZXQiLCJhbGlnbiIsImVhc2UiLCJkdXJhdGlvbiIsInByb2dyZXNzIiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwid2lkdGgiLCJnZXRBdHRyaWJ1dGUiLCJhcHBlbmQiLCJvcGFjaXR5IiwiJCIsInJlYWR5Iiwib24iLCJjbnRyZXEiLCJjbnR2YWxzIiwiZWFjaCIsImkiLCJ2YWwiLCJjb3VudCIsImVtcHR5IiwiZGF0YSIsInRleHQiLCJkaXNhYmxlU2Nyb2xsIiwib2ZmIiwic291cmNlIiwibmFtZSIsIm1pZGRsZW5hbWUiLCJsYXN0X25hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwicGFzc3dvcmRfY29uZmlybWF0aW9uIiwidG91Y2hlZCIsImlzVmFsaWRhdGluZyIsImlzU3VibWl0dGluZyIsImVycm9yIiwiYWNjZXB0Q2lycmlsaWMiLCJhY2NlcHRDaXJyaWxpY09ubHkiLCJ2YWxpZEVtYWlsIiwiaWluVmFsaWRhdGlvbiIsInBob25lVmFsaWRhdGlvbiIsInBhc3N3b3JkQ2hlY2siLCJyZXF1aXJlZGQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZUE7QUFDQTtBQUNBOztBQUVBLElBQUlBLGVBQWUsR0FBR0MsbUJBQU8sQ0FBQyxvRUFBRCxDQUE3Qjs7QUFDQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLEtBQUssRUFBSTtBQUMvQixTQUFPO0FBQ0xDLFlBQVEsRUFBRUQsS0FBSyxDQUFDQyxRQURYO0FBRUxDLFVBQU0sRUFBRUYsS0FBSyxDQUFDRSxNQUZUO0FBR0xDLFdB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O0FBQXNELHlCQUFPLEVBQUU7QUFBQSwyQkFBTSxNQUFJLENBQUMrQyxXQUFMLEVBQU47QUFBQSxtQkFBL0Q7QUFBeUYsMkJBQVMsRUFBQyxlQUFuRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVREO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBdExHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFEQTtBQUFBO0FBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZkYsZUFnUEUscUVBQUMsaURBQUQ7QUFDRSxtQkFBTSx3QkFEUjtBQUVFLGdCQUFNLEVBQUUsS0FBS2xELEtBQUwsQ0FBVzJDLFdBRnJCO0FBR0UsZ0JBQU0sRUFBRSxLQUFLRSxXQUhmO0FBSUUsY0FBSSxFQUFDLElBSlA7QUFBQSxrQ0FLRSxxRUFBQyx1REFBRDtBQUFhLGtCQUFNLEVBQUUsS0FBS0EsV0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEYsZUFNRSxxRUFBQyxxREFBRDtBQUFBLG1DQUNFLHFFQUFDLDREQUFEO0FBQWEsdUJBQVMsRUFBQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBaFBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBOFBEOzs7O0VBNVh3QnVFLDRDQUFLLENBQUNDLFM7O0FBK1hsQkMsMkhBQU8sQ0FBQ3ZILGVBQUQsRUFBa0JVLGtCQUFsQixDQUFQLENBQTZDZSxZQUE3QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dldF9tb25leS5mOTZlOGQ5YjgxY2UwNmJjNGIyZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHtjaGFuZ2luZ01vbmV5LCBjaGFuZ2luZ0RheSwgcG9zdFJlZ2lzdHJhdGlvbn0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy9BY3Rpb25DcmVhdG9ycyc7XHJcbmltcG9ydCB7TW9kYWwsIE1vZGFsSGVhZGVyLCBNb2RhbEJvZHksIExhYmVsLCBSb3d9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0sICBGaWVsZCAgfSBmcm9tICdmb3JtaWsnO1xyXG5pbXBvcnQgSW5wdXRNYXNrIGZyb20gXCJyZWFjdC1pbnB1dC1tYXNrXCI7XHJcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICcuLi9zaGFyZWQvUHJvZ3Jlc3NiYXInO1xyXG5pbXBvcnQgc3dhbCBmcm9tIFwic3dlZXRhbGVydFwiO1xyXG5pbXBvcnQge1xyXG4gIGlpblZhbGlkYXRpb24sXHJcbiAgcmVxdWlyZWQsXHJcbiAgcGhvbmVDaGVjayxcclxuICB2YWxpZEVtYWlsbCxcclxuICBwYXNzd29yZENoZWNrLFxyXG4gIHBob25lVmFsaWRhdGlvbixcclxuICBhY2NlcHRDaXJyaWxpYyxcclxuICBhY2NlcHRDaXJyaWxpY09ubHksXHJcbiAgdmFsaWRhdGVDb25maXJtUGFzc3dvcmQsXHJcbiAgdmFsaWRhZ2UsXHJcbiAgZ2V0QWdlLFxyXG4gIHJlcXVpcmVkZCxcclxuICB2YWxpZEVtYWlsXHJcbn0gZnJvbSAnLi4vLi4vZGVmYXVsdHMvdmFsaWRhdGlvbnMnO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tICdyZWFjdC1zcGlubmVyLW1hdGVyaWFsJztcclxuaW1wb3J0IGRpc2FibGVTY3JvbGwgZnJvbSAnZGlzYWJsZS1zY3JvbGwnO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxudmFyIHNjcm9sbFRvRWxlbWVudCA9IHJlcXVpcmUoJ3Njcm9sbC10by1lbGVtZW50Jyk7XHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgbW9uZXlWYWw6IHN0YXRlLm1vbmV5VmFsLFxyXG4gICAgZGF5VmFsOiBzdGF0ZS5kYXlWYWwsXHJcbiAgICBjaGVja2VkOiBmYWxzZSxcclxuICAgIHNvbWVtZXNzYWdlOiBzdGF0ZS5tZXNzYWdlLFxyXG4gICAgcmVnaXN0cmF0aW9uOiBzdGF0ZS5yZWdpc3RyYXRpb24sXHJcbiAgICBsb2FkaW5nOiBzdGF0ZS5sb2FkaW5nLFxyXG4gICAgcmVnaXN0cmF0aW9uMTogc3RhdGUucmVnaXN0cmF0aW9uMVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIGNoYW5naW5nTW9uZXk6IG1vbmV5ID0+IHtcclxuICAgIGRpc3BhdGNoKGNoYW5naW5nTW9uZXkobW9uZXkpKTtcclxuICB9LFxyXG4gIGNoYW5naW5nRGF5OiBkYXkgPT4ge1xyXG4gICAgZGlzcGF0Y2goY2hhbmdpbmdEYXkoZGF5KSk7XHJcbiAgfSxcclxuICBwb3N0UmVnaXN0cmF0aW9uOiAocmVnaXN0cmF0aW9uKSA9PiBkaXNwYXRjaChwb3N0UmVnaXN0cmF0aW9uKHJlZ2lzdHJhdGlvbikpLFxyXG4gIHJlc2V0UmVnaXN0cmF0aW9uOiAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChhY3Rpb25zLnJlc2V0KCdyZWdpc3RyYXRpb24nKSlcclxuICB9XHJcbn0pXHJcblxyXG5jb25zdCBQaG9uZU1hc2sgPSAoeyBmaWVsZCwgZm9ybSwgLi4ucHJvcHMgfSkgPT4gPElucHV0TWFza1xyXG4gIG1hc2s9XCIrNyg5OTkpLTk5OS05OTk5XCJcclxuICBtYXNrQ2hhcj1cIiBcIlxyXG4gIGNsYXNzTmFtZT1cIm15LWlucHV0XCJcclxuICB7Li4uZmllbGR9XHJcbiAgey4uLnByb3BzfS8+O1xyXG5jb25zdCBJaW5NYXNrID0gKHsgZmllbGQsIGZvcm0sIC4uLnByb3BzfSkgPT4gPElucHV0TWFzayBcclxuICBtYXNrPVwiOTk5OTk5OTk5OTk5XCJcclxuICBtYXNrQ2hhcj0gXCIgXCJcclxuICBjbGFzc05hbWU9XCJteS1pbnB1dFwiXHJcbiAgey4uLmZpZWxkfVxyXG4gIHsuLi5wcm9wc30gLz5cclxuXHJcbmNsYXNzIEZvcm1SZWdpc3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGlzTW9kYWxPcGVuOiBmYWxzZSxcclxuICAgICAgY2hlY2tlZDogZmFsc2UsXHJcbiAgICAgIHBob25lRXJyb3I6IFwiXCJcclxuICAgIH07XHJcbiAgICB0aGlzLnRvZ2dsZU1vZGFsID0gdGhpc1xyXG4gICAgICAudG9nZ2xlTW9kYWxcclxuICAgICAgLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXNcclxuICAgICAgLmhhbmRsZVN1Ym1pdFxyXG4gICAgICAuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlU3VibWl0RmFpbCA9IHRoaXNcclxuICAgICAgLmhhbmRsZVN1Ym1pdEZhaWxcclxuICAgICAgLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZUNoZWNrID0gdGhpc1xyXG4gICAgICAuaGFuZGxlQ2hlY2tcclxuICAgICAgLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZUZvY3VzID0gdGhpc1xyXG4gICAgICAuaGFuZGxlRm9jdXNcclxuICAgICAgLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpc1xyXG4gICAgICAub25DaGFuZ2VcclxuICAgICAgLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVNb2RhbCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBpc01vZGFsT3BlbjogIXRoaXMuc3RhdGUuaXNNb2RhbE9wZW5cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBoYW5kbGVQaG9uZSA9IGUgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7cGhvbmU6IGUudGFyZ2V0LnZhbHVlfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDaGVjayA9IChlKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY2hlY2tlZDogIXRoaXMuc3RhdGUuY2hlY2tlZFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXkEtWmEtel0vaWcsICcnKVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3VibWl0RmFpbCA9IChlcnJvcnMpID0+IHtcclxuICAgIGxldCBrZXkgPSBPYmplY3Qua2V5cyhlcnJvcnMpLnJlZHVjZSgoaywgbCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaylbMF0ub2Zmc2V0VG9wIDwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUobClbMF0ub2Zmc2V0VG9wKVxyXG4gICAgICAgICAgPyBrXHJcbiAgICAgICAgICA6IGw7XHJcbiAgICAgIH0pO1xyXG4gICAgd2luZG93LnNjcm9sbFRvKDAsIGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGtleSlbMF0ub2Zmc2V0VG9wIC0gMTAwKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVN1Ym1pdCh2YWx1ZXMpIHtcclxuICAgIHZhciBtb25leXZhbCA9IHRoaXMucHJvcHMubW9uZXlWYWw7XHJcbiAgICB2YXIgZGF5dmFsID0gdGhpcy5wcm9wcy5kYXlWYWw7XHJcbiAgICB2YXIgb3RoZXIgPSB7fTtcclxuICAgIHZhbHVlcy5sb2FuX2Ftb3VudCA9IG1vbmV5dmFsO1xyXG4gICAgdmFsdWVzLnBlcmlvZF9pbl9kYXlzID0gZGF5dmFsO1xyXG4gICAgdmFsdWVzLm1ham9yX2xvYW5fYW1vdW50ID0gTWF0aC5mbG9vcihwYXJzZUludChtb25leXZhbCkgKiAxLjE1KTtcclxuICAgIHZhbHVlcy5ncmFjZV9wZXJpb2RfYW1vdW50ID0gTWF0aC5mbG9vcihwYXJzZUludChtb25leXZhbCkgKiAxLjE1KTtcclxuICAgIHZhbHVlcy5sb2FuX2Ftb3VudF9mb3JfbWF4X2RheXMgPSBNYXRoLmZsb29yKE1hdGgucm91bmQocGFyc2VJbnQobW9uZXl2YWwpICogKDEgKyAocGFyc2VJbnQoZGF5dmFsKSAvIDEwMCkgKiAyKSkgLyAxMDAgKiAxMDApO1xyXG4gICAgdmFsdWVzLmluc3VyYW5jZV9hbW91bnQgPSBNYXRoLmZsb29yKHBhcnNlSW50KG1vbmV5dmFsKSAqIDEuMTUpIC0gcGFyc2VJbnQobW9uZXl2YWwpO1xyXG4gICAgdmFsdWVzLmF3YXJkX2Ftb3VudCA9IE1hdGguZmxvb3IocGFyc2VJbnQobW9uZXl2YWwpICogMS4xNSkgLSBwYXJzZUludChtb25leXZhbCk7XHJcbiAgICBvdGhlci5maW5pc2hlZF9zdGVwID0gMTtcclxuICAgIGNvbnN0IGZpbmFsT2JqZWN0cyA9IHtcclxuICAgICAgLi4ub3RoZXIsXHJcbiAgICAgIC4uLnZhbHVlc1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHZhbGlkYWdlKHZhbHVlcy5paW4pID09PSBmYWxzZSkge1xyXG4gICAgICBzd2FsKFwiT29wcyFcIiwgYNCf0L4g0LLQvdGD0YLRgNC10L3QvdC40Lwg0L3QvtGA0LzQsNGC0LjQstC90YvQvCDQtNC+0LrRg9C80LXQvdGC0LDQvCAg0KLQntCeIFwi0JzQpNCeIGktcmVkaXQua3pcIiAg0LLRi9C00LDRh9CwINC30LDQudC80LAg0L7RgdGD0YnQtdGB0YLQstC70Y/QtdGC0YHRjyAg0LvQuNGG0LDQvCDQtNC+0YHRgtC40LPRiNC40LwgMjEt0LPQviDQs9C+0LTQsCDQuCDQvdC1INGB0YLQsNGA0YjQtSA2My3RhSDQu9C10YIuYCwgXCJlcnJvclwiKTtcclxuICAgIH1lbHNlIHtcclxuICAgICAgdGhpcy5wcm9wcy5wb3N0UmVnaXN0cmF0aW9uKGZpbmFsT2JqZWN0cyk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgaGFuZGxlRm9jdXMoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2Nyb2xsVG9FbGVtZW50KCcudGV4dC1kYW5nZXInLCB7XHJcbiAgICAgICAgb2Zmc2V0OiAwLFxyXG4gICAgICAgIGFsaWduOiAnbWlkZGxlJyxcclxuICAgICAgICBlYXNlOiAnb3V0RXhwbycsXHJcbiAgICAgICAgZHVyYXRpb246IDYwMFxyXG4gICAgICB9KTtcclxuICAgIH0sMTAwKVxyXG5cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc3QgcHJvZ3Jlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZ3Jlc3MtZG9uZScpO1xyXG4gICAgcHJvZ3Jlc3Muc3R5bGUud2lkdGggPSBwcm9ncmVzcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZG9uZScpICsgJyUnO1xyXG4gICAgcHJvZ3Jlc3MuYXBwZW5kKHByb2dyZXNzLmdldEF0dHJpYnV0ZSgnZGF0YS1kb25lJykgKyBcIiVcIilcclxuICAgIHByb2dyZXNzLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgJCgnaW5wdXQnKVxyXG4gICAgICAgIC5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgdmFyIGNudHJlcSA9IDA7XHJcbiAgICAgICAgICB2YXIgY250dmFscyA9IDA7XHJcbiAgICAgICAgICAkKCdpbnB1dCcpLmVhY2goZnVuY3Rpb24gKGksIHZhbCkge1xyXG4gICAgICAgICAgICBjbnRyZXErKztcclxuICAgICAgICAgICAgaWYgKCQodGhpcykudmFsKCkgIT0gJycpIHtcclxuICAgICAgICAgICAgICBjbnR2YWxzICs9IDU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdmFyIGNvdW50ID0gKGNudHZhbHMgLyBjbnRyZXEpICogMTAwIC0gMjA7XHJcbiAgICAgICAgICAkKCcjcGVyY2VudGFnZScpLmVtcHR5KCk7XHJcbiAgICAgICAgICAkKCcjcGVyY2VudGFnZScpLmFwcGVuZChjbnR2YWxzICsgJyUgY29tcGxldGVkJyk7XHJcblxyXG4gICAgICAgICAgJCgnI3Byb2dyZXNzLWRvbmUnKS5kYXRhKCdkb25lJywgY250dmFscylcclxuICAgICAgICAgICQoJyNwcm9ncmVzcy1kb25lJykud2lkdGgoJChcIiNwcm9ncmVzcy1kb25lXCIpLmRhdGEoJ2RvbmUnKSArIFwiJSBcIilcclxuICAgICAgICAgICQoJyNwcm9ncmVzcy1kb25lJykudGV4dCgkKFwiI3Byb2dyZXNzLWRvbmVcIikuZGF0YSgnZG9uZScpICsgXCIlIFwiKVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICAvLyBjb25zdCB7IGhpc3RvcnkgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAvLyBjb25zdCBoaXN0b3J5ID0gdGhpcy5wcm9wcy5oaXN0b3J5XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzQmFyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzLWRvbmVcIiBpZD1cInByb2dyZXNzLWRvbmVcIiBkYXRhLWRvbmU9XCIwXCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY291bnRlclwiPtCS0LXRgNC+0Y/RgtC90L7RgdGC0Ywg0L7QtNC+0LHRgNC10L3QuNGPPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHt0aGlzLnByb3BzLmxvYWRpbmcgPT09IHRydWVcclxuICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9XCJtb2RlbExvYWRlclwiPlxyXG4gICAgICAgICAgICAgIHtkaXNhYmxlU2Nyb2xsLm9uKCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT1cIm1vZGVsTG9hZGVyIGxvYWRlZFwiPlxyXG4gICAgICAgICAgICB7ZGlzYWJsZVNjcm9sbC5vZmYoKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICBpbml0aWFsVmFsdWVzID0ge3tcclxuICAgICAgICAgICAgbG9hbl9hbW91bnQ6ICcnLFxyXG4gICAgICAgICAgICBwZXJpb2RfaW5fZGF5czogJycsXHJcbiAgICAgICAgICAgIG1ham9yX2xvYW5fYW1vdW50OiAnJyxcclxuICAgICAgICAgICAgZ3JhY2VfcGVyaW9kX2Ftb3VudDogJycsXHJcbiAgICAgICAgICAgIGxvYW5fYW1vdW50X2Zvcl9tYXhfZGF5czogJycsXHJcbiAgICAgICAgICAgIGluc3VyYW5jZV9hbW91bnQ6ICcnLFxyXG4gICAgICAgICAgICBhd2FyZF9hbW91bnQ6ICAnJyxcclxuICAgICAgICAgICAgc291cmNlOiAnaS1jcmVkaXQua3onLFxyXG4gICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgbWlkZGxlbmFtZTogJycsXHJcbiAgICAgICAgICAgIGxhc3RfbmFtZTogJycsXHJcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgICAgaWluOiAnJyxcclxuICAgICAgICAgICAgcGhvbmU6ICcnLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogJycsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25TdWJtaXQ9e3ZhbHVlcyA9PiB7XHJcbiAgICAgICAgICAgIC8vIHNhbWUgc2hhcGUgYXMgaW5pdGlhbCB2YWx1ZXNcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codmFsdWVzKVxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCh2YWx1ZXMpXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgeyh7IGVycm9ycywgdG91Y2hlZCwgaXNWYWxpZGF0aW5nLCBpc1N1Ym1pdHRpbmcgfSkgPT4gKFxyXG4gICAgICAgICAgPEZvcm0gIGNsYXNzTmFtZT1cImNvbnRhaW5lciBmb3Jtc1N0ZXBcIj5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuc29tZW1lc3NhZ2UuZXJyb3IgIT09IG51bGxcclxuICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc29tZW1lc3NhZ2UuZXJyb3J9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+0KDQtdCz0LjRgdGC0YDQsNGG0LjRjzwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgZm9ybS1ncm91cCAgbXgtYXV0byc+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC0xMiBtYi0yJz5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPSdsb2FuX2Ftb3VudCc+0KHRg9C80LzQsDo8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdsb2FuX2Ftb3VudCdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCBmb2N1cy12aXNpYmxlJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLm1vbmV5VmFsfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1mb2N1cy12aXNpYmxlLWFkZGVkXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjbXlNb2RhbENhbGNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZU1vZGFsfT7QmNC30LzQtdC90LjRgtGMLi4uPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMTIgbWItMic+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj0ncGVyaW9kX2luX2RheXMnPtCU0L3QtdC5OjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J3BlcmlvZF9pbl9kYXlzJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sIGZvY3VzLXZpc2libGUnXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuZGF5VmFsfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1mb2N1cy12aXNpYmxlLWFkZGVkXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjbXlNb2RhbENhbGNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZU1vZGFsfT7QmNC30LzQtdC90LjRgtGMLi4uPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTEyIG1iLTInPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9J25hbWUnPtCY0LzRjyAqIDo8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPSduYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSAn0JjQvNGPJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sICB0ZXh0LWNhcGl0YWxpemUgcmVnaXN0ZXJDeXJyaWwnXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU9e2FjY2VwdENpcnJpbGljfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpbnRcIj7QmNC80Y8g0YLQvtC70YzQutC+INC90LAg0LrQuNGA0YDQuNC70LjRhtC1PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMubmFtZSAmJiB0b3VjaGVkLm5hbWUgJiYgPGRpdiBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLm5hbWV9PC9kaXY+fVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTEyIG1iLTInPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9J21pZGRsZW5hbWUnPtCk0LDQvNC40LvQuNGPICogOjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J21pZGRsZW5hbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9ICfQpNCw0LzQuNC70LjRjydcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCAgdGV4dC1jYXBpdGFsaXplIHJlZ2lzdGVyQ3lycmlsJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlPXthY2NlcHRDaXJyaWxpY31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaW50XCI+0KTQsNC80LjQu9C40Y8g0YLQvtC70YzQutC+INC90LAg0LrQuNGA0YDQuNC70LjRhtC1PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMubWlkZGxlbmFtZSAmJiB0b3VjaGVkLm1pZGRsZW5hbWUgJiYgPGRpdiBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLm1pZGRsZW5hbWV9PC9kaXY+fVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTEyIG1iLTInPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9J2xhc3RfbmFtZSc+0J7RgtGH0LXRgdGC0LLQvjo8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdsYXN0X25hbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9ICfQntGC0YfQtdGB0YLQstC+J1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sICB0ZXh0LWNhcGl0YWxpemUgcmVnaXN0ZXJDeXJyaWwnXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU9e2FjY2VwdENpcnJpbGljT25seX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaW50XCI+0J7RgtGH0LXRgdGC0LLQviDRgtC+0LvRjNC60L4g0L3QsCDQutC40YDRgNC40LvQuNGG0LU8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge2Vycm9ycy5sYXN0X25hbWUgJiYgdG91Y2hlZC5sYXN0X25hbWUgJiYgPGRpdiBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLmxhc3RfbmFtZX08L2Rpdj59XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMTIgbWItMic+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj0nZW1haWwnPtCt0LvQtdC60YLRgNC+0L3QvdGL0Lkg0LDQtNGA0LXRgSAqIDo8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdlbWFpbCdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZT17dmFsaWRFbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9ICfQktCw0YggZW1haWwnXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMuZW1haWwgJiYgdG91Y2hlZC5lbWFpbCAmJiA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMuZW1haWx9PC9kaXY+fVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTEyIG1iLTInPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9J2lpbic+0JjQmNCdICogOjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2lpbidcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZWwnXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU9e2lpblZhbGlkYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50ID0ge0lpbk1hc2t9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSAn0JLQstC10LTQuNGC0LUg0YHRjtC00LAnXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMuaWluICYmIHRvdWNoZWQuaWluICYmIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5paW59PC9kaXY+fVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTEyIG1iLTInPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9J3Bob25lJz7QndC+0LzQtdGAINGC0LXQu9C10YTQvtC90LAgKiA6PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0ncGhvbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGVsJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlPXtwaG9uZVZhbGlkYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50ID0ge1Bob25lTWFza31cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9ICcrNyg3MDUpMDAwLTAwLTAwJ1xyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3JzLnBob25lICYmIHRvdWNoZWQucGhvbmUgJiYgPGRpdiBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLnBob25lfTwvZGl2Pn1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC0xMiBtYi0yJz5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPSdwaG9uZSc+0J/QsNGA0L7Qu9GMICogOjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlPXtwYXNzd29yZENoZWNrfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gJ9Cf0LDRgNC+0LvRjCdcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge2Vycm9ycy5wYXNzd29yZCAmJiB0b3VjaGVkLnBhc3N3b3JkICYmIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5wYXNzd29yZH08L2Rpdj59XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMTIgbWItMic+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj0ncGhvbmUnPtCf0L7QstGC0L7RgNC40YLQtSDQv9Cw0YDQvtC70YwgKiA6PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0ncGFzc3dvcmRfY29uZmlybWF0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlPXtyZXF1aXJlZGR9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSAn0J/QvtCy0YLQvtGA0LjRgtC1INC/0LDRgNC+0LvRjCdcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge2Vycm9ycy5wYXNzd29yZF9jb25maXJtYXRpb24gJiYgdG91Y2hlZC5wYXNzd29yZF9jb25maXJtYXRpb24gJiYgPGRpdiBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLnBhc3N3b3JkX2NvbmZpcm1hdGlvbn08L2Rpdj59XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTEyIG1iLTIgZm9ybS1ncm91cCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGNvbC0xMiBteC1hdXRvJz5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGVja31cclxuICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrZWR9Lz5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbCBtbC0zXCIgaHRtbEZvcj1cImV4YW1wbGVDaGVjazFcIj7QodC+0LPQu9Cw0YHQtdC9INC90LAgPGFcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWdyZWVtZW50IFwiXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2FwaS5tb25leS1tZW4ua3ovZG9jcy9hcHByb3ZlLnBkZlwiXHJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiPtC+0LHRgNCw0LHQvtGC0LrRgyDQtNCw0L3QvdGL0YUg0YEg0YPRgdC70L7QstC40Y/QvNC4INGB0LDQudGC0LA8L2E+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcblx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuc29tZW1lc3NhZ2UuZXJyb3IgIT09IG51bGwgP1xyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCI+XHJcbiAgICAgICAgXHRcdFx0XHRcdFx0XHQ8c3Ryb25nPiB7dGhpcy5wcm9wcy5zb21lbWVzc2FnZS5lcnJvciAgfHwgbnVsbH08L3N0cm9uZz5cclxuICAgICAgICAgICAgXHRcdFx0XHQ8L2Rpdj4gOiBudWxsfVxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIGZvcm0tZ3JvdXBcIiA+XHJcblx0XHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5sb2FkaW5nID09PSB0cnVlID9cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8U3Bpbm5lciBjbGFzc05hbWU9XCJsb2FkaW5nXCIgc2l6ZT17MjAwfSBzcGlubmVyQ29sb3I9e1wiI2VmMjIyMVwifSBzcGlubmVyV2lkdGg9ezJ9IHZpc2libGU9e3RydWV9IC8+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQgIDpcclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5jaGVja2VkfSB0eXBlPVwic3VibWl0IFwiIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRm9jdXMoKX0gY2xhc3NOYW1lPVwiYWdyZWVtZW50LWJ0blwiPtCf0L7Qu9GD0YfQuNGC0Ywg0LrQvtC0PC9idXR0b24+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICA8L0Zvcm1paz5cclxuXHJcbiAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICBjbGFzcz1cIm1vZGFsIG1vZGFsLWNhbGN1bGF0b3JcIlxyXG4gICAgICAgICAgaXNPcGVuPXt0aGlzLnN0YXRlLmlzTW9kYWxPcGVufVxyXG4gICAgICAgICAgdG9nZ2xlPXt0aGlzLnRvZ2dsZU1vZGFsfVxyXG4gICAgICAgICAgc2l6ZT1cImxnXCI+XHJcbiAgICAgICAgICA8TW9kYWxIZWFkZXIgdG9nZ2xlPXt0aGlzLnRvZ2dsZU1vZGFsfT7QmtCw0LvRjNC60YPQu9GP0YLQvtGAPC9Nb2RhbEhlYWRlcj5cclxuICAgICAgICAgIDxNb2RhbEJvZHk+XHJcbiAgICAgICAgICAgIDxQcm9ncmVzc0JhciBjbGFzc05hbWU9XCJwcm9ncmVzc2JhciBtb2RhbFwiLz5cclxuICAgICAgICAgIDwvTW9kYWxCb2R5PlxyXG4gICAgICAgIDwvTW9kYWw+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0KGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEZvcm1SZWdpc3RlcikpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9