const firebase_admin = require('firebase-admin');
const serviceAccount = require('../firebase_adminSDK.json');

firebase_admin.initializeApp({
  credential: firebase_admin.credential.cert(serviceAccount),
  databaseURL: 'https://socialnetwork-e666a.firebaseio.com',
});

module.exports = firebase_admin;
