import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

const mapSettings = {
    defaultZoom: 10,
    tileUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
};

const Map: React.FC<{ coordinates: Record<'lat' | 'lng', number>; }> = ({
    coordinates,
}) => {
    return (
        <MapContainer
            center={ coordinates }
            className='map-container'
            scrollWheelZoom={ false }
            zoom={ mapSettings.defaultZoom }
        >
            <TileLayer
                url={ mapSettings.tileUrl }
                attribution={ mapSettings.attribution }
            />

            <Marker position={ coordinates } />
        </MapContainer>
    );
};

export default Map;
