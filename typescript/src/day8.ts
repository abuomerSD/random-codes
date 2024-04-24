// generics

function returnType<T> (val: T) : T {
    return val;
}


console.log(returnType<number>(10));
console.log(returnType<string>("10"));
