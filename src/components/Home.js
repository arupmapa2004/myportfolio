import React from "react"
import pdf from "../pdf/Arup's Resume.pdf"
import hero from "./Data/hero.json"

function Home() {
    return(
        <>
          <div className="container home">
            <div className="left">
                <h1>Welcome to my profile. I'm Arup Mapa. I'm a Full Stack Developer.</h1>
                <a className="btn btn-outline-warning" href={pdf}>Download Resume</a>
            </div>
            <div className="right">
                <div className="img">
                    <img src={`/Images/${hero.imgSrc}`} alt="profileImg"/>
                </div>
            </div>
          </div>
        </>
    )
}

export default Home;