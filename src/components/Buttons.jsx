import { useContext } from "react"
import { CharactersContext } from "../contexts/charactersContext"

export const Buttons = () => {

    const { nextPage, prevPage } = useContext(CharactersContext)

    const styles = {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "24px",
        marginBottom: "24px"
    }
    return (
        <div style={styles}>
            <button onClick={prevPage} className="btn btn-success">
                Prev
            </button>
            <button onClick={nextPage} className="btn btn-success">
                Next
            </button>
        </div>
    )
}