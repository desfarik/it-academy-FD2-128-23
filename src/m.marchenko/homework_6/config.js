const itemContainer = document.querySelector(".content");
const albumsContainer = document.querySelector(".albums");
const audioContainer = document.querySelector("audio");
const currentTrack = '';

generateItems(ALL_ITEMS);
generateAlbums(ALL_ALBUMS);

function generateItems(items) {

  const html = items.map(track => {
    return `
    <div class="track-item">
            <img class="item-img" src="${track.img}">
            <p class="item-title">${track.artist} - ${track.name}</p>
            <p class="item-title">${track.duration}</p>
            <button class="item-control" onclick="playStop(${track.id})">
                <img src="img/play button.svg">
                <audio src='${track.song}' id="${track.id}" class="current-audio"></audio>
            </button>
            <br>
    </div>
    `;
  })
    .sort(() => Math.random() - 0.5)
    .join('');

  itemContainer.innerHTML = html;
}

function generateAlbums(items) {

  const html = items.map((item) => {
    return `
    <button class="album-item" data-song="${item.name}" onclick="albumFilter(${item.album_id})">
            <img class="album-img" src="${item.img}">
    </button>
    `;
  })
    .sort(() => Math.random() - 0.5)
    .join('');

  albumsContainer.innerHTML = html;
}

function playStop(id) {
  let audio = document.getElementById(id);
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
  showPlayer();
}

const audio = document.querySelector('audio')

function albumFilter(title) {
  let request = title;
  const items = ALL_ITEMS.filter((track) => {
    return (
      track.album.includes(request)
    );
  });
  generateItems(items);
}

function trackSearch() {
  let request = document.querySelector("#find-track");
  request = request.value.toLowerCase();
  const items = ALL_ITEMS.filter((track) => {
    return (
      track.artist.toLowerCase().includes(request) || track.name.toLowerCase().includes(request)
    );
  });
  generateItems(items);
}

function showPlayer() {
  const playerContainer = document.querySelector(".active-player");
  let audio = document.getElementById(currentTrack);
  console.log(audio);
  playerContainer.innerHTML = `
  <div>
    <img src="" class="item-img active-img">
          <div>
                <p></p>
                <p></p>
          </div>
    </div>
    <div class="active-controls">
          <button class="content-button"><img src="img/music back.svg"></button>
          <button class="content-button"><img src="img/pause.svg"></button>
          <button class="content-button"><img src="img/music next.svg"></button>
    </div>
    `;
}