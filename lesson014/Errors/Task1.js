let s = "abc";
try {
  if (typeof s === "string") {
    console.log(s.split("").reverse().join(""));
  } else {
    console.log(s);
  }
} catch (error) {
  console.log(error.message);
}
