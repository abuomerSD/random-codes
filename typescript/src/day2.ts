function greet(personName: string, date: Date) {
    console.log(`hello ${personName} the date is: ${date.toDateString()}`);
}

greet('Eltayeb',new Date());

let msg: string = 'test';

let fname: string;

// primitives types
// string , number and boolean

// arrays

let arr: Array<string>;
let arr2: string[];

let dd : any[];
let n = null;

let kfd;

function printName(obj: {firstName: string, lastName:any}){
    console.log(obj.firstName)
    console.log(obj.firstName?.toLowerCase);
    console.log(obj.lastName?.toLowerCase);
}

printName({firstName:"test", lastName:undefined})