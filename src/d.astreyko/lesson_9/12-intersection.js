function intersection(object1, object2) {
  let resultObject = {};
  for (const key in object1) {
    if (object2[key] === object1[key]) {
      resultObject[key] = object1[key];
    }
  }
  return resultObject;
}

console.log(intersection({ name: "Anna", age: 20 }, { name: "Anna", age: 21 }));
