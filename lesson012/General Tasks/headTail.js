let arr = [1, 2, 3];
// => [1]
let arr2 = [1, 2, 3];
// => [2, 3]

function getHead(array) {
  let [head, ...tail] = array;
  return head;
}
function getTail(array) {
  let [head, ...tail] = array;
  return tail;
}
console.log(getHead(arr));
console.log(getTail(arr));
