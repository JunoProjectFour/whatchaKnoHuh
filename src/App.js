import './App.css'
import './HomeStyles.css'
import './LeaderFormStyles.css'
import './GamePage.css'

import { Link, Routes, Route, } from 'react-router-dom';
import GamePage from './Routes/GamePage.js';
import Leaderboard from './Routes/Leaderboard.js';
import Credits from './Routes/Credits.js';
import LeaderBoardFormPage from './Routes/LeaderBoardFormPage';

import ErrorPage from './Routes/ErrorPage.js';
import Home from './Routes/Home';

function App() {
  return (
    <div className='page'>
      <div className='wrapper'>
        <header className='header'>
          <h1> <Link to="/">What do YOU no?</Link></h1>
          <nav>
            <ul className='navUl'>
              <li>
                <Link to="/leaderboard">Leaderboard</Link>
              </li>
              <li>
                <Link to="/credits">Credits</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/GamePage/*" element={<GamePage />} />
        <Route path="/leaderboard" element={<Leaderboard />}></Route>
        <Route  path="/leaderboardforum" element={ <LeaderBoardFormPage />}/>
        <Route path="/credits/" element={<Credits />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}


export default App;
