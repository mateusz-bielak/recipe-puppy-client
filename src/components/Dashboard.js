import React from 'react';
import styled from '@emotion/styled';

import { Input } from './Input';
import { useRecipes } from '../hooks/useRecipes';
import { RecipesList } from './RecipesList';

const Container = styled.main`
    display: flex;
    flex-direction: column;
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
            <RecipesList
                currentPage={currentPage}
                isLoading={isLoading}
                onPageChange={onPageChange}
                pickIngredient={pickIngredient}
                recipes={recipes}
            />
        </Container>
    );
};
