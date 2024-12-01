import Map from './map';
import { trpc } from '@utils/trpc';
import WeeklyForecast from './weekly-forecast';
import HourlyForecast from './hourly-forecast';
import PopularLocations from './popular-locations';
import CurrentWeatherCard from './current-weather-card';

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

            <PopularLocations setSelectedLocation={ setSelectedLocation } />

            <WeeklyForecast forecast={ forecast } />

            <HourlyForecast forecast={ hourly } />            
        </div>
    );
};

export default Dashboard;
