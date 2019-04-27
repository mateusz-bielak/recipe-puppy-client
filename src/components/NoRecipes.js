import React from 'react';

import { MainInfo, SecondaryInfo } from './Info';

export const NoRecipes = () => (
    <>
        <MainInfo>Sorry your query did not return any recipes. Please broaden your search.</MainInfo>
        <SecondaryInfo>
            Insert comma separated ingredients, in example: chicken, paprika, onions.
        </SecondaryInfo>
    </>
);
