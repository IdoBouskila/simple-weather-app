import { trpc } from '@utils/trpc';

const PopularLocations: React.FC<{
    setSelectedLocation: (location: string) => void;
}> = ({ setSelectedLocation }) => {
    const [data] = trpc.getPopularLocations.useSuspenseQuery();

    return (
        <div className='popular-cities'>
            <h1>Popular Cities</h1>

            <div className='cities'>
                {
                    data.map((city) => (
                        <div
                            key={ city.name }
                            onClick={ () => setSelectedLocation(city.name) }
                        >
                            <h2>{ city.name }</h2>
                            <span>{ city.temp_c }°C</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PopularLocations;
