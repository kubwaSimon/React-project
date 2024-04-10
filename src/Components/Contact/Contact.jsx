import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....!");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "fa0f860f-5551-4d14-87c7-e4e70ef84061");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Message Sent Successfully.");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };

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
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required />
                <label>Phone No</label>
                <input type="tel" name='phone' placeholder='Enter your Phone number' required/>
                <label>Your Message</label>
                <textarea name="message" rows="8" placeholder='Enter Your Message' required></textarea>
                <button type='submit' className='btn dark-btn'> Send Message <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
      </div>
 
  )
}

export default Contact
