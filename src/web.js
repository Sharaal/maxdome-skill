require('dotenv').config({ silent: true });

const app = require('dexpress');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

const alexa = require('alexa-app');
const alexaApp = new alexa.app('maxdome');

alexaApp.intent(
  'newAssets',
  {
    utterances: [
      'was es neues gibt',
    ]
  },
  (request, response) => {
    response.say('Success!');
  }
);

alexaApp.express(app);
