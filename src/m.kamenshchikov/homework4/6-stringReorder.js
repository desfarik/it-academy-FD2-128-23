function sentence(List) {
  let sortedList = List.sort((a, b) => Object.keys(a) - Object.keys(b));
  return sortedList.map((values) => Object.values(values)).join(" ");
}
console.log(
  sentence(
    (List = [
      { 4: "dog" },
      { 2: "took" },
      { 3: "his" },
      { "-2": "Vatsan" },
      { 5: "for" },
      { 6: "a" },
      { 12: "spin" },
    ])
  )
);
