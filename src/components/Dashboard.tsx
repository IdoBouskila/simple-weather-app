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

            <div className='popular-cities'>
                <h1>Popular Cities</h1>

                <div className='cities'>
                    <div>
                        <h2>London</h2>
                        <span>25°C</span>
                    </div>

                    <div>
                        <h2>Paris</h2>
                        <span>30°C</span>
                    </div>

                    <div>
                        <h2>New York</h2>
                        <span>20°C</span>
                    </div>

                    <div>
                        <h2>Tokyo</h2>
                        <span>35°C</span>
                    </div>

                    <div>
                        <h2>Rome</h2>
                        <span>28°C</span>
                    </div>
                </div>
            </div>

            <div className='weekly-forecast'>
                <h1>Forecast</h1>
                
                <ul>
                    <li>
                        <img src={ img } alt='weather-icon' />

                        <span>
                            24° / 18°
                        </span>

                        <span className='date'>
                            25 Jul, Thu
                        </span>
                    </li>
                    <li>
                        <img src={ img } alt='weather-icon' />

                        <span>
                            24° / 18°
                        </span>

                        <span className='date'>
                            25 Jul, Thu
                        </span>
                    </li>
                    <li>
                        <img src={ img } alt='weather-icon' />

                        <span>
                            24° / 18°
                        </span>

                        <span className='date'>
                            25 Jul, Thu
                        </span>
                    </li>
                    <li>
                        <img src={ img } alt='weather-icon' />

                        <span>
                            24° / 18°
                        </span>

                        <span className='date'>
                            25 Jul, Thu
                        </span>
                    </li>
                    <li>
                        <img src={ img } alt='weather-icon' />

                        <span>
                            24° / 18°
                        </span>

                        <span className='date'>
                            25 Jul, Thu
                        </span>
                    </li>
                    <li>
                        <img src={ img } alt='weather-icon' />

                        <span>
                            24° / 18°
                        </span>

                        <span className='date'>
                            25 Jul, Thu
                        </span>
                    </li>
                    <li>
                        <img src={ img } alt='weather-icon' />

                        <span>
                            24° / 18°
                        </span>

                        <span className='date'>
                            25 Jul, Thu
                        </span>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Dashboard;
