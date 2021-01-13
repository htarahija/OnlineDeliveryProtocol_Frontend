import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; 
// Postavke
const apiUrl = 'http://localhost:3000';

axios.defaults.withCredentials = true;
axios.interceptors.request.use(
    config => {
      const { origin } = new URL(config.url);
      const allowedOrigins = [apiUrl];
      const token = localStorage.getItem('token');
      if (allowedOrigins.includes(origin)) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
);

const Login =  (props) => {
    const history = useHistory();

    // Login korisnika
    const Login_Backend = async () => {
        var y = document.getElementById('email').value
        var z = document.getElementById('password').value
        const requestOptions = {
            method: 'POST',
            headers: {withCredentials: true, credentials: 'include','Content-Type': 'application/json'},
            body: JSON.stringify({
                "email": y,
                "password": z
            })
        };
        const { data } = await axios.post(`${apiUrl}/login`, requestOptions.body, {headers:requestOptions.headers});
        localStorage.setItem('token.data', data)
        console.log(data);
        if(data.user.role === 'admin'){
            history.push("/adminHome");
        }else{
            history.push("/userHome");
        }
    }

    // Logout
    const log__out = async () => {

        const requestOptions = {
            method: 'GET',
            headers: {withCredentials: true, credentials: 'include','Content-Type': 'application/json'},
        };
        const { data } = await axios.get(`${apiUrl}/logout`, {headers:requestOptions.headers});
    }

    // HTML
    return (
        <div className="Login_main">
            <div className="Textbox_main">
                <div className="textbox_submain">
                    <div className="mail">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" />
                    </div>
                    <div className="pw">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                </div>
                <div className="Buttoni">
                    <button className="textbox_button" onClick={Login_Backend}>
                        Login
                    </button>
                    <button className="Log_out" onClick={log__out}>Log Out</button>
                    <Link to="/">
                        <button className="Back">Back</button>
                    </Link>
                </div>
            </div>
            <div className="Text_main">
                <h2 className="sdp">SOFTVERSKI DIZAJN PROTOKOLA</h2>
                <div className="instituions">
                    <p className="etf">Faculty of Electrical Engeneering</p>
                    <p className="dot">Department of Telecommunications</p>
                </div>
            </div>
        </div>
    );
}

export default Login;
