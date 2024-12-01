export const icons = {
	Mist: 'mist.png',
	Rain: 'rain.png',
	Snow: 'snow.png',
	Sunny: 'sunny.png',
	Night: 'night.png',
	Cloudy: 'cloudy.png',
	Thunder: 'thunder.png',
};

// Sorry for that, I know it's terrible, but `weatherapi.com` API provides ugly icons
// and I don't have enough icons to cover all the weather conditions...
export const weatherIconMapping = {
    // Clear/Sunny
    1000: icons.Sunny,

    // Cloudy/Overcast
    1003: icons.Cloudy,
    1006: icons.Cloudy,
    1009: icons.Cloudy,

    // Mist/Fog
    1030: icons.Mist,
    1135: icons.Mist,
    1147: icons.Mist,

    // Rain
    1063: icons.Rain,
    1069: icons.Rain,
    1072: icons.Rain,
    1150: icons.Rain,
    1153: icons.Rain,
    1168: icons.Rain,
    1171: icons.Rain,
    1180: icons.Rain,
    1183: icons.Rain,
    1186: icons.Rain,
    1189: icons.Rain,
    1192: icons.Rain,
    1195: icons.Rain,
    1240: icons.Rain,
    1243: icons.Rain,
    1246: icons.Rain,

    // Snow
    1066: icons.Snow,
    1067: icons.Snow,
    1114: icons.Snow,
    1117: icons.Snow,
    1204: icons.Snow,
    1207: icons.Snow,
    1210: icons.Snow,
    1213: icons.Snow,
    1216: icons.Snow,
    1219: icons.Snow,
    1222: icons.Snow,
    1225: icons.Snow,
    1237: icons.Snow,
    1255: icons.Snow,
    1258: icons.Snow,
    1261: icons.Snow,
    1264: icons.Snow,

    // Thunder
    1273: icons.Thunder,
    1276: icons.Thunder,
    1279: icons.Thunder,
    1282: icons.Thunder,
};
