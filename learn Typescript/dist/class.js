"use strict";
class User {
    constructor(username, salary) {
        this.username = username;
        this.salary = salary;
        this.msg = () => {
            return `hello ${username}`;
        };
    }
}
let user = new User("Eltayeb", 30000);
console.log(user.username);
console.log(user.salary);
console.log(user.msg());
