import React, { useEffect, useState } from 'react';

import SearchForm from '../../SearchForm';
import JobCard from './JobCard';
import JoblyApi from '../../api';
import "../../css/jobCard.css";

function JobList() {
    const [jobs, setJobs] = useState(null);
    useEffect(() => {
        async function fetchJobs() {
            let jobsList = await JoblyApi.getJobs();
            setJobs(jobsList);
        }
        fetchJobs();
    }, []);

    async function searchJobs(title) {
        setJobs(await JoblyApi.getJobs(title));
    }

    if (!jobs) {
        return (
            <div><h1>Loading...</h1></div>
        );
    }
    return (
        <div id='job-list'>
            <h1>Jobs</h1>
            <SearchForm search={searchJobs} />
            {jobs.length
                ? jobs.map(j => (
                    <JobCard key={j.id}
                        id={j.id}
                        title={j.title}
                        salary={j.salary}
                        equity={j.equity}
                        companyName={j.companyName} />
                ))
                : <p>No jobs found.</p>
            }
        </div>
    );
}

export default JobList;