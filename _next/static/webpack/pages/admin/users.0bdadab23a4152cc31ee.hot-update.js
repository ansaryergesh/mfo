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
          lineNumber: 120,
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
            lineNumber: 121,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
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
            lineNumber: 122,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
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
              lineNumber: 123,
              columnNumber: 163
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
              value: "2",
              children: "Moderator"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 195
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
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
            lineNumber: 125,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
            className: "btn btn-danger",
            onClick: function onClick() {
              return cancelEdit();
            },
            children: "Cancel"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 9
        }, _this)]
      }, userDate.id, true, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 11
      }, _this);
    } else return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("tr", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("th", {
        scope: "row",
        children: index + 1
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("td", {
        children: user.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("td", {
        children: user.email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("td", {
        children: user.role_id === 1 ? 'Admin' : 'Moderator'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("td", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          className: "btn btn-success mr-2",
          disabled: adminReducer.user.role_id === 2 ? false : true,
          onClick: function onClick() {
            return editAccount(user.id);
          },
          children: "Edit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          className: "btn btn-danger",
          disabled: adminReducer.user.role_id === 2 ? false : true,
          onClick: function onClick() {
            return deleteAccount(user.id);
          },
          children: "Delete"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }, _this)]
    }, user.id, true, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_admin_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("main", {
      role: "main",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
        "class": "panel important",
        children: [loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          children: "\u0417\u0430\u0433\u0443\u0437\u043A\u0430..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 16
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "d-flex mb-3 justify-content-between",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
              children: "Users"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 7
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
              className: "btn btn-info",
              onClick: handleShow,
              disabled: adminReducer.user.role_id === 1 ? false : true,
              children: ["\u041D\u043E\u0432\u044B\u0439 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("b", {
                children: "+"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 138
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 9
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 156,
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
                  lineNumber: 164,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("th", {
                  scope: "col",
                  children: "\u0418\u043C\u044F"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 165,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("th", {
                  scope: "col",
                  children: "Username"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 166,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("th", {
                  scope: "col",
                  children: "\u0420\u043E\u043B\u044C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 167,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("th", {
                  scope: "col",
                  children: "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 168,
                  columnNumber: 17
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("tbody", {
              children: users.map(function (user, index) {
                return userTable(edit, user, index);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 155,
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
                lineNumber: 185,
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
                lineNumber: 186,
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
                lineNumber: 187,
                columnNumber: 232
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
                value: "2",
                children: "Moderator"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 264
              }, _this)]), _jsxDEV2), void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 23
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
                className: "btn btn-info mt-2",
                disabled: adminReducer.user.role_id === 1 ? false : true,
                children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 23
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 21
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 18
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 7
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 6
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_admin_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 149,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vdXNlcnMuanMiXSwibmFtZXMiOlsibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJhZG1pblJlZHVjZXIiLCJBZG1pblVzZXJzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VycyIsInNldFVzZXJzIiwiZWRpdCIsInNldEVkaXQiLCJpZCIsIm5hbWUiLCJlbWFpbCIsInJvbGVfaWQiLCJ1c2VyRGF0ZSIsInNldFVzZXJEYXRlIiwicGFzc3dvcmQiLCJuZXdVc2VyIiwic2V0TmV3VXNlciIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImhhbmRsZUNsb3NlIiwiaGFuZGxlU2hvdyIsImdldFVzZXIiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwidXNlRWZmZWN0IiwiZWRpdEFjY291bnQiLCJ1c2VyIiwiZmlsdGVyIiwidXNlckFkZCIsImUiLCJwb3N0IiwidG9rZW4iLCJjb29raWUiLCJzdWNjZXNzIiwidHlwZSIsInBheWxvYWQiLCJtZXNzYWdlIiwicHJldmVudERlZmF1bHQiLCJzYXZlRWRpdCIsInB1dCIsInVzZXJfaWQiLCJkZWxldGVBY2NvdW50Iiwic3dhbCIsInRpdGxlIiwiYnV0dG9ucyIsInRleHQiLCJ2YWx1ZSIsImNhbmNlbCIsInJlc3BvbnNlIiwiY2FuY2VsRWRpdCIsInVzZXJUYWJsZSIsImluZGV4IiwidGFyZ2V0IiwibWFwIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxlQUFULENBQXlCQyxLQUF6QixFQUFnQztBQUM5QixTQUFPO0FBQUNDLGdCQUFZLEVBQUNELEtBQUssQ0FBQ0M7QUFBcEIsR0FBUDtBQUNEOztBQUNELElBQU1DLFVBQVUs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S0FBaEMsR0FBd0MsSUFBeEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBOUJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURPO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQThDSSxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBOUNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBa0RILENBekxEOztHQUFNYixVO1VBQ2VFLHVEOzs7S0FEZkYsVTtBQTBMUzJELDBIQUFPLENBQUM5RCxlQUFELENBQVAsQ0FBeUJHLFVBQXpCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vdXNlcnMuMGJkYWRhYjIzYTQxNTJjYzMxZWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2FkbWluL0hlYWRlcidcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2FkbWluL0Zvb3RlcidcclxuaW1wb3J0IHN3YWwgZnJvbSBcInN3ZWV0YWxlcnRcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIGNvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBNb2RhbCwgTW9kYWxIZWFkZXIsIE1vZGFsQm9keSB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XHJcbiAgcmV0dXJuIHthZG1pblJlZHVjZXI6c3RhdGUuYWRtaW5SZWR1Y2VyfVxyXG59XHJcbmNvbnN0IEFkbWluVXNlcnMgPSAoe2FkbWluUmVkdWNlcn0pID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2VkaXQsc2V0RWRpdF0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFt1c2VyRGF0ZSxzZXRVc2VyRGF0ZV0gPSB1c2VTdGF0ZSh7aWQ6IG51bGwsbmFtZTogbnVsbCwgZW1haWw6IG51bGwsIHJvbGVfaWQ6IG51bGx9KVxyXG4gICAgY29uc3QgW25ld1VzZXIsIHNldE5ld1VzZXJdID0gdXNlU3RhdGUoe25hbWU6IG51bGwsIGVtYWlsOiBudWxsLCBwYXNzd29yZDogJ2ljcmVkaXQxMjMnLCByb2xlX2lkOiAyfSlcclxuICAgIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgIHNldFNob3dNb2RhbChmYWxzZSlcclxuICAgICAgc2V0TmV3VXNlcih7bmFtZTogbnVsbCwgZW1haWw6IG51bGwsIHBhc3N3b3JkOiAnaWNyZWRpdDEyMycsIHJvbGVfaWQ6IDJ9KVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGhhbmRsZVNob3cgPSAoKSA9PiBzZXRTaG93TW9kYWwodHJ1ZSk7XHJcbiAgICBjb25zdCBnZXRVc2VyID0gKCkgPT4ge1xyXG4gICAgICBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdXNlcnNgKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0VXNlcnMocmVzLmRhdGEpXHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgZ2V0VXNlcigpXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIFxyXG4gICAgY29uc3QgZWRpdEFjY291bnQgPSAoaWQpID0+IHtcclxuICAgICAgc2V0RWRpdChpZCk7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSB1c2Vycy5maWx0ZXIodXNlcj0+dXNlci5pZCA9PT0gaWQpO1xyXG4gICAgICBzZXRVc2VyRGF0ZSh7aWQ6IGlkLG5hbWU6IHVzZXJbMF0ubmFtZSxlbWFpbDogdXNlclswXS5lbWFpbCwgcm9sZV9pZDogdXNlclswXS5yb2xlX2lkfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgdXNlckFkZCA9IChlKSA9PiB7XHJcbiAgICAgIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdXNlcnMnLCB7XHJcbiAgICAgICAgbmFtZTogbmV3VXNlci5uYW1lLFxyXG4gICAgICAgIGVtYWlsOiBuZXdVc2VyLmVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkOiBuZXdVc2VyLnBhc3N3b3JkLFxyXG4gICAgICAgIHJvbGVfaWQ6IG5ld1VzZXIucm9sZV9pZCxcclxuICAgICAgICB0b2tlbjogY29va2llLmdldCgnYWRtaW5fdG9rZW4nKVxyXG4gICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlcz0+IHtcclxuICAgICAgICAgIGlmKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdBRE1fU1VDQ0VTU19NRVNTQUdFJywgcGF5bG9hZDogcmVzLmRhdGEubWVzc2FnZX0pXHJcbiAgICAgICAgICAgIGdldFVzZXIoKVxyXG4gICAgICAgICAgICBoYW5kbGVDbG9zZSgpXHJcbiAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdBRE1fRVJST1JfTUVTU0FHRScsIHBheWxvYWQ6IHJlcy5kYXRhLm1lc3NhZ2V9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgXHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2F2ZUVkaXQgPSAoKSA9PiB7XHJcbiAgICAgIGF4aW9zLnB1dCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9lZGl0Jywge1xyXG4gICAgICAgIHRva2VuOiBjb29raWUuZ2V0KCdhZG1pbl90b2tlbicpLFxyXG4gICAgICAgIGVtYWlsOiB1c2VyRGF0ZS5lbWFpbCxcclxuICAgICAgICBuYW1lOiB1c2VyRGF0ZS5uYW1lLFxyXG4gICAgICAgIHJvbGVfaWQ6IHVzZXJEYXRlLnJvbGVfaWQsXHJcbiAgICAgICAgdXNlcl9pZDogdXNlckRhdGUuaWRcclxuICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgaWYocmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0FETV9TVUNDRVNTX01FU1NBR0UnLCBwYXlsb2FkOiByZXMuZGF0YS5tZXNzYWdlfSlcclxuICAgICAgICAgICAgc2V0RWRpdCgnJylcclxuICAgICAgICAgICAgZ2V0VXNlcigpXHJcbiAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnQURNX0VSUk9SX01FU1NBR0UnLCBwYXlsb2FkOiByZXMuZGF0YS5tZXNzYWdlfSlcclxuICAgICAgICAgICAgZ2V0VXNlcigpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IGRlbGV0ZUFjY291bnQgPSAoaWQpID0+IHtcclxuICAgICAgc3dhbCh7XHJcbiAgICAgICAgICB0aXRsZTogJ9CS0Ysg0YPQstC10YDQtdC90YssINGH0YLQviDRhdC+0YLQuNGC0LUg0YPQtNCw0LvQuNGC0Ywg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPJyxcclxuICAgICAgICAgIGJ1dHRvbnM6e1xyXG4gICAgICAgICAgICBjYXRjaDp7XHJcbiAgICAgICAgICAgICAgdGV4dDogJ9CU0LAnLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiAneWVzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYW5jZWw6ICfQndC10YInXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbih2YWx1ZT0+e1xyXG4gICAgICAgICAgc3dpdGNoICh2YWx1ZSl7XHJcbiAgICAgICAgICAgIGNhc2UgJ3llcyc6XHJcbiAgICAgICAgICAgICAgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2RlbGV0ZUFjY291bnQ/dG9rZW49JHtjb29raWUuZ2V0KCdhZG1pbl90b2tlbicpfSZ1c2VyX2lkPSR7aWR9YClcclxuICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdBRE1fU1VDQ0VTU19NRVNTQUdFJywgcGF5bG9hZDogcmVzcG9uc2UuZGF0YS5tZXNzYWdlfSlcclxuICAgICAgICAgICAgICAgICAgZ2V0VXNlcigpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdBRE1fRVJST1JfTUVTU0FHRScsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEubWVzc2FnZX0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNhbmNlbEVkaXQgPSAoKSA9PiB7XHJcbiAgICAgIHNldEVkaXQoJycpO1xyXG4gICAgICBnZXRVc2VyKClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1c2VyVGFibGUgPSAoZWRpdCwgdXNlciwgaW5kZXgpID0+IHtcclxuICAgICAgaWYoZWRpdCA9PT0gdXNlci5pZCkge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgIDx0ciBrZXk9e3VzZXJEYXRlLmlkfT5cclxuICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj57aW5kZXgrMX08L3RoPlxyXG4gICAgICAgIDx0ZD48aW5wdXQgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VyRGF0ZSh7aWQ6IHVzZXJEYXRlLmlkLG5hbWU6IGUudGFyZ2V0LnZhbHVlLCBlbWFpbDogdXNlckRhdGUuZW1haWwsIHJvbGVfaWQ6IHVzZXJEYXRlLnJvbGVfaWR9KX0gdmFsdWU9e3VzZXJEYXRlLm5hbWV9Lz48L3RkPlxyXG4gICAgICAgIDx0ZD48aW5wdXQgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VyRGF0ZSh7aWQ6IHVzZXJEYXRlLmlkLG5hbWU6IHVzZXJEYXRlLm5hbWUsIGVtYWlsOiBlLnRhcmdldC52YWx1ZSwgcm9sZV9pZDogdXNlckRhdGUucm9sZV9pZH0pfSAgdmFsdWU9e3VzZXJEYXRlLmVtYWlsfS8+PC90ZD5cclxuICAgICAgICA8dGQ+PHNlbGVjdCBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJEYXRlKHtpZDogdXNlckRhdGUuaWQsbmFtZTogdXNlckRhdGUubmFtZSwgZW1haWw6IHVzZXJEYXRlLmVtYWlsLCByb2xlX2lkOiBlLnRhcmdldC52YWx1ZX0pfSB2YWx1ZT17dXNlckRhdGUucm9sZV9pZH0+PG9wdGlvbiB2YWx1ZT0nMSc+QWRtaW48L29wdGlvbj48b3B0aW9uIHZhbHVlPScyJz5Nb2RlcmF0b3I8L29wdGlvbj48L3NlbGVjdD48L3RkPlxyXG4gICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tc3VjY2VzcyBtci0yJyBvbkNsaWNrPXsoKSA9PiBzYXZlRWRpdCgpfT5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWRhbmdlcicgb25DbGljaz17KCkgPT4gY2FuY2VsRWRpdCgpfT5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgICA8L3RkPlxyXG4gICAgIDwvdHI+ICBcclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSByZXR1cm4oXHJcbiAgICAgICAgPHRyIGtleT17dXNlci5pZH0+XHJcbiAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+e2luZGV4KzF9PC90aD5cclxuICAgICAgICA8dGQ+e3VzZXIubmFtZX08L3RkPlxyXG4gICAgICAgIDx0ZD57dXNlci5lbWFpbH08L3RkPlxyXG4gICAgICAgIDx0ZD57dXNlci5yb2xlX2lkID09PSAxID8gJ0FkbWluJyAgOidNb2RlcmF0b3InfTwvdGQ+XHJcbiAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1zdWNjZXNzIG1yLTInIGRpc2FibGVkPXthZG1pblJlZHVjZXIudXNlci5yb2xlX2lkPT09MiA/IGZhbHNlIDogdHJ1ZX0gb25DbGljaz17KCkgPT4gZWRpdEFjY291bnQodXNlci5pZCl9PkVkaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tZGFuZ2VyJyBkaXNhYmxlZD17YWRtaW5SZWR1Y2VyLnVzZXIucm9sZV9pZD09PTIgPyBmYWxzZSA6IHRydWV9IG9uQ2xpY2s9eygpID0+IGRlbGV0ZUFjY291bnQodXNlci5pZCl9PkRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICAgIClcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgPG1haW4gcm9sZT1cIm1haW5cIj5cclxuICAgICA8c2VjdGlvbiBjbGFzcz1cInBhbmVsIGltcG9ydGFudFwiPlxyXG4gICAgICAgICBcclxuICAgIHtsb2FkaW5nID8gPGRpdj7Ql9Cw0LPRg9C30LrQsC4uLjwvZGl2PiA6XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBtYi0zIGp1c3RpZnktY29udGVudC1iZXR3ZWVuJz5cclxuICAgICAgPGgyPlVzZXJzPC9oMj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1pbmZvJyBvbkNsaWNrPXtoYW5kbGVTaG93fSBkaXNhYmxlZD17YWRtaW5SZWR1Y2VyLnVzZXIucm9sZV9pZD09PTEgPyBmYWxzZSA6IHRydWV9PtCd0L7QstGL0Lkg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMIDxiPis8L2I+PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkXCI+XHJcbiAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj4jPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPtCY0LzRjzwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Vc2VybmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj7QoNC+0LvRjDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9J2NvbCc+0JTQtdC50YHRgtCy0LjQtTwvdGg+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICB7dXNlcnMubWFwKCh1c2VyLGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICB1c2VyVGFibGUoZWRpdCx1c2VyLGluZGV4KVxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICB9XHJcbiAgICAgIDxNb2RhbCAgaXNPcGVuPXtzaG93TW9kYWx9IHRvZ2dsZT17KCk9PmhhbmRsZUNsb3NlKHNob3dNb2RhbCl9ICAgc2l6ZT1cIm1kXCI+XHJcbiAgICAgICAgICAgICAgICAgPE1vZGFsQm9keT5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnIG9uU3VibWl0PXtlID0+IHVzZXJBZGQoZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3VXNlcih7cGFzc3dvcmQ6IG5ld1VzZXIucGFzc3dvcmQsbmFtZTogZS50YXJnZXQudmFsdWUsIGVtYWlsOiBuZXdVc2VyLmVtYWlsLCByb2xlX2lkOiBuZXdVc2VyLnJvbGVfaWR9KX0gdmFsdWU9e25ld1VzZXIubmFtZX0gY2xhc3NOYW1lPSdpbnB1dC1ncm91cCBtYi0yJyB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0n0JjQvNGPJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3VXNlcih7cGFzc3dvcmQ6IG5ld1VzZXIucGFzc3dvcmQsbmFtZTogbmV3VXNlci5uYW1lLCBlbWFpbDogZS50YXJnZXQudmFsdWUsIHJvbGVfaWQ6IG5ld1VzZXIucm9sZV9pZH0pfSB2YWx1ZT17bmV3VXNlci5lbWFpbH0gY2xhc3NOYW1lPSdpbnB1dC1ncm91cCBtdC0yJyB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nVXNlcm5hbWUnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3VXNlcih7cGFzc3dvcmQ6IG5ld1VzZXIucGFzc3dvcmQsbmFtZTogbmV3VXNlci5uYW1lLCBlbWFpbDogbmV3VXNlci5lbWFpbCwgcm9sZV9pZDogZS50YXJnZXQudmFsdWV9KX0gdmFsdWU9e25ld1VzZXIuZW1haWx9ICB2YWx1ZT17bmV3VXNlci5yb2xlX2lkfSBjbGFzc05hbWU9J2lucHV0LWdyb3VwIG10LTInPjxvcHRpb24gdmFsdWU9JzEnPkFkbWluPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT0nMic+TW9kZXJhdG9yPC9vcHRpb24+PC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1pbmZvIG10LTInIGRpc2FibGVkPXthZG1pblJlZHVjZXIudXNlci5yb2xlX2lkPT09MSA/IGZhbHNlIDogdHJ1ZX0+0JTQvtCx0LDQstC40YLRjDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICA8L01vZGFsQm9keT5cclxuXHRcdFx0PC9Nb2RhbD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApICAgXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEFkbWluVXNlcnMpIl0sInNvdXJjZVJvb3QiOiIifQ==