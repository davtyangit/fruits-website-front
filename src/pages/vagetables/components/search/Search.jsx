import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { FetchVagetables } from "../../../../redux/vagetablesSlice"

export const Search = ({ query, getVagetables, onChange }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        query === '' && dispatch(FetchVagetables())
    }, [query])

    const handleSubmit = e => e.preventDefault()

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <div className="search">
                <input
                    onChange={onChange}
                    value={query}
                    placeholder="Search the vegetables..."
                    type="text" />
                <button type="submit" onClick={() => getVagetables(query)}>Search</button>
            </div>
        </form>
    )
}