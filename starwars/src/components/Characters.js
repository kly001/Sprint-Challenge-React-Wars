import React from "react";

const Characters =(props) => {
    // console.log(props)
    return (
        <div>
            <h3>NAME: {props.name}</h3>
            <p>GENDER: {props.gender}</p>
            <p>BIRTH YEAR: {props.birth_year}</p>
            <p>EYE COLOR: {props.eye_color}</p>
            <p>SKIN COLOR: {props.skin_color}</p>
            <p>HEIGHT: {props.height}</p>
        </div>
    )
}

export default Characters