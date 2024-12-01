import Map from './map';
import { trpc } from '@utils/trpc';
import WeeklyForecast from './weekly-forecast';
import PopularLocations from './popular-locations';
import CurrentWeatherCard from './current-weather-card';
import { PiWind, PiDropLight, PiThermometerSimple } from 'react-icons/pi';

const Dashboard: React.FC<{
    selectedLocation: string;
    setSelectedLocation: React.Dispatch<React.SetStateAction<string>>;
}> = ({ selectedLocation, setSelectedLocation }) => {
    const [data] = trpc.getWeeklyForecast.useSuspenseQuery(selectedLocation);

    const { current, hourly, forecast, location } = data;

    return (
        <div className='dashboard'>
            <CurrentWeatherCard
                uv={ current.uv }
                wind={ current.wind }
                name={ location.name }
                humidity={ current.humidity }
                localTime={ location.localtime }
                visibility={ current.visibility }
                description={ current.description }
                degrees={ Math.round(current.temp_c) }
            />

            <Map coordinates={{ lat: location.lat, lng: location.lng }} />

            <PopularLocations />

            <WeeklyForecast forecast={ forecast } />

            <div className='hourly-forecast'>
                <h1>Hourly Forecast</h1>

                <div>
                    {
                        Array.from({ length: 5 }).map((_, index) => (
                            <div key={ index } className='weather-item glassmorphism'>
                                <span className='weather-item-time'>7 PM</span>

                                <span className='weather-item-temp'>20°</span>

                                <div className='weather-details'>
                                    <div>
                                        <PiThermometerSimple className='small-icon' />
                                        <span>Feels 22°</span>
                                    </div>

                                    <div>
                                        <PiDropLight className='small-icon' />
                                        <span>8%</span>
                                    </div>

                                    <div>
                                        <PiWind className='small-icon' />
                                        <span>20 km/h</span>
                                    </div>
                                </div>            
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
