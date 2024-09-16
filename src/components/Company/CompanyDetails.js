import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../../api";
import JobCard from "../Jobs/JobCard";
import "../../css/companyDetails.css";

function CompanyDetails() {
    const { handle } = useParams();
    const [company, setCompany] = useState(null);

    useEffect(() => {
        async function getCompany() {
            setCompany(await JoblyApi.getCompany(handle));
        }
        getCompany();
    }, [handle]);

    if (!company) {

        return (
            <div>Loading...</div>
        );
    }

    return (
        <div id="company-details">
            <h3>{company.name}</h3>
            <p>{company.discription}</p>
            {company.jobs.map(j => (
                <JobCard key={j.id}
                    id={j.id}
                    title={j.title}
                    salary={j.salary}
                    equity={j.equity}
                    companyName={j.companyName} />
            ))}

        </div>
    );
}

export default CompanyDetails;