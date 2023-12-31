import { useState } from 'react';
import SwitchUnitButton from './SwitchUnitButton';
import { isFormValid } from '../utils/form';
import { AiOutlineSearch } from 'react-icons/ai';

const WeatherControls = ({ setRecentSearches, setLocation, setIsCelsius, isCelsius }) => {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {        
        e.preventDefault();
        
        if(! isFormValid(query)) {
            setQuery('');
            return alert('Form is invalid. Please check your input.');
        }
        
        setRecentSearches((prev) => [query, ...prev.slice(0, 4)]);
        setLocation(query);
        setQuery('');
    };

    return (
        <header>
            <SwitchUnitButton
                isCelsius={ isCelsius }
                setIsCelsius={ setIsCelsius }
            />

            <form onSubmit={ handleSearch }>
                <input
                    type='text'
                    value={ query }
                    onChange={ (e) => setQuery(e.target.value) }
                    placeholder='Search for a place...'
                />
                <button type='submit' disabled={ query ? false : true }>
                    <AiOutlineSearch />
                </button>
            </form>
        </header>
    );
};

export default WeatherControls;
