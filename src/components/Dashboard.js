import React from 'react';
import styled from '@emotion/styled';

import { Pagination } from './Pagination';
import { Input } from './Input';
import { Recipe } from './Recipe';
import { useRecipes } from '../hooks/useRecipes';

const Container = styled.main`
    max-width: 460px;
    margin: auto;
`;

export const Dashboard = () => {
    const {
        currentPage,
        isError,
        isLoading,
        onPageChange,
        pickIngredient,
        query,
        recipes,
        setQuery,
        setUrl,
    } = useRecipes();

    const onSubmit = event => {
        event.preventDefault();
        setUrl(`/api/?i=${query}&p=${currentPage}`);
    };

    return (
        <Container>
            <Input query={query} onSubmit={onSubmit} setQuery={setQuery} />
            {isError && <div>Oops, server error :( Please, pick different page.</div>}
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
