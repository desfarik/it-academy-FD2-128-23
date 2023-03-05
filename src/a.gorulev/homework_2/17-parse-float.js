function float(str) {
  // decimals & integers
  let dec = /(\d+\.\d+)/g;
  let int = /\d+/;
  isNaN(str[0]) ? console.log(NaN) :
  +str.match(dec) == 0 ? console.log(str.match(int) * 1) : console.log(str.match(dec) * 1);
}

float('967.76skjfhf56');
float('Adjfgk');
float('298');
float('a213');