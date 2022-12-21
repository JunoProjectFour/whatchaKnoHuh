import app from '../firebase.js';
import { push, ref, getDatabase } from 'firebase/database';
import { useState } from 'react';
import { useNavigate, useLocation  } from 'react-router-dom';

const LeaderBoardForm = ({userScore}) => {
  const location = useLocation()
  console.log(location.state);

  const [userInput, setUserInput] = useState([]);
  const navigate = useNavigate()

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // const results = 50
    const newUser = {
      name: userInput,
      points: location.state.userScore
    }

    const database = getDatabase(app);
    // const dbRef = ref(database);
    const usersNodeRef = ref(database, `/user`)

    push(usersNodeRef, newUser);
    setUserInput('');
    //  console.log(results)
    if (newUser) {
      navigate("/leaderboard")
    }
  }

 

  return (
    <div className='LeaderForm'>
      <form action="submit">
        <label htmlFor="newUsername"></label>
        <input type="text" 
        id="newUsername" 
        onChange={handleInputChange} 
        value={userInput} 
        placeholder='Please enter your name'
        required
        />
        <button onClick={handleSubmit} className='userNameInputButton'>Yeeeeeeah!</button>
        {/* <button onClick={handleRemove}>clear</button> */}
      </form>
    </div>

  )
}

export default LeaderBoardForm;

