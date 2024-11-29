import { trpc } from '@utils/trpc';

const ResultList: React.FC<{
    searchQuery: string;
}> = ({ searchQuery }) => {
    const { data, isLoading } = trpc.searchLocations.useQuery(searchQuery);

    if(isLoading) {
        return (
            <ul className='result-list'>
                <li>Searching...</li>
            </ul>
        );
    };

    return (
        <ul className='result-list'>
            {
                data?.length ?
                    data.map((location) => (
                        <li key={ location.id }>
                            { location.name }
                        </li>
                    ))
                :
                    <li>No results found</li>
            }
        </ul>
    );
}

export default ResultList;
