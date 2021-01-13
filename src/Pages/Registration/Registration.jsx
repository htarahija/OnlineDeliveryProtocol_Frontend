import React from 'react';
import {Link} from 'react-router-dom';

const Registration = (props) => {

    return(
        <div className="Registration_main">
        <div className="Textbox_main">
            <div className="textbox_submain">
                <label for="name">Name</label>
                <input type="text" id="name"/>
                <label for="email">E-mail</label>
                <input type="email" id="email"/>
                <label for="password">Password</label>
                <input type="password" id="password"/>
            </div>
            <button className="textbox_button">
                Registration
            </button>
            <Link to = "/">
                    <button className="Back">Back</button>
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

export default Registration;
