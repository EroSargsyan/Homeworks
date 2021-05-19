let a = -5;
try {
  if (a < 0) {
    throw new Error("Negative error");
  } else if (a === 0) {
    throw new Error("Zero error");
  } else {
    console.log("Yes");
  }
} catch (err) {
  console.log(err.name);
  console.log(err.message);
}
