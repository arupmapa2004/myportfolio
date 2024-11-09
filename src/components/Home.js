import React, { useEffect, useRef } from "react"
import pdf from "../pdf/Arup_Resume.pdf"
import hero from "./Data/hero.json"
import Typed from "typed.js";

function Home() {
    const typedRef = useRef(null);
    useEffect(() => {
        const option = {
            strings: [
                "Welcome to my profile",
                "My name is Arup Mapa",
                "I'm a Full Stack Developer",
                "Having problem solving skills"
            ],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
        };
        const typed = new Typed(typedRef.current, option);
        return (() => {
            typed.destroy();
        })
    }, [])
    return (
        <>
            <div className="container home" id="home">
                <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
                    <h1 ref={typedRef}>.</h1>
                    <a className="btn btn-outline-warning my-3" href={pdf} target="_blank" rel="noopener noreferrer">Download Resume</a>
                </div>
                <div className="right">
                    <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
                        <img src={`/Images/${hero.imgSrc}`} alt="profileImg" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;