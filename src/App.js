import React, { Component } from 'react';
import firebase from "firebase";

class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			text: '',
			value: 'Something'
		};
	}

	componentDidMount(){
		var config = {
			apiKey: "AIzaSyDzLpbTPixl4q57m5E1as9CvUCS-0dYAqA",
			authDomain: "sourov-first-project.firebaseapp.com",
			databaseURL: "https://sourov-first-project.firebaseio.com",
			projectId: "sourov-first-project",
			storageBucket: "sourov-first-project.appspot.com",
			messagingSenderId: "585255870499"
		};
		firebase.initializeApp(config);

		var dbRef = firebase.database().ref().child('text');
		dbRef.on('value', snap => this.setState({text: snap.val()}));
	}

	render() {
		return (
			<div className="App">
				<h1>{this.state.text} and {this.state.value}</h1>
			</div>
		);
	}
}

export default App;