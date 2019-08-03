import React from "react";

const CharacterList =(props) => {
    console.log(props.character)
    return (
 
        <div className = "character">
        <h2> Character Identity -</h2> 
        <p>NAME:{props.character.name}</p>
        <p>GENDER:{props.character.gender}</p>
        <p>BIRTH YEAR:{props.character.birth_year}</p>
        <p>EYE COLOR:{props.character.eye_color}</p>
        <p>SKIN COLOR: {props.character.skin_color}</p>
        <p>HEIGHT:{props.character.height}</p>
        </div>
    )
}

export default CharacterList