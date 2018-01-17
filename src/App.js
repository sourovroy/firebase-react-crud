import React, { Component } from 'react';
import { Header, Container, Grid } from 'semantic-ui-react'

import UserList from "./UserList";
import CreateUser from "./CreateUser";

class App extends Component {

	render(){			
		return (
			<div className="App">
				<Container>
					<Header as="h1" textAlign="center">Firebase React CRUD</Header>

					<Grid>
						<Grid.Row columns={2}>
							<Grid.Column>
								<UserList></UserList>
							</Grid.Column>
							<Grid.Column>
								<CreateUser></CreateUser>
							</Grid.Column>
						</Grid.Row>
					</Grid>
					
				</Container>
			</div>
		);
	}
}

export default App;