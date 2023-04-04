const itemContainer = document.querySelector('.playlist');
const albomsContainer = document.querySelector('.albums_row');
const musicPlayer = document.querySelector('footer');
const audio = document.querySelector('audio');
const currImg = document.querySelector('.current_img');
const currArtist = document.querySelector('.current_artist');
const currSong = document.querySelector('.current_name');

function generateAlbumList(items) {
  const albums = items
    .map((item) => {
      return `<li class="album_item" data-song="${item.name}"><img src="${item.img}"></li>`;
    })
    .join('');
  albomsContainer.innerHTML = albums;
}
generateAlbumList(albums);

let currentAlbum = null;
const allAlbums = document.querySelectorAll('.album_item');
allAlbums.forEach(function (item) {
  item.addEventListener('click', function () {
    const albumName = item.dataset.song;
    const filteredSongs = songs.filter((song) => song.artist === albumName);
    generatePlaylist(filteredSongs);
    if (currentAlbum !== null) {
      currentAlbum.classList.remove('current_album');
    }
    currentAlbum = item;
    item.classList.add('current_album');
  });
});

function generatePlaylist(items) {
  const playlists = items
    .map((item) => {
      return `<li class="song_item" data-song = "${item.artist}" data-title = "${item.name}"  data-img= "${item.img}" data-src= "${item.src}">
      <div class="song_information">
       <img class="album_item" src="${item.img}">
       <p class="song_title"><span class="artist">${item.artist}</span> &ndash; <span class="song_name">${item.name}</span></p>
      </div>
      <div class="play_song">
      <span class="song_duration">${item.duration}</span>
      <button class="play_btn"><i class="fa-solid fa-circle-play"></i></button>
      </div>
      </li>`;
    })
    .sort(() => Math.random() - 0.5)
    .join('');
  itemContainer.innerHTML = playlists;
}
generatePlaylist(songs);

function searchItems() {
  const searchInput = document.querySelector('#searchInput');
  const phrase = searchInput.value.toLowerCase();
  const items = songs.filter((song) => {
    return (
      song.artist.toLowerCase().includes(phrase) ||
      song.name.toLowerCase().includes(phrase)
    );
  });
  generatePlaylist(items);
}

let activeSong = null;
itemContainer.addEventListener('click', function (event) {
  const song = event.target.closest('.song_item');
  if (song) {
    const songName = song.dataset.song;
    const songArtist = song.dataset.title;
    const audioImg = song.dataset.img;
    const audioPath = song.dataset.src;
    musicPlayer.style.display = 'block';
    if (activeSong !== null) {
      activeSong.classList.remove('active');
    }
    activeSong = song;
    song.classList.add('active');
    currImg.setAttribute('src', audioImg);
    audio.setAttribute('src', audioPath);
    currArtist.innerHTML = songName;
    currSong.innerHTML = songArtist;
    audio.play();
  }
});

function pause() {
  audio.pause();
}

function play() {
  audio.play();
}

let current = 0;
const songInPlaylist = document.querySelectorAll('.song_item');
function nextSong() {
  current++;
  if (current >= songInPlaylist.length - 1) {
    current = 0;
  }
  audio.src = songInPlaylist[current].dataset.src;
  currImg.setAttribute('src', songInPlaylist[current].dataset.img);
  currArtist.innerHTML = songInPlaylist[current].dataset.song;
  currSong.innerHTML = songInPlaylist[current].dataset.title;
  audio.play(current);
}

function previousSong() {
  current--;
  if (current < 0) {
    current = songInPlaylist.length - 1;
  }
  audio.src = songInPlaylist[current].dataset.src;
  currImg.setAttribute('src', songInPlaylist[current].dataset.img);
  currArtist.innerHTML = songInPlaylist[current].dataset.song;
  currSong.innerHTML = songInPlaylist[current].dataset.title;
  audio.play(current);
}
