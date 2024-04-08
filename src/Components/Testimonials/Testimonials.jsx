import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
let tx = 0;


const slideFoward = ()=>{
if(tx > -50) {
    tx -=25;
}
slider.current.style.transform = `translateX(${tx}%)`

}
const slideBack = ()=> {
    if(tx < -0) {
        tx +=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
    

}

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn'onClick={slideFoward} />
      <img src={back_icon} alt="" className='back-btn'  onClick={slideBack}/>
      <div className="slider">
        <ul ref={slider}>
        <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Charlie Stan</h3>
                            <span>Johannesburg, South Africa</span>
                        </div>
                    </div>
                    <p>Choosing to traveel with suncity safaris for my Kenyan tour was a
                        fantastic choice. The customer care team, their people and tour choices
                        are top notch for any out of continent visitor. My vacation was so successful 
                        because they provided everything needed.
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Kimberly White</h3>
                            <span>Manchester, England</span>
                        </div>
                    </div>
                    <p>Choosing to traveel with suncity safaris for my Kenyan tour was a
                        fantastic choice. The customer care team, their people and tour choices
                        are top notch for any out of continent visitor. My vacation was so successful 
                        because they provided everything needed.
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Kenny Meyer</h3>
                            <span>Nairobi, Kenya</span>
                        </div>
                    </div>
                    <p>Choosing to traveel with suncity safaris for my Kenyan tour was a
                        fantastic choice. The customer care team, their people and tour choices
                        are top notch for any out of continent visitor. My vacation was so successful 
                        because they provided everything needed.
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Talia Collin</h3>
                            <span>Arusha, Tanzania</span>
                        </div>
                    </div>
                    <p>Choosing to traveel with suncity safaris for my Kenyan tour was a
                        fantastic choice. The customer care team, their people and tour choices
                        are top notch for any out of continent visitor. My vacation was so successful 
                        because they provided everything needed.
                    </p>
                </div>
            </li>
            
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
