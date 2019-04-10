import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
	apiKey: 'AIzaSyAOQlRVBOh3KFvF9nLBQRFHjpqRZJO5mA8',
	authDomain: 'blogsite-portfolio.firebaseapp.com',
	databaseURL: 'https://blogsite-portfolio.firebaseio.com',
	projectId: 'blogsite-portfolio',
	storageBucket: 'blogsite-portfolio.appspot.com',
	messagingSenderId: '813732138629'
};
firebase.initializeApp(config);

export default firebase;
