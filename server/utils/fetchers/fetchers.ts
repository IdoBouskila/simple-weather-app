import fetchExternalData from './fetch-external-data';
import ExternalSearchResponse from './types/search-locations';

export const fetchSearch = async (query: string) => {
    const searchParams = new URLSearchParams({ q: query });

    const data = await fetchExternalData<ExternalSearchResponse>({
        endpoint: '/search.json',
        searchParams: searchParams,
    });

    return data.map((location) => ({
        id: location.id,
        name: `${ location.name }, ${ location.region }, ${ location.country }`,
    }));
}
