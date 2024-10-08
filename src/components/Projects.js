import React from "react"
import projects from "./Data/projects.json"

function Projects() {
    return (
        <>
            <div className="container projects my-3" id="projects">
                <h1>PROJECTS</h1>
                <div className="row d-flex justify-content-center align-content-center">
                    {
                        projects.map((data) => {
                            return (
                                <>
                                    <div className="my-4 col-sm-6 col-md-4 col-lg-3 mx-2" key={data.id}>
                                        <div className="card bg-dark text-light" style={{ width: "18rem", border: "2px solid yellow", borderRadius: "10px", boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)" }} data-aos="flip-right" data-aos-duration="1000">
                                            <div className="img d-flex justify-content-center align-content-center p-3">
                                                <img src={data.imageSrc} className="card-img-top" alt="project-image" style={{ height: "200px", width: "250px", border: "1px solid yellow", borderRadius: "10px" }} />
                                            </div>
                                            <div className="card-body text-center">
                                                <h5 className="card-title">{data.title}</h5>
                                                <p className="card-text">{data.description}</p>
                                                <a href={data.demo} className="btn btn-warning mx-3" target="_blank" rel="noopener noreferrer">Demo</a>
                                                <a href={data.source} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Code</a>
                                            </div>
                                        </div>
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

export default Projects;