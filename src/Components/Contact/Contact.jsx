import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {
  return (
   
      <div className="contact">
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to get in touch with our customer care team. You can also find 
                our contact information below. Your feedback and suggestions will be greatly
                appreciated. We will always strive to serve you the best!
            </p>
            <ul>
                <li><img src={mail_icon} alt="" />contact@suncityke.com</li>
                <li><img src={phone_icon} alt="" />+254 778 655 438</li>
                <li><img src={location_icon} alt="" />Haille selassie Avenue, Nairobi</li>
            </ul>
        </div>
        <div className="contact-col">
            <form>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required />
                <label>Phone No</label>
                <input type="tel" name='phone' placeholder='Enter your Phone number' required/>
                <label>Your Message</label>
                <textarea name="message" rows="8" placeholder='Enter Your Message' required></textarea>
                <button type='submit' className='btn dark-btn'> Send Message </button>
            </form>
        </div>
      </div>
 
  )
}

export default Contact
