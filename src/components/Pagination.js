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
    width: ${props => (props.navigation ? '40px' : '7%')};
`;

const Button = styled.button`
    ${buttonStyle};
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;

    background-color: ${props => (props.active ? '#9c27b0' : '')};
    color: ${props => (props.active ? '#fff' : '#333')};
`;

export const Pagination = ({ currentPage, onPageChange }) => {
    const { startPage, endPage } = generatePager(currentPage);

    const pages = [...Array(endPage + 1 - startPage).keys()].map(value => startPage + value);

    return (
        <List>
            <ListItem navigation>
                <Button onClick={() => onPageChange(1)}>First</Button>
            </ListItem>
            <ListItem navigation>
                <Button onClick={() => onPageChange(currentPage - 1)}>Prev</Button>
            </ListItem>
            {pages.map((page, index) => (
                <ListItem key={index}>
                    <Button active={currentPage === page} onClick={() => onPageChange(page)}>
                        {page}
                    </Button>
                </ListItem>
            ))}
            <ListItem navigation>
                <Button onClick={() => onPageChange(currentPage + 1)}>Next</Button>
            </ListItem>
            <ListItem navigation>
                <Button onClick={() => onPageChange(100)}>Last</Button>
            </ListItem>
        </List>
    );
};

const generatePager = currentPage => {
    const totalPages = 100;

    if (currentPage <= 4) {
        return {
            startPage: 1,
            endPage: 7,
        };
    }

    if (currentPage + 4 >= totalPages) {
        return {
            startPage: totalPages - 6,
            endPage: totalPages,
        };
    }

    return {
        startPage: currentPage - 3,
        endPage: currentPage + 3,
    };
};
