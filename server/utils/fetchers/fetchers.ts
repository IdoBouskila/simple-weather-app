import fetchExternalData from './fetch-external-data';
import DayForecastResponse from './types/day-forecast';
import LocationSearchResponse from './types/search-locations';

export const fetchSearch = async (query: string) => {
    const searchParams = new URLSearchParams({ q: query });

    const data = await fetchExternalData<LocationSearchResponse>({
		endpoint: '/search.json',
		searchParams: searchParams,
	});

    return data.map((location) => ({
        id: location.id,
        name: `${ location.name }, ${ location.region }, ${ location.country }`,
    }));
}

export const fetchForecast = async (query: string) => {
    const searchParams = new URLSearchParams({ q: query, days: '10' });

    const { current, forecast, location } = await fetchExternalData<DayForecastResponse>({
        endpoint: '/forecast.json',
        searchParams: searchParams,
    });

    return {
        location: {
            lat: location.lat,
            lng: location.lon,
            name: location.name,
        },
        current: {
            uv: current.uv,
            wind: current.wind_kph,
            humidity: current.humidity,
            visibility: current.vis_km,
            icon_code: current.condition.code,
        },
        forecast: forecast.forecastday.map(({ date, day }) => ({
            date: date,
            maxTemp: day.maxtemp_c,
            minTemp: day.mintemp_c,
            condition: day.condition.text,
            icon_code: day.condition.code,
        })),
        hourly: forecast.forecastday[0].hour.map((test) => ({
            time: test.time,
            temp: test.temp_c,
            wind: test.wind_kph,
            humidity: test.humidity,
            feels_like: test.feelslike_c,
        })),
    };
}
