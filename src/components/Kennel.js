import React, { Component } from "react"
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./location/LocationList"
import "./kennel.css"
import AnimalList from "./animals/AnimalList"

export default class Kennel extends Component {
employeesFromAPI = [
    { id: 1, name: "Jessica Shmessica" },
    { id: 2, name: "Jordy Nelson" },
    { id: 3, name: "Zoey LeBloop" },
    { id: 4, name: "Blazzzzz Roberts" }
]

animalsFromAPI = [
    { id: 1, name: "Giant Snake", owner: "Steve" },
    { id: 2, name: "Mongoose", owner: "Carl" },
    { id: 3, name: "Pappa Rat", owner: "Bobby" },
    { id: 4, name: "Ninja Turtle", owner: "Matt" }
]

// This will eventually get pulled from the API
locationsFromAPI = [
    { id: 1, name: "Nashville North", address: "500 Circle Way" },
    { id: 2, name: "Nashville South", address: "10101 Binary Court" },
    { id: 3, name: "Nashville East", address: "55 Bob St" },
    { id: 4, name: "Nashville Ville", address: "3636 Road Trail"}
]
//where state is defined
state = {
    employees: this.employeesFromAPI,
    locations: this.locationsFromAPI,
    animals: this.animalsFromAPI
}


    render() {
        return (
            <article className="kennel">
                <LocationList locations={this.state.locations} />
                <EmployeeList employees={this.state.employees} />
                <AnimalList animals={this.state.animals} />
            </article>
        )
    }
}
