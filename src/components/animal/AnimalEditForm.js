import React, { Component } from "react"
import "./Animal.css"


//button lives on Animals Detail page but we put this edit form here



export default class AnimalEditForm extends Component {

    state = {

    }
    //udpdate state upon edit to form
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    componentDidMount() {
        // console.log(this.state)
        const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalId))
        this.setState(animal);
    }

    constructNewAnimal = (evt) => {
        evt.preventDefault()
        console.log(this.state)
        let newAnimal = {
            name: this.state.name,
            employeeId: this.props.employees.find(e => e.name === this.state.employee).id,
            breed: this.state.breed,
            id: this.state.id
        }
        this.props.editAnimal(newAnimal.id, newAnimal)
        .then(()=>{
            this.props.history.push(`/animals/${this.props.match.params.animalId}`)
        })
    }

// set terms for form here    }
    render () {
        return (
            <React.Fragment>
                <form className="animalEditForm">
                    <div className="form-group">
                        <label htmlFor="name">Animal name</label>
                        <input type="text" required="true"
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="name"
                            defaultValue={this.state.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="breed">Breed</label>
                        <input type="text" required="true"
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="breed" defaultValue={this.state.breed} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="employee">Assign to caretaker</label>
                        <select defaultValue="" name="employee" id="employee"
                                onChange={this.handleFieldChange}>
                            <option defaultValue="">Select an employee</option>
                        {
                            this.props.employees.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
                        }
                        </select>
                    </div>
                    <button type="submit" onClick={this.constructNewAnimal} className="btn btn-primary">Enter Updates</button>
                </form>
            </React.Fragment>
        )
    }
}