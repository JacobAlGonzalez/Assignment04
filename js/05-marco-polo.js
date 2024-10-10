function marcoPolo(num) {
    if (num % 3 === 0 && num % 5 === 0) {
      return "Marco Polo";
    } else if (num % 3 === 0) {
      return "Marco";
    } else if (num % 5 === 0) {
      return "Polo";
    } else {
      return num;
    }
  }
  for (let i = 1; i <= 100; i++) {
    console.log(marcoPolo(i));
  }
  