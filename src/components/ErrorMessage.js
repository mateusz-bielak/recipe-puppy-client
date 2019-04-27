import React from 'react';

import { MainInfo, SecondaryInfo } from './Info';

export const ErrorMessage = () => (
    <>
        <MainInfo>Oops, server error :(</MainInfo>
        <SecondaryInfo>Please, pick different page.</SecondaryInfo>
    </>
);
