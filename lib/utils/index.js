"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getRandomNumber = void 0;

// 随机数 公式：Math.floor(Math.random() * 可能值的总数(即 max - min + 1) + 第一个可能的值(即 min));
var getRandomNumber = function getRandomNumber() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    max: Number.MAX_SAFE_INTEGER,
    min: Number.MIN_SAFE_INTEGER,
    isInteger: false
  },
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? Number.MAX_SAFE_INTEGER : _ref$max,
      _ref$min = _ref.min,
      min = _ref$min === void 0 ? Number.MIN_SAFE_INTEGER : _ref$min,
      _ref$isInteger = _ref.isInteger,
      isInteger = _ref$isInteger === void 0 ? false : _ref$isInteger;

  if (isInteger) {
    return Math.floor(Math.random() * (max - min + 1) + min); // 取整
  }

  return Math.random() * (max - min) + min; // 不取整
};

exports.getRandomNumber = getRandomNumber;
var _default = {
  getRandomNumber: getRandomNumber
};
exports["default"] = _default;