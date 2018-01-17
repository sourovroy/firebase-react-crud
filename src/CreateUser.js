import React, { Component } from 'react';
import { Header, Form, Button } from 'semantic-ui-react'

import { usersRef } from "./database";

class CreateUser extends Component {
	state = {
		data: {
			name: '',
			email: ''
		}
	};

	render(){
		var { data } = this.state;

		return (
			<div>
				<Header as="h2" textAlign="center">Create User</Header>

				<Form onSubmit={this.handleSubmit}>
					<Form.Field>
						<label>Name</label>
						<input placeholder='Name' name="name" onChange={this.handleChange} value={data.name} />
					</Form.Field>
					<Form.Field>
						<label>Email</label>
						<input placeholder='Email' name="email" value={data.email} onChange={this.handleChange} />
					</Form.Field>
					<Button type="submit" primary>Submit</Button>
				</Form>
			</div>
		);
	}

	handleSubmit = (event) => {
		event.preventDefault();

		// console.log(this.state.data);
		usersRef.push(this.state.data, () => {
			this.setState({
				data: {
					name: '',
					email: ''
				}
			});
		});
	}

	handleChange = (event) => {
		this.setState({
			data: {...this.state.data, [event.target.name]: event.target.value}
		});
	}
}

export default CreateUser;