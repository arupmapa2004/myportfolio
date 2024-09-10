import React from "react"

function Navbar() {
    return(
        <>
         <div className="container nav_bar">
             <div className="left">
             <a className="nav_items" href="/">Portfolio</a>
             </div>
             <div className="right">
                <a className="nav_items" href="/">Home</a>
                <a className="nav_items" href="/">Education</a>
                <a className="nav_items" href="/">Skills</a>
                <a className="nav_items" href="/">Projects</a>
                <a className="nav_items" href="/">Contact</a>
             </div>
         </div>
        </>
    )
}

export default Navbar;