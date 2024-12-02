import { trpc } from '@utils/trpc';
import { toast } from 'react-toastify';
import WeatherDetails from '../shared/weather-details';
import FavoriteButton from '../shared/favorite-button';
import { PiEyeLight, PiSunLight, PiDropLight, PiWindLight } from 'react-icons/pi';

const FavoriteCard: React.FC<{
    name: string;
    isSelected: boolean;
    setSelectedLocation: React.Dispatch<React.SetStateAction<string>>;
}> = ({ name, isSelected, setSelectedLocation }) => {
    const [data] = trpc.getWeeklyForecast.useSuspenseQuery(name);

    const handleFavoriteClick = (name: string) => {
        setSelectedLocation(name);

        toast.success(`Selected ${ name }`);
    };

    return (
        <div
            onClick={ () => handleFavoriteClick(name) }
            className={ `favorite-item weather-item glassmorphism ${ isSelected ? 'active' : '' }` }
        >
            <div>
                <h1>{ name }</h1>
                
                <FavoriteButton name={ name } />
            </div>


            <span className='weather-item-temp'>
                { Math.round(data.current.temp_c) }°
            </span>

            <div className='weather-details'>
                <WeatherDetails
                    unit='km/h'
                    icon={ <PiWindLight /> }
                    value={ data.current.wind }
                />

                <WeatherDetails
                    unit='%'
                    icon={ <PiDropLight /> }
                    value={ data.current.humidity }
                />

                <WeatherDetails
                    unit=''
                    icon={ <PiSunLight /> }
                    value={ data.current.uv }
                />

                <WeatherDetails
                    unit='km'
                    icon={ <PiEyeLight /> }
                    value={ data.current.visibility }
                />
            </div>
        </div>
    );
}

export default FavoriteCard;
