import { useEffect, useState } from "react";


const Card = (param) => {
    const [show, setShow] = useState();
    const [lock,setLock] = useState(false)
    const onClick = () => {
        if (!lock && param.selectedCard.selectedCard.length < 2) {
            setShow(!show);
            param.selectedCard.setSelectedCard(oldArray => [...oldArray, {
                show: setShow,
                index: param.index,
                lock: setLock,
                id: param.id,
            }])
        }
    }
    useEffect(() => {
        setTimeout(() => {
            setShow(false);
            setLock(false);
        }, 500)
    }, [param.unlockAllCards])
    return (
        <div className={show?'card flipped':'card'} onClick={onClick}>
            <img className="cardFront" src={param.url} alt="img"/>
            <img className="cardBack" src={param.mainImg} alt='img' />
        </div>
    )
}

export default Card;