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
    className: "jsx-3860206416",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-3860206416",
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
      className: "jsx-3860206416",
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
      className: "jsx-3860206416",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, post.title)));
  })), __jsx("img", {
    src: "/images/FB8.jpg",
    className: "jsx-3860206416",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("h1", {
    className: "jsx-3860206416",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Give a Helping Hand"), __jsx("img", {
    src: "/images/FB9.jpg",
    className: "jsx-3860206416",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx("img", {
    src: "/images/FB10.jpg",
    className: "jsx-3860206416",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx("img", {
    src: "/images/FB11.jpg",
    className: "jsx-3860206416",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx("h", {
    className: "jsx-3860206416",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "THIS IS WHERE YOU CAN GET MORE INFORMATION"), __jsx("p", {
    className: "jsx-3860206416",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "actually this is all about what the foundation is all about")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3860206416",
    __self: this
  }, "h1.jsx-3860206416,h2.jsx-3860206416{color:white;back text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FoZWJ3YTQ5L0Rlc2t0b3AvUHJvamVjdHMvYWt1d2VlcmEtbmV4dCBqcy9zYW1ha3UtYWt1d2VyYS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q2UsQUFHNEIsWUFFTSx1QkFDckIiLCJmaWxlIjoiL2hvbWUvYWhlYndhNDkvRGVza3RvcC9Qcm9qZWN0cy9ha3V3ZWVyYS1uZXh0IGpzL3NhbWFrdS1ha3V3ZXJhL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuL215TGF5b3V0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgTmF2ZWJhciBmcm9tICcuL25hdmViYXInO1xuXG5mdW5jdGlvbiBnZXRQb3N0cygpIHtcbiAgcmV0dXJuIFtcbiAgICB7IGlkOiAnaGVsbG8tbmV4dGpzJywgdGl0bGU6ICdIT01FJyB9LFxuICAgIHsgaWQ6ICdsZWFybi1uZXh0anMnLCB0aXRsZTogJ0Fib3V0JyB9LFxuICAgIHsgaWQ6ICdkZXBsb3ktbmV4dGpzJywgdGl0bGU6ICdHQUxMRVJZJyB9XG4gIF07XG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xuICByZXR1cm4gKFxuICAgXG4gICA8ZGl2PlxuICAgICAgPHVsPlxuICAgICAgPE5hdmViYXI+XG5cbiBcblxuICAgICAgICB7Z2V0UG9zdHMoKS5tYXAocG9zdCA9PiAoXG4gICAgICAgICAgPGxpIGtleT17cG9zdC5pZH0+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3AvW2lkXVwiIGFzPXtgL3AvJHtwb3N0LmlkfWB9PlxuICAgICAgICAgICAgICA8YT57cG9zdC50aXRsZX08L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICkpfVxuICAgICAgICA8L05hdmViYXI+XG4gICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9GQjguanBnXCIvPlxuICAgICAgICA8aDE+R2l2ZSBhIEhlbHBpbmcgSGFuZDwvaDE+XG4gICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9GQjkuanBnXCIvPlxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvRkIxMC5qcGdcIi8+XG4gICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9GQjExLmpwZ1wiLz5cbiAgICAgICAgPGg+VEhJUyBJUyBXSEVSRSBZT1UgQ0FOIEdFVCBNT1JFIElORk9STUFUSU9OPC9oPlxuICAgICAgICA8cD5hY3R1YWxseSB0aGlzIGlzIGFsbCBhYm91dCB3aGF0IHRoZSBmb3VuZGF0aW9uIGlzIGFsbCBhYm91dDwvcD5cbiAgIDwvdWw+IFxuICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgaDEsaDJ7XG4gICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgICAgICAgICAgYmFja1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgIFxuICAgXG4gICAgIFxuXG5cbiAgIFxuICApO1xuICAgICAgICB9XG4iXX0= */\n/*@ sourceURL=/home/ahebwa49/Desktop/Projects/akuweera-next js/samaku-akuwera/pages/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.2dd2ad51b71b35a17153.hot-update.js.map