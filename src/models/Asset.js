class Asset {
  constructor(data) {
    this.data = data;
  }

  render(response) {
    const asset = this.data;
    let teaser;
    switch (asset.type) {
      case 'movie':
        teaser = `Der Film ${asset.title}`;
        break;
      case 'episode':
        teaser = `Die Folge ${asset.episodeTitle} der Serie ${asset.title}`;
        break;
      case 'season':
        teaser = `Die Staffel ${asset.seasonNumber} der Serie ${asset.title}`;
        break;
      case 'series':
        teaser = `Die Serie ${asset.title}`;
        break;
      default:
        teaser = asset.title;
        break;
    }
    response
      .say(teaser)
      .card({
        type: 'Standard',
        title: teaser,
        text: [
          `${asset.productionYear}, ${asset.duration} Minuten`,
          `Rating: ${asset.rating.averageRating} / 5 (${asset.rating.countTotal})`,
          `Genres: ${asset.genres.join(', ')}`,
          '',
          asset.description,
        ].join('\n'),
        image: {
          smallImageUrl: asset.image,
        },
      });
  }
}

module.exports = Asset;
