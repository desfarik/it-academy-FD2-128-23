let i = 0;
const audio = document.getElementById("myAudio");
const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const songTitle = document.getElementById("song-title");
const songArtist = document.getElementById("song-artist");
const songCover = document.getElementById("song-cover")
const btnContainer = document.querySelector("#albums-wrapper");
const btns = btnContainer.querySelectorAll(".albums-cover");

function play() {
    const player = document.getElementById("player");
    const block3 = document.querySelector(".block-3");
    audio.play();
    playBtn.style.display = "none";
    pauseBtn.style.display = "flex";
    player.style.display = "flex";
    block3.style.marginBottom = "125px";
}

function pause() {
    audio.pause();
    playBtn.style.display = "flex";
    pauseBtn.style.display = "none";
}

function prevSong() {
    const activeButton = document.querySelector('.albums-wrapper .active');
    const activeAlbum = ALL_ITEMS.find(item => item.album === +activeButton.dataset.album);
    i--;
    if (i < 0) {
        i = activeAlbum.songs.length - 1;
    }
    audio.src = activeAlbum.songs[i].src;
    songTitle.innerHTML = activeAlbum.songs[i].title;
    songArtist.innerHTML = activeAlbum.songs[i].artist;
    songCover.innerHTML = `<img src="${activeAlbum.songs[i].cover}" alt="${activeAlbum.songs[i].title}">`;
    play();
}

function nextSong() {
    const activeButton = document.querySelector('.albums-wrapper .active');
    const activeAlbum = ALL_ITEMS.find(item => item.album === +activeButton.dataset.album);
    i++;
    if (i >= activeAlbum.songs.length) {
        i = 0;
    }
    audio.src = activeAlbum.songs[i].src;
    songTitle.innerHTML = activeAlbum.songs[i].title;
    songArtist.innerHTML = activeAlbum.songs[i].artist;
    songCover.innerHTML = `<img src="${activeAlbum.songs[i].cover}" alt="${activeAlbum.songs[i].title}">`;
    play();
}

audio.addEventListener("ended", function () {
    nextSong();
});

songTitle.innerHTML = ALL_ITEMS[0].songs[i].title;
songArtist.innerHTML = ALL_ITEMS[0].songs[i].artist;
songCover.innerHTML = `<img src="${ALL_ITEMS[0].songs[i].cover}" alt="${ALL_ITEMS[0].songs[i].title}">`;
audio.src = ALL_ITEMS[0].songs[0].src;

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        const current = document.querySelector(".active");
        if (current) {
            current.classList.remove("active");
        }
        btn.classList.add("active");
        const album = ALL_ITEMS.find(item => item.album === +btn.dataset.album);
        generateItems(album.songs);
        i = 0;
    });
});

function playSong(id) {
    const activeButton = document.querySelector('.albums-wrapper .active');
    const activeAlbum = ALL_ITEMS.find(item => item.album === +activeButton.dataset.album);
    const song = activeAlbum.songs.find(item => item.id === id);
    const index = activeAlbum.songs.indexOf(song);
    audio.src = song.src;
    songTitle.innerHTML = song.title;
    songArtist.innerHTML = song.artist;
    songCover.innerHTML = `<img src="${song.cover}" alt="${song.title}">`;
    i = index;
    play();
    generateItems(activeAlbum.songs);
}