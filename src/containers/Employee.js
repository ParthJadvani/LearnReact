import React, { Component } from 'react';

class Employee extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            id: 101,
            name : 'parth',
            age : 22
        }
    }

    chnageName = () => {
        this.setState({
            name: 'pratik',
            age: 87
        });
    }
    

    render() {
        return (
            <div>
                <p>id: {this.state.id}</p>
                <p>name: {this.state.name}</p>
                <p>age: {this.state.age}</p>
                <button onClick={this.chnageName}>Change Name</button>
            </div>
        );
    }
}

export default Employee;