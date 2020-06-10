import React, {Component} from 'react';
import './Form.css';
import { defaultCar } from '../data'


class Form extends Component {
    constructor(props) {
        super(props);

		this.state = defaultCar;
		
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value, checked, type } = e.target;
        this.setState(state => ({ 
            [name]: type === 'checkbox' ? checked : value,
        }));
      }
      
    handleSubmit(e) {
        e.preventDefault()
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
			  	<h4>Add a new car:</h4>  
			   	<label>Brand:</label>
				<input type="text" name="brand" value={this.state.brand} onChange={this.handleChange}/>
			   	<label>Name:</label>
				<input type="text" name="make" value={this.state.make} onChange={this.handleChange}/>
			   	<label>Year:</label>
				<select name="year" value={this.state.year} onChange={this.handleChange} >
					<option value="" selected disabled hidden>Choose</option>
					<option value="2020">2020</option>
					<option value="2019">2019</option>
					<option value="2018">2018</option>
					<option value="2017">2017</option>
					<option value="2016">2016</option>
					<option value="2015">2015</option>
				</select>
			   <br/>
			   <label>Photo URL:</label>	
				<input type="url" 
					name="imageUrl" 
					value={this.state.imageUrl} 
					onChange={this.handleChange}  
					placeholder="https://example.com"
					required
				/>
			   <label>Price:</label>
                <input 
                    type="text" 
                    name="price" 
                    value={this.state.price} 
                    onChange={this.handleChange}
                />
			   <br/>
			   <label>New car:</label>
				<input type="checkbox" name="new" value={this.state.new} onChange={this.handleChange}/>
			   <br/>
			   <input className="regular-button" type="submit" value="submit"></input>
		   </form>
        )
    }
}
export default Form;