import React, { Component } from 'react'
import dog from "./dog2.jpeg"
import "./Animal.css"
//need this guy to make LINK work
import { Link } from "react-router-dom"


export default class AnimalList extends Component {
    render () {
        return (<React.Fragment>
            <div className="animalButton">
                <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/animals/new")}
                        }>
                    Click to add your sweet pet
                </button>
            </div>

            <section className="animals">
            {
                this.props.animals.map(animal =>
                    <div key={animal.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={dog} className="icon--dog" />
                                {animal.name}
                                    <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>
                                <a href="#"
                                    onClick={() => this.props.deleteAnimal(animal.id)}
                                    className="card-link">Rid</a>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
            </React.Fragment>
        )
    }
}
