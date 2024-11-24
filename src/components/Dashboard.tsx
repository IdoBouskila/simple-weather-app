import Map from './Map';
import img from '../assets/3d-weather-icon.png'; // TODO: [-] Remove this line
import { PiDropLight, PiEyeLight, PiSunLight, PiWindLight } from 'react-icons/pi';

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <input
                type='text'
                className='searchbar'
                placeholder='Search for location'
            />

            <div className='current-weather-container'>
                <div className='title-container'>
                    <h1>Current Weather</h1>
                    <span className='time'>18:15</span>
                </div>

                <div className='weather-degrees-container'>
                    <img
                        src={ img }
                        alt='weather-icon'
                    />

                    <div>
                        <span className='degrees'>25</span>
                        <span className='weather-description'>Clear Sky</span>
                    </div>
                </div>

                <div className='weather-details'>
                    <div>
                        <PiWindLight />
                        <span>5km/h</span>
                    </div>

                    <div>
                        <PiDropLight />
                        <span>80%</span>
                    </div>

                    <div>
                        <PiSunLight />
                        <span>3</span>
                    </div>

                    <div>
                        <PiEyeLight />
                        <span>10km</span>
                    </div>
                </div>
            </div>

            <Map coordinates={{ lat: 32.0678, lng: 34.7647 }} />

        </div>
    );
};

export default Dashboard;
