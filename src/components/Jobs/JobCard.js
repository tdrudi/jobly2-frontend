import React, { useState, useContext, useEffect } from "react";
import UserContext from "../auth/UserContext";
import "../../css/jobCard.css";

function JobCard({ id, title, salary, equity, companyName }) {
    const { hasApplied, applyToJob } = useContext(UserContext);
    const [applied, setApplied] = useState();

    function formatSalary(num) {
        let numStr = num.toString();
        let [wholeNum, decimal] = numStr.split('.');
        let numCommas = '';
        let count = 0;
        for (let i = wholeNum.length - 1; i >= 0; i--) {
            numCommas = wholeNum[i] + numCommas;
            count++;
            if (count % 3 === 0 && i !== 0) {
                numCommas = ',' + numCommas;
            }
        }
        if (decimal) {
            numCommas += '.' + decimal;
        }
        return `$${numCommas}`;
    }

    useEffect(() => {
        setApplied(hasApplied(id));
    }, [id, hasApplied]);

    function handleApply(e) {
        if (hasApplied(id)) {
            console.log(`Applied to....${id}`);
            return;
        }
        applyToJob(id);
        setApplied(true);
    }

    return (
        <div id="job-card">
            <h3>{title}</h3>
            <h4>{companyName}</h4>
            {salary && <p>Salary: {formatSalary(salary)}</p>}
            {equity !== undefined && <p>Equity: {equity}</p>}
            <button id="apply" onClick={handleApply} disabled={applied}>
                {applied ? "Applied" : "Apply"}
            </button>
        </div >
    );
}

export default JobCard;