function inverse(obj) {
  let retobj = {};
  for (let key in obj) {
    retobj[obj[key]] = key;
  }
  return retobj;
}

let object = {
  a: "Bayandur",
  b: 18,
  c: 12,
  d: "Jameson",
};

console.log(inverse(object));
