import React from 'react';
import { useState } from 'react';

function CounterFunc(props) {

    const [value, setValue] = useState(0);


    const plusnumber = () => {
        if (value < 5) {
            setValue(value + 1);
        }
    }

    const minusnumber = () => {
        if (value > 0) {
            setValue(value - 1)
        }
    }

    return (
        <div className='counter'>
            <p>Funcion Based</p>
            <button disabled = {value === 0 ? true : false} onClick={minusnumber}>-</button>
            <span>{value}</span>
            <button disabled = {value < 5 ? false : true} onClick={plusnumber}>+</button>
        </div>
    );
}

export default CounterFunc;