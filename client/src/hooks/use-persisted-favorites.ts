import { useState, useEffect } from 'react';

const usePersistentFavorites = () => {
    const [favorites, setFavorites] = useState<string[]>([]);
    
    useEffect(() => {
        const favorites = localStorage.getItem('favorites');
        
        if(favorites) {
            setFavorites(JSON.parse(favorites));
        }
    }, []);
    
    return {
        favorites,
        addFavorite: (name: string) => {
            const updatedFavorites = [...favorites, name];

            setFavorites(updatedFavorites);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        },
        removeFavorite: (name: string) => {
            const updatedFavorites = favorites.filter((favorite) => favorite !== name);

            setFavorites(updatedFavorites);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        },
    };
};

export default usePersistentFavorites;
