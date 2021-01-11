import { useEffect, useRef, useState } from "react";
import Product from "./Product";
import axios from 'axios';
import Grid from '@material-ui/core/Grid';


export default function Search() {
    const [value, setValue] = useState('');
    const [products, setProducts] = useState([]);

    function search(text) {
        axios.get('https://us-central1-js04-b4877.cloudfunctions.net/api/products?q=' + text)
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    function onDetails(id) {

    }

    return (
        <div>
            <input className="input"
                type="text"
                onChange={(event) => setValue(event.target.value)}
            />
            <button className="button"
                onClick={() => {
                    search(value)
                }}>
                Search
          </button>
            <Grid container spacing={3}>
                {products.map((product, i) => (
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
                }
            </Grid>
        </div>
    )
}