/*
 * @Author: qinWenMeng
 * @Date: 2020-03-27 15:59:33
 * @GitHub: https://github.com/qinWenMeng
 * @LastEditors: qinWenMeng
 * @LastEditTime: 2020-03-27 16:42:24
 */

export const transformDateTime = (t, bool = true) => {
  // 字符串类型日期转换为moment类型，moment类型的日期，无需转换
  const time = typeof t === 'string' ? moment(new Date(t)) : t;
  return time.format(bool ? 'YYYY-MM-DD kk:mm:ss' : 'YYYY-MM-DD');
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

export default {
  transformDateTime,
  isIntValue,
  isDecimalValue,
  isNumericValue,
  isAbsRangeValue,
  isZeroValue
};
