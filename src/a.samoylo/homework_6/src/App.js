import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/header";
import Main from "./components/main";
import './components/style.css'


function App() {
  return (
      <div className="App" style={{background: 'linear-gradient(#000000, #020013)', boxShadow: '0px 2px 35px 10px rgba(0, 0, 0, 0.25)',
      position: "absolute", top: 0, bottom: 0, right: 0, left: 0, overflow: "scroll", borderRadius: '24px', color: 'white'}}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />  
          </Routes>
        </Router>
      </div>
  );
}

export default App;
