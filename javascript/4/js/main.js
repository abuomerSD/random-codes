let arr = [];

let obj1 = {
    name: 'test',
    age: 23
}
let obj2 = {
    name: 'test2',
    age: 23
}

arr.push(obj1,obj2);
console.dir(arr);

arr.forEach(element => {
    if (element.name === 'test2') {
        console.log(arr.indexOf(element));
    }
    console.log(arr.indexOf(element), element.name);
    
})