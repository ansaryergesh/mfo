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
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              children: adminReducer.user.role_id
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 7
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
              className: "btn btn-info",
              onClick: handleShow,
              disabled: adminReducer.user.role_id === 1 ? false : true,
              children: ["\u041D\u043E\u0432\u044B\u0439 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("b", {
                children: "+"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 138
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 159,
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
                  lineNumber: 165,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("th", {
                  scope: "col",
                  children: "\u0418\u043C\u044F"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 166,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("th", {
                  scope: "col",
                  children: "Username"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 167,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("th", {
                  scope: "col",
                  children: "\u0420\u043E\u043B\u044C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 168,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("th", {
                  scope: "col",
                  children: "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 169,
                  columnNumber: 17
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("tbody", {
              children: users.map(function (user, index) {
                return userTable(edit, user, index);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 162,
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
                lineNumber: 186,
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
                lineNumber: 187,
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
                lineNumber: 188,
                columnNumber: 232
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
                value: "2",
                children: "Moderator"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 264
              }, _this)]), _jsxDEV2), void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 23
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
                className: "btn btn-info mt-2",
                children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 189,
                columnNumber: 23
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 21
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 18
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 183,
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
      lineNumber: 196,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vdXNlcnMuanMiXSwibmFtZXMiOlsibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJhZG1pblJlZHVjZXIiLCJBZG1pblVzZXJzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VycyIsInNldFVzZXJzIiwiZWRpdCIsInNldEVkaXQiLCJpZCIsIm5hbWUiLCJlbWFpbCIsInJvbGVfaWQiLCJ1c2VyRGF0ZSIsInNldFVzZXJEYXRlIiwicGFzc3dvcmQiLCJuZXdVc2VyIiwic2V0TmV3VXNlciIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImhhbmRsZUNsb3NlIiwiaGFuZGxlU2hvdyIsImdldFVzZXIiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwidXNlRWZmZWN0IiwiZWRpdEFjY291bnQiLCJ1c2VyIiwiZmlsdGVyIiwidXNlckFkZCIsImUiLCJwb3N0IiwidG9rZW4iLCJjb29raWUiLCJzdWNjZXNzIiwidHlwZSIsInBheWxvYWQiLCJtZXNzYWdlIiwicHJldmVudERlZmF1bHQiLCJzYXZlRWRpdCIsInB1dCIsInVzZXJfaWQiLCJkZWxldGVBY2NvdW50Iiwic3dhbCIsInRpdGxlIiwiYnV0dG9ucyIsInRleHQiLCJ2YWx1ZSIsImNhbmNlbCIsInJlc3BvbnNlIiwiY2FuY2VsRWRpdCIsInVzZXJUYWJsZSIsImluZGV4IiwidGFyZ2V0IiwibWFwIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxlQUFULENBQXlCQyxLQUF6QixFQUFnQztBQUM5QixTQUFPO0FBQUNDLGdCQUFZLEVBQUNELEtBQUssQ0FBQ0M7QUFBcEIsR0FBUDtBQUNEOztBQUNELElBQU1DLFVBQVUs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QUFBLGFBRkosZUErQ0kscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQS9DSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW1ESCxDQTFMRDs7R0FBTWIsVTtVQUNlRSx1RDs7O0tBRGZGLFU7QUEyTFMyRCwwSEFBTyxDQUFDOUQsZUFBRCxDQUFQLENBQXlCRyxVQUF6QixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL3VzZXJzLjU2YmQ3MGUwMTg0NzNiNDdkOTRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hZG1pbi9IZWFkZXInXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hZG1pbi9Gb290ZXInXHJcbmltcG9ydCBzd2FsIGZyb20gXCJzd2VldGFsZXJ0XCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCBjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgTW9kYWwsIE1vZGFsSGVhZGVyLCBNb2RhbEJvZHkgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xyXG4gIHJldHVybiB7YWRtaW5SZWR1Y2VyOnN0YXRlLmFkbWluUmVkdWNlcn1cclxufVxyXG5jb25zdCBBZG1pblVzZXJzID0gKHthZG1pblJlZHVjZXJ9KSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBbbG9hZGluZyxzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtlZGl0LHNldEVkaXRdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbdXNlckRhdGUsc2V0VXNlckRhdGVdID0gdXNlU3RhdGUoe2lkOiBudWxsLG5hbWU6IG51bGwsIGVtYWlsOiBudWxsLCByb2xlX2lkOiBudWxsfSlcclxuICAgIGNvbnN0IFtuZXdVc2VyLCBzZXROZXdVc2VyXSA9IHVzZVN0YXRlKHtuYW1lOiBudWxsLCBlbWFpbDogbnVsbCwgcGFzc3dvcmQ6ICdpY3JlZGl0MTIzJywgcm9sZV9pZDogMn0pXHJcbiAgICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgICBzZXRTaG93TW9kYWwoZmFsc2UpXHJcbiAgICAgIHNldE5ld1VzZXIoe25hbWU6IG51bGwsIGVtYWlsOiBudWxsLCBwYXNzd29yZDogJ2ljcmVkaXQxMjMnLCByb2xlX2lkOiAyfSlcclxuICAgIH07XHJcbiAgICBjb25zdCBoYW5kbGVTaG93ID0gKCkgPT4gc2V0U2hvd01vZGFsKHRydWUpO1xyXG4gICAgY29uc3QgZ2V0VXNlciA9ICgpID0+IHtcclxuICAgICAgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3VzZXJzYClcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFVzZXJzKHJlcy5kYXRhKVxyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGdldFVzZXIoKVxyXG4gICAgfSxbXSlcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IGVkaXRBY2NvdW50ID0gKGlkKSA9PiB7XHJcbiAgICAgIHNldEVkaXQoaWQpO1xyXG4gICAgICBjb25zdCB1c2VyID0gdXNlcnMuZmlsdGVyKHVzZXI9PnVzZXIuaWQgPT09IGlkKTtcclxuICAgICAgc2V0VXNlckRhdGUoe2lkOiBpZCxuYW1lOiB1c2VyWzBdLm5hbWUsZW1haWw6IHVzZXJbMF0uZW1haWwsIHJvbGVfaWQ6IHVzZXJbMF0ucm9sZV9pZH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IHVzZXJBZGQgPSAoZSkgPT4ge1xyXG4gICAgICBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3VzZXJzJywge1xyXG4gICAgICAgIG5hbWU6IG5ld1VzZXIubmFtZSxcclxuICAgICAgICBlbWFpbDogbmV3VXNlci5lbWFpbCxcclxuICAgICAgICBwYXNzd29yZDogbmV3VXNlci5wYXNzd29yZCxcclxuICAgICAgICByb2xlX2lkOiBuZXdVc2VyLnJvbGVfaWQsXHJcbiAgICAgICAgdG9rZW46IGNvb2tpZS5nZXQoJ2FkbWluX3Rva2VuJylcclxuICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgICBpZihyZXMuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnQURNX1NVQ0NFU1NfTUVTU0FHRScsIHBheWxvYWQ6IHJlcy5kYXRhLm1lc3NhZ2V9KVxyXG4gICAgICAgICAgICBnZXRVc2VyKClcclxuICAgICAgICAgICAgaGFuZGxlQ2xvc2UoKVxyXG4gICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnQURNX0VSUk9SX01FU1NBR0UnLCBwYXlsb2FkOiByZXMuZGF0YS5tZXNzYWdlfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgIFxyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIH1cclxuICAgIGNvbnN0IHNhdmVFZGl0ID0gKCkgPT4ge1xyXG4gICAgICBheGlvcy5wdXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvZWRpdCcsIHtcclxuICAgICAgICB0b2tlbjogY29va2llLmdldCgnYWRtaW5fdG9rZW4nKSxcclxuICAgICAgICBlbWFpbDogdXNlckRhdGUuZW1haWwsXHJcbiAgICAgICAgbmFtZTogdXNlckRhdGUubmFtZSxcclxuICAgICAgICByb2xlX2lkOiB1c2VyRGF0ZS5yb2xlX2lkLFxyXG4gICAgICAgIHVzZXJfaWQ6IHVzZXJEYXRlLmlkXHJcbiAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIGlmKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdBRE1fU1VDQ0VTU19NRVNTQUdFJywgcGF5bG9hZDogcmVzLmRhdGEubWVzc2FnZX0pXHJcbiAgICAgICAgICAgIHNldEVkaXQoJycpXHJcbiAgICAgICAgICAgIGdldFVzZXIoKVxyXG4gICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0FETV9FUlJPUl9NRVNTQUdFJywgcGF5bG9hZDogcmVzLmRhdGEubWVzc2FnZX0pXHJcbiAgICAgICAgICAgIGdldFVzZXIoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBkZWxldGVBY2NvdW50ID0gKGlkKSA9PiB7XHJcbiAgICAgIHN3YWwoe1xyXG4gICAgICAgICAgdGl0bGU6ICfQktGLINGD0LLQtdGA0LXQvdGLLCDRh9GC0L4g0YXQvtGC0LjRgtC1INGD0LTQsNC70LjRgtGMINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjycsXHJcbiAgICAgICAgICBidXR0b25zOntcclxuICAgICAgICAgICAgY2F0Y2g6e1xyXG4gICAgICAgICAgICAgIHRleHQ6ICfQlNCwJyxcclxuICAgICAgICAgICAgICB2YWx1ZTogJ3llcydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FuY2VsOiAn0J3QtdGCJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4odmFsdWU9PntcclxuICAgICAgICAgIHN3aXRjaCAodmFsdWUpe1xyXG4gICAgICAgICAgICBjYXNlICd5ZXMnOlxyXG4gICAgICAgICAgICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9kZWxldGVBY2NvdW50P3Rva2VuPSR7Y29va2llLmdldCgnYWRtaW5fdG9rZW4nKX0mdXNlcl9pZD0ke2lkfWApXHJcbiAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnQURNX1NVQ0NFU1NfTUVTU0FHRScsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEubWVzc2FnZX0pXHJcbiAgICAgICAgICAgICAgICAgIGdldFVzZXIoKVxyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnQURNX0VSUk9SX01FU1NBR0UnLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhLm1lc3NhZ2V9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjYW5jZWxFZGl0ID0gKCkgPT4ge1xyXG4gICAgICBzZXRFZGl0KCcnKTtcclxuICAgICAgZ2V0VXNlcigpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXNlclRhYmxlID0gKGVkaXQsIHVzZXIsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmKGVkaXQgPT09IHVzZXIuaWQpIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICA8dHIga2V5PXt1c2VyRGF0ZS5pZH0+XHJcbiAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+e2luZGV4KzF9PC90aD5cclxuICAgICAgICA8dGQ+PGlucHV0IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlckRhdGUoe2lkOiB1c2VyRGF0ZS5pZCxuYW1lOiBlLnRhcmdldC52YWx1ZSwgZW1haWw6IHVzZXJEYXRlLmVtYWlsLCByb2xlX2lkOiB1c2VyRGF0ZS5yb2xlX2lkfSl9IHZhbHVlPXt1c2VyRGF0ZS5uYW1lfS8+PC90ZD5cclxuICAgICAgICA8dGQ+PGlucHV0IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlckRhdGUoe2lkOiB1c2VyRGF0ZS5pZCxuYW1lOiB1c2VyRGF0ZS5uYW1lLCBlbWFpbDogZS50YXJnZXQudmFsdWUsIHJvbGVfaWQ6IHVzZXJEYXRlLnJvbGVfaWR9KX0gIHZhbHVlPXt1c2VyRGF0ZS5lbWFpbH0vPjwvdGQ+XHJcbiAgICAgICAgPHRkPjxzZWxlY3Qgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VyRGF0ZSh7aWQ6IHVzZXJEYXRlLmlkLG5hbWU6IHVzZXJEYXRlLm5hbWUsIGVtYWlsOiB1c2VyRGF0ZS5lbWFpbCwgcm9sZV9pZDogZS50YXJnZXQudmFsdWV9KX0gdmFsdWU9e3VzZXJEYXRlLnJvbGVfaWR9PjxvcHRpb24gdmFsdWU9JzEnPkFkbWluPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT0nMic+TW9kZXJhdG9yPC9vcHRpb24+PC9zZWxlY3Q+PC90ZD5cclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLXN1Y2Nlc3MgbXItMicgb25DbGljaz17KCkgPT4gc2F2ZUVkaXQoKX0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1kYW5nZXInIG9uQ2xpY2s9eygpID0+IGNhbmNlbEVkaXQoKX0+Q2FuY2VsPC9idXR0b24+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICA8L3RyPiAgXHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgcmV0dXJuKFxyXG4gICAgICAgIDx0ciBrZXk9e3VzZXIuaWR9PlxyXG4gICAgICAgIDx0aCBzY29wZT1cInJvd1wiPntpbmRleCsxfTwvdGg+XHJcbiAgICAgICAgPHRkPnt1c2VyLm5hbWV9PC90ZD5cclxuICAgICAgICA8dGQ+e3VzZXIuZW1haWx9PC90ZD5cclxuICAgICAgICA8dGQ+e3VzZXIucm9sZV9pZCA9PT0gMSA/ICdBZG1pbicgIDonTW9kZXJhdG9yJ308L3RkPlxyXG4gICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tc3VjY2VzcyBtci0yJyBvbkNsaWNrPXsoKSA9PiBlZGl0QWNjb3VudCh1c2VyLmlkKX0+RWRpdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1kYW5nZXInIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUFjY291bnQodXNlci5pZCl9PkRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICAgIClcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgPG1haW4gcm9sZT1cIm1haW5cIj5cclxuICAgICA8c2VjdGlvbiBjbGFzcz1cInBhbmVsIGltcG9ydGFudFwiPlxyXG4gICAgICAgICBcclxuICAgIHtsb2FkaW5nID8gPGRpdj7Ql9Cw0LPRg9C30LrQsC4uLjwvZGl2PiA6XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBtYi0zIGp1c3RpZnktY29udGVudC1iZXR3ZWVuJz5cclxuICAgICAgPGgyPlVzZXJzPC9oMj5cclxuICAgICAgPHA+e2FkbWluUmVkdWNlci51c2VyLnJvbGVfaWR9PC9wPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWluZm8nIG9uQ2xpY2s9e2hhbmRsZVNob3d9IGRpc2FibGVkPXthZG1pblJlZHVjZXIudXNlci5yb2xlX2lkPT09MSA/IGZhbHNlIDogdHJ1ZX0+0J3QvtCy0YvQuSDQv9C+0LvRjNC30L7QstCw0YLQtdC70YwgPGI+KzwvYj48L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXN0cmlwZWRcIj5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+0JjQvNGPPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlVzZXJuYW1lPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPtCg0L7Qu9GMPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT0nY29sJz7QlNC10LnRgdGC0LLQuNC1PC90aD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHt1c2Vycy5tYXAoKHVzZXIsaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIHVzZXJUYWJsZShlZGl0LHVzZXIsaW5kZXgpXHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIH1cclxuICAgICAgPE1vZGFsICBpc09wZW49e3Nob3dNb2RhbH0gdG9nZ2xlPXsoKT0+aGFuZGxlQ2xvc2Uoc2hvd01vZGFsKX0gICBzaXplPVwibWRcIj5cclxuICAgICAgICAgICAgICAgICA8TW9kYWxCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nZm9ybS1ncm91cCcgb25TdWJtaXQ9e2UgPT4gdXNlckFkZChlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdVc2VyKHtwYXNzd29yZDogbmV3VXNlci5wYXNzd29yZCxuYW1lOiBlLnRhcmdldC52YWx1ZSwgZW1haWw6IG5ld1VzZXIuZW1haWwsIHJvbGVfaWQ6IG5ld1VzZXIucm9sZV9pZH0pfSB2YWx1ZT17bmV3VXNlci5uYW1lfSBjbGFzc05hbWU9J2lucHV0LWdyb3VwIG1iLTInIHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSfQmNC80Y8nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdVc2VyKHtwYXNzd29yZDogbmV3VXNlci5wYXNzd29yZCxuYW1lOiBuZXdVc2VyLm5hbWUsIGVtYWlsOiBlLnRhcmdldC52YWx1ZSwgcm9sZV9pZDogbmV3VXNlci5yb2xlX2lkfSl9IHZhbHVlPXtuZXdVc2VyLmVtYWlsfSBjbGFzc05hbWU9J2lucHV0LWdyb3VwIG10LTInIHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdVc2VybmFtZScgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdVc2VyKHtwYXNzd29yZDogbmV3VXNlci5wYXNzd29yZCxuYW1lOiBuZXdVc2VyLm5hbWUsIGVtYWlsOiBuZXdVc2VyLmVtYWlsLCByb2xlX2lkOiBlLnRhcmdldC52YWx1ZX0pfSB2YWx1ZT17bmV3VXNlci5lbWFpbH0gIHZhbHVlPXtuZXdVc2VyLnJvbGVfaWR9IGNsYXNzTmFtZT0naW5wdXQtZ3JvdXAgbXQtMic+PG9wdGlvbiB2YWx1ZT0nMSc+QWRtaW48L29wdGlvbj48b3B0aW9uIHZhbHVlPScyJz5Nb2RlcmF0b3I8L29wdGlvbj48L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWluZm8gbXQtMic+0JTQvtCx0LDQstC40YLRjDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICA8L01vZGFsQm9keT5cclxuXHRcdFx0PC9Nb2RhbD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApICAgXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEFkbWluVXNlcnMpIl0sInNvdXJjZVJvb3QiOiIifQ==