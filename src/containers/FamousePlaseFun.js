import React from 'react';

function FamousePlaseFun(props) {
    return (
        <div>
            <p> {props.cname === 'India' ? 'Taj Mahal' : 'Afil Tower'}</p>
        </div>
    );
}

export default FamousePlaseFun;