import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { FetchFruits } from "../../../../redux/fruitsSlice"

export const Search = ({ query, getFruit, onChange }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        query === '' && dispatch(FetchFruits())
    }, [query])

    const handleSubmit = e => e.preventDefault()

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <div className="search">
                <input
                    onChange={onChange}
                    value={query}
                    placeholder="Search the fruit..."
                    type="text" />
                <button type="submit" onClick={() => getFruit(query)}>Search</button>
            </div>
        </form>
    )
}