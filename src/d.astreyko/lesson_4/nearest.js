function nearestSq(n){
  const sqrt = Math.sqrt(n);

  const up = Math.ceil(sqrt);
  const down = Math.floor(sqrt);

  const up2 = up **2;
  const down2 = down ** 2;

  const diffUp = up2 - n;
  const diffDown = n - down2;

  if(diffUp < diffDown) {
    return up2;
  } else {
    return down2
  }
}
