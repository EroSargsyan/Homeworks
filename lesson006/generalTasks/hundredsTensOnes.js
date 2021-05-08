function hundreds(key3, key2, key1) {
  let a;
  let b;
  let c;
  switch (key3) {
    case 100:
      a = "one hundred";

      break;
    case 200:
      a = "two hundred";
      break;
    case 300:
      a = "three hundred";

      break;
    case 400:
      a = "four hundred";

      break;
    case 500:
      a = "five hundred";

      break;
    case 600:
      a = "six hundred";

      break;
    case 700:
      a = "seven hundred";

      break;
    case 800:
      a = "eight hundred";

      break;
    case 900:
      a = "nine hundred";
  }

  switch (key2) {
    case 10:
      b = "ten";

      break;
    case 20:
      b = "twenty";
      break;
    case 30:
      b = "thrty";

      break;
    case 40:
      b = "fourty";

      break;
    case 50:
      b = "fifty";

      break;
    case 60:
      b = "sixty";

      break;
    case 70:
      b = "seventy";

      break;
    case 80:
      b = "eighty";

      break;
    case 90:
      b = "ninty";

      break;
  }

  switch (key1) {
    case 1:
      c = "one";

      break;
    case 2:
      c = "two";
      break;
    case 3:
      c = "three";

      break;
    case 4:
      c = "four";

      break;
    case 5:
      c = "five";

      break;
    case 6:
      c = "six";

      break;
    case 7:
      c = "seven";

      break;
    case 8:
      c = "eight";

      break;
    case 9:
      c = "nine";

      break;
  }
  console.log(`${a} ${b} ${c}`);
}

hundreds(800, 80, 6);

//The work was done without thousands.It is written the same way.
