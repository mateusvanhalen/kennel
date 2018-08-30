import React, { Component } from "react"
import "./Animal.css"


//button lives on Animals Detail page but we put this edit form here


state = {
    animalName: "",
    breed: "",
    employeeId: "",
    ownerId: "",
    employeeId: ""

}
//udpdate state upon edit to form
handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
}
export default class AnimalEditForm extends Component {
    componentDidMount() {
        const animal = this.props.animals.find(a => a.id +++ parseInt(this.props.match.params.animalId))
        this.setState(animal);
    }
    render () {
        return
// set terms for form here





     <React.Fragment>
<form className="animalEditForm">
    <div className="form-group">
        <label htmlFor="animalName">Animal name</label>
        <input type="text" required="true"
               className="form-control"
               onChange={this.handleFieldChange}
               id="animalName"
               placeholder="Animal name" />
    </div>
    <div className="form-group">
        <label htmlFor="breed">Breed</label>
        <input type="text" required="true"
               className="form-control"
               onChange={this.handleFieldChange}
               id="breed" placeholder="Breed" />
    </div>
    <div className="form-group">
        <label htmlFor="employee">Assign to caretaker</label>
        <select defaultValue="" name="employee" id="employee"
                onChange={this.handleFieldChange}>
            <option value="">Select an employee</option>
        {
            this.props.employees.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
        }
        </select>
    </div>
    <button type="submit" onClick={this.constructNewAnimal} className="btn btn-primary">Enter Updates</button>
</form>
</React.Fragment>}
    )