import React from 'react';

const person = [
    {
        name: "Amit",
        age: 25,
        course: [
            "c",
            "html"
        ]
    }

]

const myObj = [
    {
        name: "parth",
        age: 20,
        cars: {
            car1: "fortuner",
            car2: "swift",
            car3: "audi"
        }
    },
    {
        name: "pratik",
        age: 24,
        cars: {
            car1: "ford",
            car2: "breza",
            car3: "BMW"
        }
    },
]

function StudentsFun(props) {
    return (
        <div>
            <h1>Hello Parth Function Based Components</h1>

            {
                person.map((v, i) => {
                    return (
                        <>
                            <h3>{v.name}</h3>
                            <h3>{v.age}</h3>

                            {
                                v.course.map((c, i) => {
                                    return (
                                        <h3>{c}</h3>
                                    )
                                })
                            }

                            <hr></hr>
                        </>


                    );


                })
            }
            {
                myObj.map((v,i) => {
                    return (
                        <>
                        <h3>{v.name}</h3>
                        <h3>{v.age}</h3>
                        <h3>{v.cars.car1}</h3>
                        <h3>{v.cars.car2}</h3>
                        <h3>{v.cars.car3}</h3>
                        <hr></hr>
                        </>
                    )
                })
            }
        </div>
    );
}

export default StudentsFun;