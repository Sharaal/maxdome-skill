class Asset {
  constructor(data) {
    this.data = data;
  }

  render(response) {
    const asset = this.data;

    let teaser;
    if (asset.type === 'movie') {
      teaser = 'Film ';
    } else {
      teaser = 'Serie ';
    }
    teaser += asset.title;
    if (asset.seasonNumber) {
      teaser += ` - Staffel ${asset.seasonNumber}`;
    }
    if (asset.episodeTitle) {
      teaser += ` - Folge ${asset.episodeTitle}`;
    }

    response
      .say(teaser)
      .card({
        type: 'Standard',
        title: teaser,
        text: [
          `${asset.productionYear}, ${asset.duration} Minuten`,
          `Genres: ${asset.genres.join(', ')}`,
          '',
          asset.description,
        ].join('\n'),
      });
  }
}

module.exports = Asset;
