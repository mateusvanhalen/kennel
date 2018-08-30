import React, { Component } from 'react';
import "./owner.css"

class OwnerList extends Component{

    render() {
        return (
            <div className="owners">
            <h3>Animal Owners</h3>

            {
                this.props.owners.map(owner =>
                <div id={`owners--${owner.id}`} key={owner.id}>
                <h4 className="name">{owner.name}</h4>
                <p className="phone">{owner.phone}</p>
          </div>
        )
    }
    </div>
    )
}}
export default OwnerList