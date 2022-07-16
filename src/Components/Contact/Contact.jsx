import React, { useState } from 'react'
import './Contact.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';


function Contact() {
    const formRef = useRef()
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_3cgi5br', 'template_1yor8yb', formRef.current, '7GStt_8rpW8ESVYCn')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    }

  return (
    <div id="contact" className='c'>
        <h1 className="c-heading">Contact <span className='primary'>me</span></h1>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Just say <span className='primary'>hi.</span></h1>
                <p className="c-para">I'm always open to discuss your project and talk about new things :)</p>
                <div className="c-inside-wrapper">
                    <div className="c-info">
                        <p className="info">Mail me at</p>
                        <a href="mailto: alishasrivastava611@gmail.com" className="info-mail">
                            <p className='c-mail'>alishasrivastava611@gmail.com</p>
                        </a>
                    </div>
                    <div className="c-items">
                        <p className="p-items">Connect with me</p>
                        <div className="items-img">
                            <div className="icon">
                                <a href="https://www.linkedin.com/in/alisha-srivastava-1381b11aa">
                                    <i className='fab fa-linkedin icons'></i>
                                </a>
                            </div>
                            <div className="icon">
                                <a href="https://github.com/Alisha0611">
                                    <i className='fab fa-github icons'></i>
                                </a>
                            </div>
                            <div className="icon">
                                <a href="https://www.instagram.com/_rashi_srivastava_/">
                                    <i className='fab fa-instagram icons'></i>
                                </a>
                            </div>
                            <div className="icon">
                                <a href="https://twitter.com/Alishaa0611">
                                    <i className='fab fa-twitter icons'></i>
                                </a>
                            </div>
                            <div className="icon">
                                <a href="https://www.facebook.com/profile.php?id=100014259048638">
                                    <i className='fab fa-facebook-f icons'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="c-right">
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" placeholder='Name' name='user_name'/>
                    <input type="text" placeholder='Subject' name='user_subject'/>
                    <input type="text" placeholder='Email' name='user_email'/>
                    <textarea  rows="5" cols="20"  placeholder='Message' name='message'></textarea>
                    <button className='c-a'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact