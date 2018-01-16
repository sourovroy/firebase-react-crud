import React, { Component } from 'react';
import { usersRef, manageUserItems } from "./database";

class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			items: []
		};
	}

	componentDidMount(){
		usersRef.once('value', snap => this.manageItemsList(snap) );
		usersRef.on('value', snap => this.manageItemsList(snap) );
			

		// usersRef.push({
		// 	name: "Sourov Roy"
		// });
	}

	manageItemsList(snapshot){
		this.setState({ 
			items: manageUserItems(snapshot) 
		});
	}

	render(){
		var usersList = this.state.items.map((item, index) => 
				<li key={index}>{item.name}</li>
			);
			
		return (
			<div className="App">
				<ul>
					{usersList}
				</ul>
			</div>
		);
	}
}

export default App;