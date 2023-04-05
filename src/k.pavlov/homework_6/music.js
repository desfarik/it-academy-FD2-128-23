const albumsContainer = document.querySelector('.albums-container');
const songsContainer = document.querySelector('.songs-container');
const currentSongContainer = document.querySelector('.current-song-info');


function generateAlbums(albums) {
    const html = albums.map(album => {
        return `
   <button class="songBtn" onclick="generateSongs(ALBUMS[${album.id - 1}].songs)">
   <div class="album-item">
            <img class="album-image"
                 src="${album.img}">         
        </div>
        </button>
    `;
    })
        .join('');

    albumsContainer.innerHTML = html;
}

generateAlbums(ALBUMS)


function generateSongs(songs) {
    const html = songs.map(song => {
        return `
    <div class="song-item">
            <img class="song-image"
                 src="${song.img}" alt="">
                <div class="song-artist">${song.artistName}</div>
                <div class="song-name">${song.song}</div>
           <div class="song-duration">${song.duration}</div>
           <button class="songBtn" onclick="addToPlayerControl(ALBUMS[${song.id}].songs)"><img class="play-btn" src="${song.button}" alt=""></button>
        </div>
    `;
    })
        .join('');

    songsContainer.innerHTML = html;
}



let allSongs = generateAllSongs();

function generateAllSongs() {
    let allSongs = [];
    for (let song of ALBUMS) {
        allSongs.push(...song.songs);
    }
    return allSongs;
}


function searchSong(event) {
    const searchInput = document.querySelector("#searchInput");
    const phrase = searchInput.value.toLowerCase();
    let allSongsCopy = allSongs.slice();
    const items = allSongsCopy.filter((song) => {
        return (
            song.song.toLowerCase().includes(phrase) || song.artistName.toLowerCase().includes(phrase)
        );
    });
    generateSongs(items);
}



function addToPlayerControl(songId) {
    let allSongsCopy = allSongs.slice();
    const song = allSongsCopy.filter((song) => song.id === songId.id);
    const html = `
      <div class="song-item">
            <img class="song-image"
                 src="${song.img}" alt="">
                <div class="song-artist">${song.artistName}</div>
                <div class="song-name">${song.song}</div>
        </div>
        `;
    currentSongContainer.innerHTML = html;
}



