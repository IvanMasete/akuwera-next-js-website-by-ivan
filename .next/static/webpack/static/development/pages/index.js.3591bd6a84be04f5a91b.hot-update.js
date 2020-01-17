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
    className: "jsx-3572752229",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-3572752229",
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
      className: "jsx-3572752229",
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
      className: "jsx-3572752229",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, post.title)));
  })), __jsx("img", {
    src: "/images/FB8.jpg",
    className: "jsx-3572752229",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("h1", {
    className: "jsx-3572752229",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Give a Helping Hand"), __jsx("h3", {
    className: "jsx-3572752229",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx("h2", {
    className: "jsx-3572752229",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Our Mission"), __jsx("img", {
    src: "/images/FB9.jpg",
    className: "jsx-3572752229",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx("img", {
    src: "/images/FB10.jpg",
    className: "jsx-3572752229",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx("img", {
    src: "/images/FB11.jpg",
    className: "jsx-3572752229",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("h4", {
    className: "jsx-3572752229",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Find Us O")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3572752229",
    __self: this
  }, "h1.jsx-3572752229{color:white;background-color:black;text-align:center;margin-right:120px;}h2.jsx-3572752229{color:blue;text-align:center;}h4.jsx-3572752229{color:blue;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FoZWJ3YTQ5L0Rlc2t0b3AvUHJvamVjdHMvYWt1d2VlcmEtbmV4dCBqcy9zYW1ha3UtYWt1d2VyYS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQ2UsQUFHNEIsQUFNSCxBQUlGLFdBSFMsQUFJRixDQVZTLGlCQU81QixBQUlGLE1BVnlCLGtCQUNDLG1CQUN0QiIsImZpbGUiOiIvaG9tZS9haGVid2E0OS9EZXNrdG9wL1Byb2plY3RzL2FrdXdlZXJhLW5leHQganMvc2FtYWt1LWFrdXdlcmEvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4vbXlMYXlvdXQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBOYXZlYmFyIGZyb20gJy4vbmF2ZWJhcic7XG5cbmZ1bmN0aW9uIGdldFBvc3RzKCkge1xuICByZXR1cm4gW1xuICAgIHsgaWQ6ICdoZWxsby1uZXh0anMnLCB0aXRsZTogJ0hPTUUnIH0sXG4gICAgeyBpZDogJ2xlYXJuLW5leHRqcycsIHRpdGxlOiAnQWJvdXQnIH0sXG4gICAgeyBpZDogJ2RlcGxveS1uZXh0anMnLCB0aXRsZTogJ0dBTExFUlknIH1cbiAgXTtcbiAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2coKSB7XG4gIHJldHVybiAoXG4gICBcbiAgIDxkaXY+XG4gICAgICA8dWw+XG4gICAgICA8TmF2ZWJhcj5cblxuIFxuXG4gICAgICAgIHtnZXRQb3N0cygpLm1hcChwb3N0ID0+IChcbiAgICAgICAgICA8bGkga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcC9baWRdXCIgYXM9e2AvcC8ke3Bvc3QuaWR9YH0+XG4gICAgICAgICAgICAgIDxhPntwb3N0LnRpdGxlfTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgKSl9XG4gICAgICAgIDwvTmF2ZWJhcj5cbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL0ZCOC5qcGdcIi8+XG4gICAgICAgIDxoMT5HaXZlIGEgSGVscGluZyBIYW5kPC9oMT5cbiAgICAgICAgPGgzPjwvaDM+XG4gICAgICAgIDxoMj5PdXIgTWlzc2lvbjwvaDI+XG4gICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9GQjkuanBnXCIvPlxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvRkIxMC5qcGdcIi8+XG4gICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9GQjExLmpwZ1wiLz5cbiAgICAgICAgPGg0PkZpbmQgVXMgTzwvaDQ+XG4gICAgICAgIFxuICAgPC91bD4gXG4gICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBoMXtcbiAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDoxMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgye1xuICAgICAgICAgICAgICBjb2xvcjpibHVlO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICB9ICB9XG4gICAgICAgICAgaDR7XG4gICAgICAgICAgICBjb2xvcjpibHVlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICBcbiAgIFxuICAgICBcblxuXG4gICBcbiAgKTtcbiAgICAgICAgfVxuIl19 */\n/*@ sourceURL=/home/ahebwa49/Desktop/Projects/akuweera-next js/samaku-akuwera/pages/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.3591bd6a84be04f5a91b.hot-update.js.map