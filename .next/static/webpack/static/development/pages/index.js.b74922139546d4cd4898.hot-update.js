webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _myLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./myLayout */ "./pages/myLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _navebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navebar */ "./pages/navebar.js");
var _jsxFileName = "/home/ahebwa49/Desktop/Projects/akuweera-next js/samaku-akuwera/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function getPosts() {
  return [{
    id: 'hello-nextjs',
    title: 'HOME'
  }, {
    id: 'learn-nextjs',
    title: 'About'
  }, {
    id: 'deploy-nextjs',
    title: 'GALLERY'
  }];
}

function Blog() {
  return __jsx("div", {
    className: "jsx-725162849",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-725162849",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(_navebar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, getPosts().map(function (post) {
    return __jsx("li", {
      key: post.id,
      className: "jsx-725162849",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/p/[id]",
      as: "/p/".concat(post.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-725162849",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, post.title)));
  })), __jsx("img", {
    src: "/images/FB8.jpg",
    className: "jsx-725162849",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("h1", {
    className: "jsx-725162849",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Give a Helping Hand"), __jsx("img", {
    src: "/images/FB9.jpg",
    className: "jsx-725162849",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx("img", {
    src: "/images/FB10.jpg",
    className: "jsx-725162849",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx("img", {
    src: "/images/FB11.jpg",
    className: "jsx-725162849",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx("h", {
    className: "jsx-725162849",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "THIS IS WHERE YOU CAN GET MORE INFORMATION"), __jsx("p", {
    className: "jsx-725162849",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "actually this is all about what the foundation is all about")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "725162849",
    __self: this
  }, "h1.jsx-725162849{color:white;background-color:black;text-align:center;margin-right:120px;}h2.jsx-725162849{color:white;background-color:blue;text-align:center;margin-right:120px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FoZWJ3YTQ5L0Rlc2t0b3AvUHJvamVjdHMvYWt1d2VlcmEtbmV4dCBqcy9zYW1ha3UtYWt1d2VyYS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Q2UsQUFHNEIsQUFNRixZQUxhLEFBTUgsc0JBQ0osQ0FORSxpQkFPRCxDQU5FLGtCQU94QixDQU5FIiwiZmlsZSI6Ii9ob21lL2FoZWJ3YTQ5L0Rlc2t0b3AvUHJvamVjdHMvYWt1d2VlcmEtbmV4dCBqcy9zYW1ha3UtYWt1d2VyYS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi9teUxheW91dCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IE5hdmViYXIgZnJvbSAnLi9uYXZlYmFyJztcblxuZnVuY3Rpb24gZ2V0UG9zdHMoKSB7XG4gIHJldHVybiBbXG4gICAgeyBpZDogJ2hlbGxvLW5leHRqcycsIHRpdGxlOiAnSE9NRScgfSxcbiAgICB7IGlkOiAnbGVhcm4tbmV4dGpzJywgdGl0bGU6ICdBYm91dCcgfSxcbiAgICB7IGlkOiAnZGVwbG95LW5leHRqcycsIHRpdGxlOiAnR0FMTEVSWScgfVxuICBdO1xuICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZygpIHtcbiAgcmV0dXJuIChcbiAgIFxuICAgPGRpdj5cbiAgICAgIDx1bD5cbiAgICAgIDxOYXZlYmFyPlxuXG4gXG5cbiAgICAgICAge2dldFBvc3RzKCkubWFwKHBvc3QgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wL1tpZF1cIiBhcz17YC9wLyR7cG9zdC5pZH1gfT5cbiAgICAgICAgICAgICAgPGE+e3Bvc3QudGl0bGV9PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICApKX1cbiAgICAgICAgPC9OYXZlYmFyPlxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvRkI4LmpwZ1wiLz5cbiAgICAgICAgPGgxPkdpdmUgYSBIZWxwaW5nIEhhbmQ8L2gxPlxuICAgICAgICBcbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL0ZCOS5qcGdcIi8+XG4gICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9GQjEwLmpwZ1wiLz5cbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL0ZCMTEuanBnXCIvPlxuICAgICAgICA8aD5USElTIElTIFdIRVJFIFlPVSBDQU4gR0VUIE1PUkUgSU5GT1JNQVRJT048L2g+XG4gICAgICAgIDxwPmFjdHVhbGx5IHRoaXMgaXMgYWxsIGFib3V0IHdoYXQgdGhlIGZvdW5kYXRpb24gaXMgYWxsIGFib3V0PC9wPlxuICAgPC91bD4gXG4gICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBoMXtcbiAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDoxMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgye1xuICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpibHVlO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjEyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICBcbiAgIFxuICAgICBcblxuXG4gICBcbiAgKTtcbiAgICAgICAgfVxuIl19 */\n/*@ sourceURL=/home/ahebwa49/Desktop/Projects/akuweera-next js/samaku-akuwera/pages/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.b74922139546d4cd4898.hot-update.js.map