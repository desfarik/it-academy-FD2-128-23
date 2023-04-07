const albumList = document.querySelector('.album-images');
const songList = document.querySelector('.songs-list');
const addToPlayer = document.querySelector('.player');

function generateAlbums(items) {

  const albums = items.map(album => {
    return `
        <img src=${album.img} alt = '${album.author} - ${album.albumName}' class = 'album-image' id = '${album.id}' onclick = 'filterByAlbum(${album.id})'>
    `;
  })
    .join('');

    albumList.innerHTML = albums;
}
generateAlbums(SONG_ARRAY);

let allSongsList = [];
function songArray(items) {
  for (let item of items) {
    allSongsList.push(...item.songs)
  }
  return allSongsList
}
songArray(SONG_ARRAY)

let currentSongList = [];
function generateSongs(items) {

  const songs = items.map(song => {
      return `
      <div class = 'song'>
          <div class = 'song-info'>
              <img src=${song.img} alt = '${song.author}' class = 'album-image'>
              <div>${song.author} - ${song.songName}</div>
          </div>
          <div class = 'song-duration'>
              <div>${song.duration}</div>
          <button onclick='player(${song.id})'>
=            <img src='images/play-button.svg' alt='play'>
          </button>
          </div>
      </div>
`;
  })
    .join('');

    songList.innerHTML = songs;
    currentSongList = items.slice();
}
generateSongs(allSongsList);


function filterByAlbum(albumId) {
  const currentAlbum = SONG_ARRAY.find(album => album.id === albumId);
  let currentAlbumSongs = currentAlbum.songs;
  generateSongs(currentAlbumSongs);

  let selectedAlbum = document.querySelector(`img[id='${albumId}']`);
  let allAbums = document.querySelectorAll('.album-image');
  allAbums.forEach((album) => {
    if (album.classList.contains('active')) {
      album.classList.remove('active');
    }
  });
  selectedAlbum.classList.add('active')
}

function searchItems(event) {
  const phrase = searchInput.value.toLowerCase();
  const items = allSongsList.filter(song => {
    return song.author.toLowerCase().includes(phrase) || song.songName.toLowerCase().includes(phrase);
  });
  generateSongs(items);
}


function player(songId) {
  let currentSong = currentSongList.find((song) => song.id === songId);

  const addPlayer = `
    <img src=${currentSong.img} alt='${currentSong.author}' class = 'album-image'>
    <div class = 'current-song'>
        <div>${currentSong.songName}</div>
        <div>${currentSong.author}</div>
        <audio src='audio/${currentSong.author}/${currentSong.songName}.mp3' id='${currentSong.id}' class='current-audio'></audio>
    </div>
    <div class='player-nav'>
        <button type = 'button' onclick='back(${currentSong.id})'><img src='images/music-back.svg' alt='back button'></button>
        <button type = 'button' onclick='sound(${currentSong.id})'><img src='images/play-pause.svg' alt='play-pause button'></button>
        <button type = 'button' onclick='forward(${currentSong.id})'><img src='images/music-forward.svg' alt='next button'></button>
    </div>`
    addToPlayer.innerHTML = addPlayer;
    sound(currentSong)
}

function sound() {
  const audio = document.querySelector('audio')
  audio.paused ?  audio.play()  : audio.pause();
}
function forward(songId) {
  let currentSong = currentSongList.find((song) => song.id === songId);
  let songIndex = currentSongList.indexOf(currentSong)
  if (songIndex !== currentSongList.length-1) {
    let nextSong = currentSongList[songIndex+1]
    return player(nextSong.id)
  } else {
    return player(currentSongList[0].id)
  }
}
function back(songId) {
  let currentSong = currentSongList.find((song) => song.id === songId);
  let songIndex = currentSongList.indexOf(currentSong)
  if (songIndex !== 0) {
    let prevSong = currentSongList[songIndex-1]
    return player(prevSong.id)
  } else {
    return player(currentSongList[currentSongList.length-1].id)
  }
  
}

