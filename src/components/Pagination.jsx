import { useContext } from "react"
import { CharactersContext } from "../contexts/charactersContext"

export const Pagination = () => {

    const { page, totalPages, results } = useContext(CharactersContext)

    const styles = {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "24px",
        fontSize: "18px"
    }

    return (
        <div style={styles}>
            <div className="pagination-results">
                <p>
                    <b>Total Results:</b> {results}
                </p>
            </div>
            <div className="pagination-pages">
                <p>
                    <b>Page:</b> {page} of {totalPages}
                </p>
            </div>
        </div>
    )
}