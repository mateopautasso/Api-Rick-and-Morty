// Deps
import { useContext } from "react";

//Context
import { CharactersContext } from "../contexts/charactersContext"; 


export function Characters() {

    const { characters } = useContext(CharactersContext)

    const styleCard = {
        maxWidth: "12rem"
    }
    const styleContainer = {
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "32px"
    }

    return (
        <div className="" style={styleContainer}>
            {
                characters.map((character)=>{

                    return (
                        <div className="" key={character.id}>
                            <div className="card mb-1" style={styleCard}>
                                <img src={character.image} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                  <h5 className="card-title">{character.name}</h5>
                                  <p className="card-text">
                                    <b>Status:</b> {character.status} <br/>
                                    <b>Species:</b> {character.species} <br/>
                                    <b>Gender:</b> {character.gender}
                                  </p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};