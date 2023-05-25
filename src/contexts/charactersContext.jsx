//Deps
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CharactersContext = createContext()

export function CharacterProvider({ children }) {

    const [characters, setCharacters] = useState([]);
    const [results, setResults] = useState(null)
    const [totalPages, setTotalPages] = useState(null)
    const [page, setPage] = useState(1)


    const nextPage = () => {
        if(page < totalPages) {
            setPage(page + 1);
        } else alert('No quedan más páginas!')
    }
    const prevPage = () => {
        if(page > 1) {
            setPage(page - 1)
        }
    }
    const handleSelect = (e) => {
        setPage(Number(e.target.value))
    }

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character?page=${page}`).then(res => {
            setCharacters(res.data.results)
            setTotalPages(res.data.info.pages)
            setResults(res.data.info.count)
        })
    },[page])

    return (
        <CharactersContext.Provider value={{characters, page, totalPages, nextPage, prevPage, results, handleSelect}}>
            {children}
        </CharactersContext.Provider>
    )
}