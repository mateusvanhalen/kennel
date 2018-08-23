import React, { Component } from 'react';

export default class LocationList extends Component{

    render() {
        return (
            <div className="locations">
            <h3>Our Locations</h3>
            Nashville North
            {
                this.props.locations.map(location =>
                <div id={`locations--${location.id}`} key={location.id}>
                <h4>{location.name}</h4>
                <p>{location.address}</p>
                <p>{location.animals}</p>
          </div>
        )
    }
    </div>
    )
}}