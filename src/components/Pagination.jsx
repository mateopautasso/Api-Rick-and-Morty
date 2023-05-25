import { useContext } from "react"
import { CharactersContext } from "../contexts/charactersContext"

export const Pagination = () => {

    const { page, totalPages, results, handleSelect } = useContext(CharactersContext)

    const styles = {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "24px",
        fontSize: "18px"
    }
    const stylesP = {
        margin: "0px"
    }

    return (
        <div style={styles}>
            <div className="pagination-results">
                <p style={stylesP}>
                    <b>Total Results:</b> {results}
                </p>
            </div>
            <div className="pagination-total-pages" style={{}}>
                <p style={stylesP}>
                    <b>Page:</b> {page} of {totalPages}
                </p>
            </div>
            <div className="pagination-options-pages">
                <select className="form-select w-auto mx-1" onChange={(e)=>handleSelect(e)} value={page}>
                    {
                        Array.from(Array(totalPages).keys()).map(pageIterada=>{
                            return <option defaultValue={pageIterada + 1} key={pageIterada + 1}>{pageIterada + 1}</option>
                        })
                    }
                </select>
            </div>
        </div>
    )
}