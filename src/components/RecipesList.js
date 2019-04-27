import React from 'react';

import { Pagination } from './Pagination';
import { Recipe } from './Recipe';

import { withLoadingAndNoRecipes } from '../hocs/withLoadingAndNoRecipes';

const RecipesListComponent = ({ currentPage, onPageChange, pickIngredient, recipes }) => (
    <>
        {recipes.map(recipe => (
            <Recipe key={recipe.href} pickIngredient={pickIngredient} recipe={recipe} />
        ))}
        <Pagination currentPage={currentPage} onPageChange={onPageChange} />
    </>
);

export const RecipesList = withLoadingAndNoRecipes(RecipesListComponent);
