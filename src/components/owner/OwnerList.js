import React, { Component } from 'react';

class OwnerList extends Component{

    render() {
        return (
            <div className="owners">
            <h3>Our Owners</h3>

            {
                this.props.owners.map(owner =>
                <div id={`owners--${owner.id}`} key={owner.id}>
                <h4>{owner.name}</h4>
                <p>{owner.phone}</p>
          </div>
        )
    }
    </div>
    )
}}
export default OwnerList