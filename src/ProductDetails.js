import axios from 'axios';
import { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom"

export default function ProductDetails() {
    const [details, setDetails] = useState([]);
    const params = useParams();

    useEffect(() => {
        axios.get('https://us-central1-js04-b4877.cloudfunctions.net/api/products/' + params.id)
            .then(response => {
                setDetails(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    return (
        <div>
            <img className="image" src={details.image} />
            <span className="text">{details.title}</span>
            <span className="description">{details.description}</span>
            <span className="price">{details.price}</span>
            <span className="seller">{details.seller}</span>
        </div>
    )
}