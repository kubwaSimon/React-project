import React from 'react'
import './Products.css'
import Product_1 from '../../assets/product-1.jpg'
import Product_2 from '../../assets/product-2.jpg'
import Product_3 from '../../assets/product-3.jpg'
import Product_icon_1 from '../../assets/product-icon-1.png'
import Product_icon_2 from '../../assets/product-icon-2.png'
import Product_icon_3 from '../../assets/product-icon-3.png'

const Products = () => {
  return (
    <div className='products'>
        
      <div className="product">
        <img src={Product_1} alt="" />
        <div className="caption">
          <img src={Product_icon_1} alt="" />
          <p>The Nairobi Safaris</p>
        </div>
      </div>
      <div className="product">
        <img src={Product_2} alt="" />
        <div className="caption">
          <img src={Product_icon_2} alt="" />
          <p>The Mount Kenya</p>
        </div>
      </div>
      <div className="product">
        <img src={Product_3} alt="" />
        <div className="caption">
          <img src={Product_icon_3} alt="" />
          <p>The Lake Niavasha</p>
        </div>
      </div>
    </div>
  )
}

export default Products
