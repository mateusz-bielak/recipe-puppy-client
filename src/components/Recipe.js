import React from 'react';
import styled from '@emotion/styled';

import { buttonStyle } from './Button';

const Wrapper = styled.div`
    display: flex;
    padding: 10px;
    margin-bottom: 20px;

    background-color: #fff;
    border-radius: 10px;
`;

const Description = styled.p`
    flex-grow: 1;
    margin: 0;
`;

const Title = styled.a`
    display: block;
    margin-bottom: 5px;
    margin-left: 5px;
    color: inherit;
    text-decoration: none;

    :hover {
        color: #28ce63;
        text-decoration: none;
        cursor: pointer;
    }
`;

const Ingredient = styled.button`
    ${buttonStyle};
`;

const Image = styled.img`
    object-fit: cover;
    height: 80px;
    width: 80px;
`;

export const Recipe = ({ pickIngredient, recipe: { href, ingredients, thumbnail, title } }) => (
    <Wrapper key={href}>
        <Description>
            <Title href={href} target="_blank" rel="noopener">
                {title}
            </Title>
            {ingredients.split(', ').map((ingredient, index) => (
                <Ingredient key={`${ingredient}${index}`} onClick={pickIngredient} value={ingredient}>
                    {ingredient}
                </Ingredient>
            ))}
        </Description>
        <Image src={thumbnail} />
    </Wrapper>
);
