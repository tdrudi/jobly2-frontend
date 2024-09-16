import React, { useState } from 'react';


function SearchForm({ search }) {
    const [searchTerm, setSearchTerm] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        search(searchTerm || null);
        setSearchTerm(searchTerm);
    }

    function handleChange(e) {
        setSearchTerm(e.target.value);
    }

    return (
        <div id="search-form">
            <form onSubmit={handleSubmit}>
                <input
                    name='searchTerm'
                    placeholder='Enter search term'
                    value={searchTerm}
                    onChange={handleChange}
                />
                <button type='submit'>Search</button>
            </form>


        </div>
    )
}

export default SearchForm;