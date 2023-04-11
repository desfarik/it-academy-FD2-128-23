const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };
   const duplicateArray = (array) => {
    return [...array, ...array, ...array, ...array];
  };
  
 const createIconsArray = (initialCount) => {
    const ALL_IMAGE = [
    'lemon',
    'fish',
    'cat',
    'dog',
    'cogs',
    'atom'  
    ];
  
    switch (initialCount) {
      case 16:
        return ALL_IMAGE.slice(0, 4);
      case 20:
        return ALL_IMAGE.slice(0, 5);
      case 24:
        return ALL_IMAGE;
      default:
        break;
    }
  };
  const createGameCard = (defaultIcon, flippedCardIcon) => {
    const card = document.createElement('div');
    card.classList.add('game-card');

    const notFlippedCardI = document.createElement('i');
    const flippedCardI = document.createElement('i');

    notFlippedCardI.classList.add('fa', `fa-${defaultIcon}`);
    flippedCardI.classList.add('fa', `fa-${flippedCardIcon}`);

    card.append(flippedCardI, notFlippedCardI);

    return card;
}
const createGameMenu = () => {
    const title = document.createElement('h2');
    const gameSection = document.querySelector('.game-section-container');

    gameSection.innerHTML = '';
    title.textContent = 'Difficulty level';
    title.classList.add('game-menu-title');
    

    const createDifficultButton = (difficulty) => {
        const button = document.createElement('button');

        button.classList.add('game-menu-difficulty-btn');
        button.textContent = `${difficulty} cards`;

        button.addEventListener('click', () => startGame(difficulty))

        return button;
    }

    gameSection.append(
        title,
        createDifficultButton(16),
        createDifficultButton(20),
        createDifficultButton(24),
    
    )
}
const startGame = (difficulty) => {
    let firstCard = null;
    let secondCard = null;
    let clickable = true;
  
    const gameSection = document.querySelector(".game-section-container");
    const gameTable = document.createElement("div");
    const cardsIcons = createIconsArray(difficulty);
    const duplicatedCardsIcons = duplicateArray(cardsIcons);
    const restartBtn = document.createElement("button");
  
    gameSection.innerHTML = "";
    restartBtn.textContent = "Restart";
    gameTable.classList.add("game-table");
    restartBtn.classList.add("restart-btn");
  
    shuffle(duplicatedCardsIcons);
  
    duplicatedCardsIcons.forEach((icon) =>
      gameTable.append(createGameCard("star", icon))
    );
  
    gameSection.append(gameTable, restartBtn);
  
    const cards = document.querySelectorAll(".game-card");
  
    restartBtn.addEventListener("click", createGameMenu);
  
    cards.forEach((card, index) =>
      card.addEventListener("click", () => {
        if (clickable == true && !card.classList.contains("equal")) {
          card.classList.add("flip");
  
          if (firstCard == null) {
            firstCard = index;
          } else {
            if (index != firstCard) {
              secondCard = index;
              clickable = false;
            }
          }
  
          if (
            firstCard != null &&
            secondCard != null &&
            firstCard != secondCard
          ) {
            if (
              cards[firstCard].firstElementChild.className ===
              cards[secondCard].firstElementChild.className
            ) {
              setTimeout(() => {
                cards[firstCard].classList.add("equal");
                cards[secondCard].classList.add("equal");
  
                firstCard = null;
                secondCard = null;
                clickable = true;
              }, 500);
            } else {
              setTimeout(() => {
                cards[firstCard].classList.remove("flip");
                cards[secondCard].classList.remove("flip");
  
                firstCard = null;
                secondCard = null;
                clickable = true;
              }, 500);
            }
          }
  
          if (
            Array.from(cards).every((card) => card.className.includes("flip"))
          ) {
            alert("Win!!!");
          }
        }
      })
    );
  };
  

const cardsApp = () => {
    createGameMenu();
}

cardsApp();