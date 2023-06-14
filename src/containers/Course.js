import React, { Component } from 'react';

class Course extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            id: 101,
            name: 'path',
            course: 'react'
        }
    }
    
    changecourse = () => {
        this.setState({
            course: 'flutter'
        })
    }


    render() {
        return (
            <div>
                <p>id: {this.state.id}</p>
                <p>name: {this.state.name}</p>
                <p>course: {this.state.course}</p>
                <button onClick={this.changecourse}>Chnage Course</button>
            </div>
        );
    }
}

export default Course;