import axios from 'axios';
import { useEffect } from "react"
import Authorization from "./Authorization";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    useHistory
} from "react-router-dom"


export default function Profile() {
    useEffect(() => {
        let token = localStorage.getItem('token');

        axios.get('https://us-central1-js04-b4877.cloudfunctions.net/api/profile', {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        .then(response => {
                console.log('response')
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    history.push('/Authorization');
                };
            })
    }, []);

    return (
        <div>
            Profile
        </div>
    )
}