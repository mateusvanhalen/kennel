import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"

import "./kennel.css"
import "bootstrap/dist/css/bootstrap.min.css"


class Kennel extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />

                <ApplicationViews />
            </React.Fragment>
        )
    }
}

export default Kennel


// import React, { Component } from "react"
// import EmployeeList from "./employee/EmployeeList"
// import LocationList from "./location/LocationList"
// import "./kennel.css"
// import AnimalList from "./animals/AnimalList"

// export default class Kennel extends Component {
// employeesFromAPI = [
//     { id: 1, name: "Jessica Younker" },
//     { id: 2, name: "Jordan Nelson" },
//     { id: 3, name: "Zoe LeBlanc" },
//     { id: 4, name: "Blaise Roberts" }
// ]

// animalsFromAPI = [
//     { id: 1, name: "Doodles" },
//     { id: 2, name: "Jack" },
//     { id: 3, name: "Angus" },
//     { id: 4, name: "Henley" },
//     { id: 5, name: "Derkins" },
//     { id: 6, name: "Checkers" }
// ]

// // This will eventually get pulled from the API
// locationsFromAPI = [
//     { id: 1, name: "Nashville North", address: "500 Circle Way" },
//     { id: 2, name: "Nashville South", address: "10101 Binary Court" }
// ]
// //where state is defined
// state = {
//     employees: this.employeesFromAPI,
//     locations: this.locationsFromAPI,
//     animals: this.animalsFromAPI
// }


//     render() {
//         return (
//             <article className="kennel">
//                 <LocationList locations={this.state.locations} />
//                 <EmployeeList employees={this.state.employees} />
//                 <AnimalList animals={this.state.animals} />
//             </article>
//         )
//     }
// }
