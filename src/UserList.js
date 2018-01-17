import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

import { usersRef, manageUserItems } from "./database";
import User from "./User";

class UserList extends Component {
	state = {
		items: []
	};

	render(){
		return (
			<div>
				<Header as="h2" textAlign="center">Users List</Header>

				{ this.state.items.map( (item, index) => <User key={index} user={item} /> ) }
			</div>
		);
	}

	componentDidMount(){
		usersRef.on('value', snap => this.manageItemsList(snap) );
	}

	manageItemsList(snapshot){
		this.setState({ 
			items: manageUserItems(snapshot) 
		});
	}
}

export default UserList;