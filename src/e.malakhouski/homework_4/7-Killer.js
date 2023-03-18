function killer(suspectInfo, dead) {
  dead.sort();

  for (let item of Object.entries(suspectInfo)) {
    let intersection = item[1].filter((i) => dead.includes(i));
    intersection.sort();

    if (arraysEqual(intersection, dead)) {
      return item[0];
    }
  }
}

function arraysEqual(arr1, arr2) {
  return (
    arr1.length === arr2.length &&
    arr1.every((value, index) => value === arr2[index])
  );
}


console.log(killer({'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle']}, ['Lucas', 'Bill']));