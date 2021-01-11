import Product from "./Product";
import axios from 'axios';
import { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    useHistory
} from "react-router-dom"

export default function Home() {
    const [products, setProducts] = useState([]);
    let history = useHistory();


    useEffect(() => {

        axios.get('https://us-central1-js04-b4877.cloudfunctions.net/api/products?_sort=id&_order=desc&_limit=10')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    function onDetails(id) {
        history.push("./ProductDetails/" + id)
    }

    return (
        products.map((product, i) => (
            <Grid key={product.id} item xs={4}>
                <Product
                    key={product.id}
                    text={product.title}
                    id={product.id}
                    price={product.price}
                    image={product.image}
                    onDetails={onDetails}
                />
            </Grid>
        ))
    )
}
