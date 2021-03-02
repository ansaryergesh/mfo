webpackHotUpdate_N_E("pages/get_money",{

/***/ "./defaults/blacklistPhones.js":
/*!*************************************!*\
  !*** ./defaults/blacklistPhones.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var blcklistPhones = {
  "Phones": [{
    phone: '77002383452'
  }, {
    phone: '77081590527'
  }, {
    phone: '77075830764'
  }, {
    phone: '77753016021'
  }, {
    phone: '77787044902'
  }, {
    phone: '77075830753'
  }, {
    phone: '77787045039'
  }, {
    phone: '77783526211'
  }, {
    phone: '77002317451'
  }, {
    phone: '77082681583'
  }, {
    phone: '77029212590'
  }, {
    phone: '77029269081'
  }, {
    phone: '77787045771'
  }, {
    phone: '77002317452'
  }, {
    phone: '77789890481'
  }, {
    phone: '77021636492'
  }, {
    phone: '77767122095'
  }, {
    phone: '77089280373'
  }, {
    phone: '77053794048'
  }, {
    phone: '77078722369'
  }, {
    phone: '77020345921'
  }, {
    phone: '77086683931'
  }, {
    phone: '77772083336'
  }, {
    phone: '77789890985'
  }, {
    phone: '77088306236'
  }, {
    phone: '77021623845'
  }, {
    phone: '77076668463'
  }, {
    phone: '77789890228'
  }, {
    phone: '77086683925'
  }, {
    phone: '77021323845'
  }, {
    phone: '77751836710'
  }, {
    phone: '77787041142'
  }, {
    phone: '77029212593'
  }]
};

var valueParse = function valueParse(val) {
  return String(val).replace(/[^A-Z0-9]/g, '');
};

var ifBlckList = function ifBlckList(val) {
  var arr = blcklistPhones.Phones;
  var ph = valueParse(val);
  var found = arr.some(function (el) {
    return valueParse(el.phone) === val;
  });
  return found;
};

console.log(ifBlckList('+7(778)-989-0228'));

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGVmYXVsdHMvYmxhY2tsaXN0UGhvbmVzLmpzIl0sIm5hbWVzIjpbImJsY2tsaXN0UGhvbmVzIiwicGhvbmUiLCJ2YWx1ZVBhcnNlIiwidmFsIiwiU3RyaW5nIiwicmVwbGFjZSIsImlmQmxja0xpc3QiLCJhcnIiLCJQaG9uZXMiLCJwaCIsImZvdW5kIiwic29tZSIsImVsIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsa0RBQU1BLGNBQWMsR0FBRztBQUNwQixZQUFVLENBQ1A7QUFDRUMsU0FBSyxFQUFFO0FBRFQsR0FETyxFQUlQO0FBQ0VBLFNBQUssRUFBRTtBQURULEdBSk8sRUFPUDtBQUNFQSxTQUFLLEVBQUU7QUFEVCxHQVBPLEVBVVA7QUFDRUEsU0FBSyxFQUFFO0FBRFQsR0FWTyxFQWFQO0FBQ0VBLFNBQUssRUFBRTtBQURULEdBYk8sRUFnQlA7QUFDRUEsU0FBSyxFQUFFO0FBRFQsR0FoQk8sRUFtQlA7QUFDRUEsU0FBSyxFQUFFO0FBRFQsR0FuQk8sRUFzQlA7QUFDRUEsU0FBSyxFQUFFO0FBRFQsR0F0Qk8sRUF3Qkw7QUFDQUEsU0FBSyxFQUFFO0FBRFAsR0F4QkssRUEwQkw7QUFDQUEsU0FBSyxFQUFFO0FBRFAsR0ExQkssRUE2QlA7QUFDRUEsU0FBSyxFQUFFO0FBRFQsR0E3Qk8sRUErQkw7QUFDQUEsU0FBSyxFQUFFO0FBRFAsR0EvQkssRUFrQ1A7QUFDRUEsU0FBSyxFQUFFO0FBRFQsR0FsQ08sRUFxQ1A7QUFDRUEsU0FBSyxFQUFFO0FBRFQsR0FyQ08sRUF1Q0w7QUFDQUEsU0FBSyxFQUFFO0FBRFAsR0F2Q0ssRUEwQ1A7QUFDRUEsU0FBSyxFQUFFO0FBRFQsR0ExQ08sRUE0Q0w7QUFDQUEsU0FBSyxFQUFFO0FBRFAsR0E1Q0ssRUErQ1A7QUFDRUEsU0FBSyxFQUFFO0FBRFQsR0EvQ08sRUFrRFA7QUFDRUEsU0FBSyxFQUFFO0FBRFQsR0FsRE8sRUFxRFA7QUFDRUEsU0FBSyxFQUFFO0FBRFQsR0FyRE8sRUF1REw7QUFDQUEsU0FBSyxFQUFFO0FBRFAsR0F2REssRUF5REw7QUFDQUEsU0FBSyxFQUFFO0FBRFAsR0F6REssRUE0RFA7QUFDRUEsU0FBSyxFQUFFO0FBRFQsR0E1RE8sRUE4REw7QUFDQUEsU0FBSyxFQUFFO0FBRFAsR0E5REssRUFpRVA7QUFDRUEsU0FBSyxFQUFFO0FBRFQsR0FqRU8sRUFvRVA7QUFDRUEsU0FBSyxFQUFFO0FBRFQsR0FwRU8sRUFzRUw7QUFDQUEsU0FBSyxFQUFFO0FBRFAsR0F0RUssRUF5RVA7QUFDRUEsU0FBSyxFQUFFO0FBRFQsR0F6RU8sRUE0RVA7QUFDRUEsU0FBSyxFQUFFO0FBRFQsR0E1RU8sRUE4RUw7QUFDQUEsU0FBSyxFQUFFO0FBRFAsR0E5RUssRUFpRlA7QUFDRUEsU0FBSyxFQUFFO0FBRFQsR0FqRk8sRUFtRkw7QUFDQUEsU0FBSyxFQUFFO0FBRFAsR0FuRkssRUFzRlA7QUFDRUEsU0FBSyxFQUFFO0FBRFQsR0F0Rk87QUFEVSxDQUF2Qjs7QUE2RkEsSUFBT0MsVUFBVSxHQUFFLFNBQVpBLFVBQVksQ0FBQ0MsR0FBRCxFQUFTO0FBQzFCLFNBQU9DLE1BQU0sQ0FBQ0QsR0FBRCxDQUFOLENBQVlFLE9BQVosQ0FBb0IsWUFBcEIsRUFBa0MsRUFBbEMsQ0FBUDtBQUNELENBRkQ7O0FBSUEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0gsR0FBRCxFQUFTO0FBQzFCLE1BQUlJLEdBQUcsR0FBR1AsY0FBYyxDQUFDUSxNQUF6QjtBQUNBLE1BQUlDLEVBQUUsR0FBR1AsVUFBVSxDQUFDQyxHQUFELENBQW5CO0FBQ0EsTUFBTU8sS0FBSyxHQUFHSCxHQUFHLENBQUNJLElBQUosQ0FBUyxVQUFBQyxFQUFFO0FBQUEsV0FBR1YsVUFBVSxDQUFDVSxFQUFFLENBQUNYLEtBQUosQ0FBVixLQUF1QkUsR0FBMUI7QUFBQSxHQUFYLENBQWQ7QUFFQSxTQUFPTyxLQUFQO0FBQ0QsQ0FORDs7QUFRQUcsT0FBTyxDQUFDQyxHQUFSLENBQVlSLFVBQVUsQ0FBQyxrQkFBRCxDQUF0QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nZXRfbW9uZXkuY2RhMDg1NzNmZjczOTEzYTdiNTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJsY2tsaXN0UGhvbmVzID0ge1xyXG4gICBcIlBob25lc1wiOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwaG9uZTogJzc3MDAyMzgzNDUyJyBcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBob25lOiAnNzcwODE1OTA1MjcnIFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGhvbmU6ICc3NzA3NTgzMDc2NCcgXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwaG9uZTogJzc3NzUzMDE2MDIxJyBcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBob25lOiAnNzc3ODcwNDQ5MDInIFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGhvbmU6ICc3NzA3NTgzMDc1MycgXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwaG9uZTogJzc3Nzg3MDQ1MDM5JyBcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBob25lOiAnNzc3ODM1MjYyMTEnIFxyXG4gICAgICB9LHtcclxuICAgICAgICBwaG9uZTogJzc3MDAyMzE3NDUxJyBcclxuICAgICAgfSx7XHJcbiAgICAgICAgcGhvbmU6ICc3NzA4MjY4MTU4MycgXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwaG9uZTogJzc3MDI5MjEyNTkwJyBcclxuICAgICAgfSx7XHJcbiAgICAgICAgcGhvbmU6ICc3NzAyOTI2OTA4MScgXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwaG9uZTogJzc3Nzg3MDQ1NzcxJyBcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBob25lOiAnNzcwMDIzMTc0NTInIFxyXG4gICAgICB9LHtcclxuICAgICAgICBwaG9uZTogJzc3Nzg5ODkwNDgxJyBcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBob25lOiAnNzcwMjE2MzY0OTInIFxyXG4gICAgICB9LHtcclxuICAgICAgICBwaG9uZTogJzc3NzY3MTIyMDk1JyBcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBob25lOiAnNzcwODkyODAzNzMnIFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGhvbmU6ICc3NzA1Mzc5NDA0OCcgXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwaG9uZTogJzc3MDc4NzIyMzY5JyBcclxuICAgICAgfSx7XHJcbiAgICAgICAgcGhvbmU6ICc3NzAyMDM0NTkyMScgXHJcbiAgICAgIH0se1xyXG4gICAgICAgIHBob25lOiAnNzcwODY2ODM5MzEnIFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGhvbmU6ICc3Nzc3MjA4MzMzNicgXHJcbiAgICAgIH0se1xyXG4gICAgICAgIHBob25lOiAnNzc3ODk4OTA5ODUnIFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGhvbmU6ICc3NzA4ODMwNjIzNicgXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwaG9uZTogJzc3MDIxNjIzODQ1JyBcclxuICAgICAgfSx7XHJcbiAgICAgICAgcGhvbmU6ICc3NzA3NjY2ODQ2MycgXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwaG9uZTogJzc3Nzg5ODkwMjI4JyBcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBob25lOiAnNzcwODY2ODM5MjUnIFxyXG4gICAgICB9LHtcclxuICAgICAgICBwaG9uZTogJzc3MDIxMzIzODQ1JyBcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBob25lOiAnNzc3NTE4MzY3MTAnIFxyXG4gICAgICB9LHtcclxuICAgICAgICBwaG9uZTogJzc3Nzg3MDQxMTQyJyBcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBob25lOiAnNzcwMjkyMTI1OTMnIFxyXG4gICAgICB9LFxyXG4gICBdIFxyXG59XHJcblxyXG5jb25zdCAgdmFsdWVQYXJzZSA9KHZhbCkgPT4ge1xyXG4gIHJldHVybiBTdHJpbmcodmFsKS5yZXBsYWNlKC9bXkEtWjAtOV0vZywgJycpXHJcbn1cclxuXHJcbmNvbnN0IGlmQmxja0xpc3QgPSAodmFsKSA9PiB7XHJcbiAgbGV0IGFyciA9IGJsY2tsaXN0UGhvbmVzLlBob25lc1xyXG4gIGxldCBwaCA9IHZhbHVlUGFyc2UodmFsKVxyXG4gIGNvbnN0IGZvdW5kID0gYXJyLnNvbWUoZWw9PiB2YWx1ZVBhcnNlKGVsLnBob25lKT09PXZhbClcclxuXHJcbiAgcmV0dXJuIGZvdW5kXHJcbn1cclxuXHJcbmNvbnNvbGUubG9nKGlmQmxja0xpc3QoJys3KDc3OCktOTg5LTAyMjgnKSlcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==