export function debounce(fn, ms) {
    let timer;
  
    const debouncedFunc = (args) =>
      new Promise((resolve) => {
        if (timer) {
          clearTimeout(timer);
        }
  
        timer = setTimeout(() => {
          resolve(fn(args));
        }, ms);
      });
  
    return debouncedFunc;
  }