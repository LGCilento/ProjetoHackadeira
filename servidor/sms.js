const accountSid = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
const authToken = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'http://4dc4c450.ngrok.io',
     from: '+99999999999',
     to: '+9999999999999'
   })
  .then(message => console.log(message.sid));