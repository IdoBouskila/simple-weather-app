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
                                <img src='/3d-weather-icon.png' alt='weather-icon' />

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
