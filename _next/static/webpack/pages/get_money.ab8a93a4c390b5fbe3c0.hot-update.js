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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _shared_Progressbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/Progressbar */ "./components/shared/Progressbar.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _defaults_validations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../defaults/validations */ "./defaults/validations.js");
/* harmony import */ var react_spinner_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-spinner-material */ "./node_modules/react-spinner-material/lib/index.js");
/* harmony import */ var react_spinner_material__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_spinner_material__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var disable_scroll__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! disable-scroll */ "./node_modules/disable-scroll/es/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _defaults_blacklistPhones__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../defaults/blacklistPhones */ "./defaults/blacklistPhones.js");
/* harmony import */ var _defaults_saled__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../defaults/saled */ "./defaults/saled.js");
/* harmony import */ var _defaults_frods__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../defaults/frods */ "./defaults/frods.js");










var _jsxFileName = "E:\\job\\server-zaymi\\zaymikz \u2014 \u043A\u043E\u043F\u0438\u044F\\components\\registrationForm\\FormRegister.js",
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
    maskChar: null,
    value: "",
    className: "my-input"
  }, field), props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 60,
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
    maskChar: null,
    className: "my-input",
    value: "",
    alwaysShowMask: false
  }, field), props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 67,
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
      phoneError: "",
      firstreg: [{
        name: '',
        middlename: '',
        last_name: '',
        iin: '',
        email: '',
        password: '',
        password_confirmation: '',
        phone: ''
      }],
      test: ''
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
      values.period_in_days = dayval; // localStorage.setItem("firstreg", JSON.stringify(values));

      values.major_loan_amount = Math.floor(parseInt(moneyval) * 1.15);
      values.grace_period_amount = Math.floor(parseInt(moneyval) * 1.15);
      values.loan_amount_for_max_days = Math.floor(Math.round(parseInt(moneyval) * (1 + parseInt(dayval) / 100 * 2)) / 100 * 100);
      values.insurance_amount = Math.floor(parseInt(moneyval) * 1.15) - parseInt(moneyval);
      values.award_amount = Math.floor(parseInt(moneyval) * 1.15) - parseInt(moneyval);
      other.finished_step = 1;

      var finalObjects = _objectSpread(_objectSpread({}, other), values);

      if (Object(_defaults_validations__WEBPACK_IMPORTED_MODULE_18__["validage"])(values.iin) === false) {
        // Проверка возвраста по иин
        sweetalert__WEBPACK_IMPORTED_MODULE_17___default()("Oops!", "\u041F\u043E \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u043C \u043D\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u043D\u044B\u043C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u043C  \u0422\u041E\u041E \"\u041C\u0424\u041E i-redit.kz\"  \u0432\u044B\u0434\u0430\u0447\u0430 \u0437\u0430\u0439\u043C\u0430 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F  \u043B\u0438\u0446\u0430\u043C \u0434\u043E\u0441\u0442\u0438\u0433\u0448\u0438\u043C 21-\u0433\u043E \u0433\u043E\u0434\u0430 \u0438 \u043D\u0435 \u0441\u0442\u0430\u0440\u0448\u0435 67-\u0445 \u043B\u0435\u0442.", "error");
        setTimeout(function () {
          next_router__WEBPACK_IMPORTED_MODULE_15___default.a.push('/');
        }, 5000);
      }

      if (Object(_defaults_blacklistPhones__WEBPACK_IMPORTED_MODULE_22__["ifBlckList"])(values.phone) === true) {
        // Черный список телефонов которые не может подавать
        sweetalert__WEBPACK_IMPORTED_MODULE_17___default()('Важно', "Вы не можете подавать заявку в нашу организацию! (Черный список)", "error");
        setTimeout(function () {// Router.push('/')
        }, 5000);
      }

      if (Object(_defaults_saled__WEBPACK_IMPORTED_MODULE_23__["ifSaled"])(values.iin) === true) {
        sweetalert__WEBPACK_IMPORTED_MODULE_17___default()('Важно', "Вы не можете подавать заявку в нашу организацию! (Проданный лид)", "error");
        setTimeout(function () {// Router.push('/')
        }, 5000);
      }

      if (Object(_defaults_frods__WEBPACK_IMPORTED_MODULE_24__["isFord"])(values.iin) === true) {
        sweetalert__WEBPACK_IMPORTED_MODULE_17___default()('Важно', "Вы не можете подавать заявку в нашу организацию! (Фрод)", "error");
        setTimeout(function () {// Router.push('/')
        }, 5000);
      }

      if (Object(_defaults_validations__WEBPACK_IMPORTED_MODULE_18__["validage"])(values.iin) === true && Object(_defaults_blacklistPhones__WEBPACK_IMPORTED_MODULE_22__["ifBlckList"])(values.phone) === false && Object(_defaults_saled__WEBPACK_IMPORTED_MODULE_23__["ifSaled"])(values.iin) === false && Object(_defaults_frods__WEBPACK_IMPORTED_MODULE_24__["isFord"])(values.iin) === false) {
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
      jquery__WEBPACK_IMPORTED_MODULE_21___default()(document).ready(function () {
        jquery__WEBPACK_IMPORTED_MODULE_21___default()('input').on('change', function () {
          var cntreq = 0;
          var cntvals = 0;
          jquery__WEBPACK_IMPORTED_MODULE_21___default()('input').each(function (i, val) {
            cntreq++;

            if (jquery__WEBPACK_IMPORTED_MODULE_21___default()(this).val() != '') {
              cntvals += 5;
            }
          });
          var count = cntvals / cntreq * 100 - 20;
          jquery__WEBPACK_IMPORTED_MODULE_21___default()('#percentage').empty();
          jquery__WEBPACK_IMPORTED_MODULE_21___default()('#percentage').append(cntvals + '% completed');
          jquery__WEBPACK_IMPORTED_MODULE_21___default()('#progress-done').data('done', cntvals);
          jquery__WEBPACK_IMPORTED_MODULE_21___default()('#progress-done').width(jquery__WEBPACK_IMPORTED_MODULE_21___default()("#progress-done").data('done') + "% ");
          jquery__WEBPACK_IMPORTED_MODULE_21___default()('#progress-done').text(jquery__WEBPACK_IMPORTED_MODULE_21___default()("#progress-done").data('done') + "% ");
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
            lineNumber: 245,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
            className: "counter",
            children: "\u0412\u0435\u0440\u043E\u044F\u0442\u043D\u043E\u0441\u0442\u044C \u043E\u0434\u043E\u0431\u0440\u0435\u043D\u0438\u044F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 247,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 9
        }, this), this.props.loading === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "modelLoader",
          children: disable_scroll__WEBPACK_IMPORTED_MODULE_20__["default"].on()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 13
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "modelLoader loaded",
          children: disable_scroll__WEBPACK_IMPORTED_MODULE_20__["default"].off()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 253,
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
            phone: '+7',
            password: '',
            password_confirmation: ''
          },
          onSubmit: function onSubmit(values) {
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
                  lineNumber: 284,
                  columnNumber: 17
                }, _this3)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 283,
                columnNumber: 15
              }, _this3) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h2", {
                className: "text-center",
                children: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 288,
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
                    lineNumber: 291,
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
                      lineNumber: 293,
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
                        lineNumber: 301,
                        columnNumber: 21
                      }, _this3)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 300,
                      columnNumber: 19
                    }, _this3)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 292,
                    columnNumber: 17
                  }, _this3)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 290,
                  columnNumber: 15
                }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "col-12 mb-2",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Label"], {
                    htmlFor: "period_in_days",
                    children: "\u0414\u043D\u0435\u0439:"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 310,
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
                      lineNumber: 312,
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
                        lineNumber: 320,
                        columnNumber: 21
                      }, _this3)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 319,
                      columnNumber: 19
                    }, _this3)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 311,
                    columnNumber: 17
                  }, _this3)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 309,
                  columnNumber: 15
                }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "col-12 mb-2",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Label"], {
                    htmlFor: "name",
                    children: "\u0418\u043C\u044F * :"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 330,
                    columnNumber: 17
                  }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "input-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_13__["Field"], {
                      name: "name",
                      autocomplete: "off",
                      placeholder: "\u0418\u043C\u044F",
                      className: "form-control  text-capitalize registerCyrril",
                      validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_18__["acceptCirrilic"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 332,
                      columnNumber: 19
                    }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                      className: "hint",
                      children: "\u0418\u043C\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430 \u043A\u0438\u0440\u0440\u0438\u043B\u0438\u0446\u0435"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 339,
                      columnNumber: 19
                    }, _this3)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 331,
                    columnNumber: 17
                  }, _this3), errors.name && touched.name && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "text-danger",
                    children: errors.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 341,
                    columnNumber: 49
                  }, _this3)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 329,
                  columnNumber: 15
                }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "col-12 mb-2",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Label"], {
                    htmlFor: "middlename",
                    children: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F * :"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 345,
                    columnNumber: 17
                  }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "input-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_13__["Field"], {
                      name: "middlename",
                      autocomplete: "off",
                      placeholder: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F",
                      className: "form-control  text-capitalize registerCyrril",
                      validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_18__["acceptCirrilic"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 347,
                      columnNumber: 19
                    }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                      className: "hint",
                      children: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430 \u043A\u0438\u0440\u0440\u0438\u043B\u0438\u0446\u0435"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 354,
                      columnNumber: 19
                    }, _this3)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 346,
                    columnNumber: 17
                  }, _this3), errors.middlename && touched.middlename && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "text-danger",
                    children: errors.middlename
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 356,
                    columnNumber: 61
                  }, _this3)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 344,
                  columnNumber: 15
                }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "col-12 mb-2",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Label"], {
                    htmlFor: "last_name",
                    children: "\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E:"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 360,
                    columnNumber: 17
                  }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "input-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_13__["Field"], {
                      name: "last_name",
                      autocomplete: "off",
                      placeholder: "\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E",
                      className: "form-control  text-capitalize registerCyrril",
                      validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_18__["acceptCirrilicOnly"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 362,
                      columnNumber: 19
                    }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                      className: "hint",
                      children: "\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430 \u043A\u0438\u0440\u0440\u0438\u043B\u0438\u0446\u0435"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 369,
                      columnNumber: 19
                    }, _this3)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 361,
                    columnNumber: 17
                  }, _this3), errors.last_name && touched.last_name && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "text-danger",
                    children: errors.last_name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 371,
                    columnNumber: 59
                  }, _this3)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 359,
                  columnNumber: 15
                }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "col-12 mb-2",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Label"], {
                    htmlFor: "email",
                    children: "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441 * :"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 375,
                    columnNumber: 17
                  }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "input-group",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_13__["Field"], {
                      name: "email",
                      className: "form-control",
                      validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_18__["validEmail"],
                      placeholder: "\u0412\u0430\u0448 email"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 377,
                      columnNumber: 19
                    }, _this3)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 376,
                    columnNumber: 17
                  }, _this3), errors.email && touched.email && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "text-danger",
                    children: errors.email
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 384,
                    columnNumber: 51
                  }, _this3)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 374,
                  columnNumber: 15
                }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "col-12 mb-2",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Label"], {
                    htmlFor: "iin",
                    children: "\u0418\u0418\u041D * :"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 388,
                    columnNumber: 17
                  }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "input-group",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_13__["Field"], {
                      name: "iin",
                      type: "tel",
                      className: "form-control",
                      validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_18__["iinValidation"],
                      component: IinMask,
                      placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u044E\u0434\u0430"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 390,
                      columnNumber: 19
                    }, _this3)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 389,
                    columnNumber: 17
                  }, _this3), errors.iin && touched.iin && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "text-danger",
                    children: errors.iin
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 399,
                    columnNumber: 47
                  }, _this3)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 387,
                  columnNumber: 15
                }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "col-12 mb-2",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Label"], {
                    htmlFor: "phone",
                    children: "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 * :"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 403,
                    columnNumber: 17
                  }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "input-group",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_13__["Field"], {
                      name: "phone",
                      type: "tel",
                      className: "form-control",
                      validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_18__["phoneValidation"],
                      component: PhoneMask,
                      placeholder: "+7(705)000-00-00"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 405,
                      columnNumber: 19
                    }, _this3)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 404,
                    columnNumber: 17
                  }, _this3), errors.phone && touched.phone && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "text-danger",
                    children: errors.phone
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 414,
                    columnNumber: 51
                  }, _this3)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 402,
                  columnNumber: 15
                }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "col-12 mb-2",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Label"], {
                    htmlFor: "phone",
                    children: "\u041F\u0430\u0440\u043E\u043B\u044C * :"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 418,
                    columnNumber: 17
                  }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "input-group",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_13__["Field"], {
                      name: "password",
                      className: "form-control",
                      validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_18__["passwordCheck"],
                      placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C",
                      type: "password"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 420,
                      columnNumber: 19
                    }, _this3)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 419,
                    columnNumber: 17
                  }, _this3), errors.password && touched.password && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "text-danger",
                    children: errors.password
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 428,
                    columnNumber: 57
                  }, _this3)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 417,
                  columnNumber: 15
                }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "col-12 mb-2",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Label"], {
                    htmlFor: "phone",
                    children: "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C * :"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 432,
                    columnNumber: 17
                  }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "input-group",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_13__["Field"], {
                      name: "password_confirmation",
                      className: "form-control",
                      type: "password",
                      validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_18__["requiredd"],
                      placeholder: "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 434,
                      columnNumber: 19
                    }, _this3)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 433,
                    columnNumber: 17
                  }, _this3), errors.password_confirmation && touched.password_confirmation && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "text-danger",
                    children: errors.password_confirmation
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 442,
                    columnNumber: 83
                  }, _this3)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 431,
                  columnNumber: 15
                }, _this3)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 289,
                columnNumber: 13
              }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "col-12 mb-2 form-group d-flex align-items-center col-12 mx-auto",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("input", {
                  type: "checkbox",
                  onChange: _this3.handleCheck,
                  defaultChecked: _this3.state.checked
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 446,
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
                    lineNumber: 450,
                    columnNumber: 92
                  }, _this3)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 450,
                  columnNumber: 15
                }, _this3)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 445,
                columnNumber: 13
              }, _this3), _this3.props.somemessage.error !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "alert alert-danger",
                role: "alert",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("strong", {
                  children: [" ", _this3.props.somemessage.error || null]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 461,
                  columnNumber: 16
                }, _this3)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 460,
                columnNumber: 8
              }, _this3) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "button form-group",
                children: _this3.props.loading === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_spinner_material__WEBPACK_IMPORTED_MODULE_19___default.a, {
                    className: "loading",
                    size: 200,
                    spinnerColor: "#ef2221",
                    spinnerWidth: 2,
                    visible: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 467,
                    columnNumber: 10
                  }, _this3)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 465,
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
                  lineNumber: 472,
                  columnNumber: 9
                }, _this3)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 463,
                columnNumber: 8
              }, _this3)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 281,
              columnNumber: 11
            }, _this3);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 257,
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
            lineNumber: 485,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_12__["ModalBody"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_shared_Progressbar__WEBPACK_IMPORTED_MODULE_16__["default"], {
              className: "progressbar modal"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 487,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 486,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 480,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 242,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZWdpc3RyYXRpb25Gb3JtL0Zvcm1SZWdpc3Rlci5qcyJdLCJuYW1lcyI6WyJzY3JvbGxUb0VsZW1lbnQiLCJyZXF1aXJlIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtb25leVZhbCIsImRheVZhbCIsImNoZWNrZWQiLCJzb21lbWVzc2FnZSIsIm1lc3NhZ2UiLCJyZWdpc3RyYXRpb24iLCJsb2FkaW5nIiwicmVnaXN0cmF0aW9uMSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiY2hhbmdpbmdNb25leSIsIm1vbmV5IiwiY2hhbmdpbmdEYXkiLCJkYXkiLCJwb3N0UmVnaXN0cmF0aW9uIiwicmVzZXRSZWdpc3RyYXRpb24iLCJhY3Rpb25zIiwicmVzZXQiLCJQaG9uZU1hc2siLCJmaWVsZCIsImZvcm0iLCJwcm9wcyIsIklpbk1hc2siLCJGb3JtUmVnaXN0ZXIiLCJlIiwic2V0U3RhdGUiLCJwaG9uZSIsInRhcmdldCIsInZhbHVlIiwicmVwbGFjZSIsImVycm9ycyIsImtleSIsIk9iamVjdCIsImtleXMiLCJyZWR1Y2UiLCJrIiwibCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJvZmZzZXRUb3AiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsImlzTW9kYWxPcGVuIiwicGhvbmVFcnJvciIsImZpcnN0cmVnIiwibmFtZSIsIm1pZGRsZW5hbWUiLCJsYXN0X25hbWUiLCJpaW4iLCJlbWFpbCIsInBhc3N3b3JkIiwicGFzc3dvcmRfY29uZmlybWF0aW9uIiwidGVzdCIsInRvZ2dsZU1vZGFsIiwiYmluZCIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZVN1Ym1pdEZhaWwiLCJoYW5kbGVDaGVjayIsImhhbmRsZUZvY3VzIiwib25DaGFuZ2UiLCJ2YWx1ZXMiLCJtb25leXZhbCIsImRheXZhbCIsIm90aGVyIiwibG9hbl9hbW91bnQiLCJwZXJpb2RfaW5fZGF5cyIsIm1ham9yX2xvYW5fYW1vdW50IiwiTWF0aCIsImZsb29yIiwicGFyc2VJbnQiLCJncmFjZV9wZXJpb2RfYW1vdW50IiwibG9hbl9hbW91bnRfZm9yX21heF9kYXlzIiwicm91bmQiLCJpbnN1cmFuY2VfYW1vdW50IiwiYXdhcmRfYW1vdW50IiwiZmluaXNoZWRfc3RlcCIsImZpbmFsT2JqZWN0cyIsInZhbGlkYWdlIiwic3dhbCIsInNldFRpbWVvdXQiLCJSb3V0ZXIiLCJwdXNoIiwiaWZCbGNrTGlzdCIsImlmU2FsZWQiLCJpc0ZvcmQiLCJvZmZzZXQiLCJhbGlnbiIsImVhc2UiLCJkdXJhdGlvbiIsInByb2dyZXNzIiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwid2lkdGgiLCJnZXRBdHRyaWJ1dGUiLCJhcHBlbmQiLCJvcGFjaXR5IiwiJCIsInJlYWR5Iiwib24iLCJjbnRyZXEiLCJjbnR2YWxzIiwiZWFjaCIsImkiLCJ2YWwiLCJjb3VudCIsImVtcHR5IiwiZGF0YSIsInRleHQiLCJkaXNhYmxlU2Nyb2xsIiwib2ZmIiwic291cmNlIiwidG91Y2hlZCIsImlzVmFsaWRhdGluZyIsImlzU3VibWl0dGluZyIsImVycm9yIiwiYWNjZXB0Q2lycmlsaWMiLCJhY2NlcHRDaXJyaWxpY09ubHkiLCJ2YWxpZEVtYWlsIiwiaWluVmFsaWRhdGlvbiIsInBob25lVmFsaWRhdGlvbiIsInBhc3N3b3JkQ2hlY2siLCJyZXF1aXJlZGQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFJQSxlQUFlLEdBQUdDLG1CQUFPLENBQUMsb0VBQUQsQ0FBN0I7O0FBQ0EsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBQyxLQUFL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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQTRQRDs7OztFQWphd0JxRSw0Q0FBSyxDQUFDQyxTOztBQW9hbEJDLDJIQUFPLENBQUM5SCxlQUFELEVBQWtCVSxrQkFBbEIsQ0FBUCxDQUE2Q2UsWUFBN0MsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nZXRfbW9uZXkuYWI4YTkzYTRjMzkwYjVmYmUzYzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7Y2hhbmdpbmdNb25leSwgY2hhbmdpbmdEYXksIHBvc3RSZWdpc3RyYXRpb259IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMvQWN0aW9uQ3JlYXRvcnMnO1xyXG5pbXBvcnQge01vZGFsLCBNb2RhbEhlYWRlciwgTW9kYWxCb2R5LCBMYWJlbCwgUm93fSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCAgRmllbGQgIH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0IElucHV0TWFzayBmcm9tIFwicmVhY3QtaW5wdXQtbWFza1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi4vc2hhcmVkL1Byb2dyZXNzYmFyJztcclxuaW1wb3J0IHN3YWwgZnJvbSBcInN3ZWV0YWxlcnRcIjtcclxuaW1wb3J0IHtcclxuICBpaW5WYWxpZGF0aW9uLFxyXG4gIHJlcXVpcmVkLFxyXG4gIHBob25lQ2hlY2ssXHJcbiAgdmFsaWRFbWFpbGwsXHJcbiAgcGFzc3dvcmRDaGVjayxcclxuICBwaG9uZVZhbGlkYXRpb24sXHJcbiAgYWNjZXB0Q2lycmlsaWMsXHJcbiAgYWNjZXB0Q2lycmlsaWNPbmx5LFxyXG4gIHZhbGlkYXRlQ29uZmlybVBhc3N3b3JkLFxyXG4gIHZhbGlkYWdlLFxyXG4gIGdldEFnZSxcclxuICByZXF1aXJlZGQsXHJcbiAgdmFsaWRFbWFpbFxyXG59IGZyb20gJy4uLy4uL2RlZmF1bHRzL3ZhbGlkYXRpb25zJztcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSAncmVhY3Qtc3Bpbm5lci1tYXRlcmlhbCc7XHJcbmltcG9ydCBkaXNhYmxlU2Nyb2xsIGZyb20gJ2Rpc2FibGUtc2Nyb2xsJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IHsgaWZCbGNrTGlzdCB9IGZyb20gJy4uLy4uL2RlZmF1bHRzL2JsYWNrbGlzdFBob25lcyc7XHJcbmltcG9ydCB7IGlmU2FsZWQgfSBmcm9tICcuLi8uLi9kZWZhdWx0cy9zYWxlZCc7XHJcbmltcG9ydCB7IGlzRm9yZCB9IGZyb20gJy4uLy4uL2RlZmF1bHRzL2Zyb2RzJztcclxuXHJcblxyXG5cclxudmFyIHNjcm9sbFRvRWxlbWVudCA9IHJlcXVpcmUoJ3Njcm9sbC10by1lbGVtZW50Jyk7XHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgbW9uZXlWYWw6IHN0YXRlLm1vbmV5VmFsLFxyXG4gICAgZGF5VmFsOiBzdGF0ZS5kYXlWYWwsXHJcbiAgICBjaGVja2VkOiBmYWxzZSxcclxuICAgIHNvbWVtZXNzYWdlOiBzdGF0ZS5tZXNzYWdlLFxyXG4gICAgcmVnaXN0cmF0aW9uOiBzdGF0ZS5yZWdpc3RyYXRpb24sXHJcbiAgICBsb2FkaW5nOiBzdGF0ZS5sb2FkaW5nLFxyXG4gICAgcmVnaXN0cmF0aW9uMTogc3RhdGUucmVnaXN0cmF0aW9uMVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIGNoYW5naW5nTW9uZXk6IG1vbmV5ID0+IHtcclxuICAgIGRpc3BhdGNoKGNoYW5naW5nTW9uZXkobW9uZXkpKTtcclxuICB9LFxyXG4gIGNoYW5naW5nRGF5OiBkYXkgPT4ge1xyXG4gICAgZGlzcGF0Y2goY2hhbmdpbmdEYXkoZGF5KSk7XHJcbiAgfSxcclxuICBwb3N0UmVnaXN0cmF0aW9uOiAocmVnaXN0cmF0aW9uKSA9PiBkaXNwYXRjaChwb3N0UmVnaXN0cmF0aW9uKHJlZ2lzdHJhdGlvbikpLFxyXG4gIHJlc2V0UmVnaXN0cmF0aW9uOiAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChhY3Rpb25zLnJlc2V0KCdyZWdpc3RyYXRpb24nKSlcclxuICB9XHJcbn0pXHJcblxyXG5jb25zdCBQaG9uZU1hc2sgPSAoeyBmaWVsZCwgZm9ybSwgLi4ucHJvcHMgfSkgPT4gPElucHV0TWFza1xyXG4gIG1hc2s9XCIrNyg5OTkpLTk5OS05OTk5XCJcclxuICBtYXNrQ2hhcj17bnVsbH1cclxuICB2YWx1ZT0nJ1xyXG4gIGNsYXNzTmFtZT1cIm15LWlucHV0XCJcclxuICB7Li4uZmllbGR9XHJcbiAgey4uLnByb3BzfS8+O1xyXG5jb25zdCBJaW5NYXNrID0gKHsgZmllbGQsIGZvcm0sIC4uLnByb3BzfSkgPT4gPElucHV0TWFzayBcclxuICBtYXNrPVwiOTk5OTk5OTk5OTk5XCJcclxuICBtYXNrQ2hhcj0ge251bGx9XHJcbiAgY2xhc3NOYW1lPVwibXktaW5wdXRcIlxyXG4gIHZhbHVlPScnXHJcbiAgYWx3YXlzU2hvd01hc2s9e2ZhbHNlfVxyXG4gIHsuLi5maWVsZH1cclxuICB7Li4ucHJvcHN9IC8+XHJcblxyXG5jbGFzcyBGb3JtUmVnaXN0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpc01vZGFsT3BlbjogZmFsc2UsXHJcbiAgICAgIGNoZWNrZWQ6IGZhbHNlLFxyXG4gICAgICBwaG9uZUVycm9yOiBcIlwiLFxyXG4gICAgICBmaXJzdHJlZzogIFt7XHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgbWlkZGxlbmFtZTogJycsXHJcbiAgICAgICAgbGFzdF9uYW1lOiAnJyxcclxuICAgICAgICBpaW46ICcnLFxyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uOiAnJyxcclxuICAgICAgICBwaG9uZTogJycsXHJcbiAgICAgIH1dLFxyXG4gICAgICB0ZXN0OiAnJ1xyXG5cclxuICAgIH07XHJcbiAgICB0aGlzLnRvZ2dsZU1vZGFsID0gdGhpc1xyXG4gICAgICAudG9nZ2xlTW9kYWxcclxuICAgICAgLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXNcclxuICAgICAgLmhhbmRsZVN1Ym1pdFxyXG4gICAgICAuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlU3VibWl0RmFpbCA9IHRoaXNcclxuICAgICAgLmhhbmRsZVN1Ym1pdEZhaWxcclxuICAgICAgLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZUNoZWNrID0gdGhpc1xyXG4gICAgICAuaGFuZGxlQ2hlY2tcclxuICAgICAgLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZUZvY3VzID0gdGhpc1xyXG4gICAgICAuaGFuZGxlRm9jdXNcclxuICAgICAgLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpc1xyXG4gICAgICAub25DaGFuZ2VcclxuICAgICAgLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVNb2RhbCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBpc01vZGFsT3BlbjogIXRoaXMuc3RhdGUuaXNNb2RhbE9wZW5cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBoYW5kbGVQaG9uZSA9IGUgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7cGhvbmU6IGUudGFyZ2V0LnZhbHVlfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDaGVjayA9IChlKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY2hlY2tlZDogIXRoaXMuc3RhdGUuY2hlY2tlZFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXkEtWmEtel0vaWcsICcnKVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3VibWl0RmFpbCA9IChlcnJvcnMpID0+IHtcclxuICAgIGxldCBrZXkgPSBPYmplY3Qua2V5cyhlcnJvcnMpLnJlZHVjZSgoaywgbCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaylbMF0ub2Zmc2V0VG9wIDwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUobClbMF0ub2Zmc2V0VG9wKVxyXG4gICAgICAgICAgPyBrXHJcbiAgICAgICAgICA6IGw7XHJcbiAgICAgIH0pO1xyXG4gICAgd2luZG93LnNjcm9sbFRvKDAsIGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGtleSlbMF0ub2Zmc2V0VG9wIC0gMTAwKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVN1Ym1pdCh2YWx1ZXMpIHtcclxuICAgIHZhciBtb25leXZhbCA9IHRoaXMucHJvcHMubW9uZXlWYWw7XHJcbiAgICB2YXIgZGF5dmFsID0gdGhpcy5wcm9wcy5kYXlWYWw7XHJcbiAgICB2YXIgb3RoZXIgPSB7fTtcclxuICAgIHZhbHVlcy5sb2FuX2Ftb3VudCA9IG1vbmV5dmFsO1xyXG4gICAgdmFsdWVzLnBlcmlvZF9pbl9kYXlzID0gZGF5dmFsO1xyXG4gICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmaXJzdHJlZ1wiLCBKU09OLnN0cmluZ2lmeSh2YWx1ZXMpKTtcclxuICAgIHZhbHVlcy5tYWpvcl9sb2FuX2Ftb3VudCA9IE1hdGguZmxvb3IocGFyc2VJbnQobW9uZXl2YWwpICogMS4xNSk7XHJcbiAgICB2YWx1ZXMuZ3JhY2VfcGVyaW9kX2Ftb3VudCA9IE1hdGguZmxvb3IocGFyc2VJbnQobW9uZXl2YWwpICogMS4xNSk7XHJcbiAgICB2YWx1ZXMubG9hbl9hbW91bnRfZm9yX21heF9kYXlzID0gTWF0aC5mbG9vcihNYXRoLnJvdW5kKHBhcnNlSW50KG1vbmV5dmFsKSAqICgxICsgKHBhcnNlSW50KGRheXZhbCkgLyAxMDApICogMikpIC8gMTAwICogMTAwKTtcclxuICAgIHZhbHVlcy5pbnN1cmFuY2VfYW1vdW50ID0gTWF0aC5mbG9vcihwYXJzZUludChtb25leXZhbCkgKiAxLjE1KSAtIHBhcnNlSW50KG1vbmV5dmFsKTtcclxuICAgIHZhbHVlcy5hd2FyZF9hbW91bnQgPSBNYXRoLmZsb29yKHBhcnNlSW50KG1vbmV5dmFsKSAqIDEuMTUpIC0gcGFyc2VJbnQobW9uZXl2YWwpO1xyXG4gICAgb3RoZXIuZmluaXNoZWRfc3RlcCA9IDE7XHJcbiAgICBjb25zdCBmaW5hbE9iamVjdHMgPSB7XHJcbiAgICAgIC4uLm90aGVyLFxyXG4gICAgICAuLi52YWx1ZXNcclxuICAgIH1cclxuXHJcbiAgICBpZih2YWxpZGFnZSh2YWx1ZXMuaWluKSA9PT0gZmFsc2UpIHtcclxuICAgICAgLy8g0J/RgNC+0LLQtdGA0LrQsCDQstC+0LfQstGA0LDRgdGC0LAg0L/QviDQuNC40L1cclxuICAgICAgc3dhbChcIk9vcHMhXCIsIGDQn9C+INCy0L3Rg9GC0YDQtdC90L3QuNC8INC90L7RgNC80LDRgtC40LLQvdGL0Lwg0LTQvtC60YPQvNC10L3RgtCw0LwgINCi0J7QniBcItCc0KTQniBpLXJlZGl0Lmt6XCIgINCy0YvQtNCw0YfQsCDQt9Cw0LnQvNCwINC+0YHRg9GJ0LXRgdGC0LLQu9GP0LXRgtGB0Y8gINC70LjRhtCw0Lwg0LTQvtGB0YLQuNCz0YjQuNC8IDIxLdCz0L4g0LPQvtC00LAg0Lgg0L3QtSDRgdGC0LDRgNGI0LUgNjct0YUg0LvQtdGCLmAsIFwiZXJyb3JcIik7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKCcvJylcclxuICAgICAgfSwgNTAwMClcclxuICAgIH1cclxuICAgIGlmKGlmQmxja0xpc3QodmFsdWVzLnBob25lKSA9PT0gdHJ1ZSkge1xyXG4gICAgICAvLyDQp9C10YDQvdGL0Lkg0YHQv9C40YHQvtC6INGC0LXQu9C10YTQvtC90L7QsiDQutC+0YLQvtGA0YvQtSDQvdC1INC80L7QttC10YIg0L/QvtC00LDQstCw0YLRjFxyXG4gICAgICBzd2FsICgn0JLQsNC20L3QvicsXCLQktGLINC90LUg0LzQvtC20LXRgtC1INC/0L7QtNCw0LLQsNGC0Ywg0LfQsNGP0LLQutGDINCyINC90LDRiNGDINC+0YDQs9Cw0L3QuNC30LDRhtC40Y4hICjQp9C10YDQvdGL0Lkg0YHQv9C40YHQvtC6KVwiLCBcImVycm9yXCIpXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIC8vIFJvdXRlci5wdXNoKCcvJylcclxuICAgICAgfSwgNTAwMClcclxuICAgIH1cclxuICAgIGlmKGlmU2FsZWQodmFsdWVzLmlpbikgPT09IHRydWUpIHtcclxuICAgICAgc3dhbCAoJ9CS0LDQttC90L4nLFwi0JLRiyDQvdC1INC80L7QttC10YLQtSDQv9C+0LTQsNCy0LDRgtGMINC30LDRj9Cy0LrRgyDQsiDQvdCw0YjRgyDQvtGA0LPQsNC90LjQt9Cw0YbQuNGOISAo0J/RgNC+0LTQsNC90L3Ri9C5INC70LjQtClcIiwgXCJlcnJvclwiKVxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgIH0sIDUwMDApXHJcbiAgICB9XHJcbiAgICBpZihpc0ZvcmQodmFsdWVzLmlpbikgPT09IHRydWUpIHtcclxuICAgICAgc3dhbCAoJ9CS0LDQttC90L4nLFwi0JLRiyDQvdC1INC80L7QttC10YLQtSDQv9C+0LTQsNCy0LDRgtGMINC30LDRj9Cy0LrRgyDQsiDQvdCw0YjRgyDQvtGA0LPQsNC90LjQt9Cw0YbQuNGOISAo0KTRgNC+0LQpXCIsIFwiZXJyb3JcIilcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgLy8gUm91dGVyLnB1c2goJy8nKVxyXG4gICAgICB9LCA1MDAwKVxyXG4gICAgfVxyXG5cclxuICAgIGlmKHZhbGlkYWdlKHZhbHVlcy5paW4pID09PSB0cnVlXHJcbiAgICAgICYmIGlmQmxja0xpc3QodmFsdWVzLnBob25lKSA9PT0gZmFsc2UgJiZcclxuICAgICAgaWZTYWxlZCh2YWx1ZXMuaWluKSA9PT0gZmFsc2UgJiYgaXNGb3JkKHZhbHVlcy5paW4pPT09ZmFsc2UpICB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5wb3N0UmVnaXN0cmF0aW9uKGZpbmFsT2JqZWN0cyk7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUZvY3VzKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNjcm9sbFRvRWxlbWVudCgnLnRleHQtZGFuZ2VyJywge1xyXG4gICAgICAgIG9mZnNldDogMCxcclxuICAgICAgICBhbGlnbjogJ21pZGRsZScsXHJcbiAgICAgICAgZWFzZTogJ291dEV4cG8nLFxyXG4gICAgICAgIGR1cmF0aW9uOiA2MDBcclxuICAgICAgfSk7XHJcbiAgICB9LDEwMClcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc3QgcHJvZ3Jlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZ3Jlc3MtZG9uZScpO1xyXG4gICAgcHJvZ3Jlc3Muc3R5bGUud2lkdGggPSBwcm9ncmVzcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZG9uZScpICsgJyUnO1xyXG4gICAgcHJvZ3Jlc3MuYXBwZW5kKHByb2dyZXNzLmdldEF0dHJpYnV0ZSgnZGF0YS1kb25lJykgKyBcIiVcIilcclxuICAgIHByb2dyZXNzLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgJCgnaW5wdXQnKVxyXG4gICAgICAgIC5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgdmFyIGNudHJlcSA9IDA7XHJcbiAgICAgICAgICB2YXIgY250dmFscyA9IDA7XHJcbiAgICAgICAgICAkKCdpbnB1dCcpLmVhY2goZnVuY3Rpb24gKGksIHZhbCkge1xyXG4gICAgICAgICAgICBjbnRyZXErKztcclxuICAgICAgICAgICAgaWYgKCQodGhpcykudmFsKCkgIT0gJycpIHtcclxuICAgICAgICAgICAgICBjbnR2YWxzICs9IDU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdmFyIGNvdW50ID0gKGNudHZhbHMgLyBjbnRyZXEpICogMTAwIC0gMjA7XHJcbiAgICAgICAgICAkKCcjcGVyY2VudGFnZScpLmVtcHR5KCk7XHJcbiAgICAgICAgICAkKCcjcGVyY2VudGFnZScpLmFwcGVuZChjbnR2YWxzICsgJyUgY29tcGxldGVkJyk7XHJcblxyXG4gICAgICAgICAgJCgnI3Byb2dyZXNzLWRvbmUnKS5kYXRhKCdkb25lJywgY250dmFscylcclxuICAgICAgICAgICQoJyNwcm9ncmVzcy1kb25lJykud2lkdGgoJChcIiNwcm9ncmVzcy1kb25lXCIpLmRhdGEoJ2RvbmUnKSArIFwiJSBcIilcclxuICAgICAgICAgICQoJyNwcm9ncmVzcy1kb25lJykudGV4dCgkKFwiI3Byb2dyZXNzLWRvbmVcIikuZGF0YSgnZG9uZScpICsgXCIlIFwiKVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICAvLyBjb25zdCB7IGhpc3RvcnkgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAvLyBjb25zdCBoaXN0b3J5ID0gdGhpcy5wcm9wcy5oaXN0b3J5XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3NCYXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtZG9uZVwiIGlkPVwicHJvZ3Jlc3MtZG9uZVwiIGRhdGEtZG9uZT1cIjBcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb3VudGVyXCI+0JLQtdGA0L7Rj9GC0L3QvtGB0YLRjCDQvtC00L7QsdGA0LXQvdC40Y88L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3RoaXMucHJvcHMubG9hZGluZyA9PT0gdHJ1ZVxyXG4gICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT1cIm1vZGVsTG9hZGVyXCI+XHJcbiAgICAgICAgICAgICAge2Rpc2FibGVTY3JvbGwub24oKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPVwibW9kZWxMb2FkZXIgbG9hZGVkXCI+XHJcbiAgICAgICAgICAgIHtkaXNhYmxlU2Nyb2xsLm9mZigpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgIGluaXRpYWxWYWx1ZXMgPSB7e1xyXG4gICAgICAgICAgICBsb2FuX2Ftb3VudDogJycsXHJcbiAgICAgICAgICAgIHBlcmlvZF9pbl9kYXlzOiAnJyxcclxuICAgICAgICAgICAgbWFqb3JfbG9hbl9hbW91bnQ6ICcnLFxyXG4gICAgICAgICAgICBncmFjZV9wZXJpb2RfYW1vdW50OiAnJyxcclxuICAgICAgICAgICAgbG9hbl9hbW91bnRfZm9yX21heF9kYXlzOiAnJyxcclxuICAgICAgICAgICAgaW5zdXJhbmNlX2Ftb3VudDogJycsXHJcbiAgICAgICAgICAgIGF3YXJkX2Ftb3VudDogICcnLFxyXG4gICAgICAgICAgICBzb3VyY2U6ICdpLWNyZWRpdC5reicsXHJcbiAgICAgICAgICAgIG5hbWU6JycsXHJcbiAgICAgICAgICAgIG1pZGRsZW5hbWU6ICcnLFxyXG4gICAgICAgICAgICBsYXN0X25hbWU6ICcnLFxyXG4gICAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICAgIGlpbjogJycsXHJcbiAgICAgICAgICAgIHBob25lOiAnKzcnLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogJycsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25TdWJtaXQ9e3ZhbHVlcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlU3VibWl0KHZhbHVlcylcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICB7KHsgZXJyb3JzLCB0b3VjaGVkLCBpc1ZhbGlkYXRpbmcsIGlzU3VibWl0dGluZyB9KSA9PiAoXHJcbiAgICAgICAgICA8Rm9ybSAgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZvcm1zU3RlcFwiPlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5zb21lbWVzc2FnZS5lcnJvciAhPT0gbnVsbFxyXG4gICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zb21lbWVzc2FnZS5lcnJvcn08L3N0cm9uZz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj7QoNC10LPQuNGB0YLRgNCw0YbQuNGPPC9oMj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBmb3JtLWdyb3VwICBteC1hdXRvJz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTEyIG1iLTInPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9J2xvYW5fYW1vdW50Jz7QodGD0LzQvNCwOjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2xvYW5fYW1vdW50J1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sIGZvY3VzLXZpc2libGUnXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMubW9uZXlWYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWZvY3VzLXZpc2libGUtYWRkZWRcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNteU1vZGFsQ2FsY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTW9kYWx9PtCY0LfQvNC10L3QuNGC0YwuLi48L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC0xMiBtYi0yJz5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPSdwZXJpb2RfaW5fZGF5cyc+0JTQvdC10Lk6PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0ncGVyaW9kX2luX2RheXMnXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wgZm9jdXMtdmlzaWJsZSdcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5kYXlWYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWZvY3VzLXZpc2libGUtYWRkZWRcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNteU1vZGFsQ2FsY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTW9kYWx9PtCY0LfQvNC10L3QuNGC0YwuLi48L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMTIgbWItMic+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj0nbmFtZSc+0JjQvNGPICogOjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J25hbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9ICfQmNC80Y8nXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wgIHRleHQtY2FwaXRhbGl6ZSByZWdpc3RlckN5cnJpbCdcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZT17YWNjZXB0Q2lycmlsaWN9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGludFwiPtCY0LzRjyDRgtC+0LvRjNC60L4g0L3QsCDQutC40YDRgNC40LvQuNGG0LU8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge2Vycm9ycy5uYW1lICYmIHRvdWNoZWQubmFtZSAmJiA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMubmFtZX08L2Rpdj59XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMTIgbWItMic+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj0nbWlkZGxlbmFtZSc+0KTQsNC80LjQu9C40Y8gKiA6PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nbWlkZGxlbmFtZSdcclxuICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gJ9Ck0LDQvNC40LvQuNGPJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sICB0ZXh0LWNhcGl0YWxpemUgcmVnaXN0ZXJDeXJyaWwnXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU9e2FjY2VwdENpcnJpbGljfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpbnRcIj7QpNCw0LzQuNC70LjRjyDRgtC+0LvRjNC60L4g0L3QsCDQutC40YDRgNC40LvQuNGG0LU8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge2Vycm9ycy5taWRkbGVuYW1lICYmIHRvdWNoZWQubWlkZGxlbmFtZSAmJiA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMubWlkZGxlbmFtZX08L2Rpdj59XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMTIgbWItMic+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj0nbGFzdF9uYW1lJz7QntGC0YfQtdGB0YLQstC+OjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2xhc3RfbmFtZSdcclxuICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gJ9Ce0YLRh9C10YHRgtCy0L4nXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wgIHRleHQtY2FwaXRhbGl6ZSByZWdpc3RlckN5cnJpbCdcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZT17YWNjZXB0Q2lycmlsaWNPbmx5fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpbnRcIj7QntGC0YfQtdGB0YLQstC+INGC0L7Qu9GM0LrQviDQvdCwINC60LjRgNGA0LjQu9C40YbQtTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3JzLmxhc3RfbmFtZSAmJiB0b3VjaGVkLmxhc3RfbmFtZSAmJiA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMubGFzdF9uYW1lfTwvZGl2Pn1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC0xMiBtYi0yJz5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPSdlbWFpbCc+0K3Qu9C10LrRgtGA0L7QvdC90YvQuSDQsNC00YDQtdGBICogOjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlPXt2YWxpZEVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gJ9CS0LDRiCBlbWFpbCdcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge2Vycm9ycy5lbWFpbCAmJiB0b3VjaGVkLmVtYWlsICYmIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5lbWFpbH08L2Rpdj59XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMTIgbWItMic+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj0naWluJz7QmNCY0J0gKiA6PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0naWluJ1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3RlbCdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZT17aWluVmFsaWRhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQgPSB7SWluTWFza31cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9ICfQktCy0LXQtNC40YLQtSDRgdGO0LTQsCdcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge2Vycm9ycy5paW4gJiYgdG91Y2hlZC5paW4gJiYgPGRpdiBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLmlpbn08L2Rpdj59XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMTIgbWItMic+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj0ncGhvbmUnPtCd0L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsCAqIDo8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdwaG9uZSdcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZWwnXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU9e3Bob25lVmFsaWRhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQgPSB7UGhvbmVNYXNrfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gJys3KDcwNSkwMDAtMDAtMDAnXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMucGhvbmUgJiYgdG91Y2hlZC5waG9uZSAmJiA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMucGhvbmV9PC9kaXY+fVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTEyIG1iLTInPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9J3Bob25lJz7Qn9Cw0YDQvtC70YwgKiA6PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU9e3Bhc3N3b3JkQ2hlY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSAn0J/QsNGA0L7Qu9GMJ1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkICYmIHRvdWNoZWQucGFzc3dvcmQgJiYgPGRpdiBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLnBhc3N3b3JkfTwvZGl2Pn1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC0xMiBtYi0yJz5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPSdwaG9uZSc+0J/QvtCy0YLQvtGA0LjRgtC1INC/0LDRgNC+0LvRjCAqIDo8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdwYXNzd29yZF9jb25maXJtYXRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU9e3JlcXVpcmVkZH1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9ICfQn9C+0LLRgtC+0YDQuNGC0LUg0L/QsNGA0L7Qu9GMJ1xyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkX2NvbmZpcm1hdGlvbiAmJiB0b3VjaGVkLnBhc3N3b3JkX2NvbmZpcm1hdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMucGFzc3dvcmRfY29uZmlybWF0aW9ufTwvZGl2Pn1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMTIgbWItMiBmb3JtLWdyb3VwIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgY29sLTEyIG14LWF1dG8nPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoZWNrfVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e3RoaXMuc3RhdGUuY2hlY2tlZH0vPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsIG1sLTNcIiBodG1sRm9yPVwiZXhhbXBsZUNoZWNrMVwiPtCh0L7Qs9C70LDRgdC10L0g0L3QsCA8YVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZ3JlZW1lbnQgXCJcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9kb2NzL2FwcHJvdmUucGRmXCJcclxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCI+0L7QsdGA0LDQsdC+0YLQutGDINC00LDQvdC90YvRhSDRgSDRg9GB0LvQvtCy0LjRj9C80Lgg0YHQsNC50YLQsDwvYT5cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuXHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5zb21lbWVzc2FnZS5lcnJvciAhPT0gbnVsbCA/XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIj5cclxuICAgICAgICBcdFx0XHRcdFx0XHRcdDxzdHJvbmc+IHt0aGlzLnByb3BzLnNvbWVtZXNzYWdlLmVycm9yICB8fCBudWxsfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICBcdFx0XHRcdDwvZGl2PiA6IG51bGx9XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJidXR0b24gZm9ybS1ncm91cFwiID5cclxuXHRcdFx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLmxvYWRpbmcgPT09IHRydWUgP1xyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxTcGlubmVyIGNsYXNzTmFtZT1cImxvYWRpbmdcIiBzaXplPXsyMDB9IHNwaW5uZXJDb2xvcj17XCIjZWYyMjIxXCJ9IHNwaW5uZXJXaWR0aD17Mn0gdmlzaWJsZT17dHJ1ZX0gLz5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdCAgOlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b24gZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLmNoZWNrZWR9IHR5cGU9XCJzdWJtaXQgXCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVGb2N1cygpfSBjbGFzc05hbWU9XCJhZ3JlZW1lbnQtYnRuXCI+0J/QvtC70YPRh9C40YLRjCDQutC+0LQ8L2J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgIDwvRm9ybWlrPlxyXG5cclxuICAgICAgICA8TW9kYWxcclxuICAgICAgICAgIGNsYXNzPVwibW9kYWwgbW9kYWwtY2FsY3VsYXRvclwiXHJcbiAgICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUuaXNNb2RhbE9wZW59XHJcbiAgICAgICAgICB0b2dnbGU9e3RoaXMudG9nZ2xlTW9kYWx9XHJcbiAgICAgICAgICBzaXplPVwibGdcIj5cclxuICAgICAgICAgIDxNb2RhbEhlYWRlciB0b2dnbGU9e3RoaXMudG9nZ2xlTW9kYWx9PtCa0LDQu9GM0LrRg9C70Y/RgtC+0YA8L01vZGFsSGVhZGVyPlxyXG4gICAgICAgICAgPE1vZGFsQm9keT5cclxuICAgICAgICAgICAgPFByb2dyZXNzQmFyIGNsYXNzTmFtZT1cInByb2dyZXNzYmFyIG1vZGFsXCIvPlxyXG4gICAgICAgICAgPC9Nb2RhbEJvZHk+XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoRm9ybVJlZ2lzdGVyKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=