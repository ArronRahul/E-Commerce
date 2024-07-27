import React, { useContext } from 'react'
import './CSS/ShopCat.css'
import { ShopContext } from '../Context/ShopContext'
import drop_down from '../Components/Assets/Frontend_Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'


const ShopCat=(props)=> {
  const {all_product}= useContext(ShopContext)
  return (
    <div className='shop-cat'>
      <img className='shopcat-banner' src={props.banner} alt=''/>
      <div className="shopcat-index">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcat-sort">
          sort by <img src={drop_down} alt=''/>
        </div>
      </div>

      <div className="shopcat-products">

        {all_product.map((item,i)=> {
          if(props.cat === item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
          else{
            return null
          }
        })}

      </div>
      <div className="shopcat-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCat