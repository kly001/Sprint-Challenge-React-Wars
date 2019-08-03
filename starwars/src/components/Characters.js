import React, {useState} from "react";

const Characters =(props) => {
    return (
        <div>
            <h3>NAME: {props.name}</h3>
            <p>GENDER: {props.gender}</p>
        </div>
    )
}

export default Characters