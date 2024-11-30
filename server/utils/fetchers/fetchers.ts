import fetchExternalData from './fetch-external-data';
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
