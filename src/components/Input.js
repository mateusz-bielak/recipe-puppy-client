import React from 'react';
import styled from '@emotion/styled';

import { buttonStyle } from './Button';

const Form = styled.form`
    display: flex;
    align-items: flex-end;
    margin-bottom: 20px;
`;

const Label = styled.label`
    flex-grow: 1;
    margin-right: 5px;
    font-size: 18px;
    color: #fff;
`;

const StyledInput = styled.input`
    box-sizing: border-box;
    width: 100%;
    font-size: 20px;
    padding: 5px;
    margin-top: 5px;
`;

const Button = styled.button`
    ${buttonStyle};
    height: 37px;
    margin: 0;
`;

export const Input = ({ query, onSubmit, setQuery }) => (
    <Form onSubmit={onSubmit}>
        <Label>
            Search by ingredients (comma separated):
            <StyledInput type="text" value={query} onChange={event => setQuery(event.target.value)} />
        </Label>
        <Button type="submit">Search</Button>
    </Form>
);
