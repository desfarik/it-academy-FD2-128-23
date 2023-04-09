import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


const MainPage = () => {
    const navigate = useNavigate()
    return (
        <div className="MainPage">
            <div>Выберите сложность</div>
            <div>
                <Button variant="primary" onClick={() => navigate('FlipGame/18')}>Easy</Button>
                <Button variant="primary" onClick={() => navigate('FlipGame/24')}>Medium</Button>
                <Button variant="primary" onClick={() => navigate('FlipGame/30')}>Hard</Button>
            </div>
        </div>
    )
}

export default MainPage;