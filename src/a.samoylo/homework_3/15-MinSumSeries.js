function minSum(arr) {
    return arr.sort((a, b) => a - b).reduce((pre, val) => pre + val * arr.pop(), 0);
  }