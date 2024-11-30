import Location from './location';
import { Condition } from './shared';
import CurrentWeatherResponse from './current-forecast';

type DayForecast = {
    day: Day;
	hour: Hour[];
	date: string;
	astro: Astro;
	date_epoch: number;
};

type DayForecastResponse = {
	location: Location;
	current: CurrentWeatherResponse['current'];
	forecast: Record<'forecastday', DayForecast[]>;
};

export default DayForecastResponse;

type Day = Record<
	| 'maxtemp_c'
	| 'maxtemp_f'
	| 'mintemp_c'
	| 'mintemp_f'
	| 'avgtemp_c'
	| 'avgtemp_f'
	| 'maxwind_mph'
	| 'maxwind_kph'
	| 'totalprecip_mm'
	| 'totalprecip_in'
	| 'totalsnow_cm'
	| 'avgvis_km'
	| 'avgvis_miles'
	| 'avghumidity'
	| 'daily_will_it_rain'
	| 'daily_chance_of_rain'
	| 'daily_will_it_snow'
	| 'daily_chance_of_snow'
	| 'uv',
	number
> & {
	condition: Condition;
};

type Hour = {
	time_epoch: number;
	time: string;
	temp_c: number;
	temp_f: number;
	is_day: number;
	condition: Condition;
	wind_mph: number;
	wind_kph: number;
	wind_degree: number;
	wind_dir: string;
	pressure_mb: number;
	pressure_in: number;
	precip_mm: number;
	precip_in: number;
	snow_cm: number;
	humidity: number;
	cloud: number;
	feelslike_c: number;
	feelslike_f: number;
	windchill_c: number;
	windchill_f: number;
	heatindex_c: number;
	heatindex_f: number;
	dewpoint_c: number;
	dewpoint_f: number;
	will_it_rain: number;
	chance_of_rain: number;
	will_it_snow: number;
	chance_of_snow: number;
	vis_km: number;
	vis_miles: number;
	gust_mph: number;
	gust_kph: number;
	uv: number;
};

type Astro = {
	sunrise: string;
	sunset: string;
	moonrise: string;
	moonset: string;
	moon_phase: string;
	moon_illumination: number;
	is_moon_up: number;
	is_sun_up: number;
};
