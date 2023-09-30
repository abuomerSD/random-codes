"use strict";
let emp = {
    name: "Osman",
    id: 100,
    country: "KSA",
    isFullTime: true,
    habbits: ["football", "Reading Books", "Swiming"],
    sayHello() {
        return `Hello ${this.name}`;
    },
    getDetails: () => {
        return emp;
    }
};
emp.id = 200;
console.log(emp);
emp.id = 300;
console.log(emp.getDetails());
let emp2 = {
    id: 1,
    country: "egypt",
    getDetails() {
        return emp;
    },
    isFullTime: false,
    name: "emad",
    subProp: true,
    sayHello() {
        return `hello`;
    },
};
console.log("#".repeat(40));
console.log(emp2);
