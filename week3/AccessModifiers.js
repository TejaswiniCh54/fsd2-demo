"use strict";
class Employee {
    name;
    salary;
    department;
    constructor(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    getDetails() {
        return `Employee: ${this.name}, Department: ${this.department}`;
    }
    calculateAnnualSalary() {
        return this.salary * 12;
    }
    showAnnualSalary() {
        return `${this.name}'s annual salary is ${this.calculateAnnualSalary()}`;
    }
}
class Manager extends Employee {
    teamSize;
    constructor(name, salary, department, teamSize) {
        super(name, salary, department);
        this.teamSize = teamSize;
    }
    getManagerInfo() {
        return `Manager: ${this.name}, Department: ${this.department}, Team Size: ${this.teamSize}`;
    }
}
const emp = new Employee("Tejaswini", 50000, "Engineering");
console.log(emp.getDetails());
console.log(emp.showAnnualSalary());
const mgr = new Manager("Reshma", 80000, "Engineering", 10);
console.log(mgr.getManagerInfo());
