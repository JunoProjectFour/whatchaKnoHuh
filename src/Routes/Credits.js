import '../Credits.css';

const Credits = () => {
    return (
        <div className="creditsDiv">
            <div className="wrapper">
                <h2 className="creditHeader">MEET THE TEAM</h2>
                <ul className="creditsTeamUl">
                    <li className="creditsTeamLi">
                        <img className="creditImg" src="https://ca.slack-edge.com/T02E8L5NKFV-U044ASBKNFM-bc3823597214-512" alt="" />
                        <h3 className="team">Radojko Radulovic</h3>
                        <p className="creditBio">I'm a front end developer based in Burlington, Ontario, Canada. I'm a recent graduate of Juno College of Technology Web Developer Bootcamp and open to new opportunities.</p>
                        <p className="creditsHomepage"><a href="https://www.radoyko.com" target="_blank" rel="noreferrer">radoyko.com</a></p>
                        <p><a className="creditsEmail" href="mailto:radulovicradojko@gmail.com">Contact</a></p>
                    </li>
                    <li className="creditsTeamLi">
                        <img className="creditImg" src="https://ca.slack-edge.com/T02E8L5NKFV-U044PJ6CK41-98d008615619-512" alt="" />
                        <h3 className="team">Daman Matharoo</h3>
                        <p className="creditBio">I am a front-end web developer passionate about creating engaging, accessible and responsive websites and apps. I have worked in the customer service industry for nearly a decade where I was able to develop my aptitude for effective communication, leadership and complex problem-solving. My hobbies include all things soccer. </p>
                        <p className="creditsHomepage"><a href="https://www.damanmatharoo.com" target="_blank" rel="noreferrer">damanmatharoo.com</a></p>
                        <p><a className="creditsEmail" href="mailto:damanmatharoo4@gmail.com">Contact</a></p>
                    </li>
                    <li className="creditsTeamLi">
                        <img className="creditImg" src="https://ca.slack-edge.com/T02E8L5NKFV-U044PJ67L2D-9fd4f1335035-512" alt="" />
                        <h3 className="team">Tyler George</h3>
                        <p className="creditBio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste provident, inventore excepturi nesciunt neque sed temporibus error explicabo dolorem, quo ducimus sit! Porro atque veniam est animi tempore quaerat ut.</p>
                        <p className="creditsHomepage"><a href="https://www.tylergeorge.ca" target="_blank" rel="noreferrer">tylergeorge.com</a></p>
                        <p><a className="creditsEmail" href="mailto:tylerGeorge@email.com">Contact</a></p>
                    </li>
                    <li className="creditsTeamLi">
                        <img className="creditImg" src="https://ca.slack-edge.com/T02E8L5NKFV-U0444AVFR9U-7196a93dd413-512" alt="" />
                        <h3 className="team">Matthew McKay</h3>
                        <p className="creditBio">Front end developer based in Toronto specializing in HTML5, CSS, JAVASCRIPT and REACT. After almost 15 years running my own construction company, I’m going  in another direction, exchanging my tool belt for a keyboard to build websites instead of homes.</p>
                        <p className="creditsHomepage"><a href="https://www.matthewmckay.com" target="_blank" rel="noreferrer">matthewmckay.com</a></p>
                        <p><a className="creditsEmail" href="mailto:matthewmckay@gmail.com">Contact</a></p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Credits;