import { icons, weatherIconMapping } from './icon-mapping';

type IconCodes = keyof typeof weatherIconMapping;

const WeatherIcon: React.FC<{
    isNight?: boolean;
    weatherCode: number;
}> = ({ isNight, weatherCode }) => {
    const icon = weatherIconMapping[weatherCode as IconCodes] || icons.Sunny;

    if(isNight) {
        return (
            <img
                alt='weather icon'
                className='weather-icon'
                src={ `/icons/${ icons.Night }` }
            />  
        )
    }

    return (
        <img
            alt='weather icon'
            className='weather-icon'
            src={ `/icons/${ icon }` }
        />
    );
}

export default WeatherIcon;
