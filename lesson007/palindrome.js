function palindrome(str) {
  if (str.split("").reverse().join("") === str) {
    console.log("Is a Palindrome");
  } else {
    console.log("Not a Palindrome ");
  }
}

let str = "madam";
palindrome(str);
