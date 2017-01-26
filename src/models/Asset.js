class Asset {
  constructor(data) {
    this.data = data;
  }

  render(response, { i18n }) {
    const asset = this.data;
    const teaser = i18n.__(
      `asset.teaser.${asset.type}`,
      {
        episodeTitle: asset.episodeTitle,
        seasonNumber: asset.seasonNumber,
        title: asset.title
      }
    );
    response
      .say(teaser)
      .card({
        type: 'Standard',
        title: teaser,
        text: i18n.__(
          'asset.text',
          {
            productionYear: asset.productionYear,
            duration: asset.duration,
            ratingAverageRating: asset.rating.averageRating,
            ratingCountTotal: asset.rating.countTotal,
            genres: asset.genres.join(', '),
            description: asset.description,
          }
        ),
      });
  }
}

module.exports = Asset;
