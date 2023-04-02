const albumsContainer = document.querySelector(".albums-group");
const songCantainer = document.querySelector(".play-list");
const player = document.querySelector(".music-player-section");
generateItems(ALL_ITEMS);
generateSongsAlb(1);
function generateItems(items) {
  const buttonAlbum = items
    .map((album) => {
      return `
                <img class="cover" onclick="generateSongsAlb(${album.id})"
           
                 src="${album.cover}">
          
    `;
    })
    .join("");

  albumsContainer.innerHTML = buttonAlbum;
}

function generateSongsAlb(id) {
  const searchInput = document.querySelector("#songs_search_input");
   let songsAlbum = ALL_ITEMS[id - 1];
  const html = songsAlbum.songs
    .map((song) => {
      return `
        <div class="queue-item">
            <img class="cover" src="${song.cover}" alt="">
            <div class="singer">${song.singer} - ${song.song}</div>
            <div class="duration">${song.duration}</div>
            <button type="button" class="btn" onclick="addToPlayer(${song.id})">
            <span class="material-symbols-outlined play">
            play_circle
            </span>
                <audio src="${song.path}" id="${song.id}" class="current-audio" loop></audio>
                </button>
            </div>
            <br>
        `;
    })
    .join("");
  songCantainer.innerHTML = html;
}
let songsArray = getSongsArray();
function getSongsArray() {
  let songsArray = [];
  for (let song of ALL_ITEMS) {
    songsArray.push(...song.songs);
  }
  return songsArray;
}
function addToPlayer(songId) {
  let newSongsArray = songsArray.slice();
  const song = newSongsArray.find((song) => song.id === songId.id);
  const html = `
        <img class="cover" src=${song.cover} alt="">
			  <div class="current-song-date">
			    <p class="song">${song.song}</p>
			    <pclass="singer">${song.singer}</p>
		    </div>
        <div class="controls">
			  <button type="button" class="btn" ><span class="material-symbols-outlined skip_previous">
        skip_previous
        </span></button>
			  <button type="button" class="btn"><span class="material-symbols-outlined pause">
        pause
        </span>        
        </button> 
			  <button type="button" class="btn"><span class="material-symbols-outlined skip_next ">
        skip_next
        </span></button>
		  
      
    </div>
        `;
  player.innerHTML = html;
}
