function generateNumber(from, to) {
    return Math.floor(Math.random() * (to + 1 - from) + from);
}

let Hello = alert("Приветствуем Вас в игре '21 очко'!");

function calculateSummScore(summScore, score){
    return summScore += score;
}
const suitCards = ["\u2660", "\u2663", "\u2666", "\u2665"];
const valuesCards = ["2","3","4","5","6", "7", "8", "9", "10", "В", "Д", "К", "Т"];
const scoreCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 3, 4, 11];
let deck = [];
let players = [];
// class Card {
//     constructor(suit, value, score) {
//         this.suit = suit;
//         this.value = value;
//         this.score = score;
//     }
//
//     get getCard() {
//         return this.value + this.suit;
//     }
// }
// class Player {
//     constructor(name) {
//         this.name = name;
//     }
//
// }
// class Crouer {
//
// }
function game(){
    let playerSuitIndex   = 0;
    let playerValueIndex  = 0;
    let botSuitIndex      = 0;
    let botValueIndex	  = 0;
    let playerScore		  = 0;
    let botScore		  = 0;
    let playerCardLine	  = "Ваши карты: ";
    let botCardLine		  = "Карты крупье: ";
    let cardDecks		  = [];
    for (let i=0; i<4; i++) {
        cardDecks[i] = [];
        for (let j=0; j<13; j++) {
            cardDecks[i][j] = {
                dignity : valuesCards[j] + suitCards[i],
                score : scoreCards[j],
                using : 1
            }
        }
    }

    let exitFlag		  = true;

    while (exitFlag) {
        playerSuitIndex   = generateNumber (0, 3);
        playerValueIndex  = generateNumber (0, 12);


        while (cardDecks[playerSuitIndex][playerValueIndex].using === 0) {
            playerSuitIndex   = generateNumber (0, 3);
            playerValueIndex  = generateNumber (0, 12);
        }
        cardDecks[playerSuitIndex][playerValueIndex].using = 0;

        botSuitIndex   = generateNumber (0, 3);
        botValueIndex  = generateNumber (0, 12);

        while (cardDecks[botSuitIndex][botValueIndex].using === 0) {
            botSuitIndex   = generateNumber (0, 3);
            botValueIndex  = generateNumber (0, 12);
        }
        cardDecks[botSuitIndex][botValueIndex].using = 0;
        playerCardLine = playerCardLine + cardDecks[playerSuitIndex][playerValueIndex].dignity;

        playerScore = calculateSummScore (playerScore, cardDecks[playerSuitIndex][playerValueIndex].score);
        botScore 	= calculateSummScore (botScore, cardDecks[botSuitIndex][botValueIndex].score);

        alert (playerCardLine + " Ваши очки " + playerScore);
        botCardLine += cardDecks[botSuitIndex][botValueIndex].dignity;



        if (playerScore === 21){
            if (botScore === 21){
                alert ("Ничья! Ваша сумма очков " + playerScore + "\n" + botCardLine + "Количество очков компьютера " + botScore);
                break;
            }
            alert ("Вы выиграли! Ваша сумма очков " + playerScore + "\n" + botCardLine + "Количество очков компьютера " + botScore);
            break;
        }

        if (playerScore > 21){
            if (botScore === 21){
                alert ("Вы проиграли! Ваша сумма очков " + playerScore + "\n" + botCardLine + "Количество очков компьютера " + botScore);
                break;
            }

            if (botScore > 21){
                alert ("Ничья! Ваша сумма очков " + playerScore + "\n" + botCardLine + "Количество очков крупье " + botScore);
                break;
            }

            alert ("Вы проиграли! Ваша сумма очков " + playerScore + "\n" + botCardLine + "Количество очков крупье " + botScore);
            break;
        }

        if (playerScore < 21){
            if (botScore === 21){
                alert ("Вы проиграли! Ваша сумма очков " + playerScore + "\n" + botCardLine + "Количество очков крупье " + botScore);
                break;
            }

            if (botScore > 21){
                alert ("Вы выиграли! Ваша сумма очков " + playerScore + "\n" + botCardLine + "Количество очков крупье " + botScore);
                break;
            }

            exitFlag = confirm ("Желаете взять еще карту?");
            if (!exitFlag){
                while (botScore <= 17){
                    botSuitIndex   = generateNumber (0, 3);
                    botValueIndex  = generateNumber (0, 12);

                    while (cardDecks[botSuitIndex][botValueIndex].using === 0) {
                        botSuitIndex   = generateNumber (0, 3);
                        botValueIndex  = generateNumber (0, 12);
                    }

                    cardDecks[botSuitIndex][botValueIndex].using = 0;
                    botCardLine += cardDecks[botSuitIndex][botValueIndex].dignity;
                    botScore 	= calculateSummScore (botScore, cardDecks[botSuitIndex][botValueIndex].score);//расчет суммы бота
                }

                if (botScore === 21){
                    alert ("Вы проиграли! Ваша сумма очков " + playerScore + "\n" + botCardLine + "Количество очков крупье " + botScore);
                    break;
                }

                if (botScore > 21){
                    alert ("Вы выиграли! Ваша сумма очков " + playerScore + "\n" + botCardLine + "Количество очков крупье " + botScore);
                    break;
                }

                if (playerScore > botScore) {
                    alert ("Вы выиграли! Ваша сумма очков " + playerScore + "\n" + botCardLine + "Количество очков крупье " + botScore);
                    break;
                }
            }
        }
    }
}
game();
