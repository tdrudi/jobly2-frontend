import React, { useEffect, useState } from 'react';
import CompanyCard from './CompanyCard';
import SearchForm from '../../SearchForm';
import JoblyApi from '../../api';

function Companies() {
    const [companies, setCompanies] = useState(null);

    //Get all companies on load
    useEffect(() => {
        async function fetchCompanies() {
            let companiesList = await JoblyApi.getCompanies();
            setCompanies(companiesList);
        }
        fetchCompanies();
    }, []);

    //Get companies by search
    async function search(filterBy) {
        let findCompany = await JoblyApi.getCompanies(filterBy);
        setCompanies(findCompany);
    }

    if (!companies)
        return <h1>Loading...</h1>

    return (
        <div id="company-info">
            <h1>Companies</h1>
            <SearchForm search={search} />
            <div id='companies-list'>
                {companies.map(c => (
                    <CompanyCard
                        key={c.handle}
                        name={c.name}
                        description={c.description}
                        logoUrl={c.logoUrl}
                        handle={c.handle} />
                ))}</div>
        </div>
    );
}

export default Companies;