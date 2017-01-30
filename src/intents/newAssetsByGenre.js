const { AssetsQuery } = require('mxd-heimdall');

const Asset = require('../models/Asset');

module.exports = ({ alexaApp, heimdall }) => {
  alexaApp.intent(
    'newAssetsByGenre',
    {
      slots: { genre: 'GENRE' },
      utterances: ['was es neues an {GENRE} gibt'],
    },
    (request, response) => {
      const query = (new AssetsQuery())
        .filter('genre', request.slot('genre'))
        .filter('movies')
        .filter('new')
        .filter('notUnlisted')
        .sort('activeLicenseStart', 'desc');
      heimdall.getAssets(query)
        .then((assets) => {
          if (assets.length > 0) {
            new Asset(assets[0]).render(response);
          } else {
            response.say('Keine Inhalte vorhanden');
          }
          response.send();
        })
        .catch((error) => {
          console.log(error);
        });
      return false;
    },
  );
};
