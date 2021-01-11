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

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  let history = useHistory();
  const params = useParams();
  const page = params.page || 1;

  useEffect(() => {
    axios.get('https://us-central1-js04-b4877.cloudfunctions.net/api/products', {
      params: {
        _page: page,
        _limit: 8
      }
    })
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
    <div>
      <Grid container spacing={3}>
        {
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
        }
        <p>
          <Link to={"/ProductList/" + (page - 1)}> Previous Page </Link>
          <Link to={"/ProductList/" + (page + 1)}> Next Page </Link>
        </p>
      </Grid>
    </div>
  )
}
