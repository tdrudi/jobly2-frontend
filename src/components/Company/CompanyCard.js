import React from 'react';
import { Link } from 'react-router-dom';
import "../../css/companyCard.css";

function CompanyCard({ name, description, logoUrl, handle }) {
    return (
        <div id="company-card">
            <Link to={`/companies/${handle}`}>
                <div id='company-detail'>
                    <h3>{name}</h3>
                    {logoUrl &&
                        <img src={logoUrl}
                            alt={name} />}
                    <p>{description}</p>
                </div>
            </Link>
        </div>
    );
}
export default CompanyCard;