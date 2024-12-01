import fetchExternalData from './fetch-external-data';
import DayForecastResponse from './types/day-forecast';
import CurrentWeatherResponse from './types/current-forecast';
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
            localtime: location.localtime,
        },
        current: {
            uv: current.uv,
            temp_c: current.temp_c,
            wind: current.wind_kph,
            humidity: current.humidity,
            visibility: current.vis_km,
            icon_code: current.condition.code,
            description: current.condition.text,
        },
        forecast: forecast.forecastday.map(({ date, day }) => ({
            date: date,
            max_temp_c: day.maxtemp_c,
            min_temp_c: day.mintemp_c,
            condition: day.condition.text,
            icon_code: day.condition.code,
        })),
        hourly: forecast.forecastday[0].hour.map((data) => ({
            time: data.time,
            temp_c: data.temp_c,
            wind: data.wind_kph,
            humidity: data.humidity,
            feels_like: data.feelslike_c,
        })),
    };
}

export const fetchCurrentWeather = async (query: string) => {
    const searchParams = new URLSearchParams({ q: query });

    const data = await fetchExternalData<CurrentWeatherResponse>({
        endpoint: '/current.json',
        searchParams: searchParams,
    });
    
    return data;
}

export const fetchPopularLocations = async () => {
    const cities = [
		'London',
		'New York',
		'Paris',
		'Tokyo',
		'Beijing',
		'Madrid',
		'Rome',
	];

    return Promise.all(cities.map(async (city) => {
        const data = await fetchCurrentWeather(city);

        return {
            name: data.location.name,
            temp_c: data.current.temp_c,
        };
    }));
};
