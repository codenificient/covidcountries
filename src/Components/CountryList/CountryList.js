import Country from '../Country/Country';
import './countryList.css';

const CountryList = (props) => {
	return <div className='countryList'>{props.stats.map((country) => <Country key={country.CountryCode} stats={country} />)}</div>;
};

export default CountryList;
