function last(x) {
  let array = x.split(" ");
  let sorter = (a, b) => {
    return a[a.length - 1].codePointAt(0) - b[b.length - 1].codePointAt(0);
  };
  array.sort(sorter);
  return array;
}

console.log(last('man i need a taxi up to ubud'));