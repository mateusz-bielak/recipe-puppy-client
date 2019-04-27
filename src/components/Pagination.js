import React from 'react';
import styled from '@emotion/styled';

import { buttonStyle } from './Button';

const List = styled.ul`
    display: flex;
    justify-content: space-between;

    height: 30px;
    margin: 0;
    padding: 0;
    list-style: none;
`;

const ListItem = styled.li`
    width: 8%;
`;

const Button = styled.button`
    ${buttonStyle};
    height: 100%;
    width: 100%;
    margin: 0;
    background-color: ${props => (props.active ? '#9c27b0' : '')};
    color: ${props => (props.active ? '#fff' : '#333')};
`;

export const Pagination = ({ currentPage, onPageChange }) => {
    const { startPage, endPage } = generatePager(currentPage);

    const pages = [...Array(endPage + 1 - startPage).keys()].map(value => startPage + value);

    return (
        <List>
            {pages.map((page, index) => (
                <ListItem key={index}>
                    <Button active={currentPage === page} onClick={() => onPageChange(page)}>
                        {page}
                    </Button>
                </ListItem>
            ))}
        </List>
    );
};

const generatePager = currentPage => {
    const totalPages = 100;

    if (currentPage <= 6) {
        return {
            startPage: 1,
            endPage: 10,
        };
    }

    if (currentPage + 4 >= totalPages) {
        return {
            startPage: totalPages - 9,
            endPage: totalPages,
        };
    }

    return {
        startPage: currentPage - 5,
        endPage: currentPage + 4,
    };
};
