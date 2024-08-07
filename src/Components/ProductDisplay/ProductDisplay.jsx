import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/Frontend_Assets/star_icon.png'
import star_dull from '../Assets/Frontend_Assets/star_dull_icon.png'
function ProductDisplay(props) {

    const { product } = props

    return (
        <div className='productdisplay'>
            <div className="product-left">
                <div className="product-img-left">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="product-img">
                    <img className='productdisplay-main' src={product.image} alt="" />
                </div>
            </div>

            <div className="product-right">
                <h1>{product.name}</h1>
                <div className="product-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull} alt="" />
                    <p>(122)</p>
                </div>
                <div className="display-price">
                    <p className='old'>${product.old_price}</p>
                    <p className='new'>${product.new_price}</p>
                </div>
                <div className="product-des">
                    gcuiwgsudgliusdhlshusiudhsldiugsdyugsauykga
                    syuasgvkyu,gyudsguisdgybugasl
                    iusagliughihgdksluhdewoihgiulegiewuilgs
                    auigdugywufwuigueiugewwoiuwg
                    uiwehgweliughewlkusdbkjaxuxvuywyuh
                </div>
                <div className="product-size">
                    <h1>Select Size</h1>
                    <div className="product-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXl</div>
                    </div>

                </div>
                <button>Add To Cart</button>
            </div>
        </div>
    )
}

export default ProductDisplay