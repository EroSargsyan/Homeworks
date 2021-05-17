let obj = {
  John: [100, 90, 80],
  Bob: [100, 100, 90],
};
function getBestStudent(obj) {
  let averageJohn =
    obj.John.reduce((acc, item) => acc + item, 0) / obj.John.length;
  let averageBob =
    obj.Bob.reduce((acc, item) => acc + item, 0) / obj.Bob.length;
  if (averageBob < averageJohn) {
    return "John";
  } else if (averageBob > averageJohn) {
    return "Bob";
  }
}

console.log(getBestStudent(obj));
