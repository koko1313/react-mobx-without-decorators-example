import { decorate, observable, action, computed } from 'mobx';

class EmployeesStore {
    all = [
        {id: 1, name: 'Employee 1', email: 'e1@mail.com', salary: 2000},
        {id: 2, name: 'Employee 2', email: 'e2@mail.com', salary: 1800},
    ];

    add(employee) {
        this.all.push({id: employee.id, name: employee.name, email: employee.name, salary: employee.salary});
    }

    get totalSalary() {
        return this.all.reduce((total, employee) => total + employee.salary, 0);
    }
} 

decorate(EmployeesStore, {
    all: observable,
    add: action,
    totalSalary: computed,
});

const store = new EmployeesStore();

export default store;