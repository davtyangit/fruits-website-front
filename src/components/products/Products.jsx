import { Loader } from '../loader/Loader.jsx'
import { Product } from './Product/Product.jsx'
import { useProducts } from './useProducts.js'

export const Products = () => {

    const { fruits, loading } = useProducts()

    return (
        <div className='products'>
            {
                loading ? <Loader /> : fruits.length && fruits?.map((fruit) => {
                    return (
                        <div key={fruit.id} className="product_item">
                            <Product fruit={fruit} />
                        </div>
                    )
                })
            }
        </div>
    )
}
