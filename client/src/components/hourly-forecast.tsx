import React from 'react';
import { getHours } from '@utils/utility-functions';
import WeatherDetails from './shared/weather-details';
import { PiWind, PiDropLight, PiThermometerSimple } from 'react-icons/pi';

type HourlyForecastProps = {
    temp_c: number;
    wind: number;
    humidity: number;
    time: string;
    feels_like: number;
}[];

const HourlyForecast: React.FC<{
    forecast: HourlyForecastProps;
}>  = ({ forecast }) => {
    return (
        <div className='hourly-forecast'>
            <h1>Hourly Forecast</h1>

            <div>
                {
                    forecast.map((hour) => {
                        const formattedTime = getHours(hour.time);

                        return (
                            <div key={ hour.time } className='weather-item glassmorphism'>
                                <span className='weather-item-time'>{ formattedTime }</span>

                                <span className='weather-item-temp'>
									{ Math.round(hour.temp_c) }°
								</span>

                                <div className='weather-details'>

                                    <WeatherDetails
                                        unit='°'
                                        value={ `Feels ${ hour.feels_like }` }
                                        icon={ <PiThermometerSimple className='small-icon' /> }
                                    />
                                    
                                    <WeatherDetails
                                        unit='%'
                                        value={ hour.humidity }
                                        icon={ <PiDropLight className='small-icon' /> }
                                    />

                                    <WeatherDetails
                                        unit='km/h'
                                        value={ hour.wind }
                                        icon={ <PiWind className='small-icon' /> }
                                    />
                                </div>            
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default HourlyForecast;
