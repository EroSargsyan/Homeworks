//Type of parameter is given in Number.It means it removes first + sign automaticly and for 11 digit we have already given another limitation.
//Function will remove first "+" sign and in the case of second it will alert "Bad number" ("let number = +value" is given).

function validPhoneNumber(value) {
  let number = +value;
  let numberStr = String(number);
  let numberArray = numberStr.split("");
  if (numberArray.length > 10 || numberArray.length < 10) {
    console.log("Bad Number");
  } else if ((numberArray.length = 10)) {
    console.log("Good Number");
  }
}

validPhoneNumber(+1234567890);
