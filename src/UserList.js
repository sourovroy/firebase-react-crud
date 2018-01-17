import React, { Component } from 'react';
import { Header, Icon } from 'semantic-ui-react'
import { usersRef, manageUserItems } from "./database";

class UserList extends Component {
	state = {
		items: []
	};

	render(){
		var usersList = this.state.items.map((item, index) => 
			<Header as='h3' key={index}>
				<Icon name='user circle outline' />
				<Header.Content>
					{item.name}
					<Header.Subheader>
						{item.email}
					</Header.Subheader>
				</Header.Content>
			</Header>
		);

		return (
			<div>
				<Header as="h2" textAlign="center">Users List</Header>

				{usersList}
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