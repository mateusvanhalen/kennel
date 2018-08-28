import React, { Component } from 'react';

class AnimalList extends Component{

    render() {
        return (
            <div className="animals">
            <h3>Our Animals</h3>
            {
                this.props.animals.map(animal =>
                <div id={`animals--${animal.id}`} key={animal.id}>
                <h4>{animal.name}</h4>
                <p>{animal.address}</p>
          </div>
        )
    }
    </div>
    )
}}

export default AnimalList
