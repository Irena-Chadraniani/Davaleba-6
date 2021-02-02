import { useEffect, useRef, useState } from "react";
import axios from 'axios';
import Profile from "./Profile";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    useHistory
  } from "react-router-dom"

  

export default function Authorization() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let history = useHistory();


    function authorization(event) {
        event.preventDefault();
        axios.post('https://us-central1-js04-b4877.cloudfunctions.net/api/login', { username, password })
            .then(response => {
                const access_token = response.data.access_token;
                localStorage.setItem('token', access_token);
                history.push("/Profile");
            })
            .catch(error => {
                alert("wrong username or password");
            })
    }

    return (
        <form action="" onSubmit={authorization}>
            <p>
                <input
                    type="text"
                    name="username"
                    placeholder="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
            </p>
            <p>
                <input
                    type="text"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </p>
            <input
                type="submit"
                onClick={authorization}
            />

        </form>
    )
}