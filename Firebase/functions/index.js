const functions = require('firebase-functions');
const asana = require('asana');

exports.asana = functions.https.onRequest((req, res) => {
  // replace with your personal access token.
  var personalAccessToken = '0/e577ccdd45cf264a7d3bef189d3af003';

  // Construct an Asana client
  var client = asana.Client.create().useAccessToken(personalAccessToken);

  // Get your user info
  client.users.me().then(me => {
    // Print out your information
    console.log('Hello world! ' + 'My name is ' + me.name + '!');
  });
});
