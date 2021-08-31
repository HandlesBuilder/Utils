// 随机数 公式：Math.floor(Math.random() * 可能值的总数(即 max - min + 1) + 第一个可能的值(即 min));
export const getRandomNumber = (
  {
    max = Number.MAX_SAFE_INTEGER,
    min = Number.MIN_SAFE_INTEGER,
    isInteger = false
  } = {
    max: Number.MAX_SAFE_INTEGER,
    min: Number.MIN_SAFE_INTEGER,
    isInteger: false
  }
) => {
  if (isInteger) {
    return Math.floor(Math.random() * (max - min + 1) + min); // 取整
  }
  return Math.random() * (max - min) + min; // 不取整
};

export default {
  getRandomNumber
};
