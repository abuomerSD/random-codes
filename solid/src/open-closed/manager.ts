import { Employee } from "./employee";
export class Manager implements Employee{

    id: number;
    name: string;
    salary: number;

    constructor(id: number, name: string, salary: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    calculateSalary(): number {
        return this.salary * 2;
    }

}