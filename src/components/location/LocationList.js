import React, { Component } from 'react';

class LocationList extends Component{

    render() {
        return (
            <div className="locations">
            {
                this.props.locations.map(location =>
                <div id={`locations--${location.id}`} key={location.id}>
                <h4>{location.name}</h4>
                <p>{location.address}</p>
          </div>
        )
    }
    </div>
    )
}}

export default LocationList