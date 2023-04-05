const ALBUMS = [
    {
        id: 1,
        img: 'images/clubMusic.png',
        title: 'club-music',

        songs: [
            {
                id: 1,
                img: 'images/marshmello.png',
                artistName: 'Marshmello',
                song: 'FRIENDS',
                duration: '3:05',
                button: 'images/playButton.svg',
            },
            {
                id: 2,
                img: 'images/KatyPerry.png',
                artistName: 'Katy Perry',
                song: 'Roar',
                duration: '3:05',
                button: 'images/playButton.svg',
            },
            {
                id: 3,
                img: 'images/taylorSwift.png',
                artistName: 'Taylor Swift',
                song: 'Shake It Off',
                duration: '3:05',
                button: 'images/playButton.svg',
            },
            {
                id: 4,
                img: 'images/justinBieber.png',
                artistName: 'Justin Bieber',
                song: 'Baby',
                duration: '3:05',
                button: 'images/playButton.svg',
            },
            {
                id: 5,
                img: 'images/rihanna.png',
                artistName: 'Rihanna',
                song: 'Umbrella',
                duration: '3:05',
                button: 'images/playButton.svg',
            }
        ]
    },

    {
        id: 2,
        img: 'images/popAlbum.png',
        title: 'pop-music',

        songs: [
            {
                id: 6,
                img: 'images/Drake.png',
                artistName: 'Drake',
                song: 'God`s plan',
                duration: '3:20',
                button: 'images/playButton.svg',
            },
            {
                id: 7,
                img: 'images/britneySpears.png',
                artistName: 'Britney Spears',
                song: 'Toxic',
                duration: '3:05',
                button: 'images/playButton.svg',
            },
            {
                id: 8,
                img: 'images/taylorSwift.png',
                artistName: 'Taylor Swift',
                song: 'Shake It Off',
                duration: '3:05',
                button: 'images/playButton.svg',
            },
            {
                id: 9,
                img: 'images/EltonJohn.png',
                artistName: 'Elton John',
                song: 'Saturday night`s alright for fighting',
                duration: '3:30',
                button: 'images/playButton.svg',
            },
            {
                id: 10,
                img: 'images/rihanna.png',
                artistName: 'Rihanna',
                song: 'Umbrella',
                duration: '3:05',
                button: 'images/playButton.svg',
            }
        ],
    },
    {
        id: 3,
        img: 'images/rapAlbum.png',
        title: 'rap-music',

        songs: [
            {
                id: 11,
                img: 'images/Eminem.png',
                artistName: 'Eminem',
                song: 'Stan',
                duration: '5:05',
                button: 'images/playButton.svg',
            },
            {
                id: 12,
                img: 'images/JayZ.png',
                artistName: 'Jay Z',
                song: '4:44',
                duration: '4:44',
                button: 'images/playButton.svg',
            },
            {
                id: 13,
                img: 'images/KanyeWest.png',
                artistName: 'Kanye West',
                song: 'Stronger',
                duration: '4:23',
                button: 'images/playButton.svg',
            },
            {
                id: 14,
                img: 'images/Guf.png',
                artistName: 'Guf',
                song: 'Samurai',
                duration: '5:18',
                button: 'images/playButton.svg',
            },
            {
                id: 15,
                img: 'images/LSP.png',
                artistName: 'LSP',
                song: 'Monetka',
                duration: '3:05',
                button: 'images/playButton.svg',
            }
        ],

    },
    {
        id: 4,
        img: 'images/rock.png',
        title: 'rock-music',

        songs: [
            {
                id: 16,
                img: 'images/Audioslave.png',
                artistName: 'Audioslave',
                song: 'Like a stone',
                duration: '4:05',
                button: 'images/playButton.svg',
            },
            {
                id: 17,
                img: 'images/RHCP.png',
                artistName: 'Red Hot Chili Peppers',
                song: 'Under the bridge',
                duration: '4:45',
                button: 'images/playButton.svg',
            },
            {
                id: 18,
                img: 'images/Muse.png',
                artistName: 'Muse',
                song: 'Starlight',
                duration: '4:55',
                button: 'images/playButton.svg',
            },
            {
                id: 19,
                img: 'images/Oasis.png',
                artistName: 'Oasis',
                song: 'Wonderwall',
                duration: '4:35',
                button: 'images/playButton.svg',
            },
            {
                id: 20,
                img: 'images/Offspring.png',
                artistName: 'Offspring',
                song: 'Pretty fly',
                duration: '3:05',
                button: 'images/playButton.svg',
            }
        ],

    },
    {
        id: 5,
        img: 'images/classic.png',
        title: 'classic-music',

        songs: [
            {
                id: 21,
                img: 'images/Beethoven.png',
                artistName: 'Beethoven',
                song: 'Elise',
                duration: '5:55',
                button: 'images/playButton.svg',
            },
            {
                id: 22,
                img: 'images/Mozart.png',
                artistName: 'Mozart',
                song: 'Roar',
                duration: '3:05',
                button: 'images/playButton.svg',
            },
            {
                id: 23,
                img: 'images/Wagner.png',
                artistName: 'Wagner',
                song: 'ride of the valkyries',
                duration: '3:05',
                button: 'images/playButton.svg',
            },
            {
                id: 24,
                img: 'images/bach.png',
                artistName: 'bach',
                song: 'Fugue in G minor',
                duration: '3:05',
                button: 'images/playButton.svg',
            },
            {
                id: 25,
                img: 'images/rihanna.png',
                artistName: 'Rihanna',
                song: 'Umbrella',
                duration: '3:05',
                button: 'images/playButton.svg',
            }
        ],

    }
]

// function getSongs() {
//     const songNames = ALBUMS.map(songName => songName.songs);
//     return [...new Set(songNames)]
// }

// console.log(getSongs());



