import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameHeader from "./game/gameHeader";
import Card from "./game/card";
import mainImg from '../assets/image/main.JPG'
import data from "./data";


const Game = () => {
    const {id} = useParams();

    const GameCardCreate = () => {
        let totalCards = [];
        while (totalCards.length < id) {
            let card = data[Math.floor(0 + Math.random() * (data.length - 1 + 1 - 0))];
            totalCards.push(card, card);
        }
        return totalCards.sort(() => Math.random() - 0.5);
    }

    const [gameCards, setGameCards] = useState(GameCardCreate);
    const [turns, setTurns] = useState(3);
    const [attempts, setAttempts] = useState(0);
    const [wins, setWins] = useState(0);
    const [win, setWin] = useState(false)
    const [selectedCard, setSelectedCard] = useState([]);
    const [lockedCard, setLockedCard] = useState(0)
    const [unlockAllCards, setUnlockAllCards] = useState(false);

    useEffect(() => {
        if (+lockedCard === +id) {
            setLockedCard(0)
            setUnlockAllCards(!unlockAllCards);
            setTimeout(() => {
                setGameCards([]);
                setGameCards(GameCardCreate);
            }, 500)
            setWins(wins+1);
            setAttempts(0)
            setTurns(3)
        }
    }, [lockedCard])

    useEffect(() => {
        if (selectedCard.length === 2) {
            if (selectedCard[0].id === selectedCard[1].id) {
                selectedCard[0].lock(true);
                selectedCard[1].lock(true);
                setLockedCard(lockedCard+2)
                setSelectedCard([]);
            }
            if (selectedCard[0].id !== selectedCard[1].id) {
                setTimeout(() => {
                    selectedCard[0].show(false);
                    selectedCard[1].show(false);
                }, 1000)
                setSelectedCard([])
                setTurns(turns-1)
            }
        }
    }, [selectedCard])

    useEffect(() => {
        if(turns === 0) {
            setUnlockAllCards(!unlockAllCards);
            setAttempts(attempts+1)
            setTurns(3)
            setLockedCard(0)
        }
    }, [turns])

    return (
        <div className="GamePage" >
             <GameHeader turns={turns} attempts={attempts} wins={wins}/>
             <div className="CardList">
                {gameCards.map((card, index) => <Card id={card.id} index={index} url={card.url} mainImg={mainImg} 
                selectedCard={{selectedCard: selectedCard, setSelectedCard: setSelectedCard}}
                unlockAllCards={unlockAllCards} win={win}/>)}
             </div>
        </div>
    )
}

export default Game;