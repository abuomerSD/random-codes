enum Level {
    Kids = 40,
    low = 30,
    mid = 20,
    high = 10
}

let fName: string = "Eltayeb";
console.log(`${fName}'s Level is ${Level.mid}`);

// type assertion
console.log("*".repeat(30));

// const myImg = document.getElementById('img-1') as HTMLImageElement;
// console.log(myImg.src);

// const myImg2 = <HTMLImageElement> document.getElementById("img-2");

// const txt:any = 1;
// console.log((txt as string).repeat(4));

// alias types

type num =  {
    one: string,
    two: number
}
function getAction(args:num){
    console.log(args.one);
    console.log(args.two);
}

getAction({one:"ddd", two:100});