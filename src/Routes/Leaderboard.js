import LeaderboardDisplay from '../comp/LeaderboardDisplay';
import '../LeaderBoard.css'

const Leaderboard = () => {
    return (
        <div className='wrapper leaderboardContainer'>
            <h2>The best of the best!</h2>
            {/* <Outlet /> */}
            <div className="topScores">
                <ul className='leaderBoardUl'>
                    <LeaderboardDisplay />
                </ul>
            </div>
        </div>
    )
}

export default Leaderboard;