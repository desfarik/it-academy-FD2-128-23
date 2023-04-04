import logo from '../assets/image/logo.svg';
import buttonHeader from '../assets/image/buttonHeader.svg';

const Header = () => {
    return (
        <div className="Header">
            <div style={{display: 'flex', alignItems: 'end', gap: '10px'}}>
                <img src={logo} alt='logo' />
                <div style={{color: 'white', paddingBottom: '10px'}}>Panda</div>
            </div>
            <img src={buttonHeader} alt='button' />
        </div>
    )
}

export default Header