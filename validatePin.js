function validatePIN(pin) {
  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }
  let bool = true;
  for (let el of pin) {
    if (isNaN(Number(el))) {
      bool = false;
      break;
    }
  }
  return bool;
}

// return /^(\d{4}|\d{6})$/.test(pin);

console.log(validatePIN("1234"));
console.log(validatePIN("12345"));
console.log(validatePIN("a234"));
