import React, { Component } from 'react';

const person = [
    {
        name: "Parth",
        age: 20,
    },
    {
        name: "Piyush",
        age: 40,
    }
];

class Students extends Component {
    render() {
        return (
            <div>
                <h1>Hello Parth Class Based Components</h1>

                {
                    person.map((v,i) => {
                        return (
                            <>
                            <h3>{v.name}</h3>                            
                            <h3>{v.age}</h3>                            
                            </>
                        )
                    })
                }

            </div>
        );
    }
}

export default Students;