/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/screenfull/dist/screenfull.js":
/*!****************************************************!*\
  !*** ./node_modules/screenfull/dist/screenfull.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
* screenfull
* v4.2.1 - 2019-07-27
* (c) Sindre Sorhus; MIT License
*/
(function () {
  'use strict';

  var document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};
  var isCommonjs =  true && module.exports;
  var keyboardAllowed = typeof Element !== 'undefined' && 'ALLOW_KEYBOARD_INPUT' in Element;

  var fn = function () {
    var val;
    var fnMap = [['requestFullscreen', 'exitFullscreen', 'fullscreenElement', 'fullscreenEnabled', 'fullscreenchange', 'fullscreenerror'], // New WebKit
    ['webkitRequestFullscreen', 'webkitExitFullscreen', 'webkitFullscreenElement', 'webkitFullscreenEnabled', 'webkitfullscreenchange', 'webkitfullscreenerror'], // Old WebKit (Safari 5.1)
    ['webkitRequestFullScreen', 'webkitCancelFullScreen', 'webkitCurrentFullScreenElement', 'webkitCancelFullScreen', 'webkitfullscreenchange', 'webkitfullscreenerror'], ['mozRequestFullScreen', 'mozCancelFullScreen', 'mozFullScreenElement', 'mozFullScreenEnabled', 'mozfullscreenchange', 'mozfullscreenerror'], ['msRequestFullscreen', 'msExitFullscreen', 'msFullscreenElement', 'msFullscreenEnabled', 'MSFullscreenChange', 'MSFullscreenError']];
    var i = 0;
    var l = fnMap.length;
    var ret = {};

    for (; i < l; i++) {
      val = fnMap[i];

      if (val && val[1] in document) {
        for (i = 0; i < val.length; i++) {
          ret[fnMap[0][i]] = val[i];
        }

        return ret;
      }
    }

    return false;
  }();

  var eventNameMap = {
    change: fn.fullscreenchange,
    error: fn.fullscreenerror
  };
  var screenfull = {
    request: function (elem) {
      return new Promise(function (resolve, reject) {
        var request = fn.requestFullscreen;

        var onFullScreenEntered = function () {
          this.off('change', onFullScreenEntered);
          resolve();
        }.bind(this);

        this.on('change', onFullScreenEntered);
        elem = elem || document.documentElement;
        var promise; // Work around Safari 5.1 bug: reports support for
        // keyboard in fullscreen even though it doesn't.
        // Browser sniffing, since the alternative with
        // setTimeout is even worse.

        if (/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)) {
          promise = elem[request]();
        } else {
          promise = elem[request](keyboardAllowed ? Element.ALLOW_KEYBOARD_INPUT : {});
        }

        Promise.resolve(promise).catch(reject);
      }.bind(this));
    },
    exit: function () {
      return new Promise(function (resolve) {
        if (!this.isFullscreen) {
          resolve();
          return;
        }

        var onFullScreenExit = function () {
          this.off('change', onFullScreenExit);
          resolve();
        }.bind(this);

        document[fn.exitFullscreen]();
        this.on('change', onFullScreenExit);
      }.bind(this));
    },
    toggle: function (elem) {
      return this.isFullscreen ? this.exit() : this.request(elem);
    },
    onchange: function (callback) {
      this.on('change', callback);
    },
    onerror: function (callback) {
      this.on('error', callback);
    },
    on: function (event, callback) {
      var eventName = eventNameMap[event];

      if (eventName) {
        document.addEventListener(eventName, callback, false);
      }
    },
    off: function (event, callback) {
      var eventName = eventNameMap[event];

      if (eventName) {
        document.removeEventListener(eventName, callback, false);
      }
    },
    raw: fn
  };

  if (!fn) {
    if (isCommonjs) {
      module.exports = false;
    } else {
      window.screenfull = false;
    }

    return;
  }

  Object.defineProperties(screenfull, {
    isFullscreen: {
      get: function () {
        return Boolean(document[fn.fullscreenElement]);
      }
    },
    element: {
      enumerable: true,
      get: function () {
        return document[fn.fullscreenElement];
      }
    },
    enabled: {
      enumerable: true,
      get: function () {
        // Coerce to boolean in case of old WebKit
        return Boolean(document[fn.fullscreenEnabled]);
      }
    }
  });

  if (isCommonjs) {
    module.exports = screenfull; // TODO: remove this in the next major version

    module.exports.default = screenfull;
  } else {
    window.screenfull = screenfull;
  }
})();

/***/ }),

/***/ "./src/js/global.js":
/*!**************************!*\
  !*** ./src/js/global.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _screenfull = _interopRequireDefault(__webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js"));

var menuToggler = document.querySelector(".menu-toggler");
var menu = document.querySelector(".menu");
menuToggler.addEventListener("click", function () {
  menu.classList.toggle("menu_active");
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = menuToggler.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var line = _step.value;
      line.classList.toggle("menu-toggler__line_active");
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
});
var test = document.querySelector(".test");
test.addEventListener("click", function () {
  _screenfull.default.toggle();
});

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/js/global.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /usr/local/www/sites/everest.1mcg.ru/src/js/global.js */"./src/js/global.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zY3JlZW5mdWxsL2Rpc3Qvc2NyZWVuZnVsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZ2xvYmFsLmpzIl0sIm5hbWVzIjpbIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJvYmoiLCJfX2VzTW9kdWxlIiwibW9kdWxlIiwiZXhwb3J0cyIsImRvY3VtZW50Iiwid2luZG93IiwiaXNDb21tb25qcyIsImtleWJvYXJkQWxsb3dlZCIsIkVsZW1lbnQiLCJmbiIsInZhbCIsImZuTWFwIiwiaSIsImwiLCJsZW5ndGgiLCJyZXQiLCJldmVudE5hbWVNYXAiLCJjaGFuZ2UiLCJmdWxsc2NyZWVuY2hhbmdlIiwiZXJyb3IiLCJmdWxsc2NyZWVuZXJyb3IiLCJzY3JlZW5mdWxsIiwicmVxdWVzdCIsImVsZW0iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3RGdWxsc2NyZWVuIiwib25GdWxsU2NyZWVuRW50ZXJlZCIsIm9mZiIsImJpbmQiLCJvbiIsImRvY3VtZW50RWxlbWVudCIsInByb21pc2UiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiQUxMT1dfS0VZQk9BUkRfSU5QVVQiLCJjYXRjaCIsImV4aXQiLCJpc0Z1bGxzY3JlZW4iLCJvbkZ1bGxTY3JlZW5FeGl0IiwiZXhpdEZ1bGxzY3JlZW4iLCJ0b2dnbGUiLCJvbmNoYW5nZSIsImNhbGxiYWNrIiwib25lcnJvciIsImV2ZW50IiwiZXZlbnROYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyYXciLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZ2V0IiwiQm9vbGVhbiIsImZ1bGxzY3JlZW5FbGVtZW50IiwiZWxlbWVudCIsImVudW1lcmFibGUiLCJlbmFibGVkIiwiZnVsbHNjcmVlbkVuYWJsZWQiLCJkZWZhdWx0IiwibWVudVRvZ2dsZXIiLCJxdWVyeVNlbGVjdG9yIiwibWVudSIsImNsYXNzTGlzdCIsImNoaWxkcmVuIiwibGluZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLFNBQVNBLHNCQUFULENBQWdDQyxHQUFoQyxFQUFxQztBQUNuQyxTQUFPQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWCxHQUF3QkQsR0FBeEIsR0FBOEI7QUFDbkMsZUFBV0E7QUFEd0IsR0FBckM7QUFHRDs7QUFFREUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCSixzQkFBakIsQzs7Ozs7Ozs7Ozs7QUNOQTs7Ozs7QUFLQSxDQUFDLFlBQVk7QUFDWjs7QUFFQSxNQUFJSyxRQUFRLEdBQUcsT0FBT0MsTUFBUCxLQUFrQixXQUFsQixJQUFpQyxPQUFPQSxNQUFN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biBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiLyohXG4qIHNjcmVlbmZ1bGxcbiogdjQuMi4xIC0gMjAxOS0wNy0yN1xuKiAoYykgU2luZHJlIFNvcmh1czsgTUlUIExpY2Vuc2VcbiovXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGRvY3VtZW50ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuZG9jdW1lbnQgOiB7fTtcblx0dmFyIGlzQ29tbW9uanMgPSB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cztcblx0dmFyIGtleWJvYXJkQWxsb3dlZCA9IHR5cGVvZiBFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiAnQUxMT1dfS0VZQk9BUkRfSU5QVVQnIGluIEVsZW1lbnQ7XG5cblx0dmFyIGZuID0gKGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgdmFsO1xuXG5cdFx0dmFyIGZuTWFwID0gW1xuXHRcdFx0W1xuXHRcdFx0XHQncmVxdWVzdEZ1bGxzY3JlZW4nLFxuXHRcdFx0XHQnZXhpdEZ1bGxzY3JlZW4nLFxuXHRcdFx0XHQnZnVsbHNjcmVlbkVsZW1lbnQnLFxuXHRcdFx0XHQnZnVsbHNjcmVlbkVuYWJsZWQnLFxuXHRcdFx0XHQnZnVsbHNjcmVlbmNoYW5nZScsXG5cdFx0XHRcdCdmdWxsc2NyZWVuZXJyb3InXG5cdFx0XHRdLFxuXHRcdFx0Ly8gTmV3IFdlYktpdFxuXHRcdFx0W1xuXHRcdFx0XHQnd2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4nLFxuXHRcdFx0XHQnd2Via2l0RXhpdEZ1bGxzY3JlZW4nLFxuXHRcdFx0XHQnd2Via2l0RnVsbHNjcmVlbkVsZW1lbnQnLFxuXHRcdFx0XHQnd2Via2l0RnVsbHNjcmVlbkVuYWJsZWQnLFxuXHRcdFx0XHQnd2Via2l0ZnVsbHNjcmVlbmNoYW5nZScsXG5cdFx0XHRcdCd3ZWJraXRmdWxsc2NyZWVuZXJyb3InXG5cblx0XHRcdF0sXG5cdFx0XHQvLyBPbGQgV2ViS2l0IChTYWZhcmkgNS4xKVxuXHRcdFx0W1xuXHRcdFx0XHQnd2Via2l0UmVxdWVzdEZ1bGxTY3JlZW4nLFxuXHRcdFx0XHQnd2Via2l0Q2FuY2VsRnVsbFNjcmVlbicsXG5cdFx0XHRcdCd3ZWJraXRDdXJyZW50RnVsbFNjcmVlbkVsZW1lbnQnLFxuXHRcdFx0XHQnd2Via2l0Q2FuY2VsRnVsbFNjcmVlbicsXG5cdFx0XHRcdCd3ZWJraXRmdWxsc2NyZWVuY2hhbmdlJyxcblx0XHRcdFx0J3dlYmtpdGZ1bGxzY3JlZW5lcnJvcidcblxuXHRcdFx0XSxcblx0XHRcdFtcblx0XHRcdFx0J21velJlcXVlc3RGdWxsU2NyZWVuJyxcblx0XHRcdFx0J21vekNhbmNlbEZ1bGxTY3JlZW4nLFxuXHRcdFx0XHQnbW96RnVsbFNjcmVlbkVsZW1lbnQnLFxuXHRcdFx0XHQnbW96RnVsbFNjcmVlbkVuYWJsZWQnLFxuXHRcdFx0XHQnbW96ZnVsbHNjcmVlbmNoYW5nZScsXG5cdFx0XHRcdCdtb3pmdWxsc2NyZWVuZXJyb3InXG5cdFx0XHRdLFxuXHRcdFx0W1xuXHRcdFx0XHQnbXNSZXF1ZXN0RnVsbHNjcmVlbicsXG5cdFx0XHRcdCdtc0V4aXRGdWxsc2NyZWVuJyxcblx0XHRcdFx0J21zRnVsbHNjcmVlbkVsZW1lbnQnLFxuXHRcdFx0XHQnbXNGdWxsc2NyZWVuRW5hYmxlZCcsXG5cdFx0XHRcdCdNU0Z1bGxzY3JlZW5DaGFuZ2UnLFxuXHRcdFx0XHQnTVNGdWxsc2NyZWVuRXJyb3InXG5cdFx0XHRdXG5cdFx0XTtcblxuXHRcdHZhciBpID0gMDtcblx0XHR2YXIgbCA9IGZuTWFwLmxlbmd0aDtcblx0XHR2YXIgcmV0ID0ge307XG5cblx0XHRmb3IgKDsgaSA8IGw7IGkrKykge1xuXHRcdFx0dmFsID0gZm5NYXBbaV07XG5cdFx0XHRpZiAodmFsICYmIHZhbFsxXSBpbiBkb2N1bWVudCkge1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgdmFsLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0cmV0W2ZuTWFwWzBdW2ldXSA9IHZhbFtpXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmV0O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fSkoKTtcblxuXHR2YXIgZXZlbnROYW1lTWFwID0ge1xuXHRcdGNoYW5nZTogZm4uZnVsbHNjcmVlbmNoYW5nZSxcblx0XHRlcnJvcjogZm4uZnVsbHNjcmVlbmVycm9yXG5cdH07XG5cblx0dmFyIHNjcmVlbmZ1bGwgPSB7XG5cdFx0cmVxdWVzdDogZnVuY3Rpb24gKGVsZW0pIHtcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHRcdHZhciByZXF1ZXN0ID0gZm4ucmVxdWVzdEZ1bGxzY3JlZW47XG5cblx0XHRcdFx0dmFyIG9uRnVsbFNjcmVlbkVudGVyZWQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0dGhpcy5vZmYoJ2NoYW5nZScsIG9uRnVsbFNjcmVlbkVudGVyZWQpO1xuXHRcdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0fS5iaW5kKHRoaXMpO1xuXG5cdFx0XHRcdHRoaXMub24oJ2NoYW5nZScsIG9uRnVsbFNjcmVlbkVudGVyZWQpO1xuXG5cdFx0XHRcdGVsZW0gPSBlbGVtIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXHRcdFx0XHR2YXIgcHJvbWlzZTtcblxuXHRcdFx0XHQvLyBXb3JrIGFyb3VuZCBTYWZhcmkgNS4xIGJ1ZzogcmVwb3J0cyBzdXBwb3J0IGZvclxuXHRcdFx0XHQvLyBrZXlib2FyZCBpbiBmdWxsc2NyZWVuIGV2ZW4gdGhvdWdoIGl0IGRvZXNuJ3QuXG5cdFx0XHRcdC8vIEJyb3dzZXIgc25pZmZpbmcsIHNpbmNlIHRoZSBhbHRlcm5hdGl2ZSB3aXRoXG5cdFx0XHRcdC8vIHNldFRpbWVvdXQgaXMgZXZlbiB3b3JzZS5cblx0XHRcdFx0aWYgKC8gVmVyc2lvblxcLzVcXC4xKD86XFwuXFxkKyk/IFNhZmFyaVxcLy8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuXHRcdFx0XHRcdHByb21pc2UgPSBlbGVtW3JlcXVlc3RdKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cHJvbWlzZSA9IGVsZW1bcmVxdWVzdF0oa2V5Ym9hcmRBbGxvd2VkID8gRWxlbWVudC5BTExPV19LRVlCT0FSRF9JTlBVVCA6IHt9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdFByb21pc2UucmVzb2x2ZShwcm9taXNlKS5jYXRjaChyZWplY3QpO1xuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0XHR9LFxuXHRcdGV4aXQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuXHRcdFx0XHRpZiAoIXRoaXMuaXNGdWxsc2NyZWVuKSB7XG5cdFx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBvbkZ1bGxTY3JlZW5FeGl0ID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHRoaXMub2ZmKCdjaGFuZ2UnLCBvbkZ1bGxTY3JlZW5FeGl0KTtcblx0XHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdH0uYmluZCh0aGlzKTtcblxuXHRcdFx0XHRkb2N1bWVudFtmbi5leGl0RnVsbHNjcmVlbl0oKTtcblxuXHRcdFx0XHR0aGlzLm9uKCdjaGFuZ2UnLCBvbkZ1bGxTY3JlZW5FeGl0KTtcblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdFx0fSxcblx0XHR0b2dnbGU6IGZ1bmN0aW9uIChlbGVtKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5pc0Z1bGxzY3JlZW4gPyB0aGlzLmV4aXQoKSA6IHRoaXMucmVxdWVzdChlbGVtKTtcblx0XHR9LFxuXHRcdG9uY2hhbmdlOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdHRoaXMub24oJ2NoYW5nZScsIGNhbGxiYWNrKTtcblx0XHR9LFxuXHRcdG9uZXJyb3I6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0dGhpcy5vbignZXJyb3InLCBjYWxsYmFjayk7XG5cdFx0fSxcblx0XHRvbjogZnVuY3Rpb24gKGV2ZW50LCBjYWxsYmFjaykge1xuXHRcdFx0dmFyIGV2ZW50TmFtZSA9IGV2ZW50TmFtZU1hcFtldmVudF07XG5cdFx0XHRpZiAoZXZlbnROYW1lKSB7XG5cdFx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaywgZmFsc2UpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0b2ZmOiBmdW5jdGlvbiAoZXZlbnQsIGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgZXZlbnROYW1lID0gZXZlbnROYW1lTWFwW2V2ZW50XTtcblx0XHRcdGlmIChldmVudE5hbWUpIHtcblx0XHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrLCBmYWxzZSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRyYXc6IGZuXG5cdH07XG5cblx0aWYgKCFmbikge1xuXHRcdGlmIChpc0NvbW1vbmpzKSB7XG5cdFx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR3aW5kb3cuc2NyZWVuZnVsbCA9IGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybjtcblx0fVxuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHNjcmVlbmZ1bGwsIHtcblx0XHRpc0Z1bGxzY3JlZW46IHtcblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gQm9vbGVhbihkb2N1bWVudFtmbi5mdWxsc2NyZWVuRWxlbWVudF0pO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZWxlbWVudDoge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gZG9jdW1lbnRbZm4uZnVsbHNjcmVlbkVsZW1lbnRdO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZW5hYmxlZDoge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHQvLyBDb2VyY2UgdG8gYm9vbGVhbiBpbiBjYXNlIG9mIG9sZCBXZWJLaXRcblx0XHRcdFx0cmV0dXJuIEJvb2xlYW4oZG9jdW1lbnRbZm4uZnVsbHNjcmVlbkVuYWJsZWRdKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdGlmIChpc0NvbW1vbmpzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBzY3JlZW5mdWxsO1xuXHRcdC8vIFRPRE86IHJlbW92ZSB0aGlzIGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb25cblx0XHRtb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gc2NyZWVuZnVsbDtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuc2NyZWVuZnVsbCA9IHNjcmVlbmZ1bGw7XG5cdH1cbn0pKCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNjcmVlbmZ1bGwgZnJvbSBcInNjcmVlbmZ1bGxcIjtcblxubGV0IG1lbnVUb2dnbGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRvZ2dsZXJcIik7XG5cbmxldCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpO1xuXG5tZW51VG9nZ2xlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXG4gICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKFwibWVudV9hY3RpdmVcIik7XG4gICAgZm9yIChsZXQgbGluZSBvZiBtZW51VG9nZ2xlci5jaGlsZHJlbikge1xuICAgICAgICBsaW5lLmNsYXNzTGlzdC50b2dnbGUoXCJtZW51LXRvZ2dsZXJfX2xpbmVfYWN0aXZlXCIpO1xuICAgIH1cblxufSk7XG5cbmxldCB0ZXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZXN0XCIpO1xuXG50ZXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc2NyZWVuZnVsbC50b2dnbGUoKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==