import { decorate, observable, action } from 'mobx';

class EmployeesStore {
    all = [
        {id: 1, name: 'Person 1', email: 'p1@mail.com', salary: 2000},
        {id: 2, name: 'Person 2', email: 'p2@mail.com', salary: 1800},
    ];

    add(person) {
        this.all.push({id: person.id, name: person.name, email: person.name, salary: person.salary});
    }
}

decorate(EmployeesStore, {
    all: observable,
    add: action,
});

const store = new EmployeesStore();

export default store;