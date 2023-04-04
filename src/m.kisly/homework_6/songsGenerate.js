const itemContainer = document.querySelector('.content-song');
const itemContainer2 = document.querySelector('.albums-wrapper');
const albums = ALL_ITEMS;


function generateItems(album) {
    const songAlbum = albums.find(item => item.album === album);
    if (!songAlbum) {
        return;
    }
    const html = songAlbum.songs.map((song) => {
        return `<div class="song-wrapper">
            <div class="albums-cover song-cover song${song.cover}">
            <img src="${song.cover}" alt="${song.title}">
            </div>
            <div class="artist-title">${song.artist} - ${song.title}</div>    
            <div class="song-length">${song.length}</div>            
            <button class="play-button" onclick="playSong(${song.id})"></button>
        </div>`
    })
        .join('');

    itemContainer.innerHTML = html;
}
generateItems(albums);

function generateButton(items) {
    const html1 = items.map((album, index) => {
        let classes = `albums-cover num${album.album}`;
        if (index === 0) {
            classes += " active";
            generateItems(album.album);
        }
        return `<button class="${classes}" data-album="${album.album}" style="background-image: url('${album.cover_album}')" onclick="generateItems(${album.album})"></button>`;
    }).join('');

    itemContainer2.innerHTML = html1;
}
generateButton(albums);


function searchItems() {
    const searchInput = document.querySelector('#searchInput');
    const phrase = searchInput.value.toLowerCase();
    const filteredItems = ALL_ITEMS.map(album => {
        return {
            ...album,
            songs: album.songs.filter(song => {
                return song.artist.toLowerCase().includes(phrase) || song.title.toLowerCase().includes(phrase);
            })
        };
    }).filter(album => album.songs.length > 0);
    // generateButton(filteredItems); // обновляем кнопки
    generateItems(filteredItems[0].album); // отображаем песни первого альбома в отфильтрованном массиве
}

