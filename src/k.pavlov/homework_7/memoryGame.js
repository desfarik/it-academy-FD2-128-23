const section = document.querySelector('section');
const playerLivesCount = document.querySelector('.playerLivesCount');
let playerLives = 6;
playerLivesCount.textContent = playerLives;

let attempts = 0;
const attemptsCount = document.querySelector('.attemptsCount');
attemptsCount.textContent = attempts;

const CARDS = [
    {img: 'images/citroen.png', name: 'citroen'},
    {img: 'images/daewoo.png', name: 'daewoo'},
    {img: 'images/ducati.png', name: 'ducati'},
    {img: 'images/golf.png', name: 'golf'},
    {img: 'images/landCruiser.png', name: 'landCruiser'},
    {img: 'images/maserati.png', name: 'maserati'},
    {img: 'images/mazdaRx7.png', name: 'mazdaRx7'},
    {img: 'images/supra.png', name: 'supra'},
    {img: 'images/citroen.png', name: 'citroen'},
    {img: 'images/daewoo.png', name: 'daewoo'},
    {img: 'images/ducati.png', name: 'ducati'},
    {img: 'images/golf.png', name: 'golf'},
    {img: 'images/landCruiser.png', name: 'landCruiser'},
    {img: 'images/maserati.png', name: 'maserati'},
    {img: 'images/mazdaRx7.png', name: 'mazdaRx7'},
    {img: 'images/supra.png', name: 'supra'},
];

const randomize = () => {
    const cardData = CARDS;
    cardData.sort(() => Math.random() - 0.5);
    return cardData
};
console.log(randomize())

const cardGenerator = () => {
    const cardData = randomize();

    cardData.forEach(item => {
    const card = document.createElement('div');
    const face = document.createElement('img');
    const back = document.createElement('div');
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";

    face.src = item.img;
    card.setAttribute('name', item.name);

    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener('click', (e) => {
        card.classList.toggle('toggleCard');
        checkCards(e)
    });
    });
};

checkLevel = () => {

}

 checkCards = (e) => {
     console.log(e)
     const clickedCard = e.target;
     clickedCard.classList.add('flipped');
     const flippedCards = document.querySelectorAll('.flipped');
     const toggleCard = document.querySelectorAll('.toggleCard');

     if (flippedCards.length === 2) {
         if (flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')) {
             console.log('match')
             flippedCards.forEach((card) => {
                 card.classList.remove('flipped');

             })
         } else {
             console.log('wrong')
             flippedCards.forEach((card) => {
                 card.classList.remove('flipped');
                 setTimeout(() => card.classList.remove('toggleCard'), 1000);
             });
             playerLives --;
             playerLivesCount.textContent = playerLives;
             if (playerLives === 0) {
                  restart();
                  alert('you lost ((  try again');
                 attempts ++;
                 attemptsCount.textContent = attempts;
             }
         }
     }
    if (toggleCard.length === 16) {
        alert('you won!!!');
    }
 };

 const restart = () => {
     let cardData = randomize();
     let cards = document.querySelectorAll('.card');
     cardData.forEach((item, index) => {
         cards[index].classList.remove('toggleCard');

         cards[index].style.pointerEvents = 'all';

     });
     playerLives = 6;
     playerLivesCount.textContent = playerLives;
 }


 cardGenerator()
