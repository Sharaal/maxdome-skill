require('dotenv').config({ silent: true });

const app = require('dexpress');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

const alexa = require('alexa-app');
// eslint-disable-next-line new-cap
const alexaApp = new alexa.app('maxdome');

const { Heimdall } = require('mxd-heimdall');
const heimdall = new Heimdall({
  apikey: process.env.HEIMDALL_APIKEY,
  appid: process.env.HEIMDALL_APPID,
});

const dependencies = { alexaApp, heimdall };
require('./intents/newAssets')(dependencies);

alexaApp.express(app);
