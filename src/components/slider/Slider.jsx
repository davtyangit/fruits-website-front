import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Bananas from '../../images/backgrounds/bananas.jpg'
import Limes from '../../images/backgrounds/limes.jpg'
import Mandarins from '../../images/backgrounds/mandarins.jpg'

export const Slider = () => {

    return (
        <Carousel autoPlay infiniteLoop showStatus showThumbs={false} showArrows={false}>
            <div>
                <img src={Bananas} />
                <p className="legend">Get the freshest products fast!
                </p>
            </div>
            <div>
                <img className='maso' src={Limes} />
                <p className="legend">Get the freshest products fast!
                </p>
            </div>
            <div>
                <img className='maso' src={Mandarins} />
                <p className="legend">Get the freshest products fast!
                </p>
            </div>
        </Carousel>
    )
}
