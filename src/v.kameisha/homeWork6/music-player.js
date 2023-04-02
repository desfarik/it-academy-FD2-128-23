const albomsContainer = document.querySelector('.alboms-container');
const songsContainer = document.querySelector('.songs-container');
const songInfo = document.querySelector(".player-current-song");
let albom = [];
generateAlboms(ALBOMS);


function generateAlboms(alboms){
    const html = alboms.map(albom =>{
    return `
    <div class="albom-item">
        <button class="albom-item" onclick="openAlbomSongsById(${albom.id})">
            <img src="${albom.img}" alt="">
        </button>
    </div>
    `
})
.join('');
albomsContainer.innerHTML = html;
}


function openAlbomSongsById(albomId) {
    albom = ALBOMS.find(albom => albomId === albom.id);
    const html = albom.songs.map((song) => {
        return `
                <div class="song-item">
                    <img class="song-img" src="${song.img}" alt="">
                    <div class="song-title">${song.author} - ${song.name}</div>
                    <div class="minutes">${song.minutes}</div>
                    <button type="button" class="play-the-song" onclick="addToControlAndPlay(${song.url})">
                        <img src="images/play-button.png">
                        <audio src="${song.url}" class="current-audio"></audio>
                        </button>
                    </div>
                    <br>
                `;
        })
        .join("");
    songsContainer.innerHTML = html;
}

function searchItems() {
    const searchInput = document.querySelector('#songs-search');
    const phrase = searchInput.value.toLowerCase();
    const songs = albom.songs.filter(song => {
      return song.author.toLowerCase().includes(phrase) || song.name.toLowerCase().includes(phrase);
    });
    generateSongs(songs);
  }


function generateSongs(songs) {
const html = songs.map((song) => {
    return `
            <div class="song-item">
                <img class="song-img" src="${song.img}" alt="">
                <div class="song-title">${song.author} - ${song.name}</div>
                <div class="minutes">${song.minutes}</div>
                <button type="button" class="play-the-song" onclick="addToControlAndPlay(${song.url})">
                    <img src="images/play-button.png">
                    <audio src="${song.url}" class="current-audio"></audio>
                    </button>
                </div>
                <br>
            `;
    })
    .join("");
    songsContainer.innerHTML = html;
}




