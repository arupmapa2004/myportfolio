import React from "react"
import experience from "./Data/experience.json"

function Education() {
    return (
        <>
            <div className="container edu" id="edu">
                <h1>Education</h1>
                {
                    experience.map((data) => {
                        return (
                            <>
                                <div className="edu-items text-center my-5" key={data.id} data-aos="zoom-in" data-aos-duration="1000">
                                    <div className="left">
                                        <img src={`/Images/${data.imageSrc}`} alt="edu-logo" />
                                    </div>
                                    <div className="right">
                                        <h2>{data.organisation}</h2>
                                        <h4>
                                            <span style={{ color: "yellowgreen" }}>{`${data.startDate} - ${data.endDate} | `}</span>
                                            <span style={{ color: "yellow" }}>{data.location}</span>
                                        </h4>
                                        <h5 style={{ color: "goldenrod" }}>{`${data.degree} (${data.branch})`}</h5>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Education;