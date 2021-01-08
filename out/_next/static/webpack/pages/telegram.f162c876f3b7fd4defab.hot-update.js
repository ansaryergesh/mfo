webpackHotUpdate_N_E("pages/telegram",{

/***/ "./node_modules/disable-scroll/es/index.js":
/*!*************************************************!*\
  !*** ./node_modules/disable-scroll/es/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var DisableScroll =
/*#__PURE__*/
function () {
  function DisableScroll() {
    var _this = this;

    _classCallCheck(this, DisableScroll);

    _defineProperty(this, "handleWheel", function (e) {
      e.preventDefault();
    });

    _defineProperty(this, "handleScroll", function () {
      var _window;

      (_window = window).scrollTo.apply(_window, _toConsumableArray(_this.lockToScrollPos));
    });

    _defineProperty(this, "handleKeydown", function (e) {
      var keys = _this.options.keyboardKeys;
      /* istanbul ignore else */

      if (['INPUT', 'TEXTAREA'].indexOf(e.target.tagName) !== -1) {
        keys = _this.options.authorizedInInputs;
      }
      /* istanbul ignore else */


      if (keys.indexOf(e.keyCode) !== -1) {
        e.preventDefault();
      }
    });

    this.element = null;
    this.lockToScrollPos = [0, 0];
    this.options = {
      disableWheel: true,
      disableScroll: true,
      disableKeys: true,
      keyboardKeys: [32, 33, 34, 35, 36, 37, 38, 39, 40],
      authorizedInInputs: [32, 37, 38, 39, 40] // space: 32, page up: 33, page down: 34, end: 35, home: 36
      // left: 37, up: 38, right: 39, down: 40

    };
    /* istanbul ignore else */

    if (canUseDOM) {
      __webpack_require__(/*! scrollingelement */ "./node_modules/scrollingelement/scrollingelement.js");

      this.element = document.scrollingElement;
    }
  }
  /**
   * Disable Page Scroll
   * @external Node
   *
   * @param {HTMLElement} [element] - DOM Element, usually document.body
   * @param {object} [options] - Change the initial options
   */


  _createClass(DisableScroll, [{
    key: "on",
    value: function on(element, options) {
      if (!canUseDOM) return;
      this.element = element || this.element;
      this.options = _objectSpread({}, this.options, {}, options);
      var _this$options = this.options,
          disableKeys = _this$options.disableKeys,
          disableScroll = _this$options.disableScroll,
          disableWheel = _this$options.disableWheel;
      /* istanbul ignore else */

      if (disableWheel) {
        document.addEventListener('wheel', this.handleWheel, {
          passive: false
        });
        document.addEventListener('touchmove', this.handleWheel, {
          passive: false
        });
      }
      /* istanbul ignore else */


      if (disableScroll) {
        this.lockToScrollPos = [this.element.scrollLeft || this.element.scrollX, this.element.scrollTop || this.element.scrollY];
        document.addEventListener('scroll', this.handleScroll, {
          passive: false
        });
      }
      /* istanbul ignore else */


      if (disableKeys) {
        document.addEventListener('keydown', this.handleKeydown, {
          passive: false
        });
      }
    }
    /**
     * Re-enable page scrolls
     */

  }, {
    key: "off",
    value: function off() {
      if (!canUseDOM) return;
      document.removeEventListener('wheel', this.handleWheel, {
        passive: false
      });
      document.removeEventListener('touchmove', this.handleWheel, {
        passive: false
      });
      document.removeEventListener('scroll', this.handleScroll, {
        passive: false
      });
      document.removeEventListener('keydown', this.handleKeydown, {
        passive: false
      });
    }
  }]);

  return DisableScroll;
}();

/* harmony default export */ __webpack_exports__["default"] = (new DisableScroll());

/***/ }),

/***/ "./node_modules/scrollingelement/scrollingelement.js":
/*!***********************************************************!*\
  !*** ./node_modules/scrollingelement/scrollingelement.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! https://mths.be/scrollingelement v1.5.2 by @diegoperini & @mathias | MIT license */
if (!('scrollingElement' in document)) (function() {

	function computeStyle(element) {
		if (window.getComputedStyle) {
			// Support Firefox < 4 which throws on a single parameter.
			return getComputedStyle(element, null);
		}
		// Support Internet Explorer < 9.
		return element.currentStyle;
	}

	function isBodyElement(element) {
		// The `instanceof` check gives the correct result for e.g. `body` in a
		// non-HTML namespace.
		if (window.HTMLBodyElement) {
			return element instanceof HTMLBodyElement;
		}
		// Fall back to a `tagName` check for old browsers.
		return /body/i.test(element.tagName);
	}

	function getNextBodyElement(frameset) {
		// We use this function to be correct per spec in case `document.body` is
		// a `frameset` but there exists a later `body`. Since `document.body` is
		// a `frameset`, we know the root is an `html`, and there was no `body`
		// before the `frameset`, so we just need to look at siblings after the
		// `frameset`.
		var current = frameset;
		while (current = current.nextSibling) {
			if (current.nodeType == 1 && isBodyElement(current)) {
				return current;
			}
		}
		// No `body` found.
		return null;
	}

	// Note: standards mode / quirks mode can be toggled at runtime via
	// `document.write`.
	var isCompliantCached;
	var isCompliant = function() {
		var isStandardsMode = /^CSS1/.test(document.compatMode);
		if (!isStandardsMode) {
			// In quirks mode, the result is equivalent to the non-compliant
			// standards mode behavior.
			return false;
		}
		if (isCompliantCached === void 0) {
			// When called for the first time, check whether the browser is
			// standard-compliant, and cache the result.
			var iframe = document.createElement('iframe');
			iframe.style.height = '1px';
			(document.body || document.documentElement || document).appendChild(iframe);
			var doc = iframe.contentWindow.document;
			doc.write('<!DOCTYPE html><div style="height:9999em">x</div>');
			doc.close();
			isCompliantCached = doc.documentElement.scrollHeight > doc.body.scrollHeight;
			iframe.parentNode.removeChild(iframe);
		}
		return isCompliantCached;
	};

	function isRendered(style) {
		return style.display != 'none' && !(style.visibility == 'collapse' &&
			/^table-(.+-group|row|column)$/.test(style.display));
	}

	function isScrollable(body) {
		// A `body` element is scrollable if `body` and `html` both have
		// non-`visible` overflow and are both being rendered.
		var bodyStyle = computeStyle(body);
		var htmlStyle = computeStyle(document.documentElement);
		return bodyStyle.overflow != 'visible' && htmlStyle.overflow != 'visible' &&
			isRendered(bodyStyle) && isRendered(htmlStyle);
	}

	var scrollingElement = function() {
		if (isCompliant()) {
			return document.documentElement;
		}
		var body = document.body;
		// Note: `document.body` could be a `frameset` element, or `null`.
		// `tagName` is uppercase in HTML, but lowercase in XML.
		var isFrameset = body && !/body/i.test(body.tagName);
		body = isFrameset ? getNextBodyElement(body) : body;
		// If `body` is itself scrollable, it is not the `scrollingElement`.
		return body && isScrollable(body) ? null : body;
	};

	if (Object.defineProperty) {
		// Support modern browsers that lack a native implementation.
		Object.defineProperty(document, 'scrollingElement', {
			'get': scrollingElement
		});
	} else if (document.__defineGetter__) {
		// Support Firefox ≤ 3.6.9, Safari ≤ 4.1.3.
		document.__defineGetter__('scrollingElement', scrollingElement);
	} else {
		// IE ≤ 4 lacks `attachEvent`, so it only gets this one assignment. IE ≤ 7
		// gets it too, but the value is updated later (see `propertychange`).
		document.scrollingElement = scrollingElement();
		document.attachEvent && document.attachEvent('onpropertychange', function() {
			// This is for IE ≤ 7 only.
			// A `propertychange` event fires when `<body>` is parsed because
			// `document.activeElement` then changes.
			if (window.event.propertyName == 'activeElement') {
				document.scrollingElement = scrollingElement();
			}
		});
	}
}());


/***/ }),

/***/ "./pages/telegram.js":
/*!***************************!*\
  !*** ./pages/telegram.js ***!
  \***************************/
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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _store_actions_telegram__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store/actions/telegram */ "./store/actions/telegram.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_shared_messageDetailed__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/shared/messageDetailed */ "./components/shared/messageDetailed.js");
/* harmony import */ var _defaults_hello__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../defaults/hello */ "./defaults/hello.js");
/* harmony import */ var disable_scroll__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! disable-scroll */ "./node_modules/disable-scroll/es/index.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_16__);








var _jsxFileName = "E:\\icredit\\server-zaymi\\zaymikz \u2014 \u043A\u043E\u043F\u0438\u044F\\pages\\telegram.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }











var mapStateToProps = function mapStateToProps(state) {
  return {
    nonanswered: state.nonanswered
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchAnsweredMsg: function fetchAnsweredMsg() {
      return dispatch(Object(_store_actions_telegram__WEBPACK_IMPORTED_MODULE_10__["fetchAnsweredMsg"])());
    },
    fetchNonAnsweredMsg: function fetchNonAnsweredMsg() {
      return dispatch(Object(_store_actions_telegram__WEBPACK_IMPORTED_MODULE_10__["fetchNonAnsweredMsg"])());
    }
  };
};

var Telegram = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Telegram, _React$Component);

  var _super = _createSuper(Telegram);

  function Telegram() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Telegram);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      collapse: "",
      message: '',
      answer: '',
      code: '',
      loading: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleSubmit", function (msgid, id) {
      var answerText = "\n".concat(Object(_defaults_hello__WEBPACK_IMPORTED_MODULE_14__["helloUser"])(), "!%0A\n").concat(_this.state.answer.split('%0A'), "%0A%0A\n\u0421 \u0443\u0432\u0430\u0436\u0435\u043D\u0438\u0435\u043C I-credit.kz\n    ");

      if (_this.state.answer) {
        // console.log(this.state.answer)
        _this.setState({
          loading: true
        });

        axios__WEBPACK_IMPORTED_MODULE_9___default.a.post("https://api.telegram.org/bot1482005915:AAGqjNITUD0hRu95aUZ_zDfk-AP0dvM5l5g/sendMessage?chat_id=".concat(msgid, "&text=").concat(answerText, "&ie=UTF-8&oe=UTF-8&parse_mode=html")).then(function (response) {
          if (response.data.ok) {
            axios__WEBPACK_IMPORTED_MODULE_9___default.a.put("https://api.money-men.kz/api/telegram/".concat(id)).then(function (response) {
              if (response.data.success) {
                _this.setState({
                  loading: false
                });

                _this.setState({
                  message: 'Отправлено',
                  collapse: '',
                  answer: ''
                });

                setTimeout(function () {
                  _this.setState({
                    message: ''
                  });
                }, 1500);

                _this.props.fetchNonAnsweredMsg();
              }
            });
          } else {
            _this.setState({
              message: 'Не отправлено'
            });

            setTimeout(function () {
              _this.setState({
                message: '',
                collapse: '',
                answer: ''
              });
            }, 1500);
          }
        });
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleChange", function (event) {
      _this.setState({
        answer: event.target.value
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleCode", function (event) {
      _this.setState({
        code: event.target.value
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "submitCode", function () {
      if (_this.state.code === 'admin123') {
        js_cookie__WEBPACK_IMPORTED_MODULE_16___default.a.set('botmsg', '3917', {
          expires: 60
        });
        location.reload();
      } else {
        alert('Ошибка кода');
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "toggleCollapse", function (id) {
      return function () {
        if (!_this.state.collapse || id !== _this.state.collapse) {
          _this.setState({
            collapse: id
          });
        } else if (_this.state.collapse === id) {
          _this.setState({
            collapse: false
          });
        }
      };
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Telegram, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchNonAnsweredMsg();
    }
  }, {
    key: "keypress",
    value: function keypress(event, msgid, id) {
      if (event.keyCode == 13 && event.shiftKey) {
        this.handleSubmit(msgid, id);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (js_cookie__WEBPACK_IMPORTED_MODULE_16___default.a.get('botmsg') === undefined) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "container text-center otherPages",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("form", {
            onSubmit: this.submitCode,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
              type: "password",
              value: this.state.code,
              onChange: this.handleCode
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "repeatBtn",
              children: [this.props.loading === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "modelLoader",
                children: disable_scroll__WEBPACK_IMPORTED_MODULE_15__["default"].on()
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 31
              }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "modelLoader loaded",
                children: disable_scroll__WEBPACK_IMPORTED_MODULE_15__["default"].off()
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 31
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
                type: "submit",
                value: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
                className: "mt-2 d-flex",
                children: " \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 17
        }, this);
      }

      if (this.props.nonanswered.nonanswered.length === 0 && this.props.nonanswered.isLoading === false) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "mb-5 container otherPages",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h4", {
            className: "mb-3 text-center",
            children: "\u041D\u0435\u043E\u0442\u0432\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 64
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
            className: "text-center",
            children: "\u041D\u0435\u0442 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 21
        }, this);
      }

      if (this.props.nonanswered.isLoading) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "container  otherPages text-center",
          children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430......."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 17
        }, this);
      } else return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "container otherPages",
        children: [this.state.message.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "tlgmsg alert alert-info",
          children: this.state.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 48
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 117
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h4", {
          className: "mb-3 text-center",
          children: ["\u041D\u0435\u043E\u0442\u0432\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B (", this.props.nonanswered.nonanswered.length, ")"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "row",
          children: this.props.nonanswered.nonanswered.map(function (elem) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "col-md-4",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "card mt-2",
                onClick: _this2.toggleCollapse(elem.id),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: "card-body",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                    className: "tinydate",
                    children: new Intl.DateTimeFormat('ru', {
                      year: 'numeric',
                      month: 'short',
                      day: '2-digit',
                      hour: 'numeric',
                      minute: 'numeric'
                    }).format(new Date(Date.parse(elem.created_at)))
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 143,
                    columnNumber: 29
                  }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                    className: "card-text",
                    children: ["\u0418\u043C\u044F: ", elem.name, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 145,
                      columnNumber: 54
                    }, _this2), "\u0418\u0418\u041D: ", elem.iin]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 144,
                    columnNumber: 33
                  }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("i", {
                    children: ["\u0412\u043E\u043F\u0440\u043E\u0441: ", elem.question]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 147,
                    columnNumber: 33
                  }, _this2)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 29
                }, _this2)
              }, elem.id, false, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 26
              }, _this2)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 22
            }, _this2);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 14
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Modal"], {
          isOpen: this.state.collapse,
          toggle: this.toggleCollapse(this.state.collapse),
          size: "md",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_11__["ModalBody"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_shared_messageDetailed__WEBPACK_IMPORTED_MODULE_13__["default"], {
              msg: this.props.nonanswered.nonanswered.filter(function (el) {
                return el.id === parseInt(_this2.state.collapse);
              })[0],
              answer: this.state.answer,
              handleChange: this.handleChange,
              handleSubmit: this.handleSubmit,
              keypress: this.keypress
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 18
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 14
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 13
      }, this);
    }
  }]);

  return Telegram;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps, mapDispatchToProps)(Telegram));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Rpc2FibGUtc2Nyb2xsL2VzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc2Nyb2xsaW5nZWxlbWVudC9zY3JvbGxpbmdlbGVtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy90ZWxlZ3JhbS5qcyJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm5vbmFuc3dlcmVkIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJmZXRjaEFuc3dlcmVkTXNnIiwiZmV0Y2hOb25BbnN3ZXJlZE1zZyIsIlRlbGVncmFtIiwiY29sbGFwc2UiLCJtZXNzYWdlIiwiYW5zd2VyIiwiY29kZSIsImxvYWRpbmciLCJtc2dpZCIsImlkIiwiYW5zd2VyVGV4dCIsImhlbGxvVXNlciIsInNwbGl0Iiwic2V0U3RhdGUiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwib2siLCJwdXQiLCJzdWNjZXNzIiwic2V0VGltZW91dCIsInByb3BzIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvb2tpZSIsInNldCIsImV4cGlyZXMiLCJsb2NhdGlvbiIsInJlbG9hZCIsImFsZXJ0Iiwia2V5Q29kZSIsInNoaWZ0S2V5IiwiaGFuZGxlU3VibWl0IiwiZ2V0IiwidW5kZWZpbmVkIiwic3VibWl0Q29kZSIsImhhbmRsZUNvZGUiLCJkaXNhYmxlU2Nyb2xsIiwib24iLCJvZmYiLCJsZW5ndGgiLCJpc0xvYWRpbmciLCJtYXAiLCJlbGVtIiwidG9nZ2xlQ29sbGFwc2UiLCJJbnRsIiwiRGF0ZVRpbWVGb3JtYXQiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJob3VyIiwibWludXRlIiwiZm9ybWF0IiwiRGF0ZSIsInBhcnNlIiwiY3JlYXRlZF9hdCIsIm5hbWUiLCJpaW4iLCJxdWVzdGlvbiIsImZpbHRlciIsImVsIiwicGFyc2VJbnQiLCJoYW5kbGVD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LENBQUNwRSxLQUFMLENBQVdPLFFBQVosQ0FBdEI7QUFBQSxlQUE1QyxFQUF5RixDQUF6RixDQURUO0FBRUksb0JBQU0sRUFBSSxLQUFLUCxLQUFMLENBQVdTLE1BRnpCO0FBR0ksMEJBQVksRUFBSSxLQUFLNEQsWUFIekI7QUFJSSwwQkFBWSxFQUFJLEtBQUs5QixZQUp6QjtBQUtJLHNCQUFRLEVBQUksS0FBSytCO0FBTHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFyQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFtQ0g7Ozs7RUF0SmtCQyw0Q0FBSyxDQUFDQyxTOztBQTBKZEMsMkhBQU8sQ0FBQzFFLGVBQUQsRUFBa0JHLGtCQUFsQixDQUFQLENBQTZDSSxRQUE3QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RlbGVncmFtLmYxNjJjODc2ZjNiN2ZkNGRlZmFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgeyBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgY2FuVXNlRE9NID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxudmFyIERpc2FibGVTY3JvbGwgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBEaXNhYmxlU2Nyb2xsKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGlzYWJsZVNjcm9sbCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJoYW5kbGVXaGVlbFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaGFuZGxlU2Nyb2xsXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfd2luZG93O1xuXG4gICAgICAoX3dpbmRvdyA9IHdpbmRvdykuc2Nyb2xsVG8uYXBwbHkoX3dpbmRvdywgX3RvQ29uc3VtYWJsZUFycmF5KF90aGlzLmxvY2tUb1Njcm9sbFBvcykpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaGFuZGxlS2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIGtleXMgPSBfdGhpcy5vcHRpb25zLmtleWJvYXJkS2V5cztcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG5cbiAgICAgIGlmIChbJ0lOUFVUJywgJ1RFWFRBUkVBJ10uaW5kZXhPZihlLnRhcmdldC50YWdOYW1lKSAhPT0gLTEpIHtcbiAgICAgICAga2V5cyA9IF90aGlzLm9wdGlvbnMuYXV0aG9yaXplZEluSW5wdXRzO1xuICAgICAgfVxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cblxuXG4gICAgICBpZiAoa2V5cy5pbmRleE9mKGUua2V5Q29kZSkgIT09IC0xKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gICAgdGhpcy5sb2NrVG9TY3JvbGxQb3MgPSBbMCwgMF07XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgZGlzYWJsZVdoZWVsOiB0cnVlLFxuICAgICAgZGlzYWJsZVNjcm9sbDogdHJ1ZSxcbiAgICAgIGRpc2FibGVLZXlzOiB0cnVlLFxuICAgICAga2V5Ym9hcmRLZXlzOiBbMzIsIDMzLCAzNCwgMzUsIDM2LCAzNywgMzgsIDM5LCA0MF0sXG4gICAgICBhdXRob3JpemVkSW5JbnB1dHM6IFszMiwgMzcsIDM4LCAzOSwgNDBdIC8vIHNwYWNlOiAzMiwgcGFnZSB1cDogMzMsIHBhZ2UgZG93bjogMzQsIGVuZDogMzUsIGhvbWU6IDM2XG4gICAgICAvLyBsZWZ0OiAzNywgdXA6IDM4LCByaWdodDogMzksIGRvd246IDQwXG5cbiAgICB9O1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG5cbiAgICBpZiAoY2FuVXNlRE9NKSB7XG4gICAgICByZXF1aXJlKCdzY3JvbGxpbmdlbGVtZW50Jyk7XG5cbiAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQ7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBEaXNhYmxlIFBhZ2UgU2Nyb2xsXG4gICAqIEBleHRlcm5hbCBOb2RlXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IFtlbGVtZW50XSAtIERPTSBFbGVtZW50LCB1c3VhbGx5IGRvY3VtZW50LmJvZHlcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSAtIENoYW5nZSB0aGUgaW5pdGlhbCBvcHRpb25zXG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKERpc2FibGVTY3JvbGwsIFt7XG4gICAga2V5OiBcIm9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICAgIGlmICghY2FuVXNlRE9NKSByZXR1cm47XG4gICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50IHx8IHRoaXMuZWxlbWVudDtcbiAgICAgIHRoaXMub3B0aW9ucyA9IF9vYmplY3RTcHJlYWQoe30sIHRoaXMub3B0aW9ucywge30sIG9wdGlvbnMpO1xuICAgICAgdmFyIF90aGlzJG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgZGlzYWJsZUtleXMgPSBfdGhpcyRvcHRpb25zLmRpc2FibGVLZXlzLFxuICAgICAgICAgIGRpc2FibGVTY3JvbGwgPSBfdGhpcyRvcHRpb25zLmRpc2FibGVTY3JvbGwsXG4gICAgICAgICAgZGlzYWJsZVdoZWVsID0gX3RoaXMkb3B0aW9ucy5kaXNhYmxlV2hlZWw7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuXG4gICAgICBpZiAoZGlzYWJsZVdoZWVsKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgdGhpcy5oYW5kbGVXaGVlbCwge1xuICAgICAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmhhbmRsZVdoZWVsLCB7XG4gICAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuXG5cbiAgICAgIGlmIChkaXNhYmxlU2Nyb2xsKSB7XG4gICAgICAgIHRoaXMubG9ja1RvU2Nyb2xsUG9zID0gW3RoaXMuZWxlbWVudC5zY3JvbGxMZWZ0IHx8IHRoaXMuZWxlbWVudC5zY3JvbGxYLCB0aGlzLmVsZW1lbnQuc2Nyb2xsVG9wIHx8IHRoaXMuZWxlbWVudC5zY3JvbGxZXTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGwsIHtcbiAgICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG5cblxuICAgICAgaWYgKGRpc2FibGVLZXlzKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleWRvd24sIHtcbiAgICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmUtZW5hYmxlIHBhZ2Ugc2Nyb2xsc1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib2ZmXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9mZigpIHtcbiAgICAgIGlmICghY2FuVXNlRE9NKSByZXR1cm47XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIHRoaXMuaGFuZGxlV2hlZWwsIHtcbiAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5oYW5kbGVXaGVlbCwge1xuICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCwge1xuICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlkb3duLCB7XG4gICAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRGlzYWJsZVNjcm9sbDtcbn0oKTtcblxuZXhwb3J0IGRlZmF1bHQgbmV3IERpc2FibGVTY3JvbGwoKTsiLCIvKiEgaHR0cHM6Ly9tdGhzLmJlL3Njcm9sbGluZ2VsZW1lbnQgdjEuNS4yIGJ5IEBkaWVnb3BlcmluaSAmIEBtYXRoaWFzIHwgTUlUIGxpY2Vuc2UgKi9cbmlmICghKCdzY3JvbGxpbmdFbGVtZW50JyBpbiBkb2N1bWVudCkpIChmdW5jdGlvbigpIHtcblxuXHRmdW5jdGlvbiBjb21wdXRlU3R5bGUoZWxlbWVudCkge1xuXHRcdGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSkge1xuXHRcdFx0Ly8gU3VwcG9ydCBGaXJlZm94IDwgNCB3aGljaCB0aHJvd3Mgb24gYSBzaW5nbGUgcGFyYW1ldGVyLlxuXHRcdFx0cmV0dXJuIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbCk7XG5cdFx0fVxuXHRcdC8vIFN1cHBvcnQgSW50ZXJuZXQgRXhwbG9yZXIgPCA5LlxuXHRcdHJldHVybiBlbGVtZW50LmN1cnJlbnRTdHlsZTtcblx0fVxuXG5cdGZ1bmN0aW9uIGlzQm9keUVsZW1lbnQoZWxlbWVudCkge1xuXHRcdC8vIFRoZSBgaW5zdGFuY2VvZmAgY2hlY2sgZ2l2ZXMgdGhlIGNvcnJlY3QgcmVzdWx0IGZvciBlLmcuIGBib2R5YCBpbiBhXG5cdFx0Ly8gbm9uLUhUTUwgbmFtZXNwYWNlLlxuXHRcdGlmICh3aW5kb3cuSFRNTEJvZHlFbGVtZW50KSB7XG5cdFx0XHRyZXR1cm4gZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxCb2R5RWxlbWVudDtcblx0XHR9XG5cdFx0Ly8gRmFsbCBiYWNrIHRvIGEgYHRhZ05hbWVgIGNoZWNrIGZvciBvbGQgYnJvd3NlcnMuXG5cdFx0cmV0dXJuIC9ib2R5L2kudGVzdChlbGVtZW50LnRhZ05hbWUpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0TmV4dEJvZHlFbGVtZW50KGZyYW1lc2V0KSB7XG5cdFx0Ly8gV2UgdXNlIHRoaXMgZnVuY3Rpb24gdG8gYmUgY29ycmVjdCBwZXIgc3BlYyBpbiBjYXNlIGBkb2N1bWVudC5ib2R5YCBpc1xuXHRcdC8vIGEgYGZyYW1lc2V0YCBidXQgdGhlcmUgZXhpc3RzIGEgbGF0ZXIgYGJvZHlgLiBTaW5jZSBgZG9jdW1lbnQuYm9keWAgaXNcblx0XHQvLyBhIGBmcmFtZXNldGAsIHdlIGtub3cgdGhlIHJvb3QgaXMgYW4gYGh0bWxgLCBhbmQgdGhlcmUgd2FzIG5vIGBib2R5YFxuXHRcdC8vIGJlZm9yZSB0aGUgYGZyYW1lc2V0YCwgc28gd2UganVzdCBuZWVkIHRvIGxvb2sgYXQgc2libGluZ3MgYWZ0ZXIgdGhlXG5cdFx0Ly8gYGZyYW1lc2V0YC5cblx0XHR2YXIgY3VycmVudCA9IGZyYW1lc2V0O1xuXHRcdHdoaWxlIChjdXJyZW50ID0gY3VycmVudC5uZXh0U2libGluZykge1xuXHRcdFx0aWYgKGN1cnJlbnQubm9kZVR5cGUgPT0gMSAmJiBpc0JvZHlFbGVtZW50KGN1cnJlbnQpKSB7XG5cdFx0XHRcdHJldHVybiBjdXJyZW50O1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBObyBgYm9keWAgZm91bmQuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHQvLyBOb3RlOiBzdGFuZGFyZHMgbW9kZSAvIHF1aXJrcyBtb2RlIGNhbiBiZSB0b2dnbGVkIGF0IHJ1bnRpbWUgdmlhXG5cdC8vIGBkb2N1bWVudC53cml0ZWAuXG5cdHZhciBpc0NvbXBsaWFudENhY2hlZDtcblx0dmFyIGlzQ29tcGxpYW50ID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGlzU3RhbmRhcmRzTW9kZSA9IC9eQ1NTMS8udGVzdChkb2N1bWVudC5jb21wYXRNb2RlKTtcblx0XHRpZiAoIWlzU3RhbmRhcmRzTW9kZSkge1xuXHRcdFx0Ly8gSW4gcXVpcmtzIG1vZGUsIHRoZSByZXN1bHQgaXMgZXF1aXZhbGVudCB0byB0aGUgbm9uLWNvbXBsaWFudFxuXHRcdFx0Ly8gc3RhbmRhcmRzIG1vZGUgYmVoYXZpb3IuXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmIChpc0NvbXBsaWFudENhY2hlZCA9PT0gdm9pZCAwKSB7XG5cdFx0XHQvLyBXaGVuIGNhbGxlZCBmb3IgdGhlIGZpcnN0IHRpbWUsIGNoZWNrIHdoZXRoZXIgdGhlIGJyb3dzZXIgaXNcblx0XHRcdC8vIHN0YW5kYXJkLWNvbXBsaWFudCwgYW5kIGNhY2hlIHRoZSByZXN1bHQuXG5cdFx0XHR2YXIgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG5cdFx0XHRpZnJhbWUuc3R5bGUuaGVpZ2h0ID0gJzFweCc7XG5cdFx0XHQoZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgZG9jdW1lbnQpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG5cdFx0XHR2YXIgZG9jID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG5cdFx0XHRkb2Mud3JpdGUoJzwhRE9DVFlQRSBodG1sPjxkaXYgc3R5bGU9XCJoZWlnaHQ6OTk5OWVtXCI+eDwvZGl2PicpO1xuXHRcdFx0ZG9jLmNsb3NlKCk7XG5cdFx0XHRpc0NvbXBsaWFudENhY2hlZCA9IGRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0ID4gZG9jLmJvZHkuc2Nyb2xsSGVpZ2h0O1xuXHRcdFx0aWZyYW1lLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcblx0XHR9XG5cdFx0cmV0dXJuIGlzQ29tcGxpYW50Q2FjaGVkO1xuXHR9O1xuXG5cdGZ1bmN0aW9uIGlzUmVuZGVyZWQoc3R5bGUpIHtcblx0XHRyZXR1cm4gc3R5bGUuZGlzcGxheSAhPSAnbm9uZScgJiYgIShzdHlsZS52aXNpYmlsaXR5ID09ICdjb2xsYXBzZScgJiZcblx0XHRcdC9edGFibGUtKC4rLWdyb3VwfHJvd3xjb2x1bW4pJC8udGVzdChzdHlsZS5kaXNwbGF5KSk7XG5cdH1cblxuXHRmdW5jdGlvbiBpc1Njcm9sbGFibGUoYm9keSkge1xuXHRcdC8vIEEgYGJvZHlgIGVsZW1lbnQgaXMgc2Nyb2xsYWJsZSBpZiBgYm9keWAgYW5kIGBodG1sYCBib3RoIGhhdmVcblx0XHQvLyBub24tYHZpc2libGVgIG92ZXJmbG93IGFuZCBhcmUgYm90aCBiZWluZyByZW5kZXJlZC5cblx0XHR2YXIgYm9keVN0eWxlID0gY29tcHV0ZVN0eWxlKGJvZHkpO1xuXHRcdHZhciBodG1sU3R5bGUgPSBjb21wdXRlU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcblx0XHRyZXR1cm4gYm9keVN0eWxlLm92ZXJmbG93ICE9ICd2aXNpYmxlJyAmJiBodG1sU3R5bGUub3ZlcmZsb3cgIT0gJ3Zpc2libGUnICYmXG5cdFx0XHRpc1JlbmRlcmVkKGJvZHlTdHlsZSkgJiYgaXNSZW5kZXJlZChodG1sU3R5bGUpO1xuXHR9XG5cblx0dmFyIHNjcm9sbGluZ0VsZW1lbnQgPSBmdW5jdGlvbigpIHtcblx0XHRpZiAoaXNDb21wbGlhbnQoKSkge1xuXHRcdFx0cmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblx0XHR9XG5cdFx0dmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuXHRcdC8vIE5vdGU6IGBkb2N1bWVudC5ib2R5YCBjb3VsZCBiZSBhIGBmcmFtZXNldGAgZWxlbWVudCwgb3IgYG51bGxgLlxuXHRcdC8vIGB0YWdOYW1lYCBpcyB1cHBlcmNhc2UgaW4gSFRNTCwgYnV0IGxvd2VyY2FzZSBpbiBYTUwuXG5cdFx0dmFyIGlzRnJhbWVzZXQgPSBib2R5ICYmICEvYm9keS9pLnRlc3QoYm9keS50YWdOYW1lKTtcblx0XHRib2R5ID0gaXNGcmFtZXNldCA/IGdldE5leHRCb2R5RWxlbWVudChib2R5KSA6IGJvZHk7XG5cdFx0Ly8gSWYgYGJvZHlgIGlzIGl0c2VsZiBzY3JvbGxhYmxlLCBpdCBpcyBub3QgdGhlIGBzY3JvbGxpbmdFbGVtZW50YC5cblx0XHRyZXR1cm4gYm9keSAmJiBpc1Njcm9sbGFibGUoYm9keSkgPyBudWxsIDogYm9keTtcblx0fTtcblxuXHRpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7XG5cdFx0Ly8gU3VwcG9ydCBtb2Rlcm4gYnJvd3NlcnMgdGhhdCBsYWNrIGEgbmF0aXZlIGltcGxlbWVudGF0aW9uLlxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkb2N1bWVudCwgJ3Njcm9sbGluZ0VsZW1lbnQnLCB7XG5cdFx0XHQnZ2V0Jzogc2Nyb2xsaW5nRWxlbWVudFxuXHRcdH0pO1xuXHR9IGVsc2UgaWYgKGRvY3VtZW50Ll9fZGVmaW5lR2V0dGVyX18pIHtcblx0XHQvLyBTdXBwb3J0IEZpcmVmb3gg4omkIDMuNi45LCBTYWZhcmkg4omkIDQuMS4zLlxuXHRcdGRvY3VtZW50Ll9fZGVmaW5lR2V0dGVyX18oJ3Njcm9sbGluZ0VsZW1lbnQnLCBzY3JvbGxpbmdFbGVtZW50KTtcblx0fSBlbHNlIHtcblx0XHQvLyBJRSDiiaQgNCBsYWNrcyBgYXR0YWNoRXZlbnRgLCBzbyBpdCBvbmx5IGdldHMgdGhpcyBvbmUgYXNzaWdubWVudC4gSUUg4omkIDdcblx0XHQvLyBnZXRzIGl0IHRvbywgYnV0IHRoZSB2YWx1ZSBpcyB1cGRhdGVkIGxhdGVyIChzZWUgYHByb3BlcnR5Y2hhbmdlYCkuXG5cdFx0ZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCA9IHNjcm9sbGluZ0VsZW1lbnQoKTtcblx0XHRkb2N1bWVudC5hdHRhY2hFdmVudCAmJiBkb2N1bWVudC5hdHRhY2hFdmVudCgnb25wcm9wZXJ0eWNoYW5nZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gVGhpcyBpcyBmb3IgSUUg4omkIDcgb25seS5cblx0XHRcdC8vIEEgYHByb3BlcnR5Y2hhbmdlYCBldmVudCBmaXJlcyB3aGVuIGA8Ym9keT5gIGlzIHBhcnNlZCBiZWNhdXNlXG5cdFx0XHQvLyBgZG9jdW1lbnQuYWN0aXZlRWxlbWVudGAgdGhlbiBjaGFuZ2VzLlxuXHRcdFx0aWYgKHdpbmRvdy5ldmVudC5wcm9wZXJ0eU5hbWUgPT0gJ2FjdGl2ZUVsZW1lbnQnKSB7XG5cdFx0XHRcdGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgPSBzY3JvbGxpbmdFbGVtZW50KCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn0oKSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge2ZldGNoQW5zd2VyZWRNc2csIGZldGNoTm9uQW5zd2VyZWRNc2d9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvdGVsZWdyYW0nXHJcbmltcG9ydCB7IE1vZGFsLCBNb2RhbEhlYWRlciwgTW9kYWxCb2R5IH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBNZXNzYWdlRGV0YWlsIGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVkL21lc3NhZ2VEZXRhaWxlZCdcclxuaW1wb3J0IHtoZWxsb1VzZXJ9IGZyb20gJy4uL2RlZmF1bHRzL2hlbGxvJ1xyXG5pbXBvcnQgZGlzYWJsZVNjcm9sbCBmcm9tICdkaXNhYmxlLXNjcm9sbCc7XHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XHJcbiAgcmV0dXJuIHtub25hbnN3ZXJlZDogc3RhdGUubm9uYW5zd2VyZWR9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICAgIGZldGNoQW5zd2VyZWRNc2c6ICgpID0+IGRpc3BhdGNoKGZldGNoQW5zd2VyZWRNc2coKSksXHJcbiAgICBmZXRjaE5vbkFuc3dlcmVkTXNnOiAoKSA9PiBkaXNwYXRjaChmZXRjaE5vbkFuc3dlcmVkTXNnKCkpLFxyXG4gIH0pXHJcbiAgXHJcbmNsYXNzIFRlbGVncmFtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMuZmV0Y2hOb25BbnN3ZXJlZE1zZygpXHJcbiAgICB9IFxyXG5cclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIGNvbGxhcHNlOiBcIlwiLFxyXG4gICAgICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgICAgIGFuc3dlcjogJycsXHJcbiAgICAgICAgY29kZTogJycsXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICB9XHJcblxyXG5cclxuICAgIFxyXG4gICAgaGFuZGxlU3VibWl0ID0gKG1zZ2lkLCBpZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFuc3dlclRleHQgPSBgXHJcbiR7aGVsbG9Vc2VyKCl9ISUwQVxyXG4ke3RoaXMuc3RhdGUuYW5zd2VyLnNwbGl0KCclMEEnKX0lMEElMEFcclxu0KEg0YPQstCw0LbQtdC90LjQtdC8IEktY3JlZGl0Lmt6XHJcbiAgICBgXHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5hbnN3ZXIpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZS5hbnN3ZXIpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IHRydWV9KVxyXG4gICAgICAgICAgICBheGlvcy5wb3N0KGBodHRwczovL2FwaS50ZWxlZ3JhbS5vcmcvYm90MTQ4MjAwNTkxNTpBQUdxak5JVFVEMGhSdTk1YVVaX3pEZmstQVAwZHZNNWw1Zy9zZW5kTWVzc2FnZT9jaGF0X2lkPSR7bXNnaWR9JnRleHQ9JHthbnN3ZXJUZXh0fSZpZT1VVEYtOCZvZT1VVEYtOCZwYXJzZV9tb2RlPWh0bWxgKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZT0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEub2spIHtcclxuICAgICAgICAgICAgICAgICAgICBheGlvcy5wdXQoYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvdGVsZWdyYW0vJHtpZH1gKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogZmFsc2V9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZTogJ9Ce0YLQv9GA0LDQstC70LXQvdC+Jyxjb2xsYXBzZTogJycsIGFuc3dlcjogJyd9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZTogJyd9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwxNTAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5mZXRjaE5vbkFuc3dlcmVkTXNnKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZTogJ9Cd0LUg0L7RgtC/0YDQsNCy0LvQtdC90L4nfSlcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZTogJycsIGNvbGxhcHNlOiAnJywgYW5zd2VyOiAnJ30pXHJcbiAgICAgICAgICAgICAgICAgICAgfSwxNTAwKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBrZXlwcmVzcyhldmVudCwgbXNnaWQsIGlkKSB7XHJcbiAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PSAxMyAmJiBldmVudC5zaGlmdEtleSl7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlU3VibWl0KG1zZ2lkLGlkKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHthbnN3ZXI6IGV2ZW50LnRhcmdldC52YWx1ZX0pXHJcbiAgICB9XHJcbiAgICBoYW5kbGVDb2RlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y29kZTogZXZlbnQudGFyZ2V0LnZhbHVlfSlcclxuICAgIH1cclxuICAgIHN1Ym1pdENvZGUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5jb2RlID09PSAnYWRtaW4xMjMnKSB7XHJcbiAgICAgICAgICAgIGNvb2tpZS5zZXQoJ2JvdG1zZycsJzM5MTcnLCB7ZXhwaXJlczogNjB9KVxyXG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCfQntGI0LjQsdC60LAg0LrQvtC00LAnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVDb2xsYXBzZSA9IGlkID0+ICgpID0+IHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuY29sbGFwc2UgfHwgaWQgIT09IHRoaXMuc3RhdGUuY29sbGFwc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGNvbGxhcHNlOiBpZFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuY29sbGFwc2UgPT09IGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb2xsYXBzZTogZmFsc2UgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmKGNvb2tpZS5nZXQoJ2JvdG1zZycpID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgdGV4dC1jZW50ZXIgb3RoZXJQYWdlcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuc3VibWl0Q29kZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdwYXNzd29yZCcgdmFsdWU9e3RoaXMuc3RhdGUuY29kZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ29kZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlcGVhdEJ0bic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmxvYWRpbmcgPT09IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9XCJtb2RlbExvYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkaXNhYmxlU2Nyb2xsLm9uKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPVwibW9kZWxMb2FkZXIgbG9hZGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Rpc2FibGVTY3JvbGwub2ZmKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgIHZhbHVlPSfQntGC0L/RgNCw0LLQuNGC0YwnIGNsYXNzTmFtZT0nbXQtMiBkLWZsZXgnPiDQntGC0L/RgNCw0LLQuNGC0Yw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm5vbmFuc3dlcmVkLm5vbmFuc3dlcmVkLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnByb3BzLm5vbmFuc3dlcmVkLmlzTG9hZGluZz09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPSdtYi01IGNvbnRhaW5lciBvdGhlclBhZ2VzJz48aDQgY2xhc3NOYW1lPSdtYi0zIHRleHQtY2VudGVyJz7QndC10L7RgtCy0LXRh9C10L3QvdGL0LUg0LLQvtC/0YDQvtGB0Ys8L2g0PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+0J3QtdGCINCy0L7Qv9GA0L7RgdC+0LI8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5ub25hbnN3ZXJlZC5pc0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgIG90aGVyUGFnZXMgdGV4dC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgINCX0LDQs9GA0YPQt9C60LAuLi4uLi4uXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgb3RoZXJQYWdlcyc+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5tZXNzYWdlLmxlbmd0aD4wID8gPGRpdiBjbGFzc05hbWU9J3RsZ21zZyBhbGVydCBhbGVydC1pbmZvJz57dGhpcy5zdGF0ZS5tZXNzYWdlfTwvZGl2PjogPGRpdj48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdtYi0zIHRleHQtY2VudGVyJz7QndC10L7RgtCy0LXRh9C10L3QvdGL0LUg0LLQvtC/0YDQvtGB0YsgKHt0aGlzLnByb3BzLm5vbmFuc3dlcmVkLm5vbmFuc3dlcmVkLmxlbmd0aH0pPC9oND5cclxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm5vbmFuc3dlcmVkLm5vbmFuc3dlcmVkLm1hcChlbGVtPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZCBtdC0yJyBrZXk9e2VsZW0uaWR9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlQ29sbGFwc2UoZWxlbS5pZCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtYm9keSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RpbnlkYXRlJz57bmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ3J1JywgeyB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnc2hvcnQnLCBkYXk6ICcyLWRpZ2l0JywgaG91cjonbnVtZXJpYycsIG1pbnV0ZTonbnVtZXJpYycgfSkuZm9ybWF0KG5ldyBEYXRlKERhdGUucGFyc2UoZWxlbS5jcmVhdGVkX2F0KSkpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2NhcmQtdGV4dCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCY0LzRjzoge2VsZW0ubmFtZX0gPGJyPjwvYnI+0JjQmNCdOiB7ZWxlbS5paW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpPtCS0L7Qv9GA0L7RgToge2VsZW0ucXVlc3Rpb259PC9pPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIDxNb2RhbCAgaXNPcGVuPXt0aGlzLnN0YXRlLmNvbGxhcHNlfSB0b2dnbGU9e3RoaXMudG9nZ2xlQ29sbGFwc2UodGhpcy5zdGF0ZS5jb2xsYXBzZSl9ICAgc2l6ZT1cIm1kXCI+XHJcbiAgICAgICAgICAgICAgICAgPE1vZGFsQm9keT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZURldGFpbCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXNnPXt0aGlzLnByb3BzLm5vbmFuc3dlcmVkLm5vbmFuc3dlcmVkLmZpbHRlcihlbCA9PiBlbC5pZCA9PT0gcGFyc2VJbnQodGhpcy5zdGF0ZS5jb2xsYXBzZSkpWzBdfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2VyID0ge3RoaXMuc3RhdGUuYW5zd2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UgPSB7dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCA9IHt0aGlzLmhhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5cHJlc3MgPSB7dGhpcy5rZXlwcmVzc31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgIDwvTW9kYWxCb2R5PlxyXG5cdFx0XHQ8L01vZGFsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVGVsZWdyYW0pIl0sInNvdXJjZVJvb3QiOiIifQ==