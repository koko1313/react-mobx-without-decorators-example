import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

class Collection extends Component {

    addEmployee = () => {
        this.props.employees.add({id: Math.random(), name: "Employee next", email: "e_next@mail.com", salary: 2300});
    }

    renderEmployees = () => {
        return this.props.employees.all.map(employee => {
            return <p key={employee.id}>{employee.name} - {employee.salary}</p>
        });
    }

    render() {
        return <>
            {this.renderEmployees()}

            <p>Total salary: {this.props.employees.totalSalary}</p>

            <button onClick={this.addEmployee}>Add employee</button>
        </>;
    }

}

export default inject("employees")(observer(Collection));