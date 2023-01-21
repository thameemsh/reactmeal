import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCardButton.module.css";
import { useContext } from "react";
import CartContext from "../../store/card-context";

const HeaderCardButton = (props) => {
  const cartContext = useContext(CartContext)
  return (
    <button className={classes.button} onClick = {props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>
        {cartContext.items.length}
      </span>
    </button>
  );
};

export default HeaderCardButton;
