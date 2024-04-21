"use strict";
const add = function (num1, num2) {
    return num1 + num2;
};
const addWithArrow = (num1, num2) => {
    return num1 + num2;
};
const myName = 'Eltayeb';
const myAge = 10;
function getAllButtons(btns) {
    console.log(`up ${btns.up}`);
    console.log(`right ${btns.right}`);
    console.log(`down ${btns.down}`);
    console.log(`left ${btns.left}`);
}
getAllButtons({ up: 'jump', right: 'go right', down: 'go down', left: 'go left' });
// tuple 
let article = [10, 'Node js Roadmap', true];
article.push('test');
const [id, title, isPublished] = article;
console.log(id);
console.log(title);
console.log(isPublished);
