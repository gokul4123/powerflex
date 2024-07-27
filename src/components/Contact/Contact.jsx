import React from 'react'
import './Contact.css'
//import gym2 from '../../assets/main3.jpg'
import mail from '../../assets/mail.png'
import phone from '../../assets/phone.png'
import locat from '../../assets/locat.png'
import whitear from '../../assets/white_arrow.png'



function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "54311d38-306f-437f-b45b-a92ab8d68483");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };




  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message</h3>
            <p>Feel free to reach out to us from the given contact information. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our community.</p>
            <ul>
                <li><img src={mail} alt="" />   Contact@powerflex.in</li>
                <li><img src={phone} alt="" />  +91-960333723</li>
                <li><img src={locat} alt="" />  Bangalore, Karnataka</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your Name' required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your Phone Number' required/>
                <label>Enter your message</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type="submit" className="btn1">Submit <img src={whitear} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact