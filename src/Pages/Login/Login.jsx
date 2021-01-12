import React from 'react';
import {Link} from 'react-router-dom';

const Login = (props) => {
    return(
        <div className="Login_main">
            <div className="Textbox_main">
                <div className="textbox_submain">
                    <label htmlFor=""></label>
                    <input type="text"/>
                    <label htmlFor=""></label>
                    <input type="text"/>
                </div>
                <button className="textbox_button">

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

export default Login;
