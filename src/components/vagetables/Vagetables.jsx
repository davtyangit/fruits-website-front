import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchVagetables } from '../../redux/vagetablesSlice'
import { Loader } from '../loader/Loader'
import { useVagetable } from './Vagetable/useVagetable'
import { Vagetable } from './Vagetable/Vagetable'

export const Vagetables = () => {
    const { vagetables, loading } = useVagetable()

    return (
        <div className='products'>
            {
                loading ? <Loader /> : vagetables.length && vagetables?.map((vagetable) => {
                    return (
                        <div key={fruit.id} className="product_item">
                            <Vagetable vagetable={vagetable} />
                        </div>
                    )
                })
            }
        </div>
    )
}
