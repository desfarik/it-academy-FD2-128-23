const songsContainer = document.querySelector(".songs-container");
const albumsContainer = document.querySelector(".albums-logos");
const songInfo = document.querySelector(".player");
let allSongs = generateAllSongs();
generateSongsAlb(1);
generateAlbums(ALL_ITEMS);

function generateAlbums(album) {
  const html = album
    .map((album) => {
      return `
            <button class="album-item" onclick="generateSongsAlb(${album.id})">
                    <img src="${album.img}" alt="">
                </button>
            `;
    })
    .join("");
  albumsContainer.innerHTML = html;
}
function generateAllSongs() {
  let allSongs = [];
  for (let song of ALL_ITEMS) {
    allSongs.push(...song.songs);
  }
  return allSongs;
}

function generateSongs(items) {
  const html = items
    .map((song) => {
      return `
      <div class="song-item">
      <img src="${song.img}" alt="" />
      <div class="audio-info">
        <p class="audio-name">${song.author} - ${song.name}</p>
        <p class="audio-duration">${song.duration}</p>
      </div>
      <button class="play-pause-button" onclick="play(${song.id})">
          <span class="material-symbols-outlined"> play_circle </span>
          <audio src="${song.url}" id="${song.id}" class="playing-song"></audio>
        </button>
    </div>
            `;
    })
    .join("");
  songsContainer.innerHTML = html;
}
function generateSongsAlb(id) {
  const searchInput = document.querySelector(".search-input");
  searchInput.value = "";
  let songsAlbum = ALL_ITEMS[id - 1];
  const html = songsAlbum.songs
    .map((song) => {
      return `
      <div class="song-item">
      <img src="${song.img}" alt="" />
      <div class="audio-info">
        <p class="audio-name">${song.author} - ${song.name}</p>
        <p class="audio-duration">${song.duration}</p>
      </div>
      <button class="play-pause-button" onclick="play(${song.id})">
          <span class="material-symbols-outlined"> play_circle </span>
          <audio src="${song.url}" id="${song.id}" class="playing-song" ></audio>
        </button>
    </div>
          `;
    })
    .join("");
  songsContainer.innerHTML = html;
}
function searchItems() {
  const searchInput = document.querySelector(".search-input");
  const phrase = searchInput.value.toLowerCase();
  let allSongsCopy = allSongs.slice();
  const items = allSongsCopy.filter((song) => {
    return (
      song.author.toLowerCase().includes(phrase) ||
      song.name.toLowerCase().includes(phrase)
    );
  });
  generateSongs(items);
}
const audio = querySelector(`#${song.id}`);
function play() {
  audio.play();
}
