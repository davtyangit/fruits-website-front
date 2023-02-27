import CleanFruits from '../../images/ourshop/cleanfruits.png'
import Fruits from '../../images/ourshop/fruis.jpg'
import Love from '../../images/ourshop/love.jpg'
import Shelves from '../../images/ourshop/shelves.avif'
import Juice from '../../images/ourshop/juice.jpg'
import Girl from '../../images/ourshop/girl-fruit.jpg'
import Vitamins from '../../images/ourshop/vitamins.png'

export const Galery = () => {
    return (
        <div className='info'>
            <div className="gallery">
                <div className="gallery__item gallery__item--hor">
                    <img alt="" src={CleanFruits} />
                </div>
                <div className="gallery__item">
                    <img alt="" src={Fruits} />
                </div>
                <div className="gallery__item gallery__item--vert">
                    <img alt="" src={Love} />
                </div>
                <div className="gallery__item gallery__item--lg">
                    <img alt="" src={Shelves} />
                </div>
                <div className="gallery__item">
                    <img alt="" src={Juice} />
                </div>
                <div className="gallery__item">
                    <img alt="" src={Girl} />
                </div>
                <div className="gallery__item">
                    <img alt="" src={Vitamins} />
                </div>
            </div>
        </div >
    )
}