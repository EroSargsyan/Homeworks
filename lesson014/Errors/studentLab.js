let studentLabs2 = [
  {
    student: "Blake",
    myCode: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Jessica",
    runLab: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Mya",
    runLab: undefined,
  },
];

function gradeLabs(studentLabs2) {
  for (let i = 1; i < studentLabs2.length; i++) {
    try {
      if (studentLabs2[0].myCode(5, 4) == studentLabs2[i].runLab(5, 4)) {
        console.log(true);
      } else {
        console.log(false);
      }
    } catch (err) {
      err.message = "Error thrown";
      console.log(err.message);
    }
  }
}

gradeLabs(studentLabs2);
