webpackHotUpdate("static/development/pages/navebar.js",{

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
    className: "jsx-2717039495",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-2717039495",
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
      className: "jsx-2717039495",
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
      className: "jsx-2717039495",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, post.title)));
  })), __jsx("img", {
    src: "/images/FB8.jpg",
    className: "jsx-2717039495",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("h1", {
    className: "jsx-2717039495",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Give a Helping Hand"), __jsx("h2", {
    className: "jsx-2717039495",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Our Mission"), __jsx("img", {
    src: "/images/FB9.jpg",
    className: "jsx-2717039495",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx("img", {
    src: "/images/FB10.jpg",
    className: "jsx-2717039495",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx("img", {
    src: "/images/FB11.jpg",
    className: "jsx-2717039495",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx("h", {
    className: "jsx-2717039495",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "THIS IS WHERE YOU CAN GET MORE INFORMATION"), __jsx("p", {
    className: "jsx-2717039495",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "actually this is all about what the foundation is all about")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2717039495",
    __self: this
  }, "h1.jsx-2717039495{color:white;background-color:black;text-align:center;margin-right:120px;}h2.jsx-2717039495{color:blue;background-color:blue;text-align:center;margin-right:120px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FoZWJ3YTQ5L0Rlc2t0b3AvUHJvamVjdHMvYWt1d2VlcmEtbmV4dCBqcy9zYW1ha3UtYWt1d2VyYS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Q2UsQUFHNEIsQUFNSCxXQUNXLENBTkcscUJBT1AsRUFORSxnQkFPRCxFQU5FLGlCQU94QixFQU5FIiwiZmlsZSI6Ii9ob21lL2FoZWJ3YTQ5L0Rlc2t0b3AvUHJvamVjdHMvYWt1d2VlcmEtbmV4dCBqcy9zYW1ha3UtYWt1d2VyYS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi9teUxheW91dCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IE5hdmViYXIgZnJvbSAnLi9uYXZlYmFyJztcblxuZnVuY3Rpb24gZ2V0UG9zdHMoKSB7XG4gIHJldHVybiBbXG4gICAgeyBpZDogJ2hlbGxvLW5leHRqcycsIHRpdGxlOiAnSE9NRScgfSxcbiAgICB7IGlkOiAnbGVhcm4tbmV4dGpzJywgdGl0bGU6ICdBYm91dCcgfSxcbiAgICB7IGlkOiAnZGVwbG95LW5leHRqcycsIHRpdGxlOiAnR0FMTEVSWScgfVxuICBdO1xuICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZygpIHtcbiAgcmV0dXJuIChcbiAgIFxuICAgPGRpdj5cbiAgICAgIDx1bD5cbiAgICAgIDxOYXZlYmFyPlxuXG4gXG5cbiAgICAgICAge2dldFBvc3RzKCkubWFwKHBvc3QgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wL1tpZF1cIiBhcz17YC9wLyR7cG9zdC5pZH1gfT5cbiAgICAgICAgICAgICAgPGE+e3Bvc3QudGl0bGV9PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICApKX1cbiAgICAgICAgPC9OYXZlYmFyPlxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvRkI4LmpwZ1wiLz5cbiAgICAgICAgPGgxPkdpdmUgYSBIZWxwaW5nIEhhbmQ8L2gxPlxuICAgICAgICA8aDI+T3VyIE1pc3Npb248L2gyPlxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvRkI5LmpwZ1wiLz5cbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL0ZCMTAuanBnXCIvPlxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvRkIxMS5qcGdcIi8+XG4gICAgICAgIDxoPlRISVMgSVMgV0hFUkUgWU9VIENBTiBHRVQgTU9SRSBJTkZPUk1BVElPTjwvaD5cbiAgICAgICAgPHA+YWN0dWFsbHkgdGhpcyBpcyBhbGwgYWJvdXQgd2hhdCB0aGUgZm91bmRhdGlvbiBpcyBhbGwgYWJvdXQ8L3A+XG4gICA8L3VsPiBcbiAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIGgxe1xuICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjEyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDJ7XG4gICAgICAgICAgICAgIGNvbG9yOmJsdWU7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6Ymx1ZTtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDoxMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgXG4gICBcbiAgICAgXG5cblxuICAgXG4gICk7XG4gICAgICAgIH1cbiJdfQ== */\n/*@ sourceURL=/home/ahebwa49/Desktop/Projects/akuweera-next js/samaku-akuwera/pages/index.js */"));
}

/***/ })

})
//# sourceMappingURL=navebar.js.6bb0265efd573d516a6b.hot-update.js.map