function firstFunction(a, b) {
  console.log();
}

function clubBouncer(age) {
  if (age < 18) {
    return "sorry you cant come in";
  } else if (age >= 18 && age < 21) {
    return "you can come in to the music festival but you cant drink or sit at the bar";
  } else {
    return "you can come in and drink";
  }
}
