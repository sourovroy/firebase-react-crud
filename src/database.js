import firebase from "firebase";

firebase.initializeApp({
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DATABASE_URL,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGEING_SENDER_ID
});

export const usersRef = firebase.database().ref('users');

/**
 * Users item map with react array
 * @return Array of firebase object
 */
export function manageUserItems(snapshot){
	var items = snapshot.val(),
		returnItems = [];
	for(let item in items){
		returnItems.push({
			'id': item,
			'name': items[item].name,
			'email': items[item].email
		});
	}
	return returnItems;
}