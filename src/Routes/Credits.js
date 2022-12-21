import '../Credits.css';

const Credits = () => {
    return (
        <div className="creditsDiv">
            <div className="wrapper">
                <h2 className="creditHeader">MEET THE TEAM</h2>
                {/* Outlet is where on the page you want stuff to render */}
                <ul className="creditsTeamUl">
                    <li className="creditsTeamLi">
                        <img className="creditImg" src="https://ca.slack-edge.com/T02E8L5NKFV-U044ASBKNFM-bc3823597214-512" alt="Profile photo of app co-creator Radojko Radulovic" />
                        <h3 className="team">Radojko Radulovic</h3>
                        <p className="creditBio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste provident, inventore excepturi nesciunt neque sed temporibus error explicabo dolorem, quo ducimus sit! Porro atque veniam est animi tempore quaerat ut.</p>
                        <p className="creditsHomepage"><a href="https://www.radoyko.com">radoyko.com</a></p>
                        <p><a className="creditsEmail" href="mailto:radulovicradojko@gmail.com">Contact</a></p>
                    </li>
                    <li className="creditsTeamLi">
                        <img className="creditImg" src="https://ca.slack-edge.com/T02E8L5NKFV-U044PJ6CK41-98d008615619-512" alt="Profile photo of app co-creator Daman Matharoo" />
                        <h3 className="team">Daman Matharoo</h3>
                        <p className="creditBio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste provident, inventore excepturi nesciunt neque sed temporibus error explicabo dolorem, quo ducimus sit! Porro atque veniam est animi tempore quaerat ut.</p>
                        <p className="creditsHomepage"><a href="https://www.damanmatharoo.com">damanmatharoo.com</a></p>
                        <p><a className="creditsEmail" href="mailto:damanmatharoo4@gmail.com">Contact</a></p>
                    </li>
                    <li className="creditsTeamLi">
                        <img className="creditImg" src="https://ca.slack-edge.com/T02E8L5NKFV-U044PJ67L2D-9fd4f1335035-512" alt="Profile photo of app co-creator Tyler George" />
                        <h3 className="team">Tyler George</h3>
                        <p className="creditBio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste provident, inventore excepturi nesciunt neque sed temporibus error explicabo dolorem, quo ducimus sit! Porro atque veniam est animi tempore quaerat ut.</p>
                        <p className="creditsHomepage"><a href="https://www.tylergeorge.ca">tylergeorge.com</a></p>
                        <p><a className="creditsEmail" href="mailto:tylerGeorge@email.ca">Contact</a></p>
                    </li>
                    <li className="creditsTeamLi">
                        <img className="creditImg" src="https://ca.slack-edge.com/T02E8L5NKFV-U0444AVFR9U-7196a93dd413-512" alt="Profile photo of app co-creator Matt McKay" />
                        <h3 className="team">Matthew McKay</h3>
                        <p className="creditBio">Front end developer based in Toronto specializing in HTML5, CSS, JAVASCRIPT and REACT. After almost 15 years running my own construction company, I’m going  in another direction, exchanging my tool belt for a keyboard to build websites instead of homes.</p>
                        <p className="creditsHomepage"><a href="https://www.matthewmckay.com">matthewmckay.com</a></p>
                        <p><a className="creditsEmail" href="mailto:matthewmckay@gmail.com">Contact</a></p>
                    </li>
                    {/* <Outlet /> */}
                </ul>
            </div>
        </div>
    )
}

export default Credits;