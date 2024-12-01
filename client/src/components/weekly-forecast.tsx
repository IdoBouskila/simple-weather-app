import WeatherIcon from '@components/shared/weather-icon/weather-icon';

type Forecast = {
    date: string;
    icon_code: number;
    max_temp_c: number;
    min_temp_c: number;
    condition: string;
}[];

const WeeklyForecast: React.FC<{
    forecast: Forecast;
}> = ({ forecast }) => {

    return (
        <div className='weekly-forecast'>
            <h1>Forecast</h1>
            
            <ul>
                {
                    forecast.map((day) => {
                        const formattedDate = new Date(day.date).toLocaleDateString('en-US', {
                            weekday: 'short',
                            month: 'short',
                            day: 'numeric',
                        });

                        return (
                            <li key={ day.date }>
                                <WeatherIcon weatherCode={ day.icon_code } />

                                <span>
                                    { Math.round(day.max_temp_c) }° / { Math.round(day.min_temp_c) }°
                                </span>

                                <span className='date'>
                                    { formattedDate }
                                </span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default WeeklyForecast;
