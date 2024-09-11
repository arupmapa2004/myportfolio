import React from "react"
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { RiTwitterXLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

function Contact() {
    return(
        <>
         <div className="container contact">
            <h1>CONTACT ME</h1>
            <div className="contact-icons">
                <div className="item">
                    <FaInstagram className="icon"/>
                </div>
                <div className="item">
                    <CiFacebook className="icon"/>
                </div>
                <div className="item">
                   <CiLinkedin className="icon"/>
                </div>
                <div className="item">
                    <RiTwitterXLine className="icon"/>
                </div>
                <div className="item">
                    <FaGithub className="icon"/>
                </div>
                <div className="item">
                     <CiMail className="icon"/>
                </div>
            </div>
         </div>
        </>
    )
}

export default Contact;