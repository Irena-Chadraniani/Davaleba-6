import logo from './logo.svg';
import './App.css';
import ProductsList from "./ProductsList";
import Product from "./Product";
import axios from 'axios';
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
import ProductDetails from './ProductDetails';
import Home from "./Home";
import Search from "./Search";


function App() {
  return (
    <Router>
      <div>
        <ul className="Menu">
          <li className="Menu">
            <Link to="/Home">Home</Link>
          </li>
          <li className="Menu">
            <Link to="/ProductsList">Products List</Link>
          </li>
          <li className="Menu">
            <Link to="/Search">Search</Link>
          </li>
          <li className="Menu">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>

        <Switch>
        <Route path="/Search">
            <Search />
          </Route>
          <Route path="/ProductsList/:page?">
            <ProductsList />
          </Route>
          <Route path="/ProductDetails/:id">
            <ProductDetails />
          </Route>
          <Route path="/">
            <Grid container spacing={3}>
              <Home />
            </Grid>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
