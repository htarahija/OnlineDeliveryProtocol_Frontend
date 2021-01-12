import React, { useEffect, onClick} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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



    const Login_Backend = async () => {
        var x = document.getElementById('name').value
        var y = document.getElementById('email').value
        var y = document.getElementById('password').value
        const requestOptions = {
            method: 'POST',
            headers: {withCredentials: true, credentials: 'include','Content-Type': 'application/json'},
            body: JSON.stringify({
                "name": "Haris",
                "email": "htarahija12345@gmail.com",
                "password": "hare11111"
            })
        };
        const { data } = await axios.post(`${apiUrl}/login`, requestOptions.body, {headers:requestOptions.headers});
        console.log(data)
        localStorage.setItem('token.data', data)
        
        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }

    const bilo_koja = async () => {
        const requestOptions = {
            method: 'GET',
            headers: {withCredentials: true, credentials: 'include','Content-Type': 'application/json'},
            body: JSON.stringify({
                "name": "Haris",
                "email": "htarahija12345@gmail.com",
                "password": "hare11111"
            })
        };
        const { data } = await axios.get(`${apiUrl}/posts`, {headers:requestOptions.headers});

    }

    return (
        <div className="Login_main">
            <div className="Textbox_main">
                <div className="textbox_submain">
                    <label hmtlFor="name">Name</label>
                    <input type="text" id="name" />
                    <label hmtlFor="email">E-mail</label>
                    <input type="text" id="email" />
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" />
                </div>
                <button className="textbox_button" onClick={Login_Backend}>
                    Login
                </button>
                <Link to="/">
                    <button className="Back">Back</button>
                </Link>
            </div>
            <div className="Text_main">
                <h2 className="sdp">SOFTVERSKI DIZAJN PROTOKOLA</h2>
                <p className="etf">Faculty of Electrical Engeneering</p>
                <p className="dot">Department of Telecommunications</p>
            </div>
            <button className="cookie" onClick={bilo_koja}>Cookies</button>
        </div>
    );
}

export default Login;
