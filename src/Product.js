import Grid from '@material-ui/core/Grid';
import ProductDetails from "./ProductDetails";

export default function Product(props) {
  return (
    <div onClick={() => {
      props.onDetails(props.id);
    }}

      className="col">
      <img className="image" src={props.image} />
      <span className="text">{props.text}</span>
      <span className="price">{props.price}</span>
    </div>
  )
}