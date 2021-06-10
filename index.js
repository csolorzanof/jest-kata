export function sum(text) {
  if (text == '') {
    return 0;
  } else {
    if (text.indexOf(',') == -1) {
      return parseInt(text);
    }
    let numbers = text.split(',').map(num=>parseInt(num));
    
    let sum = numbers.reduce((acum, val)=>{
      return acum += parseInt(val);
    });

    return sum;
  }
}
