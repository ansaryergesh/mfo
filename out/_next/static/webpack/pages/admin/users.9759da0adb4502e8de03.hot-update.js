webpackHotUpdate_N_E("pages/admin/users",{

/***/ "./pages/admin/users.js":
/*!******************************!*\
  !*** ./pages/admin/users.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_admin_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/admin/Header */ "./components/admin/Header.js");
/* harmony import */ var _components_admin_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/admin/Footer */ "./components/admin/Footer.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");



var _jsxFileName = "E:\\icredit\\server-zaymi\\zaymikz \u2014 \u043A\u043E\u043F\u0438\u044F\\pages\\admin\\users.js",
    _this = undefined,
    _s = $RefreshSig$();










function mapStateToProps(state) {
  return {
    adminReducer: state.adminReducer
  };
}

var AdminUsers = function AdminUsers(_ref) {
  _s();

  var _jsxDEV2;

  var adminReducer = _ref.adminReducer;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      users = _useState2[0],
      setUsers = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      edit = _useState3[0],
      setEdit = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    id: null,
    name: null,
    email: null,
    role_id: null
  }),
      userDate = _useState4[0],
      setUserDate = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    name: null,
    email: null,
    password: 'icredit123',
    role_id: 2
  }),
      newUser = _useState5[0],
      setNewUser = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      showModal = _useState6[0],
      setShowModal = _useState6[1];

  var handleClose = function handleClose() {
    setShowModal(false);
    setNewUser({
      name: null,
      email: null,
      password: 'icredit123',
      role_id: 2
    });
  };

  var handleShow = function handleShow() {
    return setShowModal(true);
  };

  var getUser = function getUser() {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("http://localhost:8000/api/users").then(function (res) {
      setUsers(res.data);
      setLoading(false);
      console.log(users);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getUser();
  }, []);

  var editAccount = function editAccount(id) {
    setEdit(id);
    var user = users.filter(function (user) {
      return user.id === id;
    });
    setUserDate({
      id: id,
      name: user[0].name,
      email: user[0].email,
      role_id: user[0].role_id
    });
  };

  var userAdd = function userAdd(e) {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('http://localhost:8000/api/users', {
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
      role_id: newUser.role_id,
      token: js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.get('admin_token')
    }).then(function (res) {
      if (res.data.success) {
        dispatch({
          type: 'ADM_SUCCESS_MESSAGE',
          payload: res.data.message
        });
        getUser();
        handleClose();
      } else {
        dispatch({
          type: 'ADM_ERROR_MESSAGE',
          payload: res.data.message
        });
      }
    });
    e.preventDefault();
  };

  var saveEdit = function saveEdit() {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.put('http://localhost:8000/api/edit', {
      token: js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.get('admin_token'),
      email: userDate.email,
      name: userDate.name,
      role_id: userDate.role_id,
      user_id: userDate.id
    }).then(function (res) {
      if (res.data.success) {
        dispatch({
          type: 'ADM_SUCCESS_MESSAGE',
          payload: res.data.message
        });
        setEdit('');
        getUser();
      } else {
        dispatch({
          type: 'ADM_ERROR_MESSAGE',
          payload: res.data.message
        });
        getUser();
      }
    });
  };

  var deleteAccount = function deleteAccount(id) {
    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
      title: 'Вы уверены, что хотите удалить пользователя',
      buttons: {
        "catch": {
          text: 'Да',
          value: 'yes'
        },
        cancel: 'Нет'
      }
    }).then(function (value) {
      switch (value) {
        case 'yes':
          axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("http://localhost:8000/api/deleteAccount?token=".concat(js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.get('admin_token'), "&user_id=").concat(id)).then(function (response) {
            console.log(response);

            if (response.data.success) {
              dispatch({
                type: 'ADM_SUCCESS_MESSAGE',
                payload: response.data.message
              });
              getUser();
            } else {
              dispatch({
                type: 'ADM_ERROR_MESSAGE',
                payload: response.data.message
              });
            }
          });
      }
    });
  };

  var cancelEdit = function cancelEdit() {
    setEdit('');
    getUser();
  };

  var userTable = function userTable(edit, user, index) {
    if (edit === user.id) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("tr", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("th", {
          scope: "row",
          children: index + 1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("td", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            onChange: function onChange(e) {
              return setUserDate({
                id: userDate.id,
                name: e.target.value,
                email: userDate.email,
                role_id: userDate.role_id
              });
            },
            value: userDate.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("td", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            onChange: function onChange(e) {
              return setUserDate({
                id: userDate.id,
                name: userDate.name,
                email: e.target.value,
                role_id: userDate.role_id
              });
            },
            value: userDate.email
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("td", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("select", {
            onChange: function onChange(e) {
              return setUserDate({
                id: userDate.id,
                name: userDate.name,
                email: userDate.email,
                role_id: e.target.value
              });
            },
            value: userDate.role_id,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
              value: "1",
              children: "Admin"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 163
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
              value: "2",
              children: "Moderator"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 195
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("td", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
            className: "btn btn-success mr-2",
            onClick: function onClick() {
              return saveEdit();
            },
            children: "Save"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
            className: "btn btn-danger",
            onClick: function onClick() {
              return cancelEdit();
            },
            children: "Cancel"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 9
        }, _this)]
      }, userDate.id, true, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 11
      }, _this);
    } else return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("tr", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("th", {
        scope: "row",
        children: index + 1
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("td", {
        children: user.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("td", {
        children: user.email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("td", {
        children: user.role_id === 1 ? 'Admin' : 'Moderator'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("td", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          className: "btn btn-success mr-2",
          onClick: function onClick() {
            return editAccount(user.id);
          },
          children: "Edit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          className: "btn btn-danger",
          onClick: function onClick() {
            return deleteAccount(user.id);
          },
          children: "Delete"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }, _this)]
    }, user.id, true, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 9
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_admin_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("main", {
      role: "main",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
        "class": "panel important",
        children: [loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          children: "\u0417\u0430\u0433\u0443\u0437\u043A\u0430..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 16
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "d-flex mb-3 justify-content-between",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
              children: "Users"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 7
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
              className: "btn btn-info",
              onClick: handleShow,
              children: ["\u041D\u043E\u0432\u044B\u0439 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("b", {
                children: "+"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 82
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 9
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("table", {
            className: "table table-striped",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("thead", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("tr", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("th", {
                  scope: "col",
                  children: "#"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 166,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("th", {
                  scope: "col",
                  children: "\u0418\u043C\u044F"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 167,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("th", {
                  scope: "col",
                  children: "Username"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 168,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("th", {
                  scope: "col",
                  children: "\u0420\u043E\u043B\u044C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 169,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("th", {
                  scope: "col",
                  children: "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 170,
                  columnNumber: 17
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("tbody", {
              children: users.map(function (user, index) {
                return userTable(edit, user, index);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
          isOpen: showModal,
          toggle: function toggle() {
            return handleClose(showModal);
          },
          size: "md",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_9__["ModalBody"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
              className: "form-group",
              onSubmit: function onSubmit(e) {
                return userAdd(e);
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
                onChange: function onChange(e) {
                  return setNewUser({
                    password: newUser.password,
                    name: e.target.value,
                    email: newUser.email,
                    role_id: newUser.role_id
                  });
                },
                value: newUser.name,
                className: "input-group mb-2",
                type: "text",
                placeholder: "\u0418\u043C\u044F"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 23
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
                onChange: function onChange(e) {
                  return setNewUser({
                    password: newUser.password,
                    name: newUser.name,
                    email: e.target.value,
                    role_id: newUser.role_id
                  });
                },
                value: newUser.email,
                className: "input-group mt-2",
                type: "text",
                placeholder: "Username"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 23
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("select", (_jsxDEV2 = {
                onChange: function onChange(e) {
                  return setNewUser({
                    password: newUser.password,
                    name: newUser.name,
                    email: newUser.email,
                    role_id: e.target.value
                  });
                },
                value: newUser.email
              }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsxDEV2, "value", newUser.role_id), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsxDEV2, "className", "input-group mt-2"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsxDEV2, "children", [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
                value: "1",
                children: "Admin"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 189,
                columnNumber: 232
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
                value: "2",
                children: "Moderator"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 189,
                columnNumber: 264
              }, _this)]), _jsxDEV2), void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 189,
                columnNumber: 23
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
                className: "btn btn-info mt-2",
                children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 23
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 21
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 18
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 7
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 6
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_admin_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 151,
    columnNumber: 9
  }, _this);
};

_s(AdminUsers, "QlVeXyQLuK/TR0+mQQDeZcaX5E0=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"]];
});

_c = AdminUsers;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps)(AdminUsers));

var _c;

$RefreshReg$(_c, "AdminUsers");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vdXNlcnMuanMiXSwibmFtZXMiOlsibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJhZG1pblJlZHVjZXIiLCJBZG1pblVzZXJzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VycyIsInNldFVzZXJzIiwiZWRpdCIsInNldEVkaXQiLCJpZCIsIm5hbWUiLCJlbWFpbCIsInJvbGVfaWQiLCJ1c2VyRGF0ZSIsInNldFVzZXJEYXRlIiwicGFzc3dvcmQiLCJuZXdVc2VyIiwic2V0TmV3VXNlciIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImhhbmRsZUNsb3NlIiwiaGFuZGxlU2hvdyIsImdldFVzZXIiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsImVkaXRBY2NvdW50IiwidXNlciIsImZpbHRlciIsInVzZXJBZGQiLCJlIiwicG9zdCIsInRva2VuIiwiY29va2llIiwic3VjY2VzcyIsInR5cGUiLCJwYXlsb2FkIiwibWVzc2FnZSIsInByZXZlbnREZWZhdWx0Iiwic2F2ZUVkaXQiLCJwdXQiLCJ1c2VyX2lkIiwiZGVsZXRlQWNjb3VudCIsInN3YWwiLCJ0aXRsZSIsImJ1dHRvbnMiLCJ0ZXh0IiwidmFsdWUiLCJjYW5jZWwiLCJyZXNwb25zZSIsImNhbmNlbEVkaXQiLCJ1c2VyVGFibGUiLCJpbmRleCIsInRhcmdldCIsIm1hcCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsZUFBVCxDQUF5QkMsS0FBekIsRUFBZ0M7QUFDOUIsU0FBTztBQUFDQyxnQkFBWSxFQUFDRCxLQUFLLENBQUNDO0FBQXBCLEdBQVA7QUFDRDs7QUFDRCxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFvQjtBQUFBOztBQUFBOztBQUFBLE1BQWxCRCxZQUFrQixRQUFsQkEsWUFBa0I7QUFDbkMsTUFBTUUsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFEbUMsa0JBRU5DLHNEQUFRLENBQUMsSUFBRCxDQUZGO0FBQUEsTUFFNUJDLE9BRjRCO0FBQUEsTUFFcEJDLFVBRm9COztBQUFBLG1CQUdURixzREFBUSxDQUFDLEVBQUQsQ0FIQztBQUFBLE1BRzVCRyxLQUg0QjtBQUFBLE1BR3JCQyxRQUhxQjs7QUFBQSxtQkFJWkosc0RBQVEsQ0FBQyxFQUFELENBSkk7QUFBQSxNQUk1QkssSUFKNEI7QUFBQSxNQUl2QkMsT0FKdUI7O0FBQUEsbUJBS0pOLHNEQUFRLENBQUM7QUFBQ08sTUFBRSxFQUFFLElBQUw7QUFBVUMsUUFBSSxFQUFFLElBQWhCO0FBQXNCQyxTQUFLLEVBQUUsSUFBN0I7QUFBbUNDLFdBQU8sRUFBRTtBQUE1QyxHQUFELENBTEo7QUFBQSxNQUs1QkMsUUFMNEI7QUFBQSxNQUtuQkMsV0FMbUI7O0FBQUEsbUJBTUxaLHNEQUFRLENBQUM7QUFBQ1EsUUFBSSxFQUFFLElBQVA7QUFBYUMsU0FBSyxFQUFFLElBQXBCO0FBQTBCSSxZQUFRLEVBQUUsWUFBcEM7QUFBa0RILFdBQU8sRUFBRTtBQUEzRCxHQUFELENBTkg7QUFBQSxNQU01QkksT0FONEI7QUFBQSxNQU1uQkMsVUFObUI7O0FBQUEsbUJBT0RmLHNEQUFRLENBQUMsS0FBRCxDQVBQO0FBQUEsTUFPNUJnQixTQVA0QjtBQUFBLE1BT2pCQyxZQVBpQjs7QUFTbkMsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QkQsZ0JBQVksQ0FBQyxLQUFELENBQVo7QUFDQUYsY0FBVSxDQUFDO0FBQUNQLFVBQUksRUFBRSxJQUFQO0FBQWFDLFdBQUssRUFBRSxJQUFwQjtBQUEwQkksY0FBUSxFQUFFLFlBQXBDO0FBQWtESCxhQUFPLEVBQUU7QUFBM0QsS0FBRCxDQUFWO0FBQ0QsR0FIRDs7QUFJQSxNQUFNUyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFdBQU1GLFlBQVksQ0FBQyxJQUFELENBQWxCO0FBQUEsR0FBbkI7O0FBQ0EsTUFBTUcsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNwQkMsZ0RBQUssQ0FBQ0MsR0FBTixvQ0FDT0MsSUFEUCxDQUNZLFVBQUFDLEdBQUcsRUFBSTtBQUNUcEIsY0FBUSxDQUFDb0IsR0FBRyxDQUFDQyxJQUFMLENBQVI7QUFDQXZCLGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0F3QixhQUFPLENBQUNDLEdBQVIsQ0FBWXhCLEtBQVo7QUFDSCxLQUxQO0FBTUQsR0FQRDs7QUFRQXlCLHlEQUFTLENBQUMsWUFBTTtBQUNkUixXQUFPO0FBQ1IsR0FGUSxFQUVQLEVBRk8sQ0FBVDs7QUFLQSxNQUFNUyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDdEIsRUFBRCxFQUFRO0FBQzFCRCxXQUFPLENBQUNDLEVBQUQsQ0FBUDtBQUNBLFFBQU11QixJQUFJLEdBQUczQixLQUFLLENBQUM0QixNQUFOLENBQWEsVUFBQUQsSUFBSTtBQUFBLGFBQUVBLElBQUksQ0FBQ3ZCLEVBQUwsS0FBWUEsRUFBZDtBQUFBLEtBQWpCLENBQWI7QUFDQUssZUFBVyxDQUFDO0FBQUNMLFFBQUUsRUFBRUEsRUFBTDtBQUFRQyxVQUFJLEVBQUVzQixJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVF0QixJQUF0QjtBQUEyQkMsV0FBSyxFQUFFcUIsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRckIsS0FBMUM7QUFBaURDLGFBQU8sRUFBRW9CLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUXBCO0FBQWxFLEtBQUQsQ0FBWDtBQUNELEdBSkQ7O0FBT0EsTUFBTXNCLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLENBQUQsRUFBTztBQUNyQlosZ0RBQUssQ0FBQ2EsSUFBTixDQUFXLGlDQUFYLEVBQThDO0FBQzVDMUIsVUFBSSxFQUFFTSxPQUFPLENBQUNOLElBRDhCO0FBRTVDQyxXQUFLLEVBQUVLLE9BQU8sQ0FBQ0wsS0FGNkI7QUFHNUNJLGNBQVEsRUFBRUMsT0FBTyxDQUFDRCxRQUgwQjtBQUk1Q0gsYUFBTyxFQUFFSSxPQUFPLENBQUNKLE9BSjJCO0FBSzVDeUIsV0FBSyxFQUFFQyxnREFBTSxDQUFDZCxHQUFQLENBQVcsYUFBWDtBQUxxQyxLQUE5QyxFQU9HQyxJQVBILENBT1EsVUFBQUMsR0FBRyxFQUFHO0FBQ1YsVUFBR0EsR0FBRyxDQUFDQyxJQUFKLENBQVNZLE9BQVosRUFBcUI7QUFDbkJ2QyxnQkFBUSxDQUFDO0FBQUN3QyxjQUFJLEVBQUUscUJBQVA7QUFBOEJDLGlCQUFPLEVBQUVmLEdBQUcsQ0FBQ0MsSUFBSixDQUFTZTtBQUFoRCxTQUFELENBQVI7QUFDQXBCLGVBQU87QUFDUEYsbUJBQVc7QUFDWixPQUpELE1BSU07QUFDRnBCLGdCQUFRLENBQUM7QUFBQ3dDLGNBQUksRUFBRSxtQkFBUDtBQUE0QkMsaUJBQU8sRUFBRWYsR0FBRyxDQUFDQyxJQUFKLENBQVNlO0FBQTlDLFNBQUQsQ0FBUjtBQUNIO0FBQ0YsS0FmSDtBQWlCQVAsS0FBQyxDQUFDUSxjQUFGO0FBQ0QsR0FuQkQ7O0FBb0JBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckJyQixnREFBSyxDQUFDc0IsR0FBTixDQUFVLGdDQUFWLEVBQTRDO0FBQzFDUixXQUFLLEVBQUVDLGdEQUFNLENBQUNkLEdBQVAsQ0FBVyxhQUFYLENBRG1DO0FBRTFDYixXQUFLLEVBQUVFLFFBQVEsQ0FBQ0YsS0FGMEI7QUFHMUNELFVBQUksRUFBRUcsUUFBUSxDQUFDSCxJQUgyQjtBQUkxQ0UsYUFBTyxFQUFFQyxRQUFRLENBQUNELE9BSndCO0FBSzFDa0MsYUFBTyxFQUFFakMsUUFBUSxDQUFDSjtBQUx3QixLQUE1QyxFQU9HZ0IsSUFQSCxDQU9RLFVBQUFDLEdBQUcsRUFBSTtBQUNYLFVBQUdBLEdBQUcsQ0FBQ0MsSUFBSixDQUFTWSxPQUFaLEVBQXFCO0FBQ25CdkMsZ0JBQVEsQ0FBQztBQUFDd0MsY0FBSSxFQUFFLHFCQUFQO0FBQThCQyxpQkFBTyxFQUFFZixHQUFHLENBQUNDLElBQUosQ0FBU2U7QUFBaEQsU0FBRCxDQUFSO0FBQ0FsQyxlQUFPLENBQUMsRUFBRCxDQUFQO0FBQ0FjLGVBQU87QUFDUixPQUpELE1BSU07QUFDSnRCLGdCQUFRLENBQUM7QUFBQ3dDLGNBQUksRUFBRSxtQkFBUDtBQUE0QkMsaUJBQU8sRUFBRWYsR0FBRyxDQUFDQyxJQUFKLENBQVNlO0FBQTlDLFNBQUQsQ0FBUjtBQUNBcEIsZUFBTztBQUNSO0FBQ0YsS0FoQkg7QUFpQkQsR0FsQkQ7O0FBbUJBLE1BQU15QixhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUN0QyxFQUFELEVBQVE7QUFDNUJ1QyxxREFBSSxDQUFDO0FBQ0RDLFdBQUssRUFBRSw2Q0FETjtBQUVEQyxhQUFPLEVBQUM7QUFDTixpQkFBTTtBQUNKQyxjQUFJLEVBQUUsSUFERjtBQUVKQyxlQUFLLEVBQUU7QUFGSCxTQURBO0FBS05DLGNBQU0sRUFBRTtBQUxGO0FBRlAsS0FBRCxDQUFKLENBU0s1QixJQVRMLENBU1UsVUFBQTJCLEtBQUssRUFBRTtBQUNiLGNBQVFBLEtBQVI7QUFDRSxhQUFLLEtBQUw7QUFDRTdCLHNEQUFLLENBQUNDLEdBQU4seURBQTJEYyxnREFBTSxDQUFDZCxHQUFQLENBQVcsYUFBWCxDQUEzRCxzQkFBZ0dmLEVBQWhHLEdBQ0NnQixJQURELENBQ00sVUFBQTZCLFFBQVEsRUFBSTtBQUNoQjFCLG1CQUFPLENBQUNDLEdBQVIsQ0FBWXlCLFFBQVo7O0FBQ0EsZ0JBQUdBLFFBQVEsQ0FBQzNCLElBQVQsQ0FBY1ksT0FBakIsRUFBMEI7QUFDeEJ2QyxzQkFBUSxDQUFDO0FBQUN3QyxvQkFBSSxFQUFFLHFCQUFQO0FBQThCQyx1QkFBTyxFQUFFYSxRQUFRLENBQUMzQixJQUFULENBQWNlO0FBQXJELGVBQUQsQ0FBUjtBQUNBcEIscUJBQU87QUFDUixhQUhELE1BR007QUFDRnRCLHNCQUFRLENBQUM7QUFBQ3dDLG9CQUFJLEVBQUUsbUJBQVA7QUFBNEJDLHVCQUFPLEVBQUVhLFFBQVEsQ0FBQzNCLElBQVQsQ0FBY2U7QUFBbkQsZUFBRCxDQUFSO0FBQ0g7QUFDRixXQVREO0FBRko7QUFhRCxLQXZCSDtBQXdCRCxHQXpCRDs7QUEyQkEsTUFBTWEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2Qi9DLFdBQU8sQ0FBQyxFQUFELENBQVA7QUFDQWMsV0FBTztBQUNSLEdBSEQ7O0FBS0EsTUFBTWtDLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNqRCxJQUFELEVBQU95QixJQUFQLEVBQWF5QixLQUFiLEVBQXVCO0FBQ3ZDLFFBQUdsRCxJQUFJLEtBQUt5QixJQUFJLENBQUN2QixFQUFqQixFQUFxQjtBQUNuQiwwQkFDRTtBQUFBLGdDQUNGO0FBQUksZUFBSyxFQUFDLEtBQVY7QUFBQSxvQkFBaUJnRCxLQUFLLEdBQUM7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERSxlQUVGO0FBQUEsaUNBQUk7QUFBTyxvQkFBUSxFQUFFLGtCQUFDdEIsQ0FBRDtBQUFBLHFCQUFPckIsV0FBVyxDQUFDO0FBQUNMLGtCQUFFLEVBQUVJLFFBQVEsQ0FBQ0osRUFBZDtBQUFpQkMsb0JBQUksRUFBRXlCLENBQUMsQ0FBQ3VCLE1BQUYsQ0FBU04sS0FBaEM7QUFBdUN6QyxxQkFBSyxFQUFFRSxRQUFRLENBQUNGLEtBQXZEO0FBQThEQyx1QkFBTyxFQUFFQyxRQUFRLENBQUNEO0FBQWhGLGVBQUQsQ0FBbEI7QUFBQSxhQUFqQjtBQUErSCxpQkFBSyxFQUFFQyxRQUFRLENBQUNIO0FBQS9JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZFLGVBR0Y7QUFBQSxpQ0FBSTtBQUFPLG9CQUFRLEVBQUUsa0JBQUN5QixDQUFEO0FBQUEscUJBQU9yQixXQUFXLENBQUM7QUFBQ0wsa0JBQUUsRUFBRUksUUFBUSxDQUFDSixFQUFkO0FBQWlCQyxvQkFBSSxFQUFFRyxRQUFRLENBQUNILElBQWhDO0FBQXNDQyxxQkFBSyxFQUFFd0IsQ0FBQyxDQUFDdUIsTUFBRixDQUFTTixLQUF0RDtBQUE2RHhDLHVCQUFPLEVBQUVDLFFBQVEsQ0FBQ0Q7QUFBL0UsZUFBRCxDQUFsQjtBQUFBLGFBQWpCO0FBQStILGlCQUFLLEVBQUVDLFFBQVEsQ0FBQ0Y7QUFBL0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEUsZUFJRjtBQUFBLGlDQUFJO0FBQVEsb0JBQVEsRUFBRSxrQkFBQ3dCLENBQUQ7QUFBQSxxQkFBT3JCLFdBQVcsQ0FBQztBQUFDTCxrQkFBRSxFQUFFSSxRQUFRLENBQUNKLEVBQWQ7QUFBaUJDLG9CQUFJLEVBQUVHLFFBQVEsQ0FBQ0gsSUFBaEM7QUFBc0NDLHFCQUFLLEVBQUVFLFFBQVEsQ0FBQ0YsS0FBdEQ7QUFBNkRDLHVCQUFPLEVBQUV1QixDQUFDLENBQUN1QixNQUFGLENBQVNOO0FBQS9FLGVBQUQsQ0FBbEI7QUFBQSxhQUFsQjtBQUE2SCxpQkFBSyxFQUFFdkMsUUFBUSxDQUFDRCxPQUE3STtBQUFBLG9DQUFzSjtBQUFRLG1CQUFLLEVBQUMsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBdEosZUFBc0w7QUFBUSxtQkFBSyxFQUFDLEdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXRMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkUsZUFLRjtBQUFBLGtDQUNJO0FBQVEscUJBQVMsRUFBQyxzQkFBbEI7QUFBeUMsbUJBQU8sRUFBRTtBQUFBLHFCQUFNZ0MsUUFBUSxFQUFkO0FBQUEsYUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFRLHFCQUFTLEVBQUMsZ0JBQWxCO0FBQW1DLG1CQUFPLEVBQUU7QUFBQSxxQkFBTVcsVUFBVSxFQUFoQjtBQUFBLGFBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRTtBQUFBLFNBQVMxQyxRQUFRLENBQUNKLEVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVlELEtBYkQsTUFjSyxvQkFDSDtBQUFBLDhCQUNBO0FBQUksYUFBSyxFQUFDLEtBQVY7QUFBQSxrQkFBaUJnRCxLQUFLLEdBQUM7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLGVBRUE7QUFBQSxrQkFBS3pCLElBQUksQ0FBQ3RCO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZBLGVBR0E7QUFBQSxrQkFBS3NCLElBQUksQ0FBQ3JCO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhBLGVBSUE7QUFBQSxrQkFBS3FCLElBQUksQ0FBQ3BCLE9BQUwsS0FBaUIsQ0FBakIsR0FBcUIsT0FBckIsR0FBK0I7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpBLGVBS0E7QUFBQSxnQ0FDSTtBQUFRLG1CQUFTLEVBQUMsc0JBQWxCO0FBQXlDLGlCQUFPLEVBQUU7QUFBQSxtQkFBTW1CLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDdkIsRUFBTixDQUFqQjtBQUFBLFdBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBUSxtQkFBUyxFQUFDLGdCQUFsQjtBQUFtQyxpQkFBTyxFQUFFO0FBQUEsbUJBQU1zQyxhQUFhLENBQUNmLElBQUksQ0FBQ3ZCLEVBQU4sQ0FBbkI7QUFBQSxXQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMQTtBQUFBLE9BQVN1QixJQUFJLENBQUN2QixFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERztBQWFOLEdBNUJEOztBQWdDQSxzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQU0sVUFBSSxFQUFDLE1BQVg7QUFBQSw2QkFDUDtBQUFTLGlCQUFNLGlCQUFmO0FBQUEsbUJBRUFOLE9BQU8sZ0JBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQUgsZ0JBQ1I7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUMscUNBQWY7QUFBQSxvQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEQSxlQUVFO0FBQVEsdUJBQVMsRUFBQyxjQUFsQjtBQUFpQyxxQkFBTyxFQUFFa0IsVUFBMUM7QUFBQSxrSkFBeUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFNUTtBQUFPLHFCQUFTLEVBQUMscUJBQWpCO0FBQUEsb0NBQ0E7QUFBQSxxQ0FDRTtBQUFBLHdDQUNFO0FBQUksdUJBQUssRUFBQyxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBRUU7QUFBSSx1QkFBSyxFQUFDLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkYsZUFHRTtBQUFJLHVCQUFLLEVBQUMsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFIRixlQUlFO0FBQUksdUJBQUssRUFBQyxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUpGLGVBS0U7QUFBSSx1QkFBSyxFQUFDLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEQSxlQVVBO0FBQUEsd0JBQ0NoQixLQUFLLENBQUNzRCxHQUFOLENBQVUsVUFBQzNCLElBQUQsRUFBTXlCLEtBQU47QUFBQSx1QkFDUEQsU0FBUyxDQUFDakQsSUFBRCxFQUFNeUIsSUFBTixFQUFXeUIsS0FBWCxDQURGO0FBQUEsZUFBVjtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5SO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIQyxlQThCQyxxRUFBQyxnREFBRDtBQUFRLGdCQUFNLEVBQUV2QyxTQUFoQjtBQUEyQixnQkFBTSxFQUFFO0FBQUEsbUJBQUlFLFdBQVcsQ0FBQ0YsU0FBRCxDQUFmO0FBQUEsV0FBbkM7QUFBaUUsY0FBSSxFQUFDLElBQXRFO0FBQUEsaUNBQ1cscUVBQUMsb0RBQUQ7QUFBQSxtQ0FDRztBQUFNLHVCQUFTLEVBQUMsWUFBaEI7QUFBNkIsc0JBQVEsRUFBRSxrQkFBQWlCLENBQUM7QUFBQSx1QkFBSUQsT0FBTyxDQUFDQyxDQUFELENBQVg7QUFBQSxlQUF4QztBQUFBLHNDQUNFO0FBQU8sd0JBQVEsRUFBRSxrQkFBQ0EsQ0FBRDtBQUFBLHlCQUFPbEIsVUFBVSxDQUFDO0FBQUNGLDRCQUFRLEVBQUVDLE9BQU8sQ0FBQ0QsUUFBbkI7QUFBNEJMLHdCQUFJLEVBQUV5QixDQUFDLENBQUN1QixNQUFGLENBQVNOLEtBQTNDO0FBQWtEekMseUJBQUssRUFBRUssT0FBTyxDQUFDTCxLQUFqRTtBQUF3RUMsMkJBQU8sRUFBRUksT0FBTyxDQUFDSjtBQUF6RixtQkFBRCxDQUFqQjtBQUFBLGlCQUFqQjtBQUF1SSxxQkFBSyxFQUFFSSxPQUFPLENBQUNOLElBQXRKO0FBQTRKLHlCQUFTLEVBQUMsa0JBQXRLO0FBQXlMLG9CQUFJLEVBQUMsTUFBOUw7QUFBcU0sMkJBQVcsRUFBQztBQUFqTjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBRUU7QUFBTyx3QkFBUSxFQUFFLGtCQUFDeUIsQ0FBRDtBQUFBLHlCQUFPbEIsVUFBVSxDQUFDO0FBQUNGLDRCQUFRLEVBQUVDLE9BQU8sQ0FBQ0QsUUFBbkI7QUFBNEJMLHdCQUFJLEVBQUVNLE9BQU8sQ0FBQ04sSUFBMUM7QUFBZ0RDLHlCQUFLLEVBQUV3QixDQUFDLENBQUN1QixNQUFGLENBQVNOLEtBQWhFO0FBQXVFeEMsMkJBQU8sRUFBRUksT0FBTyxDQUFDSjtBQUF4RixtQkFBRCxDQUFqQjtBQUFBLGlCQUFqQjtBQUFzSSxxQkFBSyxFQUFFSSxPQUFPLENBQUNMLEtBQXJKO0FBQTRKLHlCQUFTLEVBQUMsa0JBQXRLO0FBQXlMLG9CQUFJLEVBQUMsTUFBOUw7QUFBcU0sMkJBQVcsRUFBQztBQUFqTjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGLGVBR0U7QUFBUSx3QkFBUSxFQUFFLGtCQUFDd0IsQ0FBRDtBQUFBLHlCQUFPbEIsVUFBVSxDQUFDO0FBQUNGLDRCQUFRLEVBQUVDLE9BQU8sQ0FBQ0QsUUFBbkI7QUFBNEJMLHdCQUFJLEVBQUVNLE9BQU8sQ0FBQ04sSUFBMUM7QUFBZ0RDLHlCQUFLLEVBQUVLLE9BQU8sQ0FBQ0wsS0FBL0Q7QUFBc0VDLDJCQUFPLEVBQUV1QixDQUFDLENBQUN1QixNQUFGLENBQVNOO0FBQXhGLG1CQUFELENBQWpCO0FBQUEsaUJBQWxCO0FBQXFJLHFCQUFLLEVBQUVwQyxPQUFPLENBQUNMO0FBQXBKLDhIQUFtS0ssT0FBTyxDQUFDSixPQUEzSyxvSEFBOEwsa0JBQTlMLGlJQUFpTjtBQUFRLHFCQUFLLEVBQUMsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBak4sZUFBaVA7QUFBUSxxQkFBSyxFQUFDLEdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQWpQO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEYsZUFJRTtBQUFRLHlCQUFTLEVBQUMsbUJBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTlCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUE4Q0kscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTlDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWtESCxDQTNMRDs7R0FBTWIsVTtVQUNlRSx1RDs7O0tBRGZGLFU7QUE0TFM2RCwwSEFBTyxDQUFDaEUsZUFBRCxDQUFQLENBQXlCRyxVQUF6QixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL3VzZXJzLjk3NTlkYTBhZGI0NTAyZThkZTAzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hZG1pbi9IZWFkZXInXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hZG1pbi9Gb290ZXInXHJcbmltcG9ydCBzd2FsIGZyb20gXCJzd2VldGFsZXJ0XCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCBjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgTW9kYWwsIE1vZGFsSGVhZGVyLCBNb2RhbEJvZHkgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xyXG4gIHJldHVybiB7YWRtaW5SZWR1Y2VyOnN0YXRlLmFkbWluUmVkdWNlcn1cclxufVxyXG5jb25zdCBBZG1pblVzZXJzID0gKHthZG1pblJlZHVjZXJ9KSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBbbG9hZGluZyxzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtlZGl0LHNldEVkaXRdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbdXNlckRhdGUsc2V0VXNlckRhdGVdID0gdXNlU3RhdGUoe2lkOiBudWxsLG5hbWU6IG51bGwsIGVtYWlsOiBudWxsLCByb2xlX2lkOiBudWxsfSlcclxuICAgIGNvbnN0IFtuZXdVc2VyLCBzZXROZXdVc2VyXSA9IHVzZVN0YXRlKHtuYW1lOiBudWxsLCBlbWFpbDogbnVsbCwgcGFzc3dvcmQ6ICdpY3JlZGl0MTIzJywgcm9sZV9pZDogMn0pXHJcbiAgICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgICBzZXRTaG93TW9kYWwoZmFsc2UpXHJcbiAgICAgIHNldE5ld1VzZXIoe25hbWU6IG51bGwsIGVtYWlsOiBudWxsLCBwYXNzd29yZDogJ2ljcmVkaXQxMjMnLCByb2xlX2lkOiAyfSlcclxuICAgIH07XHJcbiAgICBjb25zdCBoYW5kbGVTaG93ID0gKCkgPT4gc2V0U2hvd01vZGFsKHRydWUpO1xyXG4gICAgY29uc3QgZ2V0VXNlciA9ICgpID0+IHtcclxuICAgICAgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3VzZXJzYClcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFVzZXJzKHJlcy5kYXRhKVxyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXJzKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgZ2V0VXNlcigpXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIFxyXG4gICAgY29uc3QgZWRpdEFjY291bnQgPSAoaWQpID0+IHtcclxuICAgICAgc2V0RWRpdChpZCk7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSB1c2Vycy5maWx0ZXIodXNlcj0+dXNlci5pZCA9PT0gaWQpO1xyXG4gICAgICBzZXRVc2VyRGF0ZSh7aWQ6IGlkLG5hbWU6IHVzZXJbMF0ubmFtZSxlbWFpbDogdXNlclswXS5lbWFpbCwgcm9sZV9pZDogdXNlclswXS5yb2xlX2lkfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgdXNlckFkZCA9IChlKSA9PiB7XHJcbiAgICAgIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdXNlcnMnLCB7XHJcbiAgICAgICAgbmFtZTogbmV3VXNlci5uYW1lLFxyXG4gICAgICAgIGVtYWlsOiBuZXdVc2VyLmVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkOiBuZXdVc2VyLnBhc3N3b3JkLFxyXG4gICAgICAgIHJvbGVfaWQ6IG5ld1VzZXIucm9sZV9pZCxcclxuICAgICAgICB0b2tlbjogY29va2llLmdldCgnYWRtaW5fdG9rZW4nKVxyXG4gICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlcz0+IHtcclxuICAgICAgICAgIGlmKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdBRE1fU1VDQ0VTU19NRVNTQUdFJywgcGF5bG9hZDogcmVzLmRhdGEubWVzc2FnZX0pXHJcbiAgICAgICAgICAgIGdldFVzZXIoKVxyXG4gICAgICAgICAgICBoYW5kbGVDbG9zZSgpXHJcbiAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdBRE1fRVJST1JfTUVTU0FHRScsIHBheWxvYWQ6IHJlcy5kYXRhLm1lc3NhZ2V9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgXHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2F2ZUVkaXQgPSAoKSA9PiB7XHJcbiAgICAgIGF4aW9zLnB1dCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9lZGl0Jywge1xyXG4gICAgICAgIHRva2VuOiBjb29raWUuZ2V0KCdhZG1pbl90b2tlbicpLFxyXG4gICAgICAgIGVtYWlsOiB1c2VyRGF0ZS5lbWFpbCxcclxuICAgICAgICBuYW1lOiB1c2VyRGF0ZS5uYW1lLFxyXG4gICAgICAgIHJvbGVfaWQ6IHVzZXJEYXRlLnJvbGVfaWQsXHJcbiAgICAgICAgdXNlcl9pZDogdXNlckRhdGUuaWRcclxuICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgaWYocmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0FETV9TVUNDRVNTX01FU1NBR0UnLCBwYXlsb2FkOiByZXMuZGF0YS5tZXNzYWdlfSlcclxuICAgICAgICAgICAgc2V0RWRpdCgnJylcclxuICAgICAgICAgICAgZ2V0VXNlcigpXHJcbiAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnQURNX0VSUk9SX01FU1NBR0UnLCBwYXlsb2FkOiByZXMuZGF0YS5tZXNzYWdlfSlcclxuICAgICAgICAgICAgZ2V0VXNlcigpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IGRlbGV0ZUFjY291bnQgPSAoaWQpID0+IHtcclxuICAgICAgc3dhbCh7XHJcbiAgICAgICAgICB0aXRsZTogJ9CS0Ysg0YPQstC10YDQtdC90YssINGH0YLQviDRhdC+0YLQuNGC0LUg0YPQtNCw0LvQuNGC0Ywg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPJyxcclxuICAgICAgICAgIGJ1dHRvbnM6e1xyXG4gICAgICAgICAgICBjYXRjaDp7XHJcbiAgICAgICAgICAgICAgdGV4dDogJ9CU0LAnLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiAneWVzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYW5jZWw6ICfQndC10YInXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbih2YWx1ZT0+e1xyXG4gICAgICAgICAgc3dpdGNoICh2YWx1ZSl7XHJcbiAgICAgICAgICAgIGNhc2UgJ3llcyc6XHJcbiAgICAgICAgICAgICAgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2RlbGV0ZUFjY291bnQ/dG9rZW49JHtjb29raWUuZ2V0KCdhZG1pbl90b2tlbicpfSZ1c2VyX2lkPSR7aWR9YClcclxuICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0FETV9TVUNDRVNTX01FU1NBR0UnLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhLm1lc3NhZ2V9KVxyXG4gICAgICAgICAgICAgICAgICBnZXRVc2VyKClcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0FETV9FUlJPUl9NRVNTQUdFJywgcGF5bG9hZDogcmVzcG9uc2UuZGF0YS5tZXNzYWdlfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2FuY2VsRWRpdCA9ICgpID0+IHtcclxuICAgICAgc2V0RWRpdCgnJyk7XHJcbiAgICAgIGdldFVzZXIoKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVzZXJUYWJsZSA9IChlZGl0LCB1c2VyLCBpbmRleCkgPT4ge1xyXG4gICAgICBpZihlZGl0ID09PSB1c2VyLmlkKSB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgPHRyIGtleT17dXNlckRhdGUuaWR9PlxyXG4gICAgICAgIDx0aCBzY29wZT1cInJvd1wiPntpbmRleCsxfTwvdGg+XHJcbiAgICAgICAgPHRkPjxpbnB1dCBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJEYXRlKHtpZDogdXNlckRhdGUuaWQsbmFtZTogZS50YXJnZXQudmFsdWUsIGVtYWlsOiB1c2VyRGF0ZS5lbWFpbCwgcm9sZV9pZDogdXNlckRhdGUucm9sZV9pZH0pfSB2YWx1ZT17dXNlckRhdGUubmFtZX0vPjwvdGQ+XHJcbiAgICAgICAgPHRkPjxpbnB1dCBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJEYXRlKHtpZDogdXNlckRhdGUuaWQsbmFtZTogdXNlckRhdGUubmFtZSwgZW1haWw6IGUudGFyZ2V0LnZhbHVlLCByb2xlX2lkOiB1c2VyRGF0ZS5yb2xlX2lkfSl9ICB2YWx1ZT17dXNlckRhdGUuZW1haWx9Lz48L3RkPlxyXG4gICAgICAgIDx0ZD48c2VsZWN0IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlckRhdGUoe2lkOiB1c2VyRGF0ZS5pZCxuYW1lOiB1c2VyRGF0ZS5uYW1lLCBlbWFpbDogdXNlckRhdGUuZW1haWwsIHJvbGVfaWQ6IGUudGFyZ2V0LnZhbHVlfSl9IHZhbHVlPXt1c2VyRGF0ZS5yb2xlX2lkfT48b3B0aW9uIHZhbHVlPScxJz5BZG1pbjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9JzInPk1vZGVyYXRvcjwvb3B0aW9uPjwvc2VsZWN0PjwvdGQ+XHJcbiAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1zdWNjZXNzIG1yLTInIG9uQ2xpY2s9eygpID0+IHNhdmVFZGl0KCl9PlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tZGFuZ2VyJyBvbkNsaWNrPXsoKSA9PiBjYW5jZWxFZGl0KCl9PkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgPC90cj4gIFxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHJldHVybihcclxuICAgICAgICA8dHIga2V5PXt1c2VyLmlkfT5cclxuICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj57aW5kZXgrMX08L3RoPlxyXG4gICAgICAgIDx0ZD57dXNlci5uYW1lfTwvdGQ+XHJcbiAgICAgICAgPHRkPnt1c2VyLmVtYWlsfTwvdGQ+XHJcbiAgICAgICAgPHRkPnt1c2VyLnJvbGVfaWQgPT09IDEgPyAnQWRtaW4nICA6J01vZGVyYXRvcid9PC90ZD5cclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLXN1Y2Nlc3MgbXItMicgb25DbGljaz17KCkgPT4gZWRpdEFjY291bnQodXNlci5pZCl9PkVkaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tZGFuZ2VyJyBvbkNsaWNrPXsoKSA9PiBkZWxldGVBY2NvdW50KHVzZXIuaWQpfT5EZWxldGU8L2J1dHRvbj5cclxuICAgICAgICA8L3RkPlxyXG4gICAgICA8L3RyPlxyXG4gICAgICApXHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxtYWluIHJvbGU9XCJtYWluXCI+XHJcbiAgICAgPHNlY3Rpb24gY2xhc3M9XCJwYW5lbCBpbXBvcnRhbnRcIj5cclxuICAgICAgICAgXHJcbiAgICB7bG9hZGluZyA/IDxkaXY+0JfQsNCz0YPQt9C60LAuLi48L2Rpdj4gOlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggbWItMyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2Vlbic+XHJcbiAgICAgIDxoMj5Vc2VyczwvaDI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4taW5mbycgb25DbGljaz17aGFuZGxlU2hvd30+0J3QvtCy0YvQuSDQv9C+0LvRjNC30L7QstCw0YLQtdC70YwgPGI+KzwvYj48L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXN0cmlwZWRcIj5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+0JjQvNGPPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlVzZXJuYW1lPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPtCg0L7Qu9GMPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT0nY29sJz7QlNC10LnRgdGC0LLQuNC1PC90aD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHt1c2Vycy5tYXAoKHVzZXIsaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIHVzZXJUYWJsZShlZGl0LHVzZXIsaW5kZXgpXHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIH1cclxuICAgICAgPE1vZGFsICBpc09wZW49e3Nob3dNb2RhbH0gdG9nZ2xlPXsoKT0+aGFuZGxlQ2xvc2Uoc2hvd01vZGFsKX0gICBzaXplPVwibWRcIj5cclxuICAgICAgICAgICAgICAgICA8TW9kYWxCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nZm9ybS1ncm91cCcgb25TdWJtaXQ9e2UgPT4gdXNlckFkZChlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdVc2VyKHtwYXNzd29yZDogbmV3VXNlci5wYXNzd29yZCxuYW1lOiBlLnRhcmdldC52YWx1ZSwgZW1haWw6IG5ld1VzZXIuZW1haWwsIHJvbGVfaWQ6IG5ld1VzZXIucm9sZV9pZH0pfSB2YWx1ZT17bmV3VXNlci5uYW1lfSBjbGFzc05hbWU9J2lucHV0LWdyb3VwIG1iLTInIHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSfQmNC80Y8nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdVc2VyKHtwYXNzd29yZDogbmV3VXNlci5wYXNzd29yZCxuYW1lOiBuZXdVc2VyLm5hbWUsIGVtYWlsOiBlLnRhcmdldC52YWx1ZSwgcm9sZV9pZDogbmV3VXNlci5yb2xlX2lkfSl9IHZhbHVlPXtuZXdVc2VyLmVtYWlsfSBjbGFzc05hbWU9J2lucHV0LWdyb3VwIG10LTInIHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdVc2VybmFtZScgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdVc2VyKHtwYXNzd29yZDogbmV3VXNlci5wYXNzd29yZCxuYW1lOiBuZXdVc2VyLm5hbWUsIGVtYWlsOiBuZXdVc2VyLmVtYWlsLCByb2xlX2lkOiBlLnRhcmdldC52YWx1ZX0pfSB2YWx1ZT17bmV3VXNlci5lbWFpbH0gIHZhbHVlPXtuZXdVc2VyLnJvbGVfaWR9IGNsYXNzTmFtZT0naW5wdXQtZ3JvdXAgbXQtMic+PG9wdGlvbiB2YWx1ZT0nMSc+QWRtaW48L29wdGlvbj48b3B0aW9uIHZhbHVlPScyJz5Nb2RlcmF0b3I8L29wdGlvbj48L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWluZm8gbXQtMic+0JTQvtCx0LDQstC40YLRjDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICA8L01vZGFsQm9keT5cclxuXHRcdFx0PC9Nb2RhbD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApICAgXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEFkbWluVXNlcnMpIl0sInNvdXJjZVJvb3QiOiIifQ==