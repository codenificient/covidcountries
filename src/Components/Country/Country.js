import React from 'react';
import './country.css';

const Country = ({ stats }) => {
	return (
		<div className="country">
			<img
				src={`https://www.countryflags.io/${stats.CountryCode}/flat/64.png`}
				alt={`Flag of ${stats.Country}`}
			/>
			<h2>{stats.Country}</h2>
			<div className="cases">
				<p>{`Confirmed : ${stats.Confirmed}`}</p>
				<p>{`Active : ${stats.Active}`}</p>
				<p>{`Deaths : ${stats.Deaths}`}</p>
				<p>{`Recovered : ${stats.Recovered}`}</p>
			</div>
		</div>
	);
};

export default Country;
