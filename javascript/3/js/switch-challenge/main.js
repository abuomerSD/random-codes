let job = "Developer";
let salary = 0;

switch (job) {
    case "Manager":
        salary = 8000;
        break;
    case "IT" || "Support":
        salary = 6000;
        break;
    case "Developer" || "Designer":
        salary = 7000;
        break;
    default:
        salary = 4000;
}

console.log(`salary = ${salary}`);
// =====================================
let holidays = 0;
let money = 0;

if (holidays === 0) {
    money = 5000;
}
else if (holidays === 1 || holidays ===  2){
    money= 3000;
}
else if (holidays === 3) {
    money= 2000;
}
else {
    money = 50_000;
}

console.log(`money = ${money}`);
