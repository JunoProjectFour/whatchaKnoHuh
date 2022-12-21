import LeaderBoardForm from '../comp/LeaderBoardForm'
import { useLocation } from "react-router-dom"

const LeaderBoardFormPage = ({userScore}) => {
  const location = useLocation()
  console.log(location.state);
  return(
    <div>
      <section className="FormPage">
      <div className="wrapper">
        <h2>Your Score was:</h2>
        <h2>{location.state.userScore}</h2>
        <LeaderBoardForm
        userScore={userScore}
         />
      </div>
      </section>
    </div>
  )
}

export default LeaderBoardFormPage;