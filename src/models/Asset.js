class Asset {
  constructor(data) {
    this.data = data;
  }

  render(response) {
    const asset = this.data;

    let say;
    if (asset.type === 'movie') {
      say = 'Der Film ';
    } else {
      say = 'Die Serie ';
    }
    say += asset.title;
    if (asset.seasonNumber) {
      say += ` - Staffel ${asset.seasonNumber}`;
    }
    if (asset.episodeTitle) {
      say += ` - Folge ${asset.episodeTitle}`;
    }

    response.say(say);

    let title = asset.title;
    if (asset.seasonNumber) {
      title += ` - Staffel ${asset.seasonNumber}`;
    }
    if (asset.episodeTitle) {
      title += ` - Folge ${asset.episodeTitle}`;
    }

    response.card({
      type: 'Standard',
      title: title,
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
