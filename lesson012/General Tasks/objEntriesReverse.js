let arr = [
  ["a", 1],
  ["b", 2],
];

function reverse(array) {
  return Object.fromEntries(array);
}
console.log(reverse(arr));
