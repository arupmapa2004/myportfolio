import React from "react"
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { RiTwitterXLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

function Contact() {
    return (
        <>
            <div className="container contact" id="contact">
                <h1>CONTACT ME</h1>
                <div className="contact-icons" data-aos="zoom-in-up" data-aos-duration="1000">
                    <a href="https://www.linkedin.com/in/arup-mapa-profile/" className="item" target="_blank" rel="noopener noreferrer">
                        <CiLinkedin className="icon" />
                    </a>
                    <a href="https://github.com/arupmapa2004" className="item" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="icon" />
                    </a>
                    <a href="mailto:arupmapa@gmail.com" className="item" target="_blank" rel="noopener noreferrer">
                        <CiMail className="icon" />
                    </a>
                    <a href="https://www.instagram.com/arupmapa2004" className="item" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="icon" />
                    </a>
                    <a href="https://www.facebook.com/arup.mapa.3" className="item" target="_blank" rel="noopener noreferrer">
                        <CiFacebook className="icon" />
                    </a>

                    <a href="https://x.com/ArupMapa?t=7P0XyK1_Cx9Oncsj0p8Otw&s=08 " className="item" target="_blank" rel="noopener noreferrer">
                        <RiTwitterXLine className="icon" />
                    </a>


                </div>
            </div>
        </>
    )
}

export default Contact;