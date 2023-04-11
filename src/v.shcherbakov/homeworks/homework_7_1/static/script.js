function start(level) {
    let moves = 0;
    const mainDiv = document.getElementById("game-board");
    while (mainDiv.firstChild) {
        mainDiv.removeChild(mainDiv.lastChild);
    }
    const scorediv = document.getElementById("score");
    while (scorediv.firstChild) {
        scorediv.removeChild(scorediv.lastChild);
    }

    // const ALL_IMAGES = [1,2,3,4,5,6];
    function levelChoised() {
        const EASY = 8;
        const MEDIUM = 12;
        const HARD = 18;

        if (level === 4) {
            let lengthImages;
            lengthImages = EASY;
        } else if (level === 6) {

            lengthImages = MEDIUM;
        } else if (level === 9) {

            lengthImages = HARD
        }
        return lengthImages;
    }

    levelChoised();

    const gameImages = ALL_IMAGES.slice(0, lengthImages - 1);

    let ImagesCopy = [...gameImages, ...gameImages]

    let row = document.createElement('div')
    // let ImagesCopy = JSON.parse(JSON.stringify(availableImages))
    let randomImg;
    for (let j = 1; j <= 16; j++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'imgdiv')
        let image = document.createElement('img')
        randomImg = ImagesCopy.splice(Math.floor(Math.random() * ImagesCopy.length), 1);
        image.setAttribute('src', randomImg);
        image.setAttribute('class', 'hide')
        div.appendChild(image)
        row.appendChild(div);

        if (j % 4 === 0) {
            document.getElementById('game-board').append(row)
            row = document.createElement('div')
        }

        div.addEventListener('click', function (event) {
            moves++;
            let curr = event.currentTarget.children
            let currImg = curr[0]
            let currentlyshowing = document.getElementsByClassName('showimg');
            currentlyshowing = document.getElementsByClassName('showimg');
            let flag = 0;
            if (currentlyshowing.length >= 1) {
                for (let i = 0; i < currentlyshowing.length; i++) {
                    if (currentlyshowing[i].src !== currImg.src)
                        currentlyshowing[i].classList.remove('showimg');
                    else {
                        currentlyshowing[i].classList.add('match');
                        currImg.classList.add('match')
                        flag = 1;
                    }
                }
            }

            if (document.getElementsByClassName('match').length === 16) {
                alert("You won !!! ")
                let button = document.createElement('button');
                button.setAttribute('class', 'btn btn-warning');
                let node = document.createTextNode("You won!!! Moves " + moves);
                button.appendChild(node)
                document.getElementById('score').appendChild(button)
            }

            if (flag === 0)
                currImg.classList.add('showimg');
        })
    }
}
