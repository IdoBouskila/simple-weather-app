const apiKey = process.env.API_KEY;
const BASE = 'http://api.weatherapi.com/v1';

const fetchExternalData = async <Data>({ endpoint, searchParams }: {
	endpoint: `/${ string }`;
    searchParams?: URLSearchParams;
}) => {

    const params = searchParams ? `&${ searchParams.toString() }` : '';
    const completeApiUrl = BASE + endpoint + `?key=${ apiKey }` + params;

    const response = await fetch(completeApiUrl);

	if (response.status >= 500) {
		throw new Error(
			'There was an error on the server and the request could not be completed.'
		);
	}

	const data = await response.json() as Data;

	return data;
};

export default fetchExternalData;
