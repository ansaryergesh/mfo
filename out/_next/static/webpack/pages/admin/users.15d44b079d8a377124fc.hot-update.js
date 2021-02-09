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

  var finalUser = users.filter(function (user) {
    return user.id !== adminReducer.user.id;
  });

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
          lineNumber: 123,
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
            lineNumber: 124,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
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
            lineNumber: 125,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
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
              lineNumber: 126,
              columnNumber: 163
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
              value: "2",
              children: "Moderator"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 195
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
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
            lineNumber: 128,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
            className: "btn btn-danger",
            onClick: function onClick() {
              return cancelEdit();
            },
            children: "Cancel"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 9
        }, _this)]
      }, userDate.id, true, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 11
      }, _this);
    } else return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("tr", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("th", {
        scope: "row",
        children: index + 1
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("td", {
        children: user.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("td", {
        children: user.email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("td", {
        children: user.role_id === 1 ? 'Admin' : 'Moderator'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("td", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          className: "btn btn-success mr-2",
          disabled: adminReducer.user.role_id === 1 ? false : true,
          onClick: function onClick() {
            return editAccount(user.id);
          },
          children: "Edit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          className: "btn btn-danger",
          disabled: adminReducer.user.role_id === 1 ? false : true,
          onClick: function onClick() {
            return deleteAccount(user.id);
          },
          children: "Delete"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }, _this)]
    }, user.id, true, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_admin_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("main", {
      role: "main",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
        "class": "panel important",
        children: [loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          children: "\u0417\u0430\u0433\u0443\u0437\u043A\u0430..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 16
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "d-flex mb-3 justify-content-between",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
              children: "Users"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 7
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
              className: "btn btn-info",
              onClick: handleShow,
              disabled: adminReducer.user.role_id === 1 ? false : true,
              children: ["\u041D\u043E\u0432\u044B\u0439 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("b", {
                children: "+"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 138
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 9
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 159,
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
                  lineNumber: 167,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("th", {
                  scope: "col",
                  children: "\u0418\u043C\u044F"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 168,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("th", {
                  scope: "col",
                  children: "Username"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 169,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("th", {
                  scope: "col",
                  children: "\u0420\u043E\u043B\u044C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 170,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("th", {
                  scope: "col",
                  children: "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 171,
                  columnNumber: 17
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("tbody", {
              children: finalUser.map(function (user, index) {
                return userTable(edit, user, index);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 158,
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
                lineNumber: 188,
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
                lineNumber: 189,
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
                lineNumber: 190,
                columnNumber: 232
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
                value: "2",
                children: "Moderator"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 264
              }, _this)]), _jsxDEV2), void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 23
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
                className: "btn btn-info mt-2",
                disabled: adminReducer.user.role_id === 1 ? false : true,
                children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 191,
                columnNumber: 23
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 21
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 18
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 7
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 6
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_admin_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 152,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vdXNlcnMuanMiXSwibmFtZXMiOlsibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJhZG1pblJlZHVjZXIiLCJBZG1pblVzZXJzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VycyIsInNldFVzZXJzIiwiZWRpdCIsInNldEVkaXQiLCJpZCIsIm5hbWUiLCJlbWFpbCIsInJvbGVfaWQiLCJ1c2VyRGF0ZSIsInNldFVzZXJEYXRlIiwicGFzc3dvcmQiLCJuZXdVc2VyIiwic2V0TmV3VXNlciIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImZpbmFsVXNlciIsImZpbHRlciIsInVzZXIiLCJoYW5kbGVDbG9zZSIsImhhbmRsZVNob3ciLCJnZXRVc2VyIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInVzZUVmZmVjdCIsImVkaXRBY2NvdW50IiwidXNlckFkZCIsImUiLCJwb3N0IiwidG9rZW4iLCJjb29raWUiLCJzdWNjZXNzIiwidHlwZSIsInBheWxvYWQiLCJtZXNzYWdlIiwicHJldmVudERlZmF1bHQiLCJzYXZlRWRpdCIsInB1dCIsInVzZXJfaWQiLCJkZWxldGVBY2NvdW50Iiwic3dhbCIsInRpdGxlIiwiYnV0dG9ucyIsInRleHQiLCJ2YWx1ZSIsImNhbmNlbCIsInJlc3BvbnNlIiwiY2FuY2VsRWRpdCIsInVzZXJUYWJsZSIsImluZGV4IiwidGFyZ2V0IiwibWFwIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxlQUFULENBQXlCQyxLQUF6QixFQUFnQztBQUM5QixTQUFPO0FBQUNDLGdCQUFZLEVBQUNELEtBQUssQ0FBQ0M7QUFBcEIsR0FBUDtBQUNEOztBQUNE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QSx1QkFBalA7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFIRixlQUlFO0FBQVEseUJBQVMsRUFBQyxtQkFBbEI7QUFBc0Msd0JBQVEsRUFBRWQsWUFBWSxDQUFDd0IsSUFBYixDQUFrQlYsT0FBbEIsS0FBNEIsQ0FBNUIsR0FBZ0MsS0FBaEMsR0FBd0MsSUFBeEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBOUJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURPO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQThDSSxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBOUNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBa0RILENBNUxEOztHQUFNYixVO1VBQ2VFLHVEOzs7S0FEZkYsVTtBQTZMUzRELDBIQUFPLENBQUMvRCxlQUFELENBQVAsQ0FBeUJHLFVBQXpCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vdXNlcnMuMTVkNDRiMDc5ZDhhMzc3MTI0ZmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2FkbWluL0hlYWRlcidcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2FkbWluL0Zvb3RlcidcclxuaW1wb3J0IHN3YWwgZnJvbSBcInN3ZWV0YWxlcnRcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIGNvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBNb2RhbCwgTW9kYWxIZWFkZXIsIE1vZGFsQm9keSB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XHJcbiAgcmV0dXJuIHthZG1pblJlZHVjZXI6c3RhdGUuYWRtaW5SZWR1Y2VyfVxyXG59XHJcbmNvbnN0IEFkbWluVXNlcnMgPSAoe2FkbWluUmVkdWNlcn0pID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2VkaXQsc2V0RWRpdF0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFt1c2VyRGF0ZSxzZXRVc2VyRGF0ZV0gPSB1c2VTdGF0ZSh7aWQ6IG51bGwsbmFtZTogbnVsbCwgZW1haWw6IG51bGwsIHJvbGVfaWQ6IG51bGx9KVxyXG4gICAgY29uc3QgW25ld1VzZXIsIHNldE5ld1VzZXJdID0gdXNlU3RhdGUoe25hbWU6IG51bGwsIGVtYWlsOiBudWxsLCBwYXNzd29yZDogJ2ljcmVkaXQxMjMnLCByb2xlX2lkOiAyfSlcclxuICAgIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBmaW5hbFVzZXIgPSB1c2Vycy5maWx0ZXIodXNlcj0+dXNlci5pZCAhPT0gYWRtaW5SZWR1Y2VyLnVzZXIuaWQpO1xyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgIHNldFNob3dNb2RhbChmYWxzZSlcclxuICAgICAgc2V0TmV3VXNlcih7bmFtZTogbnVsbCwgZW1haWw6IG51bGwsIHBhc3N3b3JkOiAnaWNyZWRpdDEyMycsIHJvbGVfaWQ6IDJ9KVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGhhbmRsZVNob3cgPSAoKSA9PiBzZXRTaG93TW9kYWwodHJ1ZSk7XHJcbiAgICBjb25zdCBnZXRVc2VyID0gKCkgPT4ge1xyXG4gICAgICBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdXNlcnNgKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0VXNlcnMocmVzLmRhdGEpXHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgZ2V0VXNlcigpXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIFxyXG4gICAgY29uc3QgZWRpdEFjY291bnQgPSAoaWQpID0+IHtcclxuICAgICAgc2V0RWRpdChpZCk7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSB1c2Vycy5maWx0ZXIodXNlcj0+dXNlci5pZCA9PT0gaWQpO1xyXG4gICAgICBzZXRVc2VyRGF0ZSh7aWQ6IGlkLG5hbWU6IHVzZXJbMF0ubmFtZSxlbWFpbDogdXNlclswXS5lbWFpbCwgcm9sZV9pZDogdXNlclswXS5yb2xlX2lkfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgdXNlckFkZCA9IChlKSA9PiB7XHJcbiAgICAgIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdXNlcnMnLCB7XHJcbiAgICAgICAgbmFtZTogbmV3VXNlci5uYW1lLFxyXG4gICAgICAgIGVtYWlsOiBuZXdVc2VyLmVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkOiBuZXdVc2VyLnBhc3N3b3JkLFxyXG4gICAgICAgIHJvbGVfaWQ6IG5ld1VzZXIucm9sZV9pZCxcclxuICAgICAgICB0b2tlbjogY29va2llLmdldCgnYWRtaW5fdG9rZW4nKVxyXG4gICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlcz0+IHtcclxuICAgICAgICAgIGlmKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdBRE1fU1VDQ0VTU19NRVNTQUdFJywgcGF5bG9hZDogcmVzLmRhdGEubWVzc2FnZX0pXHJcbiAgICAgICAgICAgIGdldFVzZXIoKVxyXG4gICAgICAgICAgICBoYW5kbGVDbG9zZSgpXHJcbiAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdBRE1fRVJST1JfTUVTU0FHRScsIHBheWxvYWQ6IHJlcy5kYXRhLm1lc3NhZ2V9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgXHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2F2ZUVkaXQgPSAoKSA9PiB7XHJcbiAgICAgIGF4aW9zLnB1dCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9lZGl0Jywge1xyXG4gICAgICAgIHRva2VuOiBjb29raWUuZ2V0KCdhZG1pbl90b2tlbicpLFxyXG4gICAgICAgIGVtYWlsOiB1c2VyRGF0ZS5lbWFpbCxcclxuICAgICAgICBuYW1lOiB1c2VyRGF0ZS5uYW1lLFxyXG4gICAgICAgIHJvbGVfaWQ6IHVzZXJEYXRlLnJvbGVfaWQsXHJcbiAgICAgICAgdXNlcl9pZDogdXNlckRhdGUuaWRcclxuICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgaWYocmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0FETV9TVUNDRVNTX01FU1NBR0UnLCBwYXlsb2FkOiByZXMuZGF0YS5tZXNzYWdlfSlcclxuICAgICAgICAgICAgc2V0RWRpdCgnJylcclxuICAgICAgICAgICAgZ2V0VXNlcigpXHJcbiAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnQURNX0VSUk9SX01FU1NBR0UnLCBwYXlsb2FkOiByZXMuZGF0YS5tZXNzYWdlfSlcclxuICAgICAgICAgICAgZ2V0VXNlcigpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IGRlbGV0ZUFjY291bnQgPSAoaWQpID0+IHtcclxuICAgICAgc3dhbCh7XHJcbiAgICAgICAgICB0aXRsZTogJ9CS0Ysg0YPQstC10YDQtdC90YssINGH0YLQviDRhdC+0YLQuNGC0LUg0YPQtNCw0LvQuNGC0Ywg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPJyxcclxuICAgICAgICAgIGJ1dHRvbnM6e1xyXG4gICAgICAgICAgICBjYXRjaDp7XHJcbiAgICAgICAgICAgICAgdGV4dDogJ9CU0LAnLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiAneWVzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYW5jZWw6ICfQndC10YInXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbih2YWx1ZT0+e1xyXG4gICAgICAgICAgc3dpdGNoICh2YWx1ZSl7XHJcbiAgICAgICAgICAgIGNhc2UgJ3llcyc6XHJcbiAgICAgICAgICAgICAgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2RlbGV0ZUFjY291bnQ/dG9rZW49JHtjb29raWUuZ2V0KCdhZG1pbl90b2tlbicpfSZ1c2VyX2lkPSR7aWR9YClcclxuICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdBRE1fU1VDQ0VTU19NRVNTQUdFJywgcGF5bG9hZDogcmVzcG9uc2UuZGF0YS5tZXNzYWdlfSlcclxuICAgICAgICAgICAgICAgICAgZ2V0VXNlcigpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdBRE1fRVJST1JfTUVTU0FHRScsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEubWVzc2FnZX0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNhbmNlbEVkaXQgPSAoKSA9PiB7XHJcbiAgICAgIHNldEVkaXQoJycpO1xyXG4gICAgICBnZXRVc2VyKClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1c2VyVGFibGUgPSAoZWRpdCwgdXNlciwgaW5kZXgpID0+IHtcclxuICAgICAgaWYoZWRpdCA9PT0gdXNlci5pZCkge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgIDx0ciBrZXk9e3VzZXJEYXRlLmlkfT5cclxuICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj57aW5kZXgrMX08L3RoPlxyXG4gICAgICAgIDx0ZD48aW5wdXQgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VyRGF0ZSh7aWQ6IHVzZXJEYXRlLmlkLG5hbWU6IGUudGFyZ2V0LnZhbHVlLCBlbWFpbDogdXNlckRhdGUuZW1haWwsIHJvbGVfaWQ6IHVzZXJEYXRlLnJvbGVfaWR9KX0gdmFsdWU9e3VzZXJEYXRlLm5hbWV9Lz48L3RkPlxyXG4gICAgICAgIDx0ZD48aW5wdXQgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VyRGF0ZSh7aWQ6IHVzZXJEYXRlLmlkLG5hbWU6IHVzZXJEYXRlLm5hbWUsIGVtYWlsOiBlLnRhcmdldC52YWx1ZSwgcm9sZV9pZDogdXNlckRhdGUucm9sZV9pZH0pfSAgdmFsdWU9e3VzZXJEYXRlLmVtYWlsfS8+PC90ZD5cclxuICAgICAgICA8dGQ+PHNlbGVjdCBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJEYXRlKHtpZDogdXNlckRhdGUuaWQsbmFtZTogdXNlckRhdGUubmFtZSwgZW1haWw6IHVzZXJEYXRlLmVtYWlsLCByb2xlX2lkOiBlLnRhcmdldC52YWx1ZX0pfSB2YWx1ZT17dXNlckRhdGUucm9sZV9pZH0+PG9wdGlvbiB2YWx1ZT0nMSc+QWRtaW48L29wdGlvbj48b3B0aW9uIHZhbHVlPScyJz5Nb2RlcmF0b3I8L29wdGlvbj48L3NlbGVjdD48L3RkPlxyXG4gICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tc3VjY2VzcyBtci0yJyBvbkNsaWNrPXsoKSA9PiBzYXZlRWRpdCgpfT5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWRhbmdlcicgb25DbGljaz17KCkgPT4gY2FuY2VsRWRpdCgpfT5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgICA8L3RkPlxyXG4gICAgIDwvdHI+ICBcclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSByZXR1cm4oXHJcbiAgICAgICAgPHRyIGtleT17dXNlci5pZH0+XHJcbiAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+e2luZGV4KzF9PC90aD5cclxuICAgICAgICA8dGQ+e3VzZXIubmFtZX08L3RkPlxyXG4gICAgICAgIDx0ZD57dXNlci5lbWFpbH08L3RkPlxyXG4gICAgICAgIDx0ZD57dXNlci5yb2xlX2lkID09PSAxID8gJ0FkbWluJyAgOidNb2RlcmF0b3InfTwvdGQ+XHJcbiAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1zdWNjZXNzIG1yLTInIGRpc2FibGVkPXthZG1pblJlZHVjZXIudXNlci5yb2xlX2lkPT09MSA/IGZhbHNlIDogdHJ1ZX0gb25DbGljaz17KCkgPT4gZWRpdEFjY291bnQodXNlci5pZCl9PkVkaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tZGFuZ2VyJyBkaXNhYmxlZD17YWRtaW5SZWR1Y2VyLnVzZXIucm9sZV9pZD09PTEgPyBmYWxzZSA6IHRydWV9IG9uQ2xpY2s9eygpID0+IGRlbGV0ZUFjY291bnQodXNlci5pZCl9PkRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICAgIClcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgPG1haW4gcm9sZT1cIm1haW5cIj5cclxuICAgICA8c2VjdGlvbiBjbGFzcz1cInBhbmVsIGltcG9ydGFudFwiPlxyXG4gICAgICAgICBcclxuICAgIHtsb2FkaW5nID8gPGRpdj7Ql9Cw0LPRg9C30LrQsC4uLjwvZGl2PiA6XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBtYi0zIGp1c3RpZnktY29udGVudC1iZXR3ZWVuJz5cclxuICAgICAgPGgyPlVzZXJzPC9oMj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1pbmZvJyBvbkNsaWNrPXtoYW5kbGVTaG93fSBkaXNhYmxlZD17YWRtaW5SZWR1Y2VyLnVzZXIucm9sZV9pZD09PTEgPyBmYWxzZSA6IHRydWV9PtCd0L7QstGL0Lkg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMIDxiPis8L2I+PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkXCI+XHJcbiAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj4jPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPtCY0LzRjzwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Vc2VybmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj7QoNC+0LvRjDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9J2NvbCc+0JTQtdC50YHRgtCy0LjQtTwvdGg+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICB7ZmluYWxVc2VyLm1hcCgodXNlcixpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgdXNlclRhYmxlKGVkaXQsdXNlcixpbmRleClcclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgfVxyXG4gICAgICA8TW9kYWwgIGlzT3Blbj17c2hvd01vZGFsfSB0b2dnbGU9eygpPT5oYW5kbGVDbG9zZShzaG93TW9kYWwpfSAgIHNpemU9XCJtZFwiPlxyXG4gICAgICAgICAgICAgICAgIDxNb2RhbEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPSdmb3JtLWdyb3VwJyBvblN1Ym1pdD17ZSA9PiB1c2VyQWRkKGUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17KGUpID0+IHNldE5ld1VzZXIoe3Bhc3N3b3JkOiBuZXdVc2VyLnBhc3N3b3JkLG5hbWU6IGUudGFyZ2V0LnZhbHVlLCBlbWFpbDogbmV3VXNlci5lbWFpbCwgcm9sZV9pZDogbmV3VXNlci5yb2xlX2lkfSl9IHZhbHVlPXtuZXdVc2VyLm5hbWV9IGNsYXNzTmFtZT0naW5wdXQtZ3JvdXAgbWItMicgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J9CY0LzRjycgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17KGUpID0+IHNldE5ld1VzZXIoe3Bhc3N3b3JkOiBuZXdVc2VyLnBhc3N3b3JkLG5hbWU6IG5ld1VzZXIubmFtZSwgZW1haWw6IGUudGFyZ2V0LnZhbHVlLCByb2xlX2lkOiBuZXdVc2VyLnJvbGVfaWR9KX0gdmFsdWU9e25ld1VzZXIuZW1haWx9IGNsYXNzTmFtZT0naW5wdXQtZ3JvdXAgbXQtMicgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J1VzZXJuYW1lJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17KGUpID0+IHNldE5ld1VzZXIoe3Bhc3N3b3JkOiBuZXdVc2VyLnBhc3N3b3JkLG5hbWU6IG5ld1VzZXIubmFtZSwgZW1haWw6IG5ld1VzZXIuZW1haWwsIHJvbGVfaWQ6IGUudGFyZ2V0LnZhbHVlfSl9IHZhbHVlPXtuZXdVc2VyLmVtYWlsfSAgdmFsdWU9e25ld1VzZXIucm9sZV9pZH0gY2xhc3NOYW1lPSdpbnB1dC1ncm91cCBtdC0yJz48b3B0aW9uIHZhbHVlPScxJz5BZG1pbjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9JzInPk1vZGVyYXRvcjwvb3B0aW9uPjwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4taW5mbyBtdC0yJyBkaXNhYmxlZD17YWRtaW5SZWR1Y2VyLnVzZXIucm9sZV9pZD09PTEgPyBmYWxzZSA6IHRydWV9PtCU0L7QsdCw0LLQuNGC0Yw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgPC9Nb2RhbEJvZHk+XHJcblx0XHRcdDwvTW9kYWw+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKSAgIFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShBZG1pblVzZXJzKSJdLCJzb3VyY2VSb290IjoiIn0=