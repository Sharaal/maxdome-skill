const { AssetsQuery } = require('mxd-heimdall');

const Asset = require('../models/Asset');

module.exports = ({ alexaApp, heimdall, i18n }) => {
  alexaApp.intent(
    'newAssets',
    {
      utterances: [
        'was es neues gibt',
      ],
    },
    (request, response) => {
      const query = (new AssetsQuery())
        .filter('movies')
        .filter('new')
        .filter('notUnlisted')
        .sort('activeLicenseStart', 'desc');
      heimdall.getAssets(query)
        .then((assets) => {
          new Asset(assets[0]).render(response, { i18n });
          response.send();
        })
        .catch((error) => {
          console.log(error);
        });
      return false;
    },
  );
};
