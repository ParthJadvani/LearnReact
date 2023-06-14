import React, { useState } from 'react';
import FamousePlaseFun from './FamousePlaseFun';

function CountryFunc(props) {

    const [name, setName] = useState('India');


    const handleCountry = () => {
        setName('Usa')
    }  

    return (
        <div>
            <FamousePlaseFun cname = {name} />
            <button onClick={handleCountry}>Chnage Country</button>
        </div>
    );
}

export default CountryFunc;