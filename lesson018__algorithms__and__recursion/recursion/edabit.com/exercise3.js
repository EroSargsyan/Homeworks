let array = "What went wrong?????????".split(""); ////////delete["!", "?"] and add one

function removeAdd(arr) {
  let result = [];
  let marks = ["!", "?"];
  let i = 0;
  function remove(arr) {
    if (arr.length === 0) {
      return;
    }

    if (arr[0] != marks[0] && arr[0] != marks[1]) {
      result.push(arr[0]);
    }
    remove(arr.slice(1));

    return result;
  }
  let res = remove(arr);
  if (arr[arr.length - 1] == "?") {
    res.push("?");
  } else if (arr[arr.length - 1] == "!") {
    res.push("!");
  }
  return res.join("");
}

console.log(removeAdd(array));
