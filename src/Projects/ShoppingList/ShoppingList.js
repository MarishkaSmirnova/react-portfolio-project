import React, { Component } from 'react'
import './ShoppingList.css'
import TaskButton from '../../components/TaskButton/TaskButton'
import Task from './Task'

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
        product: '',
		shoppingList: [],
      }
      
      this.productsHandler = this.productsHandler.bind(this)
	  this.addItem = this.addItem.bind(this)
    }

    productsHandler(e) {
        this.setState({
            product: e.target.value
        })
    }

    deleteHandler(i) {
        const shoppingList = this.state.shoppingList.filter((item, index) => index !== i)
        this.setState({
            shoppingList: shoppingList,
        })
    }

    addItem(e) {
        if (this.state.product !== '') {
            this.setState({
                product: '',
                shoppingList: [this.state.product, ...this.state.shoppingList],
            })
        }
        e.preventDefault();       
	}

  render() {
    const { shoppingList } = this.state;
    const allProducts = [];
    for (let i = 0; i < shoppingList.length; i++) {
        allProducts.push(
            <li key={shoppingList[i] + i}>
                {shoppingList[i]}
				&nbsp;
                <button className="regular-button" onClick={() => this.deleteHandler(i)}>Delete</button>
            </li>
        )
    }
    return (
		<div className="App ShoppingList">
			<TaskButton>
				<Task />
			</TaskButton>
			<form onSubmit={this.addItem}>
				<h2>Shopping list:</h2>
				<input type='text'
						value={this.state.product}
						onChange={this.productsHandler}
						placeholder="Enter the product"/>
				<input className="regular-button" type='submit' value='Add'/>
				<ol>{allProducts}</ol> 
        	</form>
		</div>
        
    );
  }
}

export default App;
