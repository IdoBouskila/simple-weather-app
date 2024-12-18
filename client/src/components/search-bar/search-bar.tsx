import { useState } from 'react';
import ResultList from './result-list';
import { debounce } from '@utils/utility-functions';

const SearchBar: React.FC<{
    setSelectedLocation: (location: string) => void;
}> = ({ setSelectedLocation }) => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className='search-bar-container'>
            <input
                type='text'
                className='searchbar'
                placeholder='Search for location'
                onChange={ debounce((e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value), 300) }
            />

            {
                searchQuery && (
                    <ResultList
                        searchQuery={ searchQuery }
                        setSelectedLocation={ setSelectedLocation }
                    />
                )
            }
        </div>
    );
};

export default SearchBar;
