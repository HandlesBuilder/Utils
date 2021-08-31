"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.useThrottle = exports.useDebounce = void 0;

var _this = void 0;

// 防抖(debounce): 指触发事件后 n 秒后才执行函数，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。
var useDebounce = function useDebounce(callback, delay) {
  var timer = null;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    clearTimeout(timer);
    timer = setTimeout(function () {
      callback.apply(_this, args);
    }, delay);
  };
}; // 节流(throttle): 指连续触发事件，但是在 n 秒内，只执行一次函数。


exports.useDebounce = useDebounce;

var useThrottle = function useThrottle(callback, delay) {
  var canRun = true;
  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (!canRun) return;
    canRun = false;
    setTimeout(function () {
      callback.apply(_this, args);
      canRun = true;
    }, delay);
  };
};

exports.useThrottle = useThrottle;
var _default = {
  useDebounce: useDebounce,
  useThrottle: useThrottle
};
exports["default"] = _default;