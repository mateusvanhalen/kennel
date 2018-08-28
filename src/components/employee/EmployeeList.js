import React, { Component } from 'react'


class EmployeeList  extends Component {
    render() {
        return (
            <div className="employees">
            <h3>Our Employees</h3>
            {
                this.props.employees.map(employee =>
                <div id={`employees--${employee.id}`} key={employee.id}>
                <h4>{employee.name}</h4>
                <p>{employee.address}</p>
          </div>
        )
    }
    </div>
    )
}}
export default EmployeeList