let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// smallest
console.log(Math.trunc(Math.min(a, b, c, d)));

// a,d 10000
console.log(a ** Math.trunc(d));

// 2 from d ,, 4 methods
console.log(Math.floor(d));
console.log(Math.round(d));
console.log(Math.trunc(d));
console.log(parseInt(d));

// b,d to get this values 
console.log(b);
console.log(d);
console.log((Math.trunc(b) / Math.ceil(d)).toFixed(2).toString() ); //66.67 => string
console.log(Math.ceil(b) / Math.ceil(d)); //67 => number