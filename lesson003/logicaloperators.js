alert(null || 2 || undefined); // 2

alert(alert(1) || 2 || alert(3)); // 2

alert(1 && null && 2); // null

alert(alert(1) && alert(2)); // undefined

alert(null || (2 && 3) || 4); // 3

//Which of these alerts are going to execute?
if (-1 || 0) alert("first");
if (-1 && 0) alert("second");
if (null || (-1 && 1)) alert("third");
//first , third
