let str = 'Eltayeb Ibrahim';
let str2 = "   Eltayeb Ibrahim   ";
let str3 = "Elzero Web School";

console.log(`str length: ${str.length}`);
console.log(`str2 length: ${str2.length}`);

console.log(`str2 trim: ${str2.trim()}`);
console.log(`str toUpperCase: ${str.toUpperCase()}`);
console.log(`str2 toLowerCase: ${str.toLowerCase()}`);

console.log(str[3]);

console.log(str.charAt(5));

console.log(str.indexOf('Ibrahim', 2));
console.log(str.lastIndexOf('a'));

console.log(str.slice(0,7));

console.log(str2.repeat(5).trim());

// split => array
console.log(str.split(" "));
console.log(str3.split(" ",3));