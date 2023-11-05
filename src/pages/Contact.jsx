import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



export default function Contact() {
    document.title = 'Francis Yang - Contact';
    console.log(import.meta.env.SERVICE_ID);
    console.log(import.meta.env.TEMPLATE_ID);

    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
        
    
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
        .then((result) => {
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <>
            <div>
                <div className = 'wrapper'>
                    <div className="animation-wrapper">
                        <div className="particle particle-1"></div>
                        <div className="particle particle-2"></div>
                        <div className="particle particle-3"></div>
                        <div className="particle particle-4"></div>
                    </div>

                    <div className = 'page-margin w-100 h-100 d-flex flex-column align-items-center justify-content-center z-1 position-relative'>  
                        <div className = 'fade-down delay-1 animated w-100 h-auto'>
                            <h1 className = 'stylized gold large-text mb-4'>CONTACT ME</h1>
                            <form className = 'w-50 h-auto m-auto p-4 contact-wrapper' ref={form} onSubmit={sendEmail}>
                                <div className="form-group mb-3">
                                    <label className = 'mb-3'>Name</label>
                                    <input className="form-control" type="text" name="user_name" />
                                </div>
                                <div className="form-group mb-3">
                                    <label className = 'mb-3'>Email Address</label>
                                    <input className="form-control" type="email" name="user_email" />
                                </div>
                                <div className="form-group mb-3">
                                    <label className = 'mb-3'>Message</label>
                                    <textarea className="form-control" rows="5" name="message" />
                                </div>
                                <button  type="submit" className="btn gold stylized">SUBMIT</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}