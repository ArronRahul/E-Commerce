import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/Frontend_Assets/hand_icon.png'
import arrw_icon from '../Assets/Frontend_Assets/arrow.png'
import hero_img from '../Assets/Frontend_Assets/hero_image.png'

const Hero=()=> {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2> NEW ARRIVALS ONLY</h2>
            <div>
                <div className='hand-hand-icon'>
                    <p>new</p>
                    <img className='hand-icon' src={hand_icon} alt=''/>
                </div>
            </div>
            <p>collection</p>
            <p>for everyone</p>
            <div className='hero-latest-btn'>
                <div>Latest collection</div>
                <img src={arrw_icon} alt=''/>
            </div>
        </div>
        
        <div className='hero-right'>
            <img src={hero_img} alt=''/>
        </div>
    </div>
  )
}

export default Hero