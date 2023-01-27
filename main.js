// forecast for today is 293 kelvin and keep the variable constant
const kelvin = 293;

// celsius is 273 degrees less than kelvin
const celsius = kelvin - 273;

// equation to calculate newton from celsius
// var newton = celsius * (33/100)

// convert celsius to newton, often results in decimal number. Use Math.floor() to round down value to whole integer.
// newton = Math.floor(newton);

// console.log(`The temperature is ${newton} degrees Newton.`);

// equation to calculate fahrenheit from celsius
var fahrenheit = celsius * (9/5) + 32;

// convert celsius to fahrenheit, often results in decimal number. Use Math.floor() to round down value to whole integer.
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
