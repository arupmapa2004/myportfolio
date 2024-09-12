import React from "react"

function Navbar() {
    return (
        <>
            <div className="container nav_bar " data-aos="fade-down" data-aos-duration="1000">
                <div className="left">
                    <a className="nav_items" href="/">Portfolio</a>
                </div>
                <div className="right">
                    <a className="nav_items" href="#home">Home</a>
                    <a className="nav_items" href="#edu">Education</a>
                    <a className="nav_items" href="#skills">Skills</a>
                    <a className="nav_items" href="#projects">Projects</a>
                    <a className="nav_items" href="#contact">Contact</a>
                </div>
            </div>
        </>
    )
}

export default Navbar;