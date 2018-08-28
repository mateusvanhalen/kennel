import React, { Component } from 'react';

export default class AnimalList extends Component{

    render() {
        return (
            <div className="animals">
            <h3>Our Animals and Owners</h3>
            {
                this.props.animals.map(animals =>
                <div id={`animals--${animals.id}`} key={animals.id}>
                <h4>{animals.name}</h4>
                <p>{animals.owner}</p>
          </div>
        )
    }
    </div>
    )
}}