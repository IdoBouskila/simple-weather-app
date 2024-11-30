import { useContext, createContext } from 'react';
import usePersistedFavorites from '@hooks/use-persisted-favorites';

type FavoritesContextType = {
    favorites: string[];
    addFavorite: (name: string) => void;
    removeFavorite: (name: string) => void;
};

const favoritesContext = createContext<FavoritesContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useFavorites = () => {
    const context = useContext(favoritesContext);

    if(! context) {
        throw new Error('useFavorites must be used within a FavoritesProvider');
    }

    return context;
}

export const FavoritesProvider: React.FC<{
    children: React.ReactNode;
}> = ({ children }) => {
    const { favorites, addFavorite, removeFavorite } = usePersistedFavorites();

    return (
        <favoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            { children }
        </favoritesContext.Provider>
    );
};
