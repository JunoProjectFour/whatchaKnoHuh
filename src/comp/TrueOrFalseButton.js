import { useState } from "react"
import { useNavigate, Route, Routes } from "react-router-dom"
import LeaderBoardFormPage from "../Routes/LeaderBoardFormPage"

const TrueOrFalseButton = ({triggerReRender, setTriggerReRender, displayHomo, wordDef}) => {

const [userScore, setUserScore] = useState(0)
const [progressBar, setProgressBar] = useState(0)

const navigate = useNavigate();


  const handleClick = () => {


    
    if (progressBar < 10) {
      if ( displayHomo[0] === wordDef) {
        setUserScore(userScore + 1)
      }
      else {
        setUserScore(userScore -0.5)
       }
      setTriggerReRender(!triggerReRender)
      setProgressBar(progressBar +1)

    }
    else {
      if ( displayHomo[0] === wordDef) {
        setUserScore(userScore + 1)
      }
      else {
        setUserScore(userScore -0.5)
       }
      navigate("/leaderboardforum", {
        state : {userScore : userScore}
      } )
      // LINK TO LeaderBoardFormPage
    }
  } 

  const handleClickTwo = () => {
    if (progressBar < 10) {
      if ( displayHomo[1] === wordDef) {
        setUserScore(userScore + 1)
      }
      else {
        setUserScore(userScore -0.5)
       }
      setTriggerReRender(!triggerReRender)
      setProgressBar(progressBar +1)

    }
    else {
      if ( displayHomo[1] === wordDef) {
        setUserScore(userScore + 1)
      }
      else {
        setUserScore(userScore -0.5)
       }
       navigate("/leaderboardforum", {
        state : {userScore : userScore}
      } )
      // LINK TO LeaderBoardFormPage
    }
  } 


  return(
    <>
    <div className="buttonsAndProgress">
      <div className="buttons">
        <h2>Options</h2>
        <button onClick={handleClick}>{displayHomo[0]}</button>
        <button onClick={handleClickTwo}>{displayHomo[1]}</button>
      </div>
      <div className="pointProgress">
        <h2>Points: {userScore}</h2>
        <h2>Question: {progressBar}/10</h2>
      </div>
    </div>
    <Routes>
      <Route  path="/leaderboardforum" element={ <LeaderBoardFormPage />}/>
    </Routes>
    </>
  )
}

export default TrueOrFalseButton;