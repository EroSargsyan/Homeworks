function reverse(s) {
  if (typeof s === "string") {
    console.log(s.split("").reverse().join(""));
  } else {
    let err = new Error("error message");
    console.log(s), console.log(err.message);
  }
}

reverse("123");
