interface Employee {
    id: number,
    name: string,
    readonly country: string,
    isFullTime: boolean,
    habbits?: string[],
    sayHello() : string,
    getDetails: () => Employee
}

let emp : Employee = {
    name:"Osman",
    id: 100,
    country:"KSA",
    isFullTime: true,
    habbits: ["football", "Reading Books", "Swiming"],
    sayHello() {
        return `Hello ${this.name}`
    },
    getDetails : () => {
        return emp;
    }
}
emp.id = 200;
console.log(emp);
emp.id = 300;
console.log(emp.getDetails());

interface subEmpolyee extends Employee {
    subProp: boolean
}

let emp2: subEmpolyee = {
    id:1,
    country: "egypt",
    getDetails(){
        return emp;
    },
    isFullTime: false,
    name: "emad",
    subProp:true,
    sayHello() {
        return `hello`
    },
}
console.log("#".repeat(40));
console.log(emp2);