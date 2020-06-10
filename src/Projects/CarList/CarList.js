import React, { Component } from 'react'
import uuid from 'uuid/v4'
import './CarList.css'
import Form from './Form/Form'
import { carlist } from './data'
import TaskButton from '../../components/TaskButton/TaskButton'
import Task from './Task'

class CarList extends Component {
  constructor(props) {
    super(props);

    this.state = { 
		carlist,
	 }
    
	this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(car) {
    car.id = uuid();
    this.setState({
      carlist: [...this.state.carlist, car],
    })
  }

  render() {
    return (
      <div className="App">
		<TaskButton>
			<Task />
		</TaskButton>
		<h2>Cars for sale</h2>
		<Form onSubmit={this.handleSubmit}/>
			<table>
				<thead>
					<tr>
						<th>Brand:</th>
						<th>Name:</th>
						<th>Year:</th>
						<th>Photo:</th>
						<th>Prise:</th>
						<th>Condition:</th>
					</tr>
				</thead>
				<tbody>
				{this.state.carlist.map(item => (
					<tr key={item.id}> 
						<td>{item.brand}</td>
						<td>{item.make}</td>
						<td>{item.year}</td>
					<td>
						<img src={item.imageUrl} style={{width:200}} alt={item.brand}/>
					</td>
					<td>{item.price}$</td>
					<td>
						{item.new ? 'New' : 'Used'} 
					</td>
					</tr>
				))}
				</tbody>
			</table>
      </div>
    );
  }
}

export default CarList;


