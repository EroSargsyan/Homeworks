let s = "abc";
try {
  if (typeof s !== "string") {
    throw new Error("s.split is not a function");
  } else {
    console.log(s.split("").reverse().join(""));
  }
} catch (err) {
  if (err) {
    console.log(err.message);
  }
}
