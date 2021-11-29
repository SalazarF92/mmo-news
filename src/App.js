import './App.css';
import Homepage from './components/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GameDetail from './components/GameDetail';
import { GameIdProvider } from './context/contextId';
import Newspage from './components/Newspage';
import { ThemeProvider } from './context/themeColor';

function App() {
  return (
    <ThemeProvider>
      <GameIdProvider>
        <Router>
          {/* <div className="App"> */}
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/game" element={<GameDetail />} />
            <Route path="/latest" element={<Newspage />} />
          </Routes>
          {/* </div> */}
        </Router>
      </GameIdProvider>
    </ThemeProvider>
  );
}

export default App;
