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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/utils.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.extend = extend;
exports.indexOf = indexOf;
exports.escapeExpression = escapeExpression;
exports.isEmpty = isEmpty;
exports.createFrame = createFrame;
exports.blockParams = blockParams;
exports.appendContextPath = appendContextPath;
var escape = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

var badChars = /[&<>"'`=]/g,
    possible = /[&<>"'`=]/;

function escapeChar(chr) {
  return escape[chr];
}

function extend(obj /* , ...source */) {
  for (var i = 1; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
        obj[key] = arguments[i][key];
      }
    }
  }

  return obj;
}

var toString = Object.prototype.toString;

exports.toString = toString;
// Sourced from lodash
// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
/* eslint-disable func-style */
var isFunction = function isFunction(value) {
  return typeof value === 'function';
};
// fallback for older versions of Chrome and Safari
/* istanbul ignore next */
if (isFunction(/x/)) {
  exports.isFunction = isFunction = function (value) {
    return typeof value === 'function' && toString.call(value) === '[object Function]';
  };
}
exports.isFunction = isFunction;

/* eslint-enable func-style */

/* istanbul ignore next */
var isArray = Array.isArray || function (value) {
  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
};

exports.isArray = isArray;
// Older IE versions do not directly support indexOf so we must implement our own, sadly.

function indexOf(array, value) {
  for (var i = 0, len = array.length; i < len; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

function escapeExpression(string) {
  if (typeof string !== 'string') {
    // don't escape SafeStrings, since they're already safe
    if (string && string.toHTML) {
      return string.toHTML();
    } else if (string == null) {
      return '';
    } else if (!string) {
      return string + '';
    }

    // Force a string conversion as this will be done by the append regardless and
    // the regex test will do this transparently behind the scenes, causing issues if
    // an object's to string has escaped characters in it.
    string = '' + string;
  }

  if (!possible.test(string)) {
    return string;
  }
  return string.replace(badChars, escapeChar);
}

function isEmpty(value) {
  if (!value && value !== 0) {
    return true;
  } else if (isArray(value) && value.length === 0) {
    return true;
  } else {
    return false;
  }
}

function createFrame(object) {
  var frame = extend({}, object);
  frame._parent = object;
  return frame;
}

function blockParams(params, ids) {
  params.path = ids;
  return params;
}

function appendContextPath(contextPath, id) {
  return (contextPath ? contextPath + '.' : '') + id;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFNLE1BQU0sR0FBRztBQUNiLEtBQUcsRUFBRSxPQUFPO0FBQ1osS0FBRyxFQUFFLE1BQU07QUFDWCxLQUFHLEVBQUUsTUFBTTtBQUNYLEtBQUcsRUFBRSxRQUFRO0FBQ2IsS0FBRyxFQUFFLFFBQVE7QUFDYixLQUFHLEVBQUUsUUFBUTtBQUNiLEtBQUcsRUFBRSxRQUFRO0NBQ2QsQ0FBQzs7QUFFRixJQUFNLFFBQVEsR0FBRyxZQUFZO0lBQ3ZCLFFBQVEsR0FBRyxXQUFXLENBQUM7O0FBRTdCLFNBQVMsVUFBVSxDQUFDLEdBQUcsRUFBRTtBQUN2QixTQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUNwQjs7QUFFTSxTQUFTLE1BQU0sQ0FBQyxHQUFHLG9CQUFtQjtBQUMzQyxPQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN6QyxTQUFLLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUM1QixVQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUU7QUFDM0QsV0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztPQUM5QjtLQUNGO0dBQ0Y7O0FBRUQsU0FBTyxHQUFHLENBQUM7Q0FDWjs7QUFFTSxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQzs7Ozs7O0FBS2hELElBQUksVUFBVSxHQUFHLG9CQUFTLEtBQUssRUFBRTtBQUMvQixTQUFPLE9BQU8sS0FBSyxLQUFLLFVBQVUsQ0FBQztDQUNwQyxDQUFDOzs7QUFHRixJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUNuQixVQUlNLFVBQVUsR0FKaEIsVUFBVSxHQUFHLFVBQVMsS0FBSyxFQUFFO0FBQzNCLFdBQU8sT0FBTyxLQUFLLEtBQUssVUFBVSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssbUJBQW1CLENBQUM7R0FDcEYsQ0FBQztDQUNIO1FBQ08sVUFBVSxHQUFWLFVBQVU7Ozs7O0FBSVgsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sSUFBSSxVQUFTLEtBQUssRUFBRTtBQUN0RCxTQUFPLEFBQUMsS0FBSyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsR0FBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLGdCQUFnQixHQUFHLEtBQUssQ0FBQztDQUNqRyxDQUFDOzs7OztBQUdLLFNBQVMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDcEMsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNoRCxRQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUU7QUFDdEIsYUFBTyxDQUFDLENBQUM7S0FDVjtHQUNGO0FBQ0QsU0FBTyxDQUFDLENBQUMsQ0FBQztDQUNYOztBQUdNLFNBQVMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO0FBQ3ZDLE1BQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFOztBQUU5QixRQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO0FBQzNCLGFBQU8sTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ3hCLE1BQU0sSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO0FBQ3pCLGFBQU8sRUFBRSxDQUFDO0tBQ1gsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ2xCLGFBQU8sTUFBTSxHQUFHLEVBQUUsQ0FBQztLQUNwQjs7Ozs7QUFLRCxVQUFNLEdBQUcsRUFBRSxHQUFHLE1BQU0sQ0FBQztHQUN0Qjs7QUFFRCxNQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUFFLFdBQU8sTUFBTSxDQUFDO0dBQUU7QUFDOUMsU0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztDQUM3Qzs7QUFFTSxTQUFTLE9BQU8sQ0FBQyxLQUFLLEVBQUU7QUFDN0IsTUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO0FBQ3pCLFdBQU8sSUFBSSxDQUFDO0dBQ2IsTUFBTSxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtBQUMvQyxXQUFPLElBQUksQ0FBQztHQUNiLE1BQU07QUFDTCxXQUFPLEtBQUssQ0FBQztHQUNkO0NBQ0Y7O0FBRU0sU0FBUyxXQUFXLENBQUMsTUFBTSxFQUFFO0FBQ2xDLE1BQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDL0IsT0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDdkIsU0FBTyxLQUFLLENBQUM7Q0FDZDs7QUFFTSxTQUFTLFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLFFBQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQ2xCLFNBQU8sTUFBTSxDQUFDO0NBQ2Y7O0FBRU0sU0FBUyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsRUFBRSxFQUFFO0FBQ2pELFNBQU8sQ0FBQyxXQUFXLEdBQUcsV0FBVyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUEsR0FBSSxFQUFFLENBQUM7Q0FDcEQiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlc2NhcGUgPSB7XG4gICcmJzogJyZhbXA7JyxcbiAgJzwnOiAnJmx0OycsXG4gICc+JzogJyZndDsnLFxuICAnXCInOiAnJnF1b3Q7JyxcbiAgXCInXCI6ICcmI3gyNzsnLFxuICAnYCc6ICcmI3g2MDsnLFxuICAnPSc6ICcmI3gzRDsnXG59O1xuXG5jb25zdCBiYWRDaGFycyA9IC9bJjw+XCInYD1dL2csXG4gICAgICBwb3NzaWJsZSA9IC9bJjw+XCInYD1dLztcblxuZnVuY3Rpb24gZXNjYXBlQ2hhcihjaHIpIHtcbiAgcmV0dXJuIGVzY2FwZVtjaHJdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kKG9iai8qICwgLi4uc291cmNlICovKSB7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQga2V5IGluIGFyZ3VtZW50c1tpXSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcmd1bWVudHNbaV0sIGtleSkpIHtcbiAgICAgICAgb2JqW2tleV0gPSBhcmd1bWVudHNbaV1ba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5leHBvcnQgbGV0IHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLy8gU291cmNlZCBmcm9tIGxvZGFzaFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Jlc3RpZWpzL2xvZGFzaC9ibG9iL21hc3Rlci9MSUNFTlNFLnR4dFxuLyogZXNsaW50LWRpc2FibGUgZnVuYy1zdHlsZSAqL1xubGV0IGlzRnVuY3Rpb24gPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufTtcbi8vIGZhbGxiYWNrIGZvciBvbGRlciB2ZXJzaW9ucyBvZiBDaHJvbWUgYW5kIFNhZmFyaVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmlmIChpc0Z1bmN0aW9uKC94LykpIHtcbiAgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbiAgfTtcbn1cbmV4cG9ydCB7aXNGdW5jdGlvbn07XG4vKiBlc2xpbnQtZW5hYmxlIGZ1bmMtc3R5bGUgKi9cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpID8gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XScgOiBmYWxzZTtcbn07XG5cbi8vIE9sZGVyIElFIHZlcnNpb25zIGRvIG5vdCBkaXJlY3RseSBzdXBwb3J0IGluZGV4T2Ygc28gd2UgbXVzdCBpbXBsZW1lbnQgb3VyIG93biwgc2FkbHkuXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhPZihhcnJheSwgdmFsdWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGFycmF5W2ldID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlRXhwcmVzc2lvbihzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZG9uJ3QgZXNjYXBlIFNhZmVTdHJpbmdzLCBzaW5jZSB0aGV5J3JlIGFscmVhZHkgc2FmZVxuICAgIGlmIChzdHJpbmcgJiYgc3RyaW5nLnRvSFRNTCkge1xuICAgICAgcmV0dXJuIHN0cmluZy50b0hUTUwoKTtcbiAgICB9IGVsc2UgaWYgKHN0cmluZyA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSBlbHNlIGlmICghc3RyaW5nKSB7XG4gICAgICByZXR1cm4gc3RyaW5nICsgJyc7XG4gICAgfVxuXG4gICAgLy8gRm9yY2UgYSBzdHJpbmcgY29udmVyc2lvbiBhcyB0aGlzIHdpbGwgYmUgZG9uZSBieSB0aGUgYXBwZW5kIHJlZ2FyZGxlc3MgYW5kXG4gICAgLy8gdGhlIHJlZ2V4IHRlc3Qgd2lsbCBkbyB0aGlzIHRyYW5zcGFyZW50bHkgYmVoaW5kIHRoZSBzY2VuZXMsIGNhdXNpbmcgaXNzdWVzIGlmXG4gICAgLy8gYW4gb2JqZWN0J3MgdG8gc3RyaW5nIGhhcyBlc2NhcGVkIGNoYXJhY3RlcnMgaW4gaXQuXG4gICAgc3RyaW5nID0gJycgKyBzdHJpbmc7XG4gIH1cblxuICBpZiAoIXBvc3NpYmxlLnRlc3Qoc3RyaW5nKSkgeyByZXR1cm4gc3RyaW5nOyB9XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShiYWRDaGFycywgZXNjYXBlQ2hhcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KHZhbHVlKSB7XG4gIGlmICghdmFsdWUgJiYgdmFsdWUgIT09IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZyYW1lKG9iamVjdCkge1xuICBsZXQgZnJhbWUgPSBleHRlbmQoe30sIG9iamVjdCk7XG4gIGZyYW1lLl9wYXJlbnQgPSBvYmplY3Q7XG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJsb2NrUGFyYW1zKHBhcmFtcywgaWRzKSB7XG4gIHBhcmFtcy5wYXRoID0gaWRzO1xuICByZXR1cm4gcGFyYW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kQ29udGV4dFBhdGgoY29udGV4dFBhdGgsIGlkKSB7XG4gIHJldHVybiAoY29udGV4dFBhdGggPyBjb250ZXh0UGF0aCArICcuJyA6ICcnKSArIGlkO1xufVxuIl19


/***/ }),
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./~/jquery/dist/jquery.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.2.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( ">tbody", elem )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with computed style
	var valueIsBorderBox,
		styles = getStyles( elem ),
		val = curCSS( elem, name, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Computed unit is not pixels. Stop here and return.
	if ( rnumnonpx.test( val ) ) {
		return val;
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = isBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ name ] );

	// Fall back to offsetWidth/Height when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	if ( val === "auto" ) {
		val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
	}

	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var doc, docElem, rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		doc = elem.ownerDocument;
		docElem = doc.documentElement;
		win = doc.defaultView;

		return {
			top: rect.top + win.pageYOffset - docElem.clientTop,
			left: rect.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( jQuery.isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),
/* 2 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/exception.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

function Exception(message, node) {
  var loc = node && node.loc,
      line = undefined,
      column = undefined;
  if (loc) {
    line = loc.start.line;
    column = loc.start.column;

    message += ' - ' + line + ':' + column;
  }

  var tmp = Error.prototype.constructor.call(this, message);

  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
  for (var idx = 0; idx < errorProps.length; idx++) {
    this[errorProps[idx]] = tmp[errorProps[idx]];
  }

  /* istanbul ignore else */
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, Exception);
  }

  try {
    if (loc) {
      this.lineNumber = line;

      // Work around issue under safari where we can't directly set the column value
      /* istanbul ignore next */
      if (Object.defineProperty) {
        Object.defineProperty(this, 'column', {
          value: column,
          enumerable: true
        });
      } else {
        this.column = column;
      }
    }
  } catch (nop) {
    /* Ignore if the browser is very particular */
  }
}

Exception.prototype = new Error();

exports['default'] = Exception;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2V4Y2VwdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsSUFBTSxVQUFVLEdBQUcsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQzs7QUFFbkcsU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtBQUNoQyxNQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUc7TUFDdEIsSUFBSSxZQUFBO01BQ0osTUFBTSxZQUFBLENBQUM7QUFDWCxNQUFJLEdBQUcsRUFBRTtBQUNQLFFBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztBQUN0QixVQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7O0FBRTFCLFdBQU8sSUFBSSxLQUFLLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7R0FDeEM7O0FBRUQsTUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQzs7O0FBRzFELE9BQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO0FBQ2hELFFBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7R0FDOUM7OztBQUdELE1BQUksS0FBSyxDQUFDLGlCQUFpQixFQUFFO0FBQzNCLFNBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7R0FDMUM7O0FBRUQsTUFBSTtBQUNGLFFBQUksR0FBRyxFQUFFO0FBQ1AsVUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Ozs7QUFJdkIsVUFBSSxNQUFNLENBQUMsY0FBYyxFQUFFO0FBQ3pCLGNBQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRTtBQUNwQyxlQUFLLEVBQUUsTUFBTTtBQUNiLG9CQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUM7T0FDSixNQUFNO0FBQ0wsWUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7T0FDdEI7S0FDRjtHQUNGLENBQUMsT0FBTyxHQUFHLEVBQUU7O0dBRWI7Q0FDRjs7QUFFRCxTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7O3FCQUVuQixTQUFTIiwiZmlsZSI6ImV4Y2VwdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgZXJyb3JQcm9wcyA9IFsnZGVzY3JpcHRpb24nLCAnZmlsZU5hbWUnLCAnbGluZU51bWJlcicsICdtZXNzYWdlJywgJ25hbWUnLCAnbnVtYmVyJywgJ3N0YWNrJ107XG5cbmZ1bmN0aW9uIEV4Y2VwdGlvbihtZXNzYWdlLCBub2RlKSB7XG4gIGxldCBsb2MgPSBub2RlICYmIG5vZGUubG9jLFxuICAgICAgbGluZSxcbiAgICAgIGNvbHVtbjtcbiAgaWYgKGxvYykge1xuICAgIGxpbmUgPSBsb2Muc3RhcnQubGluZTtcbiAgICBjb2x1bW4gPSBsb2Muc3RhcnQuY29sdW1uO1xuXG4gICAgbWVzc2FnZSArPSAnIC0gJyArIGxpbmUgKyAnOicgKyBjb2x1bW47XG4gIH1cblxuICBsZXQgdG1wID0gRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWVzc2FnZSk7XG5cbiAgLy8gVW5mb3J0dW5hdGVseSBlcnJvcnMgYXJlIG5vdCBlbnVtZXJhYmxlIGluIENocm9tZSAoYXQgbGVhc3QpLCBzbyBgZm9yIHByb3AgaW4gdG1wYCBkb2Vzbid0IHdvcmsuXG4gIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IGVycm9yUHJvcHMubGVuZ3RoOyBpZHgrKykge1xuICAgIHRoaXNbZXJyb3JQcm9wc1tpZHhdXSA9IHRtcFtlcnJvclByb3BzW2lkeF1dO1xuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgRXhjZXB0aW9uKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgaWYgKGxvYykge1xuICAgICAgdGhpcy5saW5lTnVtYmVyID0gbGluZTtcblxuICAgICAgLy8gV29yayBhcm91bmQgaXNzdWUgdW5kZXIgc2FmYXJpIHdoZXJlIHdlIGNhbid0IGRpcmVjdGx5IHNldCB0aGUgY29sdW1uIHZhbHVlXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2NvbHVtbicsIHtcbiAgICAgICAgICB2YWx1ZTogY29sdW1uLFxuICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbHVtbiA9IGNvbHVtbjtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKG5vcCkge1xuICAgIC8qIElnbm9yZSBpZiB0aGUgYnJvd3NlciBpcyB2ZXJ5IHBhcnRpY3VsYXIgKi9cbiAgfVxufVxuXG5FeGNlcHRpb24ucHJvdG90eXBlID0gbmV3IEVycm9yKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEV4Y2VwdGlvbjtcbiJdfQ==


/***/ }),
/* 3 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./~/handlebars/runtime.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

// Create a simple path alias to allow browserify to resolve
// the runtime on a supported path.
module.exports = __webpack_require__(/*! ./dist/cjs/handlebars.runtime */ 34)['default'];


/***/ }),
/* 4 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 5 */
/* unknown exports provided */
/* all exports used */
/*!***************************************!*\
  !*** ./app/templates/navigation.html ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! ./~/handlebars/runtime.js */ 3);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li><a href=\"#"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a></li>\n";
},"useData":true});

/***/ }),
/* 6 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/base.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.HandlebarsEnvironment = HandlebarsEnvironment;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = __webpack_require__(/*! ./utils */ 0);

var _exception = __webpack_require__(/*! ./exception */ 2);

var _exception2 = _interopRequireDefault(_exception);

var _helpers = __webpack_require__(/*! ./helpers */ 37);

var _decorators = __webpack_require__(/*! ./decorators */ 35);

var _logger = __webpack_require__(/*! ./logger */ 45);

var _logger2 = _interopRequireDefault(_logger);

var VERSION = '4.0.8';
exports.VERSION = VERSION;
var COMPILER_REVISION = 7;

exports.COMPILER_REVISION = COMPILER_REVISION;
var REVISION_CHANGES = {
  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
  2: '== 1.0.0-rc.3',
  3: '== 1.0.0-rc.4',
  4: '== 1.x.x',
  5: '== 2.0.0-alpha.x',
  6: '>= 2.0.0-beta.1',
  7: '>= 4.0.0'
};

exports.REVISION_CHANGES = REVISION_CHANGES;
var objectType = '[object Object]';

function HandlebarsEnvironment(helpers, partials, decorators) {
  this.helpers = helpers || {};
  this.partials = partials || {};
  this.decorators = decorators || {};

  _helpers.registerDefaultHelpers(this);
  _decorators.registerDefaultDecorators(this);
}

HandlebarsEnvironment.prototype = {
  constructor: HandlebarsEnvironment,

  logger: _logger2['default'],
  log: _logger2['default'].log,

  registerHelper: function registerHelper(name, fn) {
    if (_utils.toString.call(name) === objectType) {
      if (fn) {
        throw new _exception2['default']('Arg not supported with multiple helpers');
      }
      _utils.extend(this.helpers, name);
    } else {
      this.helpers[name] = fn;
    }
  },
  unregisterHelper: function unregisterHelper(name) {
    delete this.helpers[name];
  },

  registerPartial: function registerPartial(name, partial) {
    if (_utils.toString.call(name) === objectType) {
      _utils.extend(this.partials, name);
    } else {
      if (typeof partial === 'undefined') {
        throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
      }
      this.partials[name] = partial;
    }
  },
  unregisterPartial: function unregisterPartial(name) {
    delete this.partials[name];
  },

  registerDecorator: function registerDecorator(name, fn) {
    if (_utils.toString.call(name) === objectType) {
      if (fn) {
        throw new _exception2['default']('Arg not supported with multiple decorators');
      }
      _utils.extend(this.decorators, name);
    } else {
      this.decorators[name] = fn;
    }
  },
  unregisterDecorator: function unregisterDecorator(name) {
    delete this.decorators[name];
  }
};

var log = _logger2['default'].log;

exports.log = log;
exports.createFrame = _utils.createFrame;
exports.logger = _logger2['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2Jhc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7cUJBQTRDLFNBQVM7O3lCQUMvQixhQUFhOzs7O3VCQUNFLFdBQVc7OzBCQUNSLGNBQWM7O3NCQUNuQyxVQUFVOzs7O0FBRXRCLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQzs7QUFDeEIsSUFBTSxpQkFBaUIsR0FBRyxDQUFDLENBQUM7OztBQUU1QixJQUFNLGdCQUFnQixHQUFHO0FBQzlCLEdBQUMsRUFBRSxhQUFhO0FBQ2hCLEdBQUMsRUFBRSxlQUFlO0FBQ2xCLEdBQUMsRUFBRSxlQUFlO0FBQ2xCLEdBQUMsRUFBRSxVQUFVO0FBQ2IsR0FBQyxFQUFFLGtCQUFrQjtBQUNyQixHQUFDLEVBQUUsaUJBQWlCO0FBQ3BCLEdBQUMsRUFBRSxVQUFVO0NBQ2QsQ0FBQzs7O0FBRUYsSUFBTSxVQUFVLEdBQUcsaUJBQWlCLENBQUM7O0FBRTlCLFNBQVMscUJBQXFCLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUU7QUFDbkUsTUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO0FBQzdCLE1BQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxJQUFJLEVBQUUsQ0FBQztBQUMvQixNQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsSUFBSSxFQUFFLENBQUM7O0FBRW5DLGtDQUF1QixJQUFJLENBQUMsQ0FBQztBQUM3Qix3Q0FBMEIsSUFBSSxDQUFDLENBQUM7Q0FDakM7O0FBRUQscUJBQXFCLENBQUMsU0FBUyxHQUFHO0FBQ2hDLGFBQVcsRUFBRSxxQkFBcUI7O0FBRWxDLFFBQU0scUJBQVE7QUFDZCxLQUFHLEVBQUUsb0JBQU8sR0FBRzs7QUFFZixnQkFBYyxFQUFFLHdCQUFTLElBQUksRUFBRSxFQUFFLEVBQUU7QUFDakMsUUFBSSxnQkFBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssVUFBVSxFQUFFO0FBQ3RDLFVBQUksRUFBRSxFQUFFO0FBQUUsY0FBTSwyQkFBYyx5Q0FBeUMsQ0FBQyxDQUFDO09BQUU7QUFDM0Usb0JBQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztLQUM1QixNQUFNO0FBQ0wsVUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7S0FDekI7R0FDRjtBQUNELGtCQUFnQixFQUFFLDBCQUFTLElBQUksRUFBRTtBQUMvQixXQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDM0I7O0FBRUQsaUJBQWUsRUFBRSx5QkFBUyxJQUFJLEVBQUUsT0FBTyxFQUFFO0FBQ3ZDLFFBQUksZ0JBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLFVBQVUsRUFBRTtBQUN0QyxvQkFBTyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQzdCLE1BQU07QUFDTCxVQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsRUFBRTtBQUNsQyxjQUFNLHlFQUEwRCxJQUFJLG9CQUFpQixDQUFDO09BQ3ZGO0FBQ0QsVUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUM7S0FDL0I7R0FDRjtBQUNELG1CQUFpQixFQUFFLDJCQUFTLElBQUksRUFBRTtBQUNoQyxXQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDNUI7O0FBRUQsbUJBQWlCLEVBQUUsMkJBQVMsSUFBSSxFQUFFLEVBQUUsRUFBRTtBQUNwQyxRQUFJLGdCQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxVQUFVLEVBQUU7QUFDdEMsVUFBSSxFQUFFLEVBQUU7QUFBRSxjQUFNLDJCQUFjLDRDQUE0QyxDQUFDLENBQUM7T0FBRTtBQUM5RSxvQkFBTyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQy9CLE1BQU07QUFDTCxVQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUM1QjtHQUNGO0FBQ0QscUJBQW1CLEVBQUUsNkJBQVMsSUFBSSxFQUFFO0FBQ2xDLFdBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztHQUM5QjtDQUNGLENBQUM7O0FBRUssSUFBSSxHQUFHLEdBQUcsb0JBQU8sR0FBRyxDQUFDOzs7UUFFcEIsV0FBVztRQUFFLE1BQU0iLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlRnJhbWUsIGV4dGVuZCwgdG9TdHJpbmd9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tICcuL2V4Y2VwdGlvbic7XG5pbXBvcnQge3JlZ2lzdGVyRGVmYXVsdEhlbHBlcnN9IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQge3JlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnN9IGZyb20gJy4vZGVjb3JhdG9ycyc7XG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4vbG9nZ2VyJztcblxuZXhwb3J0IGNvbnN0IFZFUlNJT04gPSAnNC4wLjgnO1xuZXhwb3J0IGNvbnN0IENPTVBJTEVSX1JFVklTSU9OID0gNztcblxuZXhwb3J0IGNvbnN0IFJFVklTSU9OX0NIQU5HRVMgPSB7XG4gIDE6ICc8PSAxLjAucmMuMicsIC8vIDEuMC5yYy4yIGlzIGFjdHVhbGx5IHJldjIgYnV0IGRvZXNuJ3QgcmVwb3J0IGl0XG4gIDI6ICc9PSAxLjAuMC1yYy4zJyxcbiAgMzogJz09IDEuMC4wLXJjLjQnLFxuICA0OiAnPT0gMS54LngnLFxuICA1OiAnPT0gMi4wLjAtYWxwaGEueCcsXG4gIDY6ICc+PSAyLjAuMC1iZXRhLjEnLFxuICA3OiAnPj0gNC4wLjAnXG59O1xuXG5jb25zdCBvYmplY3RUeXBlID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBIYW5kbGViYXJzRW52aXJvbm1lbnQoaGVscGVycywgcGFydGlhbHMsIGRlY29yYXRvcnMpIHtcbiAgdGhpcy5oZWxwZXJzID0gaGVscGVycyB8fCB7fTtcbiAgdGhpcy5wYXJ0aWFscyA9IHBhcnRpYWxzIHx8IHt9O1xuICB0aGlzLmRlY29yYXRvcnMgPSBkZWNvcmF0b3JzIHx8IHt9O1xuXG4gIHJlZ2lzdGVyRGVmYXVsdEhlbHBlcnModGhpcyk7XG4gIHJlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnModGhpcyk7XG59XG5cbkhhbmRsZWJhcnNFbnZpcm9ubWVudC5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBIYW5kbGViYXJzRW52aXJvbm1lbnQsXG5cbiAgbG9nZ2VyOiBsb2dnZXIsXG4gIGxvZzogbG9nZ2VyLmxvZyxcblxuICByZWdpc3RlckhlbHBlcjogZnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBpZiAodG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgaWYgKGZuKSB7IHRocm93IG5ldyBFeGNlcHRpb24oJ0FyZyBub3Qgc3VwcG9ydGVkIHdpdGggbXVsdGlwbGUgaGVscGVycycpOyB9XG4gICAgICBleHRlbmQodGhpcy5oZWxwZXJzLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oZWxwZXJzW25hbWVdID0gZm47XG4gICAgfVxuICB9LFxuICB1bnJlZ2lzdGVySGVscGVyOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMuaGVscGVyc1tuYW1lXTtcbiAgfSxcblxuICByZWdpc3RlclBhcnRpYWw6IGZ1bmN0aW9uKG5hbWUsIHBhcnRpYWwpIHtcbiAgICBpZiAodG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgZXh0ZW5kKHRoaXMucGFydGlhbHMsIG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZW9mIHBhcnRpYWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oYEF0dGVtcHRpbmcgdG8gcmVnaXN0ZXIgYSBwYXJ0aWFsIGNhbGxlZCBcIiR7bmFtZX1cIiBhcyB1bmRlZmluZWRgKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucGFydGlhbHNbbmFtZV0gPSBwYXJ0aWFsO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlclBhcnRpYWw6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5wYXJ0aWFsc1tuYW1lXTtcbiAgfSxcblxuICByZWdpc3RlckRlY29yYXRvcjogZnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBpZiAodG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgaWYgKGZuKSB7IHRocm93IG5ldyBFeGNlcHRpb24oJ0FyZyBub3Qgc3VwcG9ydGVkIHdpdGggbXVsdGlwbGUgZGVjb3JhdG9ycycpOyB9XG4gICAgICBleHRlbmQodGhpcy5kZWNvcmF0b3JzLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZWNvcmF0b3JzW25hbWVdID0gZm47XG4gICAgfVxuICB9LFxuICB1bnJlZ2lzdGVyRGVjb3JhdG9yOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMuZGVjb3JhdG9yc1tuYW1lXTtcbiAgfVxufTtcblxuZXhwb3J0IGxldCBsb2cgPSBsb2dnZXIubG9nO1xuXG5leHBvcnQge2NyZWF0ZUZyYW1lLCBsb2dnZXJ9O1xuIl19


/***/ }),
/* 7 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************!*\
  !*** ./app/scripts/mediators/global.coffee ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

var Documentation;

Documentation = __webpack_require__(/*! ../modules/documentation.coffee */ 14);

module.exports = (function(_this) {
  return function() {
    var documentation;
    documentation = new Documentation({
      elements: {
        doc: '#documentation',
        header: '#header',
        nav: '#doc-navigation .nav',
        humans: '.for-humans',
        machines: '.for-machines'
      }
    });
    documentation.init();
    documentation.scrollSpyController('init');
    documentation.bindHeaderNavEvents();
    if (history.pushState && documentation.isMobile !== true) {
      return documentation.bindPopstate();
    }
  };
})(this);


/***/ }),
/* 8 */
/* unknown exports provided */
/* all exports used */
/*!*****************************!*\
  !*** ./app/styles/app.less ***!
  \*****************************/
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/* unknown exports provided */
/* all exports used */
/*!**********************************!*\
  !*** ./~/nprogress/nprogress.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function(root, factory) {

  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.NProgress = factory();
  }

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.2.0';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'ease',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, { 
          transition: 'none', 
          opacity: 1 
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, { 
            transition: 'all ' + speed + 'ms linear', 
            opacity: 0 
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc(Math.random() * Settings.trickleRate);
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;

    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;

      $promise.always(function() {
        current--;
        if (current === 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });

      return this;
    };

  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');
    
    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;
    
    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];
    
    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery 
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it 
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop, 
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return; 

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});



/***/ }),
/* 10 */
/* unknown exports provided */
/* all exports used */
/*!****************************************!*\
  !*** ./app/scripts/api-documents.json ***!
  \****************************************/
/***/ (function(module, exports) {

module.exports = {
	"articles": [
		{
			"title": "Documentation Overview",
			"id": "documentation-overview",
			"exampleId": "",
			"parent": ""
		},
		{
			"title": "Release Notes",
			"id": "release-notes",
			"exampleId": "",
			"parent": ""
		},
		{
			"title": "Accounts",
			"id": "accounts",
			"exampleId": "accounts-example",
			"parent": ""
		},
		{
			"title": "Get an Account",
			"id": "get-an-account",
			"exampleId": "get-an-account-example",
			"parent": "accounts"
		},
		{
			"title": "Update an Account",
			"id": "update-an-account",
			"exampleId": "update-an-account-example",
			"parent": "accounts"
		},
		{
			"title": "Account Credentials",
			"id": "account-credentials",
			"exampleId": "account-credentials-example",
			"parent": ""
		},
		{
			"title": "Create Account Credentials",
			"id": "create-account-credentials",
			"exampleId": "create-account-credentials-example",
			"parent": "account-credentials"
		},
		{
			"title": "Get Account Credentials",
			"id": "get-account-credentials",
			"exampleId": "get-account-credentials-example",
			"parent": "account-credentials"
		},
		{
			"title": "Delete Account Credentials",
			"id": "delete-account-credentials",
			"exampleId": "delete-account-credentials-example",
			"parent": "account-credentials"
		},
		{
			"title": "Account Permissions",
			"id": "account-permissions",
			"exampleId": "account-permissions-example",
			"parent": ""
		},
		{
			"title": "Get Account Permissions",
			"id": "get-account-permissions",
			"exampleId": "get-account-permissions-example",
			"parent": "account-permissions"
		},
		{
			"title": "Update Account Permissions",
			"id": "update-account-permissions",
			"exampleId": "update-account-permissions-example",
			"parent": "account-permissions"
		},
		{
			"title": "Apps",
			"id": "apps",
			"exampleId": "apps-example",
			"parent": ""
		},
		{
			"title": "Create an App",
			"id": "create-an-app",
			"exampleId": "create-an-app-example",
			"parent": "apps"
		},
		{
			"title": "Get an App",
			"id": "get-an-app",
			"exampleId": "get-an-app-example",
			"parent": "apps"
		},
		{
			"title": "Get an App by MAC Key Identifier",
			"id": "get-an-app-by-mac",
			"exampleId": "get-an-app-by-mac-example",
			"parent": "apps"
		},
		{
			"title": "List all Apps",
			"id": "list-all-apps",
			"exampleId": "list-all-apps-example",
			"parent": "apps"
		},
		{
			"title": "Credits",
			"id": "credits",
			"exampleId": "credits-example",
			"parent": ""
		},
		{
			"title": "Create a Credit",
			"id": "create-a-credit",
			"exampleId": "create-a-credit-example",
			"parent": "credits"
		},
		{
			"title": "Get a Credit",
			"id": "get-a-credit",
			"exampleId": "get-a-credit-example",
			"parent": "credits"
		},
		{
			"title": "List all Credits",
			"id": "list-all-credits",
			"exampleId": "list-all-credits-example",
			"parent": "credits"
		},
		{
			"title": "Update a Credit",
			"id": "update-a-credit",
			"exampleId": "update-a-credit-example",
			"parent": "credits"
		},
		{
			"title": "Debits",
			"id": "debits",
			"exampleId": "debits-example",
			"parent": ""
		},
		{
			"title": "Create a Debit",
			"id": "create-a-debit",
			"exampleId": "create-a-debit-example",
			"parent": "debits"
		},
		{
			"title": "Get a Debit",
			"id": "get-a-debit",
			"exampleId": "get-a-debit-example",
			"parent": "debits"
		},
		{
			"title": "List all Debits",
			"id": "list-all-debits",
			"exampleId": "list-all-debits-example",
			"parent": "debits"
		},
		{
			"title": "Update a Debit",
			"id": "update-a-debit",
			"exampleId": "update-a-debit-example",
			"parent": "debits"
		},
		{
			"title": "Live Credentials",
			"id": "live-credentials",
			"exampleId": "live-credentials-example",
			"parent": ""
		},
		{
			"title": "Get Live Credentials",
			"id": "get-live-credentials",
			"exampleId": "get-live-credentials-example",
			"parent": "live-credentials"
		},
		{
			"title": "Live Permissions",
			"id": "live-permissions",
			"exampleId": "live-permissions-example",
			"parent": ""
		},
		{
			"title": "Get Live Permissions",
			"id": "get-live-permissions",
			"exampleId": "get-live-permissions-example",
			"parent": "live-permissions"
		},
		{
			"title": "List all Live Permissions",
			"id": "list-all-live-permissions",
			"exampleId": "list-all-live-permissions-example",
			"parent": "live-permissions"
		},
		{
			"title": "Loyalty Programs (LPs)",
			"id": "loyalty-programs",
			"exampleId": "loyalty-programs-example",
			"parent": ""
		},
		{
			"title": "Get an LP",
			"id": "get-an-lp",
			"exampleId": "get-an-lp-example",
			"parent": "loyalty-programs"
		},
		{
			"title": "List all LPs",
			"id": "list-all-lps",
			"exampleId": "list-all-lps-example",
			"parent": "loyalty-programs"
		},
		{
			"title": "Member Validations (MVs)",
			"id": "member-validations",
			"exampleId": "member-validations-example",
			"parent": ""
		},
		{
			"title": "Create an MV",
			"id": "create-a-mv",
			"exampleId": "create-a-mv-example",
			"parent": "member-validations"
		},
		{
			"title": "Get an MV",
			"id": "get-a-mv",
			"exampleId": "get-a-mv-example",
			"parent": "member-validations"
		},
		{
			"title": "Update an MV",
			"id": "update-a-mv",
			"exampleId": "update-a-mv-example",
			"parent": "member-validations"
		},
		{
			"title": "MV Delegates",
			"id": "mv-delegates",
			"exampleId": "mv-delegates-example",
			"parent": ""
		},
		{
			"title": "Create an MV Delegate",
			"id": "create-a-mv-delegate",
			"exampleId": "create-a-mv-delegate-example",
			"parent": "mv-delegates"
		},
		{
			"title": "Get an MV Delegate",
			"id": "get-a-mv-delegate",
			"exampleId": "get-a-mv-delegate-example",
			"parent": "mv-delegates"
		},
		{
			"title": "MV Request Schema",
			"id": "mv-request-schema",
			"exampleId": "mv-request-schema-example",
			"parent": ""
		},
		{
			"title": "Get an MV Request Schema",
			"id": "get-an-mv-request-schema",
			"exampleId": "get-an-mv-request-schema-example",
			"parent": "mv-request-schema"
		},
		{
			"title": "Orders",
			"id": "orders",
			"exampleId": "orders-example",
			"parent": ""
		},
		{
			"title": "Create an Order",
			"id": "create-an-order",
			"exampleId": "create-an-order-example",
			"parent": "orders"
		},
		{
			"title": "Get an order",
			"id": "get-an-order",
			"exampleId": "get-an-order-example",
			"parent": "orders"
		},
		{
			"title": "List all orders",
			"id": "list-all-orders",
			"exampleId": "list-all-orders-example",
			"parent": "orders"
		},
		{
			"title": "Update an order",
			"id": "update-an-order",
			"exampleId": "update-an-order-example",
			"parent": "orders"
		},
		{
			"title": "Sandbox Credentials",
			"id": "sandbox-credentials",
			"exampleId": "sandbox-credentials-example",
			"parent": ""
		},
		{
			"title": "Get Sandbox Credentials",
			"id": "get-sandbox-credentials",
			"exampleId": "get-sandbox-credentials-example",
			"parent": "sandbox-credentials"
		},
		{
			"title": "Sandbox MVs",
			"id": "sandbox-mvs",
			"exampleId": "sandbox-mvs-example",
			"parent": ""
		},
		{
			"title": "Get Sandbox MVs",
			"id": "get-sandbox-mvs",
			"exampleId": "get-sandbox-mvs-example",
			"parent": "sandbox-mvs"
		},
		{
			"title": "Sandbox Permissions",
			"id": "sandbox-permissions",
			"exampleId": "sandbox-permissions-example",
			"parent": ""
		},
		{
			"title": "Create Sandbox Permissions",
			"id": "create-sandbox-permissions",
			"exampleId": "create-sandbox-permissions-example",
			"parent": "sandbox-permissions"
		},
		{
			"title": "Get Sandbox Permissions",
			"id": "get-sandbox-permissions",
			"exampleId": "get-sandbox-permissions-example",
			"parent": "sandbox-permissions"
		},
		{
			"title": "List all Sandbox Permissions",
			"id": "list-all-sandbox-permissions",
			"exampleId": "list-all-sandbox-permissions-example",
			"parent": "sandbox-permissions"
		},
		{
			"title": "Update Sandbox Permissions",
			"id": "update-sandbox-permissions",
			"exampleId": "update-sandbox-permissions-example",
			"parent": "sandbox-permissions"
		},
		{
			"title": "Delete Sandbox Permissions",
			"id": "delete-sandbox-permissions",
			"exampleId": "delete-sandbox-permissions-example",
			"parent": "sandbox-permissions"
		}
	]
};

/***/ }),
/* 11 */
/* unknown exports provided */
/* all exports used */
/*!*************************************!*\
  !*** ./~/bootstrap/js/scrollspy.js ***!
  \*************************************/
/***/ (function(module, exports) {

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.7
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.7'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);


/***/ }),
/* 12 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./app/scripts/main.coffee ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var mediators, nprogress;

window.jQuery = __webpack_require__(/*! jquery */ 1);

nprogress = __webpack_require__(/*! nprogress */ 9);

mediators = __webpack_require__(/*! ./mediators/global.coffee */ 7);

__webpack_require__(/*! ../styles/app.less */ 8);

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(global.navigator.userAgent) !== true) {
  nprogress.configure({
    showSpinner: false
  });
  nprogress.start();
} else {
  $('body').addClass('mobile');
}

mediators();

nprogress.done();

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/webpack/buildin/global.js */ 4)))

/***/ }),
/* 13 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************!*\
  !*** ./app/scripts/modules/api-documentation.coffee ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

var $, ApiDocumentation, ProcessDocumentation, documents, markdownDocuments, tmplApiArticle, tmplApiSection, tmplNavigation,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$ = __webpack_require__(/*! jquery */ 1);

ProcessDocumentation = __webpack_require__(/*! ./process-documentation.coffee */ 16);

markdownDocuments = __webpack_require__(/*! ./load-markdown-documents.coffee */ 15);

documents = __webpack_require__(/*! ../api-documents.json */ 10);

tmplNavigation = __webpack_require__(/*! ../../templates/navigation.html */ 5);

tmplApiSection = __webpack_require__(/*! ../../templates/api-section.html */ 32);

tmplApiArticle = __webpack_require__(/*! ../../templates/api-article.html */ 31);

module.exports = ApiDocumentation = (function(superClass) {
  extend(ApiDocumentation, superClass);

  function ApiDocumentation() {
    return ApiDocumentation.__super__.constructor.apply(this, arguments);
  }

  ApiDocumentation.prototype.md = markdownDocuments;

  ApiDocumentation.prototype.attachArticleAndNav = function(id, parent) {
    var $parentLink;
    if (parent === '') {
      $(this.elements.nav).append(tmplNavigation(this.oneArticle));
      $(this.elements.doc).append(tmplApiSection(this.oneArticle));
      return $('#section-' + id).append(tmplApiArticle(this.oneArticle));
    } else {
      $parentLink = $(this.elements.nav).find('a[href="#' + parent + '"]');
      if ($parentLink.parent().children('ul').length === 0) {
        $parentLink.parent().append('<ul />');
      }
      $parentLink.parent().find('ul').append(tmplNavigation(this.oneArticle));
      return $('#section-' + parent).append(tmplApiArticle(this.oneArticle));
    }
  };

  ApiDocumentation.prototype.createArticle = function(article, content, example) {
    var id, parent;
    id = article.id;
    parent = article.parent;
    this.oneArticle = {
      id: id,
      title: article.title,
      content: content,
      example: example
    };
    return this.attachArticleAndNav(id, parent);
  };

  ApiDocumentation.prototype.loadApiDocs = function() {
    $('body').addClass('api-page');
    $('#documentation').html('<div class="dark-bg" />');
    return $.each(documents.articles, (function(_this) {
      return function(i, article) {
        var content, example, exampleId, id;
        id = article.id.replace(/\-/g, '_');
        content = _this.md[id];
        if (article.exampleId !== '') {
          exampleId = article.exampleId.replace(/\-/g, '_');
          example = _this.md[exampleId];
        }
        _this.createArticle(article, content, example);
        if ((i + 1) === documents.articles.length) {
          return _this.initProcess();
        }
      };
    })(this));
  };

  return ApiDocumentation;

})(ProcessDocumentation);


/***/ }),
/* 14 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./app/scripts/modules/documentation.coffee ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

var $, ApiDocumentation, Documentation, tmplArticle, tmplNavigation,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$ = __webpack_require__(/*! jquery */ 1);

ApiDocumentation = __webpack_require__(/*! ./api-documentation.coffee */ 13);

tmplNavigation = __webpack_require__(/*! ../../templates/navigation.html */ 5);

tmplArticle = __webpack_require__(/*! ../../templates/article.html */ 33);

module.exports = Documentation = (function(superClass) {
  var groupHtml;

  extend(Documentation, superClass);

  function Documentation() {
    return Documentation.__super__.constructor.apply(this, arguments);
  }

  groupHtml = function(obj, el) {
    var $set, id, next;
    id = $(obj).text().replace(/[\. ,#():-]+/g, '-').toLowerCase();
    id = id.replace('\'', '');
    $set = $();
    $set.push(obj);
    next = obj.nextSibling;
    while (next) {
      if (!$(next).is(el)) {
        $set.push(next);
        next = next.nextSibling;
      } else {
        break;
      }
    }
    if (el === 'h2') {
      return $set.wrapAll('<section id="section-' + id + '" class="documents" />');
    } else {
      return $set.wrapAll('<article class="document" id="' + id + '">');
    }
  };

  Documentation.prototype.urlQueryResult = function(query_string, parameter) {
    var regex, results;
    parameter = parameter.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
    regex = new RegExp('[\\?&]' + parameter + '=([^&#]*)');
    results = regex.exec(query_string);
    if (results !== null) {
      return decodeURIComponent(results[1].replace(/\+/g, " "));
    }
  };

  Documentation.prototype.buildNav = function(obj, regularArticleNav, parent) {
    var $parentLink;
    if ($(obj).is('h2')) {
      return $(this.elements.nav).append(tmplNavigation(regularArticleNav));
    } else {
      $parentLink = $('a[href="#' + parent + '"]');
      if ($parentLink.parent().children('ul').length === 0) {
        $parentLink.parent().append('<ul />');
      }
      return $parentLink.parent().find('ul').append(tmplNavigation(regularArticleNav));
    }
  };

  Documentation.prototype.cleanUpAndCreateNav = function() {
    this.regularArticle.find('h2').each(function(i, obj) {
      return groupHtml(obj, 'h2');
    });
    this.regularArticle.find('h2, h3').each(function(i, obj) {
      return groupHtml(obj, 'h3');
    });
    return this.regularArticle.find('h2, h3').each((function(_this) {
      return function(i, obj) {
        var id, parent, regularArticleNav, title;
        id = $(obj).text().replace(/[\. ,#():-]+/g, '-').toLowerCase();
        id = id.replace('\'', '');
        title = $(obj).text();
        parent = $(obj).parents('section').attr('id').replace('section-', '');
        regularArticleNav = {
          id: id,
          title: title
        };
        return _this.buildNav(obj, regularArticleNav, parent);
      };
    })(this));
  };

  Documentation.prototype.loadDoc = function(doc) {
    var content, id;
    id = doc.replace(/\-/g, '_');
    content = {
      content: this.md[id]
    };
    this.regularArticle = $(tmplArticle(content));
    this.cleanUpAndCreateNav();
    $(this.elements.doc).append(this.regularArticle);
    return this.initProcess();
  };

  Documentation.prototype.init = function() {
    this.doc = this.urlQueryResult(location.search, 'doc');
    if (this.doc === 'api-reference') {
      return this.loadApiDocs();
    } else if (this.doc) {
      return this.loadDoc(this.doc);
    } else {
      return this.loadDoc('getting-started');
    }
  };

  return Documentation;

})(ApiDocumentation);


/***/ }),
/* 15 */
/* unknown exports provided */
/* all exports used */
/*!************************************************************!*\
  !*** ./app/scripts/modules/load-markdown-documents.coffee ***!
  \************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  account_credentials_example: __webpack_require__(/*! ../../documents/api/account-credentials-example.md */ 49),
  account_credentials: __webpack_require__(/*! ../../documents/api/account-credentials.md */ 50),
  account_permissions_example: __webpack_require__(/*! ../../documents/api/account-permissions-example.md */ 51),
  account_permissions: __webpack_require__(/*! ../../documents/api/account-permissions.md */ 52),
  accounts_example: __webpack_require__(/*! ../../documents/api/accounts-example.md */ 53),
  accounts: __webpack_require__(/*! ../../documents/api/accounts.md */ 54),
  apps_example: __webpack_require__(/*! ../../documents/api/apps-example.md */ 55),
  apps: __webpack_require__(/*! ../../documents/api/apps.md */ 56),
  create_a_credit_example: __webpack_require__(/*! ../../documents/api/create-a-credit-example.md */ 57),
  create_a_credit: __webpack_require__(/*! ../../documents/api/create-a-credit.md */ 58),
  create_a_debit_example: __webpack_require__(/*! ../../documents/api/create-a-debit-example.md */ 59),
  create_a_debit: __webpack_require__(/*! ../../documents/api/create-a-debit.md */ 60),
  create_a_mv_delegate_example: __webpack_require__(/*! ../../documents/api/create-a-mv-delegate-example.md */ 61),
  create_a_mv_delegate: __webpack_require__(/*! ../../documents/api/create-a-mv-delegate.md */ 62),
  create_a_mv_example: __webpack_require__(/*! ../../documents/api/create-a-mv-example.md */ 63),
  create_a_mv: __webpack_require__(/*! ../../documents/api/create-a-mv.md */ 64),
  create_a_report_example: __webpack_require__(/*! ../../documents/api/create-a-report-example.md */ 65),
  create_a_report_instance_example: __webpack_require__(/*! ../../documents/api/create-a-report-instance-example.md */ 66),
  create_a_report_instance: __webpack_require__(/*! ../../documents/api/create-a-report-instance.md */ 67),
  create_a_report: __webpack_require__(/*! ../../documents/api/create-a-report.md */ 68),
  create_account_credentials_example: __webpack_require__(/*! ../../documents/api/create-account-credentials-example.md */ 69),
  create_account_credentials: __webpack_require__(/*! ../../documents/api/create-account-credentials.md */ 70),
  create_an_app_example: __webpack_require__(/*! ../../documents/api/create-an-app-example.md */ 71),
  create_an_app: __webpack_require__(/*! ../../documents/api/create-an-app.md */ 72),
  create_an_order_example: __webpack_require__(/*! ../../documents/api/create-an-order-example.md */ 73),
  create_an_order: __webpack_require__(/*! ../../documents/api/create-an-order.md */ 74),
  create_sandbox_permissions_example: __webpack_require__(/*! ../../documents/api/create-sandbox-permissions-example.md */ 75),
  create_sandbox_permissions: __webpack_require__(/*! ../../documents/api/create-sandbox-permissions.md */ 76),
  credits_example: __webpack_require__(/*! ../../documents/api/credits-example.md */ 77),
  credits: __webpack_require__(/*! ../../documents/api/credits.md */ 78),
  debits_example: __webpack_require__(/*! ../../documents/api/debits-example.md */ 79),
  debits: __webpack_require__(/*! ../../documents/api/debits.md */ 80),
  delete_account_credentials_example: __webpack_require__(/*! ../../documents/api/delete-account-credentials-example.md */ 81),
  delete_account_credentials: __webpack_require__(/*! ../../documents/api/delete-account-credentials.md */ 82),
  delete_sandbox_permissions_example: __webpack_require__(/*! ../../documents/api/delete-sandbox-permissions-example.md */ 83),
  delete_sandbox_permissions: __webpack_require__(/*! ../../documents/api/delete-sandbox-permissions.md */ 84),
  documentation_overview: __webpack_require__(/*! ../../documents/api/documentation-overview.md */ 85),
  get_a_credit_example: __webpack_require__(/*! ../../documents/api/get-a-credit-example.md */ 86),
  get_a_credit: __webpack_require__(/*! ../../documents/api/get-a-credit.md */ 87),
  get_a_debit_example: __webpack_require__(/*! ../../documents/api/get-a-debit-example.md */ 88),
  get_a_debit: __webpack_require__(/*! ../../documents/api/get-a-debit.md */ 89),
  get_a_mv_delegate_example: __webpack_require__(/*! ../../documents/api/get-a-mv-delegate-example.md */ 90),
  get_a_mv_delegate: __webpack_require__(/*! ../../documents/api/get-a-mv-delegate.md */ 91),
  get_a_mv_example: __webpack_require__(/*! ../../documents/api/get-a-mv-example.md */ 92),
  get_a_mv: __webpack_require__(/*! ../../documents/api/get-a-mv.md */ 93),
  get_a_report_example: __webpack_require__(/*! ../../documents/api/get-a-report-example.md */ 94),
  get_a_report_instance_example: __webpack_require__(/*! ../../documents/api/get-a-report-instance-example.md */ 95),
  get_a_report_instance: __webpack_require__(/*! ../../documents/api/get-a-report-instance.md */ 96),
  get_a_report: __webpack_require__(/*! ../../documents/api/get-a-report.md */ 97),
  get_account_credentials_example: __webpack_require__(/*! ../../documents/api/get-account-credentials-example.md */ 98),
  get_account_credentials: __webpack_require__(/*! ../../documents/api/get-account-credentials.md */ 99),
  get_account_permissions_example: __webpack_require__(/*! ../../documents/api/get-account-permissions-example.md */ 100),
  get_account_permissions: __webpack_require__(/*! ../../documents/api/get-account-permissions.md */ 101),
  get_an_account_example: __webpack_require__(/*! ../../documents/api/get-an-account-example.md */ 102),
  get_an_account: __webpack_require__(/*! ../../documents/api/get-an-account.md */ 103),
  get_an_app_by_mac_example: __webpack_require__(/*! ../../documents/api/get-an-app-by-mac-example.md */ 104),
  get_an_app_by_mac: __webpack_require__(/*! ../../documents/api/get-an-app-by-mac.md */ 105),
  get_an_app_example: __webpack_require__(/*! ../../documents/api/get-an-app-example.md */ 106),
  get_an_app: __webpack_require__(/*! ../../documents/api/get-an-app.md */ 107),
  get_an_lp_example: __webpack_require__(/*! ../../documents/api/get-an-lp-example.md */ 108),
  get_an_lp: __webpack_require__(/*! ../../documents/api/get-an-lp.md */ 109),
  get_an_mv_request_schema_example: __webpack_require__(/*! ../../documents/api/get-an-mv-request-schema-example.md */ 110),
  get_an_mv_request_schema: __webpack_require__(/*! ../../documents/api/get-an-mv-request-schema.md */ 111),
  get_an_order_example: __webpack_require__(/*! ../../documents/api/get-an-order-example.md */ 112),
  get_an_order: __webpack_require__(/*! ../../documents/api/get-an-order.md */ 113),
  get_live_credentials_example: __webpack_require__(/*! ../../documents/api/get-live-credentials-example.md */ 114),
  get_live_credentials: __webpack_require__(/*! ../../documents/api/get-live-credentials.md */ 115),
  get_live_permissions_example: __webpack_require__(/*! ../../documents/api/get-live-permissions-example.md */ 116),
  get_live_permissions: __webpack_require__(/*! ../../documents/api/get-live-permissions.md */ 117),
  get_report_instance_data_example: __webpack_require__(/*! ../../documents/api/get-report-instance-data-example.md */ 118),
  get_report_instance_data: __webpack_require__(/*! ../../documents/api/get-report-instance-data.md */ 119),
  get_sandbox_credentials_example: __webpack_require__(/*! ../../documents/api/get-sandbox-credentials-example.md */ 120),
  get_sandbox_credentials: __webpack_require__(/*! ../../documents/api/get-sandbox-credentials.md */ 121),
  get_sandbox_mvs_example: __webpack_require__(/*! ../../documents/api/get-sandbox-mvs-example.md */ 122),
  get_sandbox_mvs: __webpack_require__(/*! ../../documents/api/get-sandbox-mvs.md */ 123),
  get_sandbox_permissions_example: __webpack_require__(/*! ../../documents/api/get-sandbox-permissions-example.md */ 124),
  get_sandbox_permissions: __webpack_require__(/*! ../../documents/api/get-sandbox-permissions.md */ 125),
  list_all_apps_example: __webpack_require__(/*! ../../documents/api/list-all-apps-example.md */ 126),
  list_all_apps: __webpack_require__(/*! ../../documents/api/list-all-apps.md */ 127),
  list_all_credits_example: __webpack_require__(/*! ../../documents/api/list-all-credits-example.md */ 128),
  list_all_credits: __webpack_require__(/*! ../../documents/api/list-all-credits.md */ 129),
  list_all_debits_example: __webpack_require__(/*! ../../documents/api/list-all-debits-example.md */ 130),
  list_all_debits: __webpack_require__(/*! ../../documents/api/list-all-debits.md */ 131),
  list_all_live_permissions_example: __webpack_require__(/*! ../../documents/api/list-all-live-permissions-example.md */ 132),
  list_all_live_permissions: __webpack_require__(/*! ../../documents/api/list-all-live-permissions.md */ 133),
  list_all_lps_example: __webpack_require__(/*! ../../documents/api/list-all-lps-example.md */ 134),
  list_all_lps: __webpack_require__(/*! ../../documents/api/list-all-lps.md */ 135),
  list_all_orders_example: __webpack_require__(/*! ../../documents/api/list-all-orders-example.md */ 136),
  list_all_orders: __webpack_require__(/*! ../../documents/api/list-all-orders.md */ 137),
  list_all_report_instances_example: __webpack_require__(/*! ../../documents/api/list-all-report-instances-example.md */ 138),
  list_all_report_instances: __webpack_require__(/*! ../../documents/api/list-all-report-instances.md */ 139),
  list_all_reports_example: __webpack_require__(/*! ../../documents/api/list-all-reports-example.md */ 140),
  list_all_reports: __webpack_require__(/*! ../../documents/api/list-all-reports.md */ 141),
  list_all_sandbox_permissions_example: __webpack_require__(/*! ../../documents/api/list-all-sandbox-permissions-example.md */ 142),
  list_all_sandbox_permissions: __webpack_require__(/*! ../../documents/api/list-all-sandbox-permissions.md */ 143),
  live_credentials_example: __webpack_require__(/*! ../../documents/api/live-credentials-example.md */ 144),
  live_credentials: __webpack_require__(/*! ../../documents/api/live-credentials.md */ 145),
  live_permissions_example: __webpack_require__(/*! ../../documents/api/live-permissions-example.md */ 146),
  live_permissions: __webpack_require__(/*! ../../documents/api/live-permissions.md */ 147),
  loyalty_programs_example: __webpack_require__(/*! ../../documents/api/loyalty-programs-example.md */ 148),
  loyalty_programs: __webpack_require__(/*! ../../documents/api/loyalty-programs.md */ 149),
  member_validations_example: __webpack_require__(/*! ../../documents/api/member-validations-example.md */ 150),
  member_validations: __webpack_require__(/*! ../../documents/api/member-validations.md */ 151),
  mv_delegates_example: __webpack_require__(/*! ../../documents/api/mv-delegates-example.md */ 152),
  mv_delegates: __webpack_require__(/*! ../../documents/api/mv-delegates.md */ 153),
  mv_request_schema_example: __webpack_require__(/*! ../../documents/api/mv-request-schema-example.md */ 154),
  mv_request_schema: __webpack_require__(/*! ../../documents/api/mv-request-schema.md */ 155),
  orders_example: __webpack_require__(/*! ../../documents/api/orders-example.md */ 156),
  orders: __webpack_require__(/*! ../../documents/api/orders.md */ 157),
  release_notes: __webpack_require__(/*! ../../documents/api/release-notes.md */ 158),
  report_instances_example: __webpack_require__(/*! ../../documents/api/report-instances-example.md */ 159),
  report_instances: __webpack_require__(/*! ../../documents/api/report-instances.md */ 160),
  reports_example: __webpack_require__(/*! ../../documents/api/reports-example.md */ 161),
  reports: __webpack_require__(/*! ../../documents/api/reports.md */ 162),
  sandbox_credentials_example: __webpack_require__(/*! ../../documents/api/sandbox-credentials-example.md */ 163),
  sandbox_credentials: __webpack_require__(/*! ../../documents/api/sandbox-credentials.md */ 164),
  sandbox_mvs_example: __webpack_require__(/*! ../../documents/api/sandbox-mvs-example.md */ 165),
  sandbox_mvs: __webpack_require__(/*! ../../documents/api/sandbox-mvs.md */ 166),
  sandbox_permissions_example: __webpack_require__(/*! ../../documents/api/sandbox-permissions-example.md */ 167),
  sandbox_permissions: __webpack_require__(/*! ../../documents/api/sandbox-permissions.md */ 168),
  update_a_credit_example: __webpack_require__(/*! ../../documents/api/update-a-credit-example.md */ 169),
  update_a_credit: __webpack_require__(/*! ../../documents/api/update-a-credit.md */ 170),
  update_a_debit_example: __webpack_require__(/*! ../../documents/api/update-a-debit-example.md */ 171),
  update_a_debit: __webpack_require__(/*! ../../documents/api/update-a-debit.md */ 172),
  update_a_mv_example: __webpack_require__(/*! ../../documents/api/update-a-mv-example.md */ 173),
  update_a_mv: __webpack_require__(/*! ../../documents/api/update-a-mv.md */ 174),
  update_a_report_example: __webpack_require__(/*! ../../documents/api/update-a-report-example.md */ 175),
  update_a_report: __webpack_require__(/*! ../../documents/api/update-a-report.md */ 176),
  update_account_permissions_example: __webpack_require__(/*! ../../documents/api/update-account-permissions-example.md */ 177),
  update_account_permissions: __webpack_require__(/*! ../../documents/api/update-account-permissions.md */ 178),
  update_an_account_example: __webpack_require__(/*! ../../documents/api/update-an-account-example.md */ 179),
  update_an_account: __webpack_require__(/*! ../../documents/api/update-an-account.md */ 180),
  update_an_order_example: __webpack_require__(/*! ../../documents/api/update-an-order-example.md */ 181),
  update_an_order: __webpack_require__(/*! ../../documents/api/update-an-order.md */ 182),
  update_sandbox_permissions_example: __webpack_require__(/*! ../../documents/api/update-sandbox-permissions-example.md */ 183),
  update_sandbox_permissions: __webpack_require__(/*! ../../documents/api/update-sandbox-permissions.md */ 184),
  getting_started: __webpack_require__(/*! ../../documents/getting-started.md */ 185),
  lp_reference: __webpack_require__(/*! ../../documents/lp-reference.md */ 186),
  reference_manual: __webpack_require__(/*! ../../documents/reference-manual.md */ 187)
};


/***/ }),
/* 16 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************************!*\
  !*** ./app/scripts/modules/process-documentation.coffee ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

var $, ProcessDocumentation, Scrollspy, prettify, responsiveTables;

$ = __webpack_require__(/*! jquery */ 1);

__webpack_require__(/*! fixto */ 29);

prettify = __webpack_require__(/*! google-code-prettify */ 30);

Scrollspy = __webpack_require__(/*! ./scrollspy.coffee */ 18);

responsiveTables = __webpack_require__(/*! ./responsive-tables.coffee */ 17);

module.exports = ProcessDocumentation = (function() {
  function ProcessDocumentation(options) {
    this.options = options;
    if (this.options) {
      this.elements = this.options.elements;
    }
  }

  ProcessDocumentation.prototype.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  ProcessDocumentation.prototype.initFixTo = function() {
    var el;
    el = this.elements;
    $(el.humans).fixTo('.document', {
      mind: el.header
    });
    return $(el.machines).each(function(i, obj) {
      var $document;
      $document = $(obj).parents('.document');
      return $(obj).fixTo($document, {
        mind: el.header
      });
    });
  };

  ProcessDocumentation.prototype.scrollSpyController = function(type) {
    var $imgs, hash, imgLength, imgLoaded, initOrRefresh, scrollSpy;
    if (type === 'init') {
      scrollSpy = new Scrollspy();
    }
    hash = window.location.hash;
    $imgs = $(this.elements.doc).find('img');
    imgLength = $imgs.length;
    imgLoaded = 0;
    initOrRefresh = (function(_this) {
      return function() {
        if (type === 'init') {
          return scrollSpy.init();
        } else {
          $('body').scrollspy('refresh');
          return $(_this.elements.nav).find('a[href="' + hash + '"]').parent().addClass('active');
        }
      };
    })(this);
    this.scrollToHash(hash, 200);
    if (imgLength === 0) {
      return initOrRefresh();
    } else {
      return $imgs.on('load', (function(_this) {
        return function() {
          imgLoaded++;
          if (imgLoaded === imgLength) {
            return initOrRefresh();
          }
        };
      })(this));
    }
  };

  ProcessDocumentation.prototype.processHtml = function() {
    var title;
    $('pre').addClass('prettyprint');
    prettyPrint();
    $(this.elements.doc).find('img').parent().addClass('center');
    $(this.elements.doc).find('table').wrap('<div class="definitions" />');
    title = $('h1').text();
    $('title').text('Points - ' + title);
    if (this.doc === void 0) {
      return $(this.elements.header).find('li:first').addClass('active');
    } else {
      return $(this.elements.header).find('a:contains("' + title + '")').parent().addClass('active');
    }
  };

  ProcessDocumentation.prototype.bindDocNavEvents = function() {
    return $(this.elements.nav).find('a').on('click', (function(_this) {
      return function(evt) {
        var hash;
        evt.preventDefault();
        hash = $(evt.currentTarget).attr('href');
        return _this.scrollToHash(hash, 0);
      };
    })(this));
  };

  ProcessDocumentation.prototype.scrollToHash = function(hash, time) {
    if (hash) {
      return $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, time);
    }
  };

  ProcessDocumentation.prototype.bindHeaderNavEvents = function() {
    return $(this.elements.header).find('a').on('click', (function(_this) {
      return function(evt) {
        var $ct, currentUrl, title, url;
        if (history.pushState && _this.isMobile !== true) {
          NProgress.start();
          evt.preventDefault();
          $ct = $(evt.currentTarget);
          currentUrl = $(_this.elements.header).find('.active a').attr('href');
          url = $ct.attr('href');
          title = $ct.text;
          $(_this.elements.header).find('li').removeClass('active');
          $ct.parent().addClass('active');
          $('body').removeClass('api-page');
          history.pushState({
            url: currentUrl
          }, title, url);
          $(_this.elements.nav).empty();
          $(_this.elements.doc).empty();
          window.scrollTo(0, 0);
          _this.reload();
          return NProgress.done();
        }
      };
    })(this));
  };

  ProcessDocumentation.prototype.bindPopstate = function() {
    var $activeLink, title, url;
    $activeLink = $(this.elements.header).find('a[href="' + url + '"]');
    title = $activeLink.text();
    url = $activeLink.attr('href');
    history.pushState({
      url: url
    }, title, url);
    return $(window).on('popstate', (function(_this) {
      return function(evt) {
        $(_this.elements.header).find('li').removeClass('active');
        $('body').removeClass('api-page');
        $(_this.elements.nav).empty();
        $(_this.elements.doc).empty();
        return _this.reload();
      };
    })(this));
  };

  ProcessDocumentation.prototype.reload = function() {
    this.init();
    return this.scrollSpyController();
  };

  ProcessDocumentation.prototype.initProcess = function() {
    this.processHtml();
    responsiveTables('table');
    if (this.isMobile !== true) {
      this.initFixTo();
    }
    return this.bindDocNavEvents();
  };

  return ProcessDocumentation;

})();


/***/ }),
/* 17 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************!*\
  !*** ./app/scripts/modules/responsive-tables.coffee ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

var $, responsiveTables;

$ = __webpack_require__(/*! jquery */ 1);

module.exports = responsiveTables = function(table) {
  return $(table).each(function(table_id, table) {
    var $table, $th, $tr, entries, entry, labels, ul;
    $table = $(table);
    $th = $table.find('thead').find('th');
    $tr = $table.find('tbody').find('tr');
    labels = [];
    entries = [];
    entry = {};
    $th.each(function(i, th) {
      return labels[i] = $(th).text();
    });
    $tr.each(function(row, tr) {
      $(tr).find('td').each(function(i, td) {
        var value;
        value = $(td).html();
        return entry['"' + labels[i] + '"'] = value;
      });
      entries.push(entry);
      return entry = {};
    });
    ul = '<ul id="table-list-id-' + table_id + '" class="list-from-table" />';
    $table.after(ul);
    return $.each(entries, function(entry_id, entry) {
      var li;
      li = '<li><dl id="entry-id-' + entry_id + '"></dl></li>';
      $('#table-list-id-' + table_id).append(li);
      return $.each(labels, function(i, label) {
        var dd, dt;
        dt = '<dt>' + label + '</dt>';
        dd = '<dd>' + entry['"' + label + '"'] + '</dd>';
        return $('#table-list-id-' + table_id).find('#entry-id-' + entry_id).append(dt + dd);
      });
    });
  });
};


/***/ }),
/* 18 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************!*\
  !*** ./app/scripts/modules/scrollspy.coffee ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

var $, Scrollspy;

$ = __webpack_require__(/*! jquery */ 1);

__webpack_require__(/*! bootstrap/js/scrollspy */ 11);

module.exports = Scrollspy = (function() {
  function Scrollspy() {}

  Scrollspy.prototype.init = function(isMobile) {
    $('body').scrollspy({
      target: '#doc-navigation',
      offest: 0
    });
    if (isMobile !== true) {
      return $('#doc-navigation').on('activate.bs.scrollspy', function(evt) {
        var $active, $ct, $dom, $navLi, hash, id;
        $ct = $(evt.currentTarget);
        $active = $ct.find('.active');
        $navLi = $('.nav li');
        $navLi.removeClass('open-subnav');
        $active.addClass('open-subnav');
        if ($active.parents('.active')) {
          $active.parents('li').removeClass('active').addClass('open-subnav');
        }
        hash = $active.find('> a').attr('href');
        id = hash.replace('#', '');
        $dom = $(hash);
        $dom.attr('id', '');
        if (history.pushState) {
          history.replaceState('', hash, hash);
        } else {
          location.replace(hash);
        }
        return $dom.attr('id', id);
      });
    }
  };

  return Scrollspy;

})();


/***/ }),
/* 19 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./app/images/batch.png ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/batch.png";

/***/ }),
/* 20 */
/* unknown exports provided */
/* all exports used */
/*!**************************************!*\
  !*** ./app/images/create-an-app.png ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/create-an-app.png";

/***/ }),
/* 21 */
/* unknown exports provided */
/* all exports used */
/*!***************************************!*\
  !*** ./app/images/empty-app-list.png ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/empty-app-list.png";

/***/ }),
/* 22 */
/* unknown exports provided */
/* all exports used */
/*!************************************!*\
  !*** ./app/images/example-app.png ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/example-app.png";

/***/ }),
/* 23 */
/* unknown exports provided */
/* all exports used */
/*!****************************************!*\
  !*** ./app/images/getting-started.png ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/getting-started.png";

/***/ }),
/* 24 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./app/images/lp-api-buy.png ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/lp-api-buy.png";

/***/ }),
/* 25 */
/* unknown exports provided */
/* all exports used */
/*!************************************!*\
  !*** ./app/images/lp-overview.png ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/lp-overview.png";

/***/ }),
/* 26 */
/* unknown exports provided */
/* all exports used */
/*!********************************************!*\
  !*** ./app/images/sandbox-credentials.png ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/sandbox-credentials.png";

/***/ }),
/* 27 */
/* unknown exports provided */
/* all exports used */
/*!*******************************!*\
  !*** ./app/images/sso-mv.png ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/sso-mv.png";

/***/ }),
/* 28 */
/* unknown exports provided */
/* all exports used */
/*!****************************!*\
  !*** ./app/images/sso.png ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/sso.png";

/***/ }),
/* 29 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./~/fixto/dist/fixto.min.js ***!
  \***********************************/
/***/ (function(module, exports) {

/*! fixto - v0.5.0 - 2016-06-16
* http://github.com/bbarakaci/fixto/*/
var fixto=function(e,t,n){function s(){this._vendor=null}function f(){var e=!1,t=n.createElement("div"),r=n.createElement("div");t.appendChild(r),t.style[u]="translate(0)",t.style.marginTop="10px",t.style.visibility="hidden",r.style.position="fixed",r.style.top=0,n.body.appendChild(t);var i=r.getBoundingClientRect();return i.top>0&&(e=!0),n.body.removeChild(t),e}function d(t,n,r){this.child=t,this._$child=e(t),this.parent=n,this.options={className:"fixto-fixed",top:0,mindViewport:!1},this._setOptions(r)}function v(e,t,n){d.call(this,e,t,n),this._replacer=new i.MimicNode(e),this._ghostNode=this._replacer.replacer,this._saveStyles(),this._saveViewportHeight(),this._proxied_onscroll=this._bind(this._onscroll,this),this._proxied_onresize=this._bind(this._onresize,this),this.start()}function m(e,t,n){d.call(this,e,t,n),this.start()}var r=function(){var e={getAll:function(e){return n.defaultView.getComputedStyle(e)},get:function(e,t){return this.getAll(e)[t]},toFloat:function(e){return parseFloat(e,10)||0},getFloat:function(e,t){return this.toFloat(this.get(e,t))},_getAllCurrentStyle:function(e){return e.currentStyle}};return n.documentElement.currentStyle&&(e.getAll=e._getAllCurrentStyle),e}(),i=function(){function t(e){this.element=e,this.replacer=n.createElement("div"),this.replacer.style.visibility="hidden",this.hide(),e.parentNode.insertBefore(this.replacer,e)}t.prototype={replace:function(){var e=this.replacer.style,t=r.getAll(this.element);e.width=this._width(),e.height=this._height(),e.marginTop=t.marginTop,e.marginBottom=t.marginBottom,e.marginLeft=t.marginLeft,e.marginRight=t.marginRight,e.cssFloat=t.cssFloat,e.styleFloat=t.styleFloat,e.position=t.position,e.top=t.top,e.right=t.right,e.bottom=t.bottom,e.left=t.left,e.display=t.display},hide:function(){this.replacer.style.display="none"},_width:function(){return this.element.getBoundingClientRect().width+"px"},_widthOffset:function(){return this.element.offsetWidth+"px"},_height:function(){return this.element.getBoundingClientRect().height+"px"},_heightOffset:function(){return this.element.offsetHeight+"px"},destroy:function(){e(this.replacer).remove();for(var t in this)this.hasOwnProperty(t)&&(this[t]=null)}};var i=n.documentElement.getBoundingClientRect();return i.width||(t.prototype._width=t.prototype._widthOffset,t.prototype._height=t.prototype._heightOffset),{MimicNode:t,computedStyle:r}}();s.prototype={_vendors:{webkit:{cssPrefix:"-webkit-",jsPrefix:"Webkit"},moz:{cssPrefix:"-moz-",jsPrefix:"Moz"},ms:{cssPrefix:"-ms-",jsPrefix:"ms"},opera:{cssPrefix:"-o-",jsPrefix:"O"}},_prefixJsProperty:function(e,t){return e.jsPrefix+t[0].toUpperCase()+t.substr(1)},_prefixValue:function(e,t){return e.cssPrefix+t},_valueSupported:function(e,t,n){try{return n.style[e]=t,n.style[e]===t}catch(r){return!1}},propertySupported:function(e){return n.documentElement.style[e]!==undefined},getJsProperty:function(e){if(this.propertySupported(e))return e;if(this._vendor)return this._prefixJsProperty(this._vendor,e);var t;for(var n in this._vendors){t=this._prefixJsProperty(this._vendors[n],e);if(this.propertySupported(t))return this._vendor=this._vendors[n],t}return null},getCssValue:function(e,t){var r=n.createElement("div"),i=this.getJsProperty(e);if(this._valueSupported(i,t,r))return t;var s;if(this._vendor){s=this._prefixValue(this._vendor,t);if(this._valueSupported(i,s,r))return s}for(var o in this._vendors){s=this._prefixValue(this._vendors[o],t);if(this._valueSupported(i,s,r))return this._vendor=this._vendors[o],s}return null}};var o=new s,u=o.getJsProperty("transform"),a,l=o.getCssValue("position","sticky"),c=o.getCssValue("position","fixed"),h=navigator.appName==="Microsoft Internet Explorer",p;h&&(p=parseFloat(navigator.appVersion.split("MSIE")[1])),d.prototype={_mindtop:function(){var e=0;if(this._$mind){var t,n,i;for(var s=0,o=this._$mind.length;s<o;s++){t=this._$mind[s],n=t.getBoundingClientRect();if(n.height)e+=n.height;else{var u=r.getAll(t);e+=t.offsetHeight+r.toFloat(u.marginTop)+r.toFloat(u.marginBottom)}}}return e},stop:function(){this._stop(),this._running=!1},start:function(){this._running||(this._start(),this._running=!0)},destroy:function(){this.stop(),this._destroy(),this._$child.removeData("fixto-instance");for(var e in this)this.hasOwnProperty(e)&&(this[e]=null)},_setOptions:function(t){e.extend(this.options,t),this.options.mind&&(this._$mind=e(this.options.mind)),this.options.zIndex&&(this.child.style.zIndex=this.options.zIndex)},setOptions:function(e){this._setOptions(e),this.refresh()},_stop:function(){},_start:function(){},_destroy:function(){},refresh:function(){}},v.prototype=new d,e.extend(v.prototype,{_bind:function(e,t){return function(){return e.call(t)}},_toresize:p===8?n.documentElement:t,_onscroll:function(){this._scrollTop=n.documentElement.scrollTop||n.body.scrollTop,this._parentBottom=this.parent.offsetHeight+this._fullOffset("offsetTop",this.parent),this.options.mindBottomPadding!==!1&&(this._parentBottom-=r.getFloat(this.parent,"paddingBottom"));if(!this.fixed&&this._shouldFix())this._fix(),this._adjust();else{if(this._scrollTop>this._parentBottom||this._scrollTop<this._fullOffset("offsetTop",this._ghostNode)-this.options.top-this._mindtop()){this._unfix();return}this._adjust()}},_shouldFix:function(){if(this._scrollTop<this._parentBottom&&this._scrollTop>this._fullOffset("offsetTop",this.child)-this.options.top-this._mindtop())return this.options.mindViewport&&!this._isViewportAvailable()?!1:!0},_isViewportAvailable:function(){var e=r.getAll(this.child);return this._viewportHeight>this.child.offsetHeight+r.toFloat(e.marginTop)+r.toFloat(e.marginBottom)},_adjust:function(){var t=0,n=this._mindtop(),i=0,s=r.getAll(this.child),o=null;a&&(o=this._getContext(),o&&(t=Math.abs(o.getBoundingClientRect().top))),i=this._parentBottom-this._scrollTop-(this.child.offsetHeight+r.toFloat(s.marginBottom)+n+this.options.top),i>0&&(i=0),this.child.style.top=i+n+t+this.options.top-r.toFloat(s.marginTop)+"px"},_fullOffset:function(t,n,r){var i=n[t],s=n.offsetParent;while(s!==null&&s!==r)i+=s[t],s=s.offsetParent;return i},_getContext:function(){var e,t=this.child,i=null,s;while(!i){e=t.parentNode;if(e===n.documentElement)return null;s=r.getAll(e);if(s[u]!=="none"){i=e;break}t=e}return i},_fix:function(){var t=this.child,i=t.style,s=r.getAll(t),o=t.getBoundingClientRect().left,u=s.width;this._saveStyles(),n.documentElement.currentStyle&&(u=t.offsetWidth-(r.toFloat(s.paddingLeft)+r.toFloat(s.paddingRight)+r.toFloat(s.borderLeftWidth)+r.toFloat(s.borderRightWidth))+"px");if(a){var f=this._getContext();f&&(o=t.getBoundingClientRect().left-f.getBoundingClientRect().left)}this._replacer.replace(),i.left=o-r.toFloat(s.marginLeft)+"px",i.width=u,i.position="fixed",i.top=this._mindtop()+this.options.top-r.toFloat(s.marginTop)+"px",this._$child.addClass(this.options.className),this.fixed=!0},_unfix:function(){var t=this.child.style;this._replacer.hide(),t.position=this._childOriginalPosition,t.top=this._childOriginalTop,t.width=this._childOriginalWidth,t.left=this._childOriginalLeft,this._$child.removeClass(this.options.className),this.fixed=!1},_saveStyles:function(){var e=this.child.style;this._childOriginalPosition=e.position,this._childOriginalTop=e.top,this._childOriginalWidth=e.width,this._childOriginalLeft=e.left},_onresize:function(){this.refresh()},_saveViewportHeight:function(){this._viewportHeight=t.innerHeight||n.documentElement.clientHeight},_stop:function(){this._unfix(),e(t).unbind("scroll",this._proxied_onscroll),e(this._toresize).unbind("resize",this._proxied_onresize)},_start:function(){this._onscroll(),e(t).bind("scroll",this._proxied_onscroll),e(this._toresize).bind("resize",this._proxied_onresize)},_destroy:function(){this._replacer.destroy()},refresh:function(){this._saveViewportHeight(),this._unfix(),this._onscroll()}}),m.prototype=new d,e.extend(m.prototype,{_start:function(){var e=r.getAll(this.child);this._childOriginalPosition=e.position,this._childOriginalTop=e.top,this.child.style.position=l,this.refresh()},_stop:function(){this.child.style.position=this._childOriginalPosition,this.child.style.top=this._childOriginalTop},refresh:function(){this.child.style.top=this._mindtop()+this.options.top+"px"}});var g=function(t,n,r){return l&&!r||l&&r&&r.useNativeSticky!==!1?new m(t,n,r):c?(a===undefined&&(a=f()),new v(t,n,r)):"Neither fixed nor sticky positioning supported"};return p<8&&(g=function(){return"not supported"}),e.fn.fixTo=function(t,n){var r=e(t),i=0;return this.each(function(){var s=e(this).data("fixto-instance");if(!s)e(this).data("fixto-instance",g(this,r[i],n));else{var o=t;s[o].call(s,n)}i++})},{FixToContainer:v,fixTo:g,computedStyle:r,mimicNode:i}}(window.jQuery,window,document);

/***/ }),
/* 30 */
/* unknown exports provided */
/* all exports used */
/*!************************************************!*\
  !*** ./~/google-code-prettify/src/prettify.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Copyright (C) 2006 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


/**
 * @fileoverview
 * some functions for browser-side pretty printing of code contained in html.
 *
 * <p>
 * For a fairly comprehensive set of languages see the
 * <a href="http://google-code-prettify.googlecode.com/svn/trunk/README.html#langs">README</a>
 * file that came with this source.  At a minimum, the lexer should work on a
 * number of languages including C and friends, Java, Python, Bash, SQL, HTML,
 * XML, CSS, Javascript, and Makefiles.  It works passably on Ruby, PHP and Awk
 * and a subset of Perl, but, because of commenting conventions, doesn't work on
 * Smalltalk, Lisp-like, or CAML-like languages without an explicit lang class.
 * <p>
 * Usage: <ol>
 * <li> include this source file in an html page via
 *   {@code <script type="text/javascript" src="/path/to/prettify.js"></script>}
 * <li> define style rules.  See the example page for examples.
 * <li> mark the {@code <pre>} and {@code <code>} tags in your source with
 *    {@code class=prettyprint.}
 *    You can also use the (html deprecated) {@code <xmp>} tag, but the pretty
 *    printer needs to do more substantial DOM manipulations to support that, so
 *    some css styles may not be preserved.
 * </ol>
 * That's it.  I wanted to keep the API as simple as possible, so there's no
 * need to specify which language the code is in, but if you wish, you can add
 * another class to the {@code <pre>} or {@code <code>} element to specify the
 * language, as in {@code <pre class="prettyprint lang-java">}.  Any class that
 * starts with "lang-" followed by a file extension, specifies the file type.
 * See the "lang-*.js" files in this directory for code that implements
 * per-language file handlers.
 * <p>
 * Change log:<br>
 * cbeust, 2006/08/22
 * <blockquote>
 *   Java annotations (start with "@") are now captured as literals ("lit")
 * </blockquote>
 * @requires console
 */

// JSLint declarations
/*global console, document, navigator, setTimeout, window, define */

/** @define {boolean} */
var IN_GLOBAL_SCOPE = true;

/**
 * Split {@code prettyPrint} into multiple timeouts so as not to interfere with
 * UI events.
 * If set to {@code false}, {@code prettyPrint()} is synchronous.
 */
window['PR_SHOULD_USE_CONTINUATION'] = true;

/**
 * Pretty print a chunk of code.
 * @param {string} sourceCodeHtml The HTML to pretty print.
 * @param {string} opt_langExtension The language name to use.
 *     Typically, a filename extension like 'cpp' or 'java'.
 * @param {number|boolean} opt_numberLines True to number lines,
 *     or the 1-indexed number of the first line in sourceCodeHtml.
 * @return {string} code as html, but prettier
 */
var prettyPrintOne;
/**
 * Find all the {@code <pre>} and {@code <code>} tags in the DOM with
 * {@code class=prettyprint} and prettify them.
 *
 * @param {Function} opt_whenDone called when prettifying is done.
 * @param {HTMLElement|HTMLDocument} opt_root an element or document
 *   containing all the elements to pretty print.
 *   Defaults to {@code document.body}.
 */
var prettyPrint;


(function () {
  var win = window;
  // Keyword lists for various languages.
  // We use things that coerce to strings to make them compact when minified
  // and to defeat aggressive optimizers that fold large string constants.
  var FLOW_CONTROL_KEYWORDS = ["break,continue,do,else,for,if,return,while"];
  var C_KEYWORDS = [FLOW_CONTROL_KEYWORDS,"auto,case,char,const,default," + 
      "double,enum,extern,float,goto,inline,int,long,register,short,signed," +
      "sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"];
  var COMMON_KEYWORDS = [C_KEYWORDS,"catch,class,delete,false,import," +
      "new,operator,private,protected,public,this,throw,true,try,typeof"];
  var CPP_KEYWORDS = [COMMON_KEYWORDS,"alignof,align_union,asm,axiom,bool," +
      "concept,concept_map,const_cast,constexpr,decltype,delegate," +
      "dynamic_cast,explicit,export,friend,generic,late_check," +
      "mutable,namespace,nullptr,property,reinterpret_cast,static_assert," +
      "static_cast,template,typeid,typename,using,virtual,where"];
  var JAVA_KEYWORDS = [COMMON_KEYWORDS,
      "abstract,assert,boolean,byte,extends,final,finally,implements,import," +
      "instanceof,interface,null,native,package,strictfp,super,synchronized," +
      "throws,transient"];
  var CSHARP_KEYWORDS = [JAVA_KEYWORDS,
      "as,base,by,checked,decimal,delegate,descending,dynamic,event," +
      "fixed,foreach,from,group,implicit,in,internal,into,is,let," +
      "lock,object,out,override,orderby,params,partial,readonly,ref,sbyte," +
      "sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort," +
      "var,virtual,where"];
  var COFFEE_KEYWORDS = "all,and,by,catch,class,else,extends,false,finally," +
      "for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then," +
      "throw,true,try,unless,until,when,while,yes";
  var JSCRIPT_KEYWORDS = [COMMON_KEYWORDS,
      "debugger,eval,export,function,get,null,set,undefined,var,with," +
      "Infinity,NaN"];
  var PERL_KEYWORDS = "caller,delete,die,do,dump,elsif,eval,exit,foreach,for," +
      "goto,if,import,last,local,my,next,no,our,print,package,redo,require," +
      "sub,undef,unless,until,use,wantarray,while,BEGIN,END";
  var PYTHON_KEYWORDS = [FLOW_CONTROL_KEYWORDS, "and,as,assert,class,def,del," +
      "elif,except,exec,finally,from,global,import,in,is,lambda," +
      "nonlocal,not,or,pass,print,raise,try,with,yield," +
      "False,True,None"];
  var RUBY_KEYWORDS = [FLOW_CONTROL_KEYWORDS, "alias,and,begin,case,class," +
      "def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo," +
      "rescue,retry,self,super,then,true,undef,unless,until,when,yield," +
      "BEGIN,END"];
   var RUST_KEYWORDS = [FLOW_CONTROL_KEYWORDS, "as,assert,const,copy,drop," +
      "enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv," +
      "pub,pure,ref,self,static,struct,true,trait,type,unsafe,use"];
  var SH_KEYWORDS = [FLOW_CONTROL_KEYWORDS, "case,done,elif,esac,eval,fi," +
      "function,in,local,set,then,until"];
  var ALL_KEYWORDS = [
      CPP_KEYWORDS, CSHARP_KEYWORDS, JSCRIPT_KEYWORDS, PERL_KEYWORDS,
      PYTHON_KEYWORDS, RUBY_KEYWORDS, SH_KEYWORDS];
  var C_TYPES = /^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/;

  // token style names.  correspond to css classes
  /**
   * token style for a string literal
   * @const
   */
  var PR_STRING = 'str';
  /**
   * token style for a keyword
   * @const
   */
  var PR_KEYWORD = 'kwd';
  /**
   * token style for a comment
   * @const
   */
  var PR_COMMENT = 'com';
  /**
   * token style for a type
   * @const
   */
  var PR_TYPE = 'typ';
  /**
   * token style for a literal value.  e.g. 1, null, true.
   * @const
   */
  var PR_LITERAL = 'lit';
  /**
   * token style for a punctuation string.
   * @const
   */
  var PR_PUNCTUATION = 'pun';
  /**
   * token style for plain text.
   * @const
   */
  var PR_PLAIN = 'pln';

  /**
   * token style for an sgml tag.
   * @const
   */
  var PR_TAG = 'tag';
  /**
   * token style for a markup declaration such as a DOCTYPE.
   * @const
   */
  var PR_DECLARATION = 'dec';
  /**
   * token style for embedded source.
   * @const
   */
  var PR_SOURCE = 'src';
  /**
   * token style for an sgml attribute name.
   * @const
   */
  var PR_ATTRIB_NAME = 'atn';
  /**
   * token style for an sgml attribute value.
   * @const
   */
  var PR_ATTRIB_VALUE = 'atv';

  /**
   * A class that indicates a section of markup that is not code, e.g. to allow
   * embedding of line numbers within code listings.
   * @const
   */
  var PR_NOCODE = 'nocode';

  
  
  /**
   * A set of tokens that can precede a regular expression literal in
   * javascript
   * http://web.archive.org/web/20070717142515/http://www.mozilla.org/js/language/js20/rationale/syntax.html
   * has the full list, but I've removed ones that might be problematic when
   * seen in languages that don't support regular expression literals.
   *
   * <p>Specifically, I've removed any keywords that can't precede a regexp
   * literal in a syntactically legal javascript program, and I've removed the
   * "in" keyword since it's not a keyword in many languages, and might be used
   * as a count of inches.
   *
   * <p>The link above does not accurately describe EcmaScript rules since
   * it fails to distinguish between (a=++/b/i) and (a++/b/i) but it works
   * very well in practice.
   *
   * @private
   * @const
   */
  var REGEXP_PRECEDER_PATTERN = '(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*';
  
  // CAVEAT: this does not properly handle the case where a regular
  // expression immediately follows another since a regular expression may
  // have flags for case-sensitivity and the like.  Having regexp tokens
  // adjacent is not valid in any language I'm aware of, so I'm punting.
  // TODO: maybe style special characters inside a regexp as punctuation.

  /**
   * Given a group of {@link RegExp}s, returns a {@code RegExp} that globally
   * matches the union of the sets of strings matched by the input RegExp.
   * Since it matches globally, if the input strings have a start-of-input
   * anchor (/^.../), it is ignored for the purposes of unioning.
   * @param {Array.<RegExp>} regexs non multiline, non-global regexs.
   * @return {RegExp} a global regex.
   */
  function combinePrefixPatterns(regexs) {
    var capturedGroupIndex = 0;
  
    var needToFoldCase = false;
    var ignoreCase = false;
    for (var i = 0, n = regexs.length; i < n; ++i) {
      var regex = regexs[i];
      if (regex.ignoreCase) {
        ignoreCase = true;
      } else if (/[a-z]/i.test(regex.source.replace(
                     /\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi, ''))) {
        needToFoldCase = true;
        ignoreCase = false;
        break;
      }
    }
  
    var escapeCharToCodeUnit = {
      'b': 8,
      't': 9,
      'n': 0xa,
      'v': 0xb,
      'f': 0xc,
      'r': 0xd
    };
  
    function decodeEscape(charsetPart) {
      var cc0 = charsetPart.charCodeAt(0);
      if (cc0 !== 92 /* \\ */) {
        return cc0;
      }
      var c1 = charsetPart.charAt(1);
      cc0 = escapeCharToCodeUnit[c1];
      if (cc0) {
        return cc0;
      } else if ('0' <= c1 && c1 <= '7') {
        return parseInt(charsetPart.substring(1), 8);
      } else if (c1 === 'u' || c1 === 'x') {
        return parseInt(charsetPart.substring(2), 16);
      } else {
        return charsetPart.charCodeAt(1);
      }
    }
  
    function encodeEscape(charCode) {
      if (charCode < 0x20) {
        return (charCode < 0x10 ? '\\x0' : '\\x') + charCode.toString(16);
      }
      var ch = String.fromCharCode(charCode);
      return (ch === '\\' || ch === '-' || ch === ']' || ch === '^')
          ? "\\" + ch : ch;
    }
  
    function caseFoldCharset(charSet) {
      var charsetParts = charSet.substring(1, charSet.length - 1).match(
          new RegExp(
              '\\\\u[0-9A-Fa-f]{4}'
              + '|\\\\x[0-9A-Fa-f]{2}'
              + '|\\\\[0-3][0-7]{0,2}'
              + '|\\\\[0-7]{1,2}'
              + '|\\\\[\\s\\S]'
              + '|-'
              + '|[^-\\\\]',
              'g'));
      var ranges = [];
      var inverse = charsetParts[0] === '^';
  
      var out = ['['];
      if (inverse) { out.push('^'); }
  
      for (var i = inverse ? 1 : 0, n = charsetParts.length; i < n; ++i) {
        var p = charsetParts[i];
        if (/\\[bdsw]/i.test(p)) {  // Don't muck with named groups.
          out.push(p);
        } else {
          var start = decodeEscape(p);
          var end;
          if (i + 2 < n && '-' === charsetParts[i + 1]) {
            end = decodeEscape(charsetParts[i + 2]);
            i += 2;
          } else {
            end = start;
          }
          ranges.push([start, end]);
          // If the range might intersect letters, then expand it.
          // This case handling is too simplistic.
          // It does not deal with non-latin case folding.
          // It works for latin source code identifiers though.
          if (!(end < 65 || start > 122)) {
            if (!(end < 65 || start > 90)) {
              ranges.push([Math.max(65, start) | 32, Math.min(end, 90) | 32]);
            }
            if (!(end < 97 || start > 122)) {
              ranges.push([Math.max(97, start) & ~32, Math.min(end, 122) & ~32]);
            }
          }
        }
      }
  
      // [[1, 10], [3, 4], [8, 12], [14, 14], [16, 16], [17, 17]]
      // -> [[1, 12], [14, 14], [16, 17]]
      ranges.sort(function (a, b) { return (a[0] - b[0]) || (b[1]  - a[1]); });
      var consolidatedRanges = [];
      var lastRange = [];
      for (var i = 0; i < ranges.length; ++i) {
        var range = ranges[i];
        if (range[0] <= lastRange[1] + 1) {
          lastRange[1] = Math.max(lastRange[1], range[1]);
        } else {
          consolidatedRanges.push(lastRange = range);
        }
      }
  
      for (var i = 0; i < consolidatedRanges.length; ++i) {
        var range = consolidatedRanges[i];
        out.push(encodeEscape(range[0]));
        if (range[1] > range[0]) {
          if (range[1] + 1 > range[0]) { out.push('-'); }
          out.push(encodeEscape(range[1]));
        }
      }
      out.push(']');
      return out.join('');
    }
  
    function allowAnywhereFoldCaseAndRenumberGroups(regex) {
      // Split into character sets, escape sequences, punctuation strings
      // like ('(', '(?:', ')', '^'), and runs of characters that do not
      // include any of the above.
      var parts = regex.source.match(
          new RegExp(
              '(?:'
              + '\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]'  // a character set
              + '|\\\\u[A-Fa-f0-9]{4}'  // a unicode escape
              + '|\\\\x[A-Fa-f0-9]{2}'  // a hex escape
              + '|\\\\[0-9]+'  // a back-reference or octal escape
              + '|\\\\[^ux0-9]'  // other escape sequence
              + '|\\(\\?[:!=]'  // start of a non-capturing group
              + '|[\\(\\)\\^]'  // start/end of a group, or line start
              + '|[^\\x5B\\x5C\\(\\)\\^]+'  // run of other characters
              + ')',
              'g'));
      var n = parts.length;
  
      // Maps captured group numbers to the number they will occupy in
      // the output or to -1 if that has not been determined, or to
      // undefined if they need not be capturing in the output.
      var capturedGroups = [];
  
      // Walk over and identify back references to build the capturedGroups
      // mapping.
      for (var i = 0, groupIndex = 0; i < n; ++i) {
        var p = parts[i];
        if (p === '(') {
          // groups are 1-indexed, so max group index is count of '('
          ++groupIndex;
        } else if ('\\' === p.charAt(0)) {
          var decimalValue = +p.substring(1);
          if (decimalValue) {
            if (decimalValue <= groupIndex) {
              capturedGroups[decimalValue] = -1;
            } else {
              // Replace with an unambiguous escape sequence so that
              // an octal escape sequence does not turn into a backreference
              // to a capturing group from an earlier regex.
              parts[i] = encodeEscape(decimalValue);
            }
          }
        }
      }
  
      // Renumber groups and reduce capturing groups to non-capturing groups
      // where possible.
      for (var i = 1; i < capturedGroups.length; ++i) {
        if (-1 === capturedGroups[i]) {
          capturedGroups[i] = ++capturedGroupIndex;
        }
      }
      for (var i = 0, groupIndex = 0; i < n; ++i) {
        var p = parts[i];
        if (p === '(') {
          ++groupIndex;
          if (!capturedGroups[groupIndex]) {
            parts[i] = '(?:';
          }
        } else if ('\\' === p.charAt(0)) {
          var decimalValue = +p.substring(1);
          if (decimalValue && decimalValue <= groupIndex) {
            parts[i] = '\\' + capturedGroups[decimalValue];
          }
        }
      }
  
      // Remove any prefix anchors so that the output will match anywhere.
      // ^^ really does mean an anchored match though.
      for (var i = 0; i < n; ++i) {
        if ('^' === parts[i] && '^' !== parts[i + 1]) { parts[i] = ''; }
      }
  
      // Expand letters to groups to handle mixing of case-sensitive and
      // case-insensitive patterns if necessary.
      if (regex.ignoreCase && needToFoldCase) {
        for (var i = 0; i < n; ++i) {
          var p = parts[i];
          var ch0 = p.charAt(0);
          if (p.length >= 2 && ch0 === '[') {
            parts[i] = caseFoldCharset(p);
          } else if (ch0 !== '\\') {
            // TODO: handle letters in numeric escapes.
            parts[i] = p.replace(
                /[a-zA-Z]/g,
                function (ch) {
                  var cc = ch.charCodeAt(0);
                  return '[' + String.fromCharCode(cc & ~32, cc | 32) + ']';
                });
          }
        }
      }
  
      return parts.join('');
    }
  
    var rewritten = [];
    for (var i = 0, n = regexs.length; i < n; ++i) {
      var regex = regexs[i];
      if (regex.global || regex.multiline) { throw new Error('' + regex); }
      rewritten.push(
          '(?:' + allowAnywhereFoldCaseAndRenumberGroups(regex) + ')');
    }
  
    return new RegExp(rewritten.join('|'), ignoreCase ? 'gi' : 'g');
  }

  /**
   * Split markup into a string of source code and an array mapping ranges in
   * that string to the text nodes in which they appear.
   *
   * <p>
   * The HTML DOM structure:</p>
   * <pre>
   * (Element   "p"
   *   (Element "b"
   *     (Text  "print "))       ; #1
   *   (Text    "'Hello '")      ; #2
   *   (Element "br")            ; #3
   *   (Text    "  + 'World';")) ; #4
   * </pre>
   * <p>
   * corresponds to the HTML
   * {@code <p><b>print </b>'Hello '<br>  + 'World';</p>}.</p>
   *
   * <p>
   * It will produce the output:</p>
   * <pre>
   * {
   *   sourceCode: "print 'Hello '\n  + 'World';",
   *   //                     1          2
   *   //           012345678901234 5678901234567
   *   spans: [0, #1, 6, #2, 14, #3, 15, #4]
   * }
   * </pre>
   * <p>
   * where #1 is a reference to the {@code "print "} text node above, and so
   * on for the other text nodes.
   * </p>
   *
   * <p>
   * The {@code} spans array is an array of pairs.  Even elements are the start
   * indices of substrings, and odd elements are the text nodes (or BR elements)
   * that contain the text for those substrings.
   * Substrings continue until the next index or the end of the source.
   * </p>
   *
   * @param {Node} node an HTML DOM subtree containing source-code.
   * @param {boolean} isPreformatted true if white-space in text nodes should
   *    be considered significant.
   * @return {Object} source code and the text nodes in which they occur.
   */
  function extractSourceSpans(node, isPreformatted) {
    var nocode = /(?:^|\s)nocode(?:\s|$)/;
  
    var chunks = [];
    var length = 0;
    var spans = [];
    var k = 0;
  
    function walk(node) {
      var type = node.nodeType;
      if (type == 1) {  // Element
        if (nocode.test(node.className)) { return; }
        for (var child = node.firstChild; child; child = child.nextSibling) {
          walk(child);
        }
        var nodeName = node.nodeName.toLowerCase();
        if ('br' === nodeName || 'li' === nodeName) {
          chunks[k] = '\n';
          spans[k << 1] = length++;
          spans[(k++ << 1) | 1] = node;
        }
      } else if (type == 3 || type == 4) {  // Text
        var text = node.nodeValue;
        if (text.length) {
          if (!isPreformatted) {
            text = text.replace(/[ \t\r\n]+/g, ' ');
          } else {
            text = text.replace(/\r\n?/g, '\n');  // Normalize newlines.
          }
          // TODO: handle tabs here?
          chunks[k] = text;
          spans[k << 1] = length;
          length += text.length;
          spans[(k++ << 1) | 1] = node;
        }
      }
    }
  
    walk(node);
  
    return {
      sourceCode: chunks.join('').replace(/\n$/, ''),
      spans: spans
    };
  }

  /**
   * Apply the given language handler to sourceCode and add the resulting
   * decorations to out.
   * @param {number} basePos the index of sourceCode within the chunk of source
   *    whose decorations are already present on out.
   */
  function appendDecorations(basePos, sourceCode, langHandler, out) {
    if (!sourceCode) { return; }
    var job = {
      sourceCode: sourceCode,
      basePos: basePos
    };
    langHandler(job);
    out.push.apply(out, job.decorations);
  }

  var notWs = /\S/;

  /**
   * Given an element, if it contains only one child element and any text nodes
   * it contains contain only space characters, return the sole child element.
   * Otherwise returns undefined.
   * <p>
   * This is meant to return the CODE element in {@code <pre><code ...>} when
   * there is a single child element that contains all the non-space textual
   * content, but not to return anything where there are multiple child elements
   * as in {@code <pre><code>...</code><code>...</code></pre>} or when there
   * is textual content.
   */
  function childContentWrapper(element) {
    var wrapper = undefined;
    for (var c = element.firstChild; c; c = c.nextSibling) {
      var type = c.nodeType;
      wrapper = (type === 1)  // Element Node
          ? (wrapper ? element : c)
          : (type === 3)  // Text Node
          ? (notWs.test(c.nodeValue) ? element : wrapper)
          : wrapper;
    }
    return wrapper === element ? undefined : wrapper;
  }

  /** Given triples of [style, pattern, context] returns a lexing function,
    * The lexing function interprets the patterns to find token boundaries and
    * returns a decoration list of the form
    * [index_0, style_0, index_1, style_1, ..., index_n, style_n]
    * where index_n is an index into the sourceCode, and style_n is a style
    * constant like PR_PLAIN.  index_n-1 <= index_n, and style_n-1 applies to
    * all characters in sourceCode[index_n-1:index_n].
    *
    * The stylePatterns is a list whose elements have the form
    * [style : string, pattern : RegExp, DEPRECATED, shortcut : string].
    *
    * Style is a style constant like PR_PLAIN, or can be a string of the
    * form 'lang-FOO', where FOO is a language extension describing the
    * language of the portion of the token in $1 after pattern executes.
    * E.g., if style is 'lang-lisp', and group 1 contains the text
    * '(hello (world))', then that portion of the token will be passed to the
    * registered lisp handler for formatting.
    * The text before and after group 1 will be restyled using this decorator
    * so decorators should take care that this doesn't result in infinite
    * recursion.  For example, the HTML lexer rule for SCRIPT elements looks
    * something like ['lang-js', /<[s]cript>(.+?)<\/script>/].  This may match
    * '<script>foo()<\/script>', which would cause the current decorator to
    * be called with '<script>' which would not match the same rule since
    * group 1 must not be empty, so it would be instead styled as PR_TAG by
    * the generic tag rule.  The handler registered for the 'js' extension would
    * then be called with 'foo()', and finally, the current decorator would
    * be called with '<\/script>' which would not match the original rule and
    * so the generic tag rule would identify it as a tag.
    *
    * Pattern must only match prefixes, and if it matches a prefix, then that
    * match is considered a token with the same style.
    *
    * Context is applied to the last non-whitespace, non-comment token
    * recognized.
    *
    * Shortcut is an optional string of characters, any of which, if the first
    * character, gurantee that this pattern and only this pattern matches.
    *
    * @param {Array} shortcutStylePatterns patterns that always start with
    *   a known character.  Must have a shortcut string.
    * @param {Array} fallthroughStylePatterns patterns that will be tried in
    *   order if the shortcut ones fail.  May have shortcuts.
    *
    * @return {function (Object)} a
    *   function that takes source code and returns a list of decorations.
    */
  function createSimpleLexer(shortcutStylePatterns, fallthroughStylePatterns) {
    var shortcuts = {};
    var tokenizer;
    (function () {
      var allPatterns = shortcutStylePatterns.concat(fallthroughStylePatterns);
      var allRegexs = [];
      var regexKeys = {};
      for (var i = 0, n = allPatterns.length; i < n; ++i) {
        var patternParts = allPatterns[i];
        var shortcutChars = patternParts[3];
        if (shortcutChars) {
          for (var c = shortcutChars.length; --c >= 0;) {
            shortcuts[shortcutChars.charAt(c)] = patternParts;
          }
        }
        var regex = patternParts[1];
        var k = '' + regex;
        if (!regexKeys.hasOwnProperty(k)) {
          allRegexs.push(regex);
          regexKeys[k] = null;
        }
      }
      allRegexs.push(/[\0-\uffff]/);
      tokenizer = combinePrefixPatterns(allRegexs);
    })();

    var nPatterns = fallthroughStylePatterns.length;

    /**
     * Lexes job.sourceCode and produces an output array job.decorations of
     * style classes preceded by the position at which they start in
     * job.sourceCode in order.
     *
     * @param {Object} job an object like <pre>{
     *    sourceCode: {string} sourceText plain text,
     *    basePos: {int} position of job.sourceCode in the larger chunk of
     *        sourceCode.
     * }</pre>
     */
    var decorate = function (job) {
      var sourceCode = job.sourceCode, basePos = job.basePos;
      /** Even entries are positions in source in ascending order.  Odd enties
        * are style markers (e.g., PR_COMMENT) that run from that position until
        * the end.
        * @type {Array.<number|string>}
        */
      var decorations = [basePos, PR_PLAIN];
      var pos = 0;  // index into sourceCode
      var tokens = sourceCode.match(tokenizer) || [];
      var styleCache = {};

      for (var ti = 0, nTokens = tokens.length; ti < nTokens; ++ti) {
        var token = tokens[ti];
        var style = styleCache[token];
        var match = void 0;

        var isEmbedded;
        if (typeof style === 'string') {
          isEmbedded = false;
        } else {
          var patternParts = shortcuts[token.charAt(0)];
          if (patternParts) {
            match = token.match(patternParts[1]);
            style = patternParts[0];
          } else {
            for (var i = 0; i < nPatterns; ++i) {
              patternParts = fallthroughStylePatterns[i];
              match = token.match(patternParts[1]);
              if (match) {
                style = patternParts[0];
                break;
              }
            }

            if (!match) {  // make sure that we make progress
              style = PR_PLAIN;
            }
          }

          isEmbedded = style.length >= 5 && 'lang-' === style.substring(0, 5);
          if (isEmbedded && !(match && typeof match[1] === 'string')) {
            isEmbedded = false;
            style = PR_SOURCE;
          }

          if (!isEmbedded) { styleCache[token] = style; }
        }

        var tokenStart = pos;
        pos += token.length;

        if (!isEmbedded) {
          decorations.push(basePos + tokenStart, style);
        } else {  // Treat group 1 as an embedded block of source code.
          var embeddedSource = match[1];
          var embeddedSourceStart = token.indexOf(embeddedSource);
          var embeddedSourceEnd = embeddedSourceStart + embeddedSource.length;
          if (match[2]) {
            // If embeddedSource can be blank, then it would match at the
            // beginning which would cause us to infinitely recurse on the
            // entire token, so we catch the right context in match[2].
            embeddedSourceEnd = token.length - match[2].length;
            embeddedSourceStart = embeddedSourceEnd - embeddedSource.length;
          }
          var lang = style.substring(5);
          // Decorate the left of the embedded source
          appendDecorations(
              basePos + tokenStart,
              token.substring(0, embeddedSourceStart),
              decorate, decorations);
          // Decorate the embedded source
          appendDecorations(
              basePos + tokenStart + embeddedSourceStart,
              embeddedSource,
              langHandlerForExtension(lang, embeddedSource),
              decorations);
          // Decorate the right of the embedded section
          appendDecorations(
              basePos + tokenStart + embeddedSourceEnd,
              token.substring(embeddedSourceEnd),
              decorate, decorations);
        }
      }
      job.decorations = decorations;
    };
    return decorate;
  }

  /** returns a function that produces a list of decorations from source text.
    *
    * This code treats ", ', and ` as string delimiters, and \ as a string
    * escape.  It does not recognize perl's qq() style strings.
    * It has no special handling for double delimiter escapes as in basic, or
    * the tripled delimiters used in python, but should work on those regardless
    * although in those cases a single string literal may be broken up into
    * multiple adjacent string literals.
    *
    * It recognizes C, C++, and shell style comments.
    *
    * @param {Object} options a set of optional parameters.
    * @return {function (Object)} a function that examines the source code
    *     in the input job and builds the decoration list.
    */
  function sourceDecorator(options) {
    var shortcutStylePatterns = [], fallthroughStylePatterns = [];
    if (options['tripleQuotedStrings']) {
      // '''multi-line-string''', 'single-line-string', and double-quoted
      shortcutStylePatterns.push(
          [PR_STRING,  /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,
           null, '\'"']);
    } else if (options['multiLineStrings']) {
      // 'multi-line-string', "multi-line-string"
      shortcutStylePatterns.push(
          [PR_STRING,  /^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,
           null, '\'"`']);
    } else {
      // 'single-line-string', "single-line-string"
      shortcutStylePatterns.push(
          [PR_STRING,
           /^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,
           null, '"\'']);
    }
    if (options['verbatimStrings']) {
      // verbatim-string-literal production from the C# grammar.  See issue 93.
      fallthroughStylePatterns.push(
          [PR_STRING, /^@\"(?:[^\"]|\"\")*(?:\"|$)/, null]);
    }
    var hc = options['hashComments'];
    if (hc) {
      if (options['cStyleComments']) {
        if (hc > 1) {  // multiline hash comments
          shortcutStylePatterns.push(
              [PR_COMMENT, /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, null, '#']);
        } else {
          // Stop C preprocessor declarations at an unclosed open comment
          shortcutStylePatterns.push(
              [PR_COMMENT, /^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,
               null, '#']);
        }
        // #include <stdio.h>
        fallthroughStylePatterns.push(
            [PR_STRING,
             /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,
             null]);
      } else {
        shortcutStylePatterns.push([PR_COMMENT, /^#[^\r\n]*/, null, '#']);
      }
    }
    if (options['cStyleComments']) {
      fallthroughStylePatterns.push([PR_COMMENT, /^\/\/[^\r\n]*/, null]);
      fallthroughStylePatterns.push(
          [PR_COMMENT, /^\/\*[\s\S]*?(?:\*\/|$)/, null]);
    }
    var regexLiterals = options['regexLiterals'];
    if (regexLiterals) {
      /**
       * @const
       */
      var regexExcls = regexLiterals > 1
        ? ''  // Multiline regex literals
        : '\n\r';
      /**
       * @const
       */
      var regexAny = regexExcls ? '.' : '[\\S\\s]';
      /**
       * @const
       */
      var REGEX_LITERAL = (
          // A regular expression literal starts with a slash that is
          // not followed by * or / so that it is not confused with
          // comments.
          '/(?=[^/*' + regexExcls + '])'
          // and then contains any number of raw characters,
          + '(?:[^/\\x5B\\x5C' + regexExcls + ']'
          // escape sequences (\x5C),
          +    '|\\x5C' + regexAny
          // or non-nesting character sets (\x5B\x5D);
          +    '|\\x5B(?:[^\\x5C\\x5D' + regexExcls + ']'
          +             '|\\x5C' + regexAny + ')*(?:\\x5D|$))+'
          // finally closed by a /.
          + '/');
      fallthroughStylePatterns.push(
          ['lang-regex',
           RegExp('^' + REGEXP_PRECEDER_PATTERN + '(' + REGEX_LITERAL + ')')
           ]);
    }

    var types = options['types'];
    if (types) {
      fallthroughStylePatterns.push([PR_TYPE, types]);
    }

    var keywords = ("" + options['keywords']).replace(/^ | $/g, '');
    if (keywords.length) {
      fallthroughStylePatterns.push(
          [PR_KEYWORD,
           new RegExp('^(?:' + keywords.replace(/[\s,]+/g, '|') + ')\\b'),
           null]);
    }

    shortcutStylePatterns.push([PR_PLAIN,       /^\s+/, null, ' \r\n\t\xA0']);

    var punctuation =
      // The Bash man page says

      // A word is a sequence of characters considered as a single
      // unit by GRUB. Words are separated by metacharacters,
      // which are the following plus space, tab, and newline: { }
      // | & $ ; < >
      // ...
      
      // A word beginning with # causes that word and all remaining
      // characters on that line to be ignored.

      // which means that only a '#' after /(?:^|[{}|&$;<>\s])/ starts a
      // comment but empirically
      // $ echo {#}
      // {#}
      // $ echo \$#
      // $#
      // $ echo }#
      // }#

      // so /(?:^|[|&;<>\s])/ is more appropriate.

      // http://gcc.gnu.org/onlinedocs/gcc-2.95.3/cpp_1.html#SEC3
      // suggests that this definition is compatible with a
      // default mode that tries to use a single token definition
      // to recognize both bash/python style comments and C
      // preprocessor directives.

      // This definition of punctuation does not include # in the list of
      // follow-on exclusions, so # will not be broken before if preceeded
      // by a punctuation character.  We could try to exclude # after
      // [|&;<>] but that doesn't seem to cause many major problems.
      // If that does turn out to be a problem, we should change the below
      // when hc is truthy to include # in the run of punctuation characters
      // only when not followint [|&;<>].
      '^.[^\\s\\w.$@\'"`/\\\\]*';
    if (options['regexLiterals']) {
      punctuation += '(?!\s*\/)';
    }

    fallthroughStylePatterns.push(
        // TODO(mikesamuel): recognize non-latin letters and numerals in idents
        [PR_LITERAL,     /^@[a-z_$][a-z_$@0-9]*/i, null],
        [PR_TYPE,        /^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/, null],
        [PR_PLAIN,       /^[a-z_$][a-z_$@0-9]*/i, null],
        [PR_LITERAL,
         new RegExp(
             '^(?:'
             // A hex number
             + '0x[a-f0-9]+'
             // or an octal or decimal number,
             + '|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)'
             // possibly in scientific notation
             + '(?:e[+\\-]?\\d+)?'
             + ')'
             // with an optional modifier like UL for unsigned long
             + '[a-z]*', 'i'),
         null, '0123456789'],
        // Don't treat escaped quotes in bash as starting strings.
        // See issue 144.
        [PR_PLAIN,       /^\\[\s\S]?/, null],
        [PR_PUNCTUATION, new RegExp(punctuation), null]);

    return createSimpleLexer(shortcutStylePatterns, fallthroughStylePatterns);
  }

  var decorateSource = sourceDecorator({
        'keywords': ALL_KEYWORDS,
        'hashComments': true,
        'cStyleComments': true,
        'multiLineStrings': true,
        'regexLiterals': true
      });

  /**
   * Given a DOM subtree, wraps it in a list, and puts each line into its own
   * list item.
   *
   * @param {Node} node modified in place.  Its content is pulled into an
   *     HTMLOListElement, and each line is moved into a separate list item.
   *     This requires cloning elements, so the input might not have unique
   *     IDs after numbering.
   * @param {boolean} isPreformatted true iff white-space in text nodes should
   *     be treated as significant.
   */
  function numberLines(node, opt_startLineNum, isPreformatted) {
    var nocode = /(?:^|\s)nocode(?:\s|$)/;
    var lineBreak = /\r\n?|\n/;
  
    var document = node.ownerDocument;
  
    var li = document.createElement('li');
    while (node.firstChild) {
      li.appendChild(node.firstChild);
    }
    // An array of lines.  We split below, so this is initialized to one
    // un-split line.
    var listItems = [li];
  
    function walk(node) {
      var type = node.nodeType;
      if (type == 1 && !nocode.test(node.className)) {  // Element
        if ('br' === node.nodeName) {
          breakAfter(node);
          // Discard the <BR> since it is now flush against a </LI>.
          if (node.parentNode) {
            node.parentNode.removeChild(node);
          }
        } else {
          for (var child = node.firstChild; child; child = child.nextSibling) {
            walk(child);
          }
        }
      } else if ((type == 3 || type == 4) && isPreformatted) {  // Text
        var text = node.nodeValue;
        var match = text.match(lineBreak);
        if (match) {
          var firstLine = text.substring(0, match.index);
          node.nodeValue = firstLine;
          var tail = text.substring(match.index + match[0].length);
          if (tail) {
            var parent = node.parentNode;
            parent.insertBefore(
              document.createTextNode(tail), node.nextSibling);
          }
          breakAfter(node);
          if (!firstLine) {
            // Don't leave blank text nodes in the DOM.
            node.parentNode.removeChild(node);
          }
        }
      }
    }
  
    // Split a line after the given node.
    function breakAfter(lineEndNode) {
      // If there's nothing to the right, then we can skip ending the line
      // here, and move root-wards since splitting just before an end-tag
      // would require us to create a bunch of empty copies.
      while (!lineEndNode.nextSibling) {
        lineEndNode = lineEndNode.parentNode;
        if (!lineEndNode) { return; }
      }
  
      function breakLeftOf(limit, copy) {
        // Clone shallowly if this node needs to be on both sides of the break.
        var rightSide = copy ? limit.cloneNode(false) : limit;
        var parent = limit.parentNode;
        if (parent) {
          // We clone the parent chain.
          // This helps us resurrect important styling elements that cross lines.
          // E.g. in <i>Foo<br>Bar</i>
          // should be rewritten to <li><i>Foo</i></li><li><i>Bar</i></li>.
          var parentClone = breakLeftOf(parent, 1);
          // Move the clone and everything to the right of the original
          // onto the cloned parent.
          var next = limit.nextSibling;
          parentClone.appendChild(rightSide);
          for (var sibling = next; sibling; sibling = next) {
            next = sibling.nextSibling;
            parentClone.appendChild(sibling);
          }
        }
        return rightSide;
      }
  
      var copiedListItem = breakLeftOf(lineEndNode.nextSibling, 0);
  
      // Walk the parent chain until we reach an unattached LI.
      for (var parent;
           // Check nodeType since IE invents document fragments.
           (parent = copiedListItem.parentNode) && parent.nodeType === 1;) {
        copiedListItem = parent;
      }
      // Put it on the list of lines for later processing.
      listItems.push(copiedListItem);
    }
  
    // Split lines while there are lines left to split.
    for (var i = 0;  // Number of lines that have been split so far.
         i < listItems.length;  // length updated by breakAfter calls.
         ++i) {
      walk(listItems[i]);
    }
  
    // Make sure numeric indices show correctly.
    if (opt_startLineNum === (opt_startLineNum|0)) {
      listItems[0].setAttribute('value', opt_startLineNum);
    }
  
    var ol = document.createElement('ol');
    ol.className = 'linenums';
    var offset = Math.max(0, ((opt_startLineNum - 1 /* zero index */)) | 0) || 0;
    for (var i = 0, n = listItems.length; i < n; ++i) {
      li = listItems[i];
      // Stick a class on the LIs so that stylesheets can
      // color odd/even rows, or any other row pattern that
      // is co-prime with 10.
      li.className = 'L' + ((i + offset) % 10);
      if (!li.firstChild) {
        li.appendChild(document.createTextNode('\xA0'));
      }
      ol.appendChild(li);
    }
  
    node.appendChild(ol);
  }
  /**
   * Breaks {@code job.sourceCode} around style boundaries in
   * {@code job.decorations} and modifies {@code job.sourceNode} in place.
   * @param {Object} job like <pre>{
   *    sourceCode: {string} source as plain text,
   *    sourceNode: {HTMLElement} the element containing the source,
   *    spans: {Array.<number|Node>} alternating span start indices into source
   *       and the text node or element (e.g. {@code <BR>}) corresponding to that
   *       span.
   *    decorations: {Array.<number|string} an array of style classes preceded
   *       by the position at which they start in job.sourceCode in order
   * }</pre>
   * @private
   */
  function recombineTagsAndDecorations(job) {
    var isIE8OrEarlier = /\bMSIE\s(\d+)/.exec(navigator.userAgent);
    isIE8OrEarlier = isIE8OrEarlier && +isIE8OrEarlier[1] <= 8;
    var newlineRe = /\n/g;
  
    var source = job.sourceCode;
    var sourceLength = source.length;
    // Index into source after the last code-unit recombined.
    var sourceIndex = 0;
  
    var spans = job.spans;
    var nSpans = spans.length;
    // Index into spans after the last span which ends at or before sourceIndex.
    var spanIndex = 0;
  
    var decorations = job.decorations;
    var nDecorations = decorations.length;
    // Index into decorations after the last decoration which ends at or before
    // sourceIndex.
    var decorationIndex = 0;
  
    // Remove all zero-length decorations.
    decorations[nDecorations] = sourceLength;
    var decPos, i;
    for (i = decPos = 0; i < nDecorations;) {
      if (decorations[i] !== decorations[i + 2]) {
        decorations[decPos++] = decorations[i++];
        decorations[decPos++] = decorations[i++];
      } else {
        i += 2;
      }
    }
    nDecorations = decPos;
  
    // Simplify decorations.
    for (i = decPos = 0; i < nDecorations;) {
      var startPos = decorations[i];
      // Conflate all adjacent decorations that use the same style.
      var startDec = decorations[i + 1];
      var end = i + 2;
      while (end + 2 <= nDecorations && decorations[end + 1] === startDec) {
        end += 2;
      }
      decorations[decPos++] = startPos;
      decorations[decPos++] = startDec;
      i = end;
    }
  
    nDecorations = decorations.length = decPos;
  
    var sourceNode = job.sourceNode;
    var oldDisplay;
    if (sourceNode) {
      oldDisplay = sourceNode.style.display;
      sourceNode.style.display = 'none';
    }
    try {
      var decoration = null;
      while (spanIndex < nSpans) {
        var spanStart = spans[spanIndex];
        var spanEnd = spans[spanIndex + 2] || sourceLength;
  
        var decEnd = decorations[decorationIndex + 2] || sourceLength;
  
        var end = Math.min(spanEnd, decEnd);
  
        var textNode = spans[spanIndex + 1];
        var styledText;
        if (textNode.nodeType !== 1  // Don't muck with <BR>s or <LI>s
            // Don't introduce spans around empty text nodes.
            && (styledText = source.substring(sourceIndex, end))) {
          // This may seem bizarre, and it is.  Emitting LF on IE causes the
          // code to display with spaces instead of line breaks.
          // Emitting Windows standard issue linebreaks (CRLF) causes a blank
          // space to appear at the beginning of every line but the first.
          // Emitting an old Mac OS 9 line separator makes everything spiffy.
          if (isIE8OrEarlier) {
            styledText = styledText.replace(newlineRe, '\r');
          }
          textNode.nodeValue = styledText;
          var document = textNode.ownerDocument;
          var span = document.createElement('span');
          span.className = decorations[decorationIndex + 1];
          var parentNode = textNode.parentNode;
          parentNode.replaceChild(span, textNode);
          span.appendChild(textNode);
          if (sourceIndex < spanEnd) {  // Split off a text node.
            spans[spanIndex + 1] = textNode
                // TODO: Possibly optimize by using '' if there's no flicker.
                = document.createTextNode(source.substring(end, spanEnd));
            parentNode.insertBefore(textNode, span.nextSibling);
          }
        }
  
        sourceIndex = end;
  
        if (sourceIndex >= spanEnd) {
          spanIndex += 2;
        }
        if (sourceIndex >= decEnd) {
          decorationIndex += 2;
        }
      }
    } finally {
      if (sourceNode) {
        sourceNode.style.display = oldDisplay;
      }
    }
  }

  /** Maps language-specific file extensions to handlers. */
  var langHandlerRegistry = {};
  /** Register a language handler for the given file extensions.
    * @param {function (Object)} handler a function from source code to a list
    *      of decorations.  Takes a single argument job which describes the
    *      state of the computation.   The single parameter has the form
    *      {@code {
    *        sourceCode: {string} as plain text.
    *        decorations: {Array.<number|string>} an array of style classes
    *                     preceded by the position at which they start in
    *                     job.sourceCode in order.
    *                     The language handler should assigned this field.
    *        basePos: {int} the position of source in the larger source chunk.
    *                 All positions in the output decorations array are relative
    *                 to the larger source chunk.
    *      } }
    * @param {Array.<string>} fileExtensions
    */
  function registerLangHandler(handler, fileExtensions) {
    for (var i = fileExtensions.length; --i >= 0;) {
      var ext = fileExtensions[i];
      if (!langHandlerRegistry.hasOwnProperty(ext)) {
        langHandlerRegistry[ext] = handler;
      } else if (win['console']) {
        console['warn']('cannot override language handler %s', ext);
      }
    }
  }
  function langHandlerForExtension(extension, source) {
    if (!(extension && langHandlerRegistry.hasOwnProperty(extension))) {
      // Treat it as markup if the first non whitespace character is a < and
      // the last non-whitespace character is a >.
      extension = /^\s*</.test(source)
          ? 'default-markup'
          : 'default-code';
    }
    return langHandlerRegistry[extension];
  }
  registerLangHandler(decorateSource, ['default-code']);
  registerLangHandler(
      createSimpleLexer(
          [],
          [
           [PR_PLAIN,       /^[^<?]+/],
           [PR_DECLARATION, /^<!\w[^>]*(?:>|$)/],
           [PR_COMMENT,     /^<\!--[\s\S]*?(?:-\->|$)/],
           // Unescaped content in an unknown language
           ['lang-',        /^<\?([\s\S]+?)(?:\?>|$)/],
           ['lang-',        /^<%([\s\S]+?)(?:%>|$)/],
           [PR_PUNCTUATION, /^(?:<[%?]|[%?]>)/],
           ['lang-',        /^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],
           // Unescaped content in javascript.  (Or possibly vbscript).
           ['lang-js',      /^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],
           // Contains unescaped stylesheet content
           ['lang-css',     /^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],
           ['lang-in.tag',  /^(<\/?[a-z][^<>]*>)/i]
          ]),
      ['default-markup', 'htm', 'html', 'mxml', 'xhtml', 'xml', 'xsl']);
  registerLangHandler(
      createSimpleLexer(
          [
           [PR_PLAIN,        /^[\s]+/, null, ' \t\r\n'],
           [PR_ATTRIB_VALUE, /^(?:\"[^\"]*\"?|\'[^\']*\'?)/, null, '\"\'']
           ],
          [
           [PR_TAG,          /^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],
           [PR_ATTRIB_NAME,  /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],
           ['lang-uq.val',   /^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],
           [PR_PUNCTUATION,  /^[=<>\/]+/],
           ['lang-js',       /^on\w+\s*=\s*\"([^\"]+)\"/i],
           ['lang-js',       /^on\w+\s*=\s*\'([^\']+)\'/i],
           ['lang-js',       /^on\w+\s*=\s*([^\"\'>\s]+)/i],
           ['lang-css',      /^style\s*=\s*\"([^\"]+)\"/i],
           ['lang-css',      /^style\s*=\s*\'([^\']+)\'/i],
           ['lang-css',      /^style\s*=\s*([^\"\'>\s]+)/i]
           ]),
      ['in.tag']);
  registerLangHandler(
      createSimpleLexer([], [[PR_ATTRIB_VALUE, /^[\s\S]+/]]), ['uq.val']);
  registerLangHandler(sourceDecorator({
          'keywords': CPP_KEYWORDS,
          'hashComments': true,
          'cStyleComments': true,
          'types': C_TYPES
        }), ['c', 'cc', 'cpp', 'cxx', 'cyc', 'm']);
  registerLangHandler(sourceDecorator({
          'keywords': 'null,true,false'
        }), ['json']);
  registerLangHandler(sourceDecorator({
          'keywords': CSHARP_KEYWORDS,
          'hashComments': true,
          'cStyleComments': true,
          'verbatimStrings': true,
          'types': C_TYPES
        }), ['cs']);
  registerLangHandler(sourceDecorator({
          'keywords': JAVA_KEYWORDS,
          'cStyleComments': true
        }), ['java']);
  registerLangHandler(sourceDecorator({
          'keywords': SH_KEYWORDS,
          'hashComments': true,
          'multiLineStrings': true
        }), ['bash', 'bsh', 'csh', 'sh']);
  registerLangHandler(sourceDecorator({
          'keywords': PYTHON_KEYWORDS,
          'hashComments': true,
          'multiLineStrings': true,
          'tripleQuotedStrings': true
        }), ['cv', 'py', 'python']);
  registerLangHandler(sourceDecorator({
          'keywords': PERL_KEYWORDS,
          'hashComments': true,
          'multiLineStrings': true,
          'regexLiterals': 2  // multiline regex literals
        }), ['perl', 'pl', 'pm']);
  registerLangHandler(sourceDecorator({
          'keywords': RUBY_KEYWORDS,
          'hashComments': true,
          'multiLineStrings': true,
          'regexLiterals': true
        }), ['rb', 'ruby']);
  registerLangHandler(sourceDecorator({
          'keywords': JSCRIPT_KEYWORDS,
          'cStyleComments': true,
          'regexLiterals': true
        }), ['javascript', 'js']);
  registerLangHandler(sourceDecorator({
          'keywords': COFFEE_KEYWORDS,
          'hashComments': 3,  // ### style block comments
          'cStyleComments': true,
          'multilineStrings': true,
          'tripleQuotedStrings': true,
          'regexLiterals': true
        }), ['coffee']);
  registerLangHandler(sourceDecorator({
          'keywords': RUST_KEYWORDS,
          'cStyleComments': true,
          'multilineStrings': true
        }), ['rc', 'rs', 'rust']);
  registerLangHandler(
      createSimpleLexer([], [[PR_STRING, /^[\s\S]+/]]), ['regex']);

  function applyDecorator(job) {
    var opt_langExtension = job.langExtension;

    try {
      // Extract tags, and convert the source code to plain text.
      var sourceAndSpans = extractSourceSpans(job.sourceNode, job.pre);
      /** Plain text. @type {string} */
      var source = sourceAndSpans.sourceCode;
      job.sourceCode = source;
      job.spans = sourceAndSpans.spans;
      job.basePos = 0;

      // Apply the appropriate language handler
      langHandlerForExtension(opt_langExtension, source)(job);

      // Integrate the decorations and tags back into the source code,
      // modifying the sourceNode in place.
      recombineTagsAndDecorations(job);
    } catch (e) {
      if (win['console']) {
        console['log'](e && e['stack'] || e);
      }
    }
  }

  /**
   * Pretty print a chunk of code.
   * @param sourceCodeHtml {string} The HTML to pretty print.
   * @param opt_langExtension {string} The language name to use.
   *     Typically, a filename extension like 'cpp' or 'java'.
   * @param opt_numberLines {number|boolean} True to number lines,
   *     or the 1-indexed number of the first line in sourceCodeHtml.
   */
  function $prettyPrintOne(sourceCodeHtml, opt_langExtension, opt_numberLines) {
    var container = document.createElement('div');
    // This could cause images to load and onload listeners to fire.
    // E.g. <img onerror="alert(1337)" src="nosuchimage.png">.
    // We assume that the inner HTML is from a trusted source.
    // The pre-tag is required for IE8 which strips newlines from innerHTML
    // when it is injected into a <pre> tag.
    // http://stackoverflow.com/questions/451486/pre-tag-loses-line-breaks-when-setting-innerhtml-in-ie
    // http://stackoverflow.com/questions/195363/inserting-a-newline-into-a-pre-tag-ie-javascript
    container.innerHTML = '<pre>' + sourceCodeHtml + '</pre>';
    container = container.firstChild;
    if (opt_numberLines) {
      numberLines(container, opt_numberLines, true);
    }

    var job = {
      langExtension: opt_langExtension,
      numberLines: opt_numberLines,
      sourceNode: container,
      pre: 1
    };
    applyDecorator(job);
    return container.innerHTML;
  }

   /**
    * Find all the {@code <pre>} and {@code <code>} tags in the DOM with
    * {@code class=prettyprint} and prettify them.
    *
    * @param {Function} opt_whenDone called when prettifying is done.
    * @param {HTMLElement|HTMLDocument} opt_root an element or document
    *   containing all the elements to pretty print.
    *   Defaults to {@code document.body}.
    */
  function $prettyPrint(opt_whenDone, opt_root) {
    var root = opt_root || document.body;
    var doc = root.ownerDocument || document;
    function byTagName(tn) { return root.getElementsByTagName(tn); }
    // fetch a list of nodes to rewrite
    var codeSegments = [byTagName('pre'), byTagName('code'), byTagName('xmp')];
    var elements = [];
    for (var i = 0; i < codeSegments.length; ++i) {
      for (var j = 0, n = codeSegments[i].length; j < n; ++j) {
        elements.push(codeSegments[i][j]);
      }
    }
    codeSegments = null;

    var clock = Date;
    if (!clock['now']) {
      clock = { 'now': function () { return +(new Date); } };
    }

    // The loop is broken into a series of continuations to make sure that we
    // don't make the browser unresponsive when rewriting a large page.
    var k = 0;
    var prettyPrintingJob;

    var langExtensionRe = /\blang(?:uage)?-([\w.]+)(?!\S)/;
    var prettyPrintRe = /\bprettyprint\b/;
    var prettyPrintedRe = /\bprettyprinted\b/;
    var preformattedTagNameRe = /pre|xmp/i;
    var codeRe = /^code$/i;
    var preCodeXmpRe = /^(?:pre|code|xmp)$/i;
    var EMPTY = {};

    function doWork() {
      var endTime = (win['PR_SHOULD_USE_CONTINUATION'] ?
                     clock['now']() + 250 /* ms */ :
                     Infinity);
      for (; k < elements.length && clock['now']() < endTime; k++) {
        var cs = elements[k];

        // Look for a preceding comment like
        // <?prettify lang="..." linenums="..."?>
        var attrs = EMPTY;
        {
          for (var preceder = cs; (preceder = preceder.previousSibling);) {
            var nt = preceder.nodeType;
            // <?foo?> is parsed by HTML 5 to a comment node (8)
            // like <!--?foo?-->, but in XML is a processing instruction
            var value = (nt === 7 || nt === 8) && preceder.nodeValue;
            if (value
                ? !/^\??prettify\b/.test(value)
                : (nt !== 3 || /\S/.test(preceder.nodeValue))) {
              // Skip over white-space text nodes but not others.
              break;
            }
            if (value) {
              attrs = {};
              value.replace(
                  /\b(\w+)=([\w:.%+-]+)/g,
                function (_, name, value) { attrs[name] = value; });
              break;
            }
          }
        }

        var className = cs.className;
        if ((attrs !== EMPTY || prettyPrintRe.test(className))
            // Don't redo this if we've already done it.
            // This allows recalling pretty print to just prettyprint elements
            // that have been added to the page since last call.
            && !prettyPrintedRe.test(className)) {

          // make sure this is not nested in an already prettified element
          var nested = false;
          for (var p = cs.parentNode; p; p = p.parentNode) {
            var tn = p.tagName;
            if (preCodeXmpRe.test(tn)
                && p.className && prettyPrintRe.test(p.className)) {
              nested = true;
              break;
            }
          }
          if (!nested) {
            // Mark done.  If we fail to prettyprint for whatever reason,
            // we shouldn't try again.
            cs.className += ' prettyprinted';

            // If the classes includes a language extensions, use it.
            // Language extensions can be specified like
            //     <pre class="prettyprint lang-cpp">
            // the language extension "cpp" is used to find a language handler
            // as passed to PR.registerLangHandler.
            // HTML5 recommends that a language be specified using "language-"
            // as the prefix instead.  Google Code Prettify supports both.
            // http://dev.w3.org/html5/spec-author-view/the-code-element.html
            var langExtension = attrs['lang'];
            if (!langExtension) {
              langExtension = className.match(langExtensionRe);
              // Support <pre class="prettyprint"><code class="language-c">
              var wrapper;
              if (!langExtension && (wrapper = childContentWrapper(cs))
                  && codeRe.test(wrapper.tagName)) {
                langExtension = wrapper.className.match(langExtensionRe);
              }

              if (langExtension) { langExtension = langExtension[1]; }
            }

            var preformatted;
            if (preformattedTagNameRe.test(cs.tagName)) {
              preformatted = 1;
            } else {
              var currentStyle = cs['currentStyle'];
              var defaultView = doc.defaultView;
              var whitespace = (
                  currentStyle
                  ? currentStyle['whiteSpace']
                  : (defaultView
                     && defaultView.getComputedStyle)
                  ? defaultView.getComputedStyle(cs, null)
                  .getPropertyValue('white-space')
                  : 0);
              preformatted = whitespace
                  && 'pre' === whitespace.substring(0, 3);
            }

            // Look for a class like linenums or linenums:<n> where <n> is the
            // 1-indexed number of the first line.
            var lineNums = attrs['linenums'];
            if (!(lineNums = lineNums === 'true' || +lineNums)) {
              lineNums = className.match(/\blinenums\b(?::(\d+))?/);
              lineNums =
                lineNums
                ? lineNums[1] && lineNums[1].length
                  ? +lineNums[1] : true
                : false;
            }
            if (lineNums) { numberLines(cs, lineNums, preformatted); }

            // do the pretty printing
            prettyPrintingJob = {
              langExtension: langExtension,
              sourceNode: cs,
              numberLines: lineNums,
              pre: preformatted
            };
            applyDecorator(prettyPrintingJob);
          }
        }
      }
      if (k < elements.length) {
        // finish up in a continuation
        setTimeout(doWork, 250);
      } else if ('function' === typeof opt_whenDone) {
        opt_whenDone();
      }
    }

    doWork();
  }

  /**
   * Contains functions for creating and registering new language handlers.
   * @type {Object}
   */
  var PR = win['PR'] = {
        'createSimpleLexer': createSimpleLexer,
        'registerLangHandler': registerLangHandler,
        'sourceDecorator': sourceDecorator,
        'PR_ATTRIB_NAME': PR_ATTRIB_NAME,
        'PR_ATTRIB_VALUE': PR_ATTRIB_VALUE,
        'PR_COMMENT': PR_COMMENT,
        'PR_DECLARATION': PR_DECLARATION,
        'PR_KEYWORD': PR_KEYWORD,
        'PR_LITERAL': PR_LITERAL,
        'PR_NOCODE': PR_NOCODE,
        'PR_PLAIN': PR_PLAIN,
        'PR_PUNCTUATION': PR_PUNCTUATION,
        'PR_SOURCE': PR_SOURCE,
        'PR_STRING': PR_STRING,
        'PR_TAG': PR_TAG,
        'PR_TYPE': PR_TYPE,
        'prettyPrintOne':
           IN_GLOBAL_SCOPE
             ? (win['prettyPrintOne'] = $prettyPrintOne)
             : (prettyPrintOne = $prettyPrintOne),
        'prettyPrint': prettyPrint =
           IN_GLOBAL_SCOPE
             ? (win['prettyPrint'] = $prettyPrint)
             : (prettyPrint = $prettyPrint)
      };

  // Make PR available via the Asynchronous Module Definition (AMD) API.
  // Per https://github.com/amdjs/amdjs-api/wiki/AMD:
  // The Asynchronous Module Definition (AMD) API specifies a
  // mechanism for defining modules such that the module and its
  // dependencies can be asynchronously loaded.
  // ...
  // To allow a clear indicator that a global define function (as
  // needed for script src browser loading) conforms to the AMD API,
  // any global define function SHOULD have a property called "amd"
  // whose value is an object. This helps avoid conflict with any
  // other existing JavaScript code that could have defined a define()
  // function that does not conform to the AMD API.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
      return PR; 
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
})();


/***/ }),
/* 31 */
/* unknown exports provided */
/* all exports used */
/*!****************************************!*\
  !*** ./app/templates/api-article.html ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! ./~/handlebars/runtime.js */ 3);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "<article class=\"document\">\n  <div class=\"for-humans\" id="
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + ">\n    "
    + ((stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n  </div>\n  <div class=\"for-machines\">\n    "
    + ((stack1 = ((helper = (helper = helpers.example || (depth0 != null ? depth0.example : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"example","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n  </div>\n</article>\n";
},"useData":true});

/***/ }),
/* 32 */
/* unknown exports provided */
/* all exports used */
/*!****************************************!*\
  !*** ./app/templates/api-section.html ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! ./~/handlebars/runtime.js */ 3);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<section class=\"api-documents\" id=\"section-"
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data}) : helper)))
    + "\"></section>\n";
},"useData":true});

/***/ }),
/* 33 */
/* unknown exports provided */
/* all exports used */
/*!************************************!*\
  !*** ./app/templates/article.html ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! ./~/handlebars/runtime.js */ 3);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"one-document\">\n  "
    + ((stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"content","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n</div>\n";
},"useData":true});

/***/ }),
/* 34 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars.runtime.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _handlebarsBase = __webpack_require__(/*! ./handlebars/base */ 6);

var base = _interopRequireWildcard(_handlebarsBase);

// Each of these augment the Handlebars object. No need to setup here.
// (This is done to easily share code between commonjs and browse envs)

var _handlebarsSafeString = __webpack_require__(/*! ./handlebars/safe-string */ 48);

var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

var _handlebarsException = __webpack_require__(/*! ./handlebars/exception */ 2);

var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

var _handlebarsUtils = __webpack_require__(/*! ./handlebars/utils */ 0);

var Utils = _interopRequireWildcard(_handlebarsUtils);

var _handlebarsRuntime = __webpack_require__(/*! ./handlebars/runtime */ 47);

var runtime = _interopRequireWildcard(_handlebarsRuntime);

var _handlebarsNoConflict = __webpack_require__(/*! ./handlebars/no-conflict */ 46);

var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

// For compatibility and usage outside of module systems, make the Handlebars object a namespace
function create() {
  var hb = new base.HandlebarsEnvironment();

  Utils.extend(hb, base);
  hb.SafeString = _handlebarsSafeString2['default'];
  hb.Exception = _handlebarsException2['default'];
  hb.Utils = Utils;
  hb.escapeExpression = Utils.escapeExpression;

  hb.VM = runtime;
  hb.template = function (spec) {
    return runtime.template(spec, hb);
  };

  return hb;
}

var inst = create();
inst.create = create;

_handlebarsNoConflict2['default'](inst);

inst['default'] = inst;

exports['default'] = inst;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9oYW5kbGViYXJzLnJ1bnRpbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OEJBQXNCLG1CQUFtQjs7SUFBN0IsSUFBSTs7Ozs7b0NBSU8sMEJBQTBCOzs7O21DQUMzQix3QkFBd0I7Ozs7K0JBQ3ZCLG9CQUFvQjs7SUFBL0IsS0FBSzs7aUNBQ1Esc0JBQXNCOztJQUFuQyxPQUFPOztvQ0FFSSwwQkFBMEI7Ozs7O0FBR2pELFNBQVMsTUFBTSxHQUFHO0FBQ2hCLE1BQUksRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7O0FBRTFDLE9BQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLElBQUUsQ0FBQyxVQUFVLG9DQUFhLENBQUM7QUFDM0IsSUFBRSxDQUFDLFNBQVMsbUNBQVksQ0FBQztBQUN6QixJQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNqQixJQUFFLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDOztBQUU3QyxJQUFFLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQztBQUNoQixJQUFFLENBQUMsUUFBUSxHQUFHLFVBQVMsSUFBSSxFQUFFO0FBQzNCLFdBQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7R0FDbkMsQ0FBQzs7QUFFRixTQUFPLEVBQUUsQ0FBQztDQUNYOztBQUVELElBQUksSUFBSSxHQUFHLE1BQU0sRUFBRSxDQUFDO0FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDOztBQUVyQixrQ0FBVyxJQUFJLENBQUMsQ0FBQzs7QUFFakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQzs7cUJBRVIsSUFBSSIsImZpbGUiOiJoYW5kbGViYXJzLnJ1bnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBiYXNlIGZyb20gJy4vaGFuZGxlYmFycy9iYXNlJztcblxuLy8gRWFjaCBvZiB0aGVzZSBhdWdtZW50IHRoZSBIYW5kbGViYXJzIG9iamVjdC4gTm8gbmVlZCB0byBzZXR1cCBoZXJlLlxuLy8gKFRoaXMgaXMgZG9uZSB0byBlYXNpbHkgc2hhcmUgY29kZSBiZXR3ZWVuIGNvbW1vbmpzIGFuZCBicm93c2UgZW52cylcbmltcG9ydCBTYWZlU3RyaW5nIGZyb20gJy4vaGFuZGxlYmFycy9zYWZlLXN0cmluZyc7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gJy4vaGFuZGxlYmFycy9leGNlcHRpb24nO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi9oYW5kbGViYXJzL3V0aWxzJztcbmltcG9ydCAqIGFzIHJ1bnRpbWUgZnJvbSAnLi9oYW5kbGViYXJzL3J1bnRpbWUnO1xuXG5pbXBvcnQgbm9Db25mbGljdCBmcm9tICcuL2hhbmRsZWJhcnMvbm8tY29uZmxpY3QnO1xuXG4vLyBGb3IgY29tcGF0aWJpbGl0eSBhbmQgdXNhZ2Ugb3V0c2lkZSBvZiBtb2R1bGUgc3lzdGVtcywgbWFrZSB0aGUgSGFuZGxlYmFycyBvYmplY3QgYSBuYW1lc3BhY2VcbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgbGV0IGhiID0gbmV3IGJhc2UuSGFuZGxlYmFyc0Vudmlyb25tZW50KCk7XG5cbiAgVXRpbHMuZXh0ZW5kKGhiLCBiYXNlKTtcbiAgaGIuU2FmZVN0cmluZyA9IFNhZmVTdHJpbmc7XG4gIGhiLkV4Y2VwdGlvbiA9IEV4Y2VwdGlvbjtcbiAgaGIuVXRpbHMgPSBVdGlscztcbiAgaGIuZXNjYXBlRXhwcmVzc2lvbiA9IFV0aWxzLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgaGIuVk0gPSBydW50aW1lO1xuICBoYi50ZW1wbGF0ZSA9IGZ1bmN0aW9uKHNwZWMpIHtcbiAgICByZXR1cm4gcnVudGltZS50ZW1wbGF0ZShzcGVjLCBoYik7XG4gIH07XG5cbiAgcmV0dXJuIGhiO1xufVxuXG5sZXQgaW5zdCA9IGNyZWF0ZSgpO1xuaW5zdC5jcmVhdGUgPSBjcmVhdGU7XG5cbm5vQ29uZmxpY3QoaW5zdCk7XG5cbmluc3RbJ2RlZmF1bHQnXSA9IGluc3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3Q7XG4iXX0=


/***/ }),
/* 35 */
/* unknown exports provided */
/* all exports used */
/*!********************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/decorators.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.registerDefaultDecorators = registerDefaultDecorators;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _decoratorsInline = __webpack_require__(/*! ./decorators/inline */ 36);

var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

function registerDefaultDecorators(instance) {
  _decoratorsInline2['default'](instance);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2RlY29yYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Z0NBQTJCLHFCQUFxQjs7OztBQUV6QyxTQUFTLHlCQUF5QixDQUFDLFFBQVEsRUFBRTtBQUNsRCxnQ0FBZSxRQUFRLENBQUMsQ0FBQztDQUMxQiIsImZpbGUiOiJkZWNvcmF0b3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlZ2lzdGVySW5saW5lIGZyb20gJy4vZGVjb3JhdG9ycy9pbmxpbmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9ycyhpbnN0YW5jZSkge1xuICByZWdpc3RlcklubGluZShpbnN0YW5jZSk7XG59XG5cbiJdfQ==


/***/ }),
/* 36 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/decorators/inline.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(/*! ../utils */ 0);

exports['default'] = function (instance) {
  instance.registerDecorator('inline', function (fn, props, container, options) {
    var ret = fn;
    if (!props.partials) {
      props.partials = {};
      ret = function (context, options) {
        // Create a new partials stack frame prior to exec.
        var original = container.partials;
        container.partials = _utils.extend({}, original, props.partials);
        var ret = fn(context, options);
        container.partials = original;
        return ret;
      };
    }

    props.partials[options.args[0]] = options.fn;

    return ret;
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2RlY29yYXRvcnMvaW5saW5lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQXFCLFVBQVU7O3FCQUVoQixVQUFTLFFBQVEsRUFBRTtBQUNoQyxVQUFRLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLFVBQVMsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFO0FBQzNFLFFBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNiLFFBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO0FBQ25CLFdBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ3BCLFNBQUcsR0FBRyxVQUFTLE9BQU8sRUFBRSxPQUFPLEVBQUU7O0FBRS9CLFlBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7QUFDbEMsaUJBQVMsQ0FBQyxRQUFRLEdBQUcsY0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMxRCxZQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQy9CLGlCQUFTLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUM5QixlQUFPLEdBQUcsQ0FBQztPQUNaLENBQUM7S0FDSDs7QUFFRCxTQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUU3QyxXQUFPLEdBQUcsQ0FBQztHQUNaLENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6ImlubGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZXh0ZW5kfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVyRGVjb3JhdG9yKCdpbmxpbmUnLCBmdW5jdGlvbihmbiwgcHJvcHMsIGNvbnRhaW5lciwgb3B0aW9ucykge1xuICAgIGxldCByZXQgPSBmbjtcbiAgICBpZiAoIXByb3BzLnBhcnRpYWxzKSB7XG4gICAgICBwcm9wcy5wYXJ0aWFscyA9IHt9O1xuICAgICAgcmV0ID0gZnVuY3Rpb24oY29udGV4dCwgb3B0aW9ucykge1xuICAgICAgICAvLyBDcmVhdGUgYSBuZXcgcGFydGlhbHMgc3RhY2sgZnJhbWUgcHJpb3IgdG8gZXhlYy5cbiAgICAgICAgbGV0IG9yaWdpbmFsID0gY29udGFpbmVyLnBhcnRpYWxzO1xuICAgICAgICBjb250YWluZXIucGFydGlhbHMgPSBleHRlbmQoe30sIG9yaWdpbmFsLCBwcm9wcy5wYXJ0aWFscyk7XG4gICAgICAgIGxldCByZXQgPSBmbihjb250ZXh0LCBvcHRpb25zKTtcbiAgICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gb3JpZ2luYWw7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHByb3BzLnBhcnRpYWxzW29wdGlvbnMuYXJnc1swXV0gPSBvcHRpb25zLmZuO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG59XG4iXX0=


/***/ }),
/* 37 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/helpers.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.registerDefaultHelpers = registerDefaultHelpers;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersBlockHelperMissing = __webpack_require__(/*! ./helpers/block-helper-missing */ 38);

var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

var _helpersEach = __webpack_require__(/*! ./helpers/each */ 39);

var _helpersEach2 = _interopRequireDefault(_helpersEach);

var _helpersHelperMissing = __webpack_require__(/*! ./helpers/helper-missing */ 40);

var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

var _helpersIf = __webpack_require__(/*! ./helpers/if */ 41);

var _helpersIf2 = _interopRequireDefault(_helpersIf);

var _helpersLog = __webpack_require__(/*! ./helpers/log */ 42);

var _helpersLog2 = _interopRequireDefault(_helpersLog);

var _helpersLookup = __webpack_require__(/*! ./helpers/lookup */ 43);

var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

var _helpersWith = __webpack_require__(/*! ./helpers/with */ 44);

var _helpersWith2 = _interopRequireDefault(_helpersWith);

function registerDefaultHelpers(instance) {
  _helpersBlockHelperMissing2['default'](instance);
  _helpersEach2['default'](instance);
  _helpersHelperMissing2['default'](instance);
  _helpersIf2['default'](instance);
  _helpersLog2['default'](instance);
  _helpersLookup2['default'](instance);
  _helpersWith2['default'](instance);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7eUNBQXVDLGdDQUFnQzs7OzsyQkFDOUMsZ0JBQWdCOzs7O29DQUNQLDBCQUEwQjs7Ozt5QkFDckMsY0FBYzs7OzswQkFDYixlQUFlOzs7OzZCQUNaLGtCQUFrQjs7OzsyQkFDcEIsZ0JBQWdCOzs7O0FBRWxDLFNBQVMsc0JBQXNCLENBQUMsUUFBUSxFQUFFO0FBQy9DLHlDQUEyQixRQUFRLENBQUMsQ0FBQztBQUNyQywyQkFBYSxRQUFRLENBQUMsQ0FBQztBQUN2QixvQ0FBc0IsUUFBUSxDQUFDLENBQUM7QUFDaEMseUJBQVcsUUFBUSxDQUFDLENBQUM7QUFDckIsMEJBQVksUUFBUSxDQUFDLENBQUM7QUFDdEIsNkJBQWUsUUFBUSxDQUFDLENBQUM7QUFDekIsMkJBQWEsUUFBUSxDQUFDLENBQUM7Q0FDeEIiLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWdpc3RlckJsb2NrSGVscGVyTWlzc2luZyBmcm9tICcuL2hlbHBlcnMvYmxvY2staGVscGVyLW1pc3NpbmcnO1xuaW1wb3J0IHJlZ2lzdGVyRWFjaCBmcm9tICcuL2hlbHBlcnMvZWFjaCc7XG5pbXBvcnQgcmVnaXN0ZXJIZWxwZXJNaXNzaW5nIGZyb20gJy4vaGVscGVycy9oZWxwZXItbWlzc2luZyc7XG5pbXBvcnQgcmVnaXN0ZXJJZiBmcm9tICcuL2hlbHBlcnMvaWYnO1xuaW1wb3J0IHJlZ2lzdGVyTG9nIGZyb20gJy4vaGVscGVycy9sb2cnO1xuaW1wb3J0IHJlZ2lzdGVyTG9va3VwIGZyb20gJy4vaGVscGVycy9sb29rdXAnO1xuaW1wb3J0IHJlZ2lzdGVyV2l0aCBmcm9tICcuL2hlbHBlcnMvd2l0aCc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckRlZmF1bHRIZWxwZXJzKGluc3RhbmNlKSB7XG4gIHJlZ2lzdGVyQmxvY2tIZWxwZXJNaXNzaW5nKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJFYWNoKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJIZWxwZXJNaXNzaW5nKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJJZihpbnN0YW5jZSk7XG4gIHJlZ2lzdGVyTG9nKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJMb29rdXAoaW5zdGFuY2UpO1xuICByZWdpc3RlcldpdGgoaW5zdGFuY2UpO1xufVxuIl19


/***/ }),
/* 38 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js ***!
  \**************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(/*! ../utils */ 0);

exports['default'] = function (instance) {
  instance.registerHelper('blockHelperMissing', function (context, options) {
    var inverse = options.inverse,
        fn = options.fn;

    if (context === true) {
      return fn(this);
    } else if (context === false || context == null) {
      return inverse(this);
    } else if (_utils.isArray(context)) {
      if (context.length > 0) {
        if (options.ids) {
          options.ids = [options.name];
        }

        return instance.helpers.each(context, options);
      } else {
        return inverse(this);
      }
    } else {
      if (options.data && options.ids) {
        var data = _utils.createFrame(options.data);
        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
        options = { data: data };
      }

      return fn(context, options);
    }
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvYmxvY2staGVscGVyLW1pc3NpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztxQkFBc0QsVUFBVTs7cUJBRWpELFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3ZFLFFBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPO1FBQ3pCLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUVwQixRQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7QUFDcEIsYUFBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDakIsTUFBTSxJQUFJLE9BQU8sS0FBSyxLQUFLLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtBQUMvQyxhQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN0QixNQUFNLElBQUksZUFBUSxPQUFPLENBQUMsRUFBRTtBQUMzQixVQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ3RCLFlBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUNmLGlCQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCOztBQUVELGVBQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO09BQ2hELE1BQU07QUFDTCxlQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztPQUN0QjtLQUNGLE1BQU07QUFDTCxVQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUMvQixZQUFJLElBQUksR0FBRyxtQkFBWSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckMsWUFBSSxDQUFDLFdBQVcsR0FBRyx5QkFBa0IsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdFLGVBQU8sR0FBRyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsQ0FBQztPQUN4Qjs7QUFFRCxhQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDN0I7R0FDRixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJibG9jay1oZWxwZXItbWlzc2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXBwZW5kQ29udGV4dFBhdGgsIGNyZWF0ZUZyYW1lLCBpc0FycmF5fSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdibG9ja0hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbihjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgbGV0IGludmVyc2UgPSBvcHRpb25zLmludmVyc2UsXG4gICAgICAgIGZuID0gb3B0aW9ucy5mbjtcblxuICAgIGlmIChjb250ZXh0ID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZm4odGhpcyk7XG4gICAgfSBlbHNlIGlmIChjb250ZXh0ID09PSBmYWxzZSB8fCBjb250ZXh0ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheShjb250ZXh0KSkge1xuICAgICAgaWYgKGNvbnRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAob3B0aW9ucy5pZHMpIHtcbiAgICAgICAgICBvcHRpb25zLmlkcyA9IFtvcHRpb25zLm5hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnMuZWFjaChjb250ZXh0LCBvcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIGxldCBkYXRhID0gY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoKG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCwgb3B0aW9ucy5uYW1lKTtcbiAgICAgICAgb3B0aW9ucyA9IHtkYXRhOiBkYXRhfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZuKGNvbnRleHQsIG9wdGlvbnMpO1xuICAgIH1cbiAgfSk7XG59XG4iXX0=


/***/ }),
/* 39 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/helpers/each.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = __webpack_require__(/*! ../utils */ 0);

var _exception = __webpack_require__(/*! ../exception */ 2);

var _exception2 = _interopRequireDefault(_exception);

exports['default'] = function (instance) {
  instance.registerHelper('each', function (context, options) {
    if (!options) {
      throw new _exception2['default']('Must pass iterator to #each');
    }

    var fn = options.fn,
        inverse = options.inverse,
        i = 0,
        ret = '',
        data = undefined,
        contextPath = undefined;

    if (options.data && options.ids) {
      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
    }

    if (_utils.isFunction(context)) {
      context = context.call(this);
    }

    if (options.data) {
      data = _utils.createFrame(options.data);
    }

    function execIteration(field, index, last) {
      if (data) {
        data.key = field;
        data.index = index;
        data.first = index === 0;
        data.last = !!last;

        if (contextPath) {
          data.contextPath = contextPath + field;
        }
      }

      ret = ret + fn(context[field], {
        data: data,
        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
      });
    }

    if (context && typeof context === 'object') {
      if (_utils.isArray(context)) {
        for (var j = context.length; i < j; i++) {
          if (i in context) {
            execIteration(i, i, i === context.length - 1);
          }
        }
      } else {
        var priorKey = undefined;

        for (var key in context) {
          if (context.hasOwnProperty(key)) {
            // We're running the iterations one step out of sync so we can detect
            // the last iteration without have to scan the object twice and create
            // an itermediate keys array.
            if (priorKey !== undefined) {
              execIteration(priorKey, i - 1);
            }
            priorKey = key;
            i++;
          }
        }
        if (priorKey !== undefined) {
          execIteration(priorKey, i - 1, true);
        }
      }
    }

    if (i === 0) {
      ret = inverse(this);
    }

    return ret;
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvZWFjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O3FCQUErRSxVQUFVOzt5QkFDbkUsY0FBYzs7OztxQkFFckIsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3pELFFBQUksQ0FBQyxPQUFPLEVBQUU7QUFDWixZQUFNLDJCQUFjLDZCQUE2QixDQUFDLENBQUM7S0FDcEQ7O0FBRUQsUUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLEVBQUU7UUFDZixPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU87UUFDekIsQ0FBQyxHQUFHLENBQUM7UUFDTCxHQUFHLEdBQUcsRUFBRTtRQUNSLElBQUksWUFBQTtRQUNKLFdBQVcsWUFBQSxDQUFDOztBQUVoQixRQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUMvQixpQkFBVyxHQUFHLHlCQUFrQixPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0tBQ2pGOztBQUVELFFBQUksa0JBQVcsT0FBTyxDQUFDLEVBQUU7QUFBRSxhQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUFFOztBQUUxRCxRQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7QUFDaEIsVUFBSSxHQUFHLG1CQUFZLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNsQzs7QUFFRCxhQUFTLGFBQWEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtBQUN6QyxVQUFJLElBQUksRUFBRTtBQUNSLFlBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0FBQ2pCLFlBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ25CLFlBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQztBQUN6QixZQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7O0FBRW5CLFlBQUksV0FBVyxFQUFFO0FBQ2YsY0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLEdBQUcsS0FBSyxDQUFDO1NBQ3hDO09BQ0Y7O0FBRUQsU0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQzdCLFlBQUksRUFBRSxJQUFJO0FBQ1YsbUJBQVcsRUFBRSxtQkFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLFdBQVcsR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7T0FDL0UsQ0FBQyxDQUFDO0tBQ0o7O0FBRUQsUUFBSSxPQUFPLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO0FBQzFDLFVBQUksZUFBUSxPQUFPLENBQUMsRUFBRTtBQUNwQixhQUFLLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN2QyxjQUFJLENBQUMsSUFBSSxPQUFPLEVBQUU7QUFDaEIseUJBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1dBQy9DO1NBQ0Y7T0FDRixNQUFNO0FBQ0wsWUFBSSxRQUFRLFlBQUEsQ0FBQzs7QUFFYixhQUFLLElBQUksR0FBRyxJQUFJLE9BQU8sRUFBRTtBQUN2QixjQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7Ozs7QUFJL0IsZ0JBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUMxQiwyQkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDaEM7QUFDRCxvQkFBUSxHQUFHLEdBQUcsQ0FBQztBQUNmLGFBQUMsRUFBRSxDQUFDO1dBQ0w7U0FDRjtBQUNELFlBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUMxQix1QkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3RDO09BQ0Y7S0FDRjs7QUFFRCxRQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDWCxTQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3JCOztBQUVELFdBQU8sR0FBRyxDQUFDO0dBQ1osQ0FBQyxDQUFDO0NBQ0oiLCJmaWxlIjoiZWFjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXBwZW5kQ29udGV4dFBhdGgsIGJsb2NrUGFyYW1zLCBjcmVhdGVGcmFtZSwgaXNBcnJheSwgaXNGdW5jdGlvbn0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tICcuLi9leGNlcHRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignZWFjaCcsIGZ1bmN0aW9uKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ011c3QgcGFzcyBpdGVyYXRvciB0byAjZWFjaCcpO1xuICAgIH1cblxuICAgIGxldCBmbiA9IG9wdGlvbnMuZm4sXG4gICAgICAgIGludmVyc2UgPSBvcHRpb25zLmludmVyc2UsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICByZXQgPSAnJyxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgY29udGV4dFBhdGg7XG5cbiAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICBjb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoKG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCwgb3B0aW9ucy5pZHNbMF0pICsgJy4nO1xuICAgIH1cblxuICAgIGlmIChpc0Z1bmN0aW9uKGNvbnRleHQpKSB7IGNvbnRleHQgPSBjb250ZXh0LmNhbGwodGhpcyk7IH1cblxuICAgIGlmIChvcHRpb25zLmRhdGEpIHtcbiAgICAgIGRhdGEgPSBjcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV4ZWNJdGVyYXRpb24oZmllbGQsIGluZGV4LCBsYXN0KSB7XG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBkYXRhLmtleSA9IGZpZWxkO1xuICAgICAgICBkYXRhLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIGRhdGEuZmlyc3QgPSBpbmRleCA9PT0gMDtcbiAgICAgICAgZGF0YS5sYXN0ID0gISFsYXN0O1xuXG4gICAgICAgIGlmIChjb250ZXh0UGF0aCkge1xuICAgICAgICAgIGRhdGEuY29udGV4dFBhdGggPSBjb250ZXh0UGF0aCArIGZpZWxkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldCA9IHJldCArIGZuKGNvbnRleHRbZmllbGRdLCB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGJsb2NrUGFyYW1zOiBibG9ja1BhcmFtcyhbY29udGV4dFtmaWVsZF0sIGZpZWxkXSwgW2NvbnRleHRQYXRoICsgZmllbGQsIG51bGxdKVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHQgJiYgdHlwZW9mIGNvbnRleHQgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoaXNBcnJheShjb250ZXh0KSkge1xuICAgICAgICBmb3IgKGxldCBqID0gY29udGV4dC5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgICBpZiAoaSBpbiBjb250ZXh0KSB7XG4gICAgICAgICAgICBleGVjSXRlcmF0aW9uKGksIGksIGkgPT09IGNvbnRleHQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgcHJpb3JLZXk7XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIGNvbnRleHQpIHtcbiAgICAgICAgICBpZiAoY29udGV4dC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAvLyBXZSdyZSBydW5uaW5nIHRoZSBpdGVyYXRpb25zIG9uZSBzdGVwIG91dCBvZiBzeW5jIHNvIHdlIGNhbiBkZXRlY3RcbiAgICAgICAgICAgIC8vIHRoZSBsYXN0IGl0ZXJhdGlvbiB3aXRob3V0IGhhdmUgdG8gc2NhbiB0aGUgb2JqZWN0IHR3aWNlIGFuZCBjcmVhdGVcbiAgICAgICAgICAgIC8vIGFuIGl0ZXJtZWRpYXRlIGtleXMgYXJyYXkuXG4gICAgICAgICAgICBpZiAocHJpb3JLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBleGVjSXRlcmF0aW9uKHByaW9yS2V5LCBpIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmlvcktleSA9IGtleTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByaW9yS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBleGVjSXRlcmF0aW9uKHByaW9yS2V5LCBpIC0gMSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgcmV0ID0gaW52ZXJzZSh0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cbiJdfQ==


/***/ }),
/* 40 */
/* unknown exports provided */
/* all exports used */
/*!********************************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/helpers/helper-missing.js ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _exception = __webpack_require__(/*! ../exception */ 2);

var _exception2 = _interopRequireDefault(_exception);

exports['default'] = function (instance) {
  instance.registerHelper('helperMissing', function () /* [args, ]options */{
    if (arguments.length === 1) {
      // A missing field in a {{foo}} construct.
      return undefined;
    } else {
      // Someone is actually trying to call something, blow up.
      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
    }
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvaGVscGVyLW1pc3NpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozt5QkFBc0IsY0FBYzs7OztxQkFFckIsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLEVBQUUsaUNBQWdDO0FBQ3ZFLFFBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7O0FBRTFCLGFBQU8sU0FBUyxDQUFDO0tBQ2xCLE1BQU07O0FBRUwsWUFBTSwyQkFBYyxtQkFBbUIsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7S0FDdkY7R0FDRixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJoZWxwZXItbWlzc2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeGNlcHRpb24gZnJvbSAnLi4vZXhjZXB0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbigvKiBbYXJncywgXW9wdGlvbnMgKi8pIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgLy8gQSBtaXNzaW5nIGZpZWxkIGluIGEge3tmb299fSBjb25zdHJ1Y3QuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTb21lb25lIGlzIGFjdHVhbGx5IHRyeWluZyB0byBjYWxsIHNvbWV0aGluZywgYmxvdyB1cC5cbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ01pc3NpbmcgaGVscGVyOiBcIicgKyBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdLm5hbWUgKyAnXCInKTtcbiAgICB9XG4gIH0pO1xufVxuIl19


/***/ }),
/* 41 */
/* unknown exports provided */
/* all exports used */
/*!********************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/helpers/if.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(/*! ../utils */ 0);

exports['default'] = function (instance) {
  instance.registerHelper('if', function (conditional, options) {
    if (_utils.isFunction(conditional)) {
      conditional = conditional.call(this);
    }

    // Default behavior is to render the positive path if the value is truthy and not empty.
    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
      return options.inverse(this);
    } else {
      return options.fn(this);
    }
  });

  instance.registerHelper('unless', function (conditional, options) {
    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvaWYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztxQkFBa0MsVUFBVTs7cUJBRTdCLFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFVBQVMsV0FBVyxFQUFFLE9BQU8sRUFBRTtBQUMzRCxRQUFJLGtCQUFXLFdBQVcsQ0FBQyxFQUFFO0FBQUUsaUJBQVcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQUU7Ozs7O0FBS3RFLFFBQUksQUFBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsV0FBVyxJQUFLLGVBQVEsV0FBVyxDQUFDLEVBQUU7QUFDdkUsYUFBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzlCLE1BQU07QUFDTCxhQUFPLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekI7R0FDRixDQUFDLENBQUM7O0FBRUgsVUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsVUFBUyxXQUFXLEVBQUUsT0FBTyxFQUFFO0FBQy9ELFdBQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztHQUN2SCxDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJpZi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNFbXB0eSwgaXNGdW5jdGlvbn0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignaWYnLCBmdW5jdGlvbihjb25kaXRpb25hbCwgb3B0aW9ucykge1xuICAgIGlmIChpc0Z1bmN0aW9uKGNvbmRpdGlvbmFsKSkgeyBjb25kaXRpb25hbCA9IGNvbmRpdGlvbmFsLmNhbGwodGhpcyk7IH1cblxuICAgIC8vIERlZmF1bHQgYmVoYXZpb3IgaXMgdG8gcmVuZGVyIHRoZSBwb3NpdGl2ZSBwYXRoIGlmIHRoZSB2YWx1ZSBpcyB0cnV0aHkgYW5kIG5vdCBlbXB0eS5cbiAgICAvLyBUaGUgYGluY2x1ZGVaZXJvYCBvcHRpb24gbWF5IGJlIHNldCB0byB0cmVhdCB0aGUgY29uZHRpb25hbCBhcyBwdXJlbHkgbm90IGVtcHR5IGJhc2VkIG9uIHRoZVxuICAgIC8vIGJlaGF2aW9yIG9mIGlzRW1wdHkuIEVmZmVjdGl2ZWx5IHRoaXMgZGV0ZXJtaW5lcyBpZiAwIGlzIGhhbmRsZWQgYnkgdGhlIHBvc2l0aXZlIHBhdGggb3IgbmVnYXRpdmUuXG4gICAgaWYgKCghb3B0aW9ucy5oYXNoLmluY2x1ZGVaZXJvICYmICFjb25kaXRpb25hbCkgfHwgaXNFbXB0eShjb25kaXRpb25hbCkpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmZuKHRoaXMpO1xuICAgIH1cbiAgfSk7XG5cbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ3VubGVzcycsIGZ1bmN0aW9uKGNvbmRpdGlvbmFsLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnNbJ2lmJ10uY2FsbCh0aGlzLCBjb25kaXRpb25hbCwge2ZuOiBvcHRpb25zLmludmVyc2UsIGludmVyc2U6IG9wdGlvbnMuZm4sIGhhc2g6IG9wdGlvbnMuaGFzaH0pO1xuICB9KTtcbn1cbiJdfQ==


/***/ }),
/* 42 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/helpers/log.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports['default'] = function (instance) {
  instance.registerHelper('log', function () /* message, options */{
    var args = [undefined],
        options = arguments[arguments.length - 1];
    for (var i = 0; i < arguments.length - 1; i++) {
      args.push(arguments[i]);
    }

    var level = 1;
    if (options.hash.level != null) {
      level = options.hash.level;
    } else if (options.data && options.data.level != null) {
      level = options.data.level;
    }
    args[0] = level;

    instance.log.apply(instance, args);
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvbG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQWUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsa0NBQWlDO0FBQzlELFFBQUksSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ2xCLE9BQU8sR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM5QyxTQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDN0MsVUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN6Qjs7QUFFRCxRQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDZCxRQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTtBQUM5QixXQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDNUIsTUFBTSxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO0FBQ3JELFdBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztLQUM1QjtBQUNELFFBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7O0FBRWhCLFlBQVEsQ0FBQyxHQUFHLE1BQUEsQ0FBWixRQUFRLEVBQVMsSUFBSSxDQUFDLENBQUM7R0FDeEIsQ0FBQyxDQUFDO0NBQ0oiLCJmaWxlIjoibG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2xvZycsIGZ1bmN0aW9uKC8qIG1lc3NhZ2UsIG9wdGlvbnMgKi8pIHtcbiAgICBsZXQgYXJncyA9IFt1bmRlZmluZWRdLFxuICAgICAgICBvcHRpb25zID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cblxuICAgIGxldCBsZXZlbCA9IDE7XG4gICAgaWYgKG9wdGlvbnMuaGFzaC5sZXZlbCAhPSBudWxsKSB7XG4gICAgICBsZXZlbCA9IG9wdGlvbnMuaGFzaC5sZXZlbDtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmRhdGEubGV2ZWwgIT0gbnVsbCkge1xuICAgICAgbGV2ZWwgPSBvcHRpb25zLmRhdGEubGV2ZWw7XG4gICAgfVxuICAgIGFyZ3NbMF0gPSBsZXZlbDtcblxuICAgIGluc3RhbmNlLmxvZyguLi4gYXJncyk7XG4gIH0pO1xufVxuIl19


/***/ }),
/* 43 */
/* unknown exports provided */
/* all exports used */
/*!************************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/helpers/lookup.js ***!
  \************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports['default'] = function (instance) {
  instance.registerHelper('lookup', function (obj, field) {
    return obj && obj[field];
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvbG9va3VwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQWUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsVUFBUyxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ3JELFdBQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztHQUMxQixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJsb29rdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignbG9va3VwJywgZnVuY3Rpb24ob2JqLCBmaWVsZCkge1xuICAgIHJldHVybiBvYmogJiYgb2JqW2ZpZWxkXTtcbiAgfSk7XG59XG4iXX0=


/***/ }),
/* 44 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/helpers/with.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(/*! ../utils */ 0);

exports['default'] = function (instance) {
  instance.registerHelper('with', function (context, options) {
    if (_utils.isFunction(context)) {
      context = context.call(this);
    }

    var fn = options.fn;

    if (!_utils.isEmpty(context)) {
      var data = options.data;
      if (options.data && options.ids) {
        data = _utils.createFrame(options.data);
        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
      }

      return fn(context, {
        data: data,
        blockParams: _utils.blockParams([context], [data && data.contextPath])
      });
    } else {
      return options.inverse(this);
    }
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvd2l0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O3FCQUErRSxVQUFVOztxQkFFMUUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3pELFFBQUksa0JBQVcsT0FBTyxDQUFDLEVBQUU7QUFBRSxhQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUFFOztBQUUxRCxRQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUVwQixRQUFJLENBQUMsZUFBUSxPQUFPLENBQUMsRUFBRTtBQUNyQixVQUFJLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO0FBQ3hCLFVBQUksT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO0FBQy9CLFlBQUksR0FBRyxtQkFBWSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDakMsWUFBSSxDQUFDLFdBQVcsR0FBRyx5QkFBa0IsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO09BQ2hGOztBQUVELGFBQU8sRUFBRSxDQUFDLE9BQU8sRUFBRTtBQUNqQixZQUFJLEVBQUUsSUFBSTtBQUNWLG1CQUFXLEVBQUUsbUJBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7T0FDaEUsQ0FBQyxDQUFDO0tBQ0osTUFBTTtBQUNMLGFBQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM5QjtHQUNGLENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6IndpdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FwcGVuZENvbnRleHRQYXRoLCBibG9ja1BhcmFtcywgY3JlYXRlRnJhbWUsIGlzRW1wdHksIGlzRnVuY3Rpb259IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ3dpdGgnLCBmdW5jdGlvbihjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24oY29udGV4dCkpIHsgY29udGV4dCA9IGNvbnRleHQuY2FsbCh0aGlzKTsgfVxuXG4gICAgbGV0IGZuID0gb3B0aW9ucy5mbjtcblxuICAgIGlmICghaXNFbXB0eShjb250ZXh0KSkge1xuICAgICAgbGV0IGRhdGEgPSBvcHRpb25zLmRhdGE7XG4gICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIGRhdGEgPSBjcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgICAgICBkYXRhLmNvbnRleHRQYXRoID0gYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLmlkc1swXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmbihjb250ZXh0LCB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGJsb2NrUGFyYW1zOiBibG9ja1BhcmFtcyhbY29udGV4dF0sIFtkYXRhICYmIGRhdGEuY29udGV4dFBhdGhdKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==


/***/ }),
/* 45 */
/* unknown exports provided */
/* all exports used */
/*!****************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/logger.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(/*! ./utils */ 0);

var logger = {
  methodMap: ['debug', 'info', 'warn', 'error'],
  level: 'info',

  // Maps a given level value to the `methodMap` indexes above.
  lookupLevel: function lookupLevel(level) {
    if (typeof level === 'string') {
      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
      if (levelMap >= 0) {
        level = levelMap;
      } else {
        level = parseInt(level, 10);
      }
    }

    return level;
  },

  // Can be overridden in the host environment
  log: function log(level) {
    level = logger.lookupLevel(level);

    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
      var method = logger.methodMap[level];
      if (!console[method]) {
        // eslint-disable-line no-console
        method = 'log';
      }

      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        message[_key - 1] = arguments[_key];
      }

      console[method].apply(console, message); // eslint-disable-line no-console
    }
  }
};

exports['default'] = logger;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2xvZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O3FCQUFzQixTQUFTOztBQUUvQixJQUFJLE1BQU0sR0FBRztBQUNYLFdBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQztBQUM3QyxPQUFLLEVBQUUsTUFBTTs7O0FBR2IsYUFBVyxFQUFFLHFCQUFTLEtBQUssRUFBRTtBQUMzQixRQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtBQUM3QixVQUFJLFFBQVEsR0FBRyxlQUFRLE1BQU0sQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDOUQsVUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFO0FBQ2pCLGFBQUssR0FBRyxRQUFRLENBQUM7T0FDbEIsTUFBTTtBQUNMLGFBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO09BQzdCO0tBQ0Y7O0FBRUQsV0FBTyxLQUFLLENBQUM7R0FDZDs7O0FBR0QsS0FBRyxFQUFFLGFBQVMsS0FBSyxFQUFjO0FBQy9CLFNBQUssR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDOztBQUVsQyxRQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLEVBQUU7QUFDL0UsVUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQyxVQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFOztBQUNwQixjQUFNLEdBQUcsS0FBSyxDQUFDO09BQ2hCOzt3Q0FQbUIsT0FBTztBQUFQLGVBQU87OztBQVEzQixhQUFPLENBQUMsTUFBTSxPQUFDLENBQWYsT0FBTyxFQUFZLE9BQU8sQ0FBQyxDQUFDO0tBQzdCO0dBQ0Y7Q0FDRixDQUFDOztxQkFFYSxNQUFNIiwiZmlsZSI6ImxvZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5kZXhPZn0gZnJvbSAnLi91dGlscyc7XG5cbmxldCBsb2dnZXIgPSB7XG4gIG1ldGhvZE1hcDogWydkZWJ1ZycsICdpbmZvJywgJ3dhcm4nLCAnZXJyb3InXSxcbiAgbGV2ZWw6ICdpbmZvJyxcblxuICAvLyBNYXBzIGEgZ2l2ZW4gbGV2ZWwgdmFsdWUgdG8gdGhlIGBtZXRob2RNYXBgIGluZGV4ZXMgYWJvdmUuXG4gIGxvb2t1cExldmVsOiBmdW5jdGlvbihsZXZlbCkge1xuICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBsZXQgbGV2ZWxNYXAgPSBpbmRleE9mKGxvZ2dlci5tZXRob2RNYXAsIGxldmVsLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgaWYgKGxldmVsTWFwID49IDApIHtcbiAgICAgICAgbGV2ZWwgPSBsZXZlbE1hcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldmVsID0gcGFyc2VJbnQobGV2ZWwsIDEwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGV2ZWw7XG4gIH0sXG5cbiAgLy8gQ2FuIGJlIG92ZXJyaWRkZW4gaW4gdGhlIGhvc3QgZW52aXJvbm1lbnRcbiAgbG9nOiBmdW5jdGlvbihsZXZlbCwgLi4ubWVzc2FnZSkge1xuICAgIGxldmVsID0gbG9nZ2VyLmxvb2t1cExldmVsKGxldmVsKTtcblxuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9nZ2VyLmxvb2t1cExldmVsKGxvZ2dlci5sZXZlbCkgPD0gbGV2ZWwpIHtcbiAgICAgIGxldCBtZXRob2QgPSBsb2dnZXIubWV0aG9kTWFwW2xldmVsXTtcbiAgICAgIGlmICghY29uc29sZVttZXRob2RdKSB7ICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgIG1ldGhvZCA9ICdsb2cnO1xuICAgICAgfVxuICAgICAgY29uc29sZVttZXRob2RdKC4uLm1lc3NhZ2UpOyAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2dlcjtcbiJdfQ==


/***/ }),
/* 46 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/no-conflict.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* global window */


exports.__esModule = true;

exports['default'] = function (Handlebars) {
  /* istanbul ignore next */
  var root = typeof global !== 'undefined' ? global : window,
      $Handlebars = root.Handlebars;
  /* istanbul ignore next */
  Handlebars.noConflict = function () {
    if (root.Handlebars === Handlebars) {
      root.Handlebars = $Handlebars;
    }
    return Handlebars;
  };
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL25vLWNvbmZsaWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O3FCQUNlLFVBQVMsVUFBVSxFQUFFOztBQUVsQyxNQUFJLElBQUksR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLEdBQUcsTUFBTSxHQUFHLE1BQU07TUFDdEQsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7O0FBRWxDLFlBQVUsQ0FBQyxVQUFVLEdBQUcsWUFBVztBQUNqQyxRQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUFFO0FBQ2xDLFVBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDO0tBQy9CO0FBQ0QsV0FBTyxVQUFVLENBQUM7R0FDbkIsQ0FBQztDQUNIIiwiZmlsZSI6Im5vLWNvbmZsaWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsIHdpbmRvdyAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oSGFuZGxlYmFycykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBsZXQgcm9vdCA9IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogd2luZG93LFxuICAgICAgJEhhbmRsZWJhcnMgPSByb290LkhhbmRsZWJhcnM7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIEhhbmRsZWJhcnMubm9Db25mbGljdCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChyb290LkhhbmRsZWJhcnMgPT09IEhhbmRsZWJhcnMpIHtcbiAgICAgIHJvb3QuSGFuZGxlYmFycyA9ICRIYW5kbGViYXJzO1xuICAgIH1cbiAgICByZXR1cm4gSGFuZGxlYmFycztcbiAgfTtcbn1cbiJdfQ==

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ 4)))

/***/ }),
/* 47 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/runtime.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.checkRevision = checkRevision;
exports.template = template;
exports.wrapProgram = wrapProgram;
exports.resolvePartial = resolvePartial;
exports.invokePartial = invokePartial;
exports.noop = noop;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _utils = __webpack_require__(/*! ./utils */ 0);

var Utils = _interopRequireWildcard(_utils);

var _exception = __webpack_require__(/*! ./exception */ 2);

var _exception2 = _interopRequireDefault(_exception);

var _base = __webpack_require__(/*! ./base */ 6);

function checkRevision(compilerInfo) {
  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
      currentRevision = _base.COMPILER_REVISION;

  if (compilerRevision !== currentRevision) {
    if (compilerRevision < currentRevision) {
      var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
          compilerVersions = _base.REVISION_CHANGES[compilerRevision];
      throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
    } else {
      // Use the embedded version info since the runtime doesn't know about this revision yet
      throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
    }
  }
}

function template(templateSpec, env) {
  /* istanbul ignore next */
  if (!env) {
    throw new _exception2['default']('No environment passed to template');
  }
  if (!templateSpec || !templateSpec.main) {
    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
  }

  templateSpec.main.decorator = templateSpec.main_d;

  // Note: Using env.VM references rather than local var references throughout this section to allow
  // for external users to override these as psuedo-supported APIs.
  env.VM.checkRevision(templateSpec.compiler);

  function invokePartialWrapper(partial, context, options) {
    if (options.hash) {
      context = Utils.extend({}, context, options.hash);
      if (options.ids) {
        options.ids[0] = true;
      }
    }

    partial = env.VM.resolvePartial.call(this, partial, context, options);
    var result = env.VM.invokePartial.call(this, partial, context, options);

    if (result == null && env.compile) {
      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
      result = options.partials[options.name](context, options);
    }
    if (result != null) {
      if (options.indent) {
        var lines = result.split('\n');
        for (var i = 0, l = lines.length; i < l; i++) {
          if (!lines[i] && i + 1 === l) {
            break;
          }

          lines[i] = options.indent + lines[i];
        }
        result = lines.join('\n');
      }
      return result;
    } else {
      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
    }
  }

  // Just add water
  var container = {
    strict: function strict(obj, name) {
      if (!(name in obj)) {
        throw new _exception2['default']('"' + name + '" not defined in ' + obj);
      }
      return obj[name];
    },
    lookup: function lookup(depths, name) {
      var len = depths.length;
      for (var i = 0; i < len; i++) {
        if (depths[i] && depths[i][name] != null) {
          return depths[i][name];
        }
      }
    },
    lambda: function lambda(current, context) {
      return typeof current === 'function' ? current.call(context) : current;
    },

    escapeExpression: Utils.escapeExpression,
    invokePartial: invokePartialWrapper,

    fn: function fn(i) {
      var ret = templateSpec[i];
      ret.decorator = templateSpec[i + '_d'];
      return ret;
    },

    programs: [],
    program: function program(i, data, declaredBlockParams, blockParams, depths) {
      var programWrapper = this.programs[i],
          fn = this.fn(i);
      if (data || depths || blockParams || declaredBlockParams) {
        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
      } else if (!programWrapper) {
        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
      }
      return programWrapper;
    },

    data: function data(value, depth) {
      while (value && depth--) {
        value = value._parent;
      }
      return value;
    },
    merge: function merge(param, common) {
      var obj = param || common;

      if (param && common && param !== common) {
        obj = Utils.extend({}, common, param);
      }

      return obj;
    },
    // An empty object to use as replacement for null-contexts
    nullContext: Object.seal({}),

    noop: env.VM.noop,
    compilerInfo: templateSpec.compiler
  };

  function ret(context) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var data = options.data;

    ret._setup(options);
    if (!options.partial && templateSpec.useData) {
      data = initData(context, data);
    }
    var depths = undefined,
        blockParams = templateSpec.useBlockParams ? [] : undefined;
    if (templateSpec.useDepths) {
      if (options.depths) {
        depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
      } else {
        depths = [context];
      }
    }

    function main(context /*, options*/) {
      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
    }
    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
    return main(context, options);
  }
  ret.isTop = true;

  ret._setup = function (options) {
    if (!options.partial) {
      container.helpers = container.merge(options.helpers, env.helpers);

      if (templateSpec.usePartial) {
        container.partials = container.merge(options.partials, env.partials);
      }
      if (templateSpec.usePartial || templateSpec.useDecorators) {
        container.decorators = container.merge(options.decorators, env.decorators);
      }
    } else {
      container.helpers = options.helpers;
      container.partials = options.partials;
      container.decorators = options.decorators;
    }
  };

  ret._child = function (i, data, blockParams, depths) {
    if (templateSpec.useBlockParams && !blockParams) {
      throw new _exception2['default']('must pass block params');
    }
    if (templateSpec.useDepths && !depths) {
      throw new _exception2['default']('must pass parent depths');
    }

    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
  };
  return ret;
}

function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
  function prog(context) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var currentDepths = depths;
    if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
      currentDepths = [context].concat(depths);
    }

    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
  }

  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

  prog.program = i;
  prog.depth = depths ? depths.length : 0;
  prog.blockParams = declaredBlockParams || 0;
  return prog;
}

function resolvePartial(partial, context, options) {
  if (!partial) {
    if (options.name === '@partial-block') {
      partial = options.data['partial-block'];
    } else {
      partial = options.partials[options.name];
    }
  } else if (!partial.call && !options.name) {
    // This is a dynamic partial that returned a string
    options.name = partial;
    partial = options.partials[partial];
  }
  return partial;
}

function invokePartial(partial, context, options) {
  // Use the current closure context to save the partial-block if this partial
  var currentPartialBlock = options.data && options.data['partial-block'];
  options.partial = true;
  if (options.ids) {
    options.data.contextPath = options.ids[0] || options.data.contextPath;
  }

  var partialBlock = undefined;
  if (options.fn && options.fn !== noop) {
    (function () {
      options.data = _base.createFrame(options.data);
      // Wrapper function to get access to currentPartialBlock from the closure
      var fn = options.fn;
      partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        // Restore the partial-block from the closure for the execution of the block
        // i.e. the part inside the block of the partial call.
        options.data = _base.createFrame(options.data);
        options.data['partial-block'] = currentPartialBlock;
        return fn(context, options);
      };
      if (fn.partials) {
        options.partials = Utils.extend({}, options.partials, fn.partials);
      }
    })();
  }

  if (partial === undefined && partialBlock) {
    partial = partialBlock;
  }

  if (partial === undefined) {
    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
  } else if (partial instanceof Function) {
    return partial(context, options);
  }
}

function noop() {
  return '';
}

function initData(context, data) {
  if (!data || !('root' in data)) {
    data = data ? _base.createFrame(data) : {};
    data.root = context;
  }
  return data;
}

function executeDecorators(fn, prog, container, depths, data, blockParams) {
  if (fn.decorator) {
    var props = {};
    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
    Utils.extend(prog, props);
  }
  return prog;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3J1bnRpbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQXVCLFNBQVM7O0lBQXBCLEtBQUs7O3lCQUNLLGFBQWE7Ozs7b0JBQzhCLFFBQVE7O0FBRWxFLFNBQVMsYUFBYSxDQUFDLFlBQVksRUFBRTtBQUMxQyxNQUFNLGdCQUFnQixHQUFHLFlBQVksSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztNQUN2RCxlQUFlLDBCQUFvQixDQUFDOztBQUUxQyxNQUFJLGdCQUFnQixLQUFLLGVBQWUsRUFBRTtBQUN4QyxRQUFJLGdCQUFnQixHQUFHLGVBQWUsRUFBRTtBQUN0QyxVQUFNLGVBQWUsR0FBRyx1QkFBaUIsZUFBZSxDQUFDO1VBQ25ELGdCQUFnQixHQUFHLHVCQUFpQixnQkFBZ0IsQ0FBQyxDQUFDO0FBQzVELFlBQU0sMkJBQWMseUZBQXlGLEdBQ3ZHLHFEQUFxRCxHQUFHLGVBQWUsR0FBRyxtREFBbUQsR0FBRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUNoSyxNQUFNOztBQUVMLFlBQU0sMkJBQWMsd0ZBQXdGLEdBQ3RHLGlEQUFpRCxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUNuRjtHQUNGO0NBQ0Y7O0FBRU0sU0FBUyxRQUFRLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTs7QUFFMUMsTUFBSSxDQUFDLEdBQUcsRUFBRTtBQUNSLFVBQU0sMkJBQWMsbUNBQW1DLENBQUMsQ0FBQztHQUMxRDtBQUNELE1BQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFO0FBQ3ZDLFVBQU0sMkJBQWMsMkJBQTJCLEdBQUcsT0FBTyxZQUFZLENBQUMsQ0FBQztHQUN4RTs7QUFFRCxjQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDOzs7O0FBSWxELEtBQUcsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFFNUMsV0FBUyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTtBQUN2RCxRQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7QUFDaEIsYUFBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEQsVUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO0FBQ2YsZUFBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7T0FDdkI7S0FDRjs7QUFFRCxXQUFPLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3RFLFFBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQzs7QUFFeEUsUUFBSSxNQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUU7QUFDakMsYUFBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN6RixZQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQzNEO0FBQ0QsUUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO0FBQ2xCLFVBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtBQUNsQixZQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQy9CLGFBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDNUMsY0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUM1QixrQkFBTTtXQUNQOztBQUVELGVBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0QztBQUNELGNBQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO09BQzNCO0FBQ0QsYUFBTyxNQUFNLENBQUM7S0FDZixNQUFNO0FBQ0wsWUFBTSwyQkFBYyxjQUFjLEdBQUcsT0FBTyxDQUFDLElBQUksR0FBRywwREFBMEQsQ0FBQyxDQUFDO0tBQ2pIO0dBQ0Y7OztBQUdELE1BQUksU0FBUyxHQUFHO0FBQ2QsVUFBTSxFQUFFLGdCQUFTLEdBQUcsRUFBRSxJQUFJLEVBQUU7QUFDMUIsVUFBSSxFQUFFLElBQUksSUFBSSxHQUFHLENBQUEsQUFBQyxFQUFFO0FBQ2xCLGNBQU0sMkJBQWMsR0FBRyxHQUFHLElBQUksR0FBRyxtQkFBbUIsR0FBRyxHQUFHLENBQUMsQ0FBQztPQUM3RDtBQUNELGFBQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2xCO0FBQ0QsVUFBTSxFQUFFLGdCQUFTLE1BQU0sRUFBRSxJQUFJLEVBQUU7QUFDN0IsVUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUMxQixXQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzVCLFlBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7QUFDeEMsaUJBQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hCO09BQ0Y7S0FDRjtBQUNELFVBQU0sRUFBRSxnQkFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ2pDLGFBQU8sT0FBTyxPQUFPLEtBQUssVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsT0FBTyxDQUFDO0tBQ3hFOztBQUVELG9CQUFnQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0I7QUFDeEMsaUJBQWEsRUFBRSxvQkFBb0I7O0FBRW5DLE1BQUUsRUFBRSxZQUFTLENBQUMsRUFBRTtBQUNkLFVBQUksR0FBRyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxQixTQUFHLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDdkMsYUFBTyxHQUFHLENBQUM7S0FDWjs7QUFFRCxZQUFRLEVBQUUsRUFBRTtBQUNaLFdBQU8sRUFBRSxpQkFBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7QUFDbkUsVUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7VUFDakMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEIsVUFBSSxJQUFJLElBQUksTUFBTSxJQUFJLFdBQVcsSUFBSSxtQkFBbUIsRUFBRTtBQUN4RCxzQkFBYyxHQUFHLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO09BQzNGLE1BQU0sSUFBSSxDQUFDLGNBQWMsRUFBRTtBQUMxQixzQkFBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7T0FDOUQ7QUFDRCxhQUFPLGNBQWMsQ0FBQztLQUN2Qjs7QUFFRCxRQUFJLEVBQUUsY0FBUyxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBQzNCLGFBQU8sS0FBSyxJQUFJLEtBQUssRUFBRSxFQUFFO0FBQ3ZCLGFBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO09BQ3ZCO0FBQ0QsYUFBTyxLQUFLLENBQUM7S0FDZDtBQUNELFNBQUssRUFBRSxlQUFTLEtBQUssRUFBRSxNQUFNLEVBQUU7QUFDN0IsVUFBSSxHQUFHLEdBQUcsS0FBSyxJQUFJLE1BQU0sQ0FBQzs7QUFFMUIsVUFBSSxLQUFLLElBQUksTUFBTSxJQUFLLEtBQUssS0FBSyxNQUFNLEFBQUMsRUFBRTtBQUN6QyxXQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO09BQ3ZDOztBQUVELGFBQU8sR0FBRyxDQUFDO0tBQ1o7O0FBRUQsZUFBVyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDOztBQUU1QixRQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJO0FBQ2pCLGdCQUFZLEVBQUUsWUFBWSxDQUFDLFFBQVE7R0FDcEMsQ0FBQzs7QUFFRixXQUFTLEdBQUcsQ0FBQyxPQUFPLEVBQWdCO1FBQWQsT0FBTyx5REFBRyxFQUFFOztBQUNoQyxRQUFJLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDOztBQUV4QixPQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3BCLFFBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLFlBQVksQ0FBQyxPQUFPLEVBQUU7QUFDNUMsVUFBSSxHQUFHLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDaEM7QUFDRCxRQUFJLE1BQU0sWUFBQTtRQUNOLFdBQVcsR0FBRyxZQUFZLENBQUMsY0FBYyxHQUFHLEVBQUUsR0FBRyxTQUFTLENBQUM7QUFDL0QsUUFBSSxZQUFZLENBQUMsU0FBUyxFQUFFO0FBQzFCLFVBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtBQUNsQixjQUFNLEdBQUcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7T0FDM0YsTUFBTTtBQUNMLGNBQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO09BQ3BCO0tBQ0Y7O0FBRUQsYUFBUyxJQUFJLENBQUMsT0FBTyxnQkFBZTtBQUNsQyxhQUFPLEVBQUUsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDckg7QUFDRCxRQUFJLEdBQUcsaUJBQWlCLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztBQUN0RyxXQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7R0FDL0I7QUFDRCxLQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzs7QUFFakIsS0FBRyxDQUFDLE1BQU0sR0FBRyxVQUFTLE9BQU8sRUFBRTtBQUM3QixRQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtBQUNwQixlQUFTLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRWxFLFVBQUksWUFBWSxDQUFDLFVBQVUsRUFBRTtBQUMzQixpQkFBUyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO09BQ3RFO0FBQ0QsVUFBSSxZQUFZLENBQUMsVUFBVSxJQUFJLFlBQVksQ0FBQyxhQUFhLEVBQUU7QUFDekQsaUJBQVMsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztPQUM1RTtLQUNGLE1BQU07QUFDTCxlQUFTLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7QUFDcEMsZUFBUyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO0FBQ3RDLGVBQVMsQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztLQUMzQztHQUNGLENBQUM7O0FBRUYsS0FBRyxDQUFDLE1BQU0sR0FBRyxVQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtBQUNsRCxRQUFJLFlBQVksQ0FBQyxjQUFjLElBQUksQ0FBQyxXQUFXLEVBQUU7QUFDL0MsWUFBTSwyQkFBYyx3QkFBd0IsQ0FBQyxDQUFDO0tBQy9DO0FBQ0QsUUFBSSxZQUFZLENBQUMsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ3JDLFlBQU0sMkJBQWMseUJBQXlCLENBQUMsQ0FBQztLQUNoRDs7QUFFRCxXQUFPLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztHQUNqRixDQUFDO0FBQ0YsU0FBTyxHQUFHLENBQUM7Q0FDWjs7QUFFTSxTQUFTLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtBQUM1RixXQUFTLElBQUksQ0FBQyxPQUFPLEVBQWdCO1FBQWQsT0FBTyx5REFBRyxFQUFFOztBQUNqQyxRQUFJLGFBQWEsR0FBRyxNQUFNLENBQUM7QUFDM0IsUUFBSSxNQUFNLElBQUksT0FBTyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLE9BQU8sS0FBSyxTQUFTLENBQUMsV0FBVyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUEsQUFBQyxFQUFFO0FBQ2hHLG1CQUFhLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDMUM7O0FBRUQsV0FBTyxFQUFFLENBQUMsU0FBUyxFQUNmLE9BQU8sRUFDUCxTQUFTLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxRQUFRLEVBQ3JDLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxFQUNwQixXQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUN4RCxhQUFhLENBQUMsQ0FBQztHQUNwQjs7QUFFRCxNQUFJLEdBQUcsaUJBQWlCLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQzs7QUFFekUsTUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFDakIsTUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDeEMsTUFBSSxDQUFDLFdBQVcsR0FBRyxtQkFBbUIsSUFBSSxDQUFDLENBQUM7QUFDNUMsU0FBTyxJQUFJLENBQUM7Q0FDYjs7QUFFTSxTQUFTLGNBQWMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTtBQUN4RCxNQUFJLENBQUMsT0FBTyxFQUFFO0FBQ1osUUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLGdCQUFnQixFQUFFO0FBQ3JDLGFBQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0tBQ3pDLE1BQU07QUFDTCxhQUFPLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDMUM7R0FDRixNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTs7QUFFekMsV0FBTyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7QUFDdkIsV0FBTyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7R0FDckM7QUFDRCxTQUFPLE9BQU8sQ0FBQztDQUNoQjs7QUFFTSxTQUFTLGFBQWEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTs7QUFFdkQsTUFBTSxtQkFBbUIsR0FBRyxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDMUUsU0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDdkIsTUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO0FBQ2YsV0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztHQUN2RTs7QUFFRCxNQUFJLFlBQVksWUFBQSxDQUFDO0FBQ2pCLE1BQUksT0FBTyxDQUFDLEVBQUUsSUFBSSxPQUFPLENBQUMsRUFBRSxLQUFLLElBQUksRUFBRTs7QUFDckMsYUFBTyxDQUFDLElBQUksR0FBRyxrQkFBWSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRXpDLFVBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUM7QUFDcEIsa0JBQVksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLFNBQVMsbUJBQW1CLENBQUMsT0FBTyxFQUFnQjtZQUFkLE9BQU8seURBQUcsRUFBRTs7OztBQUkvRixlQUFPLENBQUMsSUFBSSxHQUFHLGtCQUFZLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QyxlQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLG1CQUFtQixDQUFDO0FBQ3BELGVBQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztPQUM3QixDQUFDO0FBQ0YsVUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFO0FBQ2YsZUFBTyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztPQUNwRTs7R0FDRjs7QUFFRCxNQUFJLE9BQU8sS0FBSyxTQUFTLElBQUksWUFBWSxFQUFFO0FBQ3pDLFdBQU8sR0FBRyxZQUFZLENBQUM7R0FDeEI7O0FBRUQsTUFBSSxPQUFPLEtBQUssU0FBUyxFQUFFO0FBQ3pCLFVBQU0sMkJBQWMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxJQUFJLEdBQUcscUJBQXFCLENBQUMsQ0FBQztHQUM1RSxNQUFNLElBQUksT0FBTyxZQUFZLFFBQVEsRUFBRTtBQUN0QyxXQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7R0FDbEM7Q0FDRjs7QUFFTSxTQUFTLElBQUksR0FBRztBQUFFLFNBQU8sRUFBRSxDQUFDO0NBQUU7O0FBRXJDLFNBQVMsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDL0IsTUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLE1BQU0sSUFBSSxJQUFJLENBQUEsQUFBQyxFQUFFO0FBQzlCLFFBQUksR0FBRyxJQUFJLEdBQUcsa0JBQVksSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ3JDLFFBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO0dBQ3JCO0FBQ0QsU0FBTyxJQUFJLENBQUM7Q0FDYjs7QUFFRCxTQUFTLGlCQUFpQixDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0FBQ3pFLE1BQUksRUFBRSxDQUFDLFNBQVMsRUFBRTtBQUNoQixRQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDZixRQUFJLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDNUYsU0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7R0FDM0I7QUFDRCxTQUFPLElBQUksQ0FBQztDQUNiIiwiZmlsZSI6InJ1bnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBFeGNlcHRpb24gZnJvbSAnLi9leGNlcHRpb24nO1xuaW1wb3J0IHsgQ09NUElMRVJfUkVWSVNJT04sIFJFVklTSU9OX0NIQU5HRVMsIGNyZWF0ZUZyYW1lIH0gZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrUmV2aXNpb24oY29tcGlsZXJJbmZvKSB7XG4gIGNvbnN0IGNvbXBpbGVyUmV2aXNpb24gPSBjb21waWxlckluZm8gJiYgY29tcGlsZXJJbmZvWzBdIHx8IDEsXG4gICAgICAgIGN1cnJlbnRSZXZpc2lvbiA9IENPTVBJTEVSX1JFVklTSU9OO1xuXG4gIGlmIChjb21waWxlclJldmlzaW9uICE9PSBjdXJyZW50UmV2aXNpb24pIHtcbiAgICBpZiAoY29tcGlsZXJSZXZpc2lvbiA8IGN1cnJlbnRSZXZpc2lvbikge1xuICAgICAgY29uc3QgcnVudGltZVZlcnNpb25zID0gUkVWSVNJT05fQ0hBTkdFU1tjdXJyZW50UmV2aXNpb25dLFxuICAgICAgICAgICAgY29tcGlsZXJWZXJzaW9ucyA9IFJFVklTSU9OX0NIQU5HRVNbY29tcGlsZXJSZXZpc2lvbl07XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdUZW1wbGF0ZSB3YXMgcHJlY29tcGlsZWQgd2l0aCBhbiBvbGRlciB2ZXJzaW9uIG9mIEhhbmRsZWJhcnMgdGhhbiB0aGUgY3VycmVudCBydW50aW1lLiAnICtcbiAgICAgICAgICAgICdQbGVhc2UgdXBkYXRlIHlvdXIgcHJlY29tcGlsZXIgdG8gYSBuZXdlciB2ZXJzaW9uICgnICsgcnVudGltZVZlcnNpb25zICsgJykgb3IgZG93bmdyYWRlIHlvdXIgcnVudGltZSB0byBhbiBvbGRlciB2ZXJzaW9uICgnICsgY29tcGlsZXJWZXJzaW9ucyArICcpLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBVc2UgdGhlIGVtYmVkZGVkIHZlcnNpb24gaW5mbyBzaW5jZSB0aGUgcnVudGltZSBkb2Vzbid0IGtub3cgYWJvdXQgdGhpcyByZXZpc2lvbiB5ZXRcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1RlbXBsYXRlIHdhcyBwcmVjb21waWxlZCB3aXRoIGEgbmV3ZXIgdmVyc2lvbiBvZiBIYW5kbGViYXJzIHRoYW4gdGhlIGN1cnJlbnQgcnVudGltZS4gJyArXG4gICAgICAgICAgICAnUGxlYXNlIHVwZGF0ZSB5b3VyIHJ1bnRpbWUgdG8gYSBuZXdlciB2ZXJzaW9uICgnICsgY29tcGlsZXJJbmZvWzFdICsgJykuJyk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZW1wbGF0ZSh0ZW1wbGF0ZVNwZWMsIGVudikge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBpZiAoIWVudikge1xuICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ05vIGVudmlyb25tZW50IHBhc3NlZCB0byB0ZW1wbGF0ZScpO1xuICB9XG4gIGlmICghdGVtcGxhdGVTcGVjIHx8ICF0ZW1wbGF0ZVNwZWMubWFpbikge1xuICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1Vua25vd24gdGVtcGxhdGUgb2JqZWN0OiAnICsgdHlwZW9mIHRlbXBsYXRlU3BlYyk7XG4gIH1cblxuICB0ZW1wbGF0ZVNwZWMubWFpbi5kZWNvcmF0b3IgPSB0ZW1wbGF0ZVNwZWMubWFpbl9kO1xuXG4gIC8vIE5vdGU6IFVzaW5nIGVudi5WTSByZWZlcmVuY2VzIHJhdGhlciB0aGFuIGxvY2FsIHZhciByZWZlcmVuY2VzIHRocm91Z2hvdXQgdGhpcyBzZWN0aW9uIHRvIGFsbG93XG4gIC8vIGZvciBleHRlcm5hbCB1c2VycyB0byBvdmVycmlkZSB0aGVzZSBhcyBwc3VlZG8tc3VwcG9ydGVkIEFQSXMuXG4gIGVudi5WTS5jaGVja1JldmlzaW9uKHRlbXBsYXRlU3BlYy5jb21waWxlcik7XG5cbiAgZnVuY3Rpb24gaW52b2tlUGFydGlhbFdyYXBwZXIocGFydGlhbCwgY29udGV4dCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAgIGNvbnRleHQgPSBVdGlscy5leHRlbmQoe30sIGNvbnRleHQsIG9wdGlvbnMuaGFzaCk7XG4gICAgICBpZiAob3B0aW9ucy5pZHMpIHtcbiAgICAgICAgb3B0aW9ucy5pZHNbMF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHBhcnRpYWwgPSBlbnYuVk0ucmVzb2x2ZVBhcnRpYWwuY2FsbCh0aGlzLCBwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKTtcbiAgICBsZXQgcmVzdWx0ID0gZW52LlZNLmludm9rZVBhcnRpYWwuY2FsbCh0aGlzLCBwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKTtcblxuICAgIGlmIChyZXN1bHQgPT0gbnVsbCAmJiBlbnYuY29tcGlsZSkge1xuICAgICAgb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdID0gZW52LmNvbXBpbGUocGFydGlhbCwgdGVtcGxhdGVTcGVjLmNvbXBpbGVyT3B0aW9ucywgZW52KTtcbiAgICAgIHJlc3VsdCA9IG9wdGlvbnMucGFydGlhbHNbb3B0aW9ucy5uYW1lXShjb250ZXh0LCBvcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICBpZiAob3B0aW9ucy5pbmRlbnQpIHtcbiAgICAgICAgbGV0IGxpbmVzID0gcmVzdWx0LnNwbGl0KCdcXG4nKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBsaW5lcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBpZiAoIWxpbmVzW2ldICYmIGkgKyAxID09PSBsKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaW5lc1tpXSA9IG9wdGlvbnMuaW5kZW50ICsgbGluZXNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ID0gbGluZXMuam9pbignXFxuJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdUaGUgcGFydGlhbCAnICsgb3B0aW9ucy5uYW1lICsgJyBjb3VsZCBub3QgYmUgY29tcGlsZWQgd2hlbiBydW5uaW5nIGluIHJ1bnRpbWUtb25seSBtb2RlJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gSnVzdCBhZGQgd2F0ZXJcbiAgbGV0IGNvbnRhaW5lciA9IHtcbiAgICBzdHJpY3Q6IGZ1bmN0aW9uKG9iaiwgbmFtZSkge1xuICAgICAgaWYgKCEobmFtZSBpbiBvYmopKSB7XG4gICAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1wiJyArIG5hbWUgKyAnXCIgbm90IGRlZmluZWQgaW4gJyArIG9iaik7XG4gICAgICB9XG4gICAgICByZXR1cm4gb2JqW25hbWVdO1xuICAgIH0sXG4gICAgbG9va3VwOiBmdW5jdGlvbihkZXB0aHMsIG5hbWUpIHtcbiAgICAgIGNvbnN0IGxlbiA9IGRlcHRocy5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChkZXB0aHNbaV0gJiYgZGVwdGhzW2ldW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gZGVwdGhzW2ldW25hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBsYW1iZGE6IGZ1bmN0aW9uKGN1cnJlbnQsIGNvbnRleHQpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgY3VycmVudCA9PT0gJ2Z1bmN0aW9uJyA/IGN1cnJlbnQuY2FsbChjb250ZXh0KSA6IGN1cnJlbnQ7XG4gICAgfSxcblxuICAgIGVzY2FwZUV4cHJlc3Npb246IFV0aWxzLmVzY2FwZUV4cHJlc3Npb24sXG4gICAgaW52b2tlUGFydGlhbDogaW52b2tlUGFydGlhbFdyYXBwZXIsXG5cbiAgICBmbjogZnVuY3Rpb24oaSkge1xuICAgICAgbGV0IHJldCA9IHRlbXBsYXRlU3BlY1tpXTtcbiAgICAgIHJldC5kZWNvcmF0b3IgPSB0ZW1wbGF0ZVNwZWNbaSArICdfZCddO1xuICAgICAgcmV0dXJuIHJldDtcbiAgICB9LFxuXG4gICAgcHJvZ3JhbXM6IFtdLFxuICAgIHByb2dyYW06IGZ1bmN0aW9uKGksIGRhdGEsIGRlY2xhcmVkQmxvY2tQYXJhbXMsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcbiAgICAgIGxldCBwcm9ncmFtV3JhcHBlciA9IHRoaXMucHJvZ3JhbXNbaV0sXG4gICAgICAgICAgZm4gPSB0aGlzLmZuKGkpO1xuICAgICAgaWYgKGRhdGEgfHwgZGVwdGhzIHx8IGJsb2NrUGFyYW1zIHx8IGRlY2xhcmVkQmxvY2tQYXJhbXMpIHtcbiAgICAgICAgcHJvZ3JhbVdyYXBwZXIgPSB3cmFwUHJvZ3JhbSh0aGlzLCBpLCBmbiwgZGF0YSwgZGVjbGFyZWRCbG9ja1BhcmFtcywgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG4gICAgICB9IGVsc2UgaWYgKCFwcm9ncmFtV3JhcHBlcikge1xuICAgICAgICBwcm9ncmFtV3JhcHBlciA9IHRoaXMucHJvZ3JhbXNbaV0gPSB3cmFwUHJvZ3JhbSh0aGlzLCBpLCBmbik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvZ3JhbVdyYXBwZXI7XG4gICAgfSxcblxuICAgIGRhdGE6IGZ1bmN0aW9uKHZhbHVlLCBkZXB0aCkge1xuICAgICAgd2hpbGUgKHZhbHVlICYmIGRlcHRoLS0pIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5fcGFyZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgbWVyZ2U6IGZ1bmN0aW9uKHBhcmFtLCBjb21tb24pIHtcbiAgICAgIGxldCBvYmogPSBwYXJhbSB8fCBjb21tb247XG5cbiAgICAgIGlmIChwYXJhbSAmJiBjb21tb24gJiYgKHBhcmFtICE9PSBjb21tb24pKSB7XG4gICAgICAgIG9iaiA9IFV0aWxzLmV4dGVuZCh7fSwgY29tbW9uLCBwYXJhbSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvYmo7XG4gICAgfSxcbiAgICAvLyBBbiBlbXB0eSBvYmplY3QgdG8gdXNlIGFzIHJlcGxhY2VtZW50IGZvciBudWxsLWNvbnRleHRzXG4gICAgbnVsbENvbnRleHQ6IE9iamVjdC5zZWFsKHt9KSxcblxuICAgIG5vb3A6IGVudi5WTS5ub29wLFxuICAgIGNvbXBpbGVySW5mbzogdGVtcGxhdGVTcGVjLmNvbXBpbGVyXG4gIH07XG5cbiAgZnVuY3Rpb24gcmV0KGNvbnRleHQsIG9wdGlvbnMgPSB7fSkge1xuICAgIGxldCBkYXRhID0gb3B0aW9ucy5kYXRhO1xuXG4gICAgcmV0Ll9zZXR1cChvcHRpb25zKTtcbiAgICBpZiAoIW9wdGlvbnMucGFydGlhbCAmJiB0ZW1wbGF0ZVNwZWMudXNlRGF0YSkge1xuICAgICAgZGF0YSA9IGluaXREYXRhKGNvbnRleHQsIGRhdGEpO1xuICAgIH1cbiAgICBsZXQgZGVwdGhzLFxuICAgICAgICBibG9ja1BhcmFtcyA9IHRlbXBsYXRlU3BlYy51c2VCbG9ja1BhcmFtcyA/IFtdIDogdW5kZWZpbmVkO1xuICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlRGVwdGhzKSB7XG4gICAgICBpZiAob3B0aW9ucy5kZXB0aHMpIHtcbiAgICAgICAgZGVwdGhzID0gY29udGV4dCAhPSBvcHRpb25zLmRlcHRoc1swXSA/IFtjb250ZXh0XS5jb25jYXQob3B0aW9ucy5kZXB0aHMpIDogb3B0aW9ucy5kZXB0aHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZXB0aHMgPSBbY29udGV4dF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFpbihjb250ZXh0LyosIG9wdGlvbnMqLykge1xuICAgICAgcmV0dXJuICcnICsgdGVtcGxhdGVTcGVjLm1haW4oY29udGFpbmVyLCBjb250ZXh0LCBjb250YWluZXIuaGVscGVycywgY29udGFpbmVyLnBhcnRpYWxzLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcbiAgICB9XG4gICAgbWFpbiA9IGV4ZWN1dGVEZWNvcmF0b3JzKHRlbXBsYXRlU3BlYy5tYWluLCBtYWluLCBjb250YWluZXIsIG9wdGlvbnMuZGVwdGhzIHx8IFtdLCBkYXRhLCBibG9ja1BhcmFtcyk7XG4gICAgcmV0dXJuIG1haW4oY29udGV4dCwgb3B0aW9ucyk7XG4gIH1cbiAgcmV0LmlzVG9wID0gdHJ1ZTtcblxuICByZXQuX3NldHVwID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucy5wYXJ0aWFsKSB7XG4gICAgICBjb250YWluZXIuaGVscGVycyA9IGNvbnRhaW5lci5tZXJnZShvcHRpb25zLmhlbHBlcnMsIGVudi5oZWxwZXJzKTtcblxuICAgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VQYXJ0aWFsKSB7XG4gICAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IGNvbnRhaW5lci5tZXJnZShvcHRpb25zLnBhcnRpYWxzLCBlbnYucGFydGlhbHMpO1xuICAgICAgfVxuICAgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VQYXJ0aWFsIHx8IHRlbXBsYXRlU3BlYy51c2VEZWNvcmF0b3JzKSB7XG4gICAgICAgIGNvbnRhaW5lci5kZWNvcmF0b3JzID0gY29udGFpbmVyLm1lcmdlKG9wdGlvbnMuZGVjb3JhdG9ycywgZW52LmRlY29yYXRvcnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250YWluZXIuaGVscGVycyA9IG9wdGlvbnMuaGVscGVycztcbiAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IG9wdGlvbnMucGFydGlhbHM7XG4gICAgICBjb250YWluZXIuZGVjb3JhdG9ycyA9IG9wdGlvbnMuZGVjb3JhdG9ycztcbiAgICB9XG4gIH07XG5cbiAgcmV0Ll9jaGlsZCA9IGZ1bmN0aW9uKGksIGRhdGEsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZUJsb2NrUGFyYW1zICYmICFibG9ja1BhcmFtcykge1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignbXVzdCBwYXNzIGJsb2NrIHBhcmFtcycpO1xuICAgIH1cbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZURlcHRocyAmJiAhZGVwdGhzKSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdtdXN0IHBhc3MgcGFyZW50IGRlcHRocycpO1xuICAgIH1cblxuICAgIHJldHVybiB3cmFwUHJvZ3JhbShjb250YWluZXIsIGksIHRlbXBsYXRlU3BlY1tpXSwgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG4gIH07XG4gIHJldHVybiByZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3cmFwUHJvZ3JhbShjb250YWluZXIsIGksIGZuLCBkYXRhLCBkZWNsYXJlZEJsb2NrUGFyYW1zLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XG4gIGZ1bmN0aW9uIHByb2coY29udGV4dCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgbGV0IGN1cnJlbnREZXB0aHMgPSBkZXB0aHM7XG4gICAgaWYgKGRlcHRocyAmJiBjb250ZXh0ICE9IGRlcHRoc1swXSAmJiAhKGNvbnRleHQgPT09IGNvbnRhaW5lci5udWxsQ29udGV4dCAmJiBkZXB0aHNbMF0gPT09IG51bGwpKSB7XG4gICAgICBjdXJyZW50RGVwdGhzID0gW2NvbnRleHRdLmNvbmNhdChkZXB0aHMpO1xuICAgIH1cblxuICAgIHJldHVybiBmbihjb250YWluZXIsXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGNvbnRhaW5lci5oZWxwZXJzLCBjb250YWluZXIucGFydGlhbHMsXG4gICAgICAgIG9wdGlvbnMuZGF0YSB8fCBkYXRhLFxuICAgICAgICBibG9ja1BhcmFtcyAmJiBbb3B0aW9ucy5ibG9ja1BhcmFtc10uY29uY2F0KGJsb2NrUGFyYW1zKSxcbiAgICAgICAgY3VycmVudERlcHRocyk7XG4gIH1cblxuICBwcm9nID0gZXhlY3V0ZURlY29yYXRvcnMoZm4sIHByb2csIGNvbnRhaW5lciwgZGVwdGhzLCBkYXRhLCBibG9ja1BhcmFtcyk7XG5cbiAgcHJvZy5wcm9ncmFtID0gaTtcbiAgcHJvZy5kZXB0aCA9IGRlcHRocyA/IGRlcHRocy5sZW5ndGggOiAwO1xuICBwcm9nLmJsb2NrUGFyYW1zID0gZGVjbGFyZWRCbG9ja1BhcmFtcyB8fCAwO1xuICByZXR1cm4gcHJvZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVQYXJ0aWFsKHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgaWYgKCFwYXJ0aWFsKSB7XG4gICAgaWYgKG9wdGlvbnMubmFtZSA9PT0gJ0BwYXJ0aWFsLWJsb2NrJykge1xuICAgICAgcGFydGlhbCA9IG9wdGlvbnMuZGF0YVsncGFydGlhbC1ibG9jayddO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJ0aWFsID0gb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdO1xuICAgIH1cbiAgfSBlbHNlIGlmICghcGFydGlhbC5jYWxsICYmICFvcHRpb25zLm5hbWUpIHtcbiAgICAvLyBUaGlzIGlzIGEgZHluYW1pYyBwYXJ0aWFsIHRoYXQgcmV0dXJuZWQgYSBzdHJpbmdcbiAgICBvcHRpb25zLm5hbWUgPSBwYXJ0aWFsO1xuICAgIHBhcnRpYWwgPSBvcHRpb25zLnBhcnRpYWxzW3BhcnRpYWxdO1xuICB9XG4gIHJldHVybiBwYXJ0aWFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52b2tlUGFydGlhbChwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKSB7XG4gIC8vIFVzZSB0aGUgY3VycmVudCBjbG9zdXJlIGNvbnRleHQgdG8gc2F2ZSB0aGUgcGFydGlhbC1ibG9jayBpZiB0aGlzIHBhcnRpYWxcbiAgY29uc3QgY3VycmVudFBhcnRpYWxCbG9jayA9IG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXTtcbiAgb3B0aW9ucy5wYXJ0aWFsID0gdHJ1ZTtcbiAgaWYgKG9wdGlvbnMuaWRzKSB7XG4gICAgb3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoID0gb3B0aW9ucy5pZHNbMF0gfHwgb3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoO1xuICB9XG5cbiAgbGV0IHBhcnRpYWxCbG9jaztcbiAgaWYgKG9wdGlvbnMuZm4gJiYgb3B0aW9ucy5mbiAhPT0gbm9vcCkge1xuICAgIG9wdGlvbnMuZGF0YSA9IGNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgLy8gV3JhcHBlciBmdW5jdGlvbiB0byBnZXQgYWNjZXNzIHRvIGN1cnJlbnRQYXJ0aWFsQmxvY2sgZnJvbSB0aGUgY2xvc3VyZVxuICAgIGxldCBmbiA9IG9wdGlvbnMuZm47XG4gICAgcGFydGlhbEJsb2NrID0gb3B0aW9ucy5kYXRhWydwYXJ0aWFsLWJsb2NrJ10gPSBmdW5jdGlvbiBwYXJ0aWFsQmxvY2tXcmFwcGVyKGNvbnRleHQsIG9wdGlvbnMgPSB7fSkge1xuXG4gICAgICAvLyBSZXN0b3JlIHRoZSBwYXJ0aWFsLWJsb2NrIGZyb20gdGhlIGNsb3N1cmUgZm9yIHRoZSBleGVjdXRpb24gb2YgdGhlIGJsb2NrXG4gICAgICAvLyBpLmUuIHRoZSBwYXJ0IGluc2lkZSB0aGUgYmxvY2sgb2YgdGhlIHBhcnRpYWwgY2FsbC5cbiAgICAgIG9wdGlvbnMuZGF0YSA9IGNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgICBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXSA9IGN1cnJlbnRQYXJ0aWFsQmxvY2s7XG4gICAgICByZXR1cm4gZm4oY29udGV4dCwgb3B0aW9ucyk7XG4gICAgfTtcbiAgICBpZiAoZm4ucGFydGlhbHMpIHtcbiAgICAgIG9wdGlvbnMucGFydGlhbHMgPSBVdGlscy5leHRlbmQoe30sIG9wdGlvbnMucGFydGlhbHMsIGZuLnBhcnRpYWxzKTtcbiAgICB9XG4gIH1cblxuICBpZiAocGFydGlhbCA9PT0gdW5kZWZpbmVkICYmIHBhcnRpYWxCbG9jaykge1xuICAgIHBhcnRpYWwgPSBwYXJ0aWFsQmxvY2s7XG4gIH1cblxuICBpZiAocGFydGlhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignVGhlIHBhcnRpYWwgJyArIG9wdGlvbnMubmFtZSArICcgY291bGQgbm90IGJlIGZvdW5kJyk7XG4gIH0gZWxzZSBpZiAocGFydGlhbCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgcmV0dXJuIHBhcnRpYWwoY29udGV4dCwgb3B0aW9ucyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKSB7IHJldHVybiAnJzsgfVxuXG5mdW5jdGlvbiBpbml0RGF0YShjb250ZXh0LCBkYXRhKSB7XG4gIGlmICghZGF0YSB8fCAhKCdyb290JyBpbiBkYXRhKSkge1xuICAgIGRhdGEgPSBkYXRhID8gY3JlYXRlRnJhbWUoZGF0YSkgOiB7fTtcbiAgICBkYXRhLnJvb3QgPSBjb250ZXh0O1xuICB9XG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBleGVjdXRlRGVjb3JhdG9ycyhmbiwgcHJvZywgY29udGFpbmVyLCBkZXB0aHMsIGRhdGEsIGJsb2NrUGFyYW1zKSB7XG4gIGlmIChmbi5kZWNvcmF0b3IpIHtcbiAgICBsZXQgcHJvcHMgPSB7fTtcbiAgICBwcm9nID0gZm4uZGVjb3JhdG9yKHByb2csIHByb3BzLCBjb250YWluZXIsIGRlcHRocyAmJiBkZXB0aHNbMF0sIGRhdGEsIGJsb2NrUGFyYW1zLCBkZXB0aHMpO1xuICAgIFV0aWxzLmV4dGVuZChwcm9nLCBwcm9wcyk7XG4gIH1cbiAgcmV0dXJuIHByb2c7XG59XG4iXX0=


/***/ }),
/* 48 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/safe-string.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Build out our basic SafeString type


exports.__esModule = true;
function SafeString(string) {
  this.string = string;
}

SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
  return '' + this.string;
};

exports['default'] = SafeString;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3NhZmUtc3RyaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxTQUFTLFVBQVUsQ0FBQyxNQUFNLEVBQUU7QUFDMUIsTUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Q0FDdEI7O0FBRUQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsWUFBVztBQUN2RSxTQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0NBQ3pCLENBQUM7O3FCQUVhLFVBQVUiLCJmaWxlIjoic2FmZS1zdHJpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBCdWlsZCBvdXQgb3VyIGJhc2ljIFNhZmVTdHJpbmcgdHlwZVxuZnVuY3Rpb24gU2FmZVN0cmluZyhzdHJpbmcpIHtcbiAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG59XG5cblNhZmVTdHJpbmcucHJvdG90eXBlLnRvU3RyaW5nID0gU2FmZVN0cmluZy5wcm90b3R5cGUudG9IVE1MID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAnJyArIHRoaXMuc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2FmZVN0cmluZztcbiJdfQ==


/***/ }),
/* 49 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************************!*\
  !*** ./app/documents/api/account-credentials-example.md ***!
  \**********************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-object\">Example Object</h4>\n<pre><code>{\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/accounts/&lt;account-id&gt;/account-credentials/&lt;id&gt;&quot;\n    }\n  },\n  &quot;macAlgorithm&quot;: &quot;HMAC-SHA1&quot;,\n  &quot;macKey&quot;: &quot;&lt;macKey&gt;&quot;,\n  &quot;macKeyIdentifier&quot;: &quot;&lt;macKeyIdentifier&gt;&quot;,\n  &quot;type&quot;: &quot;accountCredential&quot;\n}\n</code></pre>";

/***/ }),
/* 50 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./app/documents/api/account-credentials.md ***!
  \**************************************************/
/***/ (function(module, exports) {

module.exports = "<h2 id=\"account-credentials\">Account Credentials</h2>\n<p>Account credentials authenticate you to perform actions on your developer account. A set of account credentials is created automatically when you create your developer account. Account credentials are the same for both sandbox and live mode. They are available at <code>/accounts/&lt;account-id&gt;/account-credentials</code> and are used to sign requests to <code>/accounts</code> and <code>/apps</code>.</p>\n<h4 id=\"properties\">Properties</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>macAlgorithm</td>\n            <td>The MAC algorithm describes the algorithm used to create the signature.</td>\n        </tr>\n        <tr>\n            <td>macKey</td>\n            <td>The MAC key is the shared secret key. It should never be shared with anyone or transmitted in any request. Keep this key secure as you would any private key.</td>\n        </tr>\n        <tr>\n            <td>macKeyIdentifier</td>\n            <td>The MAC key identifier uniquely identifies the MAC key. The MAC key identifier is sent with each request to tell the server which MAC key was used to sign the request.</td>\n        </td>\n        <tr>\n            <td>type</td>\n            <td>The type of resource.</td>\n        </tr>\n    </tbody>\n</table>\n\n\n\n\n\n\n\n\n\n\n";

/***/ }),
/* 51 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************************!*\
  !*** ./app/documents/api/account-permissions-example.md ***!
  \**********************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-object\">Example Object</h4>\n<pre><code>{\n  &quot;createdAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;/account-permissions&quot;\n    }\n  },\n  &quot;support&quot;: [\n    &quot;https://lcp.points.com/v1/accounts/&lt;account-id1&gt;&quot;,\n    &quot;https://lcp.points.com/v1/accounts/&lt;account-id2&gt;&quot;\n  ],\n  &quot;type&quot;: &quot;accountPermission&quot;,\n  &quot;updatedAt&quot;: &quot;2014-05-08T17:55:34.511304Z&quot;\n}\n</code></pre>";

/***/ }),
/* 52 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./app/documents/api/account-permissions.md ***!
  \**************************************************/
/***/ (function(module, exports) {

module.exports = "<h2 id=\"account-permissions\">Account Permissions</h2>\n<p>Account permissions allow you to grant other accounts access to your application.</p>\n<h4 id=\"properties\">Properties</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>createdAt</td>\n            <td>The <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601</a> time when the resource was created.</td>\n        </tr>\n        <tr>\n            <td>support</td>\n            <td>A list of <a href=\"#accounts\">accounts</a> that have permission to support the application. Accounts with support permissions have read-only access to the application and all of the application’s transactions.</td>\n        </tr>\n        <tr>\n            <td>type</td>\n            <td>The type of resource.</td>\n        </tr>\n        <tr>\n            <td>updatedAt</td>\n            <td>The <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601</a> time when the resource was last updated.</td>\n        </tr>\n    </tbody>\n</table>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n";

/***/ }),
/* 53 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************!*\
  !*** ./app/documents/api/accounts-example.md ***!
  \***********************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-object\">Example Object</h4>\n<pre><code>{\n  &quot;accountCredentials&quot;: [\n    {\n      &quot;links&quot;: {\n        &quot;self&quot;: {\n          &quot;href&quot;: &quot;https://lcp.points.com/v1/accounts/&lt;id&gt;/account-credentials/&lt;ac-id&gt;&quot;\n        }\n      },\n      &quot;macAlgorithm&quot;: &quot;HMAC-SHA1&quot;,\n      &quot;macKey&quot;: &quot;&lt;macKey&gt;&quot;,\n      &quot;macKeyIdentifier&quot;: &quot;&lt;macKeyIdentifier&gt;&quot;\n    }\n  ],\n  &quot;createdAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n  &quot;email&quot;: &quot;youremail@yourcompany.com&quot;,\n  &quot;firstName&quot;: &quot;First Name&quot;,\n  &quot;lastName&quot;: &quot;Last Name&quot;,\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/accounts/&lt;id&gt;&quot;\n    },\n    &quot;friendly&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/accounts/youremail%40yourcompany.com&quot;\n    }\n  },\n  &quot;organizationName&quot;: &quot;Company&quot;,\n  &quot;phone&quot;: &quot;416-555-1234&quot;,\n  &quot;roles&quot;: [\n    {\n      &quot;role&quot;: &quot;https://lcp.points.com/v1/roles/application-developer&quot;\n    },\n    {\n      &quot;role&quot;: &quot;https://lcp.points.com/v1/roles/report-viewer&quot;,\n      &quot;loyaltyProgram&quot;: &quot;https://lcp.points.com/v1/lps/&lt;lp-id&gt;&quot;\n    }\n  ],\n  &quot;timeZone&quot;: &quot;America/Toronto&quot;,\n  &quot;type&quot;: &quot;account&quot;,\n  &quot;updatedAt&quot;: &quot;2014-05-08T17:55:34.511304Z&quot;\n}\n</code></pre>";

/***/ }),
/* 54 */
/* unknown exports provided */
/* all exports used */
/*!***************************************!*\
  !*** ./app/documents/api/accounts.md ***!
  \***************************************/
/***/ (function(module, exports) {

module.exports = "<h2 id=\"accounts\">Accounts</h2>\n<p>An account is your own personal developer account on the LCP system. It is tied to your email address and gives you access credentials to the LCP. It also enables you to create one or more applications that interface with the LCP. Create an account in the <a href=\"https://admin.lcp.points.com/\">LCP Admin</a>.</p>\n<h4 id=\"properties\">Properties</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>accountCredentials</td>\n            <td>An array of <a href=\"#account-credentials\">account credential</a> objects that can be used to access this account.</td>\n        </tr>\n        <tr>\n            <td>createdAt</td>\n            <td>The <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601</a> time when the resource was created.</td>\n        </tr>\n        <tr>\n            <td>email</td>\n            <td>The email address of the account owner.</td>\n        </tr>\n        <tr>\n            <td>firstName</td>\n            <td>The first name of the account owner.</td>\n        </tr>\n        <tr>\n            <td>lastName</td>\n            <td>The last name of the account owner.</td>\n        </tr>\n        <tr>\n            <td>organizationName</td>\n            <td>The organization of the account owner.</td>\n        </tr>\n        <tr>\n            <td>phone</td>\n            <td>The phone number of the account owner.</td>\n        </tr>\n        <tr>\n            <td>roles</td>\n            <td>List of roles the account belongs to.</td>\n        </tr>\n        <tr>\n            <td>timeZone</td>\n            <td>The time zone of the account owner.</td>\n        </tr>\n        <tr>\n            <td>type</td>\n            <td>The type of resource.</td>\n        </tr>\n        <tr>\n            <td>updatedAt</td>\n            <td>The <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601</a> time when the resource was last updated.</td>\n        </tr>\n    </tbody>\n</table>\n\n\n\n\n\n\n\n\n\n\n\n";

/***/ }),
/* 55 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************!*\
  !*** ./app/documents/api/apps-example.md ***!
  \*******************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-object\">Example Object</h4>\n<pre><code>{\n  &quot;createdAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n  &quot;description&quot;: &quot;&lt;description&gt;&quot;,\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;id&gt;&quot;\n    },\n    &quot;reports&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;id&gt;/reports/&quot;\n    }\n  },\n  &quot;liveCredentials&quot;: [],\n  &quot;name&quot;: &quot;&lt;name&gt;&quot;,\n  &quot;sandboxCredentials&quot;: [\n    &quot;https://lcp.points.com/v1/apps/&lt;id&gt;/sandbox-credentials/&lt;sc-id&gt;&quot;\n  ],\n  &quot;type&quot;: &quot;app&quot;,\n  &quot;updatedAt&quot;: &quot;2014-05-08T17:55:34.511304Z&quot;\n}\n</code></pre>";

/***/ }),
/* 56 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./app/documents/api/apps.md ***!
  \***********************************/
/***/ (function(module, exports) {

module.exports = "<h2 id=\"apps\">Apps</h2>\n<p>Apps allow you to communicate with one or more loyalty programs. Apps are stored under the <code>/apps</code> endpoint. Use your account credentials to create one or more apps and to access your existing apps. Each app has its own set of business rules that determine which loyalty programs it can interact with, what actions it can perform, and how much each action costs.</p>\n<h4 id=\"properties\">Properties</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>createdAt</td>\n            <td>The <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601</a> time when the resource was created.</td>\n        </tr>\n        <tr>\n            <td>description</td>\n            <td>The description of the app.</td>\n        </tr>\n        <tr>\n            <td>liveCredentials</td>\n            <td>An array of <a href=\"#live-credentials\">live credential</a> objects that the app can use to access the live environment.</td>\n        </tr>\n        <tr>\n            <td>name</td>\n            <td>The name of the app.</td>\n        </tr>\n        <tr>\n            <td>sandboxCredentials</td>\n            <td>An array of <a href=\"#sandbox-credentials\">sandbox credential</a> objects that the app can use to access the sandbox environment.</td>\n        </tr>\n        <tr>\n            <td>type</td>\n            <td>The type of resource.</td>\n        </tr>\n        <tr>\n            <td>updatedAt</td>\n            <td>The <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601</a> time when the resource was last updated.</td>\n        </tr>\n    </tbody>\n</table>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n";

/***/ }),
/* 57 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************!*\
  !*** ./app/documents/api/create-a-credit-example.md ***!
  \******************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>POST https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/credits/\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n{\n  &quot;amount&quot;: 2000,\n  &quot;memberValidation&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/mvs/&lt;mv-id&gt;&quot;\n}\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>201 CREATED\nlocation: https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/credits/&lt;id&gt;\n{\n  &quot;amount&quot;: 2000,\n  &quot;application&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;&quot;,\n  &quot;createdAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/credits/&lt;id&gt;&quot;\n    }\n  },\n  &quot;loyaltyProgram&quot;: &quot;https://lcp.points.com/v1/lps/&lt;lp-id&gt;&quot;,\n  &quot;memberValidation&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/mvs/&lt;mv-id&gt;&quot;,\n  &quot;order&quot;: &quot;https://sandbox.lcp.points.com/v1/orders/&lt;order-id&gt;&quot;,\n  &quot;status&quot;: &quot;success&quot;,\n  &quot;transactionId&quot;: &quot;15786560&quot;,\n  &quot;type&quot;: &quot;credit&quot;,\n  &quot;updatedAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;\n}\n</code></pre>";

/***/ }),
/* 58 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************!*\
  !*** ./app/documents/api/create-a-credit.md ***!
  \**********************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"create-a-credit\">Create a Credit</h3>\n<p>Create a credit object to attempt to add points to a loyalty program member&#39;s account. A credit first requires a successful <a href=\"#member-validations\">member validation</a> that has not been used previously with another transaction. To create a new credit, POST a link to the member validation and the amount to add to the member&#39;s account under the credits endpoint for the loyalty program. Requests must be signed with your app&#39;s credentials.</p>\n<p>In sandbox mode, the LCP never communicates with the loyalty program. All operations are simulated. The LCP simulates different success and failure responses depending on the parameters sent when creating a credit.</p>\n<p>Credits can happen in real-time or in batch mode depending on the loyalty program. For real-time credits, the credit will be immediately executed by the loyalty program and the credit status will be either success or failure. For batch mode, the credit will be queued with other transactions and sent to the loyalty program in a batch job typically once a day. Batch credits will initially have a status of pending. Once the loyalty program responds, the credit will be updated to success or failure.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>lp-id</td>\n            <td>The identifier of the <a href=\"#loyalty-programs\">loyalty program</a> (LP).</td>\n        </tr>\n        <tr>\n            <td>amount</td>\n            <td><p>The number of points to add to the member&#39;s account. Must be a positive integer.</p>\n                <p><strong>Sandbox mode</strong>: Set &quot;amount&quot; to these values to simulate different values for &quot;status&quot; in the response:\n                    <ul>\n                        <li>92: &quot;systemError&quot;</li>\n                        <li>93: &quot;failure&quot;</li>\n                        <li>94: &quot;pending&quot;</li>\n                        <li>95: &quot;pending&quot; that changes to &quot;success&quot;</li>\n                        <li>96: &quot;pending&quot; that changes to &quot;failure&quot;</li>\n                        <li>97: &quot;systemError&quot;</li>\n                        <li>98: &quot;failure&quot;</li>\n                        <li>99: &quot;failure&quot;</li>\n                        <li>Other: &quot;success&quot;</li>\n                    </ul>\n                </p>\n            </td>\n        </tr>\n        <tr>\n            <td>creditType</td>\n            <td>Indicates whether the credit is for base or bonus points or both (optional). Can be one of &quot;base&quot;, &quot;bonus&quot; or &quot;combinedBaseBonus&quot;.</td>\n        </tr>\n        <tr>\n            <td>memberValidation</td>\n            <td>Link to a member validation that identifies the member&#39;s account to be credited. The member validation cannot have been used with another transaction.</td>\n        </tr>\n        <tr>\n            <td>pic</td>\n            <td>Product Identification Code (optional). Only set this field if directed to by the loyalty program.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>The credit object if it was created successfully. Returns an <a href=\"./?doc=reference-manual#errors\">error</a> if the member validation is not valid.</p>\n";

/***/ }),
/* 59 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************************!*\
  !*** ./app/documents/api/create-a-debit-example.md ***!
  \*****************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>POST https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/debits/\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n{\n  &quot;amount&quot;: 2000,\n  &quot;memberValidation&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/mvs/&lt;mv-id&gt;&quot;\n}\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>201 CREATED\nlocation: https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/debits/&lt;id&gt;\n{\n  &quot;amount&quot;: 2000,\n  &quot;application&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;&quot;,\n  &quot;createdAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/debits/&lt;id&gt;&quot;\n    }\n  },\n  &quot;loyaltyProgram&quot;: &quot;https://lcp.points.com/v1/lps/&lt;lp-id&gt;&quot;,\n  &quot;memberValidation&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/mvs/&lt;mv-id&gt;&quot;,\n  &quot;order&quot;: &quot;https://sandbox.lcp.points.com/v1/orders/&lt;order-id&gt;&quot;,\n  &quot;status&quot;: &quot;success&quot;,\n  &quot;transactionId&quot;: &quot;15786561&quot;,\n  &quot;type&quot;: &quot;debit&quot;,\n  &quot;updatedAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;\n}\n</code></pre>";

/***/ }),
/* 60 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************!*\
  !*** ./app/documents/api/create-a-debit.md ***!
  \*********************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"create-a-debit\">Create a Debit</h3>\n<p>Create a debit object to attempt to deduct points from a loyalty program member&#39;s account. A debit first requires a successful <a href=\"#member-validations\">member validation</a> that has not been used previously with another transaction. To create a new debit, POST a link to the member validation and the amount to deduct from the member&#39;s account under the debits endpoint for the loyalty program. Requests must be signed with your app&#39;s credentials.</p>\n<p>In sandbox mode, the LCP never communicates with the loyalty program. All operations are simulated. The LCP simulates different success and failure responses depending on the parameters sent when creating a debit.</p>\n<p>Debits can happen in real-time or in batch mode depending on the loyalty program. For real-time debits, the debit will be immediately executed by the loyalty program and the debit status will be either success or failure. For batch mode, the debit will be queued with other transactions and sent to the loyalty program in a batch job typically once a day. Batch debits will initially have a status of pending. Once the loyalty program responds, the debit will be updated to success or failure.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>lp-id</td>\n            <td>The identifier of the <a href=\"#loyalty-programs\">loyalty program</a> (LP).</td>\n        </tr>\n        <tr>\n            <td>amount</td>\n            <td><p>The number of points to deduct from the member&#39;s account. Must be a positive integer less than the member&#39;s balance obtained from the member validation.</p>\n                <p><strong>Sandbox mode</strong>: Set &quot;amount&quot; to these values to simulate different values for &quot;status&quot; in the response:\n                    <ul>\n                        <li>91: &quot;systemError&quot;</li>\n                        <li>94: &quot;pending&quot;</li>\n                        <li>95: &quot;pending&quot; that changes to &quot;success&quot;</li>\n                        <li>96: &quot;pending&quot; that changes to &quot;failure&quot;</li>\n                        <li>97: &quot;systemError&quot;</li>\n                        <li>98: &quot;systemError&quot;</li>\n                        <li>99: &quot;failure&quot;</li>\n                        <li>Other: &quot;success&quot;</li>\n                    </ul>\n                </p>\n            </td>\n        </tr>\n        <tr>\n            <td>memberValidation</td>\n            <td>Link to a member validation that identifies the member&#39;s account to be debited. The member validation cannot have been used with another transaction.</td>\n        </tr>\n        <tr>\n            <td>pic</td>\n            <td>Product Identification Code (optional). Only set this field if directed to by the loyalty program.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>The debit object if it was created successfully. Returns an <a href=\"./?doc=reference-manual#errors\">error</a> if the member validation is not valid or if the amount is greater than the balance in the member validation.</p>\n";

/***/ }),
/* 61 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************************!*\
  !*** ./app/documents/api/create-a-mv-delegate-example.md ***!
  \***********************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>POST https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/mv-delegates/\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n{\n  &quot;application&quot;: &quot;https://sandbox.lcp.points.com/v1/apps/&lt;app-id&gt;&quot;,\n  &quot;memberValidation&quot;: {\n    &quot;identifyingFactors&quot;: {\n      &quot;firstName&quot;: &quot;John&quot;,\n      &quot;lastName&quot;: &quot;Doe&quot;,\n      &quot;memberId&quot;: &quot;1234&quot;\n    },\n    &quot;authenticatingFactors&quot;: {\n      &quot;password&quot;: &quot;ABCD&quot;\n    }\n  },\n  &quot;memberValidationResponse&quot;: {\n    &quot;balance&quot;: 2000\n  }\n}\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>201 CREATED\nlocation: https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/mv-delegates/&lt;id&gt;\n{\n  &quot;application&quot;: &quot;https://sandbox.lcp.points.com/v1/apps/&lt;app-id&gt;&quot;,\n  &quot;createdAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n  &quot;memberValidation&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/mvs/&lt;mv-id&gt;&quot;,\n  &quot;links&quot;: {\n    &quot;self&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/mv-delegates/&lt;id&gt;&quot;\n  },\n  &quot;type&quot;: &quot;memberValidationDelegate&quot;,\n  &quot;updatedAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;\n}\n</code></pre>";

/***/ }),
/* 62 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ./app/documents/api/create-a-mv-delegate.md ***!
  \***************************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"create-an-mv-delegate\">Create an MV Delegate</h3>\n<p>A loyalty program creates an MV delegate to pass an authenticated user to another application. To create an MV delegate, provide all the member information that is normally included in an MV request and response as well as the application that should have access to the MV. As a side effect, the LCP creates an MV using the provided member information and gives the other application read access to the MV. The LCP creates the MV without contacting the loyalty program since the creator of the MV delegate is considered a trusted source of member information. Only loyalty program applications can create MV delegates.</p>\n<p>The MV delegate response contains a link to the created MV. The loyalty program should redirect the user to the other application and pass the MV link to the other application. The other application then retrieves the MV and the member information. Using this method, the application does not have to collect member credentials to create its own MV. Instead, the application can immediately use the MV for debits and credits since the loyalty program has already validated the member’s credentials.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>lp-id</td>\n            <td>The identifier of the <a href=\"#loyalty-programs\">loyalty program</a> (LP) making the request.</td>\n        </tr>\n        <tr>\n            <td>application</td>\n            <td>The application that will have permission to access the member validation.</td>\n        </tr>\n        <tr>\n            <td>identifyingFactors</td>\n            <td>Dictionary of fields that identify the loyalty program member (e.g., firstName, lastName, memberId). Varies based on the LP’s <a href=\"#mv-request-schema\">MV request schema</a>.</td>\n        </tr>\n        <tr>\n            <td>authenticatingFactors</td>\n            <td>Dictionary of fields that authenticate the loyalty program member (e.g., password, pin). These fields are not displayed. Varies based on the LP’s <a href=\"#mv-request-schema\">MV request schema</a>.</td>\n        </tr>\n        <tr>\n            <td>balance</td>\n            <td>The balance in the loyalty program member’s account.</td>\n        </tr>\n        <tr>\n            <td>order</td>\n            <td>Link to the order that this member validation belongs to (optional).</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>The MV delegate object if it was created successfully. Returns an <a href=\"./?doc=reference-manual#errors\">error</a> if any of the required MV request and response fields for the given LP are not provided.</p>\n";

/***/ }),
/* 63 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./app/documents/api/create-a-mv-example.md ***!
  \**************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>POST https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/mvs/\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n{\n  &quot;identifyingFactors&quot;: {\n    &quot;firstName&quot;: &quot;John&quot;,\n    &quot;lastName&quot;: &quot;Doe&quot;,\n    &quot;memberId&quot;: &quot;1234&quot;\n  },\n  &quot;authenticatingFactors&quot;: {\n    &quot;password&quot;: &quot;ABCD&quot;\n  }\n}\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>201 CREATED\nlocation: https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/mvs/&lt;id&gt;\n{\n  &quot;application&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;&quot;,\n  &quot;authenticatingFactors&quot;: {\n    &quot;password&quot;: &quot;*****&quot;\n  },\n  &quot;balance&quot;: 2000,\n  &quot;createdAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n  &quot;identifyingFactors&quot;: {\n    &quot;firstName&quot;: &quot;John&quot;,\n    &quot;lastName&quot;: &quot;Doe&quot;,\n    &quot;memberId&quot;: &quot;1234&quot;\n  },\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/mvs/&lt;id&gt;&quot;\n    }\n  },\n  &quot;loyaltyProgram&quot;: &quot;https://lcp.points.com/v1/lps/&lt;lp-id&gt;&quot;,\n  &quot;status&quot;: &quot;success&quot;,\n  &quot;type&quot;: &quot;memberValidation&quot;,\n  &quot;updatedAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;\n}\n</code></pre>";

/***/ }),
/* 64 */
/* unknown exports provided */
/* all exports used */
/*!******************************************!*\
  !*** ./app/documents/api/create-a-mv.md ***!
  \******************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"create-an-mv\">Create an MV</h3>\n<p>To create a new MV, POST the loyalty program member&#39;s account details to the loyalty program&#39;s MV service and sign the request with your app credentials. In sandbox mode, the LCP never communicates with the loyalty program. All operations are simulated. The LCP simulates different success and failure responses depending on the parameters sent when creating a MV. See <a href=\"#sandbox-mvs\">Sandbox MVs</a> for details.</p>\n<p>Authenticating a member requires a specific set of fields, defined by the specific loyalty program you wish to communicate with. For example, some loyalty programs may require a member ID and password, while others require a member ID, last name, and password. To determine which fields are required for a particular loyalty program, get its <a href=\"#mv-request-schema\">MV request schema</a>.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>lp-id</td>\n            <td>The identifier of the <a href=\"#loyalty-programs\">loyalty program</a> (LP).</td>\n        </tr>\n        <tr>\n            <td>identifyingFactors</td>\n            <td>Dictionary of fields that identify the loyalty program member (e.g., firstName, lastName, memberId). Varies based on the LP’s <a href=\"#mv-request-schema\">MV request schema</a>.</td>\n        </tr>\n        <tr>\n            <td>authenticatingFactors</td>\n            <td>Dictionary of fields that authenticate the loyalty program member (e.g., password, pin). These fields are not displayed. Varies based on the LP’s <a href=\"#mv-request-schema\">MV request schema</a>.</td>\n        </tr>\n        <tr>\n            <td>order</td>\n            <td>Link to the order that this member validation belongs to (optional).</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>The MV object if it was created successfully. Returns an <a href=\"./?doc=reference-manual#errors\">error</a> if the required credentials are not provided or if the member could not be validated for the given loyalty program.</p>\n<table>\n    <thead>\n        <tr>\n            <th>HTTP Status Code</th>\n            <th>Error Code</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>422 Unprocessable Entity</td>\n            <td>INELIGIBLE</td>\n            <td>The member is not eligible to perform this transaction.</td>\n        </tr>\n        <tr>\n            <td>422 Unprocessable Entity</td>\n            <td>MAXIMUM_ATTEMPTS_EXCEEDED</td>\n            <td>The maximum number of incorrect MV attempts has been exceeded for this user.</td>\n        </tr>\n        <tr>\n            <td>422 Unprocessable Entity</td>\n            <td>UNKNOWN_MEMBER</td>\n            <td>The loyalty program couldn&#39;t find a member with the given credentials.</td>\n        </tr>\n        <tr>\n            <td>502 Bad Gateway</td>\n            <td>INVALID_UPSTREAM_RESPONSE</td>\n            <td>An external upstream service issued an invalid response.</td>\n        </tr>\n    </tbody>\n</table>\n\n\n\n\n\n\n\n\n\n\n";

/***/ }),
/* 65 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************!*\
  !*** ./app/documents/api/create-a-report-example.md ***!
  \******************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>POST https://lcp.points.com/v1/apps/&lt;app-id&gt;/reports/\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n{\n  &quot;description&quot;: &quot;Report on all transactions performed by my app&quot;,\n  &quot;name&quot;: &quot;My App’s Transaction Report&quot;,\n  &quot;url&quot;: &quot;https://myapp.com/reports/report-name&quot;\n}\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>201 CREATED\nlocation: https://lcp.points.com/v1/apps/&lt;app-id&gt;/reports/&lt;id&gt;\n{\n  &quot;createdAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n  &quot;description&quot;: &quot;Report on all transactions performed by my app&quot;,\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;/reports/&lt;id&gt;&quot;\n    },\n    &quot;instances&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;/reports/&lt;id&gt;/instances/&quot;\n    }\n  },\n  &quot;name&quot;: &quot;My App’s Transaction Report&quot;,\n  &quot;type&quot;: &quot;report&quot;,\n  &quot;updatedAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n  &quot;url&quot;: &quot;https://myapp.com/reports/report-name&quot;\n}\n</code></pre>";

/***/ }),
/* 66 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************************!*\
  !*** ./app/documents/api/create-a-report-instance-example.md ***!
  \***************************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>POST https://lcp.points.com/v1/apps/&lt;app-id&gt;/reports/&lt;report-id&gt;/instances/\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n{\n}\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>201 CREATED\nlocation: https://lcp.points.com/v1/apps/&lt;app-id&gt;/reports/&lt;report-id&gt;/instances/&lt;id&gt;\n{\n  &quot;contentType&quot;: &quot;application/json&quot;,\n  &quot;createdAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;/reports/&lt;report-id&gt;/instances/&lt;id&gt;&quot;\n    },\n    &quot;data&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;/reports/&lt;report-id&gt;/instances/&lt;id&gt;/data&quot;\n    },\n    &quot;report&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;/reports/&lt;report-id&gt;&quot;\n    }\n  },\n  &quot;status&quot;: &quot;success&quot;,\n  &quot;type&quot;: &quot;reportInstance&quot;,\n  &quot;updatedAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;\n}\n</code></pre>";

/***/ }),
/* 67 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************************!*\
  !*** ./app/documents/api/create-a-report-instance.md ***!
  \*******************************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"create-a-report-instance\">Create a Report Instance</h3>\n<p>Create a report instance to generate a copy of a report. Creating a report instance triggers the LCP to perform a GET on the URL provided in the report definition. If the GET is successful, the response body is the data for the report. Currently, the LCP only supports data with a Content-Type of application/json. The LCP keeps a copy of the data so the report instance can be retrieved later.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>app-id</td>\n            <td>The identifier of the application.</td>\n        </tr>\n        <tr>\n            <td>report-id</td>\n            <td>The identifier of the report.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>The report instance if it was created successfully. Returns an <a href=\"./?doc=reference-manual#errors\">error</a> if the application or report does not exist. If the report instance was created, the status field indicates the progress in retrieving the report data from the application URL. A status of “success” indicates the report data is ready. A status is “failure” means one of the following:</p>\n<ul>\n  <li>The LCP could not connect to the URL provided in the report definition</li>\n  <li>The URL did not respond within 30 seconds</li>\n  <li>The URL did not return a 200 response</li>\n  <li>The Content-Type of the response was not application/json</li>\n</ul>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n";

/***/ }),
/* 68 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************!*\
  !*** ./app/documents/api/create-a-report.md ***!
  \**********************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"create-a-report\">Create a Report</h3>\n<p>Applications can publish reports that can be accessed by other users of the LCP. Create a report to register a new report with the LCP. Provide a name and description for your report as well as a URL where the LCP can get the report data when it is requested by a user.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>app-id</td>\n            <td>The identifier of the application.</td>\n        </tr>\n        <tr>\n            <td>description</td>\n            <td>The description of the report (optional).</td>\n        </tr>\n        <tr>\n            <td>name</td>\n            <td>The name of the report.</td>\n        </tr>\n        <tr>\n            <td>url</td>\n            <td>The URL to access the report. Must be HTTPS.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>The report object if it was created successfully. Returns an <a href=\"./?doc=reference-manual#errors\">error</a> if the name is not provided or if the URL is not a valid HTTPS URL.</p>\n";

/***/ }),
/* 69 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************************************!*\
  !*** ./app/documents/api/create-account-credentials-example.md ***!
  \*****************************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>POST https://lcp.points.com/v1/accounts/&lt;account-id&gt;/account-credentials/\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n{\n}\n</code></pre><h4 id=\"example-request\">Example Request</h4>\n<pre><code>201 CREATED\nlocation: https://lcp.points.com/v1/accounts/&lt;account-id&gt;/account-credentials/&lt;id&gt;\n{\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/accounts/&lt;account-id&gt;/account-credentials/&lt;id&gt;&quot;\n    }\n  },\n  &quot;macAlgorithm&quot;: &quot;HMAC-SHA1&quot;,\n  &quot;macKey&quot;: &quot;&lt;macKey&gt;&quot;,\n  &quot;macKeyIdentifier&quot;: &quot;&lt;macKeyIdentifier&gt;&quot;,\n  &quot;type&quot;: &quot;accountCredential&quot;\n}\n</code></pre>";

/***/ }),
/* 70 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************************!*\
  !*** ./app/documents/api/create-account-credentials.md ***!
  \*********************************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"create-account-credentials\">Create Account Credentials</h3>\n<p>Account credentials are automatically created when you create your account. However, you can create additional credentials if you want another set or if your first set has been compromised. You must use your first set of credentials to sign the request.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>account-id</td>\n            <td>The identifier of the account to add credentials to.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>The account credentials object if it was created successfully. Returns an <a href=\"./?doc=reference-manual#errors\">error</a> if you are not authorized to create new account credentials on this account.</p>\n";

/***/ }),
/* 71 */
/* unknown exports provided */
/* all exports used */
/*!****************************************************!*\
  !*** ./app/documents/api/create-an-app-example.md ***!
  \****************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>POST https://lcp.points.com/v1/apps/\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n{\n  &quot;name&quot;: &quot;My App&quot;,\n  &quot;description&quot;: &quot;Description of my app&quot;\n}\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>201 CREATED\nlocation: https://lcp.points.com/v1/apps/&lt;id&gt;\n{\n  &quot;createdAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n  &quot;description&quot;: &quot;Description of my app&quot;,\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;id&gt;&quot;\n    },\n    &quot;reports&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;id&gt;/reports/&quot;\n    }\n  },\n  &quot;liveCredentials&quot;: [],\n  &quot;name&quot;: &quot;My App&quot;,\n  &quot;sandboxCredentials&quot;: [\n    &quot;https://lcp.points.com/v1/apps/&lt;id&gt;/sandbox-credentials/&lt;sc-id&gt;&quot;\n  ],\n  &quot;type&quot;: &quot;app&quot;,\n  &quot;updatedAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;\n}\n</code></pre>";

/***/ }),
/* 72 */
/* unknown exports provided */
/* all exports used */
/*!********************************************!*\
  !*** ./app/documents/api/create-an-app.md ***!
  \********************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"create-an-app\">Create an App</h3>\n<p>To create a new application, POST the application name and description to <code>/apps</code> and sign the request with your account credentials. Sandbox credentials are created automatically when you create an app. Your app can use these credentials to access the sandbox environment. Credentials to access the live environment can only be created by Points.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>name</td>\n            <td>The name of your app (required). Provide a short name for your app, up to 50 characters.</td>\n        </tr>\n        <tr>\n            <td>description</td>\n            <td>A description for your app (required). Provide a detailed description of your app, up to 4000 characters.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>The app object if it was created successfully. Returns an <a href=\"./?doc=reference-manual#errors\">error</a> if the name or description is not provided.</p>\n";

/***/ }),
/* 73 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************!*\
  !*** ./app/documents/api/create-an-order-example.md ***!
  \******************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>POST https://sandbox.lcp.points.com/v1/orders/\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n{\n  &quot;data&quot;: {\n    &quot;clientIpAddress&quot;: &quot;127.0.0.1&quot;, \n    &quot;clientUserAgent&quot;: &quot;Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:42.0) Gecko/20100101 Firefox/42.0&quot;, \n    &quot;language&quot;: &quot;en-US&quot;, \n    &quot;orderDetails&quot;: {\n      &quot;basePoints&quot;: 2000, \n      &quot;loyaltyProgram&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;&quot;\n    }, \n    &quot;user&quot;: {\n      &quot;email&quot;: &quot;jdoe@example.com&quot;,\n      &quot;firstName&quot;: &quot;John&quot;, \n      &quot;lastName&quot;: &quot;Doe&quot;, \n      &quot;memberId&quot;: &quot;1234&quot;, \n      &quot;memberValidation&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/mvs/&lt;mv-id&gt;&quot;\n    }\n  },\n  &quot;orderType&quot;: &quot;EXCHANGE_CREDIT&quot;\n}\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>201 CREATED\nlocation: https://sandbox.lcp.points.com/v1/orders/&lt;id&gt;\n{\n  &quot;application&quot;: &quot;https://sandbox.lcp.points.com/v1/apps/&lt;app-id&gt;&quot;,\n  &quot;confirmationNumber&quot;: &quot;3902-2266-8404-8538-1721&quot;,\n  &quot;createdAt&quot;: &quot;2014-02-26T17:47:00.000000Z&quot;,\n  &quot;data&quot;: {\n    &quot;clientIpAddress&quot;: &quot;127.0.0.1&quot;, \n    &quot;clientUserAgent&quot;: &quot;Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:42.0) Gecko/20100101 Firefox/42.0&quot;, \n    &quot;language&quot;: &quot;en-US&quot;, \n    &quot;orderDetails&quot;: {\n      &quot;basePoints&quot;: 2000, \n      &quot;loyaltyProgram&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;&quot;\n    }, \n    &quot;user&quot;: {\n      &quot;email&quot;: &quot;jdoe@example.com&quot;,\n      &quot;firstName&quot;: &quot;John&quot;, \n      &quot;lastName&quot;: &quot;Doe&quot;, \n      &quot;memberId&quot;: &quot;1234&quot;, \n      &quot;memberValidation&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/mvs/&lt;mv-id&gt;&quot;\n    }\n  },\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://sandbox.lcp.points.com/v1/orders/&lt;id&gt;&quot;\n    }\n  },\n  &quot;orderType&quot;: &quot;EXCHANGE_CREDIT&quot;,\n  &quot;status&quot;: &quot;initial&quot;,\n  &quot;type&quot;: &quot;order&quot;,\n  &quot;updatedAt&quot;: &quot;2014-02-26T17:47:00.000000Z&quot;,\n  &quot;updates&quot;: []\n}\n</code></pre>";

/***/ }),
/* 74 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************!*\
  !*** ./app/documents/api/create-an-order.md ***!
  \**********************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"create-an-order\">Create an Order</h3>\n<p>Create an order to store details of a transaction. Requests must be signed with app credentials (sandbox or live).</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>data.clientIpAddress</td>\n            <td>User’s IP address. Between 7 and 40 characters.</td>\n        </tr>\n        <tr>\n            <td>data.clientUserAgent</td>\n            <td>Header provided by user’s browser (user agent). Maximum length of 300 characters.</td>\n        </tr>\n        <tr>\n            <td>data.language</td>\n            <td>The user’s preferred language. Must be an <a href=\"http://en.wikipedia.org/wiki/IETF_language_tag\">IETF language tag</a>, which includes a two letter language code and an optional country code, hyphen separated. Language code is lowercase, country code is upper case.</td>\n        </tr>\n        <tr>\n            <td>data.orderDetails.basePoints</td>\n            <td>Number of points being added to or removed from the user’s LP account.</td>\n        </tr>\n        <tr>\n            <td>data.orderDetails.loyaltyProgram</td>\n            <td>Link to the loyalty program resource.</td>\n        </tr>\n        <tr>\n            <td>data.user.email</td>\n            <td>The email address of the user.</td>\n        </tr>\n        <tr>\n            <td>data.user.firstName</td>\n            <td>The first name of user.</td>\n        </tr>\n        <tr>\n            <td>data.user.lastName</td>\n            <td>The last name of user.</td>\n        </tr>\n        <tr>\n            <td>data.user.memberId</td>\n            <td>The member ID of the user’s LP account.</td>\n        </tr>\n        <tr>\n            <td>data.user.memberValidation</td>\n            <td>Link to the member validation resource.</td>\n        </tr>\n        <tr>\n            <td>orderType</td>\n            <td>\n                <p>The type of order. Can be one of:\n                    <ul>\n                        <li>&quot;EXCHANGE_CREDIT&quot; for credit orders</li>\n                        <li>&quot;REDEEM_DEBIT&quot; for debit orders</li>\n                    </ul>\n                    Contact Points to determine which order type you should use.\n                </p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>The order object if it was created successfully. Returns an <a href=\"./?doc=reference-manual#errors\">error</a> if the order was not created due to a data validation error.</p>\n";

/***/ }),
/* 75 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************************************!*\
  !*** ./app/documents/api/create-sandbox-permissions-example.md ***!
  \*****************************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>POST https://lcp.points.com/v1/apps/&lt;app-id&gt;/sandbox-permissions/\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n{\n  &quot;loyaltyProgram&quot;: &quot;https://lcp.points.com/v1/lps/&lt;lp-id&gt;&quot;,\n  &quot;operations&quot;: [&quot;mvs&quot;, &quot;debits&quot;, &quot;credits&quot;]\n}\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>201 CREATED\nlocation: https://lcp.points.com/v1/apps/&lt;app-id&gt;/sandbox-permissions/&lt;id&gt;\n{\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;/sandbox-permissions/&lt;id&gt;&quot;\n    }\n  },\n  &quot;loyaltyProgram&quot;: &quot;https://lcp.points.com/v1/lps/&lt;lp-id&gt;&quot;,\n  &quot;operations&quot;: [&quot;mvs&quot;, &quot;debits&quot;, &quot;credits&quot;],\n  &quot;type&quot;: &quot;sandboxPermission&quot;\n}\n</code></pre>";

/***/ }),
/* 76 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************************!*\
  !*** ./app/documents/api/create-sandbox-permissions.md ***!
  \*********************************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"create-sandbox-permissions\">Create Sandbox Permissions</h3>\n<p>Gives an application permission to perform operations in sandbox mode on an LP. Only one set of sandbox permissions can exist for a given app-LP relationship.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>app-id</td>\n            <td>The identifier of the application.</td>\n        </tr>\n        <tr>\n            <td>loyaltyProgram</td>\n            <td>The URL of the <a href=\"#loyalty-programs\">loyalty program</a>.</td>\n        </tr>\n        <tr>\n            <td>operations</td>\n            <td>An array of operations that the applications is permitted to do in sandbox mode for the LP. Must be one or more of &quot;mvs&quot;, &quot;member-details&quot;, &quot;mv-delegates&quot;, &quot;debits&quot;, &quot;credits&quot;, &quot;credit-delegates&quot;.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>The sandbox permissions object if it was created successfully. Returns an <a href=\"./?doc=reference-manual#errors\">error</a> if the app or LP doesn’t exist or if an invalid operation is provided. Returns an error with SANDBOX_PERMISSIONS_ALREADY_EXIST if the loyalty program and application already have sandbox permissions configured.</p>\n";

/***/ }),
/* 77 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************!*\
  !*** ./app/documents/api/credits-example.md ***!
  \**********************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-object\">Example Object</h4>\n<pre><code>{\n  &quot;amount&quot;: 2000,\n  &quot;application&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;&quot;,\n  &quot;claimCode&quot;: &quot;TZ9E-9YHMHU-PDEE&quot;,\n  &quot;createdAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n  &quot;creditType&quot;: &quot;base&quot;,\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/credits/&lt;id&gt;&quot;\n    }\n  },\n  &quot;loyaltyProgram&quot;: &quot;https://lcp.points.com/v1/lps/&lt;lp-id&gt;&quot;,\n  &quot;memberValidation&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/mvs/&lt;mv-id&gt;&quot;,\n  &quot;order&quot;: &quot;https://sandbox.lcp.points.com/v1/orders/&lt;order-id&gt;&quot;,\n  &quot;pic&quot;: &quot;ABC&quot;,\n  &quot;status&quot;: &quot;success&quot;,\n  &quot;transactionId&quot;: &quot;15786560&quot;,\n  &quot;type&quot;: &quot;credit&quot;,\n  &quot;updatedAt&quot;: &quot;2014-05-08T17:55:34.511304Z&quot;\n}\n</code></pre>";

/***/ }),
/* 78 */
/* unknown exports provided */
/* all exports used */
/*!**************************************!*\
  !*** ./app/documents/api/credits.md ***!
  \**************************************/
/***/ (function(module, exports) {

module.exports = "<h2 id=\"credits\">Credits</h2>\n<p>A credit is a transaction that adds points to a loyalty program member&#39;s account. Creating a credit object triggers the addition of points. A record of the credit is kept that can later be retrieved. A credit requires a member validation that has not been previously used for another transaction. Credits are stored for each loyalty program under <code>/lps/&lt;lp-id&gt;/credits/</code>.</p>\n<h4 id=\"properties\">Properties</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>amount</td>\n            <td>The number of points added to the member&#39;s account. Must be a positive integer.</td>\n        </tr>\n        <tr>\n            <td>application</td>\n            <td>The application that created the transaction.</td>\n        </tr>\n        <tr>\n            <td>claimCode</td>\n            <td>The claim code for Amazon gift cards.</td>\n        </tr>\n        <tr>\n            <td>createdAt</td>\n            <td>The <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601</a> time when the resource was created.</td>\n        </tr>\n        <tr>\n            <td>creditType</td>\n            <td>Indicates whether the credit is for base or bonus points or both.</td>\n        </tr>\n        <tr>\n            <td>loyaltyProgram</td>\n            <td>The loyalty program involved in the transaction.</td>\n        </tr>\n        <tr>\n            <td>memberValidation</td>\n            <td>Link to a member validation that identifies the member&#39;s account that was credited.</td>\n        </tr>\n        <tr>\n            <td>order</td>\n            <td>Link to the order that this credit belongs to.</td>\n        </tr>\n        <tr>\n            <td>pic</td>\n            <td>Product Identification Code.</td>\n        </tr>\n        <tr>\n            <td>status</td>\n            <td>The status of the credit. The status can be success, failure, systemError, or pending. Pending indicates the transaction is waiting for a response from the loyalty program. Retrieve the credit later to determine whether it succeeded or failed.</td>\n        </tr>\n        <tr>\n            <td>transactionId</td>\n            <td>A transaction ID that can be used to reconcile the credit against the loyalty partner&#39;s records.</td>\n        </tr>\n        <tr>\n            <td>type</td>\n            <td>The type of resource.</td>\n        </tr>\n        <tr>\n            <td>updatedAt</td>\n            <td>The <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601</a> time when the resource was last updated.</td>\n        </tr>\n    </tbody>\n</table>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n";

/***/ }),
/* 79 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************!*\
  !*** ./app/documents/api/debits-example.md ***!
  \*********************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-object\">Example Object</h4>\n<pre><code>{\n  &quot;amount&quot;: 2000,\n  &quot;application&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;&quot;,\n  &quot;createdAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/debits/&lt;id&gt;&quot;\n    }\n  },\n  &quot;loyaltyProgram&quot;: &quot;https://lcp.points.com/v1/lps/&lt;lp-id&gt;&quot;,\n  &quot;memberValidation&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/mvs/&lt;mv-id&gt;&quot;,\n  &quot;order&quot;: &quot;https://sandbox.lcp.points.com/v1/orders/&lt;order-id&gt;&quot;,\n  &quot;pic&quot;: &quot;ABC&quot;,\n  &quot;status&quot;: &quot;success&quot;,\n  &quot;transactionId&quot;: &quot;15786561&quot;,\n  &quot;type&quot;: &quot;debit&quot;,\n  &quot;updatedAt&quot;: &quot;2014-05-08T17:55:34.511304Z&quot;\n}\n</code></pre>";

/***/ }),
/* 80 */
/* unknown exports provided */
/* all exports used */
/*!*************************************!*\
  !*** ./app/documents/api/debits.md ***!
  \*************************************/
/***/ (function(module, exports) {

module.exports = "<h2 id=\"debits\">Debits</h2>\n<p>A debit is a transaction that takes points out of a loyalty program member’s account. Creating a debit object triggers the removal of points. A record of the debit is kept that can later be retrieved. A debit requires a member validation that has not been previously used for another transaction. Debits are stored for each loyalty program under <code>/lps/&lt;lp-id&gt;/debits/</code>.</p>\n<h4 id=\"properties\">Properties</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>amount</td>\n            <td>The number of points deducted from the member&#39;s account. Must be a positive integer.</td>\n        </tr>\n        <tr>\n            <td>application</td>\n            <td>The application that created the transaction.</td>\n        </tr>\n        <tr>\n            <td>createdAt</td>\n            <td>The <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601</a> time when the resource was created.</td>\n        </tr>\n        <tr>\n            <td>loyaltyProgram</td>\n            <td>The loyalty program involved in the transaction.</td>\n        </tr>\n        <tr>\n            <td>memberValidation</td>\n            <td>Link to a member validation that identifies the member&#39;s account that was debited.</td>\n        </tr>\n        <tr>\n            <td>order</td>\n            <td>Link to the order that this debit belongs to.</td>\n        </tr>\n        <tr>\n            <td>pic</td>\n            <td>Product Identification Code.</td>\n        </tr>\n        <tr>\n            <td>status</td>\n            <td>The status of the debit. The status can be success, failure, systemError, or pending. Pending indicates the transaction is waiting for a response from the loyalty program. Retrieve the debit later to determine whether it succeeded or failed.</td>\n        </tr>\n        <tr>\n            <td>transactionId</td>\n            <td>A transaction ID that can be used to reconcile the debit against the loyalty partner&#39;s records.</td>\n        </tr>\n        <tr>\n            <td>type</td>\n            <td>The type of resource.</td>\n        </tr>\n        <tr>\n            <td>updatedAt</td>\n            <td>The <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601</a> time when the resource was last updated.</td>\n        </tr>\n    </tbody>\n</table>\n\n\n\n\n\n\n\n\n\n\n\n\n";

/***/ }),
/* 81 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************************************!*\
  !*** ./app/documents/api/delete-account-credentials-example.md ***!
  \*****************************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>DELETE https://lcp.points.com/v1/accounts/&lt;account-id&gt;/account-credentials/&lt;id&gt;\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>204 NO CONTENT\n</code></pre>";

/***/ }),
/* 82 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************************!*\
  !*** ./app/documents/api/delete-account-credentials.md ***!
  \*********************************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"delete-account-credentials\">Delete Account Credentials</h3>\n<p>If your account credentials have been compromised or if you no longer wish to use one of them, you can delete them. However, you must have at least one set of account credentials. You cannot delete your only set. If you want to replace your current set of credentials, first <a href=\"#create-account-credentials\">create a new set of credentials</a> before deleting your current set.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>account-id</td>\n            <td>The identifier of the account that has the credentials.</td>\n        </tr>\n        <tr>\n            <td>id</td>\n            <td>The identifier of the account credentials to be deleted.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>HTTP status code 204 (No Content) if successful. Otherwise, returns an <a href=\"./?doc=reference-manual#errors\">error</a>.</p>\n";

/***/ }),
/* 83 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************************************!*\
  !*** ./app/documents/api/delete-sandbox-permissions-example.md ***!
  \*****************************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>DELETE https://lcp.points.com/v1/apps/&lt;app-id&gt;/sandbox-permissions/&lt;id&gt;\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>204 NO CONTENT\n</code></pre>";

/***/ }),
/* 84 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************************!*\
  !*** ./app/documents/api/delete-sandbox-permissions.md ***!
  \*********************************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"delete-sandbox-permissions\">Delete Sandbox Permissions</h3>\n<p>Revokes permissions for an application to perform operations in sandbox mode on an LP.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>app-id</td>\n            <td>The identifier of the application.</td>\n        </tr>\n        <tr>\n            <td>id</td>\n            <td>The identifier of the sandbox permissions object.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>HTTP status code 204 (No Content) if successful. Otherwise, returns an <a href=\"./?doc=reference-manual#errors\">error</a>.</p>\n";

/***/ }),
/* 85 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************************!*\
  !*** ./app/documents/api/documentation-overview.md ***!
  \*****************************************************/
/***/ (function(module, exports) {

module.exports = "<h1 id=\"lcp-api-reference\">LCP API Reference</h1>\n<p>For Points Loyalty Commerce Platform - Version 1.0<br><br></p>\n<h2 id=\"document-overview\">Document Overview</h2>\n<p>This document contains a complete list of all objects and actions supported by the Points Loyalty Commerce Platform (LCP) API. The document is organized as follows. Each object is described with the list its properties and an example instance. For each object, a list of possible actions are provided. Each action contains a description of the action itself as well as descriptions and examples of the request and response parameters to perform the action. This document assumes you are already familiar with the LCP and have read the <a href=\"./\">LCP Getting Started Guide for Developers</a> and the <a href=\"./?doc=reference-manual\">LCP Reference Manual</a>.</p>\n";

/***/ }),
/* 86 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ./app/documents/api/get-a-credit-example.md ***!
  \***************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>GET https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/credits/&lt;id&gt;\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>200 OK\n{\n  &quot;amount&quot;: 2000,\n  &quot;application&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;&quot;,\n  &quot;claimCode&quot;: &quot;TZ9E-9YHMHU-PDEE&quot;,\n  &quot;createdAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n  &quot;creditType&quot;: &quot;base&quot;,\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/credits/&lt;id&gt;&quot;\n    }\n  },\n  &quot;loyaltyProgram&quot;: &quot;https://lcp.points.com/v1/lps/&lt;lp-id&gt;&quot;,\n  &quot;memberValidation&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/mvs/&lt;mv-id&gt;&quot;,\n  &quot;order&quot;: &quot;https://sandbox.lcp.points.com/v1/orders/&lt;order-id&gt;&quot;,\n  &quot;pic&quot;: &quot;ABC&quot;,\n  &quot;status&quot;: &quot;success&quot;,\n  &quot;transactionId&quot;: &quot;15786560&quot;,\n  &quot;type&quot;: &quot;credit&quot;,\n  &quot;updatedAt&quot;: &quot;2014-05-08T17:55:34.511304Z&quot;\n}\n</code></pre>";

/***/ }),
/* 87 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************!*\
  !*** ./app/documents/api/get-a-credit.md ***!
  \*******************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"get-a-credit\">Get a Credit</h3>\n<p>Retrieves the details of a previous credit. This retrieves a historical record of the credit transaction when it was created, including whether the transaction succeeded or failed.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>lp-id</td>\n            <td>The identifier of the loyalty program (LP).</td>\n        </tr>\n        <tr>\n            <td>id</td>\n            <td>The identifier of the credit.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>The credit object if it exists, otherwise returns an <a href=\"./?doc=reference-manual#errors\">error</a>.</p>\n";

/***/ }),
/* 88 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./app/documents/api/get-a-debit-example.md ***!
  \**************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>GET https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/debits/&lt;id&gt;\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>200 OK\n{\n  &quot;amount&quot;: 2000,\n  &quot;application&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;&quot;,\n  &quot;createdAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/debits/&lt;id&gt;&quot;\n    }\n  },\n  &quot;loyaltyProgram&quot;: &quot;https://lcp.points.com/v1/lps/&lt;lp-id&gt;&quot;,\n  &quot;memberValidation&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/mvs/&lt;mv-id&gt;&quot;,\n  &quot;order&quot;: &quot;https://sandbox.lcp.points.com/v1/orders/&lt;order-id&gt;&quot;,\n  &quot;pic&quot;: &quot;ABC&quot;,\n  &quot;status&quot;: &quot;success&quot;,\n  &quot;transactionId&quot;: &quot;15786561&quot;,\n  &quot;type&quot;: &quot;debit&quot;,\n  &quot;updatedAt&quot;: &quot;2014-05-08T17:55:34.511304Z&quot;\n}\n</code></pre>";

/***/ }),
/* 89 */
/* unknown exports provided */
/* all exports used */
/*!******************************************!*\
  !*** ./app/documents/api/get-a-debit.md ***!
  \******************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"get-a-debit\">Get a Debit</h3>\n<p>Retrieves the details of a previous debit. This retrieves a historical record of the debit transaction when it was created, including whether the transaction succeeded or failed.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>lp-id</td>\n            <td>The identifier of the loyalty program (LP).</td>\n        </tr>\n        <tr>\n            <td>id</td>\n            <td>The identifier of the debit.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>The debit object if it exists, otherwise returns an <a href=\"./?doc=reference-manual#errors\">error</a>.</p>\n";

/***/ }),
/* 90 */
/* unknown exports provided */
/* all exports used */
/*!********************************************************!*\
  !*** ./app/documents/api/get-a-mv-delegate-example.md ***!
  \********************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>GET https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/mv-delegates/&lt;id&gt;\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>200 OK\n{\n  &quot;application&quot;: &quot;https://sandbox.lcp.points.com/v1/apps/&lt;app-id&gt;&quot;,\n  &quot;createdAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n  &quot;memberValidation&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/mvs/&lt;mv-id&gt;&quot;,\n  &quot;links&quot;: {\n    &quot;self&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/mv-delegates/&lt;id&gt;&quot;\n  },\n  &quot;type&quot;: &quot;memberValidationDelegate&quot;,\n  &quot;updatedAt&quot;: &quot;2014-05-08T17:55:34.511304Z&quot;\n}\n</code></pre>";

/***/ }),
/* 91 */
/* unknown exports provided */
/* all exports used */
/*!************************************************!*\
  !*** ./app/documents/api/get-a-mv-delegate.md ***!
  \************************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"get-an-mv-delegate\">Get an MV Delegate</h3>\n<p>Retrieves the details of a previous MV delegate. The MV delegate includes a link to the MV that was created and a link to the application that can retrieve the MV.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>lp-id</td>\n            <td>The identifier of the loyalty program (LP).</td>\n        </tr>\n        <tr>\n            <td>id</td>\n            <td>The identifier of the MV delegate.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>The MV delegate object if it exists, otherwise returns an <a href=\"./?doc=reference-manual#errors\">error</a>.</p>\n";

/***/ }),
/* 92 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************!*\
  !*** ./app/documents/api/get-a-mv-example.md ***!
  \***********************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>GET https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/mvs/&lt;id&gt;\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>200 OK\n{\n  &quot;application&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;&quot;,\n  &quot;authenticatingFactors&quot;: {\n    &quot;password&quot;: &quot;*****&quot;\n  },\n  &quot;balance&quot;: 2000,\n  &quot;createdAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n  &quot;identifyingFactors&quot;: {\n    &quot;firstName&quot;: &quot;John&quot;,\n    &quot;lastName&quot;: &quot;Doe&quot;,\n    &quot;memberId&quot;: &quot;1234&quot;\n  },\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/mvs/&lt;id&gt;&quot;\n    }\n  },\n  &quot;loyaltyProgram&quot;: &quot;https://lcp.points.com/v1/lps/&lt;lp-id&gt;&quot;,\n  &quot;order&quot;: &quot;https://sandbox.lcp.points.com/v1/orders/&lt;order-id&gt;&quot;,\n  &quot;status&quot;: &quot;success&quot;,\n  &quot;type&quot;: &quot;memberValidation&quot;,\n  &quot;updatedAt&quot;: &quot;2014-05-08T17:55:34.511304Z&quot;\n}\n</code></pre>";

/***/ }),
/* 93 */
/* unknown exports provided */
/* all exports used */
/*!***************************************!*\
  !*** ./app/documents/api/get-a-mv.md ***!
  \***************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"get-an-mv\">Get an MV</h3>\n<p>Retrieves the details of a previous MV. This retrieves the MV and member&#39;s balance in the state it was when it was when the MV was created. To get an updated member&#39;s balance, create a new MV. Requests must be signed with your app&#39;s credentials.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>lp-id</td>\n            <td>The identifier of the loyalty program (LP).</td>\n        </tr>\n        <tr>\n            <td>id</td>\n            <td>The identifier of the member validation (MV).</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>The MV object if it exists, otherwise returns an <a href=\"./?doc=reference-manual#errors\">error</a>.</p>\n";

/***/ }),
/* 94 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ./app/documents/api/get-a-report-example.md ***!
  \***************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>GET https://lcp.points.com/v1/apps/&lt;app-id&gt;/reports/&lt;id&gt;\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>200 OK\n{\n  &quot;createdAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n  &quot;description&quot;: &quot;Report on all transactions performed by my app&quot;,\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;/reports/&lt;id&gt;&quot;\n    },\n    &quot;instances&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;/reports/&lt;id&gt;/instances/&quot;\n    }\n  },\n  &quot;name&quot;: &quot;My App’s Transaction Report&quot;,\n  &quot;type&quot;: &quot;report&quot;,\n  &quot;updatedAt&quot;: &quot;2014-05-08T17:55:34.511304Z&quot;,\n  &quot;url&quot;: &quot;https://myapp.com/reports/report-name&quot;\n}\n</code></pre>";

/***/ }),
/* 95 */
/* unknown exports provided */
/* all exports used */
/*!************************************************************!*\
  !*** ./app/documents/api/get-a-report-instance-example.md ***!
  \************************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>GET https://lcp.points.com/v1/apps/&lt;app-id&gt;/reports/&lt;report-id&gt;/instances/&lt;id&gt;\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>200 OK\n{\n  &quot;contentType&quot;: &quot;application/json&quot;,\n  &quot;createdAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;/reports/&lt;report-id&gt;/instances/&lt;id&gt;&quot;\n    },\n    &quot;data&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;/reports/&lt;report-id&gt;/instances/&lt;id&gt;/data&quot;\n    },\n    &quot;report&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;/reports/&lt;report-id&gt;&quot;\n    }\n  },\n  &quot;status&quot;: &quot;success&quot;,\n  &quot;type&quot;: &quot;reportInstance&quot;,\n  &quot;updatedAt&quot;: &quot;2014-05-08T17:55:34.511304Z&quot;\n}\n</code></pre>";

/***/ }),
/* 96 */
/* unknown exports provided */
/* all exports used */
/*!****************************************************!*\
  !*** ./app/documents/api/get-a-report-instance.md ***!
  \****************************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"get-a-report-instance\">Get a Report Instance</h3>\n<p>Retrieves the details of a report instance. The report instance contains a timestamp of when the report instance was created and the status of the request to generate the report instance. If the report instance was successful, get the data link to retrieve the report data.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>app-id</td>\n            <td>The identifier of the application.</td>\n        </tr>\n        <tr>\n            <td>report-id</td>\n            <td>The identifier of the report.</td>\n        </tr>\n        <tr>\n            <td>id</td>\n            <td>The identifier of the report instance.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>The report instance if it exists, otherwise returns an <a href=\"./?doc=reference-manual#errors\">error</a>.</p>\n";

/***/ }),
/* 97 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************!*\
  !*** ./app/documents/api/get-a-report.md ***!
  \*******************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"get-a-report\">Get a Report</h3>\n<p>Retrieves the details of a report. The report contains the name and description of the report. It does not contain the report data. To get the report data, request an instance of the report.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>app-id</td>\n            <td>The identifier of the application.</td>\n        </tr>\n        <tr>\n            <td>id</td>\n            <td>The identifier of the report.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>The report object if it exists, otherwise returns an <a href=\"./?doc=reference-manual#errors\">error</a>.</p>\n";

/***/ }),
/* 98 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************************!*\
  !*** ./app/documents/api/get-account-credentials-example.md ***!
  \**************************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>GET https://lcp.points.com/v1/accounts/&lt;account-id&gt;/account-credentials/&lt;id&gt;\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>200 OK\n{\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/accounts/&lt;account-id&gt;/account-credentials/&lt;id&gt;&quot;\n    }\n  },\n  &quot;macAlgorithm&quot;: &quot;HMAC-SHA1&quot;,\n  &quot;macKey&quot;: &quot;&lt;macKey&gt;&quot;,\n  &quot;macKeyIdentifier&quot;: &quot;&lt;macKeyIdentifier&gt;&quot;,\n  &quot;type&quot;: &quot;accountCredential&quot;\n}\n</code></pre>";

/***/ }),
/* 99 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************!*\
  !*** ./app/documents/api/get-account-credentials.md ***!
  \******************************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"get-account-credentials\">Get Account Credentials</h3>\n<p>Retrieves an existing set of account credentials.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>account-id</td>\n            <td>The identifier of the account that has the credentials.</td>\n        </tr>\n        <tr>\n            <td>id</td>\n            <td>The identifier of the account credentials.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>The account credentials object if it exists and you’re authorized to access it, otherwise returns an <a href=\"./?doc=reference-manual#errors\">error</a>.</p>\n";

/***/ }),
/* 100 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************************!*\
  !*** ./app/documents/api/get-account-permissions-example.md ***!
  \**************************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>GET https://lcp.points.com/v1/apps/&lt;app-id&gt;/account-permissions\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>200 OK\n{\n  &quot;createdAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;/account-permissions&quot;\n    }\n  },\n  &quot;support&quot;: [\n    &quot;https://lcp.points.com/v1/accounts/&lt;account-id1&gt;&quot;,\n    &quot;https://lcp.points.com/v1/accounts/&lt;account-id2&gt;&quot;\n  ],\n  &quot;type&quot;: &quot;accountPermission&quot;,\n  &quot;updatedAt&quot;: &quot;2014-05-08T17:55:34.511304Z&quot;\n}\n</code></pre>";

/***/ }),
/* 101 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************!*\
  !*** ./app/documents/api/get-account-permissions.md ***!
  \******************************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"get-account-permissions\">Get Account Permissions</h3>\n<p>Retrieves the list of accounts that have permission to access the application and its resources.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>app-id</td>\n            <td>The identifier of the application.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>The account permissions for the application if the application exists, otherwise returns an <a href=\"./?doc=reference-manual#errors\">error</a>.</p>\n";

/***/ }),
/* 102 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************************!*\
  !*** ./app/documents/api/get-an-account-example.md ***!
  \*****************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>GET https://lcp.points.com/v1/accounts/&lt;id&gt;\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>200 OK\n{\n  &quot;accountCredentials&quot;: [\n    {\n      &quot;links&quot;: {\n        &quot;self&quot;: {\n          &quot;href&quot;: &quot;https://lcp.points.com/v1/accounts/&lt;id&gt;/account-credentials/&lt;ac-id&gt;&quot;\n        }\n      },\n      &quot;macAlgorithm&quot;: &quot;HMAC-SHA1&quot;,\n      &quot;macKey&quot;: &quot;&lt;macKey&gt;&quot;,\n      &quot;macKeyIdentifier&quot;: &quot;&lt;macKeyIdentifier&gt;&quot;\n    }\n  ],\n  &quot;createdAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n  &quot;email&quot;: &quot;youremail@yourcompany.com&quot;,\n  &quot;firstName&quot;: &quot;First Name&quot;,\n  &quot;lastName&quot;: &quot;Last Name&quot;,\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/accounts/&lt;id&gt;&quot;\n    },\n    &quot;friendly&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/accounts/youremail%40yourcompany.com&quot;\n    }\n  },\n  &quot;organizationName&quot;: &quot;Company&quot;,\n  &quot;phone&quot;: &quot;416-555-1234&quot;,\n  &quot;roles&quot;: [\n    &quot;appDeveloper&quot;\n  ],\n  &quot;timeZone&quot;: &quot;America/Toronto&quot;,\n  &quot;type&quot;: &quot;account&quot;,\n  &quot;updatedAt&quot;: &quot;2014-05-08T17:55:34.511304Z&quot;\n}\n</code></pre>";

/***/ }),
/* 103 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************!*\
  !*** ./app/documents/api/get-an-account.md ***!
  \*********************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"get-an-account\">Get an Account</h3>\n<p>Retrieves the account details for an existing account.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>id</td>\n            <td>The identifier of the account.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>The account object if it exists, otherwise returns an <a href=\"./?doc=reference-manual#errors\">error</a>.</p>\n";

/***/ }),
/* 104 */
/* unknown exports provided */
/* all exports used */
/*!********************************************************!*\
  !*** ./app/documents/api/get-an-app-by-mac-example.md ***!
  \********************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>GET https://lcp.points.com/v1/apps/?macKeyIdentifier=&lt;mac-key-id&gt;\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>200 OK\n{\n  &quot;apps&quot;: [\n    {\n      &quot;createdAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n      &quot;description&quot;: &quot;Description of my app&quot;,\n      &quot;links&quot;: {\n        &quot;self&quot;: {\n          &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;id&gt;&quot;\n        },\n        &quot;reports&quot;: {\n          &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;id&gt;/reports/&quot;\n        }\n      },\n      &quot;liveCredentials&quot;: [],\n      &quot;name&quot;: &quot;My App&quot;,\n      &quot;sandboxCredentials&quot;: [\n        &quot;https://lcp.points.com/v1/apps/&lt;id&gt;/sandbox-credentials/&lt;sc-id&gt;&quot;\n      ],\n      &quot;type&quot;: &quot;app&quot;,\n      &quot;updatedAt&quot;: &quot;2014-05-08T17:55:34.511304Z&quot;\n    }\n  ]\n}\n</code></pre>";

/***/ }),
/* 105 */
/* unknown exports provided */
/* all exports used */
/*!************************************************!*\
  !*** ./app/documents/api/get-an-app-by-mac.md ***!
  \************************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"get-an-app-by-mac-key-identifier\">Get an App by MAC Key Identifier</h3>\n<p>If you don&#39;t remember your app&#39;s ID, you can also retrieve it by querying the <code>/apps</code> endpoint with your app&#39;s MAC key identifier.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>mac-key-id</td>\n            <td>The MAC key identifier for the live or sandbox credentials of an app.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>A list of apps. If an app was found with the given MAC key identifier, the app is included in the list. Otherwise, the list is empty.</p>\n";

/***/ }),
/* 106 */
/* unknown exports provided */
/* all exports used */
/*!*************************************************!*\
  !*** ./app/documents/api/get-an-app-example.md ***!
  \*************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>GET https://lcp.points.com/v1/apps/&lt;id&gt;\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>200 OK\n{\n  &quot;createdAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n  &quot;description&quot;: &quot;Description of my app&quot;,\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;id&gt;&quot;\n    },\n    &quot;reports&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;id&gt;/reports/&quot;\n    }\n  },\n  &quot;liveCredentials&quot;: [],\n  &quot;name&quot;: &quot;My App&quot;,\n  &quot;sandboxCredentials&quot;: [\n    &quot;https://lcp.points.com/v1/apps/&lt;id&gt;/sandbox-credentials/&lt;sc-id&gt;&quot;\n  ],\n  &quot;type&quot;: &quot;app&quot;,\n  &quot;updatedAt&quot;: &quot;2014-05-08T17:55:34.511304Z&quot;\n}\n</code></pre>";

/***/ }),
/* 107 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************!*\
  !*** ./app/documents/api/get-an-app.md ***!
  \*****************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"get-an-app\">Get an App</h3>\n<p>Retrieves the details of an existing app.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>id</td>\n            <td>The identifier of the app.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>The app object if it exists, otherwise returns an <a href=\"./?doc=reference-manual#errors\">error</a>.</p>\n";

/***/ }),
/* 108 */
/* unknown exports provided */
/* all exports used */
/*!************************************************!*\
  !*** ./app/documents/api/get-an-lp-example.md ***!
  \************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>GET https://lcp.points.com/v1/lps/&lt;id&gt;\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>200 OK\n{\n  &quot;createdAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n  &quot;creditType&quot;: &quot;combinedBaseBonus&quot;,\n  &quot;defaultLanguage&quot;: &quot;en&quot;,\n  &quot;hidden&quot;: false,\n  &quot;links&quot;: {\n    &quot;credits&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/lps/&lt;id&gt;/credits/&quot;\n    },\n    &quot;debits&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/lps/&lt;id&gt;/debits/&quot;\n    },\n    &quot;memberValidations&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/lps/&lt;id&gt;/mvs/&quot;\n    },\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/lps/&lt;id&gt;&quot;\n    }\n  },\n  &quot;name&quot;: &quot;Rapid Rewards&quot;,\n  &quot;partnerId&quot;: &quot;dVNm&quot;,\n  &quot;partnerName&quot;: &quot;Southwest&quot;,\n  &quot;rewardCurrency&quot;: &quot;Points&quot;,\n  &quot;translations&quot;: {\n    &quot;es&quot;: {\n      &quot;name&quot;: &quot;Rapid Rewards&quot;,\n      &quot;partnerName&quot;: &quot;Southwest&quot;,\n      &quot;rewardCurrency&quot;: &quot;puntos&quot;\n  },\n  &quot;type&quot;: &quot;loyaltyProgram&quot;,\n  &quot;updatedAt&quot;: &quot;2014-05-08T17:55:34.511304Z&quot;\n}\n</code></pre>";

/***/ }),
/* 109 */
/* unknown exports provided */
/* all exports used */
/*!****************************************!*\
  !*** ./app/documents/api/get-an-lp.md ***!
  \****************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"get-an-lp\">Get an LP</h3>\n<p>Retrieves the details of an LP.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>id</td>\n            <td>The identifier of the loyalty program (LP).</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>The LP object if it exists and the requestor has permission to access it, otherwise returns an <a href=\"./?doc=reference-manual#errors\">error</a>.</p>\n";

/***/ }),
/* 110 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************************!*\
  !*** ./app/documents/api/get-an-mv-request-schema-example.md ***!
  \***************************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>GET https://lcp.points.com/v1/lps/&lt;lp-id&gt;/mvs/metadata/schema\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>200 OK\n{\n  &quot;createdAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n  &quot;presentation&quot;: {\n    &quot;labels&quot;: {\n      &quot;identifyingFactors.firstName&quot;: {\n        &quot;en&quot;: &quot;First Name&quot;\n      },\n      &quot;identifyingFactors.lastName&quot;: {\n        &quot;en&quot;: &quot;Last Name&quot;\n      },\n      &quot;identifyingFactors.memberId&quot;: {\n        &quot;en&quot;: &quot;Membership Number&quot;\n      },\n      &quot;authenticatingFactors.password&quot;: {\n        &quot;en&quot;: &quot;Password&quot;\n      }\n    },\n    &quot;order&quot;: [&quot;identifyingFactors.firstName&quot;, &quot;identifyingFactors.lastName&quot;, &quot;identifyingFactors.memberId&quot;, &quot;authenticatingFactors.password&quot;]\n  },\n  &quot;schema&quot;: {\n    &quot;type&quot;: &quot;object&quot;,\n    &quot;properties&quot;: {\n      &quot;identifyingFactors&quot;: {\n        &quot;type&quot;: &quot;object&quot;,\n        &quot;properties&quot;: {\n          &quot;firstName&quot;: {\n            &quot;type&quot;: &quot;string&quot;,\n            &quot;minLength&quot;: 1,\n            &quot;maxLength&quot;: 100\n          },\n          &quot;lastName&quot;: {\n            &quot;type&quot;: &quot;string&quot;,\n            &quot;minLength&quot;: 1,\n            &quot;maxLength&quot;: 100\n          },\n          &quot;memberId&quot;: {\n            &quot;type&quot;: &quot;string&quot;,\n            &quot;minLength&quot;: 1,\n            &quot;maxLength&quot;: 100\n          }\n        },\n        &quot;required&quot;: [&quot;firstName&quot;, &quot;lastName&quot;, &quot;memberId&quot;],\n        &quot;additionalProperties&quot;: false\n      },\n      &quot;authenticatingFactors&quot;: {\n        &quot;type&quot;: &quot;object&quot;,\n        &quot;properties&quot;: {\n          &quot;password&quot;: {\n            &quot;type&quot;: &quot;string&quot;,\n            &quot;minLength&quot;: 1,\n            &quot;maxLength&quot;: 100\n          }\n        },\n        &quot;required&quot;: [&quot;password&quot;],\n        &quot;additionalProperties&quot;: false\n      }\n    },\n    &quot;required&quot;: [&quot;identifyingFactors&quot;, &quot;authenticatingFactors&quot;],\n    &quot;additionalProperties&quot;: false\n  },\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/lps/&lt;lp-id&gt;/mvs/metadata/schema&quot;\n    }\n  },\n  &quot;type&quot;: &quot;memberValidationRequestSchema&quot;,\n  &quot;updatedAt&quot;: &quot;2014-05-08T17:55:34.511304Z&quot;\n}\n</code></pre>";

/***/ }),
/* 111 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************************!*\
  !*** ./app/documents/api/get-an-mv-request-schema.md ***!
  \*******************************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"get-an-mv-request-schema\">Get an MV Request Schema</h3>\n<p>Retrieves the MV request schema that defines the JSON document applications must send to do an MV.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>lp-id</td>\n            <td>The identifier of the loyalty program (LP).</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>The MV request schema object if it exists, otherwise returns an <a href=\"./?doc=reference-manual#errors\">error</a>.</p>\n";

/***/ }),
/* 112 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ./app/documents/api/get-an-order-example.md ***!
  \***************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>GET https://sandbox.lcp.points.com/v1/orders/&lt;id&gt;\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>200 OK\n{\n  &quot;application&quot;: &quot;https://sandbox.lcp.points.com/v1/apps/&lt;app-id&gt;&quot;,\n  &quot;confirmationNumber&quot;: &quot;3902-2266-8404-8538-1721&quot;,\n  &quot;createdAt&quot;: &quot;2014-02-26T17:47:00.000000Z&quot;,\n  &quot;data&quot;: {\n    &quot;clientIpAddress&quot;: &quot;127.0.0.1&quot;, \n    &quot;clientUserAgent&quot;: &quot;Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:42.0) Gecko/20100101 Firefox/42.0&quot;, \n    &quot;language&quot;: &quot;en-US&quot;, \n    &quot;orderDetails&quot;: {\n      &quot;basePoints&quot;: 2000, \n      &quot;loyaltyProgram&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;&quot;\n    }, \n    &quot;user&quot;: {\n      &quot;email&quot;: &quot;jdoe@example.com&quot;,\n      &quot;firstName&quot;: &quot;John&quot;, \n      &quot;lastName&quot;: &quot;Doe&quot;, \n      &quot;memberId&quot;: &quot;1234&quot;, \n      &quot;memberValidation&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/mvs/&lt;mv-id&gt;&quot;\n    }\n  },\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://sandbox.lcp.points.com/v1/orders/&lt;id&gt;&quot;\n    }\n  },\n  &quot;orderType&quot;: &quot;EXCHANGE_CREDIT&quot;,\n  &quot;status&quot;: &quot;complete&quot;,\n  &quot;type&quot;: &quot;order&quot;,\n  &quot;updatedAt&quot;: &quot;2014-02-26T17:50:00.000000Z&quot;,\n  &quot;updates&quot;: [\n    {\n      &quot;resource&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/mvs/&lt;mv-id&gt;&quot;,\n      &quot;status&quot;: &quot;success&quot;,\n      &quot;type&quot;: &quot;memberValidation&quot;,\n      &quot;updatedAt&quot;: &quot;2014-02-26T17:47:30.000000Z&quot;\n    },\n    {\n      &quot;resource&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/credits/&lt;credit-id&gt;&quot;,\n      &quot;status&quot;: &quot;success&quot;,\n      &quot;type&quot;: &quot;credit&quot;,\n      &quot;updatedAt&quot;: &quot;2014-02-26T17:49:00.000000Z&quot;\n    }\n  ]\n}\n</code></pre>";

/***/ }),
/* 113 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************!*\
  !*** ./app/documents/api/get-an-order.md ***!
  \*******************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"get-an-order\">Get an Order</h3>\n<p>Retrieves the details of an order.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>id</td>\n            <td>The identifier of the order.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>The order object if it exists, otherwise returns an <a href=\"./?doc=reference-manual#errors\">error</a>.</p>\n";

/***/ }),
/* 114 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************************!*\
  !*** ./app/documents/api/get-live-credentials-example.md ***!
  \***********************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>GET https://lcp.points.com/v1/apps/&lt;app-id&gt;/live-credentials/&lt;id&gt;\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>200 OK\n{\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;/live-credentials/&lt;id&gt;&quot;\n    }\n  },\n  &quot;macAlgorithm&quot;: &quot;HMAC-SHA1&quot;,\n  &quot;macKey&quot;: &quot;&lt;macKey&gt;&quot;,\n  &quot;macKeyIdentifier&quot;: &quot;&lt;macKeyIdentifier&gt;&quot;,\n  &quot;type&quot;: &quot;liveCredential&quot;\n}\n</code></pre>";

/***/ }),
/* 115 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ./app/documents/api/get-live-credentials.md ***!
  \***************************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"get-live-credentials\">Get Live Credentials</h3>\n<p>Retrieves an existing set of live credentials.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>app-id</td>\n            <td>The identifier of the app that has the credentials.</td>\n        </tr>\n        <tr>\n            <td>id</td>\n            <td>The identifier of the live credentials.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>The live credentials object if it exists and you&#39;re authorized to access it, otherwise returns an <a href=\"./?doc=reference-manual#errors\">error</a>.</p>\n";

/***/ }),
/* 116 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************************!*\
  !*** ./app/documents/api/get-live-permissions-example.md ***!
  \***********************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>GET https://lcp.points.com/v1/apps/&lt;app-id&gt;/live-permissions/&lt;id&gt;\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>200 OK\n{\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;/live-permissions/&lt;id&gt;&quot;\n    }\n  },\n  &quot;loyaltyProgram&quot;: &quot;https://lcp.points.com/v1/lps/&lt;lp-id&gt;&quot;,\n  &quot;operations&quot;: [&quot;mvs&quot;, &quot;debits&quot;, &quot;credits&quot;],\n  &quot;type&quot;: &quot;livePermission&quot;\n}\n</code></pre>";

/***/ }),
/* 117 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ./app/documents/api/get-live-permissions.md ***!
  \***************************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"get-live-permissions\">Get Live Permissions</h3>\n<p>Retrieves the operations that an app can perform in live mode for an LP.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>app-id</td>\n            <td>The identifier of the application.</td>\n        </tr>\n        <tr>\n            <td>id</td>\n            <td>The identifier of the live permissions object.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>The live permissions object if it exists, otherwise returns an <a href=\"./?doc=reference-manual#errors\">error</a>.</p>\n";

/***/ }),
/* 118 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************************!*\
  !*** ./app/documents/api/get-report-instance-data-example.md ***!
  \***************************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>GET https://lcp.points.com/v1/apps/&lt;app-id&gt;/reports/&lt;report-id&gt;/instances/&lt;id&gt;/data\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>200 OK\n{\n  &lt;data provided by application&gt;\n}\n</code></pre>";

/***/ }),
/* 119 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************************!*\
  !*** ./app/documents/api/get-report-instance-data.md ***!
  \*******************************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"get-report-instance-data\">Get Report Instance Data</h3>\n<p>Retrieves the data in a report instance. The data is a cached copy of what the application returned to the LCP when the report instance was created. Check the Content-Type header to determine how to process the data.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>app-id</td>\n            <td>The identifier of the application.</td>\n        </tr>\n        <tr>\n            <td>report-id</td>\n            <td>The identifier of the report.</td>\n        </tr>\n        <tr>\n            <td>id</td>\n            <td>The identifier of the report instance.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>The report data if it exists, otherwise returns an <a href=\"./?doc=reference-manual#errors\">error</a>.</p>\n";

/***/ }),
/* 120 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************************!*\
  !*** ./app/documents/api/get-sandbox-credentials-example.md ***!
  \**************************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>GET https://lcp.points.com/v1/apps/&lt;app-id&gt;/sandbox-credentials/&lt;id&gt;\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>200 OK\n{\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;/sandbox-credentials/&lt;id&gt;&quot;\n    }\n  },\n  &quot;macAlgorithm&quot;: &quot;HMAC-SHA1&quot;,\n  &quot;macKey&quot;: &quot;&lt;macKey&gt;&quot;,\n  &quot;macKeyIdentifier&quot;: &quot;&lt;macKeyIdentifier&gt;&quot;,\n  &quot;type&quot;: &quot;sandboxCredential&quot;\n}\n</code></pre>";

/***/ }),
/* 121 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************!*\
  !*** ./app/documents/api/get-sandbox-credentials.md ***!
  \******************************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"get-sandbox-credentials\">Get Sandbox Credentials</h3>\n<p>Retrieves an existing set of sandbox credentials.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>app-id</td>\n            <td>The identifier of the app that has the credentials.</td>\n        </tr>\n        <tr>\n            <td>id</td>\n            <td>The identifier of the sandbox credentials.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>The sandbox credentials object if it exists and you&#39;re authorized to access it, otherwise returns an <a href=\"./?doc=reference-manual#errors\">error</a>.</p>\n";

/***/ }),
/* 122 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************!*\
  !*** ./app/documents/api/get-sandbox-mvs-example.md ***!
  \******************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>GET https://lcp.points.com/v1/lps/&lt;lp-id&gt;/mvs/metadata/sandbox-responses\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>200 OK\n{\n  &quot;sandboxResponses&quot;: [\n    {\n      &quot;request&quot;: {\n        &quot;identifyingFactors&quot;: {\n          &quot;firstName&quot;: &quot;Tony&quot;,\n          &quot;lastName&quot;: &quot;Smith&quot;,\n          &quot;memberId&quot;: &quot;99999999&quot;\n        },\n        &quot;authenticatingFactors&quot;: {\n          &quot;password&quot;: &quot;PASSWORD&quot;\n        }\n      },\n      &quot;response&quot;: {\n         &quot;error&quot;: &quot;INVALID_UPSTREAM_RESPONSE&quot;\n      }\n    },\n    {\n      &quot;request&quot;: {\n        &quot;identifyingFactors&quot;: {\n          &quot;firstName&quot;: &quot;Joe&quot;,\n          &quot;lastName&quot;: &quot;Smith&quot;,\n          &quot;memberId&quot;: &quot;12345678&quot;\n        },\n        &quot;authenticatingFactors&quot;: {\n          &quot;password&quot;: &quot;ABCDEFGH&quot;\n        }\n      },\n      &quot;response&quot;: {\n        &quot;balance&quot;: 205123\n      }\n    },\n    ...\n  ],\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/lps/&lt;lp-id&gt;/mvs/metadata/sandbox-responses&quot;\n    }\n  }\n}\n</code></pre>";

/***/ }),
/* 123 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************!*\
  !*** ./app/documents/api/get-sandbox-mvs.md ***!
  \**********************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"get-sandbox-mvs\">Get Sandbox MVs</h3>\n<p>Retrieves the list of sandbox MVs that can be used for testing MVs in sandbox mode. Sandbox MVs are LP-specific.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>lp-id</td>\n            <td>The identifier of the loyalty program (LP).</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>The sandbox MVs for the LP, otherwise returns an <a href=\"./?doc=reference-manual#errors\">error</a>.</p>\n";

/***/ }),
/* 124 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************************!*\
  !*** ./app/documents/api/get-sandbox-permissions-example.md ***!
  \**************************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>GET https://lcp.points.com/v1/apps/&lt;app-id&gt;/sandbox-permissions/&lt;id&gt;\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>200 OK\n{\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;/sandbox-permissions/&lt;id&gt;&quot;\n    }\n  },\n  &quot;loyaltyProgram&quot;: &quot;https://lcp.points.com/v1/lps/&lt;lp-id&gt;&quot;,\n  &quot;operations&quot;: [&quot;mvs&quot;, &quot;debits&quot;, &quot;credits&quot;],\n  &quot;type&quot;: &quot;sandboxPermission&quot;\n}\n</code></pre>";

/***/ }),
/* 125 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************!*\
  !*** ./app/documents/api/get-sandbox-permissions.md ***!
  \******************************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"get-sandbox-permissions\">Get Sandbox Permissions</h3>\n<p>Retrieves the operations that an app can perform in sandbox mode for an LP.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>app-id</td>\n            <td>The identifier of the application.</td>\n        </tr>\n        <tr>\n            <td>id</td>\n            <td>The identifier of the sandbox permissions object.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>The sandbox permissions object if it exists, otherwise returns an <a href=\"./?doc=reference-manual#errors\">error</a>.</p>\n";

/***/ }),
/* 126 */
/* unknown exports provided */
/* all exports used */
/*!****************************************************!*\
  !*** ./app/documents/api/list-all-apps-example.md ***!
  \****************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>GET https://lcp.points.com/v1/apps/?limit=10&amp;offset=0\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>200 OK\n{\n  &quot;apps&quot;: [\n    {\n      &quot;createdAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n      &quot;description&quot;: &quot;Description of my app&quot;,\n      &quot;links&quot;: {\n        &quot;self&quot;: {\n          &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;id&gt;&quot;\n        },\n        &quot;reports&quot;: {\n          &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;id&gt;/reports/&quot;\n        }\n      },\n      &quot;liveCredentials&quot;: [],\n      &quot;name&quot;: &quot;My App&quot;,\n      &quot;sandboxCredentials&quot;: [\n        &quot;https://lcp.points.com/v1/apps/&lt;id&gt;/sandbox-credentials/&lt;sc-id&gt;&quot;\n      ],\n      &quot;type&quot;: &quot;app&quot;,\n      &quot;updatedAt&quot;: &quot;2014-05-08T17:55:34.511304Z&quot;\n    },\n    ...\n  ]\n}\n</code></pre>";

/***/ }),
/* 127 */
/* unknown exports provided */
/* all exports used */
/*!********************************************!*\
  !*** ./app/documents/api/list-all-apps.md ***!
  \********************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"list-all-apps\">List all Apps</h3>\n<p>Retrieves a list of all apps that you have permission to access.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>limit</td>\n            <td>The maximum number of apps to include in the list (optional). If not provided, defaults to 10. Max is 100.</td>\n        </tr>\n        <tr>\n            <td>offset</td>\n            <td>The starting offset when returning a list of apps (optional). Use for pagination. For example, to retrieve the second page of 10 apps, use offset=10. Defaults to 0 if not provided.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>The list of apps you have permission to access.</p>\n";

/***/ }),
/* 128 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************************!*\
  !*** ./app/documents/api/list-all-credits-example.md ***!
  \*******************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>GET https://lcp.points.com/v1/credits/?startCreatedAt=2014-04-19T07:00:00.000000Z&amp;endCreatedAt=2014-04-19T08:00:00.000000Z&amp;limit=10&amp;offset=0\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>200 OK\n{\n  &quot;credits&quot; : [\n    {\n      &quot;amount&quot;: 2000,\n      &quot;application&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;&quot;,\n      &quot;claimCode&quot;: &quot;TZ9E-9YHMHU-PDEE&quot;,\n      &quot;createdAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n      &quot;creditType&quot;: &quot;base&quot;,\n      &quot;links&quot;: {\n        &quot;self&quot;: {\n          &quot;href&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/credits/&lt;id&gt;&quot;\n        }\n      },\n      &quot;loyaltyProgram&quot;: &quot;https://lcp.points.com/v1/lps/&lt;lp-id&gt;&quot;,\n      &quot;memberValidation&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/mvs/&lt;mv-id&gt;&quot;,\n      &quot;order&quot;: &quot;https://sandbox.lcp.points.com/v1/orders/&lt;order-id&gt;&quot;,\n      &quot;pic&quot;: &quot;ABC&quot;,\n      &quot;status&quot;: &quot;success&quot;,\n      &quot;transactionId&quot;: &quot;15786560&quot;,\n      &quot;type&quot;: &quot;credit&quot;,\n      &quot;updatedAt&quot;: &quot;2014-05-08T17:55:34.511304Z&quot;\n    },\n    ...\n  ]\n}\n</code></pre>";

/***/ }),
/* 129 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************!*\
  !*** ./app/documents/api/list-all-credits.md ***!
  \***********************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"list-all-credits\">List all Credits</h3>\n<p>Retrieves the list of all credits that the requestor has permission to access.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>application</td>\n            <td>Filters the list by application (optional).</td>\n        </tr>\n        <tr>\n            <td>endCreatedAt</td>\n            <td>Filters the list to resources created before the given <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601</a> time (optional).</td>\n        </tr>\n        <tr>\n            <td>limit</td>\n            <td>The maximum number of resources to include in the list (optional). If not provided, defaults to 10. Max is 100.</td>\n        </tr>\n        <tr>\n            <td>loyaltyProgram</td>\n            <td>Filters the list by loyalty program (optional).</td>\n        </tr>\n        <tr>\n            <td>offset</td>\n            <td>The starting offset when returning a list of resources (optional). Use for pagination. For example, to retrieve the second page of 10 resources, use offset=10. Defaults to 0 if not provided.</td>\n        </tr>\n        <tr>\n            <td>startCreatedAt</td>\n            <td>Filters the list to resources created at or after the given <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601</a> time (optional).</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>A list of credits.</p>\n";

/***/ }),
/* 130 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************!*\
  !*** ./app/documents/api/list-all-debits-example.md ***!
  \******************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>GET https://lcp.points.com/v1/debits/?startCreatedAt=2014-04-19T07:00:00.000000Z&amp;endCreatedAt=2014-04-19T08:00:00.000000Z&amp;limit=10&amp;offset=0\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>200 OK\n{\n  &quot;debits&quot; : [\n    {\n      &quot;amount&quot;: 2000,\n      &quot;application&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;&quot;,\n      &quot;createdAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n      &quot;links&quot;: {\n        &quot;self&quot;: {\n          &quot;href&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/debits/&lt;id&gt;&quot;\n        }\n      },\n      &quot;loyaltyProgram&quot;: &quot;https://lcp.points.com/v1/lps/&lt;lp-id&gt;&quot;,\n      &quot;memberValidation&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/mvs/&lt;mv-id&gt;&quot;,\n      &quot;order&quot;: &quot;https://sandbox.lcp.points.com/v1/orders/&lt;order-id&gt;&quot;,\n      &quot;pic&quot;: &quot;ABC&quot;,\n      &quot;status&quot;: &quot;success&quot;,\n      &quot;transactionId&quot;: &quot;15786561&quot;,\n      &quot;type&quot;: &quot;debit&quot;,\n      &quot;updatedAt&quot;: &quot;2014-05-08T17:55:34.511304Z&quot;\n    },\n    ...\n  ]\n}\n</code></pre>";

/***/ }),
/* 131 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************!*\
  !*** ./app/documents/api/list-all-debits.md ***!
  \**********************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"list-all-debits\">List all Debits</h3>\n<p>Retrieves the list of all debits that the requestor has permission to access.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>application</td>\n            <td>Filters the list by application (optional).</td>\n        </tr>\n        <tr>\n            <td>endCreatedAt</td>\n            <td>Filters the list to resources created before the given <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601</a> time (optional).</td>\n        </tr>\n        <tr>\n            <td>limit</td>\n            <td>The maximum number of resources to include in the list (optional). If not provided, defaults to 10. Max is 100.</td>\n        </tr>\n        <tr>\n            <td>loyaltyProgram</td>\n            <td>Filters the list by loyalty program (optional).</td>\n        </tr>\n        <tr>\n            <td>offset</td>\n            <td>The starting offset when returning a list of resources (optional). Use for pagination. For example, to retrieve the second page of 10 resources, use offset=10. Defaults to 0 if not provided.</td>\n        </tr>\n        <tr>\n            <td>startCreatedAt</td>\n            <td>Filters the list to resources created at or after the given <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601</a> time (optional).</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>A list of debits.</p>\n";

/***/ }),
/* 132 */
/* unknown exports provided */
/* all exports used */
/*!****************************************************************!*\
  !*** ./app/documents/api/list-all-live-permissions-example.md ***!
  \****************************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>GET https://lcp.points.com/v1/apps/&lt;app-id&gt;/live-permissions/\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>200 OK\n{\n  &quot;livePermissions&quot;: [\n    {\n      &quot;links&quot;: {\n        &quot;self&quot;: {\n          &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;/live-permissions/&lt;id&gt;&quot;\n        }\n      },\n      &quot;loyaltyProgram&quot;: &quot;https://lcp.points.com/v1/lps/&lt;lp-id&gt;&quot;,\n      &quot;operations&quot;: [&quot;mvs&quot;, &quot;debits&quot;, &quot;credits&quot;],\n      &quot;type&quot;: &quot;livePermission&quot;\n    },\n    ...\n  ]\n}\n</code></pre>";

/***/ }),
/* 133 */
/* unknown exports provided */
/* all exports used */
/*!********************************************************!*\
  !*** ./app/documents/api/list-all-live-permissions.md ***!
  \********************************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"list-all-live-permissions\">List all Live Permissions</h3>\n<p>Retrieves the list of operations that an app can perform in live mode for each LP.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>app-id</td>\n            <td>The identifier of the application.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>The list of live permissions if the app exists, otherwise returns an <a href=\"./?doc=reference-manual#errors\">error</a>.</p>\n";

/***/ }),
/* 134 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ./app/documents/api/list-all-lps-example.md ***!
  \***************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>GET https://lcp.points.com/v1/lps/?limit=10&amp;offset=0&amp;partnerName=Southwest&amp;type=loyaltyProgram\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>200 OK\n{\n  &quot;lps&quot; : [\n    {\n      &quot;createdAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n      &quot;creditType&quot;: &quot;combinedBaseBonus&quot;,\n      &quot;defaultLanguage&quot;: &quot;en&quot;,\n      &quot;hidden&quot;: false,\n      &quot;links&quot;: {\n        &quot;credits&quot;: {\n          &quot;href&quot;: &quot;https://lcp.points.com/v1/lps/&lt;id&gt;/credits/&quot;\n        },\n        &quot;debits&quot;: {\n          &quot;href&quot;: &quot;https://lcp.points.com/v1/lps/&lt;id&gt;/debits/&quot;\n        },\n        &quot;memberValidations&quot;: {\n          &quot;href&quot;: &quot;https://lcp.points.com/v1/lps/&lt;id&gt;/mvs/&quot;\n        },\n        &quot;self&quot;: {\n          &quot;href&quot;: &quot;https://lcp.points.com/v1/lps/&lt;id&gt;&quot;\n        }\n      },\n      &quot;name&quot;: &quot;Rapid Rewards&quot;,\n      &quot;partnerId&quot;: &quot;dVNm&quot;,\n      &quot;partnerName&quot;: &quot;Southwest&quot;,\n      &quot;rewardCurrency&quot;: &quot;Points&quot;,\n      &quot;translations&quot;: {\n        &quot;es&quot;: {\n          &quot;name&quot;: &quot;Rapid Rewards&quot;,\n          &quot;partnerName&quot;: &quot;Southwest&quot;,\n          &quot;rewardCurrency&quot;: &quot;puntos&quot;\n      },\n      &quot;type&quot;: &quot;loyaltyProgram&quot;,\n      &quot;updatedAt&quot;: &quot;2014-05-08T17:55:34.511304Z&quot;\n    },\n    ...\n  ]\n}\n</code></pre>";

/***/ }),
/* 135 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************!*\
  !*** ./app/documents/api/list-all-lps.md ***!
  \*******************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"list-all-lps\">List all LPs</h3>\n<p>Retrieves the list of all LPs in the platform. Requests using live or sandbox credentials only return LPs that the app has permission to access in live or sandbox mode.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>limit</td>\n            <td>The maximum number of LPs to include in the list (optional). If not provided, defaults to 10. Max is 100.</td>\n        </tr>\n        <tr>\n            <td>name</td>\n            <td>Filters the list by the name associated with the loyalty program (optional).</td>\n        </tr>\n        <tr>\n            <td>offset</td>\n            <td>The starting offset when returning a list of LPs (optional). Use for pagination. For example, to retrieve the second page of 10 LPs, use offset=10. Defaults to 0 if not provided.</td>\n        </tr>\n        <tr>\n            <td>partnerName</td>\n            <td>Filters the list by the partner associated with the loyalty program (optional).</td>\n        </tr>\n        <tr>\n            <td>type</td>\n            <td>The type of resource (optional). Can be either &quot;loyaltyProgram&quot; or &quot;giftCard&quot;.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>A list of LP objects.</p>\n";

/***/ }),
/* 136 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************!*\
  !*** ./app/documents/api/list-all-orders-example.md ***!
  \******************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>GET https://sandbox.lcp.points.com/v1/search/orders/?limit=10&amp;offset=0&amp;q=orderType:EXCHANGE_CREDIT\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>200 OK\n{\n  &quot;orders&quot; : [\n    {\n      &quot;application&quot;: &quot;https://sandbox.lcp.points.com/v1/apps/&lt;app-id&gt;&quot;,\n      &quot;confirmationNumber&quot;: &quot;3902-2266-8404-8538-1721&quot;,\n      &quot;createdAt&quot;: &quot;2014-02-26T17:47:00.000000Z&quot;,\n      &quot;data&quot;: {\n        &quot;clientIpAddress&quot;: &quot;127.0.0.1&quot;, \n        &quot;clientUserAgent&quot;: &quot;Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:42.0) Gecko/20100101 Firefox/42.0&quot;, \n        &quot;language&quot;: &quot;en-US&quot;, \n        &quot;orderDetails&quot;: {\n          &quot;basePoints&quot;: 2000, \n          &quot;loyaltyProgram&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;&quot;\n        }, \n        &quot;user&quot;: {\n          &quot;email&quot;: &quot;jdoe@example.com&quot;,\n          &quot;firstName&quot;: &quot;John&quot;, \n          &quot;lastName&quot;: &quot;Doe&quot;, \n          &quot;memberId&quot;: &quot;1234&quot;, \n          &quot;memberValidation&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/mvs/&lt;mv-id&gt;&quot;\n        }\n      },\n      &quot;links&quot;: {\n        &quot;self&quot;: {\n          &quot;href&quot;: &quot;https://sandbox.lcp.points.com/v1/orders/&lt;id&gt;&quot;\n        }\n      },\n      &quot;orderType&quot;: &quot;EXCHANGE_CREDIT&quot;,\n      &quot;status&quot;: &quot;complete&quot;,\n      &quot;type&quot;: &quot;order&quot;,\n      &quot;updatedAt&quot;: &quot;2014-02-26T17:50:00.000000Z&quot;,\n      &quot;updates&quot;: [\n        {\n          &quot;resource&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/mvs/&lt;mv-id&gt;&quot;,\n          &quot;status&quot;: &quot;success&quot;,\n          &quot;type&quot;: &quot;memberValidation&quot;,\n          &quot;updatedAt&quot;: &quot;2014-02-26T17:47:30.000000Z&quot;\n        },\n        {\n          &quot;resource&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/credits/&lt;credit-id&gt;&quot;,\n          &quot;status&quot;: &quot;success&quot;,\n          &quot;type&quot;: &quot;credit&quot;,\n          &quot;updatedAt&quot;: &quot;2014-02-26T17:49:00.000000Z&quot;\n        }\n      ]\n    },\n    ...\n  ]\n}\n</code></pre>";

/***/ }),
/* 137 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************!*\
  !*** ./app/documents/api/list-all-orders.md ***!
  \**********************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"list-all-orders\">List all Orders</h3>\n<p>Retrieves the list of all orders that the requestor has permission to access.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>limit</td>\n            <td>The maximum number of orders to include in the list (optional). If not provided, defaults to 10. Max is 100.</td>\n        </tr>\n        <tr>\n            <td>offset</td>\n            <td>The starting offset when returning a list of orders (optional). Use for pagination. For example, to retrieve the second page of 10 orders, use offset=10. Defaults to 0 if not provided.</td>\n        </tr>\n        <tr>\n            <td>q</td>\n            <td>Filters the list of orders using <a href=\"http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html#query-string-syntax\">Elastic Search query string syntax</a> (optional).</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>A list of orders.</p>\n";

/***/ }),
/* 138 */
/* unknown exports provided */
/* all exports used */
/*!****************************************************************!*\
  !*** ./app/documents/api/list-all-report-instances-example.md ***!
  \****************************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>GET https://lcp.points.com/v1/apps/&lt;app-id&gt;/reports/&lt;report-id&gt;/instances/\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>200 OK\n{\n  &quot;instances&quot;: [\n    {\n      &quot;contentType&quot;: &quot;application/json&quot;,\n      &quot;createdAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n      &quot;links&quot;: {\n        &quot;self&quot;: {\n          &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;/reports/&lt;report-id&gt;/instances/&lt;id&gt;&quot;\n        },\n        &quot;data&quot;: {\n          &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;/reports/&lt;report-id&gt;/instances/&lt;id&gt;/data&quot;\n        },\n        &quot;report&quot;: {\n          &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;/reports/&lt;report-id&gt;&quot;\n        }\n      },\n      &quot;status&quot;: &quot;success&quot;,\n      &quot;type&quot;: &quot;reportInstance&quot;,\n      &quot;updatedAt&quot;: &quot;2014-05-08T17:55:34.511304Z&quot;\n    },\n    ...\n  ]\n}\n</code></pre>";

/***/ }),
/* 139 */
/* unknown exports provided */
/* all exports used */
/*!********************************************************!*\
  !*** ./app/documents/api/list-all-report-instances.md ***!
  \********************************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"list-all-report-instances\">List all Report Instances</h3>\n<p>Retrieves the list of report instances that have been requested.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>app-id</td>\n            <td>The identifier of the application.</td>\n        </tr>\n        <tr>\n            <td>report-id</td>\n            <td>The identifier of the report.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>The list of reports instances if the app and report exist, otherwise returns an <a href=\"./?doc=reference-manual#errors\">error</a>.</p>\n";

/***/ }),
/* 140 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************************!*\
  !*** ./app/documents/api/list-all-reports-example.md ***!
  \*******************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>GET https://lcp.points.com/v1/apps/&lt;app-id&gt;/reports/\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>200 OK\n{\n  &quot;reports&quot;: [\n    {\n      &quot;createdAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n      &quot;description&quot;: &quot;Report on all transactions performed by my app&quot;,\n      &quot;links&quot;: {\n        &quot;self&quot;: {\n          &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;/reports/&lt;id&gt;&quot;\n        },\n        &quot;instances&quot;: {\n          &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;/reports/&lt;id&gt;/instances/&quot;\n        }\n      },\n      &quot;name&quot;: &quot;My App’s Transaction Report&quot;,\n      &quot;type&quot;: &quot;report&quot;,\n      &quot;updatedAt&quot;: &quot;2014-05-08T17:55:34.511304Z&quot;,\n      &quot;url&quot;: &quot;https://myapp.com/reports/report-name&quot;\n    },\n    ...\n  ]\n}\n</code></pre>";

/***/ }),
/* 141 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************!*\
  !*** ./app/documents/api/list-all-reports.md ***!
  \***********************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"list-all-reports\">List all Reports</h3>\n<p>Retrieves the list of reports that an app has registered with the LCP.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>app-id</td>\n            <td>The identifier of the application.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>The list of reports if the app exists, otherwise returns an <a href=\"./?doc=reference-manual#errors\">error</a>.</p>\n";

/***/ }),
/* 142 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************************************!*\
  !*** ./app/documents/api/list-all-sandbox-permissions-example.md ***!
  \*******************************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>GET https://lcp.points.com/v1/apps/&lt;app-id&gt;/sandbox-permissions/\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>200 OK\n{\n  &quot;sandboxPermissions&quot;: [\n    {\n      &quot;links&quot;: {\n        &quot;self&quot;: {\n          &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;/sandbox-permissions/&lt;id&gt;&quot;\n        }\n      },\n      &quot;loyaltyProgram&quot;: &quot;https://lcp.points.com/v1/lps/&lt;lp-id&gt;&quot;,\n      &quot;operations&quot;: [&quot;mvs&quot;, &quot;debits&quot;, &quot;credits&quot;],\n      &quot;type&quot;: &quot;sandboxPermission&quot;\n    },\n    ...\n  ]\n}\n</code></pre>";

/***/ }),
/* 143 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************************!*\
  !*** ./app/documents/api/list-all-sandbox-permissions.md ***!
  \***********************************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"list-all-sandbox-permissions\">List all Sandbox Permissions</h3>\n<p>Retrieves the list of operations that an app can perform in sandbox mode for each LP.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>app-id</td>\n            <td>The identifier of the application.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>The list of sandbox permissions if the app exists, otherwise returns an <a href=\"./?doc=reference-manual#errors\">error</a>.</p>\n";

/***/ }),
/* 144 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************************!*\
  !*** ./app/documents/api/live-credentials-example.md ***!
  \*******************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-object\">Example Object</h4>\n<pre><code>{\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;/live-credentials/&lt;id&gt;&quot;\n    }\n  },\n  &quot;macAlgorithm&quot;: &quot;HMAC-SHA1&quot;,\n  &quot;macKey&quot;: &quot;&lt;macKey&gt;&quot;,\n  &quot;macKeyIdentifier&quot;: &quot;&lt;macKeyIdentifier&gt;&quot;,\n  &quot;type&quot;: &quot;liveCredential&quot;\n}\n</code></pre>";

/***/ }),
/* 145 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************!*\
  !*** ./app/documents/api/live-credentials.md ***!
  \***********************************************/
/***/ (function(module, exports) {

module.exports = "<h2 id=\"live-credentials\">Live Credentials</h2>\n<p>Live credentials authenticate your app to perform actions on the LCP in live mode. App credentials are different for sandbox and live mode. Live credentials are created by Points when your app is promoted to live mode. Live credentials are available at <code>/apps/&lt;app-id&gt;/live-credentials</code> and are used to sign requests to <code>/lps</code> in live mode. You cannot create or delete live credentials.</p>\n<h4 id=\"properties\">Properties</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>macAlgorithm</td>\n            <td>The MAC algorithm describes the algorithm used to create the signature.</td>\n        </tr>\n        <tr>\n            <td>macKey</td>\n            <td>The MAC key is the shared secret key. It should never be shared with anyone or transmitted in any request. Keep this key secure as you would any private key.</td>\n        </tr>\n        <tr>\n            <td>macKeyIdentifier</td>\n            <td>The MAC key identifier uniquely identifies the MAC key. The MAC key identifier is sent with each request to tell the server which MAC key was used to sign the request.</td>\n        </tr>\n        <tr>\n            <td>type</td>\n            <td>The type of resource.</td>\n        </tr>\n    </tbody>\n</table>\n\n\n\n\n\n\n\n";

/***/ }),
/* 146 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************************!*\
  !*** ./app/documents/api/live-permissions-example.md ***!
  \*******************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-object\">Example Object</h4>\n<pre><code>{\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;/live-permissions/&lt;id&gt;&quot;\n    }\n  },\n  &quot;loyaltyProgram&quot;: &quot;https://lcp.points.com/v1/lps/&lt;lp-id&gt;&quot;,\n  &quot;operations&quot;: [&quot;mvs&quot;, &quot;debits&quot;, &quot;credits&quot;],\n  &quot;type&quot;: &quot;livePermission&quot;\n}\n</code></pre>";

/***/ }),
/* 147 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************!*\
  !*** ./app/documents/api/live-permissions.md ***!
  \***********************************************/
/***/ (function(module, exports) {

module.exports = "<h2 id=\"live-permissions\">Live Permissions</h2>\n<p>Live permissions describe what operations an application can do in live mode for each loyalty program.</p>\n<h4 id=\"properties\">Properties</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>loyaltyProgram</td>\n            <td>The URL of the loyalty program.</td>\n        </tr>\n        <tr>\n            <td>operations</td>\n            <td>An array of operations that the application is permitted to do in live mode for the LP.</td>\n        </tr>\n        <tr>\n            <td>type</td>\n            <td>The type of resource.</td>\n        </tr>\n    </tbody>\n</table>\n\n\n\n\n\n\n\n\n\n";

/***/ }),
/* 148 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************************!*\
  !*** ./app/documents/api/loyalty-programs-example.md ***!
  \*******************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-object\">Example Object</h4>\n<pre><code>{\n  &quot;createdAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n  &quot;creditType&quot;: &quot;combinedBaseBonus&quot;,\n  &quot;defaultLanguage&quot;: &quot;en&quot;,\n  &quot;hidden&quot;: false,\n  &quot;links&quot;: {\n    &quot;credits&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/lps/&lt;id&gt;/credits/&quot;\n    },\n    &quot;debits&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/lps/&lt;id&gt;/debits/&quot;\n    },\n    &quot;memberValidations&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/lps/&lt;id&gt;/mvs/&quot;\n    },\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/lps/&lt;id&gt;&quot;\n    }\n  },\n  &quot;name&quot;: &quot;Rapid Rewards&quot;,\n  &quot;partnerId&quot;: &quot;dVNm&quot;,\n  &quot;partnerName&quot;: &quot;Southwest&quot;,\n  &quot;rewardCurrency&quot;: &quot;Points&quot;,\n  &quot;translations&quot;: {\n    &quot;es&quot;: {\n      &quot;name&quot;: &quot;Rapid Rewards&quot;,\n      &quot;partnerName&quot;: &quot;Southwest&quot;,\n      &quot;rewardCurrency&quot;: &quot;puntos&quot;\n  },\n  &quot;type&quot;: &quot;loyaltyProgram&quot;,\n  &quot;updatedAt&quot;: &quot;2014-05-08T17:55:34.511304Z&quot;\n}\n</code></pre>";

/***/ }),
/* 149 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************!*\
  !*** ./app/documents/api/loyalty-programs.md ***!
  \***********************************************/
/***/ (function(module, exports) {

module.exports = "<h2 id=\"loyalty-programs-lps-\">Loyalty Programs (LPs)</h2>\n<p>A loyalty program (LP) allows applications to perform member validations, debits, and credits against the loyalty program’s member database. Loyalty programs are found under the <code>/lps</code> endpoint.</p>\n<h4 id=\"properties\">Properties</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>createdAt</td>\n            <td>The <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601</a> time when the resource was created.</td>\n        </tr>\n        <tr>\n            <td>creditType</td>\n            <td>Indicates whether the LP requires base and bonus points to be fulfilled as one credit or as two separate credits.</td>\n        </tr>\n        <tr>\n            <td>defaultLanguage</td>\n            <td>The default language of the loyalty program. The name, partnerName, and rewardCurrency properties are in this language. <a href=\"http://en.wikipedia.org/wiki/IETF_language_tag\">IETF language tags</a> are used.</td>\n        </tr>\n        <tr>\n            <td>hidden</td>\n            <td>Flag indicating whether the LP is shown in the list of LPs.</td>\n        </tr>\n        <tr>\n            <td>name</td>\n            <td>The name of the loyalty program.</td>\n        </tr>\n        <tr>\n            <td>partnerId</td>\n            <td>A four character string uniquely identifying the loyalty program.</td>\n        </tr>\n        <tr>\n            <td>partnerName</td>\n            <td>The partner associated with the loyalty program.</td>\n        </tr>\n        <tr>\n            <td>rewardCurrency</td>\n            <td>The name of the reward currency (e.g. points or miles).</td>\n        </tr>\n        <tr>\n            <td>translations</td>\n            <td>A set of language translations for the name, partnerName, and rewardCurrency properties. <a href=\"http://en.wikipedia.org/wiki/IETF_language_tag\">IETF language tags</a> are used.</td>\n        </tr>\n        <tr>\n            <td>type</td>\n            <td>The type of resource.</td>\n        </tr>\n        <tr>\n            <td>updatedAt</td>\n            <td>The <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601</a> time when the resource was last updated.</td>\n        </tr>\n    </tbody>\n</table>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n";

/***/ }),
/* 150 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************************!*\
  !*** ./app/documents/api/member-validations-example.md ***!
  \*********************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-object\">Example Object</h4>\n<pre><code>{\n  &quot;application&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;&quot;,\n  &quot;authenticatingFactors&quot;: {\n    &quot;password&quot;: &quot;*****&quot;\n  },\n  &quot;balance&quot;: 2000,\n  &quot;createdAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n  &quot;identifyingFactors&quot;: {\n    &quot;firstName&quot;: &quot;John&quot;,\n    &quot;lastName&quot;: &quot;Doe&quot;,\n    &quot;memberId&quot;: &quot;1234&quot;\n  },\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/mvs/&lt;id&gt;&quot;\n    }\n  },\n  &quot;loyaltyProgram&quot;: &quot;https://lcp.points.com/v1/lps/&lt;lp-id&gt;&quot;,\n  &quot;order&quot;: &quot;https://sandbox.lcp.points.com/v1/orders/&lt;order-id&gt;&quot;,\n  &quot;status&quot;: &quot;success&quot;,\n  &quot;type&quot;: &quot;memberValidation&quot;,\n  &quot;updatedAt&quot;: &quot;2014-05-08T17:55:34.511304Z&quot;\n}\n</code></pre>";

/***/ }),
/* 151 */
/* unknown exports provided */
/* all exports used */
/*!*************************************************!*\
  !*** ./app/documents/api/member-validations.md ***!
  \*************************************************/
/***/ (function(module, exports) {

module.exports = "<h2 id=\"member-validations-mvs-\">Member Validations (MVs)</h2>\n<p>A member validation (MV) authenticates a member of a loyalty program and retrieves their balance. MVs are required before any other transactions can be performed on a member&#39;s account and each transaction requires a separate MV.</p>\n<h4 id=\"properties\">Properties</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>application</td>\n            <td>The application that created the transaction.</td>\n        </tr>\n        <tr>\n            <td>authenticatingFactors</td>\n            <td>Dictionary of fields that authenticate the loyalty program member (e.g., password, pin). These fields are not displayed. Varies based on the LP’s <a href=\"#mv-request-schema\">MV request schema</a>.</td>\n        </tr>\n        <tr>\n            <td>balance</td>\n            <td>The balance in the loyalty program member&#39;s account.</td>\n        </tr>\n        <tr>\n            <td>createdAt</td>\n            <td>The <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601</a> time when the resource was created.</td>\n        </tr>\n        <tr>\n            <td>identifyingFactors</td>\n            <td>Dictionary of fields that identify the loyalty program member (e.g., firstName, lastName, memberId). Varies based on the LP’s <a href=\"#mv-request-schema\">MV request schema</a>.</td>\n        </tr>\n        <tr>\n            <td>loyaltyProgram</td>\n            <td>The loyalty program involved in the transaction.</td>\n        </tr>\n        <tr>\n            <td>order</td>\n            <td>Link to the order that this member validation belongs to.</td>\n        </tr>\n        <tr>\n            <td>status</td>\n            <td>The status of the member validation. The status is always success.</td>\n        </tr>\n        <tr>\n            <td>type</td>\n            <td>The type of resource.</td>\n        </tr>\n        <tr>\n            <td>updatedAt</td>\n            <td>The <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601</a> time when the resource was last updated.</td>\n        </tr>\n    </tbody>\n</table>\n\n\n\n\n";

/***/ }),
/* 152 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ./app/documents/api/mv-delegates-example.md ***!
  \***************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-object\">Example Object</h4>\n<pre><code>{\n  &quot;application&quot;: &quot;https://sandbox.lcp.points.com/v1/apps/&lt;app-id&gt;&quot;,\n  &quot;createdAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n  &quot;memberValidation&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/mvs/&lt;mv-id&gt;&quot;,\n  &quot;links&quot;: {\n    &quot;self&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/mv-delegates/&lt;id&gt;&quot;\n  },\n  &quot;type&quot;: &quot;memberValidationDelegate&quot;,\n  &quot;updatedAt&quot;: &quot;2014-05-08T17:55:34.511304Z&quot;\n}\n</code></pre>";

/***/ }),
/* 153 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************!*\
  !*** ./app/documents/api/mv-delegates.md ***!
  \*******************************************/
/***/ (function(module, exports) {

module.exports = "<h2 id=\"mv-delegates\">MV Delegates</h2>\n<p>An MV delegate is a member validation that a loyalty program created for another application. MV delegates are used for Single Sign-On (SSO) behaviour. When a loyalty program application wants to redirect an authenticated member to a 3rd-party application, the loyalty program application can create an MV delegate so that the other application doesn’t need to re-authenticate the user.</p>\n<h4 id=\"properties\">Properties</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>application</td>\n            <td>The application that has permission to access the member validation.</td>\n        </tr>\n        <tr>\n            <td>createdAt</td>\n            <td>The <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601</a> time when the resource was created.</td>\n        </tr>\n        <tr>\n            <td>memberValidation</td>\n            <td>A link to the member validation that the application can access.</td>\n        </tr>\n        <tr>\n            <td>type</td>\n            <td>The type of resource.</td>\n        </tr>\n        <tr>\n            <td>updatedAt</td>\n            <td>The <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601</a> time when the resource was last updated.</td>\n        </tr>\n    </tbody>\n</table>\n\n\n\n\n\n\n\n\n";

/***/ }),
/* 154 */
/* unknown exports provided */
/* all exports used */
/*!********************************************************!*\
  !*** ./app/documents/api/mv-request-schema-example.md ***!
  \********************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-object\">Example Object</h4>\n<pre><code>{\n  &quot;createdAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n  &quot;presentation&quot;: {\n    &quot;labels&quot;: {\n      &quot;identifyingFactors.firstName&quot;: {\n        &quot;en&quot;: &quot;First Name&quot;\n      },\n      &quot;identifyingFactors.lastName&quot;: {\n        &quot;en&quot;: &quot;Last Name&quot;\n      },\n      &quot;identifyingFactors.memberId&quot;: {\n        &quot;en&quot;: &quot;Membership Number&quot;\n      },\n      &quot;authenticatingFactors.password&quot;: {\n        &quot;en&quot;: &quot;Password&quot;\n      }\n    },\n    &quot;order&quot;: [&quot;identifyingFactors.firstName&quot;, &quot;identifyingFactors.lastName&quot;, &quot;identifyingFactors.memberId&quot;, &quot;authenticatingFactors.password&quot;]\n  },\n  &quot;schema&quot;: {\n    &quot;type&quot;: &quot;object&quot;,\n    &quot;properties&quot;: {\n      &quot;identifyingFactors&quot;: {\n        &quot;type&quot;: &quot;object&quot;,\n        &quot;properties&quot;: {\n          &quot;firstName&quot;: {\n            &quot;type&quot;: &quot;string&quot;,\n            &quot;minLength&quot;: 1,\n            &quot;maxLength&quot;: 100\n          },\n          &quot;lastName&quot;: {\n            &quot;type&quot;: &quot;string&quot;,\n            &quot;minLength&quot;: 1,\n            &quot;maxLength&quot;: 100\n          },\n          &quot;memberId&quot;: {\n            &quot;type&quot;: &quot;string&quot;,\n            &quot;minLength&quot;: 1,\n            &quot;maxLength&quot;: 100\n          }\n        },\n        &quot;required&quot;: [&quot;firstName&quot;, &quot;lastName&quot;, &quot;memberId&quot;],\n        &quot;additionalProperties&quot;: false\n      },\n      &quot;authenticatingFactors&quot;: {\n        &quot;type&quot;: &quot;object&quot;,\n        &quot;properties&quot;: {\n          &quot;password&quot;: {\n            &quot;type&quot;: &quot;string&quot;,\n            &quot;minLength&quot;: 1,\n            &quot;maxLength&quot;: 100\n          }\n        },\n        &quot;required&quot;: [&quot;password&quot;],\n        &quot;additionalProperties&quot;: false\n      }\n    },\n    &quot;required&quot;: [&quot;identifyingFactors&quot;, &quot;authenticatingFactors&quot;],\n    &quot;additionalProperties&quot;: false\n  },\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/lps/&lt;lp-id&gt;/mvs/metadata/schema&quot;\n    }\n  },\n  &quot;type&quot;: &quot;memberValidationRequestSchema&quot;,\n  &quot;updatedAt&quot;: &quot;2014-05-08T17:55:34.511304Z&quot;\n}\n</code></pre>";

/***/ }),
/* 155 */
/* unknown exports provided */
/* all exports used */
/*!************************************************!*\
  !*** ./app/documents/api/mv-request-schema.md ***!
  \************************************************/
/***/ (function(module, exports) {

module.exports = "<h2 id=\"mv-request-schema\">MV Request Schema</h2>\n<p>Each LP has an MV request schema that defines the JSON document applications must send to do an MV.</p>\n<h4 id=\"properties\">Properties</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>createdAt</td>\n            <td>The <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601</a> time when the resource was created.</td>\n        </tr>\n        <tr>\n            <td>presentation</td>\n            <td>Describes how to present the MV request schema to the user to obtain their loyalty program credentials. Includes localized labels for each MV request field and the order to present the fields. <a href=\"http://en.wikipedia.org/wiki/IETF_language_tag\">IETF language tags</a> are used.</td>\n        </tr>\n        <tr>\n            <td>schema</td>\n            <td>A JSON schema that defines the format for MV requests. The preferred format is two top-level properties: identifyingFactors and authenticatingFactors. Identifying factors include fields like first name, last name, and member ID. Authenticating factors include fields like password and pin that should not be displayed to users.</td>\n        </tr>\n        <tr>\n            <td>type</td>\n            <td>The type of resource.</td>\n        </tr>\n        <tr>\n            <td>updatedAt</td>\n            <td>The <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601</a> time when the resource was last updated.</td>\n        </tr>\n    </tbody>\n</table>\n\n\n\n\n\n\n\n\n";

/***/ }),
/* 156 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************!*\
  !*** ./app/documents/api/orders-example.md ***!
  \*********************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-object\">Example Object</h4>\n<pre><code>{\n  &quot;application&quot;: &quot;https://sandbox.lcp.points.com/v1/apps/&lt;app-id&gt;&quot;,\n  &quot;confirmationNumber&quot;: &quot;3902-2266-8404-8538-1721&quot;,\n  &quot;createdAt&quot;: &quot;2014-02-26T17:47:00.000000Z&quot;,\n  &quot;data&quot;: {\n    &quot;clientIpAddress&quot;: &quot;127.0.0.1&quot;, \n    &quot;clientUserAgent&quot;: &quot;Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:42.0) Gecko/20100101 Firefox/42.0&quot;, \n    &quot;language&quot;: &quot;en-US&quot;, \n    &quot;orderDetails&quot;: {\n      &quot;basePoints&quot;: 2000, \n      &quot;loyaltyProgram&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;&quot;\n    }, \n    &quot;user&quot;: {\n      &quot;email&quot;: &quot;jdoe@example.com&quot;,\n      &quot;firstName&quot;: &quot;John&quot;, \n      &quot;lastName&quot;: &quot;Doe&quot;, \n      &quot;memberId&quot;: &quot;1234&quot;, \n      &quot;memberValidation&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/mvs/&lt;mv-id&gt;&quot;\n    }\n  },\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://sandbox.lcp.points.com/v1/orders/&lt;id&gt;&quot;\n    }\n  },\n  &quot;orderType&quot;: &quot;EXCHANGE_CREDIT&quot;,\n  &quot;status&quot;: &quot;complete&quot;,\n  &quot;type&quot;: &quot;order&quot;,\n  &quot;updatedAt&quot;: &quot;2014-02-26T17:50:00.000000Z&quot;,\n  &quot;updates&quot;: [\n    {\n      &quot;resource&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/mvs/&lt;mv-id&gt;&quot;,\n      &quot;status&quot;: &quot;success&quot;,\n      &quot;type&quot;: &quot;memberValidation&quot;,\n      &quot;updatedAt&quot;: &quot;2014-02-26T17:47:30.000000Z&quot;\n    },\n    {\n      &quot;resource&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/credits/&lt;credit-id&gt;&quot;,\n      &quot;status&quot;: &quot;success&quot;,\n      &quot;type&quot;: &quot;credit&quot;,\n      &quot;updatedAt&quot;: &quot;2014-02-26T17:49:00.000000Z&quot;\n    }\n  ]\n}\n</code></pre>";

/***/ }),
/* 157 */
/* unknown exports provided */
/* all exports used */
/*!*************************************!*\
  !*** ./app/documents/api/orders.md ***!
  \*************************************/
/***/ (function(module, exports) {

module.exports = "<h2 id=\"orders\">Orders</h2>\n<p>All transactions must be part of an order for them to appear in the order search support tool and the transaction reports in the <a href=\"https://admin.lcp.points.com/\">LCP Admin</a> console. An order is a composite transaction that associates multiple primitive transactions together. Primitive transactions include MVs, debits, and credits. The order contains details about the composite transaction and its fulfillment history. Additional metadata about the order can also be included in the data section. If you have <a href=\"https://www.getpostman.com/\" target=\"_new\">Postman</a> installed, click <a href=\"https://www.getpostman.com/collections/9393bd27614afdd01e6b\">here</a> to install a Postman collection which will take through two examples of what is involved in creating an order on the LCP (in order for it to run, you will first need to download and import <a href=\"HelloLoyaltyWorld.json\">this Postman environment</a>).</p>\n<h4 id=\"properties\">Properties</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>application</td>\n            <td>The application that created the transaction.</td>\n        </tr>\n        <tr>\n            <td>confirmationNumber</td>\n            <td>The order confirmation number. Provide this number to the user. Use it when contacting Points for support.</td>\n        </tr>\n        <tr>\n            <td>createdAt</td>\n            <td>The <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601</a> time when the resource was created.</td>\n        </tr>\n        <tr>\n            <td>data</td>\n            <td>The details of the order.</td>\n        </tr>\n        <tr>\n            <td>orderType</td>\n            <td>\n                <p>The type of order. Can be one of:\n                    <ul>\n                        <li>&quot;EXCHANGE_CREDIT&quot; for credit orders</li>\n                        <li>&quot;REDEEM_DEBIT&quot; for debit orders</li>\n                    </ul>\n                    Contact Points to determine which order type you should use.\n                </p>\n            </td>\n        </tr>\n        <tr>\n            <td>status</td>\n            <td>\n                <p>The overall status of the order. Can be one of:\n                    <ul>\n                        <li>&quot;initial&quot; when the order is created</li>\n                        <li>&quot;debitFailed&quot; if the debit status is failure</li>\n                        <li>&quot;debitPending&quot; if the debit status is pending</li>\n                        <li>&quot;debitError&quot; if the debit status is systemError</li>\n                        <li>&quot;creditFailed&quot; if the credit status is failure</li>\n                        <li>&quot;creditPending&quot; if the credit status is pending</li>\n                        <li>&quot;creditError&quot; if the credit status is systemError</li>\n                        <li>&quot;complete&quot; if all primitives succeeded</li>\n                        <li>&quot;reversed&quot; if all primitives are reversed</li>\n                        <li>&quot;statusPending&quot; if the order has been updated and needs its status to be recalculated</li>\n                    </ul>\n                </p>\n            </td>\n        </tr>\n        <tr>\n            <td>type</td>\n            <td>The type of resource.</td>\n        </tr>\n        <tr>\n            <td>updatedAt</td>\n            <td>The <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601</a> time when the resource was last updated.</td>\n        </tr>\n        <tr>\n            <td>updates</td>\n            <td>\n                <p>A list of updates to transactions attached to this order. Each update contains:\n                    <ul>\n                        <li><strong>resource</strong>: a link to the transaction</li>\n                        <li><strong>status</strong>: the status of the transaction</li>\n                        <li><strong>type</strong>: the type of transaction</li>\n                        <li><strong>updatedAt</strong>: the timestamp when the transaction was updated</li>\n                    </ul>\n                </p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n";

/***/ }),
/* 158 */
/* unknown exports provided */
/* all exports used */
/*!********************************************!*\
  !*** ./app/documents/api/release-notes.md ***!
  \********************************************/
/***/ (function(module, exports) {

module.exports = "<h2 id=\"release-notes\">Release Notes</h2>\n<table>\n    <thead>\n        <tr>\n            <th>Release Date</th>\n            <th>Notes</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>2016-01-28</td>\n            <td>Added ability to filter LPs by name\n            </td>\n        </tr>\n        <tr>\n            <td>2015-12-08</td>\n            <td>Added member-details to sandbox permissions\n            </td>\n        </tr>\n        <tr>\n            <td>2015-10-28</td>\n            <td>Added sandbox permissions\n            </td>\n        </tr>\n        <tr>\n            <td>2015-10-14</td>\n            <td>Added time zone to accounts\n            <br>Added ability to update an account\n            </td>\n        </tr>\n        <tr>\n            <td>2015-09-16</td>\n            <td>Added ability to update transactionId for debits and credits\n            </td>\n        </tr>\n        <tr>\n            <td>2015-07-28</td>\n            <td>Added sandbox MVs\n            <br>Added identifying and authenticating factors for MVs\n            </td>\n        </tr>\n        <tr>\n            <td>2015-06-30</td>\n            <td>Added roles to accounts\n            </td>\n        </tr>\n        <tr>\n            <td>2015-06-19</td>\n            <td>Added hidden flag to LPs\n            </td>\n        </tr>\n        <tr>\n            <td>2015-06-10</td>\n            <td>Added ability to filter LPs by type\n            <br>Added claimCode to credits\n            </td>\n        </tr>\n        <tr>\n            <td>2015-05-14</td>\n            <td>Added ability to localize LPs\n            <br>Added MV request schema\n            </td>\n        </tr>\n        <tr>\n            <td>2015-05-14</td>\n            <td>Added ability to localize LPs\n            </td>\n        </tr>\n        <tr>\n            <td>2015-04-29</td>\n            <td>Added ability to get loyalty programs (LPs)\n            </td>\n        </tr>\n        <tr>\n            <td>2015-04-02</td>\n            <td>Added ability to get lists of debits and credits and update them\n            </td>\n        </tr>\n        <tr>\n            <td>2015-03-24</td>\n            <td>Added creditType to credits\n            <br>Added new sandbox mode behaviour for debits and credits\n            </td>\n        </tr>\n        <tr>\n            <td>2015-03-11</td>\n            <td>Added ability to update order status\n            </td>\n        </tr>\n        <tr>\n            <td>2015-02-10</td>\n            <td>Added orders\n            </td>\n        </tr>\n        <tr>\n            <td>2015-01-21</td>\n            <td>Removed ability to create an account via the API\n            <br>Added additional MV error codes\n            <br>Added systemError status for debits and credits\n            </td>\n        </tr>\n        <tr>\n            <td>2014-10-16</td>\n            <td>Removed billingInfo fields from debits and credits\n            <br>Added optional pic field to debits and credits\n            </td>\n        </tr>\n        <tr>\n            <td>2014-06-25</td>\n            <td>Added status to member validations\n            </td>\n        </tr>\n        <tr>\n            <td>2014-06-06</td>\n            <td>Added application and loyaltyProgram to transactions\n            </td>\n        </tr>\n        <tr>\n            <td>2014-05-28</td>\n            <td>Added account permissions\n            </td>\n        </tr>\n        <tr>\n            <td>2014-05-14</td>\n            <td>Added type, updatedAt, createdAt to all resources\n            </td>\n        </tr>\n        <tr>\n            <td>2014-04-23</td>\n            <td>Added list of apps\n            </td>\n        </tr>\n        <tr>\n            <td>2014-04-03</td>\n            <td>Added reports and report instances\n            </td>\n        </tr>\n        <tr>\n            <td>2014-02-19</td>\n            <td>Updated MV delegates\n            </td>\n        </tr>\n        <tr>\n            <td>2014-01-23</td>\n            <td>Added MV delegates\n            </td>\n        </tr>\n        <tr>\n            <td>2013-12-20</td>\n            <td>Added billingInfo fields to debits and credits\n            </td>\n        </tr>\n        <tr>\n            <td>2013-12-11</td>\n            <td>Added support for OPTIONS HTTP method\n            </td>\n        </tr>\n        <tr>\n            <td>2013-11-27</td>\n            <td>Added live permissions\n            <br>Added pending status for debit and credit transactions\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n";

/***/ }),
/* 159 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************************!*\
  !*** ./app/documents/api/report-instances-example.md ***!
  \*******************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-object\">Example Object</h4>\n<pre><code>{\n  &quot;contentType&quot;: &quot;application/json&quot;,\n  &quot;createdAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;/reports/&lt;report-id&gt;/instances/&lt;id&gt;&quot;\n    },\n    &quot;data&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;/reports/&lt;report-id&gt;/instances/&lt;id&gt;/data&quot;\n    },\n    &quot;report&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;/reports/&lt;report-id&gt;&quot;\n    }\n  },\n  &quot;status&quot;: &quot;success&quot;,\n  &quot;type&quot;: &quot;reportInstance&quot;,\n  &quot;updatedAt&quot;: &quot;2014-05-08T17:55:34.511304Z&quot;\n}\n</code></pre>";

/***/ }),
/* 160 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************!*\
  !*** ./app/documents/api/report-instances.md ***!
  \***********************************************/
/***/ (function(module, exports) {

module.exports = "<h2 id=\"report-instances\">Report Instances</h2>\n<p>A report instance is a record of a request to generate a copy of an application report. The report instance contains information about when it was created and the status of the request to generate the report. If the report generation was successful, the report instance contains the content type of the report data and a link to get the report data.</p>\n<h4 id=\"properties\">Properties</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>contentType</td>\n            <td>The content type of the data in the report instance.</td>\n        </tr>\n        <tr>\n            <td>createdAt</td>\n            <td>The <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601</a> time when the resource was created.</td>\n        </tr>\n        <tr>\n            <td>status</td>\n            <td>The status of the request to generate a report instance. The status can be success or failure.</td>\n        </tr>\n        <tr>\n            <td>type</td>\n            <td>The type of resource.</td>\n        </tr>\n        <tr>\n            <td>updatedAt</td>\n            <td>The <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601</a> time when the resource was last updated.</td>\n        </tr>\n    </tbody>\n</table>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n";

/***/ }),
/* 161 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************!*\
  !*** ./app/documents/api/reports-example.md ***!
  \**********************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-object\">Example Object</h4>\n<pre><code>{\n  &quot;createdAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n  &quot;description&quot;: &quot;Report on all transactions performed by my app&quot;,\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;/reports/&lt;id&gt;&quot;\n    },\n    &quot;instances&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;/reports/&lt;id&gt;/instances/&quot;\n    }\n  },\n  &quot;name&quot;: &quot;My App’s Transaction Report&quot;,\n  &quot;type&quot;: &quot;report&quot;,\n  &quot;updatedAt&quot;: &quot;2014-05-08T17:55:34.511304Z&quot;,\n  &quot;url&quot;: &quot;https://myapp.com/reports/report-name&quot;\n}\n</code></pre>";

/***/ }),
/* 162 */
/* unknown exports provided */
/* all exports used */
/*!**************************************!*\
  !*** ./app/documents/api/reports.md ***!
  \**************************************/
/***/ (function(module, exports) {

module.exports = "<h2 id=\"reports\">Reports</h2>\n<p>Reports allow applications to publish data that is accessible by other users of the LCP. Reports are registered with the LCP for a given application. The application provides the data for the report when the report is requested. A report definition includes the report name, description and a URL belonging to the application where the LCP requests the data.</p>\n<h4 id=\"properties\">Properties</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>createdAt</td>\n            <td>The <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601</a> time when the resource was created.</td>\n        </tr>\n        <tr>\n            <td>description</td>\n            <td>The description of the report.</td>\n        </tr>\n        <tr>\n            <td>name</td>\n            <td>The name of the report.</td>\n        </tr>\n        <tr>\n            <td>type</td>\n            <td>The type of resource.</td>\n        </tr>\n        <tr>\n            <td>updatedAt</td>\n            <td>The <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601</a> time when the resource was last updated.</td>\n        </tr>\n        <tr>\n            <td>url</td>\n            <td>The URL to access the report.</td>\n        </tr>\n    </tbody>\n</table>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n";

/***/ }),
/* 163 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************************!*\
  !*** ./app/documents/api/sandbox-credentials-example.md ***!
  \**********************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-object\">Example Object</h4>\n<pre><code>{\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;/sandbox-credentials/&lt;id&gt;&quot;\n    }\n  },\n  &quot;macAlgorithm&quot;: &quot;HMAC-SHA1&quot;,\n  &quot;macKey&quot;: &quot;&lt;macKey&gt;&quot;,\n  &quot;macKeyIdentifier&quot;: &quot;&lt;macKeyIdentifier&gt;&quot;,\n  &quot;type&quot;: &quot;sandboxCredential&quot;\n}\n</code></pre>";

/***/ }),
/* 164 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./app/documents/api/sandbox-credentials.md ***!
  \**************************************************/
/***/ (function(module, exports) {

module.exports = "<h2 id=\"sandbox-credentials\">Sandbox Credentials</h2>\n<p>Sandbox credentials authenticate your app to perform actions on the LCP. A set of sandbox credentials is created automatically when you create your app. App credentials are different for sandbox and live mode. Sandbox credentials are available at <code>/apps/&lt;app-id&gt;/sandbox-credentials</code> and are used to sign requests to <code>/lps</code>.</p>\n<h4 id=\"properties\">Properties</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>macAlgorithm</td>\n            <td>The MAC algorithm describes the algorithm used to create the signature.</td>\n        </tr>\n        <tr>\n            <td>macKey</td>\n            <td>The MAC key is the shared secret key. It should never be shared with anyone or transmitted in any request. Keep this key secure as you would any private key.</td>\n        </tr>\n        <tr>\n            <td>macKeyIdentifier</td>\n            <td>The MAC key identifier uniquely identifies the MAC key. The MAC key identifier is sent with each request to tell the server which MAC key was used to sign the request.</td>\n        </tr>\n        <tr>\n            <td>type</td>\n            <td>The type of resource.</td>\n        </tr>\n    </tbody>\n</table>\n\n\n\n\n\n\n\n\n";

/***/ }),
/* 165 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./app/documents/api/sandbox-mvs-example.md ***!
  \**************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-object\">Example Object</h4>\n<pre><code>{\n  &quot;sandboxResponses&quot;: [\n    {\n      &quot;request&quot;: {\n        &quot;identifyingFactors&quot;: {\n          &quot;firstName&quot;: &quot;Tony&quot;,\n          &quot;lastName&quot;: &quot;Smith&quot;,\n          &quot;memberId&quot;: &quot;99999999&quot;\n        },\n        &quot;authenticatingFactors&quot;: {\n          &quot;password&quot;: &quot;PASSWORD&quot;\n        }\n      },\n      &quot;response&quot;: {\n         &quot;error&quot;: &quot;INVALID_UPSTREAM_RESPONSE&quot;\n      }\n    },\n    {\n      &quot;request&quot;: {\n        &quot;identifyingFactors&quot;: {\n          &quot;firstName&quot;: &quot;Joe&quot;,\n          &quot;lastName&quot;: &quot;Smith&quot;,\n          &quot;memberId&quot;: &quot;12345678&quot;\n        },\n        &quot;authenticatingFactors&quot;: {\n          &quot;password&quot;: &quot;ABCDEFGH&quot;\n        }\n      },\n      &quot;response&quot;: {\n        &quot;balance&quot;: 205123\n      }\n    },\n    ...\n  ],\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/lps/&lt;lp-id&gt;/mvs/metadata/sandbox-responses&quot;\n    }\n  }\n}\n</code></pre>";

/***/ }),
/* 166 */
/* unknown exports provided */
/* all exports used */
/*!******************************************!*\
  !*** ./app/documents/api/sandbox-mvs.md ***!
  \******************************************/
/***/ (function(module, exports) {

module.exports = "<h2 id=\"sandbox-mvs\">Sandbox MVs</h2>\n<p>Each LP has a set of sandbox MVs that can be used for testing MVs in sandbox mode. If the MV request matches one of the sandbox MVs, the specified MV response or error is returned. If none of the sandbox MV requests match then UNKNOWN_MEMBER is returned.</p>\n<h4 id=\"properties\">Properties</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>sandboxResponses</td>\n            <td>A list of request/response pairs. Each request matches the <a href=\"#mv-request-schema\">MV request schema</a> for the LP. Each response can be either an MV response or an <a href=\"./?doc=reference-manual#errors\">error code</a> of INVALID_UPSTREAM_RESPONSE, INELIGIBLE, or MAXIMUM_ATTEMPTS_EXCEEDED.</td>\n        </tr>\n    </tbody>\n</table>\n\n\n\n\n\n\n\n\n";

/***/ }),
/* 167 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************************!*\
  !*** ./app/documents/api/sandbox-permissions-example.md ***!
  \**********************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-object\">Example Object</h4>\n<pre><code>{\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;/sandbox-permissions/&lt;id&gt;&quot;\n    }\n  },\n  &quot;loyaltyProgram&quot;: &quot;https://lcp.points.com/v1/lps/&lt;lp-id&gt;&quot;,\n  &quot;operations&quot;: [&quot;mvs&quot;, &quot;debits&quot;, &quot;credits&quot;],\n  &quot;type&quot;: &quot;sandboxPermission&quot;\n}\n</code></pre>";

/***/ }),
/* 168 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./app/documents/api/sandbox-permissions.md ***!
  \**************************************************/
/***/ (function(module, exports) {

module.exports = "<h2 id=\"sandbox-permissions\">Sandbox Permissions</h2>\n<p>Sandbox permissions describe what operations an application can do in sandbox mode for each loyalty program.</p>\n<h4 id=\"properties\">Properties</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>loyaltyProgram</td>\n            <td>The URL of the loyalty program.</td>\n        </tr>\n        <tr>\n            <td>operations</td>\n            <td>An array of operations that the application is permitted to do in sandbox mode for the LP.</td>\n        </tr>\n        <tr>\n            <td>type</td>\n            <td>The type of resource.</td>\n        </tr>\n    </tbody>\n</table>\n\n\n\n\n\n\n\n\n\n";

/***/ }),
/* 169 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************!*\
  !*** ./app/documents/api/update-a-credit-example.md ***!
  \******************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>PATCH https://lcp.points.com/v1/lps/&lt;lp-id&gt;/credits/&lt;id&gt;\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n{\n  &quot;status&quot;: &quot;success&quot;,\n  &quot;transactionId&quot;: &quot;15786560&quot;\n}\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>200 OK\n{\n  &quot;amount&quot;: 2000,\n  &quot;application&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;&quot;,\n  &quot;claimCode&quot;: &quot;TZ9E-9YHMHU-PDEE&quot;,\n  &quot;createdAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n  &quot;creditType&quot;: &quot;base&quot;,\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/lps/&lt;lp-id&gt;/credits/&lt;id&gt;&quot;\n    }\n  },\n  &quot;loyaltyProgram&quot;: &quot;https://lcp.points.com/v1/lps/&lt;lp-id&gt;&quot;,\n  &quot;memberValidation&quot;: &quot;https://lcp.points.com/v1/lps/&lt;lp-id&gt;/mvs/&lt;mv-id&gt;&quot;,\n  &quot;order&quot;: &quot;https://sandbox.lcp.points.com/v1/orders/&lt;order-id&gt;&quot;,\n  &quot;pic&quot;: &quot;ABC&quot;,\n  &quot;status&quot;: &quot;success&quot;,\n  &quot;transactionId&quot;: &quot;15786560&quot;,\n  &quot;type&quot;: &quot;credit&quot;,\n  &quot;updatedAt&quot;: &quot;2014-05-08T17:55:34.511304Z&quot;\n}\n</code></pre>";

/***/ }),
/* 170 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************!*\
  !*** ./app/documents/api/update-a-credit.md ***!
  \**********************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"update-an-credit\">Update an Credit</h3>\n<p>Points or the loyalty program may update the status of live credits to success or failure when pending credits are processed or to correct system errors caused by connection problems. You can test how your application responds to these changes by updating the status of sandbox credits using your <a href=\"#account-credentials\">account credentials</a>.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>lp-id</td>\n            <td>The identifier of the <a href=#loyalty-programs>loyalty program</a> (LP).</td>\n        </tr>\n        <tr>\n            <td>id</td>\n            <td>The identifier of the credit.</td>\n        </tr>\n        <tr>\n            <td>status</td>\n            <td>The updated status of the credit (optional). Must be &quot;failure&quot; or &quot;success&quot;.</td>\n        </tr>\n        <tr>\n            <td>transactionId</td>\n            <td>The updated transaction ID of the credit (optional).</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>The credit resource if successful. Returns an <a href=\"./?doc=reference-manual#errors\">error</a> if you do not have permission to change the credit or if the new status is not valid.</p>\n";

/***/ }),
/* 171 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************************!*\
  !*** ./app/documents/api/update-a-debit-example.md ***!
  \*****************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>PATCH https://lcp.points.com/v1/lps/&lt;lp-id&gt;/debits/&lt;id&gt;\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n{\n  &quot;status&quot;: &quot;success&quot;,\n  &quot;transactionId&quot;: &quot;15786561&quot;\n}\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>200 OK\n{\n  &quot;amount&quot;: 2000,\n  &quot;application&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;&quot;,\n  &quot;createdAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/lps/&lt;lp-id&gt;/debits/&lt;id&gt;&quot;\n    }\n  },\n  &quot;loyaltyProgram&quot;: &quot;https://lcp.points.com/v1/lps/&lt;lp-id&gt;&quot;,\n  &quot;memberValidation&quot;: &quot;https://lcp.points.com/v1/lps/&lt;lp-id&gt;/mvs/&lt;mv-id&gt;&quot;,\n  &quot;order&quot;: &quot;https://sandbox.lcp.points.com/v1/orders/&lt;order-id&gt;&quot;,\n  &quot;pic&quot;: &quot;ABC&quot;,\n  &quot;status&quot;: &quot;success&quot;,\n  &quot;transactionId&quot;: &quot;15786561&quot;,\n  &quot;type&quot;: &quot;debit&quot;,\n  &quot;updatedAt&quot;: &quot;2014-05-08T17:55:34.511304Z&quot;\n}\n</code></pre>";

/***/ }),
/* 172 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************!*\
  !*** ./app/documents/api/update-a-debit.md ***!
  \*********************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"update-an-debit\">Update an Debit</h3>\n<p>Points or the loyalty program may update the status of live debits to success or failure when pending debits are processed or to correct system errors caused by connection problems. You can test how your application responds to these changes by updating the status of sandbox debits using your <a href=\"#account-credentials\">account credentials</a>.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>lp-id</td>\n            <td>The identifier of the <a href=#loyalty-programs>loyalty program</a> (LP).</td>\n        </tr>\n        <tr>\n            <td>id</td>\n            <td>The identifier of the debit.</td>\n        </tr>\n        <tr>\n            <td>status</td>\n            <td>The updated status of the debit (optional). Must be &quot;failure&quot; or &quot;success&quot;.</td>\n        </tr>\n        <tr>\n            <td>status</td>\n            <td>The updated transaction ID of the debit (optional).</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>The debit resource if successful. Returns an <a href=\"./?doc=reference-manual#errors\">error</a> if you do not have permission to change the debit or if the new status is not valid.</p>\n";

/***/ }),
/* 173 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./app/documents/api/update-a-mv-example.md ***!
  \**************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>PATCH https://lcp.points.com/v1/lps/&lt;lp-id&gt;/mvs/&lt;id&gt;\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n{\n  &quot;order&quot;: &quot;https://sandbox.lcp.points.com/v1/orders/&lt;order-id&gt;&quot;\n}\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>200 OK\n{\n  &quot;application&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;&quot;,\n  &quot;authenticatingFactors&quot;: {\n    &quot;password&quot;: &quot;*****&quot;\n  },\n  &quot;balance&quot;: 2000,\n  &quot;createdAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n  &quot;identifyingFactors&quot;: {\n    &quot;firstName&quot;: &quot;John&quot;,\n    &quot;lastName&quot;: &quot;Doe&quot;,\n    &quot;memberId&quot;: &quot;1234&quot;\n  },\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/mvs/&lt;id&gt;&quot;\n    }\n  },\n  &quot;loyaltyProgram&quot;: &quot;https://lcp.points.com/v1/lps/&lt;lp-id&gt;&quot;,\n  &quot;order&quot;: &quot;https://sandbox.lcp.points.com/v1/orders/&lt;order-id&gt;&quot;,\n  &quot;status&quot;: &quot;success&quot;,\n  &quot;type&quot;: &quot;memberValidation&quot;,\n  &quot;updatedAt&quot;: &quot;2014-05-08T17:55:34.511304Z&quot;\n}\n</code></pre>";

/***/ }),
/* 174 */
/* unknown exports provided */
/* all exports used */
/*!******************************************!*\
  !*** ./app/documents/api/update-a-mv.md ***!
  \******************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"update-an-mv\">Update an MV</h3>\n<p>Update a member validation to add it to an order.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>lp-id</td>\n            <td>The identifier of the loyalty program (LP).</td>\n        </tr>\n        <tr>\n            <td>id</td>\n            <td>The identifier of the member validation (MV).</td>\n        </tr>\n        <tr>\n            <td>order</td>\n            <td>Link to the order that this member validation belongs to.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>The MV object if it was updated successfully. Returns an <a href=\"./?doc=reference-manual#errors\">error</a> if the MV does not exist.</p>\n";

/***/ }),
/* 175 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************!*\
  !*** ./app/documents/api/update-a-report-example.md ***!
  \******************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>PUT https://lcp.points.com/v1/apps/&lt;app-id&gt;/reports/&lt;id&gt;\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n{\n  &quot;description&quot;: &quot;Report on all transactions performed by my app&quot;,\n  &quot;name&quot;: &quot;My App’s Transaction Report&quot;,\n  &quot;url&quot;: &quot;https://myapp.com/reports/report-name&quot;\n}\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>200 OK\n{\n  &quot;createdAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n  &quot;description&quot;: &quot;Report on all transactions performed by my app&quot;,\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;/reports/&lt;id&gt;&quot;\n    },\n    &quot;instances&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;/reports/&lt;id&gt;/instances/&quot;\n    }\n  },\n  &quot;name&quot;: &quot;My App’s Transaction Report&quot;,\n  &quot;type&quot;: &quot;report&quot;,\n  &quot;updatedAt&quot;: &quot;2014-05-08T17:55:34.511304Z&quot;,\n  &quot;url&quot;: &quot;https://myapp.com/reports/report-name&quot;\n}\n</code></pre>";

/***/ }),
/* 176 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************!*\
  !*** ./app/documents/api/update-a-report.md ***!
  \**********************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"update-a-report\">Update a Report</h3>\n<p>Update the name, description or URL of an application report. Provide a name and description for your report as well as a URL where the LCP can get the report data when it is requested by a user.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>app-id</td>\n            <td>The identifier of the application.</td>\n        </tr>\n        <tr>\n            <td>id</td>\n            <td>The identifier of the report.</td>\n        </tr>\n        <tr>\n            <td>description</td>\n            <td>The description of the report (optional).</td>\n        </tr>\n        <tr>\n            <td>name</td>\n            <td>The name of the report.</td>\n        </tr>\n        <tr>\n            <td>url</td>\n            <td>The URL to access the report. Must be HTTPS.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>The updated report object if it was updated successfully. Returns an <a href=\"./?doc=reference-manual#errors\">error</a> if the report does not exist or if the validation of the JSON fields failed.</p>\n";

/***/ }),
/* 177 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************************************!*\
  !*** ./app/documents/api/update-account-permissions-example.md ***!
  \*****************************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>PUT https://lcp.points.com/v1/apps/&lt;app-id&gt;/account-permissions\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n{\n  &quot;support&quot;: [\n    &quot;https://lcp.points.com/v1/accounts/&lt;account-id1&gt;&quot;,\n    &quot;https://lcp.points.com/v1/accounts/&lt;account-id2&gt;&quot;\n  ]\n}\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>200 OK\n{\n  &quot;createdAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;/account-permissions&quot;\n    }\n  },\n  &quot;support&quot;: [\n    &quot;https://lcp.points.com/v1/accounts/&lt;account-id1&gt;&quot;,\n    &quot;https://lcp.points.com/v1/accounts/&lt;account-id2&gt;&quot;\n  ],\n  &quot;type&quot;: &quot;accountPermission&quot;,\n  &quot;updatedAt&quot;: &quot;2014-05-08T17:55:34.511304Z&quot;\n}\n</code></pre>";

/***/ }),
/* 178 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************************!*\
  !*** ./app/documents/api/update-account-permissions.md ***!
  \*********************************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"update-account-permissions\">Update Account Permissions</h3>\n<p>Update the list of accounts that have permission to access the application and its resources.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>app-id</td>\n            <td>The identifier of the application.</td>\n        </tr>\n        <tr>\n            <td>support</td>\n            <td>A list of <a href=\"#accounts\">accounts</a> that have permission to support the application. Accounts with support permissions have read-only access to the application and all of the application’s transactions.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>The updated account permissions if it was updated successfully. Returns an <a href=\"./?doc=reference-manual#errors\">error</a> if the application does not exist or if the validation of the JSON fields failed.</p>\n";

/***/ }),
/* 179 */
/* unknown exports provided */
/* all exports used */
/*!********************************************************!*\
  !*** ./app/documents/api/update-an-account-example.md ***!
  \********************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>PATCH https://lcp.points.com/v1/accounts/&lt;id&gt;\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n{\n  &quot;firstName&quot;: &quot;First Name&quot;,\n  &quot;lastName&quot;: &quot;Last Name&quot;,\n  &quot;organizationName&quot;: &quot;Company&quot;,\n  &quot;phone&quot;: &quot;416-555-1234&quot;,\n  &quot;timeZone&quot;: &quot;America/Toronto&quot;\n}\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>200 OK\n{\n  &quot;accountCredentials&quot;: [\n    {\n      &quot;links&quot;: {\n        &quot;self&quot;: {\n          &quot;href&quot;: &quot;https://lcp.points.com/v1/accounts/&lt;id&gt;/account-credentials/&lt;ac-id&gt;&quot;\n        }\n      },\n      &quot;macAlgorithm&quot;: &quot;HMAC-SHA1&quot;,\n      &quot;macKey&quot;: &quot;&lt;macKey&gt;&quot;,\n      &quot;macKeyIdentifier&quot;: &quot;&lt;macKeyIdentifier&gt;&quot;\n    }\n  ],\n  &quot;createdAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n  &quot;email&quot;: &quot;youremail@yourcompany.com&quot;,\n  &quot;firstName&quot;: &quot;First Name&quot;,\n  &quot;lastName&quot;: &quot;Last Name&quot;,\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/accounts/&lt;id&gt;&quot;\n    },\n    &quot;friendly&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/accounts/youremail%40yourcompany.com&quot;\n    }\n  },\n  &quot;organizationName&quot;: &quot;Company&quot;,\n  &quot;phone&quot;: &quot;416-555-1234&quot;,\n  &quot;roles&quot;: [\n    &quot;appDeveloper&quot;\n  ],\n  &quot;timeZone&quot;: &quot;America/Toronto&quot;,\n  &quot;type&quot;: &quot;account&quot;,\n  &quot;updatedAt&quot;: &quot;2014-05-08T17:55:34.511304Z&quot;\n}\n</code></pre>";

/***/ }),
/* 180 */
/* unknown exports provided */
/* all exports used */
/*!************************************************!*\
  !*** ./app/documents/api/update-an-account.md ***!
  \************************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"update-an-account\">Update an Account</h3>\n<p>Updates your account details.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>id</td>\n            <td>The identifier of the account.</td>\n        </tr>\n        <tr>\n            <td>firstName</td>\n            <td>Your first name (optional).</td>\n        </tr>\n        <tr>\n            <td>lastName</td>\n            <td>Your last name (optional).</td>\n        </tr>\n        <tr>\n            <td>organizationName</td>\n            <td>Your organization (optional).</td>\n        </tr>\n        <tr>\n            <td>phone</td>\n            <td>Your phone number (optional).</td>\n        </tr>\n        <tr>\n            <td>timeZone</td>\n            <td>Your time zone (optional). Use time zones in the <a href=\"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\">tz database</a>.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>The account object if it was updated successfully, otherwise returns an <a href=\"./?doc=reference-manual#errors\">error</a>.</p>\n";

/***/ }),
/* 181 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************!*\
  !*** ./app/documents/api/update-an-order-example.md ***!
  \******************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>PATCH https://sandbox.lcp.points.com/v1/orders/&lt;id&gt;\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n{\n  &quot;status&quot;: &quot;complete&quot;,\n}\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>200 OK\n{\n  &quot;application&quot;: &quot;https://sandbox.lcp.points.com/v1/apps/&lt;app-id&gt;&quot;,\n  &quot;confirmationNumber&quot;: &quot;3902-2266-8404-8538-1721&quot;,\n  &quot;createdAt&quot;: &quot;2014-02-26T17:47:00.000000Z&quot;,\n  &quot;data&quot;: {\n    &quot;clientIpAddress&quot;: &quot;127.0.0.1&quot;, \n    &quot;clientUserAgent&quot;: &quot;Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:42.0) Gecko/20100101 Firefox/42.0&quot;, \n    &quot;language&quot;: &quot;en-US&quot;, \n    &quot;orderDetails&quot;: {\n      &quot;basePoints&quot;: 2000, \n      &quot;loyaltyProgram&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;&quot;\n    }, \n    &quot;user&quot;: {\n      &quot;email&quot;: &quot;jdoe@example.com&quot;,\n      &quot;firstName&quot;: &quot;John&quot;, \n      &quot;lastName&quot;: &quot;Doe&quot;, \n      &quot;memberId&quot;: &quot;1234&quot;, \n      &quot;memberValidation&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/mvs/&lt;mv-id&gt;&quot;\n    }\n  },\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://sandbox.lcp.points.com/v1/orders/&lt;id&gt;&quot;\n    }\n  },\n  &quot;orderType&quot;: &quot;EXCHANGE_CREDIT&quot;,\n  &quot;status&quot;: &quot;complete&quot;,\n  &quot;type&quot;: &quot;order&quot;,\n  &quot;updatedAt&quot;: &quot;2014-02-26T17:50:00.000000Z&quot;,\n  &quot;updates&quot;: [\n    {\n      &quot;resource&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/mvs/&lt;mv-id&gt;&quot;,\n      &quot;status&quot;: &quot;success&quot;,\n      &quot;type&quot;: &quot;memberValidation&quot;,\n      &quot;updatedAt&quot;: &quot;2014-02-26T17:47:30.000000Z&quot;\n    },\n    {\n      &quot;resource&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/&lt;lp-id&gt;/credits/&lt;credit-id&gt;&quot;,\n      &quot;status&quot;: &quot;success&quot;,\n      &quot;type&quot;: &quot;credit&quot;,\n      &quot;updatedAt&quot;: &quot;2014-02-26T17:49:00.000000Z&quot;\n    }\n  ]\n}\n</code></pre>";

/***/ }),
/* 182 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************!*\
  !*** ./app/documents/api/update-an-order.md ***!
  \**********************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"update-an-order\">Update an Order</h3>\n<p>Update the status of an order. The application must manage the order status. When a primitive is added to an order, the order status changes to &quot;statusPending&quot;. These orders require their status to be updated.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>id</td>\n            <td>The identifier of the order.</td>\n        </tr>\n        <tr>\n            <td>status</td>\n            <td>\n                <p>The new status of the order. Can be one of:\n                    <ul>\n                        <li>&quot;debitFailed&quot; if the debit status is failure</li>\n                        <li>&quot;debitPending&quot; if the debit status is pending</li>\n                        <li>&quot;debitError&quot; if the debit status is systemError</li>\n                        <li>&quot;creditFailed&quot; if the credit status is failure</li>\n                        <li>&quot;creditPending&quot; if the credit status is pending</li>\n                        <li>&quot;creditError&quot; if the credit status is systemError</li>\n                        <li>&quot;complete&quot; if all primitives succeeded</li>\n                        <li>&quot;reversed&quot; if all primitives are reversed</li>\n                    </ul>\n                </p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>The order object if it was updated successfully. Returns an <a href=\"./?doc=reference-manual#errors\">error</a> if the order does not exist or if the order status cannot be updated.</p>\n";

/***/ }),
/* 183 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************************************!*\
  !*** ./app/documents/api/update-sandbox-permissions-example.md ***!
  \*****************************************************************/
/***/ (function(module, exports) {

module.exports = "<h4 id=\"example-request\">Example Request</h4>\n<pre><code>PATCH https://lcp.points.com/v1/apps/&lt;app-id&gt;/sandbox-permissions/&lt;id&gt;\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n{\n  &quot;operations&quot;: [&quot;mvs&quot;, &quot;debits&quot;, &quot;credits&quot;]\n}\n</code></pre><h4 id=\"example-response\">Example Response</h4>\n<pre><code>200 OK\n{\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/apps/&lt;app-id&gt;/sandbox-permissions/&lt;id&gt;&quot;\n    }\n  },\n  &quot;loyaltyProgram&quot;: &quot;https://lcp.points.com/v1/lps/&lt;lp-id&gt;&quot;,\n  &quot;operations&quot;: [&quot;mvs&quot;, &quot;debits&quot;, &quot;credits&quot;],\n  &quot;type&quot;: &quot;sandboxPermission&quot;\n}\n</code></pre>";

/***/ }),
/* 184 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************************!*\
  !*** ./app/documents/api/update-sandbox-permissions.md ***!
  \*********************************************************/
/***/ (function(module, exports) {

module.exports = "<h3 id=\"update-sandbox-permissions\">Update Sandbox Permissions</h3>\n<p>Updates permissions for an application to perform operations in sandbox mode on an LP.</p>\n<h4 id=\"parameters\">Parameters</h4>\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>app-id</td>\n            <td>The identifier of the application.</td>\n        </tr>\n        <tr>\n            <td>id</td>\n            <td>The identifier of the sandbox permissions object.</td>\n        </tr>\n        <tr>\n            <td>operations</td>\n            <td>An array of operations that the applications is permitted to do in sandbox mode for the LP. Must be one or more of &quot;mvs&quot;, &quot;member-details&quot;, &quot;mv-delegates&quot;, &quot;debits&quot;, &quot;credits&quot;, &quot;credit-delegates&quot;.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h4 id=\"returns\">Returns</h4>\n<p>The sandbox permissions object if it was created successfully. Returns an <a href=\"./?doc=reference-manual#errors\">error</a> if the app or sandbox permissions object doesn’t exist or if an invalid operation is provided.</p>\n";

/***/ }),
/* 185 */
/* unknown exports provided */
/* all exports used */
/*!******************************************!*\
  !*** ./app/documents/getting-started.md ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<h1 id=\"lcp-getting-started-guide\">LCP Getting Started Guide</h1>\n<p>For Points Loyalty Commerce Platform - Version 1.0</p>\n<h2 id=\"document-overview\">Document Overview</h2>\n<p>The purpose of this document is to provide a beginner’s guide to the Points\nLoyalty Commerce Platform (LCP). You will find below an introduction to the LCP,\nthings you need to know before you get started and a step-by-step guide on how\nto use the APIs to check member balances. To accomplish this, this document will\nintroduce you to the <code>/accounts</code>, <code>/apps</code> and <code>/lps</code> resources that are exposed\nin the API. The sample code provided uses\n<a href=\"http://en.wikipedia.org/wiki/CURL\">cURL</a> to communicate with the LCP. For a\nmore detailed description of the LCP and its capabilities see the <a href=\"./?doc=reference-manual\">LCP Reference\nManual</a> and the <a href=\"./?doc=api-reference\">LCP API\nReference</a>.</p>\n<h2 id=\"introducing-the-loyalty-commerce-platform-api\">Introducing the Loyalty Commerce Platform API</h2>\n<p>The LCP&#39;s capabilities are exposed to developers through a <a href=\"https://en.wikipedia.org/wiki/Representational_state_transfer#RESTful_web_APIs\">RESTful web\nAPI</a>.\nThe API consists of a set of resources that can be operated on using standard\nHTTP methods. The top-level resources in the LCP are accounts, apps, and lps.</p>\n<p><strong>Accounts</strong> - Your developer account information and credentials are stored\nunder <code>/accounts</code>. Once you create your account you can access it at\n<code>/accounts/&lt;account-id&gt;</code></p>\n<p><strong>Apps</strong> - Your apps are stored under the <code>/apps</code> endpoint. Each app will be\ngiven a unique ID under <code>/apps</code>.</p>\n<p><strong>LPs</strong> - Loyalty programs (LPs) are stored under <code>/lps</code>. Each LP will have it’s\nown ID under <code>/lps</code>.</p>\n<p>Some actions can be performed on the collection of resources, while others must\nbe performed on individual resources. Resources can be created, read, updated,\nand deleted using standard HTTP methods.</p>\n<p><strong>POST</strong> - Used to create a resource by sending resource data to the collection.\nIf successful, returns a <code>201 (Created)</code> status code with a Location header that\nspecifies the location of the newly created resource. All method parameters must\nbe passed as part of request body using JSON.</p>\n<p><strong>GET</strong> - Used to retrieve a resource from the LCP. This operation is\n<a href=\"http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.1.2\">idempotent</a> and\nhas no side effects from submitting the same request multiple times. If\nsuccessful, returns a <code>200 (OK)</code> status code with the resource content.</p>\n<p><strong>PUT</strong> - Used to update an existing resource. This operation is\n<a href=\"http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.1.2\">idempotent</a> and\nhas no side effects from submitting the same request multiple times. If\nsuccessful, returns a <code>200 (OK)</code> status code with the resource content. All\nmethod parameters must be passed as part of request body using JSON.</p>\n<p><strong>DELETE</strong> - Used to delete a resource. This operation is\n<a href=\"http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.7\">idempotent</a> and\nhas no side effects from submitting same request multiple times. If successful,\nreturns a <code>204 (No Content)</code> status code with an empty response body.</p>\n<p><strong>OPTIONS</strong> - Used to determine which of the above operations are permitted for\na given resource. If the resource exists, returns a <code>200 (OK)</code> status code with the\nlist of permitted HTTP methods in the Allow header.</p>\n<p>All request and response payloads are <a href=\"http://en.wikipedia.org/wiki/UTF8\">UTF8</a>\nencoded <a href=\"http://en.wikipedia.org/wiki/JSON\">JSON</a>.\n<a href=\"http://en.wikipedia.org/wiki/Https\">HTTPS</a> is used for all requests to ensure\nsecure communication. When consuming APIs in the LCP, developers must use <a href=\"http://tools.ietf.org/html/draft-ietf-oauth-v2-http-mac-02\">OAuth\n2.0 Message Authentication Code (MAC) Tokens (draft\n02)</a> to authenticate\nthemselves.\n<a href=\"https://github.com/Points/Loyalty-Commerce-Platform/tree/master/util\">Utilities</a>\nare available to simplify the request signing process.  See the\n<a href=\"#security\">Security</a> section of this document for more details.</p>\n<h2 id=\"things-you-should-know-about-using-the-lcp\">Things You Should Know About Using the LCP</h2>\n<p>The Loyalty Commerce Platform (LCP) allows you to write apps that can access\nmany loyalty programs. The LCP handles the complexity of working with each\nloyalty program, creating one simple interface for working with any number of\nprograms.</p>\n<p><img src=\"" + __webpack_require__(/*! ../images/getting-started.png */ 23) + "\" alt=\"Getting Started\"></p>\n<h3 id=\"sandbox-vs-live-mode\">Sandbox vs. Live Mode</h3>\n<p>The LCP supports two different modes of operation: sandbox mode and live mode.\nDuring development, your application will operate in sandbox mode so that it\ndoesn’t make changes to any loyalty program member’s account. In sandbox mode,\nthe LCP never communicates with the loyalty program. All operations are\nsimulated. When you&#39;re ready to deploy your application, Points will promote\nyour application to live mode.</p>\n<p>Sandbox mode is accessed through <code>https://sandbox.lcp.points.com</code> while live mode\nthrough <code>https://lcp.points.com</code>. Each app has two sets of credentials to access\nthe LCP: one set for sandbox mode and another set for live mode. When accessing\nthe LCP in sandbox mode, the sandbox credentials must be used. When your app is\npromoted to live mode, Points will provide you with live mode credentials.</p>\n<h3 id=\"security\">Security</h3>\n<p>This section describes things you will need to know about LCP security to get\nyou started with building applications on the LCP.</p>\n<p><strong>All requests to and responses from the LCP are made using HTTPS.</strong> Using HTTPS\nhas a couple of benefits:</p>\n<ol>\n<li>HTTPS protects network traffic from eavesdropping by encrypting all traffic\nto and from the LCP so that only the sender and receiver are able to read\nrequests and responses.</li>\n<li>HTTPS permits clients to verify the identity of the server to ensure the\ncorrect server is receiving its requests.</li>\n</ol>\n<p><strong>All requests include an HTTP Authorization header</strong> to enable the LCP to\nvalidate the sender’s identity. <a href=\"http://tools.ietf.org/html/draft-ietf-oauth-v2-http-mac-02\">OAuth 2.0 Message Authentication Code (MAC)\nTokens</a>\nare used to sign all requests to the LCP after you’ve created your account.\nOAuth 2.0 MAC is an evolving variant of OAuth 2.0.</p>\n<p>MAC tokens provide enhanced security over OAuth 2.0 Bearer tokens because unlike\nBearer tokens, MAC tokens are never sent between the client and the server. A\nbearer token is a shared secret key that is passed from the client to the server\nfor authentication. However, because bearer tokens involves transmitting the\nshared secret key between the client and the server, it can be vulnerable to\nattack if a third party gains access to any HTTP request. MAC tokens avoid this\nsecurity vulnerability by never transmitting the shared secret key. Instead the\nclient sends a signature that is generated using the shared secret key and\ndetails about the request. The server also generates the signature using the\nsame key and request details. If the signatures match then the server knows that\nthe signatures were generated using the same key and that the message was not\nmodified during transmission.</p>\n<p>The downside of MAC tokens is that the standard is still evolving and has\nlimited support at this time. This version of the LCP complies with <a href=\"http://tools.ietf.org/html/draft-ietf-oauth-v2-http-mac-02\">draft 02 of\nthe OAuth 2.0 MAC\nstandard</a>. When\nusing this scheme it is highly recommended that you use one of the <a href=\"https://github.com/Points/Loyalty-Commerce-Platform/tree/master/util\">LCP Client\nUtilities</a> to issue\nplatform requests because these utilities will compute MACs for you.</p>\n<p>The credentials required for MAC authentication include a MAC key identifier, a\nMAC key and a MAC algorithm. Below is an example of a JSON document representing\nthe credentials for use with MAC authentication.</p>\n<pre><code>{\n  &quot;macKeyIdentifier&quot;: &quot;97ee420faaa343d4a04b7378b319b48b&quot;,\n  &quot;macKey&quot;: &quot;NyWslT0Oe7ZNJynyUIwg-SRj3A44DD_lrH6_-dwZ6E4&quot;,\n  &quot;macAlgorithm&quot;: &quot;HMAC-SHA1&quot;\n}\n</code></pre><p>The MAC key identifier uniquely identifies the MAC key. The MAC key identifier\nis sent with each request to tell the server which MAC key was used to sign the\nrequest. The MAC key is the shared secret key. It should never be shared with\nanyone or transmitted in any request. Keep this key secure as you would any\nprivate key. Finally, the MAC algorithm describes the algorithm used to create\nthe signature.</p>\n<p>The LCP defines 2 different types of credentials:</p>\n<ol>\n<li><strong>Account credentials</strong><ul>\n<li>Account credentials authenticate you to perform actions on your developer account.</li>\n<li>A set of account credentials is created automatically when you create your developer account.</li>\n<li>Account credentials are the same for both sandbox and live mode.</li>\n<li>They are available at <code>/accounts/&lt;account-id&gt;</code>.</li>\n<li>They are used to sign requests to <code>/accounts</code> and <code>/apps</code>.</li>\n</ul>\n</li>\n<li><strong>Application credentials</strong><ul>\n<li>Application credentials authenticate your app to perform actions on the LCP.</li>\n<li>Each app has two sets of application credentials: one for sandbox mode and one for live mode.</li>\n<li>A set of sandbox credentials is created automatically when you create an app.</li>\n<li>Live credentials are created by Points when your app is promoted to live mode.</li>\n<li>Application credentials are available at <code>/apps/&lt;app-id&gt;</code>.</li>\n<li>They are used to sign requests to <code>/lps</code>.</li>\n</ul>\n</li>\n</ol>\n<p>If your credentials are compromised, you can create additional credentials and\ndelete your existing credentials. See the <a href=\"./?doc=api-reference\">LCP API\nReference</a>\nfor details.</p>\n<h3 id=\"hateoas\">HATEOAS</h3>\n<p>HATEOAS or <a href=\"http://en.wikipedia.org/wiki/HATEOAS\">Hypermedia as the Engine of Application\nState</a> is a characteristic of REST APIs.\nIn practical terms, it means each response from the LCP contains URLs to other\nresources that are relevant to the current resource. This helps makes the API\ndiscoverable and means you don’t need to know how to construct URLs to access\nthe LCP platform after the first request. In addition, if resource locations are\nmoved in a later version of the API, your application can automatically follow\nthe new links without modification. All the information necessary to navigate\nthe API is in the resource itself.</p>\n<p>JSON response documents that are returned by the LCP contain a &quot;links&quot; property.\nThis property contains URLs that help you consume further resources within the\nLCP REST API. For example:</p>\n<pre><code>{\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/accounts/1234&quot;\n    },\n    &quot;friendly&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/accounts/email@company.com&quot;\n    }\n  }\n}\n</code></pre><p>All links sections provided by the LCP contain a &quot;self&quot; link that represents a\nURL that can be used to obtain the document again if needed.</p>\n<p>Some calls also return a URL called &quot;friendly&quot; which contains a more\nuser-friendly and readable URL to consume a particular resource.</p>\n<h2 id=\"getting-started\">Getting Started</h2>\n<p>Now that you&#39;ve read through some of the background information and familiarized\nyourself with some of the key principles, you&#39;re ready to dive in. In this section\nyou&#39;ll find a set of steps needed to start working with the Loyalty Commerce Platform\n(LCP). By following these steps, you&#39;ll have everything you need to to build a\nuniversal balance checker to retrieve member balances across multiple loyalty\nprograms. The steps needed are:</p>\n<ol>\n<li>Create an account</li>\n<li>Create an app</li>\n<li>Get your app&#39;s sandbox credentials</li>\n<li>Perform a member validation (MV)</li>\n</ol>\n<h3 id=\"create-an-account\">Create an Account</h3>\n<p>To create a universal balance checker, your first step is to create an LCP developer\naccount. A developer account allows you to create one or more applications that\ninterface with the LCP.</p>\n<p>To create your developer account, go to the <a href=\"https://admin.lcp.points.com/\">LCP\nAdmin</a> and select &quot;Sign Up&quot;. Follow the instructions\nto create your account.</p>\n<h3 id=\"create-an-app\">Create an App</h3>\n<p>Once logged into your account, click on &quot;Apps&quot; in the left-hand navigation to see\nyour list of apps.</p>\n<p><img src=\"" + __webpack_require__(/*! ../images/empty-app-list.png */ 21) + "\" alt=\"Empty App List\"></p>\n<p>There are no apps so far, so create one by clicking the &quot;Create a new App&quot; button.\nFill in the name and description of your app and click &quot;Create App&quot;.</p>\n<p><img src=\"" + __webpack_require__(/*! ../images/create-an-app.png */ 20) + "\" alt=\"Create An App\"></p>\n<p>You&#39;ve now created your first app.</p>\n<p><img src=\"" + __webpack_require__(/*! ../images/example-app.png */ 22) + "\" alt=\"Example App\"></p>\n<h3 id=\"get-your-app-s-sandbox-credentials\">Get your App&#39;s Sandbox Credentials</h3>\n<p>To access the LCP API, your app needs credentials to authenticate with the LCP. There\nare two types of application credentials: sandbox credentials and live credentials.\nWhen developing your application, you will use sandbox credentials to make requests\nin sandbox mode. Sandbox mode simulates all transactions with the loyalty programs.\nOnce you&#39;re ready to promote your application to live mode, Points will issue you\nlive credentials. For now, your app only has sandbox credentials.</p>\n<p>Click &quot;Show Key&quot; to view your sandbox credentials. You need to re-enter your password\nto confirm your identity.</p>\n<p><img src=\"" + __webpack_require__(/*! ../images/sandbox-credentials.png */ 26) + "\" alt=\"Sandbox Credentials\"></p>\n<p>The MAC key identifier tells the LCP which MAC key you are using. The MAC key is a\nshared secret key between you and the platform that you will use to sign requests.\nKeep it safe as you would a private cryptographic key. It should never be shared with\nanyone or sent directly to the LCP.</p>\n<h3 id=\"perform-a-member-validation-mv-\">Perform a Member Validation (MV)</h3>\n<p>Now you&#39;re ready to make API requests. A universal balance checker needs to retrieve\nthe balance in a loyalty program member’s account. This is done by performing a\nmember validation or MV. An MV authenticates a member of a loyalty program and\nretrieves their balance.</p>\n<p>Click on &quot;Loyalty Programs&quot; in the left-hand navigation to see the list of loyalty\nprograms that are supported. You can also get the list of loyalty programs through\nthe <a href=\"./?doc=api-reference#list-all-lps\">API</a>. Let&#39;s start with the Flying Blue program\nfrom Air France KLM. Click on &quot;FlyingBlue&quot;. The LP URL provides the base URL for the\nloyalty program. Operations against the loyalty program are under this URL. The LP URL is\nfor live mode. Instead, let&#39;s use the LP URL for sandbox mode by changing the server from\n&quot;lcp.points.com&quot; to &quot;sandbox.lcp.points.com&quot;:</p>\n<pre><code>https://sandbox.lcp.points.com/v1/lps/3b6a77e6-cb40-4b28-a146-341c5862fab6\n</code></pre><p>To perform a member validation for Flying Blue in sandbox mode, POST to:</p>\n<pre><code>https://sandbox.lcp.points.com/v1/lps/3b6a77e6-cb40-4b28-a146-341c5862fab6/mvs/\n</code></pre><p>and provide the member’s credentials in the body of the request as a JSON object. The\nmember credentials required for an MV vary for each loyalty program. For example, some\nloyalty programs may require a member ID and password, while others may require a first\nname, last name, and member ID. To determine which fields are required for a particular\nloyalty program, you can get its <a href=\"./?doc=api-reference#mv-request-schema\">MV request schema</a>,\nwhich defines the JSON schema for the MV request. Flying Blue requires a member ID and\npassword. Let’s create an MV using curl:</p>\n<pre><code>curl -v -X POST -H &quot;Content-Type: application/json&quot; \\\n-d &#39;{&quot;identifyingFactors&quot;: {&quot;memberId&quot;: &quot;1234&quot;}, &quot;authenticatingFactors&quot;: {&quot;password&quot;: &quot;ABCD&quot;}}&#39; \\\n&quot;https://sandbox.lcp.points.com/v1/lps/3b6a77e6-cb40-4b28-a146-341c5862fab6/mvs/&quot;\n</code></pre><p>The server returns a 401 status code indicating you are not authorized to POST to the\nMV collection:</p>\n<pre><code>HTTP/1.1 401 UNAUTHORIZED\n{\n  &quot;errors&quot;: [\n    {\n      &quot;code&quot;: &quot;UNAUTHORIZED&quot;,\n      &quot;description&quot;: &quot;The server could not verify that you are authorized to access the URL requested.&quot;,\n      &quot;field&quot;: null\n    }\n  ]\n}\n</code></pre><p>This error is because we sent an unauthenticated request to the LCP. To authenticate,\nyou need to include an authorization header in your request. The LCP uses <a href=\"http://tools.ietf.org/html/draft-ietf-oauth-v2-http-mac-02\">OAuth 2.0\nMAC</a> for authentication.\nThe <code>lcp_curl.py</code> Python script provided in <a href=\"https://github.com/Points/Loyalty-Commerce-Platform/tree/master/util\">LCP\nUtilities</a>\nmakes this easy. For more details building the authorization header for OAuth 2.0\nMAC, see <a href=\"#appendix-a-signing-requests\">Appendix A: Signing Requests</a>.</p>\n<p><code>lcp_curl.py</code> is a wrapper around curl to add the authorization header. It requires a\n-u parameter and your MAC key identifier and MAC key obtained in the previous step.\nIt passes all other arguments on to curl. It also adds the &quot;Content-Type: application/json&quot;\nheader so we don’t need to provide that. Let’s try to create an MV again using <code>lcp_curl.py</code>:</p>\n<pre><code>lcp_curl.py -v -X POST \\\n-u ee83b9af340741e3bec0ad96cb976142:RrvufcCh3Kb3bsqG-wfh8JrQXF8tZG4q3H-_gTACfjM \\\n-d &#39;{&quot;identifyingFactors&quot;: {&quot;memberId&quot;: &quot;1234&quot;}, &quot;authenticatingFactors&quot;: {&quot;password&quot;: &quot;ABCD&quot;}}&#39; \\\n&quot;https://sandbox.lcp.points.com/v1/lps/3b6a77e6-cb40-4b28-a146-341c5862fab6/mvs/&quot;\n</code></pre><p>Behind the scenes, <code>lcp_curl.py</code> generates the MAC signature, builds the authorization header, and\nincludes it in a call to curl like so:</p>\n<pre><code>curl -v -X POST \\\n-H &#39;Authorization: MAC id=&quot;ee83b9af340741e3bec0ad96cb976142&quot;, ts=&quot;1438107842&quot;,\nnonce=&quot;11SChlLd7+w=&quot;, ext=&quot;c2e5a99d639f902217f2322d4c4d1374ceda3a71&quot;,\nmac=&quot;2U8yq4PQ3IXw86zAaxEF3fw4YkI=&quot;&#39; \\\n-d &#39;{&quot;identifyingFactors&quot;: {&quot;memberId&quot;: &quot;1234&quot;}, &quot;authenticatingFactors&quot;: {&quot;password&quot;: &quot;ABCD&quot;}}&#39; \\\n&quot;https://sandbox.lcp.points.com/v1/lps/3b6a77e6-cb40-4b28-a146-341c5862fab6/mvs/&quot;\n</code></pre><p>Now the request is authenticated but we get a different error indicating there is no\nmember with member ID 1234 and password ABCD in the sandbox:</p>\n<pre><code>HTTP/1.1 422 UNPROCESSABLE ENTITY\n{\n  &quot;errors&quot;: [\n    {\n      &quot;code&quot;: &quot;UNKNOWN_MEMBER&quot;,\n      &quot;description&quot;: &quot;No member could be found with the given credentials.&quot;\n    }\n  ]\n}\n</code></pre><p>If you still received 401 unauthorized, check that your computer&#39;s time is accurate\nor is synced with an internet time server. <code>lcp_curl.py</code> adds a timestamp to each\nrequest and the LCP verifies that the timestamp is within 30 seconds of the server&#39;s\ntime to prevent replay attacks.</p>\n<p>To simulate a successful MV in sandbox mode, we need to use one of the pre-configured\nsandbox MVs. You can get the list of <a href=\"./?doc=api-reference#sandbox-mvs\">sandbox MVs</a>\nfor the loyalty program using the API. For Flying Blue, one of the sandbox MVs has a\nmember ID to &quot;2202&quot; and a password of &quot;PASSWORD&quot;. Let’s do the MV again using these values:</p>\n<pre><code>lcp_curl.py -v -X POST \\\n-u ee83b9af340741e3bec0ad96cb976142:RrvufcCh3Kb3bsqG-wfh8JrQXF8tZG4q3H-_gTACfjM \\\n-d &#39;{&quot;identifyingFactors&quot;: {&quot;memberId&quot;: &quot;2202&quot;}, &quot;authenticatingFactors&quot;: {&quot;password&quot;: &quot;PASSWORD&quot;}}&#39; \\\n&quot;https://sandbox.lcp.points.com/v1/lps/3b6a77e6-cb40-4b28-a146-341c5862fab6/mvs/&quot;\n</code></pre><p>This creates a successful MV with a balance of 100,000 miles as specified in the sandbox MV:</p>\n<pre><code>HTTP/1.1 201 CREATED\n{\n  &quot;application&quot;: &quot;https://lcp.points.com/v1/apps/3ac20648-bce1-4385-9725-83ba3a2161cc&quot;,\n  &quot;authenticatingFactors&quot;: {\n    &quot;password&quot;: &quot;*****&quot;\n  },\n  &quot;balance&quot;: 100000,\n  &quot;createdAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;,\n  &quot;identifyingFactors&quot;: {\n    &quot;memberId&quot;: &quot;2202&quot;\n  },\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/3b6a77e6-cb40-4b28-a146-341c5862fab6/mvs/09651217-c154-4bcb-853f-cdf379ad7e54&quot;\n    }\n  },\n  &quot;loyaltyProgram&quot;: &quot;https://lcp.points.com/v1/lps/3b6a77e6-cb40-4b28-a146-341c5862fab6&quot;,\n  &quot;status&quot;: &quot;success&quot;,\n  &quot;type&quot;: &quot;memberValidation&quot;,\n  &quot;updatedAt&quot;: &quot;2014-04-19T07:56:08.482556Z&quot;\n}\n</code></pre><p>You can retrieve a previous MV by performing a GET on the self link. This\nretrieves the MV and balance in the state it was when it was created. To get an\nupdated member’s balance, create a new MV.</p>\n<p>Congratulations, you’ve successfully performed a member validation. This is all\nyou need to complete your universal balance checker.</p>\n<p>To learn more about the capabilities of the LCP, including moving points in and\nout of member accounts, refer to the <a href=\"./?doc=reference-manual\">LCP Reference\nManual</a>\nand the <a href=\"./?doc=api-reference\">LCP API\nReference</a>.</p>\n<h2 id=\"appendix-a-signing-requests\">Appendix A: Signing Requests</h2>\n<p>This appendix contains a step-by-step guide for signing requests with OAuth\n2.0 MAC tokens as well as sample code. Follow these steps if you want to write\nyour own module to sign requests.</p>\n<ol>\n<li>Generate a timestamp. The timestamp is the number of seconds since January 1,\n1970 00:00:00 UTC. This is also known as POSIX time or Unix time. Requests\nare only valid within 30 seconds of the timestamp.</li>\n<li>Generate a nonce. A nonce is an arbitrary string that must be different for\neach request in a 30 second window with the same MAC ID.</li>\n<li>Generate the extension string. The extension string is blank for GET and\nDELETE requests. For PUT and POST requests, concatenate the value of the\nContent-Type header (e.g. &quot;application/json&quot;) with the request body and hash\nit with SHA1.</li>\n<li>Build the normalized request string as follows:\n<table>\n<thead>\n <tr>\n   <th>Format</th>\n   <th>GET Example</th>\n   <th>POST Example</th>\n </tr>\n</thead>\n<tbody>\n <tr>\n   <td>Timestamp\\n<br>Nonce\\n<br>HTTP Method (all caps)\\n<br>Path\\n<br>Hostname\\n<br>Port\\n<br>Extension\\n</td>\n   <td>1377721336\\n<br>4FvtoumTybo=\\n<br>GET\\n<br>/v1/apps/\\n<br>lcp.points.com\\n<br>443\\n<br>\\n</td>\n   <td>1377724146\\n<br>u8BNUfE5Gu8=\\n<br>POST\\n<br>/v1/apps/\\n<br>lcp.points.com\\n<br>443\\n<br>a9d46382c97bd4b0475b5b152dddaf2d61c0a30d\\n</td>\n </tr>\n</tbody>\n</table><ol start=\"5\">\n<li>Decode the MAC key from Base64 if you haven’t already. The MAC key is encoded in Base64 using a URL-safe alphabet. You may need to add padding to the MAC key to decode it.</li>\n<li>Generate the signature by using the HMAC-SHA1 algorithm and the MAC key over the normalized request string.</li>\n<li>Encode the signature in Base64. You do not need to use the URL-safe alphabet.</li>\n<li>Generate the authorization header for the request.</li>\n</ol>\n\n</li>\n</ol>\n<h4 id=\"example-request-\">Example request:</h4>\n<pre><code>GET /v1/accounts/342d7d81-c6d0-4968-8518-3525ed71bdb5 HTTP/1.1\nHost: lcp.points.com\nAuthorization: MAC id=&quot;97ee420faaa343d4a04b7378b319b48b&quot;,\n                   ts=&quot;1379541939&quot;,\n                   nonce=&quot;OK3HY80lkQ0=&quot;,\n                   ext=&quot;&quot;,\n                   mac=&quot;EmYShgBbKjp7XB3gbZq9e0zZy+8=&quot;\n</code></pre><h4 id=\"example-c-code-\">Example C# code:</h4>\n<pre><code>using System.Security.Cryptography;\n\npublic string GetAuthorizationHeaderValue(\n    string httpMethod,\n    Uri url,\n    string macKeyIdentifier,\n    string macKey,\n    string contentType,\n    string body)\n{\n    // Step 1: Generate timestamp\n    TimeSpan t = (DateTime.UtcNow - new DateTime(1970, 1, 1));\n    string ts = ((int)t.TotalSeconds).ToString();\n\n    // Step 2: Generate nonce\n    string nonce = new Random().Next().ToString();\n\n    // Step 3: Generate ext\n    string ext = &quot;&quot;;\n    if (contentType != null &amp;&amp; body != null &amp;&amp;\n        contentType.Length &gt; 0 &amp;&amp; body.Length &gt; 0)\n    {\n        string contentTypePlusBody = contentType + body;\n        SHA1 sha = new SHA1CryptoServiceProvider();\n        ext = BitConverter.ToString(sha.ComputeHash(\n            Encoding.ASCII.GetBytes(contentTypePlusBody)));\n        ext = ext.Replace(&quot;-&quot;, &quot;&quot;).ToLower();\n    }\n\n    // Step 4: Build normalized request string\n    string normalizedRequestString =\n        string.Format(&quot;{0}\\n{1}\\n{2}\\n{3}\\n{4}\\n{5}\\n{6}\\n&quot;,\n            ts,\n            nonce,\n            httpMethod,\n            url.AbsolutePath,\n            url.Host,\n            url.Port,\n            ext);\n\n    // Step 5: Base64 decode the MAC key from URL-safe alphabet\n    // and add padding if needed\n    macKey = macKey.Replace(&#39;-&#39;, &#39;+&#39;).Replace(&#39;_&#39;, &#39;/&#39;);\n    macKey += new string(&#39;=&#39;, (4 - macKey.Length % 4));\n    HashAlgorithm hashGenerator = new HMACSHA1(\n        System.Convert.FromBase64String(macKey));\n\n    // Step 6: Generate the signature\n    byte[] signature = hashGenerator.ComputeHash(\n        Encoding.ASCII.GetBytes(normalizedRequestString));\n\n    // Step 7: Base64 encode the result\n    string mac = System.Convert.ToBase64String(signature);\n\n    // Step 8: Build Authorization header\n    StringBuilder authorizationHeader = new StringBuilder();\n    authorizationHeader.AppendFormat(@&quot;MAC id=&quot;&quot;{0}&quot;&quot;, ts=&quot;&quot;{1}&quot;&quot;, nonce=&quot;&quot;{2}&quot;&quot;, ext=&quot;&quot;{3}&quot;&quot;, mac=&quot;&quot;{4}&quot;&quot;&quot;, macKeyIdentifier, ts, nonce, ext, mac);\n\n    return authorizationHeader.ToString();\n}\n</code></pre><h4 id=\"example-python-code-\">Example Python code:</h4>\n<pre><code>import urlparse\nimport httplib\nimport base64\nimport hmac\nimport hashlib\nimport time\nimport os\n\ndef generate_authorization_header_value(\n        http_method,\n        url,\n        mac_key_identifier,\n        mac_key,\n        content_type,\n        body):\n\n    url_parts = urlparse.urlparse(url)\n    port = url_parts.port\n    if not port:\n        if url_parts.scheme == &#39;https&#39;:\n            port = httplib.HTTPS_PORT\n        else:\n            port = httplib.HTTP_PORT\n\n    # Step 1: Generate timestamp\n    ts = str(int(time.time()))\n\n    # Step 2: Generate nonce\n    nonce = base64.b64encode(os.urandom(8))\n\n    # Step 3: Generate ext\n    if content_type is not None and body is not None and len(content_type) &gt; 0 and len(body) &gt; 0:\n        content_type_plus_body = content_type + body\n        content_type_plus_body_hash = hashlib.sha1(content_type_plus_body)\n        ext = content_type_plus_body_hash.hexdigest()\n    else:\n        ext = &quot;&quot;\n\n    # Step 4: Build normalized request string\n    normalized_request_string = (\n        ts + &#39;\\n&#39; +\n        nonce + &#39;\\n&#39; +\n        http_method + &#39;\\n&#39; +\n        url_parts.path + &#39;\\n&#39; +\n        url_parts.hostname + &#39;\\n&#39; +\n        str(port) + &#39;\\n&#39; +\n        ext + &#39;\\n&#39;\n    )\n\n    # Step 5: Base64 decode the MAC key from URL-safe alphabet\n    # and add padding if needed\n    mac_key += &#39;=&#39; * (4 - len(mac_key) % 4)\n    mac_key = base64.urlsafe_b64decode(mac_key)\n\n    # Step 6: Generate the signature\n    signature = hmac.new(mac_key, normalized_request_string, hashlib.sha1)\n\n    # Step 7: Base64 encode the result\n    mac = base64.b64encode(signature.digest())\n\n    # Step 8: Build Authorization header\n    return &#39;MAC id=&quot;{0}&quot;, ts=&quot;{1}&quot;, nonce=&quot;{2}&quot;, ext=&quot;{3}&quot;, mac=&quot;{4}&quot;&#39;.format(mac_key_identifier, ts, nonce, ext, mac)\n</code></pre>";

/***/ }),
/* 186 */
/* unknown exports provided */
/* all exports used */
/*!***************************************!*\
  !*** ./app/documents/lp-reference.md ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<h1 id=\"loyalty-partner-api-reference-manual\">Loyalty Partner API Reference Manual</h1>\n<p>For Points Loyalty Commerce Platform - Version 1.0</p>\n<h2 id=\"document-overview\">Document Overview</h2>\n<p>This document describes the RESTful API services a Loyalty Partner can implement to enable members using Loyalty Commerce Applications built on the Points Loyalty Commerce Platform (LCP) to transact.</p>\n<h2 id=\"introducing-the-loyalty-partner-api\">Introducing the Loyalty Partner API</h2>\n<p>As a Loyalty Partner (LP), you can integrate with the LCP and all its Applications with these simple calls.</p>\n<ol>\n<li>Member Validation (MV)</li>\n<li>Credit/Debit Posting</li>\n<li>Transfer Points to/from a member&#39;s account</li>\n<li>Transaction Retry (posting or transfer)</li>\n<li>Transaction Reversal</li>\n<li>Single Sign On (SSO)</li>\n</ol>\n<p><img src=\"" + __webpack_require__(/*! ../images/lp-overview.png */ 25) + "\" alt=\"LP API\"></p>\n<p>A reference implementation for the LP API&#39;s member validation and credit/debit postings can be found in the <a href=\"https://github.com/Points/Loyalty-Commerce-Platform/tree/master/samples\">Loyalty Commerce Platform Github repository</a>. Our example LCP web service will be &quot;<a href=\"http://api.loyaltyprogram.com\">http://api.loyaltyprogram.com</a>&quot; below.</p>\n<h2 id=\"why-use-the-loyalty-partner-api-\">Why use the Loyalty Partner API?</h2>\n<p>By integrating with the LCP via the LP API, you have the following advantages:</p>\n<ol>\n<li><strong>Speed up</strong> time to market</li>\n<li><strong>Simple</strong> RESTful API that can be re-used with your partners</li>\n<li><strong>Instantaneously apply changes</strong> to your webservices across permissioned loyalty Applications</li>\n</ol>\n<h2 id=\"how-do-applications-and-lps-interact-\">How do Applications and LPs interact?</h2>\n<p>When an Application executes a member validation, credit, or debit operation to you (the Loyalty Partner) via the LCP, the LCP will find the pre-configured URL for your loyalty program&#39;s API and that specific operation, and send an HTTP request to that URL.</p>\n<p>For example, in a typical Buy Points transaction, an MV will precede a credit posting in the sequence illustrated.</p>\n<p><img src=\"" + __webpack_require__(/*! ../images/lp-api-buy.png */ 24) + "\" alt=\"LP API - Buy example\"></p>\n<h2 id=\"validate-a-member\">Validate a Member</h2>\n<p>The basic API call for all LCP partners is the member validation (MV). Applications on the LCP will submit an MV request to determine if a member exists and check the balance of a loyalty program member&#39;s account.</p>\n<p>The MV is the only configurable call. As a Loyalty Partner, you define what data fields you receive and share with Applications. An MV <strong>request</strong> body will contain a member&#39;s details (e.g. account ID, name) and an MV <strong>response</strong> confirms the validity of a member and may include additional member data. Data fields in both the MV request and response are specified in their respective schemas. During the onboarding process, Points configures these schemas on your behalf.</p>\n<p>The following parameters are recommended for MV requests:</p>\n<table>\n  <thead>\n    <tr>\n      <th>Parameter</th>\n      <th>Description</th>\n      <th>Required</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>firstName</td>\n      <td>First name of the loyalty program member</td>\n      <td>Y</td>\n    </tr>\n    <tr>\n      <td>lastName</td>\n      <td>Last name of the loyalty program member</td>\n      <td>Y</td>\n    </tr>\n    <tr>\n      <td>memberId</td>\n      <td>Member ID of the loyalty program member</td>\n      <td>Y</td>\n    </tr>\n  </tbody>\n</table>\n\n<p>Sample MV request from Applications via the LCP:</p>\n<pre><code>POST http://api.loyaltyprogram.com/MemberValidation\n{\n  &quot;firstName&quot;: &quot;John&quot;,\n  &quot;lastName&quot;: &quot;Doe&quot;,\n  &quot;memberId&quot;: &quot;A1234567890&quot;\n}\n</code></pre><p>A successful MV response will include member details similar to those below if the member exists and is valid for use. You can return additional data to Applications on the LCP to enable them to offer personalized loyalty experiences to consumers (e.g. targeted offers).</p>\n<pre><code>200 OK\n{\n &quot;status&quot;: &quot;success&quot;,\n &quot;accountCreationDate&quot;: &quot;2015-12-31&quot;,\n &quot;accountStatus&quot;: &quot;Active&quot;,\n &quot;allowedRecipients&quot;: [\n    {\n        &quot;email&quot;: &quot;lizzie.doe@gmail.com&quot;,\n        &quot;firstName&quot;: &quot;Elizabeth&quot;,\n        &quot;lastName&quot;: &quot;Doe&quot;,\n        &quot;memberId&quot;: &quot;C1234567890&quot;\n     },\n     {\n        &quot;email&quot;: &quot;james.doe@gmail.com&quot;,\n        &quot;firstName&quot;: &quot;James&quot;,\n        &quot;lastName&quot;: &quot;Doe&quot;,\n        &quot;memberId&quot;: &quot;D1234567890&quot;\n     }\n  ]\n &quot;countryCode&quot;: &quot;CA&quot;,\n &quot;cobrand&quot;: &quot;XYZ Co&quot;\n &quot;balance&quot;: 200000,\n &quot;memberId&quot;: &quot;A1234567890&quot;,\n &quot;membershipLevel&quot;: &quot;Gold&quot;,\n &quot;eligibility&quot;: &quot;TransferToAny&quot;,\n &quot;email&quot;: &quot;test@example.com&quot;,\n &quot;expiredBalance&quot;: 15000\n}\n</code></pre><p>An MV response for an invalid member must return a <strong>status</strong> and <strong>statusMessage</strong> with a helpful descriptor:</p>\n<pre><code>200 OK\n{\n   &quot;status&quot;: &quot;failure&quot;,\n   &quot;statusMessage&quot;: &quot;Error: Unknown Member&quot;\n}\n</code></pre><h2 id=\"credit-or-debit-an-account\">Credit or Debit an Account</h2>\n<p>As your loyalty members earn or redeem points, this service allows Applications on the LCP to post a debit and/or credit to a member’s account.</p>\n<p>The following parameters are included in posting requests:</p>\n<table>\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Description</th>\n      <th>Required</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>callback</td>\n      <td>The callback is a URI passed as a string that uniquely identifies a transaction in the LCP. This is helpful for Points&#39; and your support teams if troubleshooting is required and it is strongly recommended that you store this string.</td>\n      <td>Y</td>\n    </tr>\n    <tr>\n      <td>order</td>\n      <td>Details of the order that this debit/credit is executed as part of</td>\n      <td>N</td>\n    </tr>\n    <tr>\n      <td>bonus</td>\n      <td>A boolean value indicating if this is a bonus posting</td>\n      <td>N</td>\n    </tr>\n    <tr>\n      <td>amount</td>\n      <td>Number of points to be added or removed from the member&#39;s account. This number is negative for debits and positive for credits.</td>\n      <td>Y</td>\n    </tr>\n    <tr>\n      <td>pic</td>\n      <td>With a single integration, the Product Identification Code is used for discerning which Application and promotion are associated to this transaction. The PIC can be any string.</td>\n      <td>N</td>\n    </tr>\n    <tr>\n      <td>firstName</td>\n      <td>First name of the loyalty program member</td>\n      <td>N</td>\n    </tr>\n    <tr>\n      <td>lastName</td>\n      <td>Last name of the loyalty program member</td>\n      <td>N</td>\n    </tr>\n    <tr>\n      <td>memberId</td>\n      <td>Member ID of the loyalty program member. This is identical to the member ID in the MV.</td>\n      <td>Y</td>\n    </tr>\n  </tbody>\n</table>\n\n<p>Sample posting request from Applications via the LCP:</p>\n<pre><code>POST http://api.loyaltyprogram.com/Posting\n{\n   &quot;callback&quot;: &quot;https://lcp.points.com/v1/lps/&lt;lp-id&gt;/credits/&lt;id&gt;&quot;,\n   &quot;amount&quot;: 100,\n   &quot;bonus&quot;: true|false,\n   &quot;order&quot; : {\n      &quot;orderType&quot;: &quot;GIFT&quot;,\n      &quot;createdAt&quot;: &quot;2014-11-25T15:24:00.000000Z&quot;,      \n      &quot;confirmationNumber&quot;: &quot;1111-2222-3333-4444-5555&quot;\n   },\n   &quot;pic&quot;: &quot;POINTSGIFT&quot;,\n   &quot;memberId&quot;: &quot;A1234567890&quot;\n}\n</code></pre><p>A posting response returns the <strong>transactionId</strong> and the <strong>status</strong>. In case of a <em>failure</em>, the response must also include a <strong>statusMessage</strong>. The <strong>transactionId</strong> is a string with a maximum length of 100 characters used by the Points support team to troubleshoot and for <a href=\"./?doc=lp-reference#retry-a-transaction\">transaction retries</a>.</p>\n<pre><code>200 OK\n{  \n   &quot;status&quot;: &quot;success|failure&quot;,\n   &quot;statusMessage&quot;: &quot;Error: Limit exceeded&quot;,\n   &quot;transactionId&quot;: &quot;12345678&quot;\n}\n</code></pre><h2 id=\"transfer-points-between-accounts\">Transfer Points Between Accounts</h2>\n<p>As part of your loyalty program features, you may wish to provide a service to allow Applications on the LCP to perform one-shot points transfers between loyalty member accounts. This API call withdraws/debits points from one account and deposits/credits them to another in a single transaction.</p>\n<p>The following parameters are included in transfer requests:</p>\n<table>\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Description</th>\n      <th>Required</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>callback</td>\n      <td>The callback is a URI passed as a string that uniquely identifies a transaction in the LCP. This is helpful for Points&#39; and your support teams if troubleshooting is required and it is strongly recommended that you store this string.</td>\n      <td>Y</td>\n    </tr>\n    <tr>\n      <td>order</td>\n      <td>Details of the order that this debit/credit is executed as part of.</td>\n      <td>N</td>\n    </tr>\n    <tr>\n      <td>amount</td>\n      <td>Number of points to be removed from the member&#39;s account and added to the recipient&#39;s. This number is negative (for debits).</td>\n      <td>Y</td>\n    </tr>\n    <tr>\n      <td>pic</td>\n      <td>With a single integration, the Product Identification Code is used for discerning which Application and promotion are associated to this transaction. The PIC can be any string.</td>\n      <td>N</td>\n    </tr>\n    <tr>\n      <td>member/firstName</td>\n      <td>First name of the loyalty program member transacting</td>\n      <td>N</td>\n    </tr>\n    <tr>\n      <td>member/lastName</td>\n      <td>Last name of the loyalty program member transacting</td>\n      <td>N</td>\n    </tr>\n    <tr>\n      <td>member/memberId</td>\n      <td>Member ID of the loyalty program member transacting. This is identical to the member ID in the MV.</td>\n      <td>Y</td>\n    </tr>\n    <tr>\n      <td>recipient/firstName</td>\n      <td>First name of the loyalty program member receiving the points</td>\n      <td>N</td>\n    </tr>\n    <tr>\n      <td>recipient/lastName</td>\n      <td>Last name of the loyalty program member receiving the points</td>\n      <td>N</td>\n    </tr>\n    <tr>\n      <td>recipient/memberId</td>\n      <td>Member ID of the loyalty program member receiving the points</td>\n      <td>Y</td>\n    </tr>\n  </tbody>\n</table>\n\n<p>Sample point transfer request from Applications via the LCP:</p>\n<pre><code>POST http://api.loyaltyprogram.com/Transfer\n{\n   &quot;callback&quot;: &quot;https://lcp.points.com/v1/lps/&lt;lp-id&gt;/credits/&lt;id&gt;&quot;,\n   &quot;amount&quot;: 100,\n   &quot;order&quot; : {\n      &quot;orderType&quot;: &quot;TRANSFER&quot;,\n      &quot;createdAt&quot;: &quot;2015-11-25T15:24:00.000000Z&quot;,\n      &quot;confirmationNumber&quot;: &quot;1111-2222-3333-4444-5555&quot;\n   },\n   &quot;pic&quot;: &quot;TRANSFER&quot;,\n   &quot;member&quot;: {\n      &quot;memberId&quot;: &quot;A1234567890&quot;\n   },\n   &quot;recipient&quot;: {\n      &quot;memberId&quot;: &quot;B1234567890&quot;\n   }\n}\n</code></pre><p>A point transfer response returns the <strong>transactionId</strong> and the <strong>status</strong>. In case of a <em>failure</em>, the response must include a <strong>statusMessage</strong>.</p>\n<pre><code>200 OK\n{  \n   &quot;status&quot;: &quot;success|failure&quot;,\n   &quot;statusMessage&quot;: &quot;Error: Insufficient balance&quot;,\n   &quot;transactionId&quot;: &quot;12345678&quot;\n}\n</code></pre><h2 id=\"retry-a-transaction\">Retry a Transaction</h2>\n<p>Occasionally, your system may undergo maintenance or experience downtime. During this time, you can return a status of &quot;<em>systemError</em>&quot; instead of &quot;<em>failure</em>&quot; to the LCP for any transactions (credit/debit posting, transfer) received. &quot;<em>systemError</em>&quot; informs the Application on the LCP that the request passed may be correct For these transactions, your API should accept a call with the <strong>transactionId</strong>. The Points support team can then retry the transaction at a later time by sending the same <strong>transactionId</strong> used on the original request.</p>\n<p>The following parameter is included in retry requests:</p>\n<table>\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Description</th>\n      <th>Required</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>transactionId</td>\n      <td>ID of the transaction being reattempted. This should be used to ensure that the initial transaction was indeed not successful.</td>\n      <td>Y</td>\n    </tr>\n  </tbody>\n</table>\n\n<p>Sample retry request from the LCP:</p>\n<pre><code>POST http://api.loyaltyprogram.com/RetryTransaction\n{\n   &quot;transactionId&quot;: &quot;12345678&quot;\n}\n</code></pre><p>A transaction retry response returns the <strong>transactionId</strong> and the <strong>status</strong>. In case of a <em>failure</em>, the response must include a <strong>statusMessage</strong>.</p>\n<pre><code>200 OK\n{  \n   &quot;status&quot;: &quot;success|failure&quot;,\n   &quot;statusMessage&quot;: &quot;Error: Transaction already succeeded&quot;,\n   &quot;transactionId&quot;: &quot;12345678&quot;\n}\n</code></pre><h2 id=\"reverse-a-transaction\">Reverse a Transaction</h2>\n<p>Transactions (postings or transfers) may be cancelled for any number of reasons and members&#39; balances should be updated in a timely manner. You may wish to provide a service to handle these reversals automatically.</p>\n<p>A transaction can be fully or partially reversed by sending the same <strong>transactionId</strong> used on the original request. The amount of points to reverse will always be specified and the sign (+/-) will indicate the operation to the member&#39;s points account. Positive should add points into a member&#39;s account, while negative should remove points.</p>\n<p>Each reversal will be made on a successful transaction. If the cumulative amount to be reversed is more than the points originally transacted, the reversal should be rejected.</p>\n<p>The following parameters are included in reversal requests:</p>\n<table>\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Description</th>\n      <th>Required</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>transactionId</td>\n      <td>ID of the transaction being reversed. This should be used to ensure that the initial transaction was indeed successful.</td>\n      <td>Y</td>\n    </tr>\n    <tr>\n      <td>amount</td>\n      <td>Number of points to reverse for the transaction. Positive for credits and negative for debits. This field will be populated for all reversals.</td>\n      <td>Y</td>\n    </tr>\n  </tbody>\n</table>\n\n<p>Sample reversal request from the LCP to remove 2000 points from the member account corresponding to the transactionId:</p>\n<pre><code>POST http://api.loyaltyprogram.com/Reversal\n{\n   &quot;transactionId&quot;: &quot;12345678&quot;,\n   &quot;amount&quot;: -2000\n}\n</code></pre><p>A reversal response returns the <strong>transactionId</strong> and the <strong>status</strong>. In case of a <em>failure</em>, the response must include a <strong>statusMessage</strong>.</p>\n<pre><code>200 OK\n{  \n   &quot;status&quot;: &quot;success&quot;,\n   &quot;transactionId&quot;: &quot;12345678&quot;\n}\n\n400 BAD REQUEST\n{  \n   &quot;status&quot;: &quot;failure&quot;,\n   &quot;statusMessage&quot;: &quot;Error: No such transactionId&quot;,\n   &quot;transactionId&quot;: &quot;12345678&quot;\n}\n</code></pre><h2 id=\"headers\">Headers</h2>\n<ul>\n<li><strong>Content-Type</strong>: application/json</li>\n<li><strong>Authorization</strong>: Basic {Base64-encoded username:password}</li>\n</ul>\n<h3 id=\"call-authorization\">Call Authorization</h3>\n<p>We recommend using a combination of Basic Auth (a Base64-encoded username/password pair) and whitelisting Points IP addresses to authorize calls from the LCP.</p>\n<h2 id=\"single-sign-on-sso-\">Single Sign On (SSO)</h2>\n<p>Before members can transact, you need to send them to desired Application. With SSO, your loyalty members only need to sign in <em>once</em> on your loyalty program site and continue logged in to Applications on the LCP.</p>\n<p><img src=\"" + __webpack_require__(/*! ../images/sso-mv.png */ 27) + "\" alt=\"SSO MV\"></p>\n<p>When a member is signed in and visits a link on your loyalty program’s website to an LCP Application, your LP provides the member&#39;s profile data to the LCP and allows the Application to securely retrieve an MV delegate containing the member&#39;s information. Member profile data is crucial to presenting a great, personalized experience that is engaging and meets the member&#39;s needs.</p>\n<p>SSO is a five-step process:</p>\n<ol>\n<li><strong>Your loyalty program <a href=\"https://points.github.io/Loyalty-Commerce-Platform/?doc=api-reference#create-a-mv-delegate\">creates an MV delegate</a> on the LCP.</strong> Your loyalty program provides the member info needed to create an MV and &quot;delegates&quot; the MV to the Application so that the Application has permission to access the MV. The LCP creates the MV and returns the MV URL to your loyalty program.</li>\n<li><strong>Your loyalty program redirects the user to the Application and provides the Application with the MV delegate URL.</strong> No member information is passed in the redirect. It is securely stored in the LCP.</li>\n<li><strong>The Application <a href=\"https://points.github.io/Loyalty-Commerce-Platform/?doc=api-reference#get-a-mv-delegate\">gets the MV delegate</a> from the LCP using the MV delegate URL</strong> to securely obtain the location of the MV.</li>\n<li><strong>The Application <a href=\"https://points.github.io/Loyalty-Commerce-Platform/?doc=api-reference#get-a-mv\">gets the MV</a> from the LCP using the MV URL</strong> in the MV delegate to securely obtain information about the member and perform transactions. Authenticating factors like the member’s password are not shared with the Application.</li>\n<li>If necessary, the Application gets the member details from the LCP by appending &quot;/member-details&quot; to the MV URL to securely obtain additional information about the member.</li>\n</ol>\n<p>A <a href=\"https://github.com/Points/Loyalty-Commerce-Platform/tree/master/samples/java/sso-reference-implementation\">reference implementation of the SSO API</a> can be found in the LCP Github repository.</p>\n<h2 id=\"member-data\">Member Data</h2>\n<p>Points recommends sharing the following data in your MV responses and SSO MV delegates. While this list is not exhaustive and additional data enables LCP Applications to further customize and enhance your members&#39; experience, the following data fields are catalogued for your convenience.</p>\n<table>\n  <thead>\n    <tr>\n      <th style=\"width:20%\">Field Name</th>\n      <th style=\"width:30%\">Description</th>\n      <th style=\"width:10%\">Type</th>\n      <th style=\"width:25%\">Example</th>\n      <th style=\"width:10%\">Magic</th>\n      <th style=\"width:5%\">SSO Only</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>balance</td>\n      <td>Amount of points available in account</td>\n      <td>Integer</td>\n      <td><em>21000</em></td>\n      <td><strong>Required</strong></td>\n      <td></td>\n    </tr>\n    <tr>\n      <td>email</td>\n      <td>Member&#39;s email address</td>\n      <td>String</td>\n      <td><em>john@doe.com</em></td>\n      <td><strong>Required</strong></td>\n      <td></td>\n    </tr>\n    <tr>\n      <td>firstName</td>\n      <td>Member&#39;s first name</td>\n      <td>String</td>\n      <td><em>John</em></td>\n      <td><strong>Required</strong></td>\n      <td></td>\n    </tr>\n    <tr>\n      <td>lastName</td>\n      <td>Member&#39;s last name</td>\n      <td>String</td>\n      <td><em>Doe</em></td>\n      <td><strong>Required</strong></td>\n      <td></td>\n    </tr>\n    <tr>\n      <td>memberId</td>\n      <td>Membership number</td>\n      <td>String</td>\n      <td><em>A12345678</em></td>\n      <td><strong>Required</strong></td>\n      <td></td>\n    </tr>\n    <tr>\n      <td>accountCreationDate</td>\n      <td>Date when member registered in loyalty program</td>\n      <td>String</td>\n      <td><em>36745</em></td>\n      <td>Excellent</td>\n      <td></td>\n    </tr>\n    <tr>\n      <td>countryCode</td>\n      <td>Two-letter ISO 3166-2 code for member&#39;s country of residence</td>\n      <td>String</td>\n      <td><em>US</em></td>\n      <td>Excellent + Enhanced fraud protection</td>\n      <td></td>\n    </tr>\n    <tr>\n      <td>currencyCode</td>\n      <td>Three-letter ISO 4217 code for member&#39;s preferred transaction currency</td>\n      <td>String</td>\n      <td><em>USD</em></td>\n      <td>Excellent</td>\n      <td></td>\n    </tr>\n    <tr>\n      <td>language</td>\n      <td>Localization tag that consists of an ISO 639-1 language code and ISO 3166-2 country code</td>\n      <td>String</td>\n      <td><em>en-US</em></td>\n      <td>Excellent</td>\n      <td></td>\n    </tr>\n    <tr>\n      <td>membershipLevel</td>\n      <td>Member&#39;s tier level</td>\n      <td>String</td>\n      <td><em>Diamond</em></td>\n      <td>Excellent</td>\n      <td></td>\n    </tr>\n    <tr>\n      <td>accountStatus</td>\n      <td>Status of the account (e.g. active, expired, suspended)</td>\n      <td>String</td>\n      <td><em>Active</em></td>\n      <td>Great</td>\n      <td></td>\n    </tr>\n    <tr>\n      <td>cobrandedCreditCard</td>\n      <td>Cobranded credit cards associated to the member&#39;s account</td>\n      <td>String</td>\n      <td><em>XYZ Bank Platinum VISA</em></td>\n      <td>Great</td>\n      <td></td>\n    </tr>\n    <tr>\n      <td>promoCode</td>\n      <td>Which promotion should be offered to the member</td>\n      <td>String</td>\n      <td><em>SUMMER2017</em></td>\n      <td>Great</td>\n      <td>Y</td>\n    </tr>\n    <tr>\n      <td>referralCode</td>\n      <td>Where the member was referred from</td>\n      <td>String</td>\n      <td><em>EMAIL0517</em></td>\n      <td>Great</td>\n      <td>Y</td>\n    </tr>\n    <tr>\n      <td>touchpoint</td>\n      <td>Which Application touchpoint the member visited through</td>\n      <td>String</td>\n      <td><em>storefront</em></td>\n      <td>Great</td>\n      <td>Y</td>\n    </tr>\n    <tr>\n      <td>eligibleMiles</td>\n      <td>Miles eligible to be boosted by Accelerator</td>\n      <td>Integer</td>\n      <td><em>12000</em></td>\n      <td>For <strong>Accelerator</strong></td>\n      <td></td>\n    </tr>\n    <tr>\n      <td>flightBooking</td>\n      <td>Information on the member&#39;s upcoming reservation</td>\n      <td>String</td>\n      <td><em>{\n  &quot;pnrNumber&quot;: &quot;JKLABC&quot;,\n  &quot;flightLegs&quot;: [\n    {\n      &quot;arrivalAirportDescription&quot;: &quot;Dubai Airport&quot;,\n      &quot;scheduledDepartureDate&quot;: &quot;2015-11-25T00:00:00Z&quot;,\n      &quot;milesFlown&quot;: 3403,\n      &quot;airlineCode&quot;: &quot;AB&quot;,\n      &quot;scheduledArrivalDate&quot;: &quot;2015-11-25T00:00:00Z&quot;,\n      &quot;passengers&quot;: [\n        {\n          &quot;membershipNumber&quot;: &quot;12345678&quot;,\n          &quot;offerTarget&quot;: true\n        }\n      ],\n      &quot;arrivalAirportCode&quot;: &quot;DXB&quot;,\n      &quot;legNumber&quot;: 1,\n      &quot;departureAirportCode&quot;: &quot;LHR&quot;,\n      &quot;flightNumber&quot;: &quot;400&quot;,\n      &quot;departureAirportDescription&quot;: &quot;London Heathrow Airport&quot;\n    },\n    {\n      &quot;arrivalAirportDescription&quot;: &quot;London Heathrow Airport&quot;,\n      &quot;scheduledDepartureDate&quot;: &quot;2015-11-25T00:00:00Z&quot;,\n      &quot;milesFlown&quot;: 3403,\n      &quot;airlineCode&quot;: &quot;AB&quot;,\n      &quot;scheduledArrivalDate&quot;: &quot;2015-11-25T00:00:00Z&quot;,\n      &quot;passengers&quot;: [],\n      &quot;arrivalAirportCode&quot;: &quot;LHR&quot;,\n      &quot;legNumber&quot;: 2,\n      &quot;departureAirportCode&quot;: &quot;DXB&quot;,\n      &quot;flightNumber&quot;: &quot;401&quot;,\n      &quot;departureAirportDescription&quot;: &quot;Dubai Airport&quot;\n    }\n  ],\n  &quot;bookingDate&quot;: &quot;2015-11-25T00:00:00Z&quot;\n}</em></td>\n      <td>For <strong>Accelerator</strong>, allows personalized Accelerated Earn Offers based on flight information</td>\n      <td>Y</td>\n    </tr>\n    <tr>\n      <td>transactionQuantity</td>\n      <td>Quantity of points to complete the member&#39;s in-progress reservation</td>\n      <td></td>\n      <td><em>24962</em></td>\n      <td>For <strong>Buy Inline</strong>, enables optimal top-up purchase experience</td>\n      <td></td>\n    </tr>\n    <tr>\n      <td>tierBalance</td>\n      <td>Balance of miles earned at the current tier</td>\n      <td></td>\n      <td><em>65332</em></td>\n      <td>For <strong>Buy Status Miles</strong>, allows personalized offers in Status qualifying points purchase experience</td>\n      <td></td>\n    </tr>\n    <tr>\n      <td>agentDetail</td>\n      <td>Descriptor for call center agents</td>\n      <td>String</td>\n      <td><em>9VX4EE3VKR</em></td>\n      <td>For <strong>call center</strong> tools</td>\n      <td>Y</td>\n    </tr>\n    <tr>\n      <td>agentId</td>\n      <td>Identifier for call center agents</td>\n      <td>String</td>\n      <td><em>Agent-007</em></td>\n      <td>For <strong>call center</strong> tools</td>\n      <td>Y</td>\n    </tr>\n    <tr>\n      <td>allowedRecipients</td>\n      <td>A comprehensive list of JSON objects for each family/friend that a member can Free Transfer to</td>\n      <td>String</td>\n      <td><em>[\n        {\n            &quot;email&quot;: &quot;lizzie.doe@gmail.com&quot;,\n            &quot;firstName&quot;: &quot;Elizabeth&quot;,\n            &quot;lastName&quot;: &quot;Doe&quot;,\n            &quot;memberId&quot;: &quot;C1234567890&quot;\n         },\n         {\n            &quot;email&quot;: &quot;james.doe@gmail.com&quot;,\n            &quot;firstName&quot;: &quot;James&quot;,\n            &quot;lastName&quot;: &quot;Doe&quot;,\n            &quot;memberId&quot;: &quot;D1234567890&quot;\n         }\n]</em></td>\n      <td>For <strong>Free Transfer</strong></td>\n      <td></td>\n    </tr>\n    <tr>\n      <td>expiredBalance</td>\n      <td>Amount of points expired in account</td>\n      <td>Integer</td>\n      <td><em>15000</em></td>\n      <td>For <strong>Reinstate</strong></td>\n      <td></td>\n    </tr>\n    <tr>\n      <td>addressLine1</td>\n      <td>Member&#39;s street address</td>\n      <td>String</td>\n      <td><em>111 Richmond St W</em></td>\n      <td>Enhanced fraud protection</td>\n      <td></td>\n    </tr>\n    <tr>\n      <td>addressLine2</td>\n      <td>Additional components of member&#39;s street address</td>\n      <td>String</td>\n      <td><em>Suite 700</em></td>\n      <td>Enhanced fraud protection</td>\n      <td></td>\n    </tr>\n    <tr>\n      <td>city</td>\n      <td>Name of the member&#39;s city of residence</td>\n      <td>String</td>\n      <td><em>Toronto</em></td>\n      <td>Enhanced fraud protection</td>\n      <td></td>\n    </tr>\n    <tr>\n      <td>phoneNumber</td>\n      <td>Member&#39;s phone number</td>\n      <td>String</td>\n      <td><em>4161234567</em></td>\n      <td>Enhanced fraud protection</td>\n      <td></td>\n    </tr>\n    <tr>\n      <td>postalCode</td>\n      <td>Postal code</td>\n      <td>String</td>\n      <td><em>M5H 3K6</em></td>\n      <td>Enhanced fraud protection</td>\n      <td></td>\n    </tr>\n    <tr>\n      <td>regionCode</td>\n      <td>Name of the member&#39;s state or region of residence</td>\n      <td>String</td>\n      <td><em>ON</em></td>\n      <td>Enhanced fraud protection</td>\n      <td></td>\n    </tr>  </tbody>\n</table>\n\n<h2 id=\"testing\">Testing</h2>\n<p>The LCP has two environments: staging and production. Typically, these connect to an LP&#39;s test and production service respectively. The LCP expects that the LP&#39;s web service is promoted from test to production.</p>\n<p>To test the integration, we can:</p>\n<ol>\n<li>Call your LP webservice with a simulated LCP request.</li>\n<li>Perform end-to-end test transactions with an Application on the LCP.</li>\n</ol>\n<h2 id=\"monitoring\">Monitoring</h2>\n<p>The LCP may perform health checks on LP endpoints to guarantee that your members have a quality experience.</p>\n";

/***/ }),
/* 187 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************!*\
  !*** ./app/documents/reference-manual.md ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<h1 id=\"lcp-reference-manual\">LCP Reference Manual</h1>\n<p>For Points Loyalty Commerce Platform - Version 1.0</p>\n<h2 id=\"document-overview\">Document Overview</h2>\n<p>This document contains an in-depth description of the Points Loyalty Commerce\nPlatform (LCP). You will find below descriptions of the platform,\nauthentication, and error codes. This document assumes have read the <a href=\"./\">LCP Getting\nStarted Guide for Developers</a>. For a detailed description of the API, see the <a href=\"./?doc=api-reference\">LCP\nAPI Reference</a>.</p>\n<h2 id=\"sandbox-vs-live\">Sandbox vs Live</h2>\n<p>The LCP operates in two modes: sandbox mode and live mode. Sandbox mode is\naccessed at <code>https://sandbox.lcp.points.com</code> while live mode is accessed at\n<code>https://lcp.points.com</code>. Each has a separate set of credentials for\nauthentication. When you create an application, you will get a set of sandbox\ncredentials for use in the sandbox environment. Live mode credentials are issued\nby Points when you’re ready to deploy your application.</p>\n<p>Use sandbox mode during development and to test your application. In the\nSandbox, you can test your application against one or more loyalty programs\nwithout affecting live member accounts of the loyalty programs. Sandbox mode\nnever affects member accounts; all operations are simulated. The API reference\ndescribes how to simulate different success and failure conditions in sandbox\nmode that your app will experience in live mode.</p>\n<p>To go live, you’ll need to request live credentials from Points. Once your\nreceive them, you’ll need to update your application to use the live credentials\nand the live endpoint located at <code>https://lcp.points.com</code>. Only Live credentials\nhave permission to access this endpoint. Once in the live environment, we\nrecommend you run additional tests using live test accounts for each of the\nloyalty programs your app interacts.</p>\n<h2 id=\"versioning\">Versioning</h2>\n<p>The LCP uses version numbering in the URI. To access the version of the API\ndescribed in this document use <code>https://sandbox.lcp.points.com/v1/</code> or\n<code>https://lcp.points.com/v1/</code>. New versions will be created for backwards\nincompatible changes to the API. We will notify you of new versions of the API\nand give you time to transition to the new version before discontinuing support\nfor the old version.</p>\n<h2 id=\"multiple-data-centers\">Multiple Data Centers</h2>\n<p>The LCP is a high availability service operating in multiple data centers\nglobally. The platform is designed to maximize availability and scalability but\nunderstanding how the LCP works will ensure your Application knows what to\nexpect.</p>\n<p>Requests to the LCP are routed to the closest data center. Unless that data\ncenter fails or you change geographies (significantly) your requests will\ncontinue to be routed to the same data center. Requests that change data in one\ndata center are replicated to the other data centers. Replication happens\nquickly and in the background so as not to delay processing of your requests.\nSince your requests typically hit the same data center, replication is generally\ninvisible to your application. This characteristic of the LCP is called eventual\nconsistency. For more background information on this topic please reference\n<a href=\"http://www.allthingsdistributed.com/2008/12/eventually_consistent.html\">Eventually Consistent -\nRevisited</a>.</p>\n<p>In the unlikely event of a data center failing, the LCP will automatically\nfailover to a secondary data center. This may result in recently created\nresources not being immediately available in the data center to which you fail\nover until replication has completed. To get started don&#39;t worry about this\nfailure scenario. However, keep in mind that you in rare instances, you may need\nto wait and resend your request to access recently created or modified data.</p>\n<h2 id=\"authorization\">Authorization</h2>\n<p>The LCP uses OAuth 2.0 Message Authentication Code (MAC) Tokens to authenticate\nrequests to the platform. This version of the LCP API matches <a href=\"http://tools.ietf.org/html/draft-ietf-oauth-v2-http-mac-02\">draft 02 of the\nOAuth 2.0 MAC Token\nspecification</a>. We\nhave provided a set of <a href=\"https://github.com/Points/Loyalty-Commerce-Platform/tree/master/util\">LCP Client\nUtilities</a>\nto help you get started with OAuth 2.0 MAC authentication.</p>\n<h3 id=\"types-of-credentials\">Types of Credentials</h3>\n<p>There are three types of MAC credentials used in the LCP:</p>\n<ol>\n<li><a href=\"./?doc=api-reference#account-credentials\">Account credentials</a> are\nused to authenticate you when accessing <code>/accounts</code> and\n<code>/apps</code> resources. Account credentials are created automatically when you\ncreate an account.</li>\n<li><a href=\"./?doc=api-reference#sandbox-credentials\">Sandbox credentials</a> are\nused by your app to authenticate its requests to the <code>/lps</code> resource in the\nsandbox environment. Sandbox credentials are created automatically when you\ncreate an app.</li>\n<li><a href=\"./?doc=api-reference#live-credentials\">Live credentials</a> are used by\nyour app to authenticate its requests to the <code>/lps</code> resource in the live\nenvironment. Live credentials are managed by Points.</li>\n</ol>\n<p>Each set of credentials include a MAC key identifier, a MAC key and a MAC\nalgorithm. The MAC key identifier uniquely identifies the MAC key. The MAC key\nidentifier is sent with each request to tell the server which MAC key was used\nto sign the request. The MAC key is the shared secret key. It should never be\nshared with anyone or transmitted in any request. Keep this key secure as you\nwould any private key. Finally, the MAC algorithm describes the algorithm used\nto create the signature. It is always set to <code>HMAC-SHA1</code>.</p>\n<pre><code>{\n  &quot;macKeyIdentifier&quot;: &quot;97ee420faaa343d4a04b7378b319b48b&quot;,\n  &quot;macKey&quot;: &quot;NyWslT0Oe7ZNJynyUIwg-SRj3A44DD_lrH6_-dwZ6E4&quot;,\n  &quot;macAlgorithm&quot;: &quot;HMAC-SHA1&quot;\n}\n</code></pre><p>NOTE: The MAC key is <a href=\"http://tools.ietf.org/html/rfc4648\">Base64</a> encoded using\na URL-safe alphabet, which substitutes <code>-</code> instead of <code>+</code> and <code>_</code> instead of <code>/</code>\nin the standard Base64 alphabet. TheMAC key also may not contain padding\n(represented with the <code>=</code> character). Prior to using the MAC key, decode it from\nBase64.</p>\n<h3 id=\"the-authorization-header\">The Authorization Header</h3>\n<p>Except when creating an account, all requests to the platform must include an\nauthorization header. The authorization header includes the authorization type\n“MAC” and the following five fields:</p>\n<table>\n  <thead>\n    <tr>\n      <th>Field</th>\n      <th>Description</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>id</td>\n      <td>The MAC key identifier that uniquely identifies the MAC key used to generated the MAC signature.</td>\n    </tr>\n    <tr>\n      <td>ts</td>\n      <td>An integer timestamp equal to the number of seconds since January 1, 1970 00:00:00 UTC. This is also known as POSIX time or Unix time. Requests are only valid within 30 seconds of the timestamp.</td>\n    </tr>\n    <tr>\n      <td>nonce</td>\n      <td>An arbitrary string that must be different for each request in a 30 second window with the same MAC key identifier. Used to prevent replay attacks.</td>\n    </tr>\n    <tr>\n      <td>ext</td>\n      <td>The extension string is used to verify the contents of the request. It is an empty string for GET and DELETE request. For PUT and POST requests, concatenate the value of the Content-Type header (e.g. “application/json”) with the request body and hash it with SHA1.</td>\n    </tr>\n    <tr>\n      <td>mac</td>\n      <td>The MAC signature for this request. The MAC signature is a Base64 encoded string that is generated by the HMAC-SHA1 algorithm, the MAC key, and the normalized request string. This process is described in the next section.</td>\n    </tr>\n  </tbody>\n</table>\n\n<p>Note that the MAC key is not included in the authorization header. This key is a\nsecret and should not be included in any request. Here is an example of an\nauthorization header:</p>\n<pre><code>Authorization: MAC id=&quot;97ee420faaa343d4a04b7378b319b48b&quot;,\n                   ts=&quot;1379541939&quot;,\n                   nonce=&quot;OK3HY80lkQ0=&quot;,\n                   ext=&quot;&quot;,\n                   mac=&quot;EmYShgBbKjp7XB3gbZq9e0zZy+8=&quot;\n</code></pre><p>When this authorization header is provided in requests to protected resources,\nthe LCP authenticates the request using the following steps:</p>\n<ol>\n<li>Checks that the timestamp is within 30 seconds of the current time.</li>\n<li>Checks that the nonce has not been used in a previous request with the same\nMAC key identifier in the 30 second window.</li>\n<li>Checks the MAC signature by using the same process as the client. Using the\nMAC key that corresponds to the MAC key identifier and the request details,\nthe LCP generates a MAC signature for this request and compares it to the one\nthat was passed in the authorization header.</li>\n<li>Generates the extension string and verifies that it matches the string provided in the authorization header.</li>\n</ol>\n<p>If all of these conditions are met the request is authenticated.</p>\n<h3 id=\"generating-the-mac-signature\">Generating the MAC Signature</h3>\n<p>The MAC signature is generated using the MAC key and a normalized request string\nthat contains the details of the request. The normalized request string is\nassembled as follows (<code>\\n</code> indicates a new line character at the end of every\nline):</p>\n<table>\n  <thead>\n    <tr>\n      <th>Format</th>\n      <th>GET Example</th>\n      <th>POST Example</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>\n        Timestamp\\n<br>\n        Nonce\\n<br>\n        HTTP Method (all caps)\\n<br>\n        Path\\n<br>\n        Hostname\\n<br>\n        Port\\n<br>\n        Extension\\n<br>\n      </td>\n      <td>\n        1377721336\\n<br>\n        4FvtoumTybo=\\n<br>\n        GET\\n<br>\n        /v1/apps/\\n<br>\n        lcp.points.com\\n<br>\n        443\\n<br>\n        \\n<br>\n      </td>\n      <td>\n        1377724146\\n<br>\n        u8BNUfE5Gu8=\\n<br>\n        POST\\n<br>\n        /v1/apps/\\n<br>\n        lcp.points.com\\n<br>\n        443\\n<br>\n        a9d46382c97bd4b0475b5b152dddaf2d61c0a30d\\n<br>\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n<ul>\n<li><strong>Timestamp:</strong> The number of seconds since January 1, 1970 00:00:00 UTC. This\nis also known as POSIX time or Unix time. Requests are only valid within 30\nseconds of the timestamp.</li>\n<li><strong>Nonce:</strong> An arbitrary string that must be different for each request in a 30\nsecond window with the same MAC ID.</li>\n<li><strong>HTTP Method:</strong> One of GET, PUT, POST, or DELETE (must be uppercase).</li>\n<li><strong>Path:</strong> The path to the resource on the server. Starts with the slash after\nthe hostname/port in the URI.</li>\n<li><strong>Hostname:</strong> The hostname of the server in the HTTP request. Do not include\nthe protocol (<code>https://</code>), port or path.</li>\n<li><strong>Port:</strong> The port for the HTTP request. Use 443 for HTTPS.</li>\n<li><strong>Extension:</strong> Blank for GET and DELETE request. For PUT and POST requests,\nconcatenate the value of the Content-Type header (e.g. <code>application/json</code>)\nwith the request body and hash it with SHA1.</li>\n</ul>\n<p>This normalized request string and the MAC key are fed into the HMAC-SHA1\nalgorithm to obtained the binary MAC signature. The binary signature is\n<a href=\"http://tools.ietf.org/html/rfc4648\">Base64</a> encoded for inclusion in the\n<a href=\"#the-authorization-header\">authorization header</a> for the request.</p>\n<p>Here is an example of using the HMAC-SHA1 algorithm to generate the signature in Python:</p>\n<pre><code>def generate_signature(mac_key, normalized_request_string):\n    &quot;&quot;&quot;Generate a request&#39;s MAC given a normalized request string (aka\n    a summary of the key elements of the request and the mac key (shared\n    secret).&quot;&quot;&quot;\n\n    import hmac\n    import hashlib\n    import base64\n\n    # Add padding to the MAC key if needed\n    mac_key+= &#39;=&#39; * (4 - len(mac_key) % 4)\n\n    # Base64 decode the MAC key using URL-safe alphabet\n    mac_key= base64.urlsafe_b64decode(mac_key)\n\n    # Create the hash\n    hashed = hmac.new(mac_key, normalized_request_string, hashlib.sha1)\n\n    # Base64 encode the result\n    return base64.b64encode(hashed.digest())\n</code></pre><h2 id=\"correlation-id\">Correlation ID</h2>\n<p>Every request sent to the LCP is assigned a correlation ID. This value is returned\nin the API response in the <code>PTS-LCP-CID</code> header. When inquiring about a request, send\nthis value to Points to help us find your request as quickly as possible.</p>\n<h2 id=\"single-sign-on-sso-\">Single Sign-On (SSO)</h2>\n<p>There are two ways to validate loyalty program member credentials and obtain account\nbalances: direct MV and SSO MV.</p>\n<p><img src=\"" + __webpack_require__(/*! ../images/sso.png */ 28) + "\" alt=\"SSO\"></p>\n<h3 id=\"direct-mv\">Direct MV</h3>\n<p>Applications perform a member validation against a loyalty program. Applications\n<a href=\"./?doc=api-reference#create-a-mv\">create an MV</a> and provide the member’s\ncredentials. The LCP verifies these credentials with the loyalty program and returns\nthe member’s account balance to the application. This is the simplest solution for\nboth applications and loyalty programs, but requires the application to collect\nmember credentials.</p>\n<h3 id=\"sso-mv\">SSO MV</h3>\n<p>Single sign-on doesn’t require any application built on top of the Loyalty Commerce Platform to collect member credentials and\navoids requiring the member to login with both the loyalty program website and the\napplication. If the member is already signed in on the loyalty program’s website and\nthe loyalty program’s website links to the application, the loyalty program can\nprovide the member’s info to the LCP and allow the application to retrieve it without\nsharing any confidential information about the member through the web browser. SSO is\na five step process:</p>\n<ol>\n<li>The Loyalty Program <a href=\"./?doc=api-reference#create-a-mv-delegate\">creates an MV delegate</a>\non the LCP. The loyalty program provides the member info needed to create an MV and\n&quot;delegates&quot; the MV to the application so that the application has permission to access\nthe MV. The LCP creates the MV and returns the MV URL to the loyalty program.</li>\n<li>The loyalty program redirects the user to the application and provides the\napplication with the MV delegate URL. No member information is passed in the redirect. It\nis securely stored in the LCP.</li>\n<li>The application <a href=\"./?doc=api-reference#get-a-mv-delegate\">gets the MV delegate</a> from the LCP using the MV delegate\nURL to securely obtain the location of the MV.</li>\n<li>The application <a href=\"./?doc=api-reference#get-a-mv\">gets the MV</a> from the LCP using the MV\nURL in the MV delegate to securely obtain information about the member and perform transactions.\nAuthenticating factors like the member’s password are not shared with the application.</li>\n<li>If necessary, the application gets the member details from the LCP by appending &quot;/member-details&quot;\nto the MV URL to securly obtain additional information about the member.</li>\n</ol>\n<p>To see a reference implementation of this, please proceed to the <a href=\"https://github.com/Points/Loyalty-Commerce-Platform/tree/master/samples/java/sso-reference-implementation\">LCP Samples</a>.</p>\n<h2 id=\"real-time-vs-batch\">Real-time vs Batch</h2>\n<p>Moving points in or out of loyalty accounts can happen either in real-time or in a\nperiodic batch process. The process used depends on the loyalty program. Applications\nshould be built to handle both cases so they can work with any loyalty program. Even\nwhen using a single loyalty program, applications should test both processes in\nsandbox mode in case the loyalty program changes their process in the future.</p>\n<p><img src=\"" + __webpack_require__(/*! ../images/batch.png */ 19) + "\" alt=\"Batch\"></p>\n<h3 id=\"real-time\">Real-time</h3>\n<p>Most loyalty programs process debits and credits in real-time. When applications\ncreate debits or credits, the LCP forwards the request to the loyalty program and the\nloyalty program processes the request immediately. The LCP tells the application\nwhether the debit or credit succeeded.</p>\n<h3 id=\"batch\">Batch</h3>\n<p>A few loyalty programs process debits and/or credits in a batch process. When the LCP\nreceives a request, it returns a status of pending and queues the request.\nPeriodically, the LCP sends the queued requests to the loyalty program for processing\n(this happens once a day for most LPs). Some time later (typically within 24 hours),\nthe LP returns the result of all the debits and credits in the batch. The application\nshould periodically poll pending debits or credits to determine their result.</p>\n<h2 id=\"using-orders\">Using Orders</h2>\n<p>All transactions must be part of an order for them to appear in the order search\nsupport tool and the transaction reports in the <a href=\"https://admin.lcp.points.com/\">LCP\nAdmin</a> console. An order is a composite transaction\nthat associates multiple primitive transactions together. Primitive transactions\ninclude MVs, debits, and credits. The order contains details about the composite\ntransaction and its fulfillment history. Additional metadata about the order can also\nbe included in the data section.</p>\n<p>There are six steps for using orders:</p>\n<ol>\n<li>Create an MV</li>\n<li>Create an order</li>\n<li>Add the MV to the order</li>\n<li>Create the debit or credit</li>\n<li>Update the status of the order</li>\n<li>Search for updated orders</li>\n</ol>\n<h3 id=\"create-an-mv\">Create an MV</h3>\n<p>The first step is to <a href=\"./?doc=api-reference#create-a-mv\">create a member validation\n(MV)</a> to validate the member&#39;s credentials. Let&#39;s\ncreate a sandbox MV for Flying Blue like we did in the <a href=\"./#perform-a-member-validation-mv-\">LCP Getting Started\nGuide</a>. Use your application&#39;s sandbox\ncredentials to sign the request.</p>\n<pre><code>POST https://sandbox.lcp.points.com/v1/lps/3b6a77e6-cb40-4b28-a146-341c5862fab6/mvs/\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n{\n  &quot;identifyingFactors&quot;: {\n    &quot;memberId&quot;: &quot;2202&quot;\n  },\n  &quot;authenticatingFactors&quot;: {\n    &quot;password&quot;: &quot;PASSWORD&quot;\n  }\n}\n</code></pre><p>If the member credentials are correct, you&#39;ll receive the member&#39;s balance:</p>\n<pre><code>201 CREATED\nlocation: https://sandbox.lcp.points.com/v1/lps/3b6a77e6-cb40-4b28-a146-341c5862fab6/mvs/09651217-c154-4bcb-853f-cdf379ad7e54\n{\n  &quot;application&quot;: &quot;https://sandbox.lcp.points.com/v1/apps/3ac20648-bce1-4385-9725-83ba3a2161cc&quot;,\n  &quot;authenticatingFactors&quot;: {\n    &quot;password&quot;: &quot;*****&quot;\n  },\n  &quot;balance&quot;: 100000,\n  &quot;createdAt&quot;: &quot;2014-02-26T17:46:00.000000Z&quot;,\n  &quot;identifyingFactors&quot;: {\n    &quot;memberId&quot;: &quot;2202&quot;\n  },\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/3b6a77e6-cb40-4b28-a146-341c5862fab6/mvs/09651217-c154-4bcb-853f-cdf379ad7e54&quot;\n    }\n  },\n  &quot;loyaltyProgram&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/3b6a77e6-cb40-4b28-a146-341c5862fab6&quot;,\n  &quot;status&quot;: &quot;success&quot;,\n  &quot;type&quot;: &quot;memberValidation&quot;,\n  &quot;updatedAt&quot;: &quot;2014-02-26T17:46:00.000000Z&quot;\n}\n</code></pre><h3 id=\"create-an-order\">Create an Order</h3>\n<p>After the user has successfully validated their credentials, you can <a href=\"./?doc=api-reference#create-an-order\">create an\norder</a> for them. The order type can be either\nEXCHANGE_CREDIT for credit orders or REDEEM_DEBIT for debit orders. Contact Points to\ndetermine which order type you should use.</p>\n<pre><code>POST https://sandbox.lcp.points.com/v1/orders/\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n{\n  &quot;data&quot;: {\n    &quot;clientIpAddress&quot;: &quot;127.0.0.1&quot;,\n    &quot;clientUserAgent&quot;: &quot;Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:42.0) Gecko/20100101 Firefox/42.0&quot;,\n    &quot;language&quot;: &quot;en-US&quot;,\n    &quot;orderDetails&quot;: {\n      &quot;basePoints&quot;: 2000,\n      &quot;loyaltyProgram&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/3b6a77e6-cb40-4b28-a146-341c5862fab6&quot;\n    },\n    &quot;user&quot;: {\n      &quot;email&quot;: &quot;jdoe@example.com&quot;,\n      &quot;firstName&quot;: &quot;John&quot;,\n      &quot;lastName&quot;: &quot;Doe&quot;,\n      &quot;memberId&quot;: &quot;2202&quot;,\n      &quot;memberValidation&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/3b6a77e6-cb40-4b28-a146-341c5862fab6/mvs/09651217-c154-4bcb-853f-cdf379ad7e54&quot;\n    }\n  },\n  &quot;orderType&quot;: &quot;EXCHANGE_CREDIT&quot;\n}\n</code></pre><p>The order is created with the order details. The order confirmation number can be\nprovided to the user in case they need to inquire about their order later. The order\nstatus is set to &quot;initial&quot;.</p>\n<pre><code>201 CREATED\nlocation: https://sandbox.lcp.points.com/v1/orders/12f5a924-1126-4e0c-900a-0a103f4146c0\n{\n  &quot;application&quot;: &quot;https://sandbox.lcp.points.com/v1/apps/3ac20648-bce1-4385-9725-83ba3a2161cc&quot;,\n  &quot;confirmationNumber&quot;: &quot;3902-2266-8404-8538-1721&quot;,\n  &quot;createdAt&quot;: &quot;2014-02-26T17:47:00.000000Z&quot;,\n  &quot;data&quot;: {\n    &quot;clientIpAddress&quot;: &quot;127.0.0.1&quot;,\n    &quot;clientUserAgent&quot;: &quot;Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:42.0) Gecko/20100101 Firefox/42.0&quot;,\n    &quot;language&quot;: &quot;en-US&quot;,\n    &quot;orderDetails&quot;: {\n      &quot;basePoints&quot;: 2000,\n      &quot;loyaltyProgram&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/3b6a77e6-cb40-4b28-a146-341c5862fab6&quot;\n    },\n    &quot;user&quot;: {\n      &quot;email&quot;: &quot;jdoe@example.com&quot;,\n      &quot;firstName&quot;: &quot;John&quot;,\n      &quot;lastName&quot;: &quot;Doe&quot;,\n      &quot;memberId&quot;: &quot;2202&quot;,\n      &quot;memberValidation&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/3b6a77e6-cb40-4b28-a146-341c5862fab6/mvs/09651217-c154-4bcb-853f-cdf379ad7e54&quot;\n    }\n  },\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://sandbox.lcp.points.com/v1/orders/12f5a924-1126-4e0c-900a-0a103f4146c0&quot;\n    }\n  },\n  &quot;orderType&quot;: &quot;EXCHANGE_CREDIT&quot;,\n  &quot;status&quot;: &quot;initial&quot;,\n  &quot;type&quot;: &quot;order&quot;,\n  &quot;updatedAt&quot;: &quot;2014-02-26T17:47:00.000000Z&quot;,\n  &quot;updates&quot;: []\n}\n</code></pre><h3 id=\"add-the-mv-to-the-order\">Add the MV to the Order</h3>\n<p>The MV you created in the first step needs to be associated with the new order you just\ncreated. To do that, <a href=\"./?doc=api-reference#update-a-mv\">PATCH the MV</a> with a link to\nthe order:</p>\n<pre><code>PATCH https://sandbox.lcp.points.com/v1/lps/3b6a77e6-cb40-4b28-a146-341c5862fab6/mvs/09651217-c154-4bcb-853f-cdf379ad7e54\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n{\n  &quot;order&quot;: &quot;https://sandbox.lcp.points.com/v1/orders/12f5a924-1126-4e0c-900a-0a103f4146c0&quot;\n}\n</code></pre><p>The updated MV is returned in the response:</p>\n<pre><code>200 OK\n{\n  &quot;application&quot;: &quot;https://sandbox.lcp.points.com/v1/apps/3ac20648-bce1-4385-9725-83ba3a2161cc&quot;,\n  &quot;authenticatingFactors&quot;: {\n    &quot;password&quot;: &quot;*****&quot;\n  },\n  &quot;balance&quot;: 100000,\n  &quot;createdAt&quot;: &quot;2014-02-26T17:46:00.000000Z&quot;,\n  &quot;identifyingFactors&quot;: {\n    &quot;memberId&quot;: &quot;2202&quot;\n  },\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/3b6a77e6-cb40-4b28-a146-341c5862fab6/mvs/09651217-c154-4bcb-853f-cdf379ad7e54&quot;\n    }\n  },\n  &quot;loyaltyProgram&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/3b6a77e6-cb40-4b28-a146-341c5862fab6&quot;,\n  &quot;order&quot;: &quot;https://sandbox.lcp.points.com/v1/orders/12f5a924-1126-4e0c-900a-0a103f4146c0&quot;,\n  &quot;status&quot;: &quot;success&quot;,\n  &quot;type&quot;: &quot;memberValidation&quot;,\n  &quot;updatedAt&quot;: &quot;2014-02-26T17:47:30.000000Z&quot;\n}\n</code></pre><h3 id=\"create-the-debit-or-credit\">Create the Debit or Credit</h3>\n<p>Now you can add (credit) or remove (debit) points from the member&#39;s account. In this\nexample, we&#39;ll <a href=\"./?doc=api-reference#create-a-credit\">create a credit</a> to add 2000\npoints to the member&#39;s account:</p>\n<pre><code>POST https://sandbox.lcp.points.com/v1/lps/3b6a77e6-cb40-4b28-a146-341c5862fab6/credits/\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n{\n  &quot;amount&quot;: 2000,\n  &quot;memberValidation&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/3b6a77e6-cb40-4b28-a146-341c5862fab6/mvs/09651217-c154-4bcb-853f-cdf379ad7e54&quot;\n}\n</code></pre><p>The credit is automatically added to the same order as the MV. The credit status can\nbe success, failure, systemError or pending. Failure means that the LP rejected the\nrequest. A system error means there was a problem communicating with the LP. Points\nwill investigate system errors to determine if the transaction went through. Pending\nmeans the credit will be sent in a nightly batch file to the LP and it will be\nupdated later with the result. This credit came back successful:</p>\n<pre><code>201 CREATED\nlocation: https://sandbox.lcp.points.com/v1/lps/3b6a77e6-cb40-4b28-a146-341c5862fab6/credits/d38a9ecf-0863-4a7f-81d6-0efaf15a4425\n{\n  &quot;amount&quot;: 2000,\n  &quot;application&quot;: &quot;https://sandbox.lcp.points.com/v1/apps/3ac20648-bce1-4385-9725-83ba3a2161cc&quot;,\n  &quot;createdAt&quot;: &quot;2014-02-26T17:49:00.000000Z&quot;,\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/3b6a77e6-cb40-4b28-a146-341c5862fab6/credits/d38a9ecf-0863-4a7f-81d6-0efaf15a4425&quot;\n    }\n  },\n  &quot;loyaltyProgram&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/3b6a77e6-cb40-4b28-a146-341c5862fab6&quot;,\n  &quot;memberValidation&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/3b6a77e6-cb40-4b28-a146-341c5862fab6/mvs/09651217-c154-4bcb-853f-cdf379ad7e54&quot;,\n  &quot;order&quot;: &quot;https://sandbox.lcp.points.com/v1/orders/12f5a924-1126-4e0c-900a-0a103f4146c0&quot;,\n  &quot;status&quot;: &quot;success&quot;,\n  &quot;transactionId&quot;: &quot;15786560&quot;,\n  &quot;type&quot;: &quot;credit&quot;,\n  &quot;updatedAt&quot;: &quot;2014-02-26T17:49:00.000000Z&quot;\n}\n</code></pre><h3 id=\"update-the-status-of-the-order\">Update the Status of the Order</h3>\n<p>The next step is to <a href=\"./?doc=api-reference#update-an-order\">update the order</a> with its\nstatus. Update the order status based on the status of the debit or credit:</p>\n<table>\n  <thead>\n    <tr>\n      <th>Debit/Credit Status</th>\n      <th>Order Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>success</td>\n      <td>complete</td>\n    </tr>\n    <tr>\n      <td>failure</td>\n      <td>debitFailed/creditFailed</td>\n    </tr>\n    <tr>\n      <td>systemError</td>\n      <td>debitError/creditError</td>\n    </tr>\n    <tr>\n      <td>pending</td>\n      <td>debitPending/creditPending</td>\n    </tr>\n  </tbody>\n</table>\n\n<p>In this case, the credit status is &quot;success&quot; so let’s update the order status to\n&quot;complete&quot;:</p>\n<pre><code>PATCH https://sandbox.lcp.points.com/v1/orders/12f5a924-1126-4e0c-900a-0a103f4146c0\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n{\n  &quot;status&quot;: &quot;complete&quot;\n}\n</code></pre><p>The order with the updated status is returned. Note that the &quot;updates&quot; section of the\norder includes the order fulfillment history including the MV and the credit.</p>\n<pre><code>200 OK\n{\n  &quot;application&quot;: &quot;https://sandbox.lcp.points.com/v1/apps/3ac20648-bce1-4385-9725-83ba3a2161cc&quot;,\n  &quot;confirmationNumber&quot;: &quot;3902-2266-8404-8538-1721&quot;,\n  &quot;createdAt&quot;: &quot;2014-02-26T17:47:00.000000Z&quot;,\n  &quot;data&quot;: {\n    &quot;clientIpAddress&quot;: &quot;127.0.0.1&quot;,\n    &quot;clientUserAgent&quot;: &quot;Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:42.0) Gecko/20100101 Firefox/42.0&quot;,\n    &quot;language&quot;: &quot;en-US&quot;,\n    &quot;orderDetails&quot;: {\n      &quot;basePoints&quot;: 2000,\n      &quot;loyaltyProgram&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/3b6a77e6-cb40-4b28-a146-341c5862fab6&quot;\n    },\n    &quot;user&quot;: {\n      &quot;email&quot;: &quot;jdoe@example.com&quot;,\n      &quot;firstName&quot;: &quot;John&quot;,\n      &quot;lastName&quot;: &quot;Doe&quot;,\n      &quot;memberId&quot;: &quot;2202&quot;,\n      &quot;memberValidation&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/3b6a77e6-cb40-4b28-a146-341c5862fab6/mvs/09651217-c154-4bcb-853f-cdf379ad7e54&quot;\n    }\n  },\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://sandbox.lcp.points.com/v1/orders/12f5a924-1126-4e0c-900a-0a103f4146c0&quot;\n    }\n  },\n  &quot;orderType&quot;: &quot;EXCHANGE_CREDIT&quot;,\n  &quot;status&quot;: &quot;complete&quot;,\n  &quot;type&quot;: &quot;order&quot;,\n  &quot;updatedAt&quot;: &quot;2014-02-26T17:50:00.000000Z&quot;,\n  &quot;updates&quot;: [\n    {\n      &quot;resource&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/3b6a77e6-cb40-4b28-a146-341c5862fab6/mvs/09651217-c154-4bcb-853f-cdf379ad7e54&quot;,\n      &quot;status&quot;: &quot;success&quot;,\n      &quot;type&quot;: &quot;memberValidation&quot;,\n      &quot;updatedAt&quot;: &quot;2014-02-26T17:47:30.000000Z&quot;\n    },\n    {\n      &quot;resource&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/3b6a77e6-cb40-4b28-a146-341c5862fab6/credits/d38a9ecf-0863-4a7f-81d6-0efaf15a4425&quot;,\n      &quot;status&quot;: &quot;success&quot;,\n      &quot;type&quot;: &quot;credit&quot;,\n      &quot;updatedAt&quot;: &quot;2014-02-26T17:49:00.000000Z&quot;\n    }\n  ]\n}\n</code></pre><h3 id=\"search-for-updated-orders\">Search for Updated Orders</h3>\n<p>Orders can be updated at a later time for the following reasons:</p>\n<ul>\n<li>A pending debit or credit succeeded or failed</li>\n<li>A debit or credit with a status of systemError has been investigated and updated to\nsuccess or failure</li>\n<li>The debit or credit has been reversed and the points have been added back to or removed\nfrom the user&#39;s account</li>\n</ul>\n<p>If any of these events happen, the order will have a new entry in its &quot;updates&quot;\nsection describing the change. This section is append only so old entries are not\nreplaced, which allows you to see the order fulfillment history. When the order is\nupdated, its status changes to &quot;statusPending&quot; indicating you need to recalculate the\nstatus of the order. Periodically, you should <a href=\"./?doc=api-reference#list-all-orders\">search for\norders</a> with a status of &quot;statusPending&quot; and\nupdate their status:</p>\n<pre><code>GET https://sandbox.lcp.points.com/v1/search/orders/?q=status:statusPending\nAuthorization: MAC id=&quot;...&quot;, ts=&quot;...&quot;, nonce=&quot;...&quot;, ext=&quot;...&quot;, mac=&quot;...&quot;\n</code></pre><p>Here is an order where the batch credit was updated from &quot;pending&quot; to &quot;success&quot;. The\norder status needs to be updated to &quot;complete&quot;.</p>\n<pre><code>200 OK\n{\n  &quot;orders&quot; : [\n    {\n      &quot;application&quot;: &quot;https://sandbox.lcp.points.com/v1/apps/3ac20648-bce1-4385-9725-83ba3a2161cc&quot;,\n      &quot;confirmationNumber&quot;: &quot;3902-2266-8404-8538-1721&quot;,\n      &quot;createdAt&quot;: &quot;2014-02-26T17:47:00.000000Z&quot;,\n      &quot;data&quot;: {\n        &quot;clientIpAddress&quot;: &quot;127.0.0.1&quot;,\n        &quot;clientUserAgent&quot;: &quot;Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:42.0) Gecko/20100101 Firefox/42.0&quot;,\n        &quot;language&quot;: &quot;en-US&quot;,\n        &quot;orderDetails&quot;: {\n          &quot;basePoints&quot;: 2000,\n          &quot;loyaltyProgram&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/3b6a77e6-cb40-4b28-a146-341c5862fab6&quot;\n        },\n        &quot;user&quot;: {\n          &quot;email&quot;: &quot;jdoe@example.com&quot;,\n          &quot;firstName&quot;: &quot;John&quot;,\n          &quot;lastName&quot;: &quot;Doe&quot;,\n          &quot;memberId&quot;: &quot;2202&quot;,\n          &quot;memberValidation&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/3b6a77e6-cb40-4b28-a146-341c5862fab6/mvs/09651217-c154-4bcb-853f-cdf379ad7e54&quot;\n        }\n      },\n      &quot;links&quot;: {\n        &quot;self&quot;: {\n          &quot;href&quot;: &quot;https://sandbox.lcp.points.com/v1/orders/12f5a924-1126-4e0c-900a-0a103f4146c0&quot;\n        }\n      },\n      &quot;orderType&quot;: &quot;EXCHANGE_CREDIT&quot;,\n      &quot;status&quot;: &quot;statusPending&quot;,\n      &quot;type&quot;: &quot;order&quot;,\n      &quot;updatedAt&quot;: &quot;2014-02-26T17:50:00.000000Z&quot;,\n      &quot;updates&quot;: [\n        {\n          &quot;resource&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/3b6a77e6-cb40-4b28-a146-341c5862fab6/mvs/09651217-c154-4bcb-853f-cdf379ad7e54&quot;,\n          &quot;status&quot;: &quot;success&quot;,\n          &quot;type&quot;: &quot;memberValidation&quot;,\n          &quot;updatedAt&quot;: &quot;2014-02-26T17:47:30.000000Z&quot;\n        },\n        {\n          &quot;resource&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/3b6a77e6-cb40-4b28-a146-341c5862fab6/credits/d38a9ecf-0863-4a7f-81d6-0efaf15a4425&quot;,\n          &quot;status&quot;: &quot;pending&quot;,\n          &quot;type&quot;: &quot;credit&quot;,\n          &quot;updatedAt&quot;: &quot;2014-02-26T17:49:00.000000Z&quot;\n        },\n        {\n          &quot;resource&quot;: &quot;https://sandbox.lcp.points.com/v1/lps/3b6a77e6-cb40-4b28-a146-341c5862fab6/credits/d38a9ecf-0863-4a7f-81d6-0efaf15a4425&quot;,\n          &quot;status&quot;: &quot;success&quot;,\n          &quot;type&quot;: &quot;credit&quot;,\n          &quot;updatedAt&quot;: &quot;2014-02-27T06:00:00.000000Z&quot;\n        }\n      ]\n    },\n    ...\n  ]\n}\n</code></pre><h2 id=\"http-status-codes\">HTTP Status Codes</h2>\n<p>HTTP status codes are used to indicate success or failure. Status codes in the\n<code>200s</code> indicate the request was successful. Status codes in the <code>400s</code> indicate\nclient errors. Status codes in the <code>500s</code> indicate server errors. Details of\nthe success or failure are contained in the body of the response.</p>\n<table>\n  <thead>\n    <tr>\n      <th>HTTP Status Code</th>\n      <th>Description</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>200 OK</td>\n      <td>The request completed successfully. The resource is contained in the body of the response.</td>\n    </tr>\n    <tr>\n      <td>201 Created</td>\n      <td>Request to create a resource completed successful. The URI of the created resource is included in the Location header in the response.</td>\n    </tr>\n    <tr>\n      <td>204 No Content</td>\n      <td>The request completed successfully with no content in the body of the message. Usually a response from a request to delete a resource.</td>\n    </tr>\n    <tr>\n      <td>400 Bad Request</td>\n      <td>The data provided in the request has incorrect. Check the JSON error response for details.</td>\n    </tr>\n    <tr>\n      <td>401 Unauthorized</td>\n      <td>Either the authorization header was not provided or was invalid.</td>\n    </tr>\n    <tr>\n      <td>404 Not Found</td>\n      <td>The requested resource was not found or the current user does not have permission to access it.</td>\n    </tr>\n    <tr>\n      <td>415 Unsupported Media Type</td>\n      <td>Returned if the request provided an unsupported content type. Only application/json is supported.</td>\n    </tr>\n    <tr>\n      <td>422 Unprocessable Entity</td>\n      <td>The data provided in the request is valid, but the request could not be completed for another reason. Check the JSON error response for details.</td>\n    </tr>\n    <tr>\n      <td>500 Internal Server Error</td>\n      <td>The server encountered an unexpected error.</td>\n    </tr>\n    <tr>\n      <td>502 Bad Gateway</td>\n      <td>An external upstream service issued an invalid response.</td>\n    </tr>\n  </tbody>\n</table>\n\n<h2 id=\"errors\">Errors</h2>\n<p>When the HTTP status code indicates a failure, the response includes a JSON\ndocument that lists the errors in a predictable format. The JSON contains a hash\ncalled “errors” that is an array of the errors encountered in the request. Here\nis an example of an error response:</p>\n<pre><code>{\n  &quot;errors&quot;: [\n    {\n      &quot;code&quot;: &quot;MISSING_FIELD&quot;,\n      &quot;description&quot;: &quot;&#39;name&#39; is required.&quot;,\n      &quot;field&quot;: &quot;name&quot;\n    },\n    {\n      &quot;code&quot;: &quot;MISSING_FIELD&quot;,\n      &quot;description&quot;: &quot;&#39;description&#39; is required.&quot;,\n      &quot;field&quot;: &quot;description&quot;\n    }\n  ]\n}\n</code></pre><p>Each error array element contains the following fields:</p>\n<table>\n  <thead>\n    <tr>\n      <th>Error Field</th>\n      <th>Description</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>code</td>\n      <td>A standard code describing the error. You can use this code to programmatically handle the error and take appropriate action. See below for a list of standard error codes.</td>\n    </tr>\n    <tr>\n      <td>description</td>\n      <td>A description of the error that further explains the error that can be displayed to the end-user</td>\n    </tr>\n    <tr>\n      <td>field</td>\n      <td>The name of the field in the request that caused the error (if applicable).</td>\n    </tr>\n  </tbody>\n</table>\n\n<p>Here is a list of possible error codes that the LCP may return:</p>\n<table>\n  <thead>\n    <tr>\n      <th>Error Code</th>\n      <th>Description</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>BAD_REQUEST</td>\n      <td>The browser (or proxy) sent a request that this server could not understand.</td>\n    </tr>\n    <tr>\n      <td>ELEMENTS_NOT_UNIQUE</td>\n      <td>The array requires that all elements are unique and it had duplicate items.</td>\n    </tr>\n    <tr>\n      <td>FORBIDDEN_LAST_CREDENTIALS</td>\n      <td>Unable to delete last set of credentials.</td>\n    </tr>\n    <tr>\n      <td>INCORRECT_TYPE</td>\n      <td>The value provided is of incorrect type. For example, a string was provided when an integer is required.</td>\n    </tr>\n    <tr>\n      <td>INELIGIBLE</td>\n      <td>The member is not eligible to perform this transaction.</td>\n    </tr>\n    <tr>\n      <td>INTERNAL_SERVER_ERROR</td>\n      <td>The server encountered an unexpected error.</td>\n    </tr>\n    <tr>\n      <td>INVALID_UPSTREAM_RESPONSE</td>\n      <td>An external upstream service issued an invalid response.</td>\n    </tr>\n    <tr>\n      <td>INVALID_VALUE</td>\n      <td>The value provided is not allowed. For example, the requested debit amount is greater than the balance on the member validation.</td>\n    </tr>\n    <tr>\n      <td>MAXIMUM_ATTEMPTS_EXCEEDED</td>\n      <td>The maximum number of incorrect MV attempts has been exceeded for this user.</td>\n    </tr>\n    <tr>\n      <td>MISSING_FIELD</td>\n      <td>A required field was not provided in the body of the request. The “field” property of the returned error object contains which required field was not provided.</td>\n    </tr>\n    <tr>\n      <td>MISSING_REPRESENTATION</td>\n      <td>The request expected a JSON object to be provided in the body of the request and none was provided.</td>\n    </tr>\n    <tr>\n      <td>MV_ALREADY_USED</td>\n      <td>The member validation has already been used with another transaction. Member validations can only be used for one transaction.</td>\n    </tr>\n    <tr>\n      <td>MV_LP_MISMATCH</td>\n      <td>The member validation provided was created for a different loyalty program.</td>\n    </tr>\n    <tr>\n      <td>NOT_FOUND</td>\n      <td>The requested URL was not found on the server.  If you entered the URL manually please check your spelling and try again.</td>\n    </tr>\n    <tr>\n      <td>NO_ENUM_MATCH</td>\n      <td>The enum field did not match any of the possible values.</td>\n    </tr>\n    <tr>\n      <td>NO_MATCH</td>\n      <td>A field provided in the request did not match the regular expression used to validate the field. The field name and regular expression is provided in the description of the error message.</td>\n    </tr>\n    <tr>\n      <td>TOO_FEW_ITEMS</td>\n      <td>The array did not have the minimum number of items.</td>\n    </tr>\n    <tr>\n      <td>UNAUTHORIZED</td>\n      <td>The server could not verify that you are authorized to access the URL requested.  You either supplied the wrong credentials (e.g. a bad password), or your browser doesn&#39;t understand how to supply the credentials required.</td>\n    </tr>\n    <tr>\n      <td>UNEXPECTED_PROPERTY</td>\n      <td>A JSON field was provided in the body of the request that is not supported. The “field” property of the returned error object contains the field that is not supported.</td>\n    </tr>\n    <tr>\n      <td>UNKNOWN_MEMBER</td>\n      <td>The loyalty program couldn&#39;t find a member with the given credentials.</td>\n    </tr>\n    <tr>\n      <td>UNSUPPORTED_MEDIA_TYPE</td>\n      <td>The server does not support the media type transmitted in the request. Only Content-Type: application/json is supported.</td>\n    </tr>\n    <tr>\n      <td>VALUE_NOT_UNIQUE</td>\n      <td>One of the fields you provided must be unique but the data provided already exists in the system.</td>\n    </tr>\n    <tr>\n      <td>VALUE_OUT_OF_RANGE</td>\n      <td>The number provided is outside of the range of valid input for the field. For example, a negative integer was provided when the number must be positive.</td>\n    </tr>\n    <tr>\n      <td>VALUE_TOO_LONG</td>\n      <td>A string in the JSON document exceeds the maximum length supported for this field.</td>\n    </tr>\n    <tr>\n      <td>VALUE_TOO_SHORT</td>\n      <td>A string in the JSON document does not meet the minimum length requirement for this field.</td>\n    </tr>\n  </tbody>\n</table>\n\n<h2 id=\"whitespace\">Whitespace</h2>\n<p>The LCP does not accept leading or trailing whitespace in any field in a JSON\ndocument. For example, if a user enters their first name as “John “ and your\napplication passes this onto the LCP in a member validation, the LCP will reject\nthis request. To avoid this type of error, always remove leading and trailing\nwhitespace from user input before passing it onto the LCP.</p>\n<h2 id=\"links\">Links</h2>\n<p>JSON response documents that are returned by the LCP contain a “links” property.\nThis property contains URLs that help you consume further resources within the\nLCP REST API. You should not create your own links to access and platform and\ninstead should follow the links provided. This allows your code to be less\ndependent on the implementation details of the API.</p>\n<p>The types of links provided are:</p>\n<table>\n  <thead>\n    <tr>\n      <th>Link Type</th>\n      <th>Description</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>self</td>\n      <td>A link to the current resource.</td>\n    </tr>\n    <tr>\n      <td>friendly</td>\n      <td>A more user-friendly link to the current resource.</td>\n    </tr>\n  </tbody>\n</table>\n\n<p>Each link has an href property that contains the link. For example:</p>\n<pre><code>{\n  &quot;links&quot;: {\n    &quot;self&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/accounts/&lt;id&gt;&quot;\n    },\n    &quot;friendly&quot;: {\n      &quot;href&quot;: &quot;https://lcp.points.com/v1/accounts/&lt;email&gt;&quot;\n    }\n  }\n}\n</code></pre>";

/***/ })
/******/ ]);