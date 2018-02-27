import React from 'react';
import './Person.css'


const Person = (props) => {
    return(
        <div className="Person">
            <p onClick={props.click}>I am {props.name} and my age is {props.age}</p>
            <input type="text"  onChange={props.changeName} value={props.name} ></input>
            <p>{props.children}</p>
        </div>
    );


}

export default Person;