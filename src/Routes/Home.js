import { Link } from 'react-router-dom';


const Home = () => {

    return (
            <div className='wrapper'>
                <section className='howToPlay'>
                    <div className='howToFlex'>
                        <h2>How To Play</h2>

                        <p><span>1. </span>Players are presented with two random homophonous words & one definition</p>
                        <p><span>2. </span>Match the correct homophone to the definition </p>
                        <p><span>3. </span>Get smarter</p>
                        <div className='btnDiv'>
                                <Link  className='play 'to="/GamePage">Play Now!</Link>
                        </div>
                    </div>
                </section>
            </div>

    )
}

export default Home;