import FavoriteCard from './favorite-card';
import { useFavorites } from '@context/favorites-provider';

const Favorites: React.FC<{
    selectedLocation: string;
    setSelectedLocation: React.Dispatch<React.SetStateAction<string>>;
}> = ({ selectedLocation, setSelectedLocation }) => {
    const { favorites } = useFavorites();
    
    return (
        <div className='favorites-container'>
            <h1>Favorites</h1>
            
            <ul>
                {
                    favorites.map((name) => (
                        <li>
                            <FavoriteCard
                                key={ name }
                                name={ name }
                                isSelected={ name === selectedLocation }
                                setSelectedLocation={ setSelectedLocation }
                            />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Favorites;
