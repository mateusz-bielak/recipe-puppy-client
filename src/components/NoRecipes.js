import React from 'react';
import styled from '@emotion/styled';

const MainInfo = styled.p`
    margin: 0;
    color: #fff;
    font-size: 24px;
`;

const SecondaryInfo = styled.p`
    color: #fff;
    font-size: 14px;
`;

export const NoRecipes = () => (
    <>
        <MainInfo>Sorry your query did not return any recipes. Please broaden your search.</MainInfo>
        <SecondaryInfo>
            Insert comma separated ingredients, in example: chicken, paprika, onions.
        </SecondaryInfo>
    </>
);
