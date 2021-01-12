import React from 'react';
import {Link} from 'react-router-dom';

const Home = (props) => {
    return(
        <div className="Home_main">
            <div className="Buttons">
                <Link to = "/login">
                    <button classname="Login_Button">Login</button>
                </Link>
                <Link to = "/registration">
                    <button className="Registration_Button">Registration</button>
                </Link>
            </div>
            <div className="Text_main">
                <h2 className="sdp">SOFTVERSKI DIZAJN PROTOKOLA</h2>
                <p className="etf">Faculty of Electrical Engeneering</p>
                <p className="dot">Department of Telecommunications</p>
            </div>
        </div>
    );
}

export default Home;
