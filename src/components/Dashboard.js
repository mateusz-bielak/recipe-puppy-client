import React, { useState, useEffect } from 'react';

export const Dashboard = () => {
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState('');
    const [url, setUrl] = useState(`/api/?p=1`);
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

    return (
        <>
            <input type="text" value={query} onChange={event => setQuery(event.target.value)} />
            <button onClick={() => setUrl(`/api/?i=${query}&p=1`)}>Search</button>
            {recipes.length !== 0 ? (
                recipes.map(({ href, title }) => <p key={href}>{title}</p>)
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
