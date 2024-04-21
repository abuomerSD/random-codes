const add = function (num1: number, num2: number) : number {
    return num1 + num2;
}

const addWithArrow = (num1: number, num2: number) : number => {
    return num1 + num2;
}

// type alias 

type st = string;
type stAndNum = string | number;

const myName : st = 'Eltayeb';

const myAge : stAndNum  = 10;

type Buttons = {
    up: string,
    right: string,
    down: string,
    left: string,
}

function getAllButtons(btns: Buttons) {
    console.log(`up ${btns.up}`);
    console.log(`right ${btns.right}`);
    console.log(`down ${btns.down}`);
    console.log(`left ${btns.left}`);
}

getAllButtons({up: 'jump', right: 'go right', down: 'go down', left: 'go left'});

// tuple 

let article : [number, string, boolean] = [10, 'Node js Roadmap', true];

article.push('test');

const [id, title, isPublished] = article;

console.log(id);
console.log(title);
console.log(isPublished);
