import app from '../firebase.js';
import {  ref, getDatabase, onValue } from 'firebase/database';
import { useEffect, useState } from 'react';
import '../LeaderBoard.css'
// import { useLocation  } from 'react-router-dom';


const LeaderboardDisplay = () => {

  // const location = useLocation()
  // console.log(location.state);

  const [username, setUsername] = useState([]);

  useEffect(() => {
    const database = getDatabase(app);
    const dbRef = ref(database, `/user`);
    console.log(dbRef);

    onValue(dbRef, (response) => {

      const data = response.val();

      console.log(data);

      const updatedDbInfo = [];

      for (let key in data) {
        console.log(data[key].points);
        updatedDbInfo.push(data[key]);
      }
      updatedDbInfo.sort((a, b) => b.points - a.points);
      setUsername(updatedDbInfo);
    })

  }, []);

  console.log(username);
  return (
    <div>
      <ul>
        {
          username.map((username) => {
            return (
                  <li className='leaderBoardLi' key={username.key}>
                    <p>{username.name}</p>
                    <p>{username.points}</p>
                  </li>   
            )
          })
        }
      </ul>
    </div>
  )
}

export default LeaderboardDisplay;

