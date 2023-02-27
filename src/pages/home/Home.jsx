import React from 'react'
import { Assortiment } from '../../components/assortiment/Assortiment'
import { Slider } from '../../components/slider/Slider'
import { FruitsDemo } from '../../components/fruits-demo/FruitsDemo'
import { VagetablesDemo } from '../../components/vagetables-demo/VagetablesDemo'
import { Galery } from '../../components/galery/Galery'

export const Home = () => {
    return (
        <div>
            <Slider />
            <div className='sash'>
                <div className="container">
                    <Assortiment />
                    <FruitsDemo />
                    <VagetablesDemo />
                </div>
                <Galery />
            </div>
        </div>
    )
}
