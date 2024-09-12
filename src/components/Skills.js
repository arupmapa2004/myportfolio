import React from "react"
import skills from "./Data/skills.json"

function Skills() {
  return (
    <>
      <div className="container skills" id="skills">
        <h1>SKILLS</h1>
        <div className="items">
          {
            skills.map((data) => {
              return (
                <>
                  <div className="item" key={data.id} data-aos="flip-left" data-aos-duration="1000">
                    <img src={`/Images/${data.imageSrc}`} alt="skills-logo" />
                    <h3>{data.title}</h3>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Skills;