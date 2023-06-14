import React, { Component } from 'react';

class Famousplaces extends Component {
    render() {
        return (
            <div>
                <p>Class Based</p>
                <p>{this.props.cname === 'India' ? 'Taj Mahal' : 'Afil Tower'}</p>
            </div>
        );
    }
}

export default Famousplaces;