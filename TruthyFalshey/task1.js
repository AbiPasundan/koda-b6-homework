// Contoh Falsy
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(-0));
console.log(Boolean(0n));


// Contoh Truthy
console.log(Boolean("false"));
console.log(Boolean(123));
console.log(Boolean(Infinity));
console.log(Boolean(Date()));
console.log(Boolean({}));
console.log(Boolean([]));
console.log(Boolean(function(){}));