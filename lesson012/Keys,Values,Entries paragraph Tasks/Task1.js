let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

let sumSalaries = (values) => {
  let sum = 0;
  for (let value of Object.values(values)) {
    if (value > 0) {
      sum = sum + value;
    } else {
      sum;
    }
  }
  return sum;
};

console.log(sumSalaries(salaries));
