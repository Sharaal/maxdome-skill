require('dotenv').config({ silent: true });

const app = require('dexpress');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

const alexaApp = new require('alexa-app').app('maxdome');

alexaApp.intent(
  'newAssets',
  {
    utterances: [
      'was es neues gibt',
    ]
  },
  (req, res) => {
    res.say('Success!');
  }
);

alexaApp.express(app);
