export function sum(text) {
  if (text == '') {
    return 0;
  } else {
    if (text.indexOf(',') == -1) {
      return parseInt(text);
    }
    let number1 = parseInt(text.split(',')[0]);
    let number2 = parseInt(text.split(',')[1]);

    return number1 + number2;
  }
}
