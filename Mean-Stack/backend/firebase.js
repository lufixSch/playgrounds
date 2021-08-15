const firebase = require('firebase');
const config = {
  apiKey: 'AIzaSyBbobeNNPml1msf0fd0G7xduKrtMaNEork',
  authDomain: 'socialnetwork-e666a.firebaseapp.com',
  databaseURL: 'https://socialnetwork-e666a.firebaseio.com',
  projectId: 'socialnetwork-e666a',
  storageBucket: 'socialnetwork-e666a.appspot.com',
  messagingSenderId: '376158161710',
};

firebase.initializeApp(config);

module.exports = firebase;
