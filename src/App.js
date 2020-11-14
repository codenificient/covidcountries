import React from 'react';
import './App.css';
import CountryList from './Components/CountryList/CountryList';
import SearchBox from './Components/SearchBox/SearchBox';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			countries: [],
			stats: [],
			searchField: ''
		};
	}

	async componentDidMount() {
		const response = await fetch('https://api.covid19api.com/countries');
		const countries = await response.json();
		this.setState({ countries });
		this.state.countries.forEach(async (country) => {
			const response = await fetch(`https://api.covid19api.com/total/country/${country.Slug}`);
			const data = await response.json();
			if (data.length)
				this.setState((prevState) => ({
					stats: prevState.stats.concat({ ...data[data.length - 1], CountryCode: country.ISO2 })
				}));
		});
	}

	handleChange = (e) => this.setState({ searchField: e.target.value });

	render() {
		const { stats, searchField } = this.state;
		const filteredCountries = stats.filter((country) =>
			country.Country.toLowerCase().includes(searchField.toLowerCase())
		);

		return (
			<div className="App">
				<h1 className="dashboard">Covid 2019 Snapshot</h1>
				<p className="text-white">
					Number of countries limited by API provider. Feel free to refresh for a new set of countries!
				</p>
				<SearchBox
					placeholder="      Search by country name.."
					handleChange={this.handleChange}
					className="search-box"
				/>

				<CountryList stats={filteredCountries} />
				<div className="allproject">
					<a href="https://tioye.dev/dist/projects/allproject.html" target="_blank">
						View my other projects
					</a>
				</div>
			</div>
		);
	}
}

export default App;
