import React from 'react';

import { Loading } from '../components/Loading';
import { NoRecipes } from '../components/NoRecipes';

export const withLoadingAndNoRecipes = Component => ({ isLoading, ...props }) => {
    if (!props.recipes.length) {
        return isLoading ? <Loading /> : <NoRecipes />;
    }

    return <Component {...props} />;
};
