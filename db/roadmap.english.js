var { Roadmap, Timestamp, Node, Icon, MusicArtist, Genre, Link } = require('roadmaplib');

// Initialize the roadmap
var map = new Roadmap();
map.defaultLanguage = 'en';

[
    new Node.Indicator({
        timestamp: new Timestamp('January', 1, 1983),
        indicates: 'timeline_start',
        label: 'Birth Of The Internet'
    }),
    new Node.StreamingService({
        timestamp: new Timestamp('February', 14, 2005),
        icon: new Icon('Apps/YouTube'),
        label: 'YouTube is Founded',
        url: new Link('https://www.youtube.com/')
    }),
    new Node.StreamingService({
        timestamp: new Timestamp('December', 12, 2006),
        icon: new Icon('Apps/NikoNikoDouga'),
        label: 'Nico Video is Founded',
        url: new Link('https://www.nicovideo.jp/')
    }),
    new Node.Landmark({
        timestamp: new Timestamp(null, null, 2007),
        label: 'First Crazy Error Is Published',
        icon: new Icon('Misc/Flag')
    }),
    new Node.Landmark({
        timestamp: new Timestamp(null, null, null),
        label: 'First "魔理沙は大変なものを盗んだいました" Parody in CrE',
        icon: new Icon('Misc/Music')
    }),
    new Node.BGM({
        timestamp: new Timestamp(null, null, 2010),
        label: '"Marisa Tanked My Score With an Incredible Hand" Released',
        icon: new Icon('Misc/Music'),
        title: "Marisa Tanked My Score With An Incredible Hand",
        artists: [
            new MusicArtist('IOSYS')
        ],
        album: null,
        releaseYear: 2010,
        genres: [
            new Genre('pop'),
            new Genre('japanese_pop'),
            new Genre('anime'),
            new Genre('edm'),
            new Genre('hardstyle')
        ],
        link: new Link('https://.../')
    })
].forEach(entry => {
    map.appendItem(entry);
});

module.exports = map.exportAsJson();