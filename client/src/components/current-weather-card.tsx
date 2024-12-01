import { getHours } from '@utils/utility-functions';
import WeatherDetails from '@components/shared/weather-details';
import { PiEyeLight, PiSunLight, PiDropLight, PiWindLight } from 'react-icons/pi';

type Props = {
    uv: number;
    name: string;
    wind: number;
    degrees: number;
    humidity: number;
    visibility: number;
    description: string;
    localtime: string;
}

const CurrentWeatherCard: React.FC<Props> = ({
	uv,
	name,
	wind,
	degrees,
	humidity,
    localtime,
	visibility,
	description,
}) => {
    const formattedTime = getHours(localtime);

    return (
        <div className='current-weather-container'>
            <div className='title-container'>
                <h1>{ name }</h1> 
                <span className='time'>{ formattedTime }</span>
            </div>

            <div className='weather-degrees-container'>
                <img
                    src='/3d-weather-icon.png'
                    alt='weather-icon'
                />

                <div>
                    <span className='degrees'>{ degrees }</span>
                    <span className='weather-description'>{ description }</span>
                </div>
            </div>

            <div className='weather-details'>
                <WeatherDetails
                    unit='km/h'
                    value={ wind }
                    icon={ <PiWindLight /> }
                />

                <WeatherDetails
                    unit='%'
                    value={ humidity }
                    icon={ <PiDropLight /> }
                />

                <WeatherDetails
                    unit=''
                    value={ uv }
                    icon={ <PiSunLight /> }
                />

                <WeatherDetails
                    unit='km'
                    value={ visibility }
                    icon={ <PiEyeLight /> }
                />
            </div>
        </div>
    )
}

export default CurrentWeatherCard;
