const slider = document.querySelector(".album-slider");
let mouseDown = false;
let startX, scrollLeft;

let startDragging = function (e) {
  mouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};
let stopDragging = function (event) {
  mouseDown = false;
};

slider.addEventListener("mousemove", (e) => {
  e.preventDefault();
  if (!mouseDown) {
    return;
  }
  const x = e.pageX - slider.offsetLeft;
  const scroll = x - startX;
  slider.scrollLeft = scrollLeft - scroll;
});

slider.addEventListener("mousedown", startDragging, false);
slider.addEventListener("mouseup", stopDragging, false);
slider.addEventListener("mouseleave", stopDragging, false);

const itemContainer = document.querySelector(".song-list");

document.addEventListener(
  "play",
  function (pl) {
    if (this.$AudioPlaying && this.$AudioPlaying !== pl.target) {
      this.$AudioPlaying.pause();
    }
    this.$AudioPlaying = pl.target;
  },
  true
); // защита от включения 2+ песен

generateItems(ALL_ITEMS);

function generateItems(items) {
  const html = items
    .map((item) => {
      let temp = document.querySelector(".active").id;
      let number = temp.match(/\d+$/);
      if ((+number[0] - 1) * 5 < +item.id && +item.id <= +number[0] * 5) {
        return `
        <div class="composition flex">
        <img class="item-img br" onclick="play(${item.id})" src="${item.img}" alt="">
        <div class="item-artname">${item.artist} &nbsp;-&nbsp; ${item.song}</div>
        <div class="item-length">${item.length}</div>
        <button class="play br" onclick="play(${item.id})"><img src="https://img.icons8.com/000000/16/play" alt=""></button>
        <audio id="${item.id}" src="${item.link}" preload="auto"></audio>
      </div>
    `;
      }
    })
    .join("");
  itemContainer.innerHTML = html;
}

const buttonGroup = document.querySelector(".album-slider");
let prevButton = null;

const buttonPressed = (e) => {
  if (
    !e.target.classList.contains("active") &&
    e.target.classList.contains("album-cover")
  ) {
    for (let elem of document.getElementsByClassName("active")) {
      elem.classList.remove("active");
    }
    e.target.classList.add("active"); // Add .active CSS Class

    if (prevButton !== null) {
      prevButton.classList.remove("active"); // Remove .active CSS Class
    }

    prevButton = e.target;
    generateItems(ALL_ITEMS);
  }
};
buttonGroup.addEventListener("click", buttonPressed);

function searchItems(event) {
  const searchInput = document.querySelector("#searchInput");
  const phrase = searchInput.value.toLowerCase();
  const items = ALL_ITEMS.filter((music) => {
    return (
      music.artist.toLowerCase().includes(phrase) ||
      music.song.toLowerCase().includes(phrase)
    );
  });
  generateItems(items);
}

let currentMusic;

function play(music) {
  currentMusic = music;
  let audio = document.getElementById(currentMusic);
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
  document.querySelector(".player").style.display = "flex";
  generatePlayer();
}

function changeSongOnEnd() {
  document.querySelectorAll("audio").forEach(function (el) {
    el.addEventListener(
      "ended",
      function () {
        nextTrack();
      },
      true
    );
  });
}

function nextTrack() {
  currentMusic = currentMusic % 5 == 0 ? currentMusic - 4 : currentMusic + 1;
  let audio = document.getElementById(currentMusic);
  audio.play();
  generatePlayer();
}

function prevTrack() {
  currentMusic =
    (currentMusic - 1) % 5 == 0 ? currentMusic + 4 : currentMusic - 1;
  let audio = document.getElementById(currentMusic);
  audio.play();
  generatePlayer();
}

const sliderY = document.querySelector(".song-list");
let mouseDownVert = false;
let startY, scrollTop;

let startDraggingVert = function (e) {
  mouseDownVert = true;
  startY = e.pageY - sliderY.offsetTop;
  scrollTop = sliderY.scrollTop;
};
let stopDraggingVert = function (event) {
  mouseDownVert = false;
};

sliderY.addEventListener("mousemove", (e) => {
  e.preventDefault();
  if (!mouseDownVert) {
    return;
  }
  const Y = e.pageY - sliderY.offsetTop;
  const scroll = Y - startY;
  sliderY.scrollTop = scrollTop - scroll;
});

sliderY.addEventListener("mousedown", startDraggingVert, false);
sliderY.addEventListener("mouseup", stopDraggingVert, false);
sliderY.addEventListener("mouseleave", stopDraggingVert, false);

function generatePlayer() {
  const playerContainer = document.querySelector(".player-generated");
  let audio = document.getElementById(currentMusic);
  console.log(audio.src.slice(-8));
  const heh = ALL_ITEMS.filter((item) =>
    item.link.includes(audio.src.slice(-7))
  );
  const temp = heh[0];
  playerContainer.innerHTML = `
        <div class="composition flex">
        <img class="item-img br" src="${temp.img}" alt="">
        <div class="player-artname">
         <div>${temp.song}</div>
         <div class="min-weight">${temp.artist}</div>
        </div>
      </div>
    `;
}
