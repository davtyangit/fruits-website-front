import { Product } from '../../components/products/Product/Product'
import { Search } from "./components/search/Search"
import { Loader } from '../../components/loader/Loader'
import { useFruits } from './useFruits'

export const Fruits = () => {

    const { fruits, loading, query, setQuery, getFruit } = useFruits()

    return (
        <div>
            <Search
                query={query}
                getFruit={getFruit}
                onChange={(e) => setQuery(e.target.value)} />

            <div className='products'>
                {
                    loading ? <Loader /> : fruits && fruits?.map((fruit) => {
                        return (
                            <div key={fruit.id} className="product_item">
                                <Product fruit={fruit} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
