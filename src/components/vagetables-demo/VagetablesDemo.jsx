import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FetchLimitedVagetables } from '../../redux/vagetablesSlice'
import { Loader } from '../loader/Loader'
import { Vagetable } from '../vagetables/Vagetable/Vagetable'

export const VagetablesDemo = () => {
    const { vagetables, loading } = useSelector((state) => state.vagetables)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(FetchLimitedVagetables())
    }, [])

    const getAll = () => {
        navigate('/products/fruits')
    }

    return (
        <section className='fruits-section'>
            <div className='fruit-section__title'>Vegetables</div>
            <div className='products'>
                {
                    loading ? <Loader /> : vagetables?.length && vagetables?.map((vagetable) => {
                        return (
                            <div key={vagetable.id} className="product_item">
                                <Vagetable vagetable={vagetable} />
                            </div>
                        )
                    })
                }
            </div>
            <div className='see_all'>
                <button onClick={getAll}>All vegetables</button>
            </div>
        </section>
    )
}
