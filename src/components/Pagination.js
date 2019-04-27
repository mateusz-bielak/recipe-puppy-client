import React from 'react';

export const Pagination = ({ currentPage, onPageChange }) => {
    const { startPage, endPage } = generatePager(currentPage);

    const pages = [...Array(endPage + 1 - startPage).keys()].map(value => startPage + value);

    return (
        <ul>
            {pages.map((page, index) => (
                <li key={index}>
                    <button onClick={() => onPageChange(page)}>{page}</button>
                </li>
            ))}
        </ul>
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
