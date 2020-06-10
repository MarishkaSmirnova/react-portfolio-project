import React, {Component} from 'react';
import './Profile.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMale, faFemale } from '@fortawesome/free-solid-svg-icons'
import TaskButton from '../../../components/TaskButton/TaskButton'
import Task from './Task'

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
		personsList: [],
	}
	this.deleteHandler = this.deleteHandler.bind(this)
  }

  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=20')
		.then (response => {
            if (!response.data.results) {
                this.setState({ personsList: [] })
                return;
            }
            this.setState({ 
                personsList: response.data.results.map(item => ({
                    gender: item.gender,
                    title: item.name.title, 
                    firstName: item.name.first,
                    lastName: item.name.last,
                    country:item.location.country,
                    city: item.location.city,
                    street: item.location.street.name,
                    buildingNumber: item.location.street.number,
                    email: item.email,
                    picture: item.picture.medium,
                    flag: item.nat.toLowerCase(),
                }))
            })
        })
    }
	deleteHandler(index) {
		const personsList = this.state.personsList.filter((item, i) => i !== index)
		this.setState({
			personsList: personsList
		})
	}

  	render() {
      return (
        <div className="App">
			<TaskButton>
				<Task />
			</TaskButton>
            <h1>List of users</h1>
            <table>
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Flag</th>
                        <th>Adress</th>
                        <th>Email</th>
                        <th>Delete user</th>     
                    </tr>
                </thead>
				<tbody>
					{this.state.personsList.map((item, index) => (
						<tr key={item.firstName + item.lastName }>
							<td>
								<img src={item.picture} alt={item.firstName} style={{width:100}}/>
							</td>
							<td>{item.title}. {item.firstName} {item.lastName}</td>
							<td>
								{item.gender === "male" ? <FontAwesomeIcon icon={faMale} size="lg"/> : <FontAwesomeIcon icon={faFemale} size="lg"/>}
							</td>
							<td>
								<img src={`https://www.countryflags.io/${item.flag}/flat/64.png`} alt={item.country}/>
							</td>
							<td>{item.country}, {item.city}, {item.buildingNumber}-{item.street} </td>
							<td>{item.email}</td>
							<td>
								<button className="regular-button" onClick={()=> this.deleteHandler(index)}>delete</button>
							</td>
						</tr>
                	))}
				</tbody>
            </table>
        </div>
        );
    }
}

export default Profile;

//install react fontawersome
//$ npm i --save @fortawesome/fontawesome-svg-core  @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome