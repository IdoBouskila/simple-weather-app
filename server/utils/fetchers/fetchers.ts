import fetchExternalData from './fetch-external-data';

type ExternalSearchResponse = Array<{
    id: number;
    lat: number;
    lon: number;
    name: string;
    region: string;
    country: string;
}>;

export const fetchSearch = async (query: string) => {
    const searchParams = new URLSearchParams();
    searchParams.set('q', query);

    const data = await fetchExternalData<ExternalSearchResponse>({
        endpoint: '/search.json',
        searchParams: searchParams,
    });

    return data.map((location) => ({
        id: location.id,
        name: `${ location.name }, ${ location.region }, ${ location.country }`,
    }));
}
