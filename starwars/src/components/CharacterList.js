import React from "react";
import Characters from "./Characters";

const CharacterList =(character) => {
    // console.log(character)
    return (
    
        <div>
        <h2> List of Characters</h2> 
        <Characters character={character}  />
        </div>
    )
}

export default CharacterList