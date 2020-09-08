let arg = Number (window.prompt("skriv et tal"))
let start = new Date();
let b = isPrime(arg);
let stop = new Date();
let elapsed = stop - start;
document.write(`is ${arg} a prime; ${b} <br> `);
document.write(`It took ${elapsed} milliseconds`);  