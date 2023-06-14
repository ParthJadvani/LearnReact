import React, { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            value: 0,
        }
    }
    
    plusnumber = () => {
        if (this.state.value < 5) {
            this.setState({
                value: this.state.value + 1
            })
        }   
    }

    minusnumber = () => {
        if (this.state.value > 0) {
            this.setState({
                value: this.state.value - 1
            })
        }
        
    }

    render() {
        return (
            <div className='counter'>
                <p>Class Based</p>
                <button disabled = {this.state.value === 0 ? true : false} onClick={this.minusnumber}>-</button>
                <span>{this.state.value}</span>
                <button disabled = {this.state.value < 5 ? false : true} onClick={this.plusnumber}>+</button>
                <hr></hr>
            </div>
        );
    }
}

export default Counter;