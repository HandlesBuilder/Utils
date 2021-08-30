// 防抖(debounce): 指触发事件后 n 秒后才执行函数，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。
export const useDebounce = (callback, delay) => {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
};

// 节流(throttle): 指连续触发事件，但是在 n 秒内，只执行一次函数。
export const useThrottle = (callback, delay) => {
  let canRun = true;
  return (...args) => {
    if (!canRun) return;
    canRun = false;
    setTimeout(() => {
      callback.apply(this, args);
      canRun = true;
    }, delay);
  };
};

export default {
  useDebounce,
  useThrottle
}
