import React from 'react';

import { Pagination } from './Pagination';
import { Recipe } from './Recipe';

import { Loading } from './Loading';
import { NoRecipes } from './NoRecipes';

export const RecipesList = ({ currentPage, isLoading, onPageChange, pickIngredient, recipes }) => {
    if (!recipes.length) {
        return isLoading ? <Loading /> : <NoRecipes />;
    }

    return (
        <>
            {recipes.map(recipe => (
                <Recipe key={recipe.href} pickIngredient={pickIngredient} recipe={recipe} />
            ))}
            <Pagination currentPage={currentPage} onPageChange={onPageChange} />
        </>
    );
};
