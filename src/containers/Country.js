import React, { Component } from 'react';
import Famousplaces from './Famousplaces';

class Country extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            countryName : 'India'
        }
    }
    
    handlecountry = () => {
        this.setState({
            countryName : 'Usa'
        })
    }

    render() {
        return (
            <div>
                <Famousplaces cname = {this.state.countryName} />
                <button onClick={this.handlecountry}>Chnage Country</button>
                <hr></hr>
            </div>
        );
    }
}

export default Country;