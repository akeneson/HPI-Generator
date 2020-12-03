import React, { useState } from "react";
import "./style.css";

const HPIFeedCell = (props) => {
    console.log(props);

    const patientArray = [{
        name: "Andrew",
        dob: "02/27/1989",
        symptom: "Neck Pain",
        apptDate: "11/20/2020",
        HPIcontent: "Patient is a 31 year old male who reports neck pain for the past 4 days."
    },
    {
        name: "Prabin",
        dob: "02/27/1989",
        symptom: "Neck Pain",
        apptDate: "11/20/2020",
        HPIcontent: "Patient is a 31 year old male who reports neck pain for the past 4 days."
    },
    {
        name: "Marlon",
        dob: "02/27/1989",
        symptom: "Neck Pain",
        apptDate: "11/20/2020",
        HPIcontent: "Patient is a 31 year old male who reports neck pain for the past 4 days."
    }

    ]

    return (
        <div className="container">

            {patientArray.map((patient) => {

                return(
                    <div className="card card-rounded m-4">
                    <div className="card-header">
                        <h3><i class="fa fa-user" aria-hidden="true"></i>{patient.name}</h3>
                        <h5><i class="fa fa-birthday-cake" aria-hidden="true"></i>{patient.dob}</h5>
                        <h5><i class="fa fa-stethoscope" aria-hidden="true"></i>{patient.symptom}</h5>
                        <h5><i class="fa fa-calendar" aria-hidden="true"></i>{patient.apptDate}</h5>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label for="HPItextarea">HPI</label>
                            <p className="form-control" rows="4">{patient.HPIcontent}
                            </p>
                        </div>

                        <div className="d-flex bd-highlight mb-3">
                            <div className="p-2">
                                <button type="button" className=" btn btn-lg btn-outline-secondary mr-2">
                                    <i className="far fa-copy "></i> Copy
                            </button>
                            </div>
                            <div className="p-2">
                                <button type="button" className="btn btn-lg btn-outline-primary">
                                    <i className="fas fa-file-download"></i> Download PDF
                            </button>
                            </div>
                            {/* <div className="ml-auto p-2">
                            <a href="#" className="btn btn-lg btn-success"><i className="far fa-check-circle mr-2"></i>Mark Complete</a>
                        </div> */}
                        </div>
                    </div>
                </div>
                );
                
            })}
        </div>
    );
}

export default HPIFeedCell;

