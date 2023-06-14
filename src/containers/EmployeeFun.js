import React, { useState } from 'react';

function EmployeeFun(props) {

    const [name, setName] = useState('Parth');
    const [age, setage] = useState(22);

    const chnageAge = () => {
        setName('Pratik');
        setage(56);
    }

    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <button onClick={chnageAge}>Chnage Age</button>
        </div>
    );
}

export default EmployeeFun;