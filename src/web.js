require('dotenv').config({ silent: true });

const app = require('dexpress');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

const alexa = require('alexa-app');
const alexaApp = new alexa.app('maxdome');

const { AssetsQuery, Heimdall } = require('mxd-heimdall');
const heimdall = new Heimdall({
  apikey: process.env.HEIMDALL_APIKEY,
  appid: process.env.HEIMDALL_APPID,
});

alexaApp.intent(
  'newAssets',
  {
    utterances: [
      'was es neues gibt',
    ]
  },
  (request, response) => {
    const query = (new AssetsQuery())
      .filter('movies')
      .filter('new')
      .filter('notUnlisted')
      .sort('activeLicenseStart', 'desc');
    heimdall.getAssets(query)
      .then((assets) => {
        response.say(assets[0].title);
        response.send();
      })
      .catch((error) => {
        console.log(error);
      });
    return false;
  }
);

alexaApp.express(app);
