"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.jobStatus = exports.downloadLink = exports.isZeroValue = exports.isAbsRangeValue = exports.isNumericValue = exports.isDecimalValue = exports.isIntValue = exports.isAccept = exports.transTime = exports.transformDateTime = void 0;

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var transformDateTime = function transformDateTime(t) {
  var hasTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var time = typeof t === "string" ? (0, _moment["default"])(new Date(t)) : t;
  return time.format(hasTime ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD");
};

exports.transformDateTime = transformDateTime;

var transTime = function transTime(time, flag) {
  switch (flag) {
    case "start":
      return "".concat(time, " 00:00:00");

    case "end":
      return "".concat(time, " 23:59:59");

    default:
      return time;
  }
};

exports.transTime = transTime;

var isAccept = function isAccept(acceptType, fileName) {
  return acceptType.split(",").some(function (type) {
    var regExp = new RegExp("\\".concat(type, "$"));
    return regExp.test(fileName);
  });
}; // 校验 min-max 整数


exports.isAccept = isAccept;

var isIntValue = function isIntValue(val, _ref) {
  var min = _ref.min,
      max = _ref.max;
  var regex = new RegExp("^[0-9]{".concat(min, ",").concat(max, "}$"));
  return regex.test(val);
}; // 校验小数


exports.isIntValue = isIntValue;

var isDecimalValue = function isDecimalValue(val) {
  return /^\d+(\.\d+)?$/.test(val);
}; // 校验数值


exports.isDecimalValue = isDecimalValue;

var isNumericValue = function isNumericValue(val) {
  return /^[+-]?\d+(\.\d+)?$/.test(val);
}; // 校验绝对值区间


exports.isNumericValue = isNumericValue;

var isAbsRangeValue = function isAbsRangeValue(val, _ref2) {
  var min = _ref2.min,
      max = _ref2.max;
  var value = Math.abs(val);
  return min <= value && value <= max;
}; // 校验 0 值


exports.isAbsRangeValue = isAbsRangeValue;

var isZeroValue = function isZeroValue(val) {
  return Number(val) === 0;
};

exports.isZeroValue = isZeroValue;

var downloadLink = function downloadLink(url) {
  var fileName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var a = document.createElement("a");
  a.href = url;
  a.download = fileName !== null && fileName !== void 0 ? fileName : "";
  a.target = "_blank";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

exports.downloadLink = downloadLink;
var jobStatus = {
  unhandle: "1",
  importDb: "10",
  importDone: "13",
  handleBill: "15",
  handleDone: "30",
  handleOk: "100"
};
exports.jobStatus = jobStatus;
var _default = {
  transformDateTime: transformDateTime,
  transTime: transTime,
  isAccept: isAccept,
  isIntValue: isIntValue,
  isDecimalValue: isDecimalValue,
  isNumericValue: isNumericValue,
  isAbsRangeValue: isAbsRangeValue,
  isZeroValue: isZeroValue,
  downloadLink: downloadLink,
  jobStatus: jobStatus
};
exports["default"] = _default;