import moment from "moment";

export const transformDateTime = (t, hasTime = true) => {
  const time = typeof t === "string" ? moment(new Date(t)) : t;
  return time.format(hasTime ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD");
};

export const transTime = (time, flag) => {
  switch (flag) {
    case "start":
      return `${time} 00:00:00`;
    case "end":
      return `${time} 23:59:59`;
    default:
      return time;
  }
};

export const isAccept = (acceptType, fileName) => {
  return acceptType.split(",").some((type) => {
    const regExp = new RegExp(`\\${type}$`);
    return regExp.test(fileName);
  });
};

// 校验 min-max 整数
export const isIntValue = (val, { min, max }) => {
  const regex = new RegExp(`^[0-9]{${min},${max}}$`);
  return regex.test(val);
};

// 校验小数
export const isDecimalValue = (val) => {
  return /^\d+(\.\d+)?$/.test(val);
};

// 校验数值
export const isNumericValue = (val) => {
  return /^[+-]?\d+(\.\d+)?$/.test(val);
};

// 校验绝对值区间
export const isAbsRangeValue = (val, { min, max }) => {
  const value = Math.abs(val);
  return min <= value && value <= max;
};

// 校验 0 值
export const isZeroValue = (val) => {
  return Number(val) === 0;
};

export const downloadLink = (url, fileName = undefined) => {
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName ?? "";
  a.target = "_blank";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export const jobStatus = {
  unhandle: "1",
  importDb: "10",
  importDone: "13",
  handleBill: "15",
  handleDone: "30",
  handleOk: "100",
};

export default {
  transformDateTime,
  transTime,
  isAccept,
  isIntValue,
  isDecimalValue,
  isNumericValue,
  isAbsRangeValue,
  isZeroValue,
  downloadLink,
  jobStatus,
};
