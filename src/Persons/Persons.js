import React from 'react';
import Person from './Person/Person'

const Persons = (props)=> {

    return (
        <div>
            {   props.persons.map((person)=> {
                return <Person key={person.id} name={person.name} age={person.age} changeName={ (event)=> props.changeName(event, person.id)} click={props.click}/>
                })
            }
        </div>
    );

}

export default Persons;