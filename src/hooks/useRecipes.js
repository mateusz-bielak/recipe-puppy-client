import { useState, useEffect } from 'react';

import { scrollPageToTop } from '../utils/scroll';

export const useRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState('');
    const [url, setUrl] = useState(`/api/?p=1`);
    const [currentPage, setCurrentPage] = useState(1);

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            scrollPageToTop();

            try {
                const { results } = await fetch(url).then(res => res.json());
                const sortedRecipes = results.sort((a, b) => (a.title > b.title ? 1 : -1));

                setRecipes(sortedRecipes);
            } catch (error) {
                setIsError(true);
            }

            setIsLoading(false);
        };

        fetchData();
    }, [url]);

    const onPageChange = page => {
        setCurrentPage(page);
        setUrl(`/api/?i=${query}&p=${page}`);
    };

    const pickIngredient = async event => {
        setQuery(event.target.value);
        setCurrentPage(1);
        setUrl(`/api/?i=${event.target.value}&p=${1}`);
    };

    return {
        currentPage,
        isError,
        isLoading,
        onPageChange,
        pickIngredient,
        query,
        recipes,
        setQuery,
        setUrl,
    };
};
