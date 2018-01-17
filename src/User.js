import React, { Component } from 'react';
import { Header, Icon, Button, Segment, Input } from 'semantic-ui-react';

import { usersRef } from "./database";

class User extends Component {
	state = {
		editing: false,
		user: this.props.user
	};

	render(){
		var {editing, user} = this.state;

		return (
			<Segment clearing>
				<Header as='h3' floated='left'>
					<Icon name='user circle outline' />
					<Header.Content>
						
						{ editing ? 
							<Input size="mini" className="edit-input" value={user.name} name="name" onChange={this.handleChange} /> 
							: user.name }

						<Header.Subheader>
							{ editing ? 
								<Input size="mini" className="edit-input" value={user.email} name="email" onChange={this.handleChange} /> 
								: user.email }
						</Header.Subheader>
					</Header.Content>
				</Header>
				
				<div className={editing ? 'actions-buttons show' : 'actions-buttons'} >
					
					{editing ? <div>
						<Button color="teal" size="mini" compact type="button" onClick={this.updateUser}>Update</Button>
						<Button color="pink" size="mini" compact type="button" onClick={this.toggleEdit}>Cancel</Button>
					</div> : <div>
						<Button color="green" size="mini" compact type="button" onClick={this.toggleEdit}>Edit</Button> 
						<Button color="orange" size="mini" compact type="button" onClick={this.deleteUser}>Delete</Button>
					</div> }
					
				</div>
			</Segment>
		);
	}

	deleteUser = () => {
		usersRef.child(this.props.user.id).remove();
	}

	toggleEdit = () => {
		if(this.state.editing){
			this.setState({
				user: this.props.user,
				editing: false
			});
		}else{
			this.setState({editing: true});
		}
	}

	updateUser = () => {
		console.log('Update: ', this.state.user);
		this.setState({editing: false});
	}

	handleChange = (event) => {
		this.setState({
			user: {...this.state.user, [event.target.name]: event.target.value}
		});
	}
}

export default User;