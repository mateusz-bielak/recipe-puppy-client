import React, { useState, useEffect } from 'react';

import { Pagination } from './Pagination';

export const Dashboard = () => {
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState('');
    const [url, setUrl] = useState(`/api/?p=1`);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            const { results } = await fetch(url).then(res => res.json());

            setRecipes(results);
            setIsLoading(false);
        };

        fetchData();
    }, [url]);

    const onPageChange = page => {
        setCurrentPage(page);
        setUrl(`/api/?i=${query}&p=${page}`);
    };

    return (
        <>
            <input type="text" value={query} onChange={event => setQuery(event.target.value)} />
            <button onClick={() => setUrl(`/api/?i=${query}&p=${currentPage}`)}>Search</button>
            {recipes.length !== 0 ? (
                <>
                    {recipes.map(({ href, title }) => (
                        <p key={href}>{title}</p>
                    ))}
                    <Pagination currentPage={currentPage} onPageChange={onPageChange} />
                </>
            ) : isLoading ? (
                <p>Leading...</p>
            ) : (
                <>
                    <p>Sorry your query return any recipes. Please broaden your search.</p>
                    <p>Input comma separated inputs, in example: chicken, paprika, onions</p>
                </>
            )}
        </>
    );
};
