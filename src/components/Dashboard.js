import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import { Pagination } from './Pagination';
import { Input } from './Input';
import { Recipe } from './Recipe';

const Container = styled.main`
    max-width: 460px;
    margin: auto;
`;

export const Dashboard = () => {
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState('');
    const [url, setUrl] = useState(`/api/?p=1`);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            window.scroll({
                top: 0,
                behavior: 'smooth',
            });

            try {
                const { results } = await fetch(url).then(res => res.json());
                const sortedRecipes = results.sort((a, b) => (a.title > b.title ? 1 : -1));

                setRecipes(sortedRecipes);
            } catch (error) {
                setIsError(true);
            }

            setIsLoading(false);
        };

        fetchData();
    }, [url]);

    const onSubmit = event => {
        event.preventDefault();
        setUrl(`/api/?i=${query}&p=${currentPage}`);
    };

    const onPageChange = page => {
        setCurrentPage(page);
        setUrl(`/api/?i=${query}&p=${page}`);
    };

    const pickIngredient = async event => {
        setQuery(event.target.value);
        setUrl(`/api/?i=${event.target.value}&p=${currentPage}`);
    };

    return (
        <Container>
            <Input query={query} onSubmit={onSubmit} setQuery={setQuery} />
            {isError && <div>Something went wrong ...</div>}
            {recipes.length !== 0 ? (
                <>
                    {recipes.map(recipe => (
                        <Recipe key={recipe.href} pickIngredient={pickIngredient} recipe={recipe} />
                    ))}
                    <Pagination currentPage={currentPage} onPageChange={onPageChange} />
                </>
            ) : isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <p>Sorry your query return any recipes. Please broaden your search.</p>
                    <p>Input comma separated ingredients, in example: chicken, paprika, onions</p>
                </>
            )}
        </Container>
    );
};
