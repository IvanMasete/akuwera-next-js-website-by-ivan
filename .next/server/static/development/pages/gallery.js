module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/font-awesome/css/font-awesome.min.css":
/*!************************************************************!*\
  !*** ./node_modules/font-awesome/css/font-awesome.min.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = _router.default.router.pageLoader.prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    _router.default.prefetch(this.getHref());
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      return  false ? undefined : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign(_Object$assign({}, data), {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as));
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeMatch = route_matcher_1.getRouteMatcher(route_regex_1.getRouteRegex(route))(asPathname);

        if (!routeMatch) {
          const error = `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`;

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign(_Object$assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__NEXT_SPR ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

      if (true) {
        // mark it as prefetched for debugging in dev
        this.pageLoader.prefetched[route] = true;
        return;
      }

      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/gallery.js":
/*!**************************!*\
  !*** ./pages/gallery.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navebar */ "./pages/navebar.js");
var _jsxFileName = "/home/ahebwa49/Desktop/Projects/akuweera-next js/samaku-akuwera/pages/gallery.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Gallery = () => __jsx("div", {
  class: "img",
  className: "jsx-4147574721",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx(_navebar__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), __jsx("h1", {
  className: "jsx-4147574721",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "Gallery"), __jsx("li", {
  className: "jsx-4147574721",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("img", {
  src: "/images/FB.jpg",
  className: "jsx-4147574721",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), __jsx("img", {
  src: "/images/FB1.jpg",
  className: "jsx-4147574721",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), __jsx("img", {
  src: "/images/FB2.jpg",
  className: "jsx-4147574721",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), __jsx("img", {
  src: "/images/FB3.jpg",
  className: "jsx-4147574721",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
})), __jsx("li2", {
  className: "jsx-4147574721",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx("img", {
  src: "/images/FB4.jpg",
  className: "jsx-4147574721",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}), __jsx("img", {
  src: "/images/FB5.jpg",
  className: "jsx-4147574721",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}), __jsx("img", {
  src: "/images/FB6.jpg",
  className: "jsx-4147574721",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}), __jsx("img", {
  src: "/images/FB7.jpg",
  className: "jsx-4147574721",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
})), __jsx("li3", {
  className: "jsx-4147574721",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, __jsx("img", {
  src: "/images/FB8.jpg",
  className: "jsx-4147574721",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}), __jsx("img", {
  src: "/images/FB16.JPG",
  className: "jsx-4147574721",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}), __jsx("img", {
  src: "/images/FB10.jpg",
  className: "jsx-4147574721",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}), __jsx("img", {
  src: "/images/FB11.jpg",
  className: "jsx-4147574721",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
})), __jsx("li4", {
  className: "jsx-4147574721",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, __jsx("img", {
  src: "/images/FB12.jpg",
  className: "jsx-4147574721",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}), __jsx("img", {
  src: "/images/FB15.JPG",
  className: "jsx-4147574721",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}), __jsx("img", {
  src: "/images/FB14.JPG",
  className: "jsx-4147574721",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}), __jsx("img", {
  src: "/images/FB17.JPG",
  className: "jsx-4147574721",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
})), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "4147574721",
  __self: undefined
}, "h1.jsx-4147574721{color:blue;text-align:center;padding:15px;margin:300px;margin-top:-10px;margin-right:30px;}li4.jsx-4147574721{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-left:-300px;-webkit-box-pack:flext-end;-webkit-justify-content:flext-end;-ms-flex-pack:flext-end;justify-content:flext-end;padding:15px;margin-right:30px;margin-top:-900px;}li.jsx-4147574721{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-left:-300px;-webkit-box-pack:flext-end;-webkit-justify-content:flext-end;-ms-flex-pack:flext-end;justify-content:flext-end;padding:15px;margin-right:30px;margin-top:-1000px;min-height:120px;line-height:-300px;font-variant:small-caps;}li2.jsx-4147574721{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-left:-300px;-webkit-box-pack:flext-end;-webkit-justify-content:flext-end;-ms-flex-pack:flext-end;justify-content:flext-end;padding:15px;margin-right:30px;margin-top:-900px;min-height:120px;line-height:-300px;font-variant:small-caps;}li3.jsx-4147574721{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-left:-300px;-webkit-box-pack:flext-end;-webkit-justify-content:flext-end;-ms-flex-pack:flext-end;justify-content:flext-end;padding:15px;margin-right:30px;margin-top:-900px;min-height:120px;line-height:-300px;font-variant:small-caps;}img.jsx-4147574721{pading:15px;margin:300px;margin-top:0px;margin-right:-295px;border:4px solid grey;position:relative;width:300px;height:300px;margin-top:-50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FoZWJ3YTQ5L0Rlc2t0b3AvUHJvamVjdHMvYWt1d2VlcmEtbmV4dCBqcy9zYW1ha3UtYWt1d2VyYS9wYWdlcy9nYWxsZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDZ0IsQUFJMkIsQUFRUSxBQVVILEFBYUgsQUFhSCxBQWVDLFdBMURPLENBMkROLGFBQ0UsSUEzREQsV0E0RE0sRUEzRE4sYUFDSSxLQTJESSxZQTFESCxVQTJERCxRQTFEcEIsVUEyRGMsRUF4RE8sQUFVSCxBQWFILEFBYUgsVUFxQkcsYUFDSSxpQkFNcEIsNkJBL0RzQixBQVVILEFBYUgsQUFhSCxtQkFuQ2dCLEFBVUgsQUFhSCxBQWFILCtHQW5DSixBQVVILEFBYUgsQUFhSCxhQW5DYyxBQVVILEFBYUgsQUFhSCxrQkFuQ1MsQUFVRixBQWFKLEFBYUgsa0JBbENaLEFBc0JjLEFBYUgsQ0ExQk0sZ0JBY0QsQUFhSCxDQTFCTSxrQkFjRSxBQWFILENBMUJNLHVCQWU5QixBQWFILENBMUJNIiwiZmlsZSI6Ii9ob21lL2FoZWJ3YTQ5L0Rlc2t0b3AvUHJvamVjdHMvYWt1d2VlcmEtbmV4dCBqcy9zYW1ha3UtYWt1d2VyYS9wYWdlcy9nYWxsZXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdmViYXIgZnJvbSAnLi9uYXZlYmFyJzsgXG5jb25zdCBHYWxsZXJ5PSgpID0+IChcbiBcbiAgPGRpdiBjbGFzcz1cImltZ1wiPiAgXG4gICAgXG4gICAgICA8TmF2ZWJhci8+XG4gICAgPGgxPkdhbGxlcnk8L2gxPlxuICAgIDxsaT5cbiAgICA8aW1nIHNyYz1cIi9pbWFnZXMvRkIuanBnXCIvPlxuICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9GQjEuanBnXCIvPlxuICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9GQjIuanBnXCIvPlxuICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9GQjMuanBnXCIvPlxuICAgIDwvbGk+XG4gICAgPGxpMj5cbiAgICA8aW1nIHNyYz1cIi9pbWFnZXMvRkI0LmpwZ1wiLz5cbiAgICA8aW1nIHNyYz1cIi9pbWFnZXMvRkI1LmpwZ1wiLz5cbiAgICA8aW1nIHNyYz1cIi9pbWFnZXMvRkI2LmpwZ1wiLz5cbiAgICA8aW1nIHNyYz1cIi9pbWFnZXMvRkI3LmpwZ1wiLz5cbiAgICA8L2xpMj5cbiAgICA8bGkzPlxuICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9GQjguanBnXCIvPlxuICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9GQjE2LkpQR1wiLz5cbiAgICA8aW1nIHNyYz1cIi9pbWFnZXMvRkIxMC5qcGdcIi8+XG4gICAgPGltZyBzcmM9XCIvaW1hZ2VzL0ZCMTEuanBnXCIvPlxuICAgIDwvbGkzPlxuICAgIDxsaTQ+XG4gICAgPGltZyBzcmM9XCIvaW1hZ2VzL0ZCMTIuanBnXCIvPlxuICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9GQjE1LkpQR1wiLz5cbiAgICA8aW1nIHNyYz1cIi9pbWFnZXMvRkIxNC5KUEdcIi8+XG4gICAgXG4gICAgPGltZyBzcmM9XCIvaW1hZ2VzL0ZCMTcuSlBHXCIvPlxuICAgIDwvbGk0PlxuICAgXG4gICAgXG4gICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgICAgIGgxe1xuICAgICAgICAgICAgICAgIGNvbG9yOmJsdWU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzoxNXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjozMDBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOi0xMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDozMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGk0e1xuICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcbiAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0Oi0zMDBweDtcbiAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpmbGV4dC1lbmQ7XG4gICAgICAgICAgICAgICBwYWRkaW5nOjE1cHg7XG4gICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6MzBweDtcbiAgICAgICAgICAgICAgIG1hcmdpbi10b3A6LTkwMHB4O1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgIH1cbiAgICAgICAgICAgbGl7XG4gICAgICAgICAgICBkaXNwbGF5OmlubGluZS1mbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246cm93O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6LTMwMHB4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmZsZXh0LWVuZDtcbiAgICAgICAgICAgIHBhZGRpbmc6MTVweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDozMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDotMTAwMHB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDoxMjBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0Oi0zMDBweDtcbiAgICAgICAgICAgIGZvbnQtdmFyaWFudDpzbWFsbC1jYXBzO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgbGkye1xuICAgICAgICAgZGlzcGxheTppbmxpbmUtZmxleDtcbiAgICAgICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcbiAgICAgICAgIG1hcmdpbi1sZWZ0Oi0zMDBweDtcbiAgICAgICAgIGp1c3RpZnktY29udGVudDpmbGV4dC1lbmQ7XG4gICAgICAgICBwYWRkaW5nOjE1cHg7XG4gICAgICAgICBtYXJnaW4tcmlnaHQ6MzBweDtcbiAgICAgICAgIG1hcmdpbi10b3A6LTkwMHB4O1xuICAgICAgICAgbWluLWhlaWdodDoxMjBweDtcbiAgICAgICAgIGxpbmUtaGVpZ2h0Oi0zMDBweDtcbiAgICAgICAgIGZvbnQtdmFyaWFudDpzbWFsbC1jYXBzO1xuICAgICAgICAgXG4gICAgIH1cbiAgICAgbGkze1xuICAgICAgZGlzcGxheTppbmxpbmUtZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcbiAgICAgIG1hcmdpbi1sZWZ0Oi0zMDBweDtcbiAgICAgIGp1c3RpZnktY29udGVudDpmbGV4dC1lbmQ7XG4gICAgICBwYWRkaW5nOjE1cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6MzBweDtcbiAgICAgIG1hcmdpbi10b3A6LTkwMHB4O1xuICAgICAgbWluLWhlaWdodDoxMjBweDtcbiAgICAgIGxpbmUtaGVpZ2h0Oi0zMDBweDtcbiAgICAgIGZvbnQtdmFyaWFudDpzbWFsbC1jYXBzO1xuICAgICAgXG4gIH1cbiAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgIHBhZGluZzoxNXB4O1xuICAgICAgICAgICAgICAgbWFyZ2luOjMwMHB4O1xuICAgICAgICAgICAgICAgbWFyZ2luLXRvcDowcHg7XG4gICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6LTI5NXB4O1xuICAgICAgICAgICAgICAgYm9yZGVyOjRweCBzb2xpZCBncmV5O1xuICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgICAgICB3aWR0aDozMDBweDtcbiAgICAgICAgICAgICAgIGhlaWdodDozMDBweDtcbiAgICAgICAgICAgICAgIG1hcmdpbi10b3A6LTUwcHg7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgfVxuICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgIFxuICAgPC9kaXY+XG4pO1xuZXhwb3J0IGRlZmF1bHQgR2FsbGVyeTsiXX0= */\n/*@ sourceURL=/home/ahebwa49/Desktop/Projects/akuweera-next js/samaku-akuwera/pages/gallery.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Gallery);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
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
    className: "jsx-2367982223",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-2367982223",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(_navebar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, getPosts().map(post => __jsx("li", {
    key: post.id,
    className: "jsx-2367982223",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/p/[id]",
    as: `/p/${post.id}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2367982223",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, post.title))))), __jsx("img", {
    src: "/images/FB8.jpg",
    className: "jsx-2367982223",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx("h1", {
    className: "jsx-2367982223",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Give a Helping Hand"), __jsx("h3", {
    className: "jsx-2367982223",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx("h2", {
    className: "jsx-2367982223",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Our Mission"), __jsx("img", {
    src: "/images/FB9.jpg",
    className: "jsx-2367982223",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx("img", {
    src: "/images/FB10.jpg",
    className: "jsx-2367982223",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("img", {
    src: "/images/FB11.jpg",
    className: "jsx-2367982223",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx("h4", {
    className: "jsx-2367982223",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Find Us On Social:")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2367982223",
    __self: this
  }, "h1.jsx-2367982223{color:white;background-color:black;text-align:center;margin-right:120px;font-weight:bold;font-size:big;}h2.jsx-2367982223,.jsx-2367982223{color:blue;text-align:center;}h4.jsx-2367982223{color:blue;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FoZWJ3YTQ5L0Rlc2t0b3AvUHJvamVjdHMvYWt1d2VlcmEtbmV4dCBqcy9zYW1ha3UtYWt1d2VyYS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQ2UsQUFHNEIsQUFRSCxBQUlGLFdBSFMsQUFJRixDQVpTLGlCQVM1QixBQUlGLE1BWnlCLGtCQUNDLG1CQUNGLGlCQUNILGNBQ2pCIiwiZmlsZSI6Ii9ob21lL2FoZWJ3YTQ5L0Rlc2t0b3AvUHJvamVjdHMvYWt1d2VlcmEtbmV4dCBqcy9zYW1ha3UtYWt1d2VyYS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi9teUxheW91dCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IE5hdmViYXIgZnJvbSAnLi9uYXZlYmFyJztcblxuZnVuY3Rpb24gZ2V0UG9zdHMoKSB7XG4gIHJldHVybiBbXG4gICAgeyBpZDogJ2hlbGxvLW5leHRqcycsIHRpdGxlOiAnSE9NRScgfSxcbiAgICB7IGlkOiAnbGVhcm4tbmV4dGpzJywgdGl0bGU6ICdBYm91dCcgfSxcbiAgICB7IGlkOiAnZGVwbG95LW5leHRqcycsIHRpdGxlOiAnR0FMTEVSWScgfVxuICBdO1xuICB9XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xuICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgIDx1bD5cbiAgICAgIDxOYXZlYmFyPlxue2dldFBvc3RzKCkubWFwKHBvc3QgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wL1tpZF1cIiBhcz17YC9wLyR7cG9zdC5pZH1gfT5cbiAgICAgICAgICAgICAgPGE+e3Bvc3QudGl0bGV9PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICAgICAgPC9OYXZlYmFyPlxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvRkI4LmpwZ1wiLz5cbiAgICAgICAgPGgxPkdpdmUgYSBIZWxwaW5nIEhhbmQ8L2gxPlxuICAgICAgICA8aDM+PC9oMz5cbiAgICAgICAgPGgyPk91ciBNaXNzaW9uPC9oMj5cbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL0ZCOS5qcGdcIi8+XG4gICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9GQjEwLmpwZ1wiLz5cbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL0ZCMTEuanBnXCIvPlxuICAgICAgICA8aDQ+RmluZCBVcyBPbiBTb2NpYWw6PC9oND5cbiAgICAgICAgPC91bD4gXG4gICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBoMXtcbiAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDoxMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTpiaWc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMix7XG4gICAgICAgICAgICAgIGNvbG9yOmJsdWU7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgIH0gIH1cbiAgICAgICAgICBoNHtcbiAgICAgICAgICAgIGNvbG9yOmJsdWU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgKTtcbiAgICAgICAgfVxuIl19 */\n/*@ sourceURL=/home/ahebwa49/Desktop/Projects/akuweera-next js/samaku-akuwera/pages/index.js */"));
}

/***/ }),

/***/ "./pages/menu.js":
/*!***********************!*\
  !*** ./pages/menu.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _myLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myLayout */ "./pages/myLayout.js");
/* harmony import */ var _navebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navebar */ "./pages/navebar.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index */ "./pages/index.js");
var _jsxFileName = "/home/ahebwa49/Desktop/Projects/akuweera-next js/samaku-akuwera/pages/menu.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const menu = () => __jsx("div", {
  className: "jsx-2586283321",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("ul", {
  className: "jsx-2586283321",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx(_navebar__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), __jsx("li", {
  className: "jsx-2586283321",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/index",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-2586283321",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "Home"))), __jsx("li", {
  className: "jsx-2586283321",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/menu",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-2586283321",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "Menu"))), __jsx("li", {
  className: "jsx-2586283321",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/information",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-2586283321",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, "Information"))), __jsx("li", {
  className: "jsx-2586283321",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/gallery",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-2586283321",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, "Gallery"))), __jsx("li", {
  className: "jsx-2586283321",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/Contact",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-2586283321",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, "Contact"))), __jsx("img", {
  src: "/images/FB8.jpg",
  className: "jsx-2586283321",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), __jsx("h1", {
  className: "jsx-2586283321",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, "Give a Helping Hand"), __jsx("h3", {
  className: "jsx-2586283321",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}), __jsx("h2", {
  className: "jsx-2586283321",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, "Our Mission"), __jsx("img", {
  src: "/images/FB9.jpg",
  className: "jsx-2586283321",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}), __jsx("img", {
  src: "/images/FB10.jpg",
  className: "jsx-2586283321",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}), __jsx("img", {
  src: "/images/FB11.jpg",
  className: "jsx-2586283321",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}), __jsx("h4", {
  className: "jsx-2586283321",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, "Find Us On Social:")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2586283321",
  __self: undefined
}, "h1.jsx-2586283321{color:white;background-color:black;text-align:center;margin-right:120px;}h2.jsx-2586283321{color:blue;text-align:center;}h4.jsx-2586283321{color:blue;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FoZWJ3YTQ5L0Rlc2t0b3AvUHJvamVjdHMvYWt1d2VlcmEtbmV4dCBqcy9zYW1ha3UtYWt1d2VyYS9wYWdlcy9tZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCb0IsQUFHNEIsQUFNSCxBQUlGLFdBSFMsQUFJRixDQVZTLGlCQU81QixBQUlGLE1BVnlCLGtCQUNDLG1CQUN0QiIsImZpbGUiOiIvaG9tZS9haGVid2E0OS9EZXNrdG9wL1Byb2plY3RzL2FrdXdlZXJhLW5leHQganMvc2FtYWt1LWFrdXdlcmEvcGFnZXMvbWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vbXlMYXlvdXQnO1xuaW1wb3J0IE5hdmViYXIgZnJvbSAnLi9uYXZlYmFyJ1xuaW1wb3J0IEluZGV4IGZyb20gJy4vaW5kZXgnXG5jb25zdCBtZW51PSgpID0+IChcbiAgIDxkaXY+XG4gICA8dWw+XG4gICA8TmF2ZWJhci8+XG4gICAgICAgIDxsaT48TGluayBocmVmPVwiL2luZGV4XCI+PGE+SG9tZTwvYT48L0xpbms+PC9saT5cbiAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvbWVudVwiPjxhPk1lbnU8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9pbmZvcm1hdGlvblwiPjxhPkluZm9ybWF0aW9uPC9hPjwvTGluaz48L2xpPlxuICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvZ2FsbGVyeVwiPjxhPkdhbGxlcnk8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9Db250YWN0XCI+PGE+Q29udGFjdDwvYT48L0xpbms+PC9saT5cbiAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9GQjguanBnXCIvPlxuICAgICAgICA8aDE+R2l2ZSBhIEhlbHBpbmcgSGFuZDwvaDE+XG4gICAgICAgIDxoMz48L2gzPlxuICAgICAgICA8aDI+T3VyIE1pc3Npb248L2gyPlxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvRkI5LmpwZ1wiLz5cbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL0ZCMTAuanBnXCIvPlxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvRkIxMS5qcGdcIi8+XG4gICAgICAgIDxoND5GaW5kIFVzIE9uIFNvY2lhbDo8L2g0PlxuICAgICAgICA8L3VsPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBoMXtcbiAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDoxMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgye1xuICAgICAgICAgICAgICBjb2xvcjpibHVlO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICB9ICB9XG4gICAgICAgICAgaDR7XG4gICAgICAgICAgICBjb2xvcjpibHVlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgIDwvZGl2PlxuICAgICAgICk7XG5leHBvcnQgZGVmYXVsdCBtZW51O1xuICJdfQ== */\n/*@ sourceURL=/home/ahebwa49/Desktop/Projects/akuweera-next js/samaku-akuwera/pages/menu.js */"));

/* harmony default export */ __webpack_exports__["default"] = (menu);

/***/ }),

/***/ "./pages/myLayout.js":
/*!***************************!*\
  !*** ./pages/myLayout.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navebar */ "./pages/navebar.js");
var _jsxFileName = "/home/ahebwa49/Desktop/Projects/akuweera-next js/samaku-akuwera/pages/myLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const layoutStyle = {
  margin: 10,
  padding: 60,
  border: '2px solid #DDD'
};

const Layout = props => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
});

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/navebar.js":
/*!**************************!*\
  !*** ./pages/navebar.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _myLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myLayout */ "./pages/myLayout.js");
/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! font-awesome/css/font-awesome.min.css */ "./node_modules/font-awesome/css/font-awesome.min.css");
/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu */ "./pages/menu.js");
var _jsxFileName = "/home/ahebwa49/Desktop/Projects/akuweera-next js/samaku-akuwera/pages/navebar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const navebar = () => __jsx("div", {
  className: "jsx-2722587276",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx(_myLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), __jsx("ul", {
  className: "jsx-2722587276",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("header", {
  className: "jsx-2722587276",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("img", {
  src: "/images/FB13.JPG",
  className: "jsx-2722587276",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
})), __jsx("a", {
  className: "jsx-2722587276",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, "+256773787253/"), __jsx("a", {
  className: "jsx-2722587276",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, "+1413726-5454"), __jsx("a1", {
  className: "jsx-2722587276",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, "Call us"), __jsx("li", {
  className: "jsx-2722587276",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/index",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-2722587276",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx("img", {
  class: "gb_ua gb_7d",
  alt: "",
  "aria-hidden": "true",
  src: "https://www.gstatic.com/images/branding/product/1x/sheets_48dp.png",
  srcset: "https://www.gstatic.com/images/branding/product/1x/sheets_48dp.png 1x, https://www.gstatic.com/images/branding/product/2x/sheets_48dp.png 2x ",
  className: "jsx-2722587276",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}), __jsx("span", {
  class: "gb_6d gb_zc",
  className: "jsx-2722587276",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, "MENU")))), __jsx("li", {
  className: "jsx-2722587276",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-2722587276",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx("i", {
  className: "jsx-2722587276" + " " + "fa fa-bars",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}), "Home"))), __jsx("li", {
  className: "jsx-2722587276",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/About",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-2722587276",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx("i", {
  className: "jsx-2722587276" + " " + "fa fa-user",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}), "About"))), __jsx("li", {
  className: "jsx-2722587276",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/gallery",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-2722587276",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, __jsx("i", {
  className: "jsx-2722587276" + " " + "fa fa-camera",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}), "Gallery"))), __jsx("li", {
  className: "jsx-2722587276",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/Contact",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-2722587276",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, __jsx("i", {
  className: "jsx-2722587276" + " " + "fa fa-inbox",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}), "Contact"))), __jsx("li", {
  className: "jsx-2722587276",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/Donate",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-2722587276",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, __jsx("i", {
  className: "jsx-2722587276" + " " + "fa fa-book",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}), "Donate")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2722587276",
  __self: undefined
}, "ul.jsx-2722587276{background:#333;color:#fff;list-style:none;text-align:center;margin-left:-30px;padding:60px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;min-height:120px;line-height:100px;overflow:hidden;width:100%;}ul.jsx-2722587276 li.jsx-2722587276{font-size:18px;text-alignment:center;padding:50;width:10;position:relative;margin-left:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;float:left;color:#f2f2f2;font-family:\"Times New Roman\" Times,serif;font-style:italic;font-weight:bold;font-variant:big-caps;}ul.jsx-2722587276 li.jsx-2722587276 a.jsx-2722587276{color:#f2f2f2;\\ text-decoration:none;display:block;}header.jsx-2722587276{text-align:center;background-color:f1f1f1;}a1.jsx-2722587276{color:blue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FoZWJ3YTQ5L0Rlc2t0b3AvUHJvamVjdHMvYWt1d2VlcmEtbmV4dCBqcy9zYW1ha3UtYWt1d2VyYS9wYWdlcy9uYXZlYmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDZ0IsQUFJd0IsQUFpQkEsQUFlRCxBQUtJLEFBSVAsV0FDbEIsR0FUNEIsQ0FmQyxDQWpCWixFQXFDYyxTQXBDUixVQWlCTCxBQWVHLEtBS2pCLENBcENvQixLQWlCUixHQWVSLE1BZGlCLElBakJELGNBa0JBLElBakJMLGFBQ1UsQUFpQlQsMEVBQ0YsV0FDRyxjQWxCSyxBQW1Cd0IsMENBQ3pCLGtCQUNELGlCQUNNLHNCQUMxQixHQXRCcUIscUVBQ0oseURBQ2EseUdBQ1gsaUJBQ0Msa0JBQ0YsZ0JBQ0wsV0FDViIsImZpbGUiOiIvaG9tZS9haGVid2E0OS9EZXNrdG9wL1Byb2plY3RzL2FrdXdlZXJhLW5leHQganMvc2FtYWt1LWFrdXdlcmEvcGFnZXMvbmF2ZWJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vbXlMYXlvdXQnO1xuaW1wb3J0ICdmb250LWF3ZXNvbWUvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzJztcbmltcG9ydCBNZW51IGZyb20gJy4vbWVudSc7XG5jb25zdCBuYXZlYmFyPSgpID0+IChcbiAgICA8ZGl2PlxuICAgICAgIDxMYXlvdXQvPlxuICAgICAgICA8dWw+XG4gICAgICAgIDxoZWFkZXI+XG4gICAgPGltZyBzcmM9XCIvaW1hZ2VzL0ZCMTMuSlBHXCIvPiAgXG4gICAgPC9oZWFkZXI+XG4gICAgPGE+KzI1Njc3Mzc4NzI1My88L2E+XG4gICAgPGE+KzE0MTM3MjYtNTQ1NDwvYT4gXG4gIDxhMT5DYWxsIHVzPC9hMT5cbiAgICA8bGk+PExpbmsgaHJlZj1cIi9pbmRleFwiPlxuICAgIDxhPlxuICAgIDxpbWcgY2xhc3M9XCJnYl91YSBnYl83ZFwiIGFsdD1cIlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vd3d3LmdzdGF0aWMuY29tL2ltYWdlcy9icmFuZGluZy9wcm9kdWN0LzF4L3NoZWV0c180OGRwLnBuZ1wiIHNyY3NldD1cImh0dHBzOi8vd3d3LmdzdGF0aWMuY29tL2ltYWdlcy9icmFuZGluZy9wcm9kdWN0LzF4L3NoZWV0c180OGRwLnBuZyAxeCwgaHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vaW1hZ2VzL2JyYW5kaW5nL3Byb2R1Y3QvMngvc2hlZXRzXzQ4ZHAucG5nIDJ4IFwiLz5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJnYl82ZCBnYl96Y1wiPk1FTlU8L3NwYW4+XG4gICAgIDwvYT5cbiAgICA8L0xpbms+XG4gICAgPC9saT5cbiAgICA8bGk+PExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgPGE+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWJhcnNcIj48L2k+XG4gICAgICAgIEhvbWU8L2E+XG4gICAgICA8L0xpbms+PC9saT5cbiAgICAgICAgIDxsaT48TGluayBocmVmPVwiL0Fib3V0XCI+PGE+PGkgY2xhc3NOYW1lPVwiZmEgZmEtdXNlclwiPjwvaT5cbiAgICAgICAgIEFib3V0PC9hPlxuICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgPC9saT5cbiAgICAgICAgIDxsaT48TGluayBocmVmPVwiL2dhbGxlcnlcIj48YT48aSBjbGFzc05hbWU9XCJmYSBmYS1jYW1lcmFcIj48L2k+R2FsbGVyeTwvYT48L0xpbms+PC9saT5cbiAgICAgICAgIDxsaT48TGluayBocmVmPVwiL0NvbnRhY3RcIj5cbiAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1pbmJveFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgQ29udGFjdDwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvRG9uYXRlXCI+PGE+PGkgY2xhc3NOYW1lPVwiZmEgZmEtYm9va1wiPjwvaT5Eb25hdGU8L2E+PC9MaW5rPjwvbGk+IFxuICAgICAgICAgPC91bD4gXG4gICAgPHN0eWxlIGpzeD57YFxuICAgIHVsIHtcbiAgICAgICAgXG4gICAgICAgIGJhY2tncm91bmQ6IzMzMztcbiAgICAgICAgY29sb3I6I2ZmZjtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1sZWZ0Oi0zMHB4O1xuICAgICAgICBwYWRkaW5nOjYwcHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6aW5saW5lLWZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcbiAgICAgICAgZmxleC13cmFwOndyYXA7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgbWluLWhlaWdodDoxMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6MTAwcHg7XG4gICAgICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgfVxuICAgICB1bCBsaSB7XG4gICAgICAgICBmb250LXNpemU6MThweDtcbiAgICAgICAgIHRleHQtYWxpZ25tZW50OmNlbnRlcjtcbiAgICAgICAgIHBhZGRpbmc6NTA7XG4gICAgICAgICB3aWR0aDoxMDtcbiAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAgbWFyZ2luLWxlZnQ6NDBweDtcbiAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICAgICBjb2xvcjojZjJmMmYyO1xuICAgICAgICAgZm9udC1mYW1pbHk6XCJUaW1lcyBOZXcgUm9tYW5cIiBUaW1lcywgc2VyaWY7XG4gICAgICAgICBmb250LXN0eWxlOml0YWxpYztcbiAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgICAgICBmb250LXZhcmlhbnQ6IGJpZy1jYXBzO1xuICAgICB9XG4gICAgIHVsIGxpIGF7XG4gICAgICAgICBjb2xvcjojZjJmMmYyO1xcXG4gICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgICB9XG4gICAgIGhlYWRlcntcbiAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpmMWYxZjE7XG4gICAgIH1cbiAgICAgYTF7XG4gICAgICAgICBjb2xvcjpibHVlO1xuIH1cbiAgICAgYH08L3N0eWxlPlxuICAgICA8L2Rpdj5cbik7XG5leHBvcnQgZGVmYXVsdCBuYXZlYmFyO1xuICJdfQ== */\n/*@ sourceURL=/home/ahebwa49/Desktop/Projects/akuweera-next js/samaku-akuwera/pages/navebar.js */"));

/* harmony default export */ __webpack_exports__["default"] = (navebar);

/***/ }),

/***/ 4:
/*!********************************!*\
  !*** multi ./pages/gallery.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ahebwa49/Desktop/Projects/akuweera-next js/samaku-akuwera/pages/gallery.js */"./pages/gallery.js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=gallery.js.map