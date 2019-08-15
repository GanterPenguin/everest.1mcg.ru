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

_screenfull.default.request();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zY3JlZW5mdWxsL2Rpc3Qvc2NyZWVuZnVsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZ2xvYmFsLmpzIl0sIm5hbWVzIjpbIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJvYmoiLCJfX2VzTW9kdWxlIiwibW9kdWxlIiwiZXhwb3J0cyIsImRvY3VtZW50Iiwid2luZG93IiwiaXNDb21tb25qcyIsImtleWJvYXJkQWxsb3dlZCIsIkVsZW1lbnQiLCJmbiIsInZhbCIsImZuTWFwIiwiaSIsImwiLCJsZW5ndGgiLCJyZXQiLCJldmVudE5hbWVNYXAiLCJjaGFuZ2UiLCJmdWxsc2NyZWVuY2hhbmdlIiwiZXJyb3IiLCJmdWxsc2NyZWVuZXJyb3IiLCJzY3JlZW5mdWxsIiwicmVxdWVzdCIsImVsZW0iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3RGdWxsc2NyZWVuIiwib25GdWxsU2NyZWVuRW50ZXJlZCIsIm9mZiIsImJpbmQiLCJvbiIsImRvY3VtZW50RWxlbWVudCIsInByb21pc2UiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiQUxMT1dfS0VZQk9BUkRfSU5QVVQiLCJjYXRjaCIsImV4aXQiLCJpc0Z1bGxzY3JlZW4iLCJvbkZ1bGxTY3JlZW5FeGl0IiwiZXhpdEZ1bGxzY3JlZW4iLCJ0b2dnbGUiLCJvbmNoYW5nZSIsImNhbGxiYWNrIiwib25lcnJvciIsImV2ZW50IiwiZXZlbnROYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyYXciLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZ2V0IiwiQm9vbGVhbiIsImZ1bGxzY3JlZW5FbGVtZW50IiwiZWxlbWVudCIsImVudW1lcmFibGUiLCJlbmFibGVkIiwiZnVsbHNjcmVlbkVuYWJsZWQiLCJkZWZhdWx0IiwibWVudVRvZ2dsZXIiLCJxdWVyeVNlbGVjdG9yIiwibWVudSIsImNsYXNzTGlzdCIsImNoaWxkcmVuIiwibGluZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLFNBQVNBLHNCQUFULENBQWdDQyxHQUFoQyxFQUFxQztBQUNuQyxTQUFPQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWCxHQUF3QkQsR0FBeEIsR0FBOEI7QUFDbkMsZUFBV0E7QUFEd0IsR0FBckM7QUFHRDs7QUFFREUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCSixzQkFBakIsQzs7Ozs7Ozs7Ozs7QUNOQTs7Ozs7QUFLQSxDQUFDLFlBQVk7QUFDWjs7QUFFQSxNQUFJSyxRQUFRLEdBQUcsT0FBT0MsTUFBUCxLQUFrQixXQUFsQixJQUFpQyxPQUFPQSxNQUFN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LFFBQVEsQ0FBQ0ssRUFBRSxDQUFDbUQsaUJBQUosQ0FBVCxDQUFkO0FBQ0E7QUFMTztBQVowQixHQUFwQzs7QUFxQkEsTUFBSXRELFVBQUosRUFBZ0I7QUFDZkosVUFBTSxDQUFDQyxPQUFQLEdBQWlCa0IsVUFBakIsQ0FEZSxDQUVmOztBQUNBbkIsVUFBTSxDQUFDQyxPQUFQLENBQWUwRCxPQUFmLEdBQXlCeEMsVUFBekI7QUFDQSxHQUpELE1BSU87QUFDTmhCLFVBQU0sQ0FBQ2dCLFVBQVAsR0FBb0JBLFVBQXBCO0FBQ0E7QUFDRCxDQTNMRCxJOzs7Ozs7Ozs7Ozs7QUNMYTs7OztBQUViOztBQUVBLElBQUl5QyxXQUFXLEdBQUcxRCxRQUFRLENBQUMyRCxhQUFULENBQXVCLGVBQXZCLENBQWxCO0FBRUEsSUFBSUMsSUFBSSxHQUFHNUQsUUFBUSxDQUFDMkQsYUFBVCxDQUF1QixPQUF2QixDQUFYO0FBRUFELFdBQVcsQ0FBQ2IsZ0JBQVosQ0FBNkIsT0FBN0IsRUFBc0MsWUFBTTtBQUV4Q2UsTUFBSSxDQUFDQyxTQUFMLENBQWV0QixNQUFmLENBQXNCLGFBQXRCO0FBRndDO0FBQUE7QUFBQTs7QUFBQTtBQUd4Qyx5QkFBaUJtQixXQUFXLENBQUNJLFFBQTdCLDhIQUF1QztBQUFBLFVBQTlCQyxJQUE4QjtBQUNuQ0EsVUFBSSxDQUFDRixTQUFMLENBQWV0QixNQUFmLENBQXNCLDJCQUF0QjtBQUNIO0FBTHVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPM0MsQ0FQRDs7QUFTQXRCLG9CQUFXQyxPQUFYLEciLCJmaWxlIjoiZ2xvYmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCIvKiFcbiogc2NyZWVuZnVsbFxuKiB2NC4yLjEgLSAyMDE5LTA3LTI3XG4qIChjKSBTaW5kcmUgU29yaHVzOyBNSVQgTGljZW5zZVxuKi9cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgZG9jdW1lbnQgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5kb2N1bWVudCA6IHt9O1xuXHR2YXIgaXNDb21tb25qcyA9IHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzO1xuXHR2YXIga2V5Ym9hcmRBbGxvd2VkID0gdHlwZW9mIEVsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmICdBTExPV19LRVlCT0FSRF9JTlBVVCcgaW4gRWxlbWVudDtcblxuXHR2YXIgZm4gPSAoZnVuY3Rpb24gKCkge1xuXHRcdHZhciB2YWw7XG5cblx0XHR2YXIgZm5NYXAgPSBbXG5cdFx0XHRbXG5cdFx0XHRcdCdyZXF1ZXN0RnVsbHNjcmVlbicsXG5cdFx0XHRcdCdleGl0RnVsbHNjcmVlbicsXG5cdFx0XHRcdCdmdWxsc2NyZWVuRWxlbWVudCcsXG5cdFx0XHRcdCdmdWxsc2NyZWVuRW5hYmxlZCcsXG5cdFx0XHRcdCdmdWxsc2NyZWVuY2hhbmdlJyxcblx0XHRcdFx0J2Z1bGxzY3JlZW5lcnJvcidcblx0XHRcdF0sXG5cdFx0XHQvLyBOZXcgV2ViS2l0XG5cdFx0XHRbXG5cdFx0XHRcdCd3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbicsXG5cdFx0XHRcdCd3ZWJraXRFeGl0RnVsbHNjcmVlbicsXG5cdFx0XHRcdCd3ZWJraXRGdWxsc2NyZWVuRWxlbWVudCcsXG5cdFx0XHRcdCd3ZWJraXRGdWxsc2NyZWVuRW5hYmxlZCcsXG5cdFx0XHRcdCd3ZWJraXRmdWxsc2NyZWVuY2hhbmdlJyxcblx0XHRcdFx0J3dlYmtpdGZ1bGxzY3JlZW5lcnJvcidcblxuXHRcdFx0XSxcblx0XHRcdC8vIE9sZCBXZWJLaXQgKFNhZmFyaSA1LjEpXG5cdFx0XHRbXG5cdFx0XHRcdCd3ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbicsXG5cdFx0XHRcdCd3ZWJraXRDYW5jZWxGdWxsU2NyZWVuJyxcblx0XHRcdFx0J3dlYmtpdEN1cnJlbnRGdWxsU2NyZWVuRWxlbWVudCcsXG5cdFx0XHRcdCd3ZWJraXRDYW5jZWxGdWxsU2NyZWVuJyxcblx0XHRcdFx0J3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLFxuXHRcdFx0XHQnd2Via2l0ZnVsbHNjcmVlbmVycm9yJ1xuXG5cdFx0XHRdLFxuXHRcdFx0W1xuXHRcdFx0XHQnbW96UmVxdWVzdEZ1bGxTY3JlZW4nLFxuXHRcdFx0XHQnbW96Q2FuY2VsRnVsbFNjcmVlbicsXG5cdFx0XHRcdCdtb3pGdWxsU2NyZWVuRWxlbWVudCcsXG5cdFx0XHRcdCdtb3pGdWxsU2NyZWVuRW5hYmxlZCcsXG5cdFx0XHRcdCdtb3pmdWxsc2NyZWVuY2hhbmdlJyxcblx0XHRcdFx0J21vemZ1bGxzY3JlZW5lcnJvcidcblx0XHRcdF0sXG5cdFx0XHRbXG5cdFx0XHRcdCdtc1JlcXVlc3RGdWxsc2NyZWVuJyxcblx0XHRcdFx0J21zRXhpdEZ1bGxzY3JlZW4nLFxuXHRcdFx0XHQnbXNGdWxsc2NyZWVuRWxlbWVudCcsXG5cdFx0XHRcdCdtc0Z1bGxzY3JlZW5FbmFibGVkJyxcblx0XHRcdFx0J01TRnVsbHNjcmVlbkNoYW5nZScsXG5cdFx0XHRcdCdNU0Z1bGxzY3JlZW5FcnJvcidcblx0XHRcdF1cblx0XHRdO1xuXG5cdFx0dmFyIGkgPSAwO1xuXHRcdHZhciBsID0gZm5NYXAubGVuZ3RoO1xuXHRcdHZhciByZXQgPSB7fTtcblxuXHRcdGZvciAoOyBpIDwgbDsgaSsrKSB7XG5cdFx0XHR2YWwgPSBmbk1hcFtpXTtcblx0XHRcdGlmICh2YWwgJiYgdmFsWzFdIGluIGRvY3VtZW50KSB7XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCB2YWwubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRyZXRbZm5NYXBbMF1baV1dID0gdmFsW2ldO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiByZXQ7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9KSgpO1xuXG5cdHZhciBldmVudE5hbWVNYXAgPSB7XG5cdFx0Y2hhbmdlOiBmbi5mdWxsc2NyZWVuY2hhbmdlLFxuXHRcdGVycm9yOiBmbi5mdWxsc2NyZWVuZXJyb3Jcblx0fTtcblxuXHR2YXIgc2NyZWVuZnVsbCA9IHtcblx0XHRyZXF1ZXN0OiBmdW5jdGlvbiAoZWxlbSkge1xuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRcdFx0dmFyIHJlcXVlc3QgPSBmbi5yZXF1ZXN0RnVsbHNjcmVlbjtcblxuXHRcdFx0XHR2YXIgb25GdWxsU2NyZWVuRW50ZXJlZCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHR0aGlzLm9mZignY2hhbmdlJywgb25GdWxsU2NyZWVuRW50ZXJlZCk7XG5cdFx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHR9LmJpbmQodGhpcyk7XG5cblx0XHRcdFx0dGhpcy5vbignY2hhbmdlJywgb25GdWxsU2NyZWVuRW50ZXJlZCk7XG5cblx0XHRcdFx0ZWxlbSA9IGVsZW0gfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cdFx0XHRcdHZhciBwcm9taXNlO1xuXG5cdFx0XHRcdC8vIFdvcmsgYXJvdW5kIFNhZmFyaSA1LjEgYnVnOiByZXBvcnRzIHN1cHBvcnQgZm9yXG5cdFx0XHRcdC8vIGtleWJvYXJkIGluIGZ1bGxzY3JlZW4gZXZlbiB0aG91Z2ggaXQgZG9lc24ndC5cblx0XHRcdFx0Ly8gQnJvd3NlciBzbmlmZmluZywgc2luY2UgdGhlIGFsdGVybmF0aXZlIHdpdGhcblx0XHRcdFx0Ly8gc2V0VGltZW91dCBpcyBldmVuIHdvcnNlLlxuXHRcdFx0XHRpZiAoLyBWZXJzaW9uXFwvNVxcLjEoPzpcXC5cXGQrKT8gU2FmYXJpXFwvLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG5cdFx0XHRcdFx0cHJvbWlzZSA9IGVsZW1bcmVxdWVzdF0oKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRwcm9taXNlID0gZWxlbVtyZXF1ZXN0XShrZXlib2FyZEFsbG93ZWQgPyBFbGVtZW50LkFMTE9XX0tFWUJPQVJEX0lOUFVUIDoge30pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0UHJvbWlzZS5yZXNvbHZlKHByb21pc2UpLmNhdGNoKHJlamVjdCk7XG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXHRcdH0sXG5cdFx0ZXhpdDogZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG5cdFx0XHRcdGlmICghdGhpcy5pc0Z1bGxzY3JlZW4pIHtcblx0XHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIG9uRnVsbFNjcmVlbkV4aXQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0dGhpcy5vZmYoJ2NoYW5nZScsIG9uRnVsbFNjcmVlbkV4aXQpO1xuXHRcdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0fS5iaW5kKHRoaXMpO1xuXG5cdFx0XHRcdGRvY3VtZW50W2ZuLmV4aXRGdWxsc2NyZWVuXSgpO1xuXG5cdFx0XHRcdHRoaXMub24oJ2NoYW5nZScsIG9uRnVsbFNjcmVlbkV4aXQpO1xuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0XHR9LFxuXHRcdHRvZ2dsZTogZnVuY3Rpb24gKGVsZW0pIHtcblx0XHRcdHJldHVybiB0aGlzLmlzRnVsbHNjcmVlbiA/IHRoaXMuZXhpdCgpIDogdGhpcy5yZXF1ZXN0KGVsZW0pO1xuXHRcdH0sXG5cdFx0b25jaGFuZ2U6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0dGhpcy5vbignY2hhbmdlJywgY2FsbGJhY2spO1xuXHRcdH0sXG5cdFx0b25lcnJvcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHR0aGlzLm9uKCdlcnJvcicsIGNhbGxiYWNrKTtcblx0XHR9LFxuXHRcdG9uOiBmdW5jdGlvbiAoZXZlbnQsIGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgZXZlbnROYW1lID0gZXZlbnROYW1lTWFwW2V2ZW50XTtcblx0XHRcdGlmIChldmVudE5hbWUpIHtcblx0XHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrLCBmYWxzZSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRvZmY6IGZ1bmN0aW9uIChldmVudCwgY2FsbGJhY2spIHtcblx0XHRcdHZhciBldmVudE5hbWUgPSBldmVudE5hbWVNYXBbZXZlbnRdO1xuXHRcdFx0aWYgKGV2ZW50TmFtZSkge1xuXHRcdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGZhbHNlKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHJhdzogZm5cblx0fTtcblxuXHRpZiAoIWZuKSB7XG5cdFx0aWYgKGlzQ29tbW9uanMpIHtcblx0XHRcdG1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdpbmRvdy5zY3JlZW5mdWxsID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoc2NyZWVuZnVsbCwge1xuXHRcdGlzRnVsbHNjcmVlbjoge1xuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHJldHVybiBCb29sZWFuKGRvY3VtZW50W2ZuLmZ1bGxzY3JlZW5FbGVtZW50XSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRlbGVtZW50OiB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHJldHVybiBkb2N1bWVudFtmbi5mdWxsc2NyZWVuRWxlbWVudF07XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRlbmFibGVkOiB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdC8vIENvZXJjZSB0byBib29sZWFuIGluIGNhc2Ugb2Ygb2xkIFdlYktpdFxuXHRcdFx0XHRyZXR1cm4gQm9vbGVhbihkb2N1bWVudFtmbi5mdWxsc2NyZWVuRW5hYmxlZF0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0aWYgKGlzQ29tbW9uanMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IHNjcmVlbmZ1bGw7XG5cdFx0Ly8gVE9ETzogcmVtb3ZlIHRoaXMgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvblxuXHRcdG1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBzY3JlZW5mdWxsO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5zY3JlZW5mdWxsID0gc2NyZWVuZnVsbDtcblx0fVxufSkoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2NyZWVuZnVsbCBmcm9tIFwic2NyZWVuZnVsbFwiO1xuXG5sZXQgbWVudVRvZ2dsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdG9nZ2xlclwiKTtcblxubGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIik7XG5cbm1lbnVUb2dnbGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cbiAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJtZW51X2FjdGl2ZVwiKTtcbiAgICBmb3IgKGxldCBsaW5lIG9mIG1lbnVUb2dnbGVyLmNoaWxkcmVuKSB7XG4gICAgICAgIGxpbmUuY2xhc3NMaXN0LnRvZ2dsZShcIm1lbnUtdG9nZ2xlcl9fbGluZV9hY3RpdmVcIik7XG4gICAgfVxuXG59KTtcblxuc2NyZWVuZnVsbC5yZXF1ZXN0KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9