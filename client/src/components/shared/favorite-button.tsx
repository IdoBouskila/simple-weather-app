import { GoHeart, GoHeartFill } from 'react-icons/go';
import { useFavorites } from '@context/favorites-provider';

const FavoriteButton: React.FC<{ name: string }> = ({ name }) => {
    const { favorites, addFavorite, removeFavorite } = useFavorites();

    const isFavorite = favorites.includes(name);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        
        if (isFavorite) {
            return removeFavorite(name);
        }

        addFavorite(name);
    };

    return (
        <button className='favorite-button' onClick={ handleClick }>
            { isFavorite ? <GoHeartFill /> : <GoHeart /> }
        </button>
    );
};

export default FavoriteButton;
