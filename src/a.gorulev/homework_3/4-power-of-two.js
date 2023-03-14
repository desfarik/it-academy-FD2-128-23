function isPowerOfTwo(n){
  if (n > 1) {
  do {
    n = n / 2;
  } while (n > 1);
  return Number.isInteger(n);
} else if (n == 0) {
  return false;
} else if (n == 1) {
  return true;
}
}

isPowerOfTwo(11);