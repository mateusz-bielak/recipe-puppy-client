import React, { useState, useEffect } from 'react';

export const Dashboard = () => {
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState('');
    const [url, setUrl] = useState(`/api/?p=1`);

    useEffect(() => {
        const fetchData = async () => {
            const a = await fetch(url).then(res => res.json());

            setRecipes(a.results);
        };

        fetchData();
    }, [url]);

    return (
        <>
            <input type="text" value={query} onChange={event => setQuery(event.target.value)} />
            <button onClick={() => setUrl(`/api/?i=${query}&p=1`)}>Search</button>
            {recipes.map(({ href, title }) => (
                <p key={href}>{title}</p>
            ))}
        </>
    );
};
