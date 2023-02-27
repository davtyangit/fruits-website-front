import { Loader } from '../loader/Loader'
import { Product } from '../products/Product/Product'
import { useFruitsDemo } from './useFruitsDemo'

export const FruitsDemo = () => {
    const { fruits, loading, getAll } = useFruitsDemo()

    return (
        <section className='fruits-section'>
            <div className='fruit-section__title'>Fruits and berries
            </div>
            <div className='products'>
                {
                    loading ? <Loader /> : fruits?.length && fruits?.map((fruit) => {
                        return (
                            <div key={fruit.id} className="product_item">
                                <Product fruit={fruit} />
                            </div>
                        )
                    })
                }
            </div>
            <div className='see_all'>
                <button onClick={getAll}>All fruits</button>
            </div>
        </section>
    )
}
