import React, {Component} from 'react'
import axios from 'axios'
import TaskButton from '../../components/TaskButton/TaskButton'
import Task from './Task'

class CountriesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading:true,
      countries: [],
	  countryName:'belarus',
	  countryQuery:''
	}
	
    this.getCountries = this.getCountries.bind(this)
    this.inputHandler = this.inputHandler.bind(this)
	this.submitHandler = this.submitHandler.bind(this)
  }

  componentDidMount() {
    setTimeout(this.getCountries, 1000);
  }

  getCountries() {
	  const countryQuery = this.state.countryName;
       axios.get(`https://restcountries.eu/rest/v2/name/${countryQuery}`)
      .then((response) => {
        this.setState({
			countryQuery,
            isLoading: false,
          	countries: response.data && response.data.map(item => ({
            name: item.name,
            capital: item.capital,
            region: item.region,
          }))
        })
      })
      .catch((error) => {
        this.setState({
			error: true,
			countryQuery,
		})
      })
  }
  
  inputHandler(e) {
    this.setState({
      countryName: e.target.value,
    })
  }

  submitHandler() {
	
	if(this.state.error !== '') {
		this.setState({
			countries: [],
			error: ''
		})
	}
	this.getCountries();
	this.setState({
		error:'',
		countries: []
	})
  }

  render() {
    const { isLoading} = this.state;

    return (
		<div className="App">
			<TaskButton>
				<Task />
			</TaskButton>
			<h2>Enter the country name</h2>
			
			<input type="text" 
					value={this.state.countryName}
					onChange={this.inputHandler}
					placeholder = "name of the country"
			/>
			&nbsp;
			<button className="regular-button" 
					onClick={this.submitHandler}>
				Search
			</button>
			{isLoading && 
				<div>
					<p>Loading...</p>
					<p>Please, wait :)</p>
				</div>
       		 }			
			{this.state.countries.map((country) => {
				return (
					<div key={country}>
						<p>Country: {country.name},</p>
						<p>capital: {country.capital},</p>
						<p>continent: {country.region}</p>
					</div>
				)
			})}
			
			{this.state.error && (
				<p>Oops! There's no such country as "{this.state.countryQuery}"!</p>
			)}
   		 </div>
  );
  }
}

export default CountriesList
