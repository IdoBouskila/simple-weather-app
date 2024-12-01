const WeatherDetails: React.FC<{
    unit: string;
    value: number | string;
    icon: React.JSX.Element;
}> = ({ unit, icon, value }) => {
    return (
        <div className='weather-details'>
            { icon }
            <span>{ value + unit }</span>
        </div>
    )
}

export default WeatherDetails;
