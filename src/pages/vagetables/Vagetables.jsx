import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchVagetables, SearchVagetables } from '../../redux/vagetablesSlice'
import { Product } from '../../components/products/Product/Product'
import { Search } from "./components/search/Search"
import { Loader } from '../../components/loader/Loader'
import { useVagetables } from './useVagetables'

export const Vagetables = () => {

    const { vagetables,
        loading,
        query,
        setQuery,
        getVagetables } = useVagetables()

    return (
        <div>
            <Search
                query={query}
                getVagetables={getVagetables}
                onChange={(e) => setQuery(e.target.value)} />

            <div className='products'>
                {
                    loading ? <Loader /> : vagetables?.map((fruit) => {
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
