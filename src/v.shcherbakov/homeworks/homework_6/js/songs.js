const songContainer = document.querySelector(".songs_container");
const albumsContainer = document.querySelector(".albums_container");
const songInfo = document.querySelector(".player");

let allSongs = generateAllSongs();
generateSongsAlb(1);
generateAlbums(ALBUMS);

function generateAllSongs() {
    let allSongs = [];
    for (let song of ALBUMS) {
        allSongs.push(...song.songs);
    }
    return allSongs;
}

function generateSongs(items) {
    const html = items
        .map((song) => {
            return `
            <div class="song_item">
                <img class="song-img" src="${song.img}" alt="">
                <div class="song_title text_decoration">${song.author} - ${song.name}</div>
                <div class="time text_decoration">${song.time}</div>
                <button type="button" class="play_this_song" onclick="addToControlAndPlay(${song.id})">
                    <img src="./image/play button.svg">
                    <audio src="${song.url}" id="${song.id}" class="current-audio" loop></audio>
                    </button>
                </div>
                <br>
            `;
        })
        .join("");
    songContainer.innerHTML = html;
}

function generateSongsAlb(id) {
    const searchInput = document.querySelector("#songs_search_input");
    searchInput.value = "";
    let songsAlbum = ALBUMS[id - 1];
    const html = songsAlbum.songs
        .map((song) => {
            return `
        <div class="song_item">
            <img class="song-img" src="${song.img}" alt="">
            <div class="song_title text_decoration">${song.author} - ${song.name}</div>
            <div class="time text_decoration">${song.time}</div>
            <button type="button" class="play_this_song" onclick="addToControlAndPlay(${song.id})">
                <img src="./image/play button.svg">
                <audio src="${song.url}" id="${song.id}" class="current-audio" loop></audio>
                </button>
            </div>
            <br>
        `;
        })
        .join("");
    songContainer.innerHTML = html;
}

function generateAlbums(album) {
    const html = album
        .map((album) => {
            return `
        <button class="album_item" onclick="generateSongsAlb(${album.id})">
				<img src="${album.img}" alt="">
			</button>
        `;
        })
        .join("");
    albumsContainer.innerHTML = html;
}

function searchItems(event) {
    const searchInput = document.querySelector("#songs_search_input");
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

function addToControlAndPlay(songId) {
    addToPlayerControl(songId);
    play(songId);
}

function addToPlayerControl(songId) {
    let allSongsCopy = allSongs.slice();
    const song = allSongsCopy.find((song) => song.id === songId.id);
    const html = `
     <div class="song_info">
        <img class="player_song_img" src=${song.img} alt="">
			  <div class="player_title text_decoration">
			    <p class="song_name">${song.name}</p>
			    <p class="song_author">${song.author}</p>
		    </div>
      </div>
      <div class="control_buttons">
			  <button type="button" class="previous control_button_decor" onclick="playPrevious(${song.id})"><img src="./image/button_before.svg" alt=""></button>
			  <button type="button" class="play_pause control_button_decor" onclick="pause(${song.id})"><img src="./image/button_pause.svg" alt=""></button>
			  <button type="button" class="next control_button_decor"><img src="./image/button_next.svg" alt="" onclick="playNext(${song.id})"></button>
		  </div>
        `;
    songInfo.innerHTML = html;
}

function play(songId) {
    const songs = document.querySelectorAll(".current-audio");
    for (let item of songs) {
        item.load();
    }
    let audio = document.querySelector(`#${songId.id}`);
    audio.play();
}

function playPrevious(songId) {
    let allSongsCopy = allSongs.slice();
    const song = allSongs.find((song) => song.id === songId.id);
    let nextSong = allSongs[allSongs.indexOf(song) - 1];
    let audio = document.querySelector(`#${nextSong.id}`);
    addToControlAndPlay(audio);
}

function playNext(songId) {
    let allSongsCopy = allSongs.slice();
    const song = allSongs.find((song) => song.id === songId.id);
    let nextSong = allSongs[allSongs.indexOf(song) + 1];
    let audio = document.querySelector(`#${nextSong.id}`);
    addToControlAndPlay(audio);
}

function pause(songId) {
    let audio = document.querySelector(`#${songId.id}`);
    audio.pause();
    audio.classList.toggle('paused');
    if(![...audio.classList].includes('paused')) {
        audio.play();
    }
}