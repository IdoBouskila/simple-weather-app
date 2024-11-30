import Map from './map';
import PopularLocations from './popular-locations';
import { PiWind, PiEyeLight, PiSunLight, PiDropLight, PiWindLight, PiThermometerSimple } from 'react-icons/pi';

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <div className='current-weather-container'>
                <div className='title-container'>
                    <h1>Current Weather</h1>
                    <span className='time'>18:15</span>
                </div>

                <div className='weather-degrees-container'>
                    <img
                        src='/3d-weather-icon.png'
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

            <Map coordinates={{ lat: 51.5, lng: 0.12 }} />

            <PopularLocations />

            <div className='weekly-forecast'>
                <h1>Forecast</h1>
                
                <ul>
                    {
                        Array.from({ length: 7 }).map((_, index) => (
                            <li key={ index }>
                                <img src='/3d-weather-icon.png' alt='weather-icon' />

                                <span>
                                    24° / 18°
                                </span>

                                <span className='date'>
                                    25 Jul, Thu
                                </span>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className='hourly-forecast'>
                <h1>Hourly Forecast</h1>

                <div>
                    {
                        Array.from({ length: 5 }).map((_, index) => (
                            <div key={ index } className='weather-item glassmorphism'>
                                <span className='weather-item-time'>7 PM</span>

                                <span className='weather-item-temp'>20°</span>

                                <div className='weather-details'>
                                    <div>
                                        <PiThermometerSimple className='small-icon' />
                                        <span>Feels 22°</span>
                                    </div>

                                    <div>
                                        <PiDropLight className='small-icon' />
                                        <span>8%</span>
                                    </div>

                                    <div>
                                        <PiWind className='small-icon' />
                                        <span>20 km/h</span>
                                    </div>
                                </div>            
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
