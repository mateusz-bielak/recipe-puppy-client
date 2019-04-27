import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const spinner = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Loading = styled.div`
    display: inline-block;
    width: 30px;
    height: 30px;
    margin: auto;

    animation: ${spinner} 1.2s linear infinite;

    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: #fff;
    border-radius: 50%;
`;
