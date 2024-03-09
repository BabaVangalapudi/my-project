const express = require('express');
const bodyParser = require('body-parser');
const client = require('twilio')(
  'YOUR_TWILIO_ACCOUNT_SID',
  'YOUR_TWILIO_AUTH_TOKEN'
);

const app = express();
const PORT = 5174;

app.use(bodyParser.json());

app.post('/send-sms', (req, res) => {
  const { to, message } = req.body;

  client.messages
    .create({
      body: message,
      from: 'YOUR_TWILIO_PHONE_NUMBER',
      to,
    })
    .then((response) => {
      console.log(response);
      res.status(200).send('SMS sent successfully');
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Failed to send SMS');
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
