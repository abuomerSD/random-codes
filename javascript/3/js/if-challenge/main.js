let a  = 10 ;

a < 10 
    ? console.log(10) 
    : a >= 10 && a <= 40
    ? console.log("10 to 40")
    : a > 40 
    ? console.log("> 40")
    : console.log("Unknown");

let st = "Elzero Web School";
// console.log(typeof String(st.length * 2));
// console.log(String(st.length * 2) === "34");
if(String(st.length * 2) === "34") {
    console.log("Good");
}

    // console.log(st.toLowerCase().indexOf("w"));
    // console.log(st.charAt(st.toLowerCase().indexOf("w")).toLowerCase());
if(st.charAt(st.toLowerCase().indexOf("w")).toLowerCase() === "w") {
    console.log("Good");
}

if(typeof st.length !== "string") {
    console.log("good st");
}

if(typeof st.length === "number") {
    console.log("good num");
}

if(st.split(" ")[0].repeat(2) === "ElzeroElzero") {
    console.log("good elzero");
}