import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/mainPage';
import './components/main.css'
import Game from './components/game';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/FlipGame/:id' element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
