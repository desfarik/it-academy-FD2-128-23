import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


const GameHeader = (param) => {
    const navigate = useNavigate()
    return (
        <div className="GameHeader">
            <div>Terns: {param.turns}</div>
            <div>Attempts: {param.attempts}</div>
            <div>Wins: {param.wins}</div>
            <Button variant="primary" onClick={() => navigate('/')}>Go to main menu</Button>
        </div>
    )
}

export default GameHeader;